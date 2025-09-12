import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleSterlingIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m5.5-352c-16.8 0-30.4 13.7-30.3 30.5l.2 33.5H272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40.3l.1 9.7c.1 18.6-3.1 37-9.6 54.3H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.4 0-16.1-4.4-20.5-11.5s-4.7-16-.8-23.5l9.6-18.6c7.7-14.9 11.6-31.5 11.5-48.3l-.1-10.1H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h7.5l-.2-33.1c-.3-43.5 34.8-78.9 78.3-78.9 10 0 19.8 1.9 29.1 5.6l30.3 12.1c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4l-30.3-12.1c-3.6-1.4-7.4-2.2-11.3-2.2z"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m261.5-96c-16.8 0-30.4 13.7-30.3 30.5l.2 33.5H272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40.3l.1 9.7c.1 18.6-3.1 37-9.6 54.3H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.4 0-16.1-4.4-20.5-11.5s-4.7-16-.8-23.5l9.6-18.6c7.7-14.9 11.6-31.5 11.5-48.3l-.1-10.1H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h7.5l-.2-33.1c-.3-43.5 34.8-78.9 78.3-78.9 10 0 19.8 1.9 29.1 5.6l30.3 12.1c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4l-30.3-12.1c-3.6-1.4-7.4-2.2-11.3-2.2z"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m259.6-112c-20.2 0-36.5 16.5-36.4 36.7l.3 43.3H272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.4c-.9 22.5-7.1 44.4-18 64H328c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-5.9 0-11.4-3.3-14.2-8.5s-2.4-11.6 1-16.5l9.2-13.5c11.7-17 18.4-36.9 19.5-57.5H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h15.5l-.3-43.1c-.3-38 30.4-68.9 68.4-68.9 10.6 0 21.1 2.5 30.6 7.2l20.9 10.5c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2l-20.9-10.5c-5.1-2.5-10.6-3.8-16.3-3.8z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m267.6-120c-24.7 0-44.6 20.1-44.4 44.7l.4 59.3H280c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.4v2.7c.2 34.6-12.8 68-36.2 93.3H344c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-3.3 0-6.2-2-7.4-5s-.5-6.5 1.8-8.7l8.8-8.6c23.4-22.8 36.6-54.1 36.4-86.8v-2.8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h39.5l-.4-59.2c-.2-33.5 26.9-60.8 60.4-60.8 9.4 0 18.6 2.2 27 6.4l20.9 10.5c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6l-20.9-10.5c-6.2-3.1-13-4.7-19.9-4.7z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m5.5-352c-16.8 0-30.4 13.7-30.3 30.5l.2 33.5H264c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32.3c-.6 16.4-3.8 32.6-9.5 48H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.4 0-16.1-4.4-20.5-11.5s-4.7-16-.8-23.5l9.6-18.6c6.8-13.2 10.7-27.6 11.4-42.4-13.1-.2-23.6-10.9-23.6-24s10.5-23.7 23.5-24l-.2-33.1c-.3-43.5 34.8-78.9 78.3-78.9 10 0 19.8 1.9 29.1 5.6l30.3 12.1c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L273 162.2c-3.6-1.4-7.4-2.2-11.3-2.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M231.2 190.5c-.1-16.8 13.5-30.5 30.3-30.5 3.9 0 7.7.7 11.3 2.2l30.3 12.1c12.3 4.9 26.3-1.1 31.2-13.4s-1.1-26.3-13.4-31.2l-30.3-12.1c-9.2-3.7-19.1-5.6-29.1-5.6-43.5 0-78.6 35.4-78.3 78.9l.2 33.1c-13 .3-23.5 10.9-23.5 24s10.6 23.8 23.6 24c-.7 14.8-4.6 29.2-11.4 42.4l-9.4 18.6c-3.8 7.4-3.5 16.3.8 23.5S175.6 368 184 368h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H222.2c5.7-15.4 9-31.6 9.5-48H264c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32.5l-.2-33.5z"
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
