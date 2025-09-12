import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarRearIcon: React.FC<
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
                  d="M165.4 96h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4m-90.6.3L39.6 196.8C16.4 206.4 0 229.3 0 256v80c0 23.7 12.9 44.4 32 55.4V448c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h256v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-56.6c19.1-11.1 32-31.7 32-55.4v-80c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32H165.4c-40.8 0-77.1 25.8-90.6 64.3M208 272h96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-160 8c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24m360-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M165.4 80h181.2c17 0 32.1 10.7 37.8 26.8l24.2 69.2H103.4l24.2-69.2c5.6-16 20.8-26.8 37.8-26.8M82.3 90.9l-34.2 97.9C19.3 205.4 0 236.4 0 272v64c0 23.7 12.9 44.4 32 55.4V456c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h352v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-64.6c19.1-11.1 32-31.7 32-55.4v-64c0-35.6-19.4-66.6-48.1-83.2l-34.2-97.9C417.3 55.6 384 32 346.6 32H165.4C128 32 94.7 55.6 82.3 90.9M96 224h320c20.9 0 38.7 13.4 45.3 32H408c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v32c0 8.8-7.2 16-16 16H320v-32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64c-8.8 0-16-7.2-16-16v-32h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H50.7c6.6-18.6 24.4-32 45.3-32"
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
                  d="M159.6 64h192.8c21.2 0 39.9 13.9 46 34.2l28.3 94.4c-3.5-.4-7.1-.6-10.7-.6H96c-3.6 0-7.2.2-10.7.6l28.3-94.4c6.1-20.3 24.8-34.2 46-34.2M74.7 227.9l.1-.3c6.6-2.3 13.8-3.6 21.2-3.6h320c7.4 0 14.5 1.3 21.2 3.6l.1.3.5-.1c24.6 8.9 42.3 32.5 42.3 60.2H432c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32c0 17.7-14.3 32-32 32h-96v-32c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v32H64c-17.7 0-32-14.3-32-32v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H32c0-27.7 17.6-51.3 42.3-60.2l.5.1zM320 384H192v-32h128zM48.7 203.4l-.4 1.3C19.4 221.2 0 252.3 0 288v64c0 23.7 12.9 44.4 32 55.4V464c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h384v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-56.6c19.1-11.1 32-31.7 32-55.4v-64c0-35.7-19.4-66.8-48.3-83.3l-.4-1.3L429 89c-10.2-33.8-41.3-57-76.6-57H159.6C124.3 32 93.1 55.2 83 89z"
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
                  d="M167.6 48h176.8c24.7 0 46.5 16.2 53.6 39.9L429.2 192H82.8L114 87.9c7.1-23.7 28.9-39.9 53.6-39.9m-69 35.3-33 110C28.3 200 0 232.7 0 272v80c0 20.9 13.4 38.7 32 45.3V448c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h256v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-50.7c18.6-6.6 32-24.4 32-45.3v-80c0-39.3-28.3-72-65.7-78.7l-33-110c-9.1-30.5-37.2-51.3-69-51.3H167.6c-31.8 0-59.8 20.9-69 51.3M464 384H48c-17.7 0-32-14.3-32-32v-16h56c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24H18c7.1-27.6 32.2-48 62-48h352c29.8 0 54.9 20.4 62 48h-54c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h56v16c0 17.7-14.3 32-32 32m-64 16h64v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM48 448v-48h64v48c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m448-176v48h-56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8zM16 320v-48h56c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8zm200-16h80c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8m-24 8v16c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24"
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
                  d="M135.2 117.4c4.5-12.8 16.6-21.4 30.2-21.4h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1zM32 448v-56.6c9.4 5.4 20.3 8.6 32 8.6h64v48c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32m352 0v-48h64c11.7 0 22.6-3.1 32-8.6V448c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M165.4 96h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4m-90.6.3L39.6 196.8C16.4 206.4 0 229.3 0 256v80c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-80c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32H165.4c-40.8 0-77.1 25.8-90.6 64.3M208 272h96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-160 8c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24m360-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
