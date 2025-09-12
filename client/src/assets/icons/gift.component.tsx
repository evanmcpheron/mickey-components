import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GiftIcon: React.FC<
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
                  d="m190.5 68.8 34.8 59.2H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8M64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-41.6c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152c-48.6 0-88 39.4-88 88m336 0c0 22.1-17.9 40-40 40h-73.3l34.8-59.2c7.6-12.9 21.4-20.8 36.3-20.8h2.2c22.1 0 40 17.9 40 40M32 288v176c0 26.5 21.5 48 48 48h144V288zm256 224h144c26.5 0 48-21.5 48-48V288H288z"
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
                  d="M231.9 44.4C215.7 16.9 186.1 0 154.2 0H152c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40H48c-26.5 0-48 21.5-48 48v64c0 20.9 13.4 38.7 32 45.3V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V285.3c18.6-6.6 32-24.4 32-45.3v-64c0-26.5-21.5-48-48-48h-25.6c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41zM464 176v64H288v-64h176m-240 0v64H48v-64h176m0 112v176H96c-8.8 0-16-7.2-16-16V288zm64 176V288h144v160c0 8.8-7.2 16-16 16zm72-336h-73.3l34.8-59.2c7.6-12.9 21.4-20.8 36.3-20.8h2.2c22.1 0 40 17.9 40 40s-17.9 40-40 40m-136 0h-72c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8l34.8 59.2z"
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
                  d="M365.1 32c-17.6 0-33.9 9-43.2 23.9l-45 72.1H368c26.5 0 48-21.5 48-48s-21.5-48-48-48zm-130 96-45-72.1C180.8 41 164.5 32 146.9 32H144c-26.5 0-48 21.5-48 48s21.5 48 48 48h91.1m20.9-27 38.8-62C310 14.8 336.5 0 365.1 0h2.9c44.2 0 80 35.8 80 80 0 18-6 34.6-16 48h32c26.5 0 48 21.5 48 48v64c0 20.9-13.4 38.7-32 45.3V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V285.3C13.4 278.7 0 260.9 0 240v-64c0-26.5 21.5-48 48-48h32c-10-13.4-16-30-16-48 0-44.2 35.8-80 80-80h2.9c28.6 0 55.2 14.7 70.3 39zm-112 59H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h192v-96h-96m128 0v96h192c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H272m-32 128H64v160c0 17.7 14.3 32 32 32h144zm32 192h144c17.7 0 32-14.3 32-32V288H272z"
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
                  d="M373.1 16c-20.3 0-39.2 10.5-50 27.7L270.4 128H376c30.9 0 56-25.1 56-56s-25.1-56-56-56zM241.6 128l-52.7-84.3c-10.8-17.2-29.7-27.7-50-27.7H136c-30.9 0-56 25.1-56 56s25.1 56 56 56h105.6m14.4-7.1 53.6-85.7C323.3 13.3 347.3 0 373.1 0h2.9c39.8 0 72 32.2 72 72 0 22.6-10.4 42.8-26.7 56H464c26.5 0 48 21.5 48 48v32c0 20.9-13.4 38.7-32 45.3V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V253.3C13.4 246.7 0 228.9 0 208v-32c0-26.5 21.5-48 48-48h42.7C74.4 114.8 64 94.6 64 72c0-39.8 32.2-72 72-72h2.9c25.8 0 49.8 13.3 63.5 35.2zM136 144H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h200v-96H136m128 0v96h200c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H264m-16 112H48v192c0 26.5 21.5 48 48 48h152zm16 240h152c26.5 0 48-21.5 48-48V256H264z"
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
                  d="M73.6 128c14.6 28.5 44.2 48 78.4 48h72v80H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zM480 256H288v-80h72c34.2 0 63.8-19.5 78.4-48H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32M32 288h192v224H80c-26.5 0-48-21.5-48-48zm256 224V288h192v176c0 26.5-21.5 48-48 48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m190.5 68.8 34.8 59.2H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8M256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152c-48.6 0-88 39.4-88 88s39.4 88 88 88h72v80h64v-80h72c48.6 0 88-39.4 88-88S408.6 0 360 0h-2.2c-31.9 0-61.5 16.9-77.7 44.4zm65.5-16.7c7.6-12.9 21.4-20.8 36.3-20.8h2.2c22.1 0 40 17.9 40 40s-17.9 40-40 40h-73.3zM288 512V288h-64v224z"
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
