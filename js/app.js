(function () {
  const root = document.documentElement;
  const storageKey = "portfolio-theme";
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");

  function preferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }

    if (label) {
      label.textContent = theme === "dark" ? label.dataset.dark : label.dataset.light;
    }
  }

  applyTheme(preferredTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }
})();
