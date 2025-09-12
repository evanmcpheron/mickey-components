import { formProxyRegistry } from "./form.proxy";
import type { MickeyObject } from "@/helpers/types/base.types";

export const normalCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/^./, (char) => char.toUpperCase());
};

export const getFirstErrorMessage = (errors: MickeyObject): string | null => {
  for (const key in errors) {
    if (errors[key]?.message) {
      return `${normalCase(key)}: ${String(errors[key].message)}`;
    }
    if (typeof errors[key] === "object") {
      const nestedError = getFirstErrorMessage(errors[key] as MickeyObject);
      if (nestedError) {
        return nestedError;
      }
    }
  }
  return null;
};

export const hasProperties = (obj: object): boolean => {
  return Object.keys(obj || {}).length > 0;
};

export const getErrorMessage = (errors: MickeyObject, name: string) => {
  if (hasProperties(errors)) {
    const errorPath: MickeyObject = name
      .split(".")
      .reduce((obj: MickeyObject, key) => (obj ? obj[key] : undefined), errors);

    const errorMsg = errorPath?.message || undefined;
    if (errorMsg) {
      return errorMsg;
    }
  }
  return undefined;
};

export const hasOwnProp = (obj: object, property: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, property);
};

export const validateInternalComponent = (
  formName: string | undefined,
  name: string | undefined,
  value: string | undefined
): string | undefined => {
  if (!formName || !name || !value) {
    return undefined;
  }

  const formProxy = formProxyRegistry[formName];
  if (formProxy && formProxy.validationModel) {
    const validateFunction = formProxy.validationModel[name];
    if (validateFunction) {
      const errorMessage = validateFunction(value);
      if (errorMessage) {
        return errorMessage;
      }
    }
  }
  return undefined;
};

export const getFirstPropertyValue = <T extends Record<string, MickeyObject>>(
  obj: T
): T[keyof T] | "" => {
  const keys = Object.keys(obj) as Array<keyof T>;
  return keys.length > 0 ? obj[keys[0]] : "";
};
