import type { ClickActions, DomProperties } from "@/helpers/types/base.types";
import type { BaseFonts } from "@/helpers/types/style.types";

export interface FontProperties extends DomProperties, ClickActions, BaseFonts {
  children?: React.ReactNode;
}
