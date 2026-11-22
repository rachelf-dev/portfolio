"use client";

import { useEffect } from "react";

import { projects } from "@/data/projects";

const SESSION_KEY = "portfolio-wake";
const IDLE_FALLBACK_MS = 1000;
const ABORT_AFTER_MS = 90_000;

const started = new Set<string>();

type WarmUpProps = {
  slug?: string;
};

export function WarmUp({ slug }: WarmUpProps) {
  useEffect(() => {
    const urls = wakeUrls(slug);
    if (urls.length === 0) {
      return;
    }

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const run = () => {
      if (cancelled) {
        return;
      }

      for (const url of claim(urls)) {
        ping(url);
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(run);
    } else {
      timeoutId = window.setTimeout(run, IDLE_FALLBACK_MS);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [slug]);

  return null;
}

function wakeUrls(slug?: string): string[] {
  return projects.flatMap((project) => {
    if (slug && project.slug !== slug) {
      return [];
    }

    return project.wakeUrl ? [project.wakeUrl] : [];
  });
}

function claim(urls: string[]): string[] {
  const pending: string[] = [];
  let stored: string[] = [];
  let canStore = true;

  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        stored = parsed.filter((item): item is string => typeof item === "string");
      }
    }
  } catch {
    canStore = false;
  }

  const seen = new Set(canStore ? stored : []);

  for (const url of urls) {
    if (started.has(url) || seen.has(url)) {
      continue;
    }

    started.add(url);
    seen.add(url);
    pending.push(url);
  }

  if (canStore && pending.length > 0) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify([...seen]));
    } catch {
      // The requests still run when storage cannot be written.
    }
  }

  return pending;
}

function ping(url: string) {
  try {
    const controller = new AbortController();
    const abortId = window.setTimeout(() => {
      controller.abort();
    }, ABORT_AFTER_MS);

    void fetch(url, {
      mode: "no-cors",
      cache: "no-store",
      signal: controller.signal,
    })
      .catch(() => {})
      .finally(() => {
        window.clearTimeout(abortId);
      });
  } catch {
    // Ignore.
  }
}
