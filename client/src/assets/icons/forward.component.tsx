import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ForwardIcon: React.FC<
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
                  d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4L224 214.3v83.4zM256 352V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4S256 428.4 256 416z"
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
                  d="M224 94c0-16.6 13.5-30 30-30 6.3 0 12.5 2 17.6 5.7l230.5 166.9c6.2 4.5 9.9 11.7 9.9 19.4s-3.7 14.9-9.9 19.4L271.7 442.3c-5.1 3.7-11.3 5.7-17.6 5.7-16.6 0-30-13.4-30-30v-99.1L47.3 442.6c-5.1 3.5-11.1 5.4-17.3 5.4-16.5 0-30-13.5-30-30.1V94.1C0 77.5 13.5 64 30.1 64c6.2 0 12.2 1.9 17.3 5.4L224 193.1zm0 157.7L48 128.5v255l176-123.2zm223.1 4.3L272 129.2v253.6z"
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
                  d="M474.4 256 256 414.1V97.9zM254 64c-16.6 0-30 13.5-30 30v103.4L47.7 69.7C42.5 66 36.4 64 30 64 13.5 64 0 77.5 0 94v324c0 16.6 13.5 30 30 30 6.3 0 12.5-2 17.6-5.7L224 314.6V418c0 16.6 13.5 30 30 30 6.3 0 12.5-2 17.6-5.7l230.5-166.9c6.2-4.5 9.9-11.7 9.9-19.4s-3.7-14.9-9.9-19.4L271.7 69.7C266.5 66 260.4 64 254 64m-30 211.1-192 139V97.9l192 139z"
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
                  d="M254 80c3 0 5.8.9 8.2 2.7l230.5 166.8c2.1 1.5 3.3 3.9 3.3 6.5s-1.2 5-3.3 6.5L262.3 429.3c-2.4 1.7-5.3 2.7-8.2 2.7-7.8 0-14-6.3-14-14V94c0-7.8 6.3-14 14-14zm0-16c-16.6 0-30 13.5-30 30v103.4L47.7 69.7C42.5 66 36.4 64 30 64 13.5 64 0 77.5 0 94v324c0 16.6 13.5 30 30 30 6.3 0 12.5-2 17.6-5.7L224 314.6V418c0 16.6 13.5 30 30 30 6.3 0 12.5-2 17.6-5.7l230.5-166.9c6.2-4.5 9.9-11.7 9.9-19.4s-3.7-14.9-9.9-19.4L271.7 69.7C266.5 66 260.4 64 254 64m-30 230.8L38.3 429.3c-2.4 1.8-5.3 2.7-8.3 2.7-7.8 0-14-6.3-14-14V94c0-7.8 6.3-14 14-14 3 0 5.8.9 8.2 2.7L224 217.2v77.7z"
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
                  d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L256 271v-30L52.5 71.4C43 63.5 29.7 61.7 18.4 67S0 83.6 0 96v320c0 12.4 7.2 23.7 18.4 29"
                />
                <path
                  className="aps-icon-foreground"
                  d="M308.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S256 428.4 256 416V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6z"
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
