import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PrintMagnifyingGlassIcon: React.FC<
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
                  d="M192 0h226.7c17 0 33.3 6.7 45.3 18.7L493.3 48c12 12 18.7 28.3 18.7 45.3V160h-64V93.3L418.7 64H192v96h-64V64c0-35.3 28.7-64 64-64m-64 192h224c-38.9 29.2-64 75.7-64 128 0 11 1.1 21.7 3.2 32H192v96h160c26.7 20.1 60 32 96 32 17.5 0 34.4-2.8 50.2-8l6.3 6.3c-10.8 20.1-32 33.8-56.4 33.8H192c-35.3 0-64-28.7-64-64V384H96c-17.7 0-32-14.3-32-32v-96c0-35.3 28.7-64 64-64m320 208.2a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0 48c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l79.1 79.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426c-20.5 14-45.3 22.1-71.9 22.1z"
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
                  d="M176 160h-48V64c0-35.3 28.7-64 64-64h229.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3V160h-48V90.5c0-4.2-1.7-8.3-4.7-11.3l-26.5-26.5c-3-3-7.1-4.7-11.3-4.7H192c-8.8 0-16 7.2-16 16zm16 208v96h186.2c21.1 10.2 44.8 16 69.8 16 16.7 0 32.8-2.6 48-7.3v7.3c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32v-80H96c-17.7 0-32-14.3-32-32V256c0-35.3 28.7-64 64-64h224c-17.2 12.9-31.7 29.3-42.6 48H128c-8.8 0-16 7.2-16 16v96h32c0-17.7 14.3-32 32-32h112c0 16.7 2.6 32.8 7.3 48zm256 32.2a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0 48c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l79.1 79.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426c-20.5 14-45.3 22.1-71.9 22.1z"
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
                  d="M160 160V64c0-17.7 14.3-32 32-32h229.5c8.5 0 16.6 3.4 22.6 9.4l26.5 26.5c6 6 9.4 14.1 9.4 22.6V160h32V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C454.7 6.7 438.5 0 421.5 0H192c-35.3 0-64 28.7-64 64v96zm-32 64h192c9.1-12.1 19.9-22.9 32-32H128c-35.3 0-64 28.7-64 64v128c0 17.7 14.3 32 32 32h32v64c0 17.7 14.3 32 32 32h320c15.8 0 29-11.5 31.6-26.6L498.2 472c-5.9 1.9-12 3.6-18.2 4.8v3.2H160V352h131.2c-2.1-10.3-3.2-21-3.2-32H160c-17.7 0-32 14.3-32 32v32H96V256c0-17.7 14.3-32 32-32m320 .1a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 224c29.6 0 56.8-10 78.5-26.9l86.2 86.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-86.2-86.2C566 377 576 349.7 576 320.2c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128z"
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
                  d="M144 160V64c0-26.5 21.5-48 48-48h229.5c12.7 0 24.9 5.1 33.9 14.1l26.5 26.5c9 9 14.1 21.2 14.1 33.9V160h16V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C454.7 6.7 438.5 0 421.5 0H192c-35.3 0-64 28.7-64 64v96zm-16 48h205.7c5.7-5.8 11.8-11.1 18.2-16H128c-35.3 0-64 28.7-64 64v128c0 17.7 14.3 32 32 32h32v64c0 17.7 14.3 32 32 32h320c15.8 0 29-11.5 31.6-26.6L498.2 472c-.7.2-1.4.5-2.2.7v7.3c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16h128.8c-.5-5.3-.8-10.6-.8-16H160c-17.7 0-32 14.3-32 32v48H96c-8.8 0-16-7.2-16-16V256c0-26.5 21.5-48 48-48m320 .1a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 240c32.5 0 62.1-12.1 84.7-32l93.7 93.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L544 404.8c19.9-22.6 32-52.2 32-84.7 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128"
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
                  d="M128 64v96h64V64h226.7L448 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L464 18.7C452 6.7 435.7 0 418.7 0H192c-35.3 0-64 28.7-64 64m224 128H128c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h256c24.4 0 45.6-13.7 56.4-33.8l-6.3-6.3c-15.8 5.2-32.6 8-50.2 8-36 0-69.3-11.9-96-32H192V352h99.2c-2.1-10.3-3.2-21-3.2-32 0-52.3 25.1-98.8 64-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M528 320.2a80 80 0 1 0-160 0 80 80 0 1 0 160 0M519.9 426c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l79.1 79.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"
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
