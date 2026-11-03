"use client";

import { useEffect, useRef, useState } from "react";

type EmailButtonProps = {
  email: string;
  className: string;
};

const copiedMessageDurationMs = 2000;

export function EmailButton({ email, className }: EmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function showCopied() {
    setCopied(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, copiedMessageDurationMs);
  }

  function onClick() {
    try {
      const writeText = navigator.clipboard?.writeText;
      if (!writeText) {
        return;
      }

      void writeText.call(navigator.clipboard, email).then(showCopied, () => {
        // The mailto link still opens.
      });
    } catch {
      // The mailto link still opens.
    }
  }

  return (
    <a href={`mailto:${email}`} className={className} onClick={onClick}>
      <MailIcon />
      <span aria-live="polite">{copied ? "Copied!" : "Email"}</span>
      <span className="sr-only"> {email}</span>
    </a>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
