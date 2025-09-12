import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareDownLeftIcon: React.FC<
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
                  d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm64-281.4V336c0 8.8 7.2 16 16 16h137.4c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L264 280l66.3-66.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-36.7-36.7c-3.6-3.6-8.5-5.6-13.6-5.6s-10 2-13.7 5.7L200 216l-33.4-33.4c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6"
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
                  d="M64 432c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm128-217.4V336c0 8.8 7.2 16 16 16h137.4c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L264 280l66.3-66.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-36.7-36.7c-3.6-3.6-8.5-5.6-13.6-5.6s-10 2-13.7 5.7L200 216l-33.4-33.4c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6"
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
                  d="M64 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm144-88V214.6c0-3.7 3-6.6 6.6-6.6 1.8 0 3.4.7 4.7 1.9l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0l59.1-59.1c3.6-3.6 9-4.9 13.9-3.3 2 .7 3.8 1.8 5.3 3.3l22.1 22.1c1.5 1.5 2.6 3.3 3.3 5.3 1.6 4.9.4 10.3-3.3 13.9l-59.1 59.1c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c1.2 1.2 1.9 2.9 1.9 4.7 0 3.7-3 6.6-6.6 6.6H152c-4.4 0-8-3.6-8-8zm8 40h113.4c21.3 0 38.6-17.3 38.6-38.6 0-10.2-4.1-20.1-11.3-27.3L278.6 288l47.7-47.7c12.2-12.2 16.5-30.3 11-46.7-2.2-6.7-6-12.8-11-17.8l-22.1-22.1c-5-5-11.1-8.8-17.8-11-16.4-5.5-34.5-1.2-46.7 11L192 201.4l-14.1-14.1c-7.2-7.2-17.1-11.3-27.3-11.3-21.3 0-38.6 17.3-38.6 38.6V328c0 22.1 17.9 40 40 40"
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
                  d="M64 464c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm128-72V217c0-5 4-9 9-9 2.4 0 4.7.9 6.3 2.6l35 35c3.1 3.1 8.2 3.1 11.3 0l82.4-82.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3l28.7 28.7c2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8l-82.3 82.3c-3.1 3.1-3.1 8.2 0 11.3l35 35c1.7 1.7 2.6 4 2.6 6.3 0 5-4 9-9 9H136c-4.4 0-8-3.6-8-8zm8 24h127c13.8 0 25-11.2 25-25 0-6.6-2.6-13-7.3-17.7L251.3 296l76.7-76.7c5.1-5.1 8-12.1 8-19.3s-2.9-14.2-8-19.3L299.3 152c-5.1-5.1-12.1-8-19.3-8s-14.2 2.9-19.3 8L184 228.7l-29.4-29.4c-4.7-4.7-11-7.3-17.7-7.3-13.8 0-25 11.2-25 25v127c0 13.3 10.7 24 24 24z"
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
                  d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm64-281.4V336c0 8.8 7.2 16 16 16h137.4c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L264 280l66.3-66.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-36.7-36.7c-3.6-3.6-8.5-5.6-13.6-5.6s-10 2-13.7 5.7L200 216l-33.4-33.4c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 336V198.6c0-12.5 10.1-22.6 22.6-22.6 6 0 11.8 2.4 16 6.6L200 216l66.3-66.3c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7l36.7 36.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L264 280l33.4 33.4c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H144c-8.8 0-16-7.2-16-16"
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
