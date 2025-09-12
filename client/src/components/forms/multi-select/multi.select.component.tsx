import React, { useEffect, useState } from "react";
import {
  MultiSelectContainer,
  Container,
  MultiSelectItem,
} from "./multi.select.styled";
import type {
  MultiSelectOptionValue,
  MultiSelectProps,
} from "./multi.select.types";
import { useFormName } from "../form/form.context";
import { removeUndefined } from "@/helpers/objects";
import { useForm } from "../form";
import { OnPress } from "@/components/actions";

export const MultiSelect: React.FC<MultiSelectProps> = ({
  defaultValue,
  style,
  className,
  disabled,
  options,
  width,
  height,
  onSelected,
  name,
}) => {
  const formName = useFormName();
  const [selectedOptions, setSelectedOptions] =
    useState<MultiSelectOptionValue[]>(options);

  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  useEffect(() => {
    registerField(name, defaultValue);

    const handleValueChange = (newValue: MultiSelectOptionValue[]) => {
      setSelectedOptions(newValue || []);
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
  }, [formName, name, options]);

  const internalProperties = removeUndefined({
    style: { ...(style || {}) },
    disabled,
  });

  const handleSelected = (option: MultiSelectOptionValue) => {
    setSelectedOptions((prev) => {
      const idx = prev.findIndex((item) => item.value === option.value);

      if (idx > -1) {
        const updated = prev.map((item, i) =>
          i === idx ? { ...item, selected: !item.selected } : item
        );

        setValue(name, updated);

        return updated;
      }

      return [...prev, { ...option, selected: true }];
    });
  };

  useEffect(() => {
    const selectedItems = selectedOptions.filter((item) => item.selected);
    if (onSelected) {
      onSelected(selectedItems);
    }
  }, [selectedOptions, onSelected]);

  useEffect(() => {
    const initialValues = defaultValue || [];
    if (initialValues && Array.isArray(initialValues)) {
      const updatedOptions = options.map((option) => ({
        ...option,
        selected: initialValues.some(
          (initialOption) => initialOption.value === option.value
        ),
      }));
      setSelectedOptions(updatedOptions);
    }
  }, [defaultValue, options]);

  return (
    <Container width={width} height={height} disabled={disabled}>
      <MultiSelectContainer
        {...internalProperties}
        className={`mickey-click mickey-multi-select ${
          className ? className : ""
        }`}
      >
        {selectedOptions.map((option) => (
          <OnPress
            onPress={() => {
              if (!disabled) {
                handleSelected(option);
              }
            }}
            key={`msv_${option.value}`}
          >
            <MultiSelectItem
              disabled={disabled}
              selected={option.selected}
              value={option.value}
              label={option.label}
            >
              {option.label}
            </MultiSelectItem>
          </OnPress>
        ))}
      </MultiSelectContainer>
    </Container>
  );
};
