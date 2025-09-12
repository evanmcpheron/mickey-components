import type { MickeyObject } from "@/helpers/types/base.types";
import { createFormProxy, type FormProxy } from "./form.proxy";
import { hasProperties } from "./form.helpers";

interface UseFormProps {
  formName?: string;
  defaultValues?: MickeyObject;
  validationModel?: Record<string, (value: MickeyObject) => string | null>;
  onFormErrors?: (errors: MickeyObject) => void;
  onHandleSubmit?: (formData: MickeyObject) => void;
  onHandleUpdate?: (formData: MickeyObject) => MickeyObject;
}

const noopProxy: FormProxy = {
  setValue: () => {},
  getValue: () => undefined,
  getFormState: () => ({}),
  registerField: () => {},
  deregisterField: () => {},
  submitForm: () => {},
  subscribe: () => {},
  unsubscribe: () => {},
  onFormErrorsListeners: [],
  onHandleSubmitListeners: [],
  onHandleUpdateListeners: [],
  reset: () => {},
};

export const useForm = ({
  formName,
  defaultValues = {},
  validationModel,
  onFormErrors,
  onHandleSubmit,
  onHandleUpdate,
}: UseFormProps): FormProxy => {
  if (!formName) {
    return noopProxy;
  }

  return createFormProxy({
    formName,
    formState: defaultValues,
    setErrors: (errors: MickeyObject | undefined) => {
      if (hasProperties(errors)) {
        onFormErrors?.(errors);
      } else {
        onFormErrors?.(undefined);
      }
    },
    validationModel,
    onFormErrors,
    onHandleSubmit,
    onHandleUpdate,
  });
};
