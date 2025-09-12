import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToggleOffIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128zm192 128c0-106-86-192-192-192H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192m-384 96a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 112c79.5 0 144 64.5 144 144s-64.5 144-144 144H192c-79.5 0-144-64.5-144-144s64.5-144 144-144zm192 144c0-106-86-192-192-192H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192m-384 96a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M416 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H160c-70.7 0-128-57.3-128-128s57.3-128 128-128zm160 128c0-88.4-71.6-160-160-160H160C71.6 96 0 167.6 0 256s71.6 160 160 160h256c88.4 0 160-71.6 160-160m-352 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-160 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M416 112c79.5 0 144 64.5 144 144s-64.5 144-144 144H160c-79.5 0-144-64.5-144-144s64.5-144 144-144zm160 144c0-88.4-71.6-160-160-160H160C71.6 96 0 167.6 0 256s71.6 160 160 160h256c88.4 0 160-71.6 160-160m-336 0a80 80 0 1 1-160 0 80 80 0 1 1 160 0m-176 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 128c-70.7 0-128 57.3-128 128s57.3 128 128 128h192c70.7 0 128-57.3 128-128s-57.3-128-128-128zm192-64c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256S86 64 192 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 256a96 96 0 1 0 192 0 96 96 0 1 0-192 0"
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
