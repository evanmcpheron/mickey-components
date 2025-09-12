import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RingDiamondIcon: React.FC<
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
                  d="M122.5 13.3C126.6 5.1 134.9 0 144 0h96c9.1 0 17.4 5.1 21.5 13.3l24 48c3.5 7.1 3.4 15.5-.5 22.4l-30.4 54.8C329.9 164.4 384 235.9 384 320c0 106-86 192-192 192S0 426 0 320c0-84.1 54.1-155.6 129.4-181.6L99 83.7c-3.8-6.9-4-15.3-.5-22.4zM192 192a128 128 0 1 0 0 256 128 128 0 1 0 0-256"
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
                  d="M144 0c-8 0-15.5 4-20 10.7l-32 48c-5 7.5-5.4 17.1-1 25l31.8 57.2C51 168.6 0 238.4 0 320c0 106 86 192 192 192s192-86 192-192c0-81.6-51-151.4-122.8-179.1L293 83.7c4.4-7.9 4-17.5-1-25l-32-48C255.5 4 248 0 240 0zm68.8 129.1c-6.8-.7-13.8-1.1-20.8-1.1s-14 .4-20.8 1.1l-31.1-56L156.8 48h70.3l16.8 25.1zM48 320a144 144 0 1 1 288 0 144 144 0 1 1-288 0"
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
                  d="M136 0c-5.7 0-11 3.1-13.9 8.1l-32 56c-3 5.3-2.8 11.8.6 16.8l38.4 57.7C54 164.6 0 236 0 320c0 106 86 192 192 192s192-86 192-192c0-84-54-155.4-129.1-181.5l38.4-57.7c3.4-5 3.6-11.6.6-16.8l-32-56c-2.9-4.9-8.2-8-13.9-8zm85.9 130.3c-9.7-1.5-19.7-2.3-29.9-2.3s-20.2.8-29.9 2.3l-39.3-59L145.3 32h93.4l22.5 39.4-39.3 59zM32 320a160 160 0 1 1 320 0 160 160 0 1 1-320 0"
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
                  d="M132.7 10.1C137.2 3.7 144.5 0 152.2 0h79.5c7.8 0 15 3.7 19.5 10.1l32 44.8c3.9 5.4 4 12.6.3 18.2l-41.1 61.7C324 156.9 384 231.4 384 320c0 106-86 192-192 192S0 426 0 320c0-88.6 60-163.1 141.5-185.3L100.4 73c-3.7-5.5-3.6-12.8.3-18.2l32-44.8zM265.1 72H118.9l39.3 59c11-1.9 22.2-3 33.7-3s22.8 1 33.7 3l39.3-59zm-.6-16-26.2-36.6c-1.5-2.1-3.9-3.4-6.5-3.4h-79.6c-2.6 0-5 1.2-6.5 3.4L119.5 56zM192 496a176 176 0 1 0 0-352 176 176 0 1 0 0 352"
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
                  d="M122.5 13.3C126.6 5.1 134.9 0 144 0h96c9.1 0 17.4 5.1 21.5 13.3l24 48c3.5 7.1 3.4 15.5-.5 22.4l-30.4 54.8c-19.7-6.8-40.7-10.5-62.6-10.5s-42.9 3.7-62.6 10.4L99 83.7c-3.8-6.9-4-15.3-.5-22.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 192a128 128 0 1 0 0 256 128 128 0 1 0 0-256m192 128a192 192 0 1 1-384 0 192 192 0 1 1 384 0"
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
