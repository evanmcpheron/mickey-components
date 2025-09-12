import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BathIcon: React.FC<
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
                  d="M96 77.3C96 70 101.9 64 109.3 64c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9c-3.6 9-5.6 18.9-5.6 29.2 0 19.9 7.2 38 19.2 52-5.3 9.2-4 21.1 3.8 29 9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5l-14.9-14.9C149.4 8.1 129.7 0 109.3 0 66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H96zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h256v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.4c19.6-17.6 32-43.1 32-71.6v-16z"
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
                  d="M101.3 48C89.5 48 80 57.5 80 69.3V256h408c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V69.3C32 31 63 0 101.3 0c18.4 0 36 7.3 49 20.3l4.8 4.8c11.1-5.8 23.7-9.1 37-9.1 23.9 0 45.4 10.5 60.1 27.2 9.2-5.3 21.1-4 28.9 3.9 9.4 9.4 9.4 24.6 0 33.9L177 185c-9.4 9.4-24.6 9.4-33.9 0-7.8-7.8-9.1-19.7-3.9-28.9C122.5 141.4 112 119.9 112 96c0-13.4 3.3-25.9 9.1-37l-4.8-4.8c-4-4-9.4-6.2-15-6.2M32 336h48v32c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48v-32h48v32c0 28.4-12.4 54-32 71.6V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-25.3c-5.2.9-10.5 1.3-16 1.3H128c-5.5 0-10.8-.5-16-1.3V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48.4C44.4 422 32 396.4 32 368zM192 64c-17.7 0-32 14.3-32 32 0 10.4 4.9 19.6 12.6 25.5l44.8-44.8c-5.8-7.8-15-12.7-25.4-12.7"
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
                  d="M93.3 32C77.1 32 64 45.1 64 61.3V256h432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V61.3C32 27.4 59.4 0 93.3 0c16.2 0 31.8 6.5 43.3 17.9L161.7 43c11.1-7 24.2-11 38.3-11 20.2 0 38.5 8.3 51.6 21.8l1.1-1.1c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-104 104c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l1.1-1.1C136.3 142.5 128 124.2 128 104c0-14.1 4-27.2 11-38.3l-25.1-25.1C108.5 35.1 101 32 93.3 32M32 320h32v48c0 26.2 12.6 49.4 32 64 13.4 10 30 16 48 16h224c18 0 34.6-6 48-16 19.4-14.6 32-37.8 32-64v-48h32v48c0 30.5-12.2 58.2-32 78.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-26.8c-14.5 6.9-30.8 10.8-48 10.8H144c-17.2 0-33.5-3.9-48-10.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-49.6c-19.8-20.2-32-47.9-32-78.4zM200 64c-22.1 0-40 17.9-40 40 0 11.4 4.8 21.7 12.4 29L229 76.4c-7.3-7.6-17.6-12.4-29-12.4"
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
                  d="M85.3 16C64.7 16 48 32.7 48 53.3V272h456c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V53.3C32 23.8 55.8 0 85.3 0 99.4 0 113 5.6 123 15.6l32.1 32.1C167.4 37.9 183 32 200 32c23.1 0 43.7 10.9 56.9 27.8l1.5-1.5c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-104 104c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l1.5-1.5c-17-13.1-27.9-33.7-27.9-56.8 0-17 5.9-32.6 15.7-44.9l-32.1-32.2c-7-7-16.5-10.9-26.3-10.9M32 320h16v48c0 53 43 96 96 96h224c53 0 96-43 96-96v-48h16v48c0 38.1-19 71.7-48 91.9V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-34.8c-14.5 6.9-30.8 10.8-48 10.8H144c-17.2 0-33.5-3.9-48-10.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-44.1c-29-20.2-48-53.8-48-91.9zM200 48c-30.9 0-56 25.1-56 56 0 18.7 9.2 35.3 23.3 45.4l78.2-78.2C235.3 57.2 218.7 48 200 48"
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
                  d="M109.3 64C101.9 64 96 69.9 96 77.3V256H32V77.3C32 34.6 66.6 0 109.3 0c20.5 0 40.1 8.1 54.6 22.6l14.9 14.9c9-3.5 18.9-5.5 29.2-5.5 19.9 0 38 7.2 52 19.2 9.2-5.3 21.1-4 29 3.8 9.4 9.4 9.4 24.6 0 33.9L185 193c-9.4 9.4-24.6 9.4-33.9 0-7.9-7.9-9.1-19.8-3.8-29-12-14-19.2-32.1-19.2-52 0-10.3 2-20.2 5.5-29.2l-15-14.9c-2.5-2.5-5.9-3.9-9.4-3.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32zm448 96H32v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h256v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.4c19.6-17.6 32-43.1 32-71.6z"
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
