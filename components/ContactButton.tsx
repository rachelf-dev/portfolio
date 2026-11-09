"use client";

type ContactButtonProps = {
  className: string;
};

export function ContactButton({ className }: ContactButtonProps) {
  function scrollToContact() {
    const section = document.getElementById("contact");
    if (!section) {
      window.location.assign("/#contact");
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    const focusOptions: FocusOptions & { focusVisible?: boolean } = {
      preventScroll: true,
      focusVisible: true,
    };
    section.focus(focusOptions);
  }

  return (
    <button type="button" className={className} onClick={scrollToContact}>
      Contact
    </button>
  );
}
