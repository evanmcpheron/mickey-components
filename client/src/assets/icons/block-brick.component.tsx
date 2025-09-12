import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlockBrickIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 32v80h256V32zm-32 80V32C28.7 32 0 60.7 0 96v16zM0 144v96h208v-96zm0 224h64v-96H0zm0 32v16c0 35.3 28.7 64 64 64h144v-80zm240 0v80h144c35.3 0 64-28.7 64-64v-16zm208-32v-96h-64v96zm-96 0v-96H96v96zm96-224H240v96h208zm0-32V96c0-35.3-28.7-64-64-64v80z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 80v48h160V80zm-48 48V80H64c-8.8 0-16 7.2-16 16v32zm-48 48v56h152v-56zm0 160h48v-56H48zm0 48v32c0 8.8 7.2 16 16 16h136v-48H48m96-48h160v-56H144zm208 0h48v-56h-48zm48 48H248v48h136c8.8 0 16-7.2 16-16zm0-208H248v56h152zm0-48V96c0-8.8-7.2-16-16-16h-32v48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M136 64v64h176V64zm-32 0H64c-17.7 0-32 14.3-32 32v32h72zm-72 96v80h176v-80zm0 192h72v-80H32zm0 32v32c0 17.7 14.3 32 32 32h144v-64H32m104-32h176v-80H136zm208 0h72v-80h-72zm72 32H240v64h144c17.7 0 32-14.3 32-32zm0-224H240v80h176zm0-32V96c0-17.7-14.3-32-32-32h-40v64zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 48v80h192V48zm-16 80V48H64c-26.5 0-48 21.5-48 48v32zm-96 16v104h200V144zm0 224h96V264H16zm0 16v32c0 26.5 21.5 48 48 48h152v-80H16m112-16h192V264H128zm208 0h96V264h-96zm96 16H232v80h152c26.5 0 48-21.5 48-48zm0-240H232v104h200zm0-16V96c0-26.5-21.5-48-48-48h-48v80zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 32v80h256V32zm-32 80V32C28.7 32 0 60.7 0 96v16zM0 144v96h208v-96zm0 224h64v-96H0zm0 32v16c0 35.3 28.7 64 64 64h144v-80zm240 0v80h144c35.3 0 64-28.7 64-64v-16zm208-32v-96h-64v96zm-96 0v-96H96v96zm96-224H240v96h208zm0-32V96c0-35.3-28.7-64-64-64v80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 112H0v32h208v96H0v32h64v96H0v32h208v80h32v-80h208v-32h-64v-96h64v-32H240v-96h208v-32h-64V32h-32v80H96V32H64zm288 256H96v-96h256z"
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
