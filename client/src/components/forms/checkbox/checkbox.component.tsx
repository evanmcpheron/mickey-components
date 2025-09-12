import React, { useRef, useState, useEffect } from "react";
import {
  CheckboxContainer,
  CheckboxLabel,
  Checked,
  Container,
} from "./checkbox.styled";
import { type CheckboxProps } from "./checkbox.types";
import { useFormName } from "../form/form.context";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { useForm } from "../form";
import type { MickeyObject } from "@/helpers/types/base.types";

export const Checkbox: React.FC<CheckboxProps> = ({
  onBlur,
  onFocus,
  onChange,
  checked,
  defaultValue = false,
  errorMessage,
  dirtyMessage,
  name,
  id,
  style,
  className,
  label,
  active,
  labelPosition = "left",
  disabled,
  labelNoWrap,
  ...more
}) => {
  const formName = useFormName();

  const domRef: MickeyObject = useRef(null);
  const [internalChecked, setInternalChecked] = useState(
    checked ?? defaultValue
  );

  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  const { onOut, onMove, onUp, onDown, onOver, groupId } = more;

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hiddenInputRef && hiddenInputRef.current) {
      hiddenInputRef.current.value = internalChecked?.toString();
    }
  }, [internalChecked]);

  const handleToggle = () => {
    if (disabled) return;
    setInternalChecked((prevState) => {
      const newCheckedState = !prevState;
      setValue(name, newCheckedState);
      queueMicrotask(() => {
        onChange?.(newCheckedState);
      });
      return newCheckedState;
    });
  };

  const pointerEvents = {
    onPress: handleToggle,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  useEffect(() => {
    registerField(name, defaultValue);
    console.log("hit");

    if (formName) {
      subscribe(name, () => {});
    }

    return () => {
      deregisterField(name);

      if (formName) {
        unsubscribe(name, () => {});
      }
    };
  }, [formName, name]);

  useEffect(() => {
    if (!formName) {
      setInternalChecked(checked ?? false);
    }
  }, [checked, formName]);

  const internalProperties = removeUndefined({
    style: {
      ...(style || {}),
      ...(labelNoWrap ? { whiteSpace: "nowrap" } : {}),
    },
    labelPosition,
    active,
    disabled,
  });

  return (
    <Container ref={domRef} disabled={disabled}>
      <input
        ref={hiddenInputRef}
        disabled={disabled}
        type="hidden"
        name={`${name}`}
      />
      {label && labelPosition === "left" && (
        <CheckboxLabel
          {...internalProperties}
          disabled={disabled}
          className={`mickey-checkbox-label ${className ? className : ""} ${
            internalChecked ? "mickey-is-checked" : ""
          }`}
        >
          {label}
        </CheckboxLabel>
      )}
      <CheckboxContainer
        {...internalProperties}
        className={`mickey-checkbox ${className ? className : ""} ${
          internalChecked ? "mickey-is-checked" : ""
        }`}
        onClick={handleToggle}
      >
        <Checked
          className={`mickey-check-icon ${
            internalChecked ? "mickey-is-checked" : ""
          }`}
        />
      </CheckboxContainer>
      {label && labelPosition === "right" && (
        <CheckboxLabel
          {...internalProperties}
          disabled={disabled}
          className={`mickey-checkbox-label ${className ? className : ""} ${
            internalChecked ? "mickey-is-checked" : ""
          }`}
        >
          {label}
        </CheckboxLabel>
      )}
    </Container>
  );
};
