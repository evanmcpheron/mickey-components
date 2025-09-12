import { publishOnChannel } from "@/helpers/dom.events";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { ValidationResult } from "../validations/common.validations";

export interface FormProxy {
  setValue: (field: string, value: MickeyObject) => void;
  getValue: (field: string) => MickeyObject;
  getFormState: () => MickeyObject;
  registerField: (fieldName: string, initialValue: MickeyObject) => void;
  deregisterField: (fieldName: string) => void;
  submitForm: (
    callback?: (data: MickeyObject, errors?: MickeyObject) => void
  ) => void;
  subscribe: (field: string, callback: (value: MickeyObject) => void) => void;
  unsubscribe: (field: string, callback: (value: MickeyObject) => void) => void;
  validationModel?: Record<string, (value: MickeyObject) => ValidationResult>;
  onFormErrorsListeners: ((errors: MickeyObject) => void)[];
  onHandleSubmitListeners: ((formData: MickeyObject) => void)[];
  onHandleUpdateListeners: ((formData: MickeyObject) => void)[];
  reset: () => void;
}

export const formProxyRegistry: Record<string, FormProxy> = {};

export const createFormProxy = ({
  formName,
  formState,
  setErrors,
  validationModel,
  onFormErrors,
  onHandleSubmit,
  onHandleUpdate,
}: {
  formName: string;
  formState: MickeyObject;
  setErrors: (errors: MickeyObject | undefined) => void;
  validationModel?: Record<string, (value: MickeyObject) => ValidationResult>;
  onFormErrors?: (errors: MickeyObject | undefined) => void;
  onHandleSubmit?: (formData: MickeyObject) => void;
  onHandleUpdate?: (formData: MickeyObject) => MickeyObject;
}): FormProxy => {
  const initialFormState = { ...formState };
  if (formProxyRegistry[formName]) {
    formProxyRegistry[formName].onFormErrorsListeners = onFormErrors
      ? [onFormErrors]
      : [];
    formProxyRegistry[formName].onHandleSubmitListeners = onHandleSubmit
      ? [onHandleSubmit]
      : [];

    return formProxyRegistry[formName];
  }

  const onFormErrorsListeners: ((errors: MickeyObject | undefined) => void)[] =
    [];
  if (onFormErrors) {
    onFormErrorsListeners.push(onFormErrors);
  }

  const onHandleSubmitListeners: ((formData: MickeyObject) => void)[] = [];
  if (onHandleSubmit) {
    onHandleSubmitListeners.push(onHandleSubmit);
  }
  const onHandleUpdateListeners: ((formData: MickeyObject) => void)[] = [];
  if (onHandleUpdate) {
    onHandleUpdateListeners.push(onHandleUpdate);
  }

  const setValue = (field: string, value: MickeyObject) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.keys(value).forEach((nestedKey) => {
        setValue(`${field}.${nestedKey}`, value[nestedKey]);
      });
    } else if (field.includes(".")) {
      const keys = field.split(".");
      let current = formState;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) {
          current[key] = {};
        }
        current = current[key];
      }

      current[keys[keys.length - 1]] = value;
    } else {
      formState[field] = value;
    }
    if (
      (formState[field] === undefined &&
        (initialFormState[field] === false ||
          initialFormState[field] === "")) ||
      (formState[field] === "" && initialFormState[field] === undefined)
    ) {
      formState[field] = initialFormState[field];
    }
    onHandleUpdateListeners.forEach((listener) =>
      listener({
        isDirty: JSON.stringify(formState) !== JSON.stringify(initialFormState),
        ...formState,
      })
    );
    notifyListeners(formName, field, value);
  };

  const getValue = (field: string) => {
    if (field.includes(".")) {
      const keys = field.split(".");
      let current = formState;

      for (let i = 0; i < keys.length; i++) {
        if (current === null || current === undefined) {
          return undefined;
        }
        current = current[keys[i]];
      }

      return current;
    } else {
      return formState[field];
    }
  };

  const getFormState = () => {
    return formState;
  };

  const registerField = (fieldName: string, initialValue: MickeyObject) => {
    if (!(fieldName in formState)) {
      formState[fieldName] = initialValue;
      initialFormState[fieldName] = initialValue;
    }
  };

  const deregisterField = (fieldName: string) => {
    delete formState[fieldName];
  };

  const submitForm = (
    callback?: (data: MickeyObject, errors?: MickeyObject) => void
  ) => {
    if (!formProxy.validationModel) {
      if (callback) callback(formState);
      return;
    }

    const newErrors: MickeyObject = {};
    let hasErrors = false;

    const validateFields = (
      data: MickeyObject,
      validationModel: MickeyObject,
      parentKey = ""
    ) => {
      Object.entries(data).forEach(([field, value]) => {
        const fullPath = parentKey ? `${parentKey}.${field}` : field;

        if (validationModel && typeof validationModel[field] === "function") {
          const error = validationModel[field](value);
          if (error) {
            newErrors[fullPath] = error;
            hasErrors = true;
          }
        } else if (
          validationModel &&
          typeof validationModel[field] === "object"
        ) {
          if (typeof value === "object" && value !== null) {
            validateFields(value, validationModel[field], fullPath);
          }
        }
      });
    };

    validateFields(formState, formProxy.validationModel);

    if (hasErrors) {
      setErrors?.(newErrors);
      publishOnChannel(`form:errors:${formName}`, newErrors);
      if (onHandleSubmitListeners && onFormErrorsListeners.length > 0) {
        try {
          onFormErrorsListeners[0](newErrors);
        } catch {
          /** */
        }
      }
      try {
        if (callback) callback?.(formState, newErrors);
      } catch {
        /** */
      }
    } else {
      setErrors?.(undefined);
      publishOnChannel(`form:errors:${formName}`, undefined);
      if (onHandleSubmitListeners && onHandleSubmitListeners.length > 0) {
        try {
          onHandleSubmitListeners[0](formState);
        } catch {
          /** */
        }
      }
      try {
        if (callback) callback?.(formState);
      } catch {
        /** */
      }
    }
  };

  const reset = () => {
    formState = { ...initialFormState };
    for (const key in formState) {
      onHandleUpdateListeners.forEach((listener) =>
        listener({
          isDirty:
            JSON.stringify(formState) !== JSON.stringify(initialFormState),
          ...formState,
        })
      );
      notifyListeners(formName, key, formState[key]);
    }
  };

  type Callback = (value: MickeyObject) => void;
  const formListeners: Record<string, Record<string, Callback[]>> = {};

  const notifyListeners = (
    formName: string,
    field: string,
    value: MickeyObject
  ) => {
    if (formListeners[formName] && formListeners[formName][field]) {
      formListeners[formName][field].forEach((callback) => callback(value));
    }
  };

  const subscribe = (field: string, callback: Callback) => {
    if (!formListeners[formName]) {
      formListeners[formName] = {};
    }
    if (!formListeners[formName][field]) {
      formListeners[formName][field] = [];
    }
    formListeners[formName][field].push(callback);
  };

  const unsubscribe = (field: string, callback: Callback) => {
    if (formListeners[formName] && formListeners[formName][field]) {
      formListeners[formName][field] = formListeners[formName][field].filter(
        (cb) => cb !== callback
      );
    }
  };

  const formProxy: FormProxy = {
    setValue,
    getValue,
    getFormState,
    registerField,
    deregisterField,
    submitForm,
    subscribe,
    unsubscribe,
    validationModel,
    onFormErrorsListeners,
    onHandleSubmitListeners,
    onHandleUpdateListeners,
    reset,
  };

  formProxyRegistry[formName] = formProxy;

  return formProxy;
};
