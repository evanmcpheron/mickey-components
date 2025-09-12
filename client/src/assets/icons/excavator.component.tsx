import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ExcavatorIcon: React.FC<
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
                  d="M160 64v96h142.9l-64-96zm224 126.5V272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h48V48c0-26.5 21.5-48 48-48h94.9c21.4 0 41.4 10.7 53.3 28.5l78.4 117.7c8.8 13.1 13.4 28.6 13.4 44.4zM80 416c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16zM0 432c0-44.2 35.8-80 80-80h256c44.2 0 80 35.8 80 80s-35.8 80-80 80H80c-44.2 0-80-35.8-80-80m640-112v112c0 44.2-35.8 80-80 80h-78.1c-18.7 0-33.9-15.2-33.9-33.9 0-9 3.6-17.6 9.9-24L576 336V128L416 288V160L562.7 13.3c8.5-8.5 20-13.3 32-13.3 25 0 45.3 20.3 45.3 45.3z"
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
                  d="M144 48h102.9c2.7 0 5.2 1.3 6.7 3.6L325.8 160H144zm240 176v-41.5c0-14.2-4.2-28.1-12.1-39.9L293.5 24.9C283.1 9.4 265.6 0 246.9 0H136c-22.1 0-40 17.9-40 40v120H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-48-16v64H48v-64zM80 400h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-17.7 0-32-14.3-32-32s14.3-32 32-32M0 432c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80s-35.8-80-80-80H80c-44.2 0-80 35.8-80 80m457.9 22.1c-6.4 6.4-9.9 15-9.9 24 0 18.7 15.2 33.9 33.9 33.9H560c44.2 0 80-35.8 80-80V46.6c0-2.7-.2-5.3-.7-7.8-3.7-22-22.9-38.8-46-38.8-11.2 0-22.1 4-30.5 11.4L416 138.7v63.5L592 49.7v30.5l-31.6 27.7L416 234.2V298l128-112 48-42v176z"
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
                  d="M128 0c-17.7 0-32 14.3-32 32v128H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-82.7c0-11.6-3.2-23-9.1-32.9L295 23.3C286.4 8.8 270.7 0 253.9 0zm211.8 160.2c-1.3-.1-2.5-.2-3.8-.2H128V32h125.9c5.6 0 10.8 2.9 13.7 7.8zM32 272v-64c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16m304 112c26.5 0 48 21.5 48 48s-21.5 48-48 48H80c-26.5 0-48-21.5-48-48s21.5-48 48-48zM80 352c-44.2 0-80 35.8-80 80s35.8 80 80 80h256c44.2 0 80-35.8 80-80s-35.8-80-80-80zm400.6 124.7L608 349.3V432c0 26.5-21.5 48-48 48h-78.1c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-1 .6-1.4M458 454.1c-6.4 6.4-9.9 15-9.9 24 0 18.7 15.2 33.9 33.9 33.9h78c44.2 0 80-35.8 80-80V46.6C640 20.9 619.1 0 593.4 0c-11.2 0-22.1 4-30.5 11.4L416 138.7V181L583.8 35.6c2.7-2.3 6.1-3.6 9.6-3.6 8.1 0 14.6 6.5 14.6 14.6v38.7L586.8 104 416 254.7v42.7l160-141.2 32-28.2v176L457.9 454.1zM112 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M136 16h117.3c8.7 0 16.6 4.7 20.9 12.2L349.9 162c-4.4-1.3-9-2-13.9-2H128V24c0-4.4 3.6-8 8-8m-24 8v136H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-67.4c0-9.7-2.5-19.1-7.2-27.6L288.2 20.3A40.13 40.13 0 0 0 253.3 0H136c-13.3 0-24 10.7-24 24m224 152c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h288M80 368h256c35.3 0 64 28.7 64 64s-28.7 64-64 64H80c-35.3 0-64-28.7-64-64s28.7-64 64-64M0 432c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80s-35.8-80-80-80H80c-44.2 0-80 35.8-80 80m128 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m112-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m256-270.5v157.4L450.2 450.2C443.6 457 440 466 440 475.5c0 20.2 16.4 36.5 36.5 36.5H552c48.6 0 88-39.4 88-88V43.2C640 19.4 620.6 0 596.8 0c-10.1 0-19.9 3.5-27.7 10L416 137.6v20.8L579.3 22.3c4.9-4.1 11.1-6.3 17.4-6.3 15 0 27.2 12.2 27.2 27.2V424c0 39.8-32.2 72-72 72h-75.4c-11.3 0-20.5-9.2-20.5-20.5 0-5.3 2-10.4 5.7-14.2l128.1-133.7c1.4-1.5 2.2-3.5 2.2-5.5V144c0-3.1-1.8-6-4.7-7.3s-6.2-.8-8.6 1.2L416 279v21.2z"
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
                  d="M416 160v128l160-160v208L457.9 454.1c-6.4 6.4-9.9 15-9.9 24 0 18.7 15.2 33.9 33.9 33.9H560c44.2 0 80-35.8 80-80V45.3c0-25-20.3-45.3-45.3-45.3-12 0-23.5 4.8-32 13.3zm-80 256c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zM80 352c-44.2 0-80 35.8-80 80s35.8 80 80 80h256c44.2 0 80-35.8 80-80s-35.8-80-80-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m238.9 64 64 96H160V64zM384 208v-17.5c0-15.8-4.7-31.2-13.4-44.4L292.1 28.5C280.3 10.7 260.3 0 238.9 0H144c-26.5 0-48 21.5-48 48v112H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-64"
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
