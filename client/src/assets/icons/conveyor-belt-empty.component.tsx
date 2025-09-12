import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ConveyorBeltEmptyIcon: React.FC<
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
                  d="M96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M112 336c-35.3 0-64 28.7-64 64s28.7 64 64 64h416c35.3 0 64-28.7 64-64s-28.7-64-64-64zM0 400c0-61.9 50.1-112 112-112h416c61.9 0 112 50.1 112 112s-50.1 112-112 112H112C50.1 512 0 461.9 0 400m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M96 352c-35.3 0-64 28.7-64 64s28.7 64 64 64h448c35.3 0 64-28.7 64-64s-28.7-64-64-64zM0 416c0-53 43-96 96-96h448c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96m128-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m216-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M96 336c-44.2 0-80 35.8-80 80s35.8 80 80 80h448c44.2 0 80-35.8 80-80s-35.8-80-80-80zM0 416c0-53 43-96 96-96h448c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96m144 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m240 48a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
