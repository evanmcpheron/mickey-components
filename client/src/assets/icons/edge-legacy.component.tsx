import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EdgeLegacyIcon: React.FC<
  IconProps & { type: "brands" | Dimensions }
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
          case "brands":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m25.71 228.16.35-.48c0 .16 0 .32-.07.48Zm460.58 15.51c0-44-7.76-84.46-28.81-122.4C416.5 47.88 343.91 8 258.89 8 119 7.72 40.62 113.21 26.06 227.68c42.42-61.31 117.07-121.38 220.37-125 0 0 109.67 0 99.42 105H170c6.37-37.39 18.55-59 34.34-78.93-75.05 34.9-121.85 96.1-120.75 188.32.83 71.45 50.13 144.84 120.75 172 83.35 31.84 192.77 7.2 240.13-21.33V363.31c-80.87 56.49-270.87 60.92-272.26-67.57h314.08z"
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
