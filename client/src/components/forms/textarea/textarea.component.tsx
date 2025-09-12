import React, {
  type ChangeEvent,
  type FocusEvent,
  useState,
  useEffect,
} from "react";
import { IconWrapper, InputComponent, InputWrapper } from "./textarea.styled";
import type { TextareaProps } from "./textarea.types";
import { useForm, useFormName } from "@/components";
import { XmarkIcon } from "@/assets/icons/xmark.component";

export const Textarea: React.FC<TextareaProps> = ({
  onBlur,
  onFocus,
  onChange,
  onInput,
  placeholder,
  defaultValue,
  disabled,
  style,
  className,
  clear = false,
  height,
  autoComplete = "off",
  name,
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue || ""
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const formName = useFormName();
  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  useEffect(() => {
    registerField(name, defaultValue);

    const handleValueChange = (newValue: string) => {
      setInternalValue(newValue || "");
    };

    if (formName) {
      subscribe(name, handleValueChange);
    }

    return () => {
      deregisterField(name);
      if (formName) {
        unsubscribe(name, handleValueChange);
      }
    };
  }, [formName, name]);

  useEffect(() => {
    setInternalValue(defaultValue || "");
  }, [defaultValue]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value || "");
    setValue(name, e.target.value);
    if (onChange) onChange(e);
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onInput) onInput(e);
  };

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const clearInput = () => {
    setInternalValue("");
    setValue(name, "");
    if (onChange)
      onChange({ target: { value: "" } } as ChangeEvent<HTMLTextAreaElement>);
  };

  return (
    <InputWrapper data-focus={isFocused} disabled={disabled}>
      <InputComponent
        height={height}
        disabled={disabled}
        autoComplete={autoComplete}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        onInput={handleInput}
        placeholder={placeholder}
        style={style}
        className={className}
        value={internalValue}
        name={name}
      />
      {clear && internalValue && (
        <IconWrapper>
          <XmarkIcon size="large" onPress={clearInput} type="solid" />
        </IconWrapper>
      )}
    </InputWrapper>
  );
};
