/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { hasProperties } from "./form.helpers";
import type { MickeyObject } from "@/helpers/types/base.types";
import { useSubscriber } from "@/helpers/hooks/useSubscriber.hook";

interface FormContextProps {
  formName: string;
  formErrors: MickeyObject;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = (): FormContextProps | undefined => {
  return useContext(FormContext);
};

export const useFormName = (): string => {
  const context = useContext(FormContext);
  return context?.formName || "";
};

export const useFormErrors = ():
  | { form?: string; errors?: MickeyObject | undefined }
  | undefined => {
  const context = useContext(FormContext);
  const [formErrors, setFormErrors] = useState<MickeyObject>(undefined);

  useSubscriber(
    `aliquot:form:errors:${context?.formName}`,
    (errors: MickeyObject) => {
      try {
        if (hasProperties(errors || {})) {
          setFormErrors({
            form: context?.formName || "",
            errors: errors || {},
          });
          return { form: context?.formName || "", errors: errors || {} };
        } else {
          setFormErrors(undefined);
        }
      } catch {
        setFormErrors(undefined);
      }
    }
  );

  return formErrors;
};

interface FormProviderProps {
  formName: string;
  children: React.ReactNode;
  formErrors: MickeyObject;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  formName,
  children,
  formErrors,
}) => {
  return (
    <FormContext.Provider value={{ formName, formErrors }}>
      {children}
    </FormContext.Provider>
  );
};
