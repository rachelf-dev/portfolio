"use client";

type ContactButtonProps = {
  className: string;
};

export function ContactButton({ className }: ContactButtonProps) {
  function scrollToContact() {
    const section = document.getElementById("contact");
    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <button type="button" className={className} onClick={scrollToContact}>
      Contact
    </button>
  );
}
