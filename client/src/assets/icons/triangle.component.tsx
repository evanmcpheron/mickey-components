import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TriangleIcon: React.FC<
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
                  d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480h432c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1z"
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
                  d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5 0 8-6.5 14.5-14.5 14.5h-387c-8 0-14.5-6.5-14.5-14.5 0-2.7.7-5.3 2.1-7.5zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5 0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3"
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
                  d="M235.5 75.8c4.2-7.3 12-11.8 20.5-11.8s16.2 4.5 20.5 11.8l201 344.6c1.6 2.8 2.5 6 2.5 9.3 0 10.2-8.2 18.4-18.4 18.4H50.4C40.2 448 32 439.8 32 429.6c0-3.3.9-6.4 2.5-9.3l201-344.6zm-27.6-16.2L6.9 404.2C2.4 411.9 0 420.7 0 429.6 0 457.4 22.6 480 50.4 480h411.2c27.8 0 50.4-22.6 50.4-50.4 0-8.9-2.4-17.7-6.9-25.4l-201-344.6C294.1 42.5 275.8 32 256 32s-38.1 10.5-48.1 27.6"
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
                  d="M221.7 67.7C228.8 55.5 241.9 48 256 48s27.2 7.5 34.3 19.7l201 344.6c3.1 5.3 4.7 11.2 4.7 17.3 0 19-15.4 34.4-34.4 34.4H50.4c-19 0-34.4-15.4-34.4-34.4 0-6.1 1.6-12.1 4.7-17.3zm-13.8-8.1L6.9 404.2C2.4 411.9 0 420.7 0 429.6 0 457.4 22.6 480 50.4 480h411.2c27.8 0 50.4-22.6 50.4-50.4 0-8.9-2.4-17.7-6.9-25.4l-201-344.6C294.1 42.5 275.8 32 256 32s-38.1 10.5-48.1 27.6"
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
                  d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480h432c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1z"
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
