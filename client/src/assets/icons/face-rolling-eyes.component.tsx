import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceRollingEyesIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-144h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16m32-144c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4-3.7 5.2-5.8 11.6-5.8 18.4 0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4 22.3 10 37.8 32.4 37.8 58.4m128 64c-35.3 0-64-28.7-64-64 0-26 15.5-48.4 37.8-58.4-3.7 5.2-5.8 11.6-5.8 18.4 0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4 22.3 10 37.8 32.4 37.8 58.4 0 35.3-28.7 64-64 64"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-136c0 13.3 10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24H192c-13.3 0-24 10.7-24 24m-8-104c-26.5 0-48-21.5-48-48 0-14.3 6.3-27.2 16.2-36-.2 1.3-.2 2.6-.2 4 0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4 10 8.8 16.2 21.7 16.2 36 0 26.5-21.5 48-48 48m0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160m192-32c-26.5 0-48-21.5-48-48 0-14.3 6.3-27.2 16.2-36-.2 1.3-.2 2.6-.2 4 0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4 10 8.8 16.2 21.7 16.2 36 0 26.5-21.5 48-48 48m0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192 112h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16m-32-96c26.5 0 48-21.5 48-48 0-14.3-6.3-27.2-16.2-36 .2 1.3.2 2.6.2 4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-1.4.1-2.7.2-4-10 8.8-16.2 21.7-16.2 36 0 26.5 21.5 48 48 48m0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160m240 80c0-14.3-6.3-27.2-16.2-36 .2 1.3.2 2.6.2 4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-1.4.1-2.7.2-4-10 8.8-16.2 21.7-16.2 36 0 26.5 21.5 48 48 48s48-21.5 48-48m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192 120h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H192c-4.4 0-8-3.6-8-8s3.6-8 8-8m-32-88c35.3 0 64-28.7 64-64 0-20.9-10-39.5-25.6-51.2 1 3.6 1.6 7.3 1.6 11.2 0 22.1-17.9 40-40 40s-40-17.9-40-40c0-3.9.6-7.6 1.6-11.2C106 184.5 96 203.1 96 224c0 35.3 28.7 64 64 64m-80-64a80 80 0 1 1 160 0 80 80 0 1 1-160 0m56-40a24 24 0 1 0 48 0 24 24 0 1 0-48 0m280 40c0-20.9-10.1-39.5-25.6-51.2 1 3.6 1.6 7.3 1.6 11.2 0 22.1-17.9 40-40 40s-40-17.9-40-40c0-3.9.6-7.6 1.6-11.2C298 184.5 288 203.1 288 224c0 35.3 28.7 64 64 64s64-28.7 64-64m-64 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160m0-144a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-144h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16M96 224a64 64 0 1 1 128 0 64 64 0 1 1-128 0m256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M195.6 180.4c0 19.6-15.9 35.6-35.6 35.6s-35.6-15.9-35.6-35.6c0-3 .4-6 1.1-8.8 9.6-7.3 21.5-11.6 34.5-11.6s24.9 4.3 34.5 11.6c.7 2.8 1.1 5.8 1.1 8.8M384 184c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-6.9 2.2-13.2 5.8-18.4 8-3.6 16.8-5.6 26.2-5.6s18.2 2 26.2 5.6c3.7 5.2 5.8 11.6 5.8 18.4"
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
