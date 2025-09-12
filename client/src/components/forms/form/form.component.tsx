import React, { useEffect, useState, useCallback } from "react";

import { FormProvider } from "./form.context";
import { getFirstPropertyValue, hasProperties } from "./form.helpers";
import type { MickeyObject } from "@/helpers/types/base.types";
import { FormContainer } from "./form.styled";
import { useForm } from "./useForm.hook";
import type { FormProps } from "./form.types";

const FormComponent = <T extends MickeyObject>({
  name,
  children,
  defaultValues = {} as T,
  editValues = {} as Partial<T>,
  validationModel,
  className,
  style,
}: FormProps<T>) => {
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [formErrors, setFormErrors] = useState<MickeyObject | undefined>({});

  console.log(
    `🚀 ~ form.component.tsx:23 ~ FormComponent ~ notificationMessage: \n`,
    notificationMessage
  );

  const formProxy = useForm({
    formName: name,
    defaultValues,
    validationModel,
    onFormErrors: (errors) => {
      if (errors && hasProperties(errors)) {
        setFormErrors({ form: name, errors: errors });
        setNotificationMessage(getFirstPropertyValue(errors));
      } else {
        setFormErrors(undefined);
      }
    },
    onHandleSubmit: () => {},
  });

  useEffect(() => {
    if (editValues && formProxy) {
      const setNestedValues = (obj: MickeyObject, parentKey = "") => {
        Object.entries(obj).forEach(([key, value]) => {
          const fullKey = parentKey ? `${parentKey}.${key}` : key;

          if (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
          ) {
            setNestedValues(value, fullKey);
          } else {
            formProxy.setValue(fullKey, value);
          }
        });
      };

      setNestedValues(editValues);
    }

    return () => {
      formProxy?.deregisterField(name);
    };
  }, [editValues, formProxy, name]);

  const internalProperties = useCallback(
    () => ({
      className: `mickey-form ${className || ""}`,
      style: { ...(style || {}) },
      id: name,
    }),
    [className, name, style]
  );

  return (
    <>
      {/* {showNotification && (
				<Notification
					message={notificationMessage}
					bgColor={Color.redDark}
					color={Color.white}
					position="top"
					duration={3000}
					isPermanent={false}
					onDismiss={() => setShowNotification(false)}
				/>
			)} */}
      <FormProvider formName={name} formErrors={formErrors}>
        <FormContainer {...internalProperties()}>{children}</FormContainer>
      </FormProvider>
    </>
  );
};

export const Form = React.memo(FormComponent);
