import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WandMagicIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0zm333.5-275.7 105-105-23.2-23.3-105 105 23.3 23.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m319.7 157.7 34.6 34.6L464 82.6 429.4 48zm-33.9 33.9L48 429.4 82.6 464l237.7-237.8-34.6-34.6zM14.1 395.4 395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0l-34.5-34.6c-18.7-18.7-18.7-49.1 0-67.9"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m305.9 155.3 50.7 50.7L477.1 85.7c3.1-3.1 3.1-8.2 0-11.3l-39.4-39.5c-3.1-3.1-8.2-3.1-11.3 0zm-22.6 22.6L34.9 426.3c-3.1 3.1-3.1 8.2 0 11.3L74.3 477c3.1 3.1 8.2 3.1 11.3 0l248.5-248.3-50.7-50.7zm-271 225.8L403.7 12.3c15.6-15.6 40.9-15.6 56.6 0l39.4 39.4c15.6 15.6 15.6 40.9 0 56.6L108.3 499.7c-15.6 15.6-40.9 15.6-56.6 0l-39.4-39.4c-15.6-15.6-15.6-40.9 0-56.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M292.9 153.7c.3.2.5.4.7.6l64 64c.2.2.4.5.6.7L488.4 89c9.4-9.4 9.4-24.6 0-33.9L457 23.6c-9.4-9.4-24.6-9.4-33.9 0zm-11.2 11.2L23.6 423c-9.4 9.4-9.4 24.6 0 33.9L55 488.4c9.4 9.4 24.6 9.4 33.9 0l258.2-258.1c-.3-.2-.5-.4-.7-.6l-64-64c-.2-.2-.4-.5-.6-.7zM12.3 411.7 411.7 12.3c15.6-15.6 40.9-15.6 56.6 0l31.4 31.4c15.6 15.6 15.6 40.9 0 56.6L100.3 499.7c-15.6 15.6-40.9 15.6-56.6 0l-31.4-31.4c-15.6-15.6-15.6-40.9 0-56.6"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m387.2 227.2 110.7-110.7c18.7-18.7 18.7-49.1 0-67.9l-34.6-34.5c-18.7-18.7-49.1-18.7-67.9 0L284.7 124.7l39.6 39.6 105-105 23.3 23.3-105 105z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M387.2 227.2 284.7 124.7 14.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0z"
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
