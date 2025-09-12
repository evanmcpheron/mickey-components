import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MapPinIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 144a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-64c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64m-32 400V317.1a178 178 0 0 0 64 0V480c0 17.7-14.3 32-32 32s-32-14.3-32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 144a96 96 0 1 1 192 0 96 96 0 1 1-192 0m120 142c68.1-11.4 120-70.7 120-142C304 64.5 239.5 0 160 0S16 64.5 16 144c0 71.4 51.9 130.6 120 142v202c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224m144-112c0 74.1-56 135.2-128 143.1V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V287.1c-72-8-128-69-128-143.1C16 64.5 80.5 0 160 0s144 64.5 144 144m-192 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 272a128 128 0 1 0 0-256 128 128 0 1 0 0 256m144-128c0 76.8-60.2 139.6-136 143.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V287.8c-75.8-4.2-136-67-136-143.8C16 64.5 80.5 0 160 0s144 64.5 144 144m-224-8c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-48.6 39.4-88 88-88 4.4 0 8 3.6 8 8s-3.6 8-8 8c-39.8 0-72 32.2-72 72"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M128 284.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V284.4c-10.3 2.3-21 3.6-32 3.6s-21.7-1.2-32-3.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 288a144 144 0 1 0 0-288 144 144 0 1 0 0 288M96 144c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-53 43-96 96-96 8.8 0 16 7.2 16 16s-7.2 16-16 16c-35.3 0-64 28.7-64 64"
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
