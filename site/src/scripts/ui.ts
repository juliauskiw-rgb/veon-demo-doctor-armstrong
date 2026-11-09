// Small UI islands: mobile menu (modal dialog), bottom call bar after the hero actions leave the screen.
const menu = document.querySelector<HTMLDialogElement>("#menu");
const burger = document.querySelector<HTMLButtonElement>(".site-header__burger");

if (menu && burger) {
  let viaLink = false;
  const close = () => {
    if (menu.open) menu.close();
  };
  burger.addEventListener("click", () => {
    if (menu.open) {
      close();
      return;
    }
    menu.showModal();
    burger.setAttribute("aria-expanded", "true");
  });
  menu.addEventListener("close", () => {
    burger.setAttribute("aria-expanded", "false");
    // after an anchor the page scrolls to the section; focus goes there instead of back to the burger
    if (!viaLink) burger.focus();
    viaLink = false;
  });
  menu.querySelectorAll<HTMLElement>("[data-close]").forEach((el) =>
    el.addEventListener("click", (e) => {
      const hash = el.getAttribute("href");
      const target = hash && hash.startsWith("#") ? document.querySelector<HTMLElement>(hash) : null;
      viaLink = Boolean(target);
      close();
      if (target && hash) {
        e.preventDefault();
        const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
          history.replaceState(null, "", hash);
        });
      }
    }),
  );
  window.matchMedia("(min-width: 1200px)").addEventListener("change", (e) => {
    if (e.matches) close();
  });
}

const bar = document.querySelector<HTMLElement>("[data-mobile-bar]");
const heroActions = document.querySelector<HTMLElement>("[data-hero-actions]");
if (bar && heroActions && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    ([entry]) => {
      const passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      bar.classList.toggle("is-shown", passed);
    },
    { threshold: 0 },
  );
  io.observe(heroActions);
} else if (bar) {
  bar.classList.add("is-shown");
}

// Staircase line draws itself once the steps enter the screen (concept §8.2, effect 2).
const stairs = document.querySelector<HTMLElement>("[data-stairs]");
if (stairs) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    stairs.classList.add("is-drawn");
  } else {
    const so = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        stairs.classList.add("is-drawn");
        so.disconnect();
      }
    }, { threshold: 0.2 });
    so.observe(stairs);
  }
}
