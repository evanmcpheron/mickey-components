import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CommaIcon: React.FC<
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
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 350.4V349c0-33.7-27.3-61-61-61-29.5 0-54.8 21.1-60.1 50.1l-22.2 122c-.5 2.6-.7 5.2-.7 7.9v8.2c0 19.7 16.1 35.8 35.9 35.8 12.5 0 24.1-6.5 30.6-17.2L150.8 383c6-9.8 9.2-21.1 9.2-32.6"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M120 353.4c0-9.6-7.8-17.4-17.4-17.4-8.4 0-15.6 6-17.1 14.3L66.7 453.6l50.4-85.7c1.9-3.3 2.9-7 2.9-10.7zm48 0v3.8c0 12.3-3.3 24.4-9.5 35.1l-57.2 97.2C93.1 503.4 78 512 61.8 512H60c-24.3 0-44-19.7-44-44 0-2.6.2-5.3.7-7.9l21.5-118.4C43.9 310.6 71 288 102.6 288c36.1 0 65.4 29.3 65.4 65.4"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M136 352.3c0-17.8-14.4-32.3-32.3-32.3-16.1 0-29.7 11.8-31.9 27.7l-18 125.8c-.5 3.4 2.2 6.5 5.7 6.5 1.9 0 3.7-1 4.8-2.6l66-101.9c3.8-5.8 5.8-12.6 5.8-19.5v-3.7zm32 0v3.7c0 13.1-3.8 25.9-10.9 36.9l-66 101.9C84.2 505.5 72.3 512 59.5 512c-23 0-40.6-20.3-37.3-43l18-125.8c4.5-31.7 31.6-55.2 63.6-55.2 35.5 0 64.3 28.8 64.3 64.3z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M138 374.6c5-7.4 7.6-16.3 7.6-25.3 0-24.9-20.2-45.3-45-45.3-21.8 0-40.4 15.6-44.3 37.1L32.2 476.7c-1.8 10 5.9 19.3 16.1 19.3 5.5 0 10.6-2.7 13.6-7.3zm13.3 8.9-76 114.1c-6 9-16.1 14.4-26.9 14.4-20.2 0-35.4-18.2-31.9-38.1l24.2-135.7c5.2-29.1 30.5-50.2 60-50.2 33.7 0 61 27.6 61 61.3 0 12.1-3.6 24.1-10.3 34.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 350.4V349c0-33.7-27.3-61-61-61-29.5 0-54.8 21.1-60.1 50.1l-22.2 122c-.5 2.6-.7 5.2-.7 7.9v8.2c0 19.7 16.1 35.8 35.9 35.8 12.5 0 24.1-6.5 30.6-17.2L150.8 383c6-9.8 9.2-21.1 9.2-32.6"
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
