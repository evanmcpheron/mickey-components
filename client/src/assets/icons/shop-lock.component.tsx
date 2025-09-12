import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShopLockIcon: React.FC<
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
                  d="M36.8 192h412.8c20.2-19.8 47.9-32 78.4-32s58.1 12.2 78.3 31.9c18.9-1.6 33.7-17.4 33.7-36.7 0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M384 224h-64v160H128V224H64v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224m144 16c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25c8.4-15.4 24.5-25 42.1-25h391c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3 0 12.4-5.9 23.3-14.9 30.3-9.6-16.7-23.4-30.6-39.9-40.4L515.5 48h-391L54.7 176h415.6c-18.8 11.3-34 28-43.5 48H384v248c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40V224H38.2C17.1 224 0 206.9 0 185.8M112 224v96h224v-96zm0 240h224v-96H112zm416-224c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25c8.4-15.4 24.5-25 42.1-25h391c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3 0 12.4-5.9 23.3-14.9 30.3-5.4-9.3-12.1-17.8-19.8-25.2 1.6-1.1 2.7-3 2.7-5.2 0-1-.3-2.1-.8-3L529.6 40.3c-2.8-5.1-8.2-8.3-14-8.3h-391c-5.9 0-11.2 3.2-14 8.3L32.8 182.8c-.5.9-.8 1.9-.8 3 0 3.4 2.8 6.2 6.2 6.2h411.4c-9.4 9.2-17.1 20-22.8 32H96v128h256v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v192.3c-.2 26.4-21.6 47.7-48 47.7H112c-26.5 0-48-21.5-48-48V224H38.2C17.1 224 0 206.9 0 185.8M96 464c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-80H96zm432-240c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm0 80v128h160V352z"
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
                  d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25c8.4-15.4 24.5-25 42.1-25h391c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3 0 12.4-5.9 23.3-14.9 30.3-2.7-4.7-5.7-9.1-9-13.3 4.9-4.1 7.9-10.2 7.9-17 0-3.7-.9-7.4-2.7-10.7L543.6 32.7C538 22.4 527.2 16 515.5 16h-391c-11.7 0-22.5 6.4-28.1 16.7L18.7 175.1c-1.8 3.3-2.7 6.9-2.7 10.7C16 198 26 208 38.2 208h397.9c-3.5 5-6.6 10.4-9.3 16H80v240c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V256c0-4.4 3.6-8 8-8s8 3.6 8 8v208c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V224H38.2C17.1 224 0 206.9 0 185.8M136 248c4.4 0 8 3.6 8 8v104c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V256c0-4.4 3.6-8 8-8s8 3.6 8 8v104c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24V256c0-4.4 3.6-8 8-8m392-40c-26.5 0-48 21.5-48 48v64h96v-64c0-26.5-21.5-48-48-48m-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64v64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h16zm-16 80c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H448"
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
                  d="M449.6 192H36.8C16.5 192 0 175.5 0 155.2c0-7.3 2.2-14.4 6.2-20.4L81.8 21.4C90.7 8 105.6 0 121.7 0h396.6c16.1 0 31 8 39.9 21.4l75.6 113.3c4 6.1 6.2 13.2 6.2 20.4 0 19.3-14.8 35.1-33.7 36.7-20.2-19.6-47.8-31.8-78.3-31.8s-58.2 12.2-78.4 32M384 352v112c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V224h64v160h192V224h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
