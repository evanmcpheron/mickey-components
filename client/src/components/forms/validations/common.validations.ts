import type { MickeyObject } from "@/helpers/types/base.types";
import dayjs from "dayjs";
export type ValidationResult = MickeyObject | undefined;

export const OptionalField = (): ValidationResult => undefined;

export const validateData = <T extends Record<string, MickeyObject>>(
  data: T,
  validationModel: Record<keyof T, (value: MickeyObject) => ValidationResult>
): T & {
  modelValidationErrors: boolean;
  validationErrors: Record<string, ValidationResult>;
} => {
  const errors: Record<string, ValidationResult> = {};
  let hasErrors = false;

  const validateNestedData = (
    nestedData: MickeyObject,
    nestedValidationModel: MickeyObject,
    parentKey = ""
  ) => {
    Object.keys(nestedValidationModel).forEach((key) => {
      const field = key as keyof T;
      const validator = nestedValidationModel[field];
      const fullPath = parentKey ? `${parentKey}.${key}` : key;
      const value = nestedData[field];

      if (typeof validator === "function") {
        const error = validator(value);
        if (error) {
          hasErrors = true;
          errors[fullPath] = error;
        }
      } else if (
        typeof validator === "object" &&
        typeof value === "object" &&
        value !== null
      ) {
        validateNestedData(value, validator, fullPath);
      }
    });
  };

  validateNestedData(data, validationModel);

  return {
    ...data,
    modelValidationErrors: hasErrors,
    validationErrors: errors,
  };
};

export const validateObject = (
  valueOrModel:
    | MickeyObject
    | Record<string, (value: MickeyObject) => ValidationResult>,
  validationModel?: Record<string, (value: MickeyObject) => ValidationResult>
): {
  modelValidationErrors: boolean;
  validationErrors: Record<string, ValidationResult>;
} => {
  // If only a validation model is provided, expect the return of a validation function
  if (typeof valueOrModel === "object" && !validationModel) {
    return validateData(
      valueOrModel as MickeyObject,
      valueOrModel as Record<string, (value: MickeyObject) => ValidationResult>
    );
  }
  // If both value and validation model are provided, validate immediately
  else if (validationModel) {
    return validateData(valueOrModel as MickeyObject, validationModel);
  }

  // Return default structure if nothing valid is passed
  return {
    modelValidationErrors: false,
    validationErrors: {},
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? undefined : "Invalid email address";
};

export const validateNumber = (value: string): ValidationResult => {
  return !isNaN(Number(value)) ? undefined : "Must be a valid number";
};

export const validateDate = (
  date: string,
  dateFormat: string = "YYYY-MM-DD"
): ValidationResult => {
  const isValid = dayjs(date, dateFormat, true).isValid();
  return isValid ? undefined : `Invalid date format (${dateFormat})`;
};

export const validateURL = (url: string): ValidationResult => {
  try {
    new URL(url);
    return undefined;
  } catch (_) {
    return "Invalid URL";
  }
};

export const validateMinLength = (
  value: string,
  minLength: number
): ValidationResult => {
  return value.length >= minLength
    ? undefined
    : `Must be at least ${minLength} characters`;
};

export const validateMaxLength = (
  value: string,
  maxLength: number
): ValidationResult => {
  return value.length <= maxLength
    ? undefined
    : `Must be no more than ${maxLength} characters`;
};

export const validateContains = (
  value: string,
  substring: string
): ValidationResult => {
  return value.includes(substring) ? undefined : `Must contain "${substring}"`;
};

export const validateArrayLength = (
  array: MickeyObject[],
  minLength: number,
  maxLength: number
): ValidationResult => {
  if (array.length < minLength) {
    return `Array must have at least ${minLength} items`;
  }
  if (array.length > maxLength) {
    return `Array must have no more than ${maxLength} items`;
  }
  return undefined;
};

export const validateRequired = (value: MickeyObject): ValidationResult => {
  return value ? undefined : "This field is required";
};

export const validateNumberRange = (
  value: number,
  min: number,
  max: number
): ValidationResult => {
  if (value < min) {
    return `Must be at least ${min}`;
  }
  if (value > max) {
    return `Must be no more than ${max}`;
  }
  return undefined;
};

// Convert validation objects to a string for error responses
export const validationErrorsToString = (
  validationErrors: Record<string, ValidationResult>
): string => {
  return Object.entries(validationErrors)
    .map(
      ([field, error]) =>
        `${field}: ${typeof error === "string" ? error : "Invalid value"}`
    )
    .join(", ");
};
