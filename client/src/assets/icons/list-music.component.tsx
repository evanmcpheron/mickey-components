import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ListMusicIcon: React.FC<
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
                  d="M498.7 6C507 12 512 21.7 512 32v64c0 13.8-8.8 26-21.9 30.4L416 151.1V432c0 44.2-50.1 80-112 80s-112-35.8-112-80 50.1-80 112-80c17.2 0 33.5 2.8 48 7.7V64c0-13.8 8.8-26 21.9-30.4l96-32c9.7-3.2 20.5-1.6 28.8 4.4M32 64h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 128h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M481.1 0C498.2 0 512 13.8 512 30.9V136c0 10.4-6.7 19.6-16.6 22.8L384 194.7V432c0 44.2-50.1 80-112 80s-112-35.8-112-80 50.1-80 112-80c23.8 0 45.9 5.3 64 14.3V64c0-10.3 6.6-19.5 16.4-22.8l119-39.6c3.1-1 6.4-1.6 9.8-1.6zM323.3 414.5c-11.2-8-29.2-14.5-51.3-14.5s-40.1 6.5-51.3 14.5c-11.3 8.1-12.7 14.9-12.7 17.5s1.4 9.4 12.7 17.5c11.2 8 29.2 14.5 51.3 14.5s40.1-6.5 51.3-14.5c11.3-8.1 12.7-14.9 12.7-17.5s-1.4-9.4-12.7-17.5M384 144.3l80-25.8V54.6l-80 26.7zM24 48h240c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 96 0 85.3 0 72s10.7-24 24-24m0 128h240c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 128h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M489.1 0C501.8 0 512 10.2 512 22.9V136c0 6.9-4.5 13.1-11.1 15.2L384 188.9V432c0 44.2-50.1 80-112 80s-112-35.8-112-80 50.1-80 112-80c31.3 0 59.7 9.2 80 24V56c0-6.9 4.4-13 10.9-15.2l119-39.6c2.3-.8 4.8-1.2 7.2-1.2M332.6 401.5C318.3 391.3 297 384 272 384s-46.3 7.3-60.6 17.5S192 422.9 192 432s5.1 20.3 19.4 30.5S247 480 272 480s46.3-7.3 60.6-17.5S352 441.1 352 432s-5.1-20.3-19.4-30.5M384 155.3l96-30.9V35.5l-96 32zM16 64h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80s7.2-16 16-16m0 128h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 128h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M496 16.4 389.5 51.9c-3.3 1.1-5.5 4.1-5.5 7.6v114.8L490.5 140c3.3-1.1 5.5-4.1 5.5-7.6zM384 190.7V432c0 44.2-50.1 80-112 80s-112-35.8-112-80 50.1-80 112-80c40.7 0 76.4 15.5 96 38.8V59.5c0-10.3 6.6-19.5 16.4-22.8l108-36c1.5-.5 3.1-.8 4.7-.8 8.2.1 14.9 6.8 14.9 15v117.4c0 10.4-6.7 19.6-16.6 22.8l-108.9 35.2c-.8.3-1.6.4-2.5.4m-42.1 197.8C324.6 376.1 300 368 272 368s-52.6 8.1-69.9 20.5c-17.3 12.3-26.1 28-26.1 43.5s8.8 31.2 26.1 43.5C219.4 487.9 244 496 272 496s52.6-8.1 69.9-20.5c17.3-12.3 26.1-28 26.1-43.5s-8.8-31.2-26.1-43.5M8 64h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 128h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 128h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M0 96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 128c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 128c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 32c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-96 32C360.8 38 352 50.2 352 64v295.7c-14.5-4.9-30.8-7.7-48-7.7-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80V151.1l74.1-24.7C503.2 122 512 109.8 512 96z"
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
