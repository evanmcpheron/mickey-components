import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RulerTriangleIcon: React.FC<
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
                  d="M0 32v416c0 35.3 28.7 64 64 64h416c17.7 0 32-14.3 32-32v-2.7c0-8.5-3.4-16.6-9.4-22.6l-51.3-51.3-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24-57.4-57.4-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24-57.4-57.4-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24-57.4-57.4-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24-57.4-57.5-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24L57.4 9.4c-6-6-14.2-9.4-22.7-9.4H32C14.3 0 0 14.3 0 32m128 224 128 128H128z"
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
                  d="M48 448V67.9l66.7 66.7-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1 57.4 57.4-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1 57.4 57.4-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1 57.4 57.4-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1 66.8 66.8H64c-8.8 0-16-7.2-16-16m454.6 6.6L57.4 9.4c-6-6-14.2-9.4-22.7-9.4H32C14.3 0 0 14.3 0 32v416c0 35.3 28.7 64 64 64h416c17.7 0 32-14.3 32-32v-2.7c0-8.5-3.4-16.6-9.4-22.6zM128 256v128h128z"
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
                  d="M32 45.3V448c0 17.7 14.3 32 32 32h402.7c7.3 0 13.3-5.9 13.3-13.3 0-3.5-1.4-6.9-3.9-9.4l-39.4-39.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l25.4-25.4-39.5-39.4c-2.5-2.5-5.9-3.9-9.4-3.9C37.9 32 32 37.9 32 45.3m45.3-32 421.4 421.4c8.5 8.5 13.3 20 13.3 32 0 25-20.3 45.3-45.3 45.3H64c-35.3 0-64-28.7-64-64V45.3C0 20.3 20.3 0 45.3 0c12 0 23.5 4.8 32 13.3m44.6 228c6-2.5 12.9-1.1 17.4 3.5l128 128c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H128c-8.8 0-16-7.2-16-16V256c0-6.5 3.9-12.3 9.9-14.8zm22.1 53.3V368h73.4z"
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
                  d="M16 45.3V448c0 26.5 21.5 48 48 48h402.7c16.2 0 29.3-13.1 29.3-29.3 0-7.8-3.1-15.2-8.6-20.7l-45.1-45-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l28.7-28.7-68.7-68.7-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l28.7-28.7-68.7-68.7-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l28.7-28.7-68.7-68.7-28.7 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l28.7-28.7L122.3 81l-28.6 28.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L111 69.7 65.9 24.6C60.5 19.1 53 16 45.3 16 29.1 16 16 29.1 16 45.3M0 448V45.3C0 20.3 20.3 0 45.3 0c12 0 23.5 4.8 32 13.3l421.4 421.4c8.5 8.5 13.3 20 13.3 32 0 25-20.3 45.3-45.3 45.3H64c-35.3 0-64-28.7-64-64m124.9-199.4c3-1.2 6.4-.6 8.7 1.7l128 128c2.3 2.3 3 5.7 1.7 8.7s-4.2 4.9-7.4 4.9H128c-4.4 0-8-3.6-8-8V256c0-3.2 1.9-6.2 4.9-7.4m11.1 26.7V376h100.7z"
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
                  d="M54.6 9.4C45.5.2 31.7-2.5 19.8 2.4S0 19.1 0 32v416c0 35.3 28.7 64 64 64h416c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9L450 404.6l-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l22.6-22.6-57.4-57.4-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l22.6-22.6-57.4-57.4-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l22.6-22.6-57.4-57.4-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l22.6-22.6-57.5-57.3-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l22.6-22.6zM128 256l128 128H128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M107.3 62.1 84.7 84.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6zm80 80-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6zm80 80-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6zm80 80-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6zm80 80-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6z"
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
