import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SensorCloudIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h170.8c-6.9-14.5-10.8-30.8-10.8-48 0-44.7 26.2-83.3 64.1-101.3C290.9 271.3 339.9 224 400 224c17.2 0 33.5 3.9 48 10.8V96c0-35.3-28.7-64-64-64zm48 88v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24m96 0v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24m128 392h224c44.2 0 80-35.8 80-80 0-39-27.9-71.5-64.8-78.6.5-3.1.8-6.2.8-9.4 0-30.9-25.1-56-56-56-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80 0 5.9.6 11.7 1.9 17.2-37.5 6.7-65.9 39.4-65.9 78.8 0 44.2 35.8 80 80 80"
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
                  d="M64 80h320c8.8 0 16 7.2 16 16v128c17.2 0 33.5 3.9 48 10.8V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h170.8c-6.9-14.5-10.8-30.8-10.8-48H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m80 72c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm96 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm96 360h224c44.2 0 80-35.8 80-80 0-39-27.9-71.5-64.8-78.6.5-3.1.8-6.2.8-9.4 0-30.9-25.1-56-56-56-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80 0 5.9.6 11.7 1.9 17.2-37.5 6.7-65.9 39.4-65.9 78.8 0 44.2 35.8 80 80 80"
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
                  d="M64 64h320c17.7 0 32 14.3 32 32v129c11.2 1.4 21.9 4.2 32 8.3V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h173.8c-5.2-9.9-9.1-20.7-11.4-32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm144 208c0-35.3 28.7-64 64-64 24.4 0 45.7 13.7 56.5 33.9 2.5 4.6 7 7.7 12.1 8.3s10.3-1.3 13.8-5.1c7.4-8.1 17.9-13.1 29.6-13.1 22.1 0 40 17.9 40 40v1.3c-.2 7.7 5 14.4 12.5 16.1 24.9 5.7 43.6 28 43.6 54.6 0 30.9-25.1 56-56 56H344c-30.9 0-56-25.1-56-56 0-24.4 15.6-45.2 37.4-52.8 6.7-2.4 11-8.8 10.7-15.9-.1-1.1-.1-2.2-.1-3.3m64-96c-50.8 0-92.4 39.5-95.8 89.5C275.6 360 256 389.7 256 424c0 48.6 39.4 88 88 88h208c48.6 0 88-39.4 88-88 0-37.6-23.6-69.7-56.7-82.3-5-34.9-35-61.7-71.3-61.7-13.9 0-27 4-38 10.8-17.6-21.3-44.2-34.8-74-34.8"
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
                  d="M64 48h320c26.5 0 48 21.5 48 48v130.4c5.5 1.1 10.8 2.6 16 4.4V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h173.8c-2.7-5.1-5.1-10.5-7-16H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48m32 56c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8zm64 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8zm176 240c0-39.8 32.2-72 72-72 28.3 0 52.8 16.3 64.5 40 1.1 2.2 3.2 3.8 5.7 4.3s5-.3 6.9-1.9c7.1-6.5 16.5-10.4 26.9-10.4 22.1 0 40 17.9 40 40v.4c0 4.1 3.1 7.6 7.2 8C595.6 356 624 386.7 624 424c0 39.8-32.2 72-72 72H344c-39.8 0-72-32.2-72-72 0-34.8 24.7-63.9 57.6-70.6 3.8-.8 6.5-4.1 6.4-8zm72-88c-47 0-85.4 36.9-87.9 83.3-37 10.4-64.1 44.4-64.1 84.7 0 48.6 39.4 88 88 88h208c48.6 0 88-39.4 88-88 0-43.3-31.2-79.2-72.4-86.6-3.3-27.8-26.9-49.4-55.6-49.4-11 0-21.2 3.2-29.8 8.6-15.6-24.4-43-40.6-74.2-40.6"
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v138.8c-14.5-6.9-30.8-10.8-48-10.8-60.1 0-109.1 47.3-111.9 106.7-37.9 18-64.1 56.6-64.1 101.3 0 17.2 3.9 33.5 10.8 48H64c-35.3 0-64-28.7-64-64zm88 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24m96 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 432c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80 0-39-27.9-71.5-64.8-78.6.5-3.1.8-6.2.8-9.4 0-30.9-25.1-56-56-56-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80 0 5.9.6 11.7 1.9 17.2-37.5 6.7-65.9 39.4-65.9 78.8"
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
