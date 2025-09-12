import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChampagneGlassIcon: React.FC<
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
                  d="M88 0C71.9 0 58.3 12 56.3 27.9L33.2 208c-8.3 65.4 34.1 124.4 94.8 140v100H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48V348c60.7-15.6 103.1-74.6 94.8-140l-23-180.1C261.7 12 248.1 0 232 0zm20 128 8.2-64h87.7l8.2 64z"
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
                  d="M80 0C68.1 0 58 8.7 56.3 20.5L29.7 201C19.1 272.5 67.8 337.3 136 349.8V464H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64V349.8c64.4-12.2 110.8-72.8 102.6-140.6l-22.8-188C262.4 9.1 252.1 0 240 0zm8.9 128 11.8-80h118l9.7 80zm-7.1 48h152.4l4.7 38.9c5.7 47.4-31.2 89.1-78.9 89.1-51.1 0-90.3-45.4-82.9-96z"
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
                  d="M74.5 160h171l7.3 53.6c7.7 56.3-36 106.4-92.8 106.4S59.5 269.9 67.2 213.6zm4.4-32 13-96H228l13.1 96H78.8zM60.2 27.7 35.5 209.3C25.9 279.4 75.8 342.4 144 351v129H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V351c68.2-8.6 118.1-71.6 108.5-141.7L259.8 27.7C257.6 11.8 244.1 0 228.1 0H91.9c-16 0-29.5 11.8-31.7 27.7"
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
                  d="M54.1 144h211.8l9.7 53.4C288.8 269.6 233.3 336 160 336S31.2 269.6 44.4 197.4zm2.9-16 18-98.9C76.3 21.5 83 16 90.7 16h138.6c7.7 0 14.4 5.5 15.7 13.1l18 98.9zm2.2-101.7L28.6 194.6C14.2 273.9 72.7 347.1 152 351.8V496H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V351.8c79.3-4.6 137.8-77.9 123.4-157.2L260.8 26.3C258 11.1 244.8 0 229.3 0H90.7C75.2 0 62 11.1 59.2 26.3"
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
                  d="M56.3 27.9C58.3 12 71.9 0 88 0h144c16.1 0 29.7 12 31.7 27.9l23 180.1c8.4 65.4-34.1 124.3-94.8 140v100h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h48V348c-60.7-15.6-103.1-74.6-94.8-140l23-180.1zM116.2 64 96.7 216.1C91.9 254.3 121.6 288 160 288s68.1-33.7 63.3-71.9L203.8 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M212 128H108l-11.3 88.1C91.9 254.3 121.6 288 160 288s68.1-33.7 63.3-71.9z"
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
