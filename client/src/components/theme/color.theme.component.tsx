import { useEffect, useState } from "react";
import { ButtonGroup } from "../actions";
import type { ButtonGroupOption } from "../actions/button-group/button.group.types";
import { localStorageKeys, ROOT } from "@/helpers/consts";

type ColorSchemes =
  | "default"
  | "sunset"
  | "nordic"
  | "arcade"
  | "earth"
  | "ocean";

export const ColorThemeSwitcher = () => {
  const [colorScheme, setColorScheme] = useState<ColorSchemes>(
    (localStorage.getItem("app.color_scheme") as ColorSchemes) || "default"
  );

  const updateColorSchemes = (schemeName: ColorSchemes) => {
    ROOT.setAttribute("data-color-scheme", schemeName);
    localStorage.setItem(localStorageKeys.COLOR_SCHEME_KEY, schemeName);
    setColorScheme(schemeName);
  };

  useEffect(() => {}, [
    localStorage.getItem("app.color_scheme") as ColorSchemes,
  ]);

  const colorSchemes = [
    { key: "default", label: "Default", default: colorScheme === "default" },
    { key: "sunset", label: "Sunset", default: colorScheme === "sunset" },
    { key: "nordic", label: "Nordic", default: colorScheme === "nordic" },
    { key: "arcade", label: "Arcade", default: colorScheme === "arcade" },
    { key: "earth", label: "Earth", default: colorScheme === "earth" },
    { key: "ocean", label: "Ocean", default: colorScheme === "ocean" },
  ];

  return (
    <ButtonGroup
      name="color-schemes"
      options={colorSchemes}
      onSelected={(value: ButtonGroupOption) =>
        updateColorSchemes(value.key as ColorSchemes)
      }
    ></ButtonGroup>
  );
};
