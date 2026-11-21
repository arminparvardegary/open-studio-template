"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Switches the page between dark and light while you scroll, based on the
 * `data-theme` attribute of the section in the middle of the screen.
 * Also turns on the "difference" blend for the header while it is over the
 * home-page project cards.
 */
export function ThemeController() {
  const pathname = usePathname();

  useEffect(() => {
    const themed = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]"));
    const header = document.querySelector<HTMLElement>(".topbar");
    const projs = document.getElementById("projs");

    const update = () => {
      const mid = window.innerHeight * 0.5;
      let theme = "dark";
      for (const s of themed) {
        const r = s.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) theme = s.dataset.theme ?? "dark";
      }
      document.body.classList.toggle("light", theme === "light");
      if (header && projs) {
        const r = projs.getBoundingClientRect();
        header.classList.toggle("is-blend", r.top < 80 && r.bottom > 0);
      } else if (header) {
        header.classList.remove("is-blend");
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.body.classList.remove("light");
    };
  }, [pathname]);

  return null;
}
