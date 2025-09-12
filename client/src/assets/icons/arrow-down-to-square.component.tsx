import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowDownToSquareIcon: React.FC<
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
                  d="M374.6 246.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 242.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v210.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V112c0-44.2-35.8-80-80-80h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M385 233c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v246.1l-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 345c9.4 9.4 24.6 9.4 33.9 0zM72 32C32.2 32 0 64.2 0 104v336c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72V104c0-39.8-32.2-72-72-72h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="m267.8 330.9 96-104c6-6.5 5.6-16.6-.9-22.6s-16.6-5.6-22.6.9L272 279.1V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v263.1l-68.2-73.9c-6-6.5-16.1-6.9-22.6-.9s-6.9 16.1-.9 22.6l96 104c3 3.3 7.3 5.1 11.8 5.1s8.7-1.9 11.8-5.1zM64 32C28.7 32 0 60.7 0 96v352c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M373.7 221.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 308.7V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v300.7l-98.3-98.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l112 112c3.1 3.1 8.2 3.1 11.3 0zM56 32C25.1 32 0 57.1 0 88v368c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c22.1 0 40 17.9 40 40v368c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40V88c0-22.1 17.9-40 40-40h48c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M0 112c0-44.2 35.8-80 80-80h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c44.2 0 80 35.8 80 80v320c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M233.4 342.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 242.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v210.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96z"
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
