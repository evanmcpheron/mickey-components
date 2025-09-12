import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ComputerMouseIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone" | Dimensions;
  }
> = ({ type, size, color, active, className, style, ...more }) => {
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

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className,
    style: { ...(style || {}) },
    active,
    size,
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 192h176V0h-16C71.6 0 0 71.6 0 160zm0 32v128c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H0m384-32v-32C384 71.6 312.4 0 224 0h-16v192z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 224H48v128c0 61.9 50.1 112 112 112h64c61.9 0 112-50.1 112-112V224zm192-48v176c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352V160C0 71.6 71.6 0 160 0h64c88.4 0 160 71.6 160 160zM216 48v128h120v-16c0-61.9-50.1-112-112-112zm-48 0h-8C98.1 48 48 98.1 48 160v16h120z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 224H32v128c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128V224zm192-32v160c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352V160C0 71.6 71.6 0 160 0h64c88.4 0 160 71.6 160 160zM208 32v160h144v-32c0-70.7-57.3-128-128-128zm-32 0h-16C89.3 32 32 89.3 32 160v32h144z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 192h168V16h-24C80.5 16 16 80.5 16 160zM184 0h40c88.4 0 160 71.6 160 160v192c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352V160C0 71.6 71.6 0 160 0zM16 208v144c0 79.5 64.5 144 144 144h64c79.5 0 144-64.5 144-144V208H16m352-16v-32c0-79.5-64.5-144-144-144h-24v176z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 192h176V0h-16C71.6 0 0 71.6 0 160zm0 32v128c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H0m384-32v-32C384 71.6 312.4 0 224 0h-16v192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 192H0v32h384v-32H208V0h-32z"
                />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
