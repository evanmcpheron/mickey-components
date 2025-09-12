import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IntersectionIcon: React.FC<
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
                  d="M32 480c17.7 0 32-14.3 32-32V224c0-70.7 57.3-128 128-128s128 57.3 128 128v224c0 17.7 14.3 32 32 32s32-14.3 32-32V224c0-106-86-192-192-192S0 118 0 224v224c0 17.7 14.3 32 32 32"
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
                  d="M24 480c13.3 0 24-10.7 24-24V224c0-79.5 64.5-144 144-144s144 64.5 144 144v232c0 13.3 10.7 24 24 24s24-10.7 24-24V224c0-106-86-192-192-192S0 118 0 224v232c0 13.3 10.7 24 24 24"
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
                  d="M16 480c8.8 0 16-7.2 16-16V224c0-88.4 71.6-160 160-160s160 71.6 160 160v240c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-106-86-192-192-192S0 118 0 224v240c0 8.8 7.2 16 16 16"
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
                  d="M24 480c4.4 0 8-3.6 8-8V208c0-88.4 71.6-160 160-160s160 71.6 160 160v264c0 4.4 3.6 8 8 8s8-3.6 8-8V208c0-97.2-78.8-176-176-176S16 110.8 16 208v264c0 4.4 3.6 8 8 8"
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
                  d="M32 480c17.7 0 32-14.3 32-32V224c0-70.7 57.3-128 128-128s128 57.3 128 128v224c0 17.7 14.3 32 32 32s32-14.3 32-32V224c0-106-86-192-192-192S0 118 0 224v224c0 17.7 14.3 32 32 32"
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
