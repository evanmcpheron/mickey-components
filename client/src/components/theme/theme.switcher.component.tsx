import { useEffect, useState } from "react";
import { ButtonGroup } from "@components";

type ThemePref = "light" | "dark" | "system";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemePref>(() => {
    return (localStorage.getItem("theme") as ThemePref) || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const resolve = (p: ThemePref) =>
      p === "system" ? (mql.matches ? "dark" : "light") : p;

    const apply = () => {
      const resolved = resolve(theme);
      root.setAttribute("data-theme", resolved);
      root.style.colorScheme = resolved;
      localStorage.setItem("theme", theme);
    };

    apply();
    if (theme === "system") {
      mql.addEventListener?.("change", apply);
      return () => mql.removeEventListener?.("change", apply);
    }
  }, [theme]);

  return (
    <ButtonGroup value={theme} onChange={(v) => setTheme(v as ThemePref)}>
      <ButtonGroup.Button value="light">Light</ButtonGroup.Button>
      <ButtonGroup.Button value="dark">Dark</ButtonGroup.Button>
      <ButtonGroup.Button value="system">System</ButtonGroup.Button>
    </ButtonGroup>
  );
};
