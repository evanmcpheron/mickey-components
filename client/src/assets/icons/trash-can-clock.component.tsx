import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashCanClockIcon: React.FC<
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
                  d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM32 128h384v64.7c-29.3 2.6-56.6 12.5-80 27.7V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v39.2c-29.8 31.5-48 74-48 120.8 0 59.5 29.6 112.1 74.8 144H96c-35.3 0-64-28.7-64-64zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m64 176a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"
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
                  d="m170.5 51.6-19 28.4h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6h-93.7c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6 36.7 55H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v64.7c-16.8 1.5-32.9 5.4-48 11.3v-76H80v304c0 17.7 14.3 32 32 32h172.5c12.3 18.8 28 35.1 46.3 48H112c-44.2 0-80-35.8-80-80V128h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h69.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zm2.5 167v40.2c-12.1 10-22.9 21.7-32 34.6V192c0-8.8 7.2-16 16-16s16 7.2 16 16m-160 0v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16m80 0v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16m48 176a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"
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
                  d="M164.2 39.5 148.9 64h150.2l-15.3-24.5c-2.9-4.7-8.1-7.5-13.6-7.5h-92.5c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6 336.9 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v96.7c-11 1-21.7 3-32 5.9V96H64v336c0 26.5 21.5 48 48 48h184.2c10 12.1 21.7 22.9 34.6 32H112c-44.2 0-80-35.8-80-80V96H16C7.2 96 0 88.8 0 80s7.2-16 16-16h95.1L137 22.6A47.98 47.98 0 0 1 177.7 0h92.5c16.6 0 31.9 8.5 40.7 22.6zM336 176v44.5c-11.7 7.6-22.4 16.6-32 26.7V176c0-8.8 7.2-16 16-16s16 7.2 16 16m-192 0v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16m96 0v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16m192 304a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="m157.4 27.3-23 36.7h179.2l-23-36.7c-4.4-7-12.1-11.3-20.4-11.3h-92.5c-8.3 0-16 4.3-20.4 11.3zM115.6 64l28.2-45.2C151.1 7.1 163.9 0 177.7 0h92.5c13.8 0 26.6 7.1 33.9 18.8L332.4 64H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM40 112c4.4 0 8 3.6 8 8v320c0 30.9 25.1 56 56 56h207.2c6.1 5.8 12.7 11.1 19.6 16H104c-39.8 0-72-32.2-72-72V120c0-4.4 3.6-8 8-8m272 127.3V160c0-4.4 3.6-8 8-8s8 3.6 8 8v66c-5.6 4.1-10.9 8.5-16 13.3m104-46.5c-5.4.5-10.7 1.2-16 2.2v-75c0-4.4 3.6-8 8-8s8 3.6 8 8v72.7zM136 160v256c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c0-4.4 3.6-8 8-8s8 3.6 8 8m96 0v256c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c0-4.4 3.6-8 8-8s8 3.6 8 8m200 336a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c4.4 0 8 3.6 8 8v64h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8"
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
                  d="M32 96h384v96.7c-29.3 2.6-56.6 12.5-80 27.7V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v71.2c-29.8 31.5-48 74-48 120.8 0 59.5 29.6 112.1 74.8 144H96c-35.3 0-64-28.7-64-64zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"
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
