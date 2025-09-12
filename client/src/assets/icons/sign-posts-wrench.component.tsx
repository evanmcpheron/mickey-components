import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SignPostsWrenchIcon: React.FC<
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
                  d="M96 0C78.3 0 64 14.3 64 32H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48h336c-20.1-26.7-32-60-32-96 0-49.9 22.9-94.5 58.6-123.8 14.2-11.7 32.6-12.2 46.7-4.6 13.6 7.3 22.7 21.7 22.7 38.3V288c0 17.7 14.3 32 32 32s32-14.3 32-32v-58.1c0-16.6 9.1-31 22.7-38.3 2.9-1.6 6.1-2.8 9.3-3.7V80c0-26.5-21.5-48-48-48h-16c0-17.7-14.3-32-32-32s-32 14.3-32 32H128c0-17.7-14.3-32-32-32m32 448H64v32c0 17.7 14.3 32 32 32s32-14.3 32-32zm512-128c0-39.9-18.3-75.6-46.9-99-7.1-5.9-17.1-.3-17.1 9v58c0 35.3-28.7 64-64 64s-64-28.7-64-64v-58.1c0-9.2-9.9-14.8-17.1-9-28.6 23.5-46.9 59.1-46.9 99 0 40.4 18.7 76.5 48 99.9V476c0 19.9 16.1 36 36 36h88c19.9 0 36-16.1 36-36v-56.1c29.3-23.5 48-59.5 48-99.9"
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
                  d="M64 24v8H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48h16v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h272c-10.8-14.3-19.2-30.5-24.7-48H48V80h480v80.8c16.9 1.7 33.1 6 48 12.5V80c0-26.5-21.5-48-48-48h-16v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H112v-8c0-13.3-10.7-24-24-24S64 10.7 64 24m576 296c0-47.4-25.7-88.8-64-110.9-7.4-4.3-16 1.5-16 10V304c0 26.5-21.5 48-48 48s-48-21.5-48-48v-84.9c0-8.5-8.6-14.3-16-10-38.3 22.1-64 63.5-64 110.9 0 40.4 18.7 76.5 48 99.9V476c0 19.9 16.1 36 36 36h88c19.9 0 36-16.1 36-36v-56.1c29.3-23.5 48-59.5 48-99.9M512.3 192h-.6.7z"
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
                  d="M64 64H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h284c4.4 11.3 9.9 22 16.5 32H96v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h16V16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h384V16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c26.5 0 48 21.5 48 48v83.2c-10.1-5.2-20.8-9.4-32-12.6V80c0-8.8-7.2-16-16-16H64m400 137.3V288c0 17.7 14.3 32 32 32s32-14.3 32-32v-86.7c0-5.3 2.6-10.3 7.1-13.3s10-3.6 14.9-1.6c52.7 21.4 90 73.1 90 133.5 0 42.7-18.6 81-48 107.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-76.1c0-4.9 2.2-9.4 6-12.5 25.6-20.6 42-52.1 42-87.4 0-38-19-71.7-48-91.9V288c0 35.3-28.7 64-64 64s-64-28.7-64-64v-59.9c-29 20.2-48 53.9-48 91.9 0 35.4 16.4 66.9 42 87.4 3.8 3 6 7.6 6 12.5V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-68.7c-29.4-26.3-48-64.6-48-107.3 0-60.5 37.3-112.2 90-133.5 4.9-2 10.5-1.4 14.9 1.6s7.1 7.9 7.1 13.3z"
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
                  d="M80 32V8c0-4.4 3.6-8 8-8s8 3.6 8 8v24h384V8c0-4.4 3.6-8 8-8s8 3.6 8 8v24h32c26.5 0 48 21.5 48 48v83.2c-5.2-2.7-10.5-5.1-16-7.2V80c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h291.2c2.8 5.5 5.9 10.8 9.3 16H96v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm376 160.7V288c0 22.1 17.9 40 40 40s40-17.9 40-40v-95.3c0-2.6 1.3-5.1 3.4-6.6s4.9-1.8 7.4-.9C601.3 205.8 640 258.3 640 320c0 46.4-21.9 87.7-56 114v70c0 4.4-3.6 8-8 8s-8-3.6-8-8v-74c0-2.6 1.2-5 3.3-6.5 32-23.3 52.7-61 52.7-103.5 0-50.6-29.4-94.4-72-115.1V288c0 30.9-25.1 56-56 56s-56-25.1-56-56v-83.1c-42.6 20.8-72 64.5-72 115.1 0 42.5 20.7 80.2 52.7 103.5 2.1 1.5 3.3 3.9 3.3 6.5v74c0 4.4-3.6 8-8 8s-8-3.6-8-8v-70c-34.1-26.3-56-67.6-56-114 0-61.7 38.7-114.2 93.2-134.8 2.5-.9 5.2-.6 7.4.9s3.4 4 3.4 6.6"
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
                  d="M64 32C64 14.3 78.3 0 96 0s32 14.3 32 32h320c0-17.7 14.3-32 32-32s32 14.3 32 32h16c26.5 0 48 21.5 48 48v107.9c-3.2.8-6.4 2.1-9.3 3.7-13.6 7.3-22.7 21.7-22.7 38.3V288c0 17.7-14.3 32-32 32s-32-14.3-32-32v-58.1c0-16.6-9.1-31-22.7-38.3-14.1-7.6-32.4-7.1-46.7 4.6C374.9 225.5 352 270.1 352 320c0 36 11.9 69.3 32 96H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm0 416h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32zm448-256h-.3.7-.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M592 419.9c29.3-23.5 48-59.5 48-99.9 0-39.9-18.3-75.6-46.9-99-7.1-5.9-17.1-.3-17.1 9v58c0 35.3-28.7 64-64 64s-64-28.7-64-64v-58.1c0-9.2-9.9-14.8-17.1-9-28.6 23.5-46.9 59.1-46.9 99 0 40.4 18.7 76.5 48 99.9V476c0 19.9 16.1 36 36 36h88c19.9 0 36-16.1 36-36zM512 192h-.3.7-.3z"
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
