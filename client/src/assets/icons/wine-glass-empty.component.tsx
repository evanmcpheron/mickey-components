import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WineGlassEmptyIcon: React.FC<
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
                  d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48v-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0zm17.9 203.1L93.4 64h133.2l11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9"
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
                  d="M56 0C43.5 0 33.1 9.6 32.1 22.1l-14 176.4C12.3 273.1 64.8 337.9 136 350v114H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64V350c71.2-12.1 123.7-76.9 117.9-151.5l-14-176.4C286.9 9.6 276.5 0 264 0zm10 202.3L78.2 48h163.6L254 202.3c4.3 54.8-39 101.7-94 101.7s-98.3-46.9-94-101.7"
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
                  d="M46.4 195.6C40.3 262.4 92.9 320 160 320s119.7-57.6 113.6-124.4L258.8 32H61.2zm-31.9-2.9L29.4 29.1C30.9 12.6 44.7 0 61.2 0h197.6c16.6 0 30.4 12.6 31.9 29.1l14.9 163.6c7.3 80.2-51.4 150-129.5 158.5V480h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V351.1C65.9 342.7 7.2 272.8 14.5 192.7"
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
                  d="M37.5 195.6C27.3 269.9 85.1 336 160 336s132.7-66.1 122.5-140.4L259.9 29.8C258.8 21.9 252 16 244 16H75.9c-8 0-14.8 5.9-15.9 13.8zm-15.9-2.2L44.2 27.7C46.4 11.8 59.9 0 75.9 0h168.2c16 0 29.5 11.8 31.7 27.7l22.6 165.8c11.1 81.2-49.7 153.8-130.4 158.3V496h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h80V351.8c-80.7-4.5-141.5-77.1-130.4-158.3z"
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
