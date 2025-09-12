import type { DomProperties, MickeyObject } from "@/helpers/types/base.types";
import type { ReactNode } from "react";
import type { ValidationResult } from "./form.proxy";

export interface FormErrors<T extends MickeyObject> {
  firstError: string | null;
  allErrors: MickeyObject<T>;
}

export interface FormProps<T extends MickeyObject> extends DomProperties {
  name: string;
  children: ReactNode;
  defaultValues?: MickeyObject<T>;
  editValues?: Partial<T>;
  validationModel?: Record<string, (value: MickeyObject) => ValidationResult>;
}
