import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FolderImageIcon: React.FC<
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
                  d="M448 480H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64M176 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m120 0c-8 0-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S110.8 416 120 416h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144c-4.5-6.7-12-10.7-20-10.7"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H289.9L247 53.1A71.98 71.98 0 0 0 196.1 32zM48 96c0-8.8 7.2-16 16-16h132.1c6.4 0 12.5 2.5 17 7l45.3 45.3c7.5 7.5 17.7 11.7 28.3 11.7H448c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm112 112a32 32 0 1 0-64 0 32 32 0 1 0 64 0m155.2 9.6c-4.5-6-11.6-9.6-19.2-9.6s-14.7 3.6-19.2 9.6l-54.2 72.2-19.9-24.8c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S110.8 384 120 384h272c9.1 0 17.4-5.1 21.5-13.3s3.2-17.9-2.3-25.1z"
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
                  d="M32 96c0-17.7 14.3-32 32-32h124.1c8.5 0 16.6 3.4 22.6 9.4l35.9 35.9c12 12 28.3 18.7 45.3 18.7H448c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H291.9c-8.5 0-16.6-3.4-22.6-9.4l-35.9-35.9c-12-12-28.3-18.7-45.3-18.7zm88 160a24 24 0 1 0-48 0 24 24 0 1 0 48 0m135.9 32.1L380.3 352H131.5l44.6-63.8 19 25.4c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4l67.1-89.5zm-25.5-19.4L208 277.3l-6.5-8.7c-6-8-15.4-12.7-25.3-12.7-10.3 0-20 5-26 13.5l-49.1 70.2c-3.3 4.7-5.1 10.4-5.1 16.2 0 15.6 12.6 28.2 28.2 28.2h263.7c15.5 0 28.1-12.6 28.1-28.1 0-5.9-1.9-11.7-5.3-16.4l-97-134.3c-6-8.3-15.6-13.2-25.8-13.2-10 0-19.4 4.7-25.5 12.7"
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
                  d="M448 464H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h133.5c12.7 0 24.9 5.1 33.9 14.1L267.3 98c9 9 21.2 14.1 33.9 14.1H448c26.5 0 48 21.5 48 48V416c0 26.5-21.5 48-48 48M64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H301.3c-8.5 0-16.6-3.4-22.6-9.4l-36-35.9c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64m104-272a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-40-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m167.9 40c2.3 0 4.5 1.2 5.7 3.1l105.7 166.2c.5.7.7 1.5.7 2.4 0 2.4-2 4.4-4.4 4.4H108.3c-2.4 0-4.3-1.9-4.3-4.3 0-.8.3-1.7.7-2.4l57.3-85.9c1.4-2.2 3.9-3.5 6.4-3.5 2.4 0 4.6 1.1 6.1 2.9l27.3 34.1c1.6 2 4 3.1 6.6 3s4.9-1.4 6.3-3.6L290.3 227c1.3-1.9 3.4-3 5.6-3m-18.9-5.9-69.6 104.4-20.4-25.6c-4.5-5.6-11.3-8.9-18.5-8.9-7.9 0-15.4 4-19.8 10.6l-57.3 85.9c-2.2 3.3-3.4 7.2-3.4 11.3 0 11.2 9.1 20.3 20.3 20.3h295.3c11.3 0 20.4-9.1 20.4-20.4 0-3.9-1.1-7.7-3.2-11L315.1 218.5c-4.2-6.6-11.4-10.5-19.2-10.5-7.6 0-14.7 3.8-18.9 10.1"
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
                  d="M448 480H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64M176 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m120 0c-8 0-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S110.8 416 120 416h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144c-4.5-6.7-12-10.7-20-10.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M296 224c8 0 15.5 4 20 10.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S400.9 416 392 416H120c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84c4.5-6.6 12-10.6 20-10.6"
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
