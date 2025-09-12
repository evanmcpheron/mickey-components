import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareArrowDownIcon: React.FC<
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
                  d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm177-87 112-112c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71V136c0-13.3-10.7-24-24-24s-24 10.7-24 24v182.1l-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 393c9.4 9.4 24.6 9.4 33.9 0z"
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
                  d="M384 432c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zm64-16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-241-39-88-88c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L200 152c0-13.3 10.7-24 24-24s24 10.7 24 24v150.1l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0"
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
                  d="M64 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm235.3-36.7 96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L240 329.4V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v185.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0"
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
                  d="M64 464c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm229.7-34.3 104-104c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L232 356.7V136c0-4.4-3.6-8-8-8s-8 3.6-8 8v220.7l-90.3-90.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0"
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
                  d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm177-87 112-112c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71V136c0-13.3-10.7-24-24-24s-24 10.7-24 24v182.1l-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 393c9.4 9.4 24.6 9.4 33.9 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M207 393c9.4 9.4 24.6 9.4 33.9 0L353 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71V136c0-13.3-10.7-24-24-24s-24 10.7-24 24v182.1l-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
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
