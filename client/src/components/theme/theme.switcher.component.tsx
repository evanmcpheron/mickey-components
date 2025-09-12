import { useEffect, useState } from "react";
import { ButtonGroup } from "@components";
import type { ButtonGroupOption } from "../actions/button-group/button.group.types";
import { localStorageKeys, ROOT } from "@/helpers/consts";

type ThemePref = "light" | "dark" | "system";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemePref>(() => {
    return (
      (localStorage.getItem(localStorageKeys.MODE_KEY) as ThemePref) || "system"
    );
  });

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const resolve = (p: ThemePref) =>
      p === "system" ? (mql.matches ? "dark" : "light") : p;

    const apply = () => {
      const resolved = resolve(theme);
      ROOT.setAttribute("data-theme", resolved);
      ROOT.style.colorScheme = resolved;
      localStorage.setItem(localStorageKeys.MODE_KEY, theme);
    };

    apply();
    if (theme === "system") {
      mql.addEventListener?.("change", apply);
      return () => mql.removeEventListener?.("change", apply);
    }
  }, [theme]);

  const themes: ButtonGroupOption[] = [
    {
      key: "light",
      label: "Light",
      default: theme === "light",
    },
    {
      key: "dark",
      label: "Dark",
      default: theme === "dark",
    },
    {
      key: "system",
      label: "System",
      default: theme === "system",
    },
  ];

  return (
    <ButtonGroup
      role="primarylight"
      options={themes}
      name={"mode"}
      onSelected={(v) => setTheme(v.key as ThemePref)}
    ></ButtonGroup>
  );
};
