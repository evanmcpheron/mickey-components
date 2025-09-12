import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeadSideGogglesIcon: React.FC<
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
                  d="M45.9 128C75.3 53.1 148.3 0 233.7 0H256c39.3 0 75.8 11.8 106.2 32H304c-61.9 0-112 50.1-112 112 0 17.2 3.9 33.5 10.8 48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zM304 256h203.1c3.2 6.2 4.9 13.1 4.9 20.2 0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64h-64v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V375.8c0-17-7.1-33-17.5-46.4-23.5-30.3-40.2-67.8-45-105.4h192.1c20.2 19.8 47.9 32 78.4 32m0-192h112v160H304c-44.2 0-80-35.8-80-80s35.8-80 80-80m176 160h-32V64h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32"
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
                  d="M.6 240h48.1c3.3 35.9 17.3 68.7 38.8 95.1 13.6 16.6 24.5 38.5 24.5 63.4V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-89.4c0-10.7-4.8-22.2-13.7-33.1C22 330.8 3.9 287.4.6 240M122.8 80h93.7C234 60.4 259.6 48 288 48h-64c-37.7 0-72.6 11.8-101.2 32M64 80H52.4C93.5 31.1 155.1 0 224 0h24c48.6 0 94.8 18.1 130.5 48H464c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H288c-28.4 0-54-12.4-71.6-32H64c-35.3 0-64-28.7-64-64s28.7-64 64-64m400 192.4v-.4h48v.4c0 35.1-28.5 63.6-63.6 63.6h-.4v48c0 35.3-28.7 64-64 64h-64v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64c0-13.3 10.7-24 24-24h88c8.8 0 16-7.2 16-16v-72c0-13.3 10.7-24 24-24h24.4c8.6 0 15.6-7 15.6-15.6M64 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h129.3c-.9-5.2-1.3-10.5-1.3-16s.5-10.8 1.3-16zm320-32h-96c-26.5 0-48 21.5-48 48s21.5 48 48 48h96zm48 0v96h32V96z"
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
                  d="M2.3 256c5.8 40.5 22.4 77.5 46.8 108 9.4 11.6 14.9 24.6 14.9 37.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-94.6c0-22.1-9.5-41.9-21.9-57.4-20-25-33.9-55-39.4-88zM80.9 96C116 56.7 167.1 32 224 32h16c36.1 0 70.6 11.9 98.9 32H288c-28.4 0-54 12.4-71.6 32zm-45.1 6.6C14.6 113 0 134.8 0 160c0 35.3 28.7 64 64 64h152.4c17.6 19.6 43.1 32 71.6 32h176c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-76.4C350.2 24.7 296.8 0 240 0h-16C145 0 75.6 40.8 35.7 102.6zM197.5 192H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h133.5c-3.5 10-5.5 20.8-5.5 32s1.9 22 5.5 32m313.3 96h-33.6c-4.5 9.5-14.2 16-25.4 16H432c-8.8 0-16 7.2-16 16v64c0 17.7-14.3 32-32 32h-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64c35.3 0 64-28.7 64-64v-48h3.8c29.1 0 53.3-20.6 58.9-48zM288 96h96v128h-96c-35.3 0-64-28.7-64-64s28.7-64 64-64m128 128V96h48c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16z"
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
                  d="M16 224H0c.2 52.4 17.1 100.7 47.4 138.8C57.5 375.5 64 390.2 64 405.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-98.7c0-19.8-8.5-37.8-20.1-52.4C32 317.7 16.2 273 16 224M39.1 96.8C16.8 101 0 120.5 0 144c0 26.5 21.5 48 48 48h174.2c15.7 24.1 42.9 40 73.8 40h176c22.1 0 40-17.9 40-40V96c0-22.1-17.9-40-40-40h-93.6C342 21.4 292.3 0 239.7 0h-16.8C146.6 0 79.2 38.3 39.1 96.8m20.4-.8c37.9-48.7 97-80 163.5-80h16.8C282 16 322.2 31 354 56h-58c-30.9 0-58.1 15.9-73.8 40zm430.6 160c3.8 5.8 5.9 12.7 5.9 19.8 0 20-16.2 36.2-36.2 36.2H440c-4.4 0-8 3.6-8 8v72c0 22.1-17.9 40-40 40h-80c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h72c30.9 0 56-25.1 56-56v-64h11.8c28.8 0 52.2-23.4 52.2-52.2 0-6.9-1.4-13.6-3.9-19.8zM296 72h104v144H296c-39.8 0-72-32.2-72-72s32.2-72 72-72m120 144V72h56c13.3 0 24 10.7 24 24v96c0 13.3-10.7 24-24 24zm-208-72c0 11.3 2.1 22.1 6 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h166c-3.9 9.9-6 20.7-6 32"
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
                  d="M45.9 128h179.7c7.4-36.5 39.7-64 78.4-64h95.1C364 24.7 312.9 0 256 0h-22.3C148.3 0 75.3 53.1 45.9 128m-13.7 64c-.2 3.2-.2 6.5-.2 9.7 0 44.8 18.3 91.5 46.5 127.7C88.9 342.8 96 358.8 96 375.8V480c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-32h64c35.3 0 64-28.7 64-64v-64h20.2c24.2 0 43.8-19.6 43.8-43.8 0-10-3.4-19.6-9.6-27.4L482.6 224H304c-26.2 0-49.4-12.6-64-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M304 64h112v160H304c-26.2 0-49.4-12.6-64-32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h193.6c7.4-36.5 39.7-64 78.4-64m176 160h-32V64h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32"
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
