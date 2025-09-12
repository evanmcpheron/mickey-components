import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BridgeCircleCheckIcon: React.FC<
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
                  d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h40v64H32v128c53 0 96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96 6.3 0 12.4.6 18.3 1.7C367.1 231.8 426.9 192 496 192c42.5 0 81.6 15.1 112 40.2V160h-72V96h40c17.7 0 32-14.3 32-32s-14.3-32-32-32zm424 64v64h-80V96zm-128 0v64h-80V96zm-128 0v64h-80V96zm408 272a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M56 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v64H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48V80h40c13.3 0 24-10.7 24-24s-10.7-24-24-24zm283.1 256.1c8-15.7 18.3-30 30.4-42.5-10.5-3.7-21.7-5.6-33.5-5.6h-32c-57.4 0-104 46.6-104 104v88h-48v-96c0-53-43-96-96-96-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48v104c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40v-96c0-30.9 25.1-56 56-56h32c1.1 0 2.1 0 3.1.1M488 80v64h-80V80zm-128 0v64h-80V80zm-128 0v64h-80V80zm408 288a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-99.3-43.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7z"
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
                  d="M48 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V64h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H48m448 32v64h-96V64zm-128 0v64h-96V64zm-128 0v64h-96V64zM48 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c35.3 0 64 28.7 64 64v96c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-96c0-35.3 28.7-64 64-64 9 0 17.5 1.8 25.2 5.2 5.6-9.3 12.1-18.1 19.3-26.2-13.3-7-28.4-11-44.5-11-53 0-96 43-96 96v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-53-43-96-96-96zm448 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m44.7-187.3L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"
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
                  d="M40 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v96H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V48h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm464 16v96H392V48zm-128 0v96H264V48zm-128 0v96H136V48zM40 256c-4.4 0-8 3.6-8 8s3.6 8 8 8h24c39.8 0 72 32.2 72 72v96c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40v-96c0-39.8 32.2-72 72-72 9 0 17.6 1.6 25.5 4.7 2.8-4.7 5.9-9.2 9.1-13.6-10.6-4.6-22.3-7.1-34.6-7.1-48.6 0-88 39.4-88 88v96c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-96c0-48.6-39.4-88-88-88zm456-16a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="M32 64c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-40v64h72v72.2c-30.4-25.1-69.5-40.2-112-40.2-69.1 0-128.9 39.8-157.7 97.7-5.9-1.1-12-1.7-18.3-1.7-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53-43-96-96-96V160h72V96H64c-17.7 0-32-14.3-32-32m376 32v64h80V96zm-48 64V96h-80v64zM152 96v64h80V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-164.7-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
