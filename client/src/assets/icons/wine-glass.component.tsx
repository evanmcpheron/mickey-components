import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WineGlassIcon: React.FC<
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
                  d="M32.1 29.3C33.5 12.8 47.4 0 64 0h192c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6V448h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h48v-99.6C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7h143.8l-5.3-64H93.4z"
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
                  d="M32.1 22.1C33.1 9.6 43.5 0 56 0h208c12.5 0 22.9 9.6 23.9 22.1l13.9 176.4c5.9 74.6-46.6 139.4-117.8 151.5v114h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V350C64.8 337.9 12.3 273.1 18.1 198.5zM160 304c55 0 98.3-46.9 94-101.7l-2.1-26.3H68.1L66 202.3C61.7 257.1 105 304 160 304M71.9 128h176.2l-6.3-80H78.2z"
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
                  d="M49.6 160h220.8l3.2 35.6C279.7 262.4 227.1 320 160 320S40.3 262.4 46.4 195.6zm2.9-32 8.7-96h197.6l8.7 96zM29.4 29.1 14.5 192.7c-7.3 80.1 51.4 150 129.5 158.4V480H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V351.1c78.1-8.5 136.8-78.3 129.5-158.5L290.6 29.1C289.1 12.6 275.3 0 258.8 0H61.2C44.7 0 30.9 12.6 29.4 29.1"
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
                  d="M44.5 144h231l7 51.6C292.7 269.9 234.9 336 160 336S27.3 269.9 37.5 195.6zm2.2-16 13.4-98.2C61.2 21.9 67.9 16 75.9 16h168.2c8 0 14.8 5.9 15.9 13.8l13.3 98.2zM44.2 27.7 21.6 193.5C10.5 274.7 71.3 347.3 152 351.8V496H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V351.8c80.7-4.5 141.5-77.1 130.4-158.3L275.8 27.7C273.6 11.8 260.1 0 244.1 0H75.9c-16 0-29.5 11.8-31.7 27.7"
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
                  d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48v-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0zm17.9 203.1L93.4 64h133.2l11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="m88.1 128-6.3 75.1C78 248.8 114.1 288 160 288s82-39.2 78.1-84.9l-6.2-75.1z"
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
