import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PowerOffIcon: React.FC<
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
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v224c0 17.7 14.3 32 32 32s32-14.3 32-32zm-144.5 88.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4 0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
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
                  d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v240c0 13.3 10.7 24 24 24s24-10.7 24-24zm-145.8 83.3c10.7-7.9 12.9-22.9 5.1-33.6s-22.9-12.9-33.6-5.1C46.5 112.3 8 182.7 8 262c0 132.6 107.5 240 240 240s240-107.5 240-240c0-79.3-38.5-149.7-97.8-193.3-10.7-7.9-25.7-5.6-33.6 5.1s-5.6 25.7 5.1 33.6c47.5 35 78.2 91.2 78.2 154.7 0 106-86 192-192 192S56 368 56 262c0-63.4 30.7-119.7 78.2-154.7"
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
                  d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16zM164.3 78.2c7.8-4.1 10.9-13.7 6.9-21.6s-13.7-10.9-21.6-6.9C75 88.3 24 166.2 24 256c0 128.1 103.9 232 232 232s232-103.9 232-232c0-89.8-51-167.7-125.6-206.2-7.8-4.1-17.5-1-21.6 6.9s-1 17.5 6.9 21.6C412.1 111.5 456 178.6 456 256c0 110.5-89.5 200-200 200S56 366.5 56 256c0-77.4 43.9-144.5 108.3-177.8"
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
                  d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8zM157 71.1c3.9-2 5.5-6.9 3.4-10.8s-6.9-5.5-10.8-3.4C75 95.5 24 173.3 24 263.1c0 128.1 103.9 232 232 232s232-103.9 232-232c0-89.8-51-167.7-125.6-206.2-3.9-2-8.8-.5-10.8 3.4s-.5 8.8 3.4 10.8c69.5 35.9 117 108.4 117 192 0 119.3-96.7 216-216 216s-216-96.7-216-216c0-83.6 47.5-156.1 117-192"
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
                  d="M256 0c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M147.7 75.5c11.3 13.6 9.4 33.8-4.1 45.1C104.7 152.9 80 201.6 80 256c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4-13.6-11.3-15.4-31.5-4.1-45.1s31.5-15.4 45.1-4.1c52.7 44 86.5 110.4 86.5 184.6 0 132.5-107.5 240-240 240S16 388.6 16 256c0-74.2 33.7-140.6 86.6-184.6 13.6-11.3 33.8-9.4 45.1 4.1"
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
