import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarshipIcon: React.FC<
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
                  d="M448 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 256a192 192 0 1 0 0-384 192 192 0 1 0 0 384m32-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-291.1-50.6L137 160h71c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32.1l65.5 57.3-2.2.4C109.1 221.4 96 237.4 96 256s13.1 34.6 31.4 38.3l2.2.4L64.1 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h176c17.7 0 32-14.3 32-32s-14.3-32-32-32h-71l51.9-45.4 43 8.6c-5.2-18.9-7.9-38.7-7.9-59.2s2.7-40.3 7.9-59.2z"
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
                  d="M0 96c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64s-28.7 64-64 64h-27.2l37.7 26.1 70.1-8.4C302.6 110.7 369.9 64 448 64c106 0 192 86 192 192s-86 192-192 192c-78.1 0-145.4-46.7-175.3-113.7l-70.1-8.4-37.8 26.1H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H64c-35.3 0-64-28.7-64-64s28.7-64 64-64h16.5l50.1-34.7-13.7-1.6C86.7 312 64 286.4 64 256s22.7-56 52.9-59.6l13.7-1.6L80.5 160H64c-35.3 0-64-28.7-64-64m64-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm58.6 164c-6.1.7-10.6 5.9-10.6 12s4.6 11.3 10.6 12L258 284.3q-2.1-13.8-2.1-28.2c0-14.4.7-19 2.1-28.2zM48 416c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-8.8 0-16 7.2-16 16m400-16a144 144 0 1 0 0-288 144 144 0 1 0 0 288m32-144a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M0 112c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48s-21.5 48-48 48h-46.8l47.6 34.6 60.1-8.2C296.8 114.8 366.5 64 448 64c106 0 192 86 192 192s-86 192-192 192c-81.5 0-151.2-50.8-179-122.4l-60.1-8.2-47.7 34.6H208c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48s21.5-48 48-48h58.8l56.2-40.9-21.5-2.9c-26-3.6-45.5-25.9-45.5-52.2s19.5-48.6 45.5-52.2l21.5-2.9-56.2-40.9H48c-26.5 0-48-21.5-48-48m48-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm97.9 139.5c-10.3 1.4-17.9 10.2-17.9 20.5s7.6 19.1 17.9 20.5L259.4 292c-2.2-11.6-3.4-23.7-3.4-35.9s1.2-24.3 3.4-35.9zM32 400c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.8 0-16 7.2-16 16m416 16a160 160 0 1 0 0-320 160 160 0 1 0 0 320m32-160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M624 256a176 176 0 1 0-352 0 176 176 0 1 0 352 0m16 0c0 106-86 192-192 192-83.8 0-155.1-53.7-181.3-128.6L183.3 308l-1.7 1.7-42.3 42.3H200c22.1 0 40 17.9 40 40s-17.9 40-40 40H40c-22.1 0-40-17.9-40-40s17.9-40 40-40h76.7l46.7-46.7-36.8-5c-22.1-3.1-38.6-22-38.6-44.3s16.5-41.2 38.6-44.3l36.8-5-46.7-46.7H40c-22.1 0-40-17.9-40-40s17.9-40 40-40h160c22.1 0 40 17.9 40 40s-17.9 40-40 40h-60.7l42.3 42.3 1.7 1.7 83.4-11.4C292.9 117.7 364.2 64 448 64c106 0 192 86 192 192m-378.3-46.5-132.9 18.1c-14.2 1.9-24.8 14.1-24.8 28.4s10.6 26.5 24.8 28.4l132.9 18.1C258 287.6 256 272 256 256s2-31.6 5.7-46.5M16 120c0 13.3 10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24H40c-13.3 0-24 10.7-24 24m24 248c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24zm408-48a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160m16 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M448 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 256a192 192 0 1 0 0-384 192 192 0 1 0 0 384M0 128c0 17.7 14.3 32 32 32h176c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h176c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m129.1 216.8-65-56.8H137l50.4 44.1 81.6-17.7c-8.4 21.6-13 45.1-13 69.6s4.6 48 13 69.6l-81.6-17.7L137 352H64.1l64.9-56.8-1.8-.4C109 290.8 96 274.7 96 256s13-34.8 31.3-38.8zM384 256a64 64 0 1 1 128 0 64 64 0 1 1-128 0m64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
