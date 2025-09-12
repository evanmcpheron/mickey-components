import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUpFromSquareIcon: React.FC<
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
                  d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l41.4-41.4V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96zM64 112c0-8.8 7.2-16 16-16h8c17.7 0 32-14.3 32-32s-14.3-32-32-32h-8C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V112c0-44.2-35.8-80-80-80h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32h8c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16z"
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
                  d="M273 7c-9.4-9.4-24.6-9.4-33.9 0L127 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l71-71V328c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l71 71c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zM72 32C32.2 32 0 64.2 0 104v336c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72V104c0-39.8-32.2-72-72-72h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h8c13.3 0 24-10.7 24-24S93.3 32 80 32z"
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
                  d="M267.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-104 104c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 54.6V320c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6l76.7 76.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM64 32C28.7 32 0 60.7 0 96v352c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M261.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-112 112c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L248 27.3V328c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3l98.3 98.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-112-112zM56 32C25.1 32 0 57.1 0 88v368c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c22.1 0 40 17.9 40 40v368c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40V88c0-22.1 17.9-40 40-40h48c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M80 96c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c44.2 0 80 35.8 80 80v320c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112c0-44.2 35.8-80 80-80h8c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M233.4 9.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z"
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
