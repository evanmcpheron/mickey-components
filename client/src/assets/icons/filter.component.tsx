import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilterIcon: React.FC<
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
                  d="M3.9 54.9C10.5 40.9 24.5 32 40 32h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9"
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
                  d="M0 73.7C0 50.7 18.7 32 41.7 32h428.6c23 0 41.7 18.7 41.7 41.7 0 9.6-3.3 18.9-9.4 26.3L336 304.5v143.2c0 17.8-14.5 32.3-32.3 32.3-7.3 0-14.4-2.5-20.1-7l-92.5-73.4c-9.6-7.6-15.1-19.1-15.1-31.3v-63.8L9.4 100C3.3 92.6 0 83.3 0 73.7M55 80l163.6 200.8c3.5 4.3 5.4 9.6 5.4 15.2v68.4l64 50.8V296c0-5.5 1.9-10.9 5.4-15.2L457 80z"
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
                  d="M0 71.5C0 49.7 17.7 32 39.5 32h433c21.8 0 39.5 17.7 39.5 39.5 0 9.2-3.2 18.1-9.1 25.2L320 317.8v128.3c0 18.7-15.2 33.9-33.9 33.9-7.5 0-14.8-2.5-20.8-7.1l-61-47.4c-7.8-6.1-12.4-15.4-12.4-25.3v-82.4L9.1 96.7C3.2 89.6 0 80.7 0 71.5M39.5 64c-4.2 0-7.5 3.4-7.5 7.5 0 1.8.6 3.4 1.7 4.8l186.6 225.5c2.4 2.9 3.7 6.5 3.7 10.2v88.2l61 47.4c.3.3.7.4 1.1.4 1 0 1.9-.8 1.9-1.9V312c0-3.7 1.3-7.3 3.7-10.2L478.3 76.3c1.1-1.3 1.7-3 1.7-4.8 0-4.2-3.4-7.5-7.5-7.5z"
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
                  d="M0 69.6C0 48.8 16.8 32 37.6 32h436.8c20.8 0 37.6 16.8 37.6 37.6 0 8.5-2.9 16.8-8.2 23.5L320 322.8v131.1c0 14.4-11.7 26.1-26.1 26.1-5.5 0-10.9-1.7-15.4-5l-70.1-51c-10.3-7.5-16.5-19.6-16.5-32.3v-68.9L8.2 93.1C2.9 86.4 0 78.2 0 69.6M37.6 48C25.7 48 16 57.7 16 69.6c0 4.9 1.7 9.7 4.7 13.5L206.2 315c1.1 1.4 1.8 3.2 1.8 5v71.7c0 7.7 3.7 14.9 9.9 19.4l70.1 51c1.7 1.3 3.8 1.9 5.9 1.9 5.6 0 10.1-4.5 10.1-10.1V320c0-1.8.6-3.6 1.8-5L491.3 83.1c3.1-3.8 4.7-8.6 4.7-13.5 0-11.9-9.7-21.6-21.6-21.6z"
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
                  d="M3.9 54.9C10.5 40.9 24.5 32 40 32h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9"
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
