import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BackwardIcon: React.FC<
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
                  d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3v83.4zM256 352V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29z"
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
                  d="M288 94c0-16.6-13.5-30-30-30-6.3 0-12.5 2-17.6 5.7L9.9 236.6C3.7 241.1 0 248.3 0 256s3.7 14.9 9.9 19.4l230.4 166.9c5.1 3.7 11.3 5.7 17.6 5.7 16.6 0 30-13.4 30-30v-99.1l176.8 123.7c5.1 3.5 11.1 5.4 17.3 5.4 16.6 0 30.1-13.5 30.1-30.1V94.1C512 77.5 498.5 64 481.9 64c-6.2 0-12.2 1.9-17.3 5.4L288 193.1zm0 157.7 176-123.2v255L288 260.3zM64.9 256 240 129.2v253.6z"
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
                  d="M37.6 256 256 414.1V97.9zM258 64c16.6 0 30 13.5 30 30v103.4L464.3 69.7C469.5 66 475.6 64 482 64c16.6 0 30 13.5 30 30v324c0 16.6-13.4 30-30 30-6.3 0-12.5-2-17.6-5.7L288 314.6V418c0 16.6-13.5 30-30 30-6.3 0-12.5-2-17.6-5.7L9.9 275.4C3.7 270.9 0 263.7 0 256s3.7-14.9 9.9-19.4L240.3 69.7C245.5 66 251.6 64 258 64m30 211.1 192 139V97.9l-192 139z"
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
                  d="M258 80c-3 0-5.8.9-8.2 2.7L19.3 249.5c-2.1 1.5-3.3 3.9-3.3 6.5s1.2 5 3.3 6.5l230.4 166.8c2.4 1.7 5.3 2.7 8.2 2.7 7.8 0 14-6.3 14-14V94c0-7.8-6.3-14-14-14zm0-16c16.6 0 30 13.5 30 30v103.4L464.3 69.7C469.5 66 475.6 64 482 64c16.6 0 30 13.5 30 30v324c0 16.6-13.4 30-30 30-6.3 0-12.5-2-17.6-5.7L288 314.6V418c0 16.6-13.5 30-30 30-6.3 0-12.5-2-17.6-5.7L9.9 275.4C3.7 270.9 0 263.7 0 256s3.7-14.9 9.9-19.4L240.3 69.7C245.5 66 251.6 64 258 64m30 230.8 185.7 134.5c2.4 1.7 5.3 2.7 8.2 2.7 7.8 0 14-6.3 14-14V94c0-7.8-6.3-14-14-14-3 0-5.8.9-8.2 2.7L288 217.2v77.7z"
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
                  d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L256 271v-30L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96v320c0 12.4-7.2 23.7-18.4 29"
                />
                <path
                  className="aps-icon-foreground"
                  d="M203.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6z"
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
