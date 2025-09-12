import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenFieldIcon: React.FC<
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
                  d="M601.9 16C583.1-2.8 552.7-2.7 534 16l-39.6 39.7 89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4.4-68.2zM328.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15l145.1-142.1-89.1-89.1zM80 128c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h416c44.2 0 80-35.8 80-80V304c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16h192c17.7 0 32-14.3 32-32s-14.3-32-32-32zm80 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M569.2 59.1 581.1 71c9.4 9.4 9.4 24.6 0 33.9L560 126.1l-45.7-45.7 20.8-21.1c9.4-9.5 24.6-9.5 34.1-.1zM359.9 236.8l120.7-122.3 45.5 45.5-121.5 121.6c-3.3 3.3-7.5 5.6-12 6.5L343 298.5l10.4-49.7c.9-4.5 3.2-8.7 6.4-11.9zM501 25.5 325.7 203.1c-9.7 9.8-16.4 22.3-19.2 35.8l-18 85.7c-1.7 7.9.8 16.2 6.5 21.9s14 8.2 21.9 6.5l85.5-17.9c13.7-2.9 26.2-9.7 36.1-19.6l176.6-176.6c28.1-28.1 28.1-73.7 0-101.8l-12-11.9C574.9-3.1 529-2.9 501 25.5M72 128c-39.8 0-72 32.2-72 72v240c0 39.8 32.2 72 72 72h432c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24v128c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V200c0-13.3 10.7-24 24-24h192c13.3 0 24-10.7 24-24s-10.7-24-24-24zm56 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="m582.8 45.5 11.9 11.9c12.5 12.5 12.5 32.8 0 45.2L568 129.4l-57-57 26.4-26.8c12.5-12.6 32.8-12.7 45.4-.1M346.2 239.2 488.5 95.1l56.9 56.9-143.1 143.2c-4.4 4.4-10 7.4-16.1 8.7l-61.5 12.9 12.9-61.7c1.3-6 4.2-11.5 8.6-15.9M514.7 23.1 323.4 216.7c-8.6 8.7-14.6 19.8-17.1 31.8l-18 85.7c-1.1 5.3.5 10.8 4.3 14.6s9.3 5.5 14.6 4.3l85.5-17.9c12.2-2.6 23.3-8.6 32.1-17.4l192.6-192.5c25-25 25-65.5 0-90.5l-11.9-12c-25.1-25.1-65.8-25-90.8.3M64 128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v176c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h240c8.8 0 16-7.2 16-16s-7.2-16-16-16zm64 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="m596.5 31.8 11.9 11.9c15.6 15.6 15.6 40.9 0 56.6L568 140.7l-68.3-68.3 40-40.5c15.6-15.8 41-15.8 56.7-.2zm-264 209.8 156-157.8 68.2 68.2-156.8 156.9c-5.5 5.5-12.5 9.3-20.1 10.9l-73.5 15.4 15.5-73.7c1.6-7.5 5.3-14.4 10.7-19.9M528.4 20.7 321.1 230.3c-7.6 7.7-12.8 17.3-15 27.9l-18 85.6c-.6 2.6.3 5.4 2.2 7.3s4.7 2.7 7.3 2.2l85.5-17.9c10.6-2.2 20.4-7.5 28.1-15.2l208.5-208.6c21.9-21.9 21.9-57.3 0-79.2l-11.9-11.9c-22-22-57.6-21.9-79.4.2M56 128c-30.9 0-56 25.1-56 56v272c0 30.9 25.1 56 56 56h464c30.9 0 56-25.1 56-56V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v192c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40V184c0-22.1 17.9-40 40-40h256c4.4 0 8-3.6 8-8s-3.6-8-8-8zm72 208a16 16 0 1 0 0-32 16 16 0 1 0 0 32m112-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M0 208c0-44.2 35.8-80 80-80h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V304c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m534.1 16-39.7 39.7 89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4.4-68.2l-22-21.9C583.1-2.8 552.7-2.7 534 16zm-62.4 62.4L328.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15l145.1-142.1zM160 320a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
