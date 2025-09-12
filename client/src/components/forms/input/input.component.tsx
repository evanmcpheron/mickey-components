import {
  type ChangeEvent,
  type FocusEvent,
  useState,
  useEffect,
  useRef,
  type KeyboardEvent,
} from "react";
import {
  IconWrapper,
  InputComponent,
  InputWrapper,
  SearchIconWrapper,
} from "./input.styled";
import { hasOwnProp, validateInternalComponent } from "../form/form.helpers";
import { useFormName, useFormErrors } from "../form/form.context";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { InputProps } from "./input.types";
import { useForm } from "@/components";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { EyeIcon } from "@/assets/icons/eye.component";
import { MagnifyingGlassIcon } from "@/assets/icons/magnifying-glass.component";
import { EyeSlashIcon } from "@/assets/icons/eye-slash.component";
import { CalculatorIcon } from "@/assets/icons/calculator.component";
import { XmarkIcon } from "@/assets/icons/xmark.component";
import { SquareExclamationIcon } from "@/assets/icons/square-exclamation.component";

export const Input: React.FC<InputProps> = ({
  width,
  onBlur,
  onFocus,
  onChange,
  onInput,
  onIconClick,
  placeholder,
  defaultValue,
  disabled,
  name,
  style,
  className,
  type = "text",
  clear = false,
  autoComplete = "off",
  minNumber,
  maxNumber,
  ignoreError,
  value,
  readOnly,
  numberFormat,
  ...more
}) => {
  const formName = useFormName();
  const formErrors = useFormErrors();
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: false, ...pointerEvents });

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [localError, setLocalError] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<string>(
    value ?? defaultValue ?? ""
  );

  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  useEffect(() => {
    registerField(name, defaultValue);

    const handleValueChange = (newValue: MickeyObject) => {
      setInputValue(newValue ?? "");
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
    if (!formName) {
      setInputValue(value ?? "");
    }
  }, [value, formName]);

  useEffect(() => {
    setInputValue(defaultValue ?? "");
  }, [defaultValue]);

  useEffect(() => {
    const validateMessage = validateInternalComponent(
      formName,
      name,
      inputValue
    );
    if (validateMessage) {
      setLocalError(validateMessage);
      setShowError(true);
    } else {
      setLocalError(undefined);
      setShowError(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (formErrors && formErrors.form === formName) {
      if (hasOwnProp(formErrors.errors, name)) {
        setLocalError(formErrors.errors[name]);
        setShowError(true);
      } else {
        setLocalError(undefined);
        setShowError(false);
      }
    } else {
      setLocalError(undefined);
      setShowError(false);
    }
  }, [formErrors]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value ?? "";

    if (type === "number") {
      newValue = newValue.replace(/[^0-9.-]/g, "");
      if (newValue) {
        newValue = newValue.replace(/(?!^)-/g, "");
      }
    }

    if (
      type === "number" &&
      (minNumber !== undefined || maxNumber !== undefined)
    ) {
      const inputChangeValue = parseFloat(newValue);

      if (isNaN(inputChangeValue)) {
        setLocalError("Value must be a number");
        setInputValue("");
        return;
      }

      if (inputChangeValue < (minNumber ?? -Infinity)) {
        setLocalError(`Value must be greater than ${minNumber}`);
        setInputValue((minNumber ?? 0).toString());
        return;
      }

      if (inputChangeValue > (maxNumber ?? Infinity)) {
        setLocalError(`Value must be less than ${maxNumber}`);
        setInputValue((maxNumber ?? 0).toString());
        return;
      }
    }

    if (type === "number" && numberFormat) {
      if (numberFormat === "INT") {
        newValue = newValue.replace(/^0+(?=\d)/, "").replace(/\D/g, "");
      } else if (numberFormat === "FLOAT") {
        newValue = newValue.replace(/[^0-9.]/g, "");
        if ((newValue.match(/\./g) || []).length > 1) {
          newValue = newValue.substring(0, newValue.lastIndexOf("."));
        }
      }
    }
    if (type === "numeric") {
      newValue = newValue.replace(/^0+(?=\d)/, "").replace(/[^0-9-]/g, "");
    }

    setInputValue(newValue ?? "");
    setValue(name, newValue);

    if (onChange) onChange(e);

    const errorMsg = validateInternalComponent(formName, name, newValue);
    if (errorMsg) {
      setLocalError(errorMsg);
      setShowError(true);
    } else {
      setLocalError(undefined);
      setShowError(false);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (onInput) onInput(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const clearInput = () => {
    setInputValue("");
    setValue(name, "");
    if (onChange)
      onChange({ target: { value: " " } } as ChangeEvent<HTMLInputElement>);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const regex = new RegExp(
        /^(-?\d*\.?\d*)$|^(Backspace|Tab|Delete|ArrowLeft|ArrowRight|Minus)$/
      );
      if (!event.key.match(regex)) {
        event.preventDefault();
      }
    }
  };

  const inputType = () => {
    if (type === "password" && showPassword) {
      return "text";
    }
    if (type === "calculation") {
      return "number";
    }
    if (type === "number") {
      return "text";
    }
    return type;
  };

  return (
    <>
      <InputWrapper
        className={className}
        style={width ? { width: width } : undefined}
        data-focus={!readOnly && isFocused}
        data-error={!ignoreError && showError}
        disabled={disabled}
      >
        {type === "search" && (
          <SearchIconWrapper>
            <MagnifyingGlassIcon size="regular" type="regular" />
          </SearchIconWrapper>
        )}
        <InputComponent
          readOnly={readOnly}
          disabled={disabled}
          autoComplete={autoComplete}
          type={inputType()}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          style={style}
          className={`${className} ${!ignoreError && showError ? "error" : ""}`}
          ref={domRef}
          value={inputValue}
          name={name}
        />
        {type === "password" && showPassword && (
          <IconWrapper>
            <EyeIcon
              size="large"
              type="regular"
              onPress={togglePasswordVisibility}
            />
          </IconWrapper>
        )}

        {type === "password" && !showPassword && (
          <IconWrapper>
            <EyeSlashIcon
              size="large"
              type="regular"
              onPress={togglePasswordVisibility}
            />
          </IconWrapper>
        )}

        {type === "calculation" && (
          <IconWrapper>
            <CalculatorIcon
              size="large"
              type={"regular"}
              onPress={onIconClick}
            />
          </IconWrapper>
        )}
        {clear && inputValue !== "" && (
          <IconWrapper>
            <XmarkIcon size="large" type="regular" onPress={clearInput} />
          </IconWrapper>
        )}
        {!ignoreError && showError && localError && (
          <IconWrapper>
            {/* <Tooltip
              text={localError}
              position="left"
              arrowPosition="right"
              bgColor={Color.redDark}
              color={Color.white}
              maxWidth="400px"
            > */}
            <SquareExclamationIcon size="large" type="regular" />
            {/* </Tooltip> */}
          </IconWrapper>
        )}
      </InputWrapper>
    </>
  );
};
