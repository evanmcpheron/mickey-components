import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShopIcon: React.FC<
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
                  d="M36.8 192h566.4c20.3 0 36.8-16.5 36.8-36.8 0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M64 224v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224h-64v160H128V224zm448 0v256c0 17.7 14.3 32 32 32s32-14.3 32-32V224z"
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
                  d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25c8.4-15.4 24.5-25 42.1-25h391c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3 0 21.1-17.1 38.2-38.2 38.2H576V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V224H384v248c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40V224H38.2C17.1 224 0 206.9 0 185.8M112 224v96h224v-96zM515.5 48h-391L54.7 176h530.6zM112 464h224v-96H112z"
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
                  d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25c8.4-15.4 24.5-25 42.1-25h391c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3 0 21.1-17.1 38.2-38.2 38.2H576V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V224H96v128h256v-96h32v208c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V224H38.2C17.1 224 0 206.9 0 185.8m80 6.2h521.8c3.4 0 6.2-2.8 6.2-6.2 0-1-.3-2.1-.8-3L529.6 40.3c-2.8-5.1-8.2-8.3-14-8.3h-391c-5.9 0-11.2 3.2-14 8.3L32.8 182.8c-.5.9-.8 1.9-.8 3 0 3.4 2.8 6.2 6.2 6.2zm16 272c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-80H96z"
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
                  d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25c8.4-15.4 24.5-25 42.1-25h391c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3 0 21.1-17.1 38.2-38.2 38.2H576V488c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V256c0-4.4 3.6-8 8-8s8 3.6 8 8v232c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V224H80v240c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V256c0-4.4 3.6-8 8-8s8 3.6 8 8v208c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V224H38.2C17.1 224 0 206.9 0 185.8M72 208h529.8c12.3 0 22.2-10 22.2-22.2 0-3.7-.9-7.4-2.7-10.7L543.6 32.7C538 22.4 527.2 16 515.5 16h-391c-11.7 0-22.5 6.4-28.1 16.7L18.7 175.1c-1.8 3.3-2.7 6.9-2.7 10.7C16 198 26 208 38.2 208zm64 40c4.4 0 8 3.6 8 8v104c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V256c0-4.4 3.6-8 8-8s8 3.6 8 8v104c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24V256c0-4.4 3.6-8 8-8"
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
                  d="M64 192h512v288c0 17.7-14.3 32-32 32s-32-14.3-32-32V224H384v240c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V192m256 32H128v160h192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M603.2 192H36.8C16.5 192 0 175.5 0 155.2c0-7.3 2.2-14.4 6.2-20.4L81.8 21.4C90.7 8 105.6 0 121.7 0h396.6c16.1 0 31 8 39.9 21.4l75.6 113.3c4 6.1 6.2 13.2 6.2 20.4 0 20.3-16.5 36.8-36.8 36.8z"
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
