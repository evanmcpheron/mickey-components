import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GiftCardIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M353.5 68.8c7.6-12.9 21.4-20.8 36.3-20.8h2.2c22.1 0 40 17.9 40 40s-17.9 40-40 40h-73.3zm-131 0 34.8 59.2H184c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8m89.6-24.3-24.1 41-24.1-41C247.7 16.9 218.1 0 186.2 0H184c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-41.6c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4zM512 384v64H64v-64zm0-64H64V192h166.1l-40.5 48.6c-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.1 33.8-3.1l61.5-73.8 61.6 73.9c8.5 10.2 23.6 11.6 33.8 3.1s11.6-23.6 3.1-33.8L345.9 192H512z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M353.5 68.8 318.7 128H392c22.1 0 40-17.9 40-40s-17.9-40-40-40h-2.2c-14.9 0-28.8 7.9-36.3 20.8M288 197.5l-61.6 73.9c-8.5 10.2-23.6 11.6-33.8 3.1s-11.6-23.6-3.1-33.8l53.9-64.7H64c-8.8 0-16 7.2-16 16v128h480V192c0-8.8-7.2-16-16-16H332.6l53.9 64.6c8.5 10.2 7.1 25.3-3.1 33.8s-25.3 7.1-33.8-3.1zM48 384v64c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16v-64zm208-256h1.3l-34.8-59.2C214.9 55.9 201.1 48 186.2 48H184c-22.1 0-40 17.9-40 40s17.9 40 40 40zm7.9-83.6 24.1 41 24.1-41C328.3 16.9 357.9 0 389.8 0h2.2c48.6 0 88 39.4 88 88 0 14.4-3.5 28-9.6 40H512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h41.6c-6.1-12-9.6-25.6-9.6-40 0-48.6 39.4-88 88-88h2.2c31.9 0 61.5 16.9 77.7 44.4"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M397.1 32c-17.6 0-33.9 9-43.2 23.9l-45 72.1H400c26.5 0 48-21.5 48-48s-21.5-48-48-48zm-130 96-45-72.1C212.8 41 196.5 32 178.9 32H176c-26.5 0-48 21.5-48 48s21.5 48 48 48h91.1m20.9-27 38.8-62c15.1-24.2 41.7-39 70.3-39h2.9c44.2 0 80 35.8 80 80 0 18-6 34.6-16 48h48c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h48c-10-13.4-16-30-16-48 0-44.2 35.8-80 80-80h2.9c28.6 0 55.2 14.7 70.3 39zm-112 59H64c-17.7 0-32 14.3-32 32v96h512v-96c0-17.7-14.3-32-32-32H322.2l58.1 69.8c5.7 6.8 4.7 16.9-2 22.5s-16.9 4.7-22.5-2L288 169l-67.7 81.3c-5.7 6.8-15.7 7.7-22.5 2s-7.7-15.7-2-22.5l58-69.8zM32 320v64h512v-64zm512 128v-32H32v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M405.1 16c-20.3 0-39.2 10.5-50 27.7L302.4 128H408c30.9 0 56-25.1 56-56s-25.1-56-56-56zM273.6 128l-52.7-84.3c-10.8-17.2-29.7-27.7-50-27.7H168c-30.9 0-56 25.1-56 56s25.1 56 56 56h105.6m14.4-7.1 53.6-85.7C355.3 13.3 379.3 0 405.1 0h2.9c39.8 0 72 32.2 72 72 0 22.6-10.4 42.8-26.7 56H512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h58.7C106.4 114.8 96 94.6 96 72c0-39.8 32.2-72 72-72h2.9c25.8 0 49.8 13.3 63.5 35.2zM168 144H64c-26.5 0-48 21.5-48 48v96h544v-96c0-26.5-21.5-48-48-48H305.1l69.1 82.9c2.8 3.4 2.4 8.4-1 11.3s-8.4 2.4-11.3-1L288 148.5l-73.9 88.6c-2.8 3.4-7.9 3.9-11.3 1s-3.9-7.9-1-11.3l69.1-82.8H168M16 304v96h544v-96zm544 144v-32H16v32c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M470.4 128H512c35.3 0 64 28.7 64 64v128H0V192c0-35.3 28.7-64 64-64h41.6c14.6 28.5 44.2 48 78.4 48h59.4l-53.9 64.6c-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.1 33.8-3.1l61.6-73.8 61.6 73.9c8.5 10.2 23.6 11.6 33.8 3.1s11.6-23.6 3.1-33.8L332.6 176H392c34.2 0 63.8-19.5 78.4-48M0 416h576v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M186.2 48H184c-22.1 0-40 17.9-40 40s17.9 40 40 40h73.3l-34.8-59.2C214.9 55.9 201.1 48 186.2 48m57.3 128H184c-48.6 0-88-39.4-88-88s39.4-88 88-88h2.2c31.9 0 61.5 16.9 77.7 44.4l24.1 41 24.1-41C328.3 16.9 357.9 0 389.8 0h2.2c48.6 0 88 39.4 88 88s-39.4 88-88 88h-59.4l53.9 64.6c8.5 10.2 7.1 25.3-3.1 33.8s-25.3 7.1-33.8-3.1L288 197.5l-61.6 73.9c-8.5 10.2-23.6 11.6-33.8 3.1s-11.6-23.6-3.1-33.8l53.9-64.7zM392 128c22.1 0 40-17.9 40-40s-17.9-40-40-40h-2.2c-14.9 0-28.8 7.9-36.3 20.8L318.7 128H392m184 288H0v-96h576z"
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
