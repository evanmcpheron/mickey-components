import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const YIcon: React.FC<
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
                  d="M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6l154 215.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V298.3L378 82.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-7-44.6 7.4L192 232.9z"
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
                  d="M43.4 41.9c-7.7-10.7-22.7-13.1-33.5-5.3S-3.2 59.3 4.6 70.1L168 295.8V456c0 13.3 10.7 24 24 24s24-10.7 24-24V295.8L379.4 70.1c7.8-10.7 5.4-25.7-5.4-33.5s-25.7-5.4-33.5 5.4L192 247.1z"
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
                  d="M28.9 38.5c-5.2-7.1-15.2-8.7-22.4-3.4s-8.6 15.2-3.4 22.4L176 293.2V464c0 8.8 7.2 16 16 16s16-7.2 16-16V293.2L380.9 57.5c5.2-7.1 3.7-17.1-3.4-22.4s-17.1-3.7-22.4 3.4L192 260.9z"
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
                  d="M14.4 35.2c-2.6-3.5-7.6-4.3-11.2-1.7s-4.3 7.6-1.7 11.2L184 290.6V472c0 4.4 3.6 8 8 8s8-3.6 8-8V290.6L382.4 44.8c2.6-3.5 1.9-8.6-1.7-11.2s-8.6-1.9-11.2 1.7L192 274.6z"
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
                  d="M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6l154 215.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V298.3L378 82.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-7-44.6 7.4L192 232.9z"
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
