import React, { useState } from "react";
import { Container } from "./button.group.styled";
import { Button } from "../button/button.component";
import { removeUndefined } from "@/helpers/objects";
import type {
  ButtonGroupProperties,
  ButtonGroupOption,
} from "./button.group.types";

export const ButtonGroup: React.FC<ButtonGroupProperties> = ({
  disabled = false,
  role = "primary",
  className,
  style,
  onSelected,
  options,
  size = "small",
  name,
}) => {
  const internalProperties = removeUndefined({
    style: { ...(style || {}) },
    className: `mickey-group-button ${className ? className : ""}`,
  });
  const [selectedItem, setSelectedItem] = useState(
    options.find((option: ButtonGroupOption) => option.default) || options?.[0]
  );

  const handleGroupClick = (item: ButtonGroupOption) => {
    setSelectedItem(item);
    onSelected?.(item);
  };

  return (
    <Container {...internalProperties}>
      {options &&
        options.map((item: ButtonGroupOption) => {
          return (
            <Button
              size={size}
              className={`button-group-item `}
              role={item.role ? item.role : role ? role : "primary"}
              disabled={
                item.disabled ? item.disabled : disabled ? disabled : false
              }
              groupId={name}
              key={item.key}
              active={selectedItem.key === item.key}
              onPress={() => {
                handleGroupClick(item);
              }}
            >
              {item.label}
            </Button>
          );
        })}
    </Container>
  );
};
