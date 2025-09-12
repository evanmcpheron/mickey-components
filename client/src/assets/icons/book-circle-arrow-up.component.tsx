import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookCircleArrowUpIcon: React.FC<
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
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h298.8a177 177 0 0 1-55.6-64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h224.7c-.5-5.3-.7-10.6-.7-16 0-80.6 54.1-148.5 128-169.4V32c0-17.7-14.3-32-32-32H96m400 224a144 144 0 1 0 0 288 144 144 0 1 0 0-288m-67.3 147.3c-6.2-6.2-6.2-16.4 0-22.6l56-56c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 342.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-89.4l-28.7 28.7c-6.2 6.2-16.4 6.2-22.6 0"
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
                  d="M88 0C39.4 0 0 39.4 0 88v336h.4c-.3 2.6-.4 5.3-.4 8 0 44.2 35.8 80 80 80h314.8c-18.3-12.9-34.1-29.2-46.3-48H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h242.9c-1.9-10.4-2.9-21.1-2.9-32 0-5.4.2-10.7.7-16H80c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40h304c4.4 0 8 3.6 8 8v164.5c14.6-9.5 30.8-17 48-21.8V56c0-30.9-25.1-56-56-56zm408 224a144 144 0 1 0 0 288 144 144 0 1 0 0-288m-67.3 147.3c-6.2-6.2-6.2-16.4 0-22.6l56-56c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 342.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-89.4l-28.7 28.7c-6.2 6.2-16.4 6.2-22.6 0"
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h330.8c-12.9-9.1-24.5-19.9-34.6-32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h262.6c-2.9-10.3-4.9-21-5.9-32H64c-11.7 0-22.6 3.1-32 8.6V64c0-17.7 14.3-32 32-32h336c8.8 0 16 7.2 16 16v163.2c10.1-5.2 20.8-9.4 32-12.6V48c0-26.5-21.5-48-48-48zm320 368a112 112 0 1 1 224 0 112 112 0 1 1-224 0m256 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-211.3 3.3c6.2 6.2 16.4 6.2 22.6 0l28.7-28.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16v-89.4l28.7 28.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0l-56 56c-6.2 6.2-6.2 16.4 0 22.6"
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
                  d="M56 0C25.1 0 0 25.1 0 56v400c0 30.9 25.1 56 56 56h338.8c-6.9-4.9-13.4-10.2-19.6-16H56c-22.1 0-40-17.9-40-40s17.9-40 40-40h270.6c-1.5-5.2-2.7-10.6-3.7-16H56c-15.7 0-29.8 6.4-40 16.8V56c0-22.1 17.9-40 40-40h352c13.3 0 24 10.7 24 24v164c5.2-2 10.6-3.8 16-5.4V40c0-22.1-17.9-40-40-40zm312 368a128 128 0 1 1 256 0 128 128 0 1 1-256 0m272 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-213.7-2.3c3.1 3.1 8.2 3.1 11.3 0l50.4-50.4V440c0 4.4 3.6 8 8 8s8-3.6 8-8V315.3l50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0l-64 64c-3.1 3.1-3.1 8.2 0 11.3z"
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
                  d="M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v166.6c-73.9 20.9-128 88.8-128 169.4 0 5.4.2 10.7.7 16H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h243.2c13.1 25.6 32.2 47.6 55.6 64H96c-53 0-96-43-96-96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M640 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-211.3-19.3 56-56c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 342.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-89.4l-28.7 28.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6"
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
