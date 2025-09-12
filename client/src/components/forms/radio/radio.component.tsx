import React, { useEffect, useRef, useState } from "react";
import type { RadioOption, RadioProps } from "./radio.types";
import { OnPress } from "@/components/actions/press/press.component";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { useFormName, useForm } from "../form";
import type { MickeyObject } from "@/helpers/types/base.types";
import {
  RadioGroup,
  RadioEffectsContainer,
  RadioLabel,
  RadioContainer,
  Container,
} from "./radio.styled";

const renderRadioOptions = (
  options: RadioOption[],
  selectedValue: string | number | boolean | undefined,
  handleChange: (value: string | number | boolean) => void,
  internalProperties: MickeyObject,
  name: string,
  handleOnChange?: (value: string | number | boolean) => void,
  labelPosition?: "left" | "right",
  className?: string
): React.ReactElement[] => {
  return options.map((option: RadioOption) => (
    <RadioGroup
      key={`radio-${name}-${option.value}`}
      {...(option.disabled && { "data-disabled": "true" })}
    >
      <OnPress
        {...(!option.disabled && {
          onPress: () => {
            handleChange(option.value);
            if (handleOnChange) {
              handleOnChange(option.value);
            }
          },
        })}
      >
        <RadioEffectsContainer>
          <input
            className="mickey_hidden_radiobox"
            type="radio"
            name={name}
            checked={selectedValue === option.value}
            onChange={() => {
              handleChange(option.value);
            }}
          />
          {option.label && labelPosition === "left" && (
            <RadioLabel
              {...internalProperties}
              className={`mickey-radiobox-label mickey-radiobox-label-left ${
                className ? className : ""
              } ${
                selectedValue === option.value ? "mickey-is-rdo-checked" : ""
              }`}
            >
              {option.label}
            </RadioLabel>
          )}
          <RadioContainer
            {...internalProperties}
            className={`mickey-radiobox ${className ? className : ""} ${
              selectedValue === option.value ? "mickey-is-rdo-checked" : ""
            }`}
          />

          {option.label && labelPosition === "right" && (
            <RadioLabel
              {...internalProperties}
              className={`mickey-radiobox-label mickey-radiobox-label-right ${
                className ? className : ""
              } ${
                selectedValue === option.value ? "mickey-is-rdo-checked" : ""
              }`}
            >
              {option.label}
            </RadioLabel>
          )}
        </RadioEffectsContainer>
      </OnPress>
    </RadioGroup>
  ));
};

export const Radio: React.FC<RadioProps> = ({
  handleOnChange,
  defaultValue,
  name,
  style,
  className,
  active,
  labelPosition = "right",
  disabled,
  options,
  direction,
  ...more
}) => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const formName = useFormName();

  const getDefaultValue = () => {
    return (
      defaultValue ??
      options.find((option: MickeyObject) => option.default)?.value ??
      options[0]?.value
    );
  };

  const [selectedValue, setSelectedValue] = useState<
    string | number | boolean | undefined
  >(getDefaultValue());

  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  const { onOut, onMove, onUp, onDown, onOver, groupId } = more;

  const pointerEvents = {
    onPress: () => {
      domRef.current?.click();
    },
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

    const handleValueChange = (newValue: string) => {
      setSelectedValue(newValue);
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
    if (defaultValue) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (!selectedValue && options.length > 0) {
      const defaultOption = options.find(
        (option: MickeyObject) => option.default
      );
      if (defaultOption) {
        setSelectedValue(defaultOption.value);
      } else {
        setSelectedValue(options[0].value);
      }
    }
  }, [options]);

  const handleChange = (value: string | number | boolean) => {
    setSelectedValue(value);
    setValue(name, value);
  };

  const internalProperties = removeUndefined({
    style: { ...(style || {}) },
    labelPosition,
    active,
    disabled,
  });

  return (
    <Container ref={domRef} disabled={disabled} direction={direction}>
      {renderRadioOptions(
        options,
        selectedValue,
        handleChange,
        internalProperties,
        name,
        handleOnChange,
        labelPosition,
        className
      )}
    </Container>
  );
};
