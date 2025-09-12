import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareArrowDownRightIcon: React.FC<
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
                  d="M384 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64zM160 368c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L119 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24z"
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
                  d="M384 432c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zm64-16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-288-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L119 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24z"
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
                  d="M384 448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zm64-32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-280-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h97.4L132.7 187.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L288 297.4V192c0-8.8 7.2-16 16-16s16 7.2 16 16v144c0 8.8-7.2 16-16 16z"
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
                  d="M384 464c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48zm64-48c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-280-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h124.7L130.3 173.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L304 324.7V200c0-4.4 3.6-8 8-8s8 3.6 8 8v144c0 4.4-3.6 8-8 8z"
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
                  d="M384 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64zM160 368c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L119 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M312 368H160c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L119 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24z"
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
