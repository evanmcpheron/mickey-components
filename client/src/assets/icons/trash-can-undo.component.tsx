import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashCanUndoIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M135.2 17.7 128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7M416 128H32v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zm-198.2 71.9c8.9 9.9 8.1 25-1.8 33.9L182.5 264H240c48.6 0 88 39.4 88 88v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-22.1-17.9-40-40-40h-57.5l33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m170.5 51.6-19 28.4h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6h-93.7c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6 36.7 55H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v304c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h69.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128v304c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V128zm145.9 64.1c8.8 9.9 7.9 25.1-2 33.9l-24.8 22H240c48.6 0 88 39.4 88 88v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24c0-22.1-17.9-40-40-40h-40.9l24.8 22.1c9.9 8.8 10.8 24 2 33.9s-24 10.8-33.9 2l-72-64c-5.1-4.6-8.1-11.1-8.1-17.9s2.9-13.4 8.1-17.9l72-64c9.9-8.8 25.1-7.9 33.9 2z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M164.2 39.5 148.9 64h150.2l-15.3-24.5c-2.9-4.7-8.1-7.5-13.6-7.5h-92.5c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6 336.9 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v336c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V96H16C7.2 96 0 88.8 0 80s7.2-16 16-16h95.1L137 22.6A47.98 47.98 0 0 1 177.7 0h92.5c16.6 0 31.9 8.5 40.7 22.6zM64 96v336c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V96zm155.9 93.3c5.9 6.6 5.4 16.7-1.2 22.6l-49 44.1H240c44.2 0 80 35.8 80 80v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40c0-26.5-21.5-48-48-48h-70.3l49 44.1c6.6 5.9 7.1 16 1.2 22.6s-16 7.1-22.6 1.2l-80-72c-3.4-3-5.3-7.4-5.3-11.9s1.9-8.9 5.3-11.9l80-72c6.6-5.9 16.7-5.4 22.6 1.2"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m157.4 27.3-23 36.7h179.2l-23-36.7c-4.4-7-12.1-11.3-20.4-11.3h-92.5c-8.3 0-16 4.3-20.4 11.3zM115.6 64l28.2-45.2C151.1 7.1 163.9 0 177.7 0h92.5c13.8 0 26.6 7.1 33.9 18.8L332.4 64H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM40 112c4.4 0 8 3.6 8 8v320c0 30.9 25.1 56 56 56h240c30.9 0 56-25.1 56-56V120c0-4.4 3.6-8 8-8s8 3.6 8 8v320c0 39.8-32.2 72-72 72H104c-39.8 0-72-32.2-72-72V120c0-4.4 3.6-8 8-8m173.9 74.6c3 3.3 2.7 8.3-.5 11.3L140.7 264H248c39.8 0 72 32.2 72 72v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40c0-30.9-25.1-56-56-56H140.7l72.7 66.1c3.3 3 3.5 8 .5 11.3s-8 3.5-11.3.5l-88-80c-1.7-1.5-2.6-3.7-2.6-5.9s1-4.4 2.6-5.9l88-80c3.3-3 8.3-2.7 11.3.5"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 96h384v352c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm185.8 71.9c-8.9-9.9-24-10.7-33.9-1.8l-80 72c-5.1 4.6-7.9 11-7.9 17.8s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9l-33.5-30H240c22.1 0 40 17.9 40 40v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40c0-48.6-39.4-88-88-88h-57.5l33.5-30.2c9.9-8.9 10.7-24 1.8-33.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0m54.1 167.9c8.9 9.9 8.1 25-1.8 33.9L182.5 232H240c48.6 0 88 39.4 88 88v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-22.1-17.9-40-40-40h-57.5l33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z"
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
