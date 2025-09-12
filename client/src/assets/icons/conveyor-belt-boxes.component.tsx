import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ConveyorBeltBoxesIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C64 14.3 78.3 0 96 0h192c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm320 64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32zM0 416c0-53 43-96 96-96h448c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96m160 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 48v160H144V48zM144 0c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm384 112v96h-96v-96zm-96-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zm96 272c35.3 0 64 28.7 64 64s-28.7 64-64 64H112c-35.3 0-64-28.7-64-64s28.7-64 64-64zm-416-48C50.1 288 0 338.1 0 400s50.1 112 112 112h416c61.9 0 112-50.1 112-112s-50.1-112-112-112zm48 112a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 32c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM112 0C85.5 0 64 21.5 64 48v192c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm416 96c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm-96-32c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm176 352c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64s28.7-64 64-64h448c35.3 0 64 28.7 64 64M96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm56 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 16c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32zM112 0C85.5 0 64 21.5 64 48v192c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm416 80c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V112c0-17.7 14.3-32 32-32zm-96-16c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm112 272c44.2 0 80 35.8 80 80s-35.8 80-80 80H96c-44.2 0-80-35.8-80-80s35.8-80 80-80zM96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m176-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C78.3 0 64 14.3 64 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm320 64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"
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
