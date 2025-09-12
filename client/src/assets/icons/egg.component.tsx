import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EggIcon: React.FC<
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
                  d="M192 496C86 496 0 394 0 288 0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208m-37.2-362c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2S64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8 10.1-28.5 25-54.1 43.7-71.2"
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
                  d="M192 448c-74.7 0-144-75.4-144-160 0-48.3 14.1-107.7 41.3-153.5C116.4 88.8 151.1 64 192 64s75.6 24.8 102.7 70.5C321.9 180.3 336 239.7 336 288c0 84.6-69.3 160-144 160M0 288c0 106 86 208 192 208s192-102 192-208c0-112-64-272-192-272S0 176 0 288m170.8-154c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2S80 259.7 80 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8 10.1-28.5 25-54.1 43.7-71.2"
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
                  d="M192 464c-85.2 0-160-84.3-160-176 0-50.8 14.7-113.1 43.5-161.7C104.2 77.9 143.4 48 192 48s87.8 29.9 116.5 78.3C337.3 174.9 352 237.2 352 288c0 91.7-74.8 176-160 176M0 288c0 106 86 208 192 208s192-102 192-208c0-112-64-272-192-272S0 176 0 288m170.8-154c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2S80 259.7 80 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8 10.1-28.5 25-54.1 43.7-71.2"
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
                  d="M192 480c-95.6 0-176-93.1-176-192 0-53.4 15.4-118.6 45.8-169.8C92.1 66.9 135.7 32 192 32s99.9 34.9 130.2 86.2C352.6 169.4 368 234.6 368 288c0 98.9-80.4 192-176 192M0 288c0 106 86 208 192 208s192-102 192-208c0-112-64-272-192-272S0 176 0 288m141.4-167.9c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5c-22.6 20.6-39.2 50.2-50.1 80.9C69.5 220 64 252.6 64 280c0 4.4 3.6 8 8 8s8-3.6 8-8c0-25.4 5.2-56.3 15.5-85.4 10.4-29.2 25.8-56.2 45.9-74.5"
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
                  d="M192 496C86 496 0 394 0 288 0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208m-37.2-362c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2S64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8 10.1-28.5 25-54.1 43.7-71.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M155.8 111.4c6 6.5 5.5 16.7-1 22.6-18.8 17.1-33.6 42.7-43.7 71.2C101 233.6 96 263.5 96 288c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-28.3 5.7-61.9 16.9-93.5 11.2-31.5 28.4-62.4 52.3-84.2 6.5-6 16.7-5.5 22.6 1z"
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
