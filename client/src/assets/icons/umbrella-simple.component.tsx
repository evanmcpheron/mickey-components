import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UmbrellaSimpleIcon: React.FC<
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
                  d="M256 0c17.7 0 32 14.3 32 32v2c115.8 14.4 207.6 106.2 222 222.1 2.2 17.5-12.4 31.9-30 31.9H32c-17.7 0-32.2-14.4-30-31.9C16.4 140.2 108.2 48.4 224 34v-2c0-17.7 14.3-32 32-32m32 430.6c0 45-36.5 81.4-81.4 81.4-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6 9.6 0 17.4-7.8 17.4-17.4V320h64z"
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
                  d="M256 0c13.3 0 24 10.7 24 24v9.1c119.6 11.1 215.3 104.5 230 223 2.2 17.5-12.4 31.9-30 31.9H32c-17.7 0-32.2-14.4-30-31.9 14.7-118.5 110.4-211.9 230-223V24c0-13.3 10.7-24 24-24m202.4 240C436.8 148.3 354.3 80 256 80S75.2 148.3 53.6 240zM280 438.6c0 40.6-32.9 73.4-73.4 73.4-27.8 0-53.2-15.7-65.7-40.6l-2.3-4.7c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7l2.3 4.7c4.3 8.6 13.1 14.1 22.8 14.1 14.1 0 25.4-11.4 25.4-25.4V320h48z"
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
                  d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16.5C116.7 40.1 17 134.9 2 256.1-.2 273.6 14.3 288 32 288h448c17.7 0 32.2-14.4 30-31.9-15-121.2-114.7-216-238-223.6zm0 430.6V320h-32v126.6c0 18.5-15 33.4-33.4 33.4-12.7 0-24.2-7.2-29.9-18.5l-2.3-4.7c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l2.3 4.7c11.1 22.2 33.8 36.2 58.6 36.2 36.1 0 65.4-29.3 65.4-65.4M256 64c112.8 0 206.2 83.5 221.7 192H34.3C49.8 147.5 143.2 64 256 64"
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
                  d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v24.1C121.1 36 17.4 132.3 2 256.1-.2 273.6 14.3 288 32 288h448c17.7 0 32.2-14.4 30-31.9C494.6 132.3 391 36 264 32.1zm0 454.2V320h-16v142.2c0 18.7-15.2 33.8-33.8 33.8-14.6 0-27.5-9.3-32.1-23.1l-6.5-19.4c-1.4-4.2-5.9-6.5-10.1-5.1s-6.5 5.9-5.1 10.1l6.5 19.4c6.8 20.4 25.8 34.1 47.3 34.1 27.5 0 49.8-22.3 49.8-49.8M17.9 258C32.6 139.6 133.6 48 256 48s223.4 91.6 238.2 210c.8 6.7-4.7 14-14.2 14H32c-9.4 0-15-7.3-14.1-14"
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
                  d="M288 288v142.6c0 45-36.5 81.4-81.4 81.4-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6 9.6 0 17.4-7.8 17.4-17.4V288z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v2C108.2 48.4 16.4 140.2 2 256.1-.2 273.6 14.3 288 32 288h448c17.7 0 32.2-14.4 30-31.9C495.6 140.2 403.8 48.4 288 34z"
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
