import React, { useEffect, useRef, useState } from "react";
import type { ToggleSwitchProps } from "./toggle-switch.types";
import { Container, Slider, SwitchLabel } from "./toggle-switch.styled";
import { useFormName } from "../form/form.context";
import type { MickeyObject } from "@/helpers/types/base.types";
import { useForm } from "@/components";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onBlur,
  onFocus,
  onChange,
  defaultValue,
  selected,
  name,
  style,
  className,
  label,
  active,
  labelPosition = "left",
  disabled,
  baseClassName,
  ...more
}) => {
  const domRef: MickeyObject = useRef(null);
  const { onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const [loading, setLoading] = useState<boolean>(true);
  const formName = useFormName();
  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  const [toggled, setToggled] = useState<boolean>(
    selected ?? defaultValue ?? false
  );

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selected !== undefined && !loading) {
      onChange?.(selected);
      setToggled(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = Boolean(toggled).toString();
    }
  }, [toggled]);

  useEffect(() => {
    registerField(name, defaultValue);

    const handleValueChange = (newValue: boolean) => {
      setToggled(newValue);
    };

    if (formName) {
      subscribe(name, handleValueChange);
    }

    setLoading(false);

    return () => {
      deregisterField(name);
      if (formName) {
        unsubscribe(name, handleValueChange);
      }
    };
  }, [
    formName,
    name,
    defaultValue,
    registerField,
    deregisterField,
    subscribe,
    unsubscribe,
  ]);

  const handleToggle = () => {
    if (disabled) return;
    setToggled((prev) => {
      const newValue = !prev;

      setValue(name, newValue);
      // Move onChange to a timeout to avoid immediate state updates during render
      setTimeout(() => onChange?.(newValue), 0);
      return newValue;
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

  usePointerEvent({ element: domRef, active, ...pointerEvents });

  const internalProperties = removeUndefined({
    style: { ...(style || {}) },
    labelPosition,
    active,
    disabled,
  });

  return (
    <Container
      ref={domRef}
      disabled={disabled}
      className={baseClassName || undefined}
    >
      <input ref={hiddenInputRef} type="hidden" name={name} />
      {label && labelPosition === "left" && (
        <SwitchLabel
          {...internalProperties}
          className={`mickey-toggle-label ${className || ""} ${
            toggled ? "mickey-is-checked" : ""
          }`}
        >
          {label}
        </SwitchLabel>
      )}
      <Slider
        toggled={toggled}
        {...(disabled && { "data-disabled": "true" })}
      />
      {label && labelPosition === "right" && (
        <SwitchLabel
          {...internalProperties}
          className={`mickey-toggle-label ${className || ""} ${
            toggled ? "mickey-is-checked" : ""
          }`}
        >
          {label}
        </SwitchLabel>
      )}
    </Container>
  );
};
