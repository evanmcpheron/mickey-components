import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WifiIcon: React.FC<
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
                  d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2.9zM320 256c56.8 0 108.6 21.1 148.2 56 13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M39.9 185.7C114.6 119.9 212.6 80 320 80s205.4 39.9 280.1 105.7c9.9 8.8 25.1 7.8 33.9-2.2s7.8-25.1-2.2-33.9C548.7 76.4 439.5 32 320 32S91.3 76.4 8.2 149.6c-9.9 8.8-10.9 23.9-2.2 33.9s23.9 10.9 33.9 2.2M320 256c64.6 0 123.5 24.7 167.6 65.2 9.8 9 24.9 8.3 33.9-1.5s8.3-24.9-1.5-33.9C467.4 237.5 397.1 208 320 208s-147.4 29.5-200.1 77.9c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5C196.5 280.7 255.4 256 320 256m56 168a56 56 0 1 0-112 0 56 56 0 1 0 112 0"
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
                  d="M27.3 184.4C102.4 110 205.8 64 320 64s217.6 46 292.7 120.4c6.3 6.2 16.4 6.2 22.6-.1s6.2-16.4-.1-22.6C554.3 81.5 442.9 32 320 32S85.7 81.5 4.7 161.7c-6.3 6.2-6.3 16.3-.1 22.6s16.3 6.3 22.6.1zM320 224c70.5 0 134.4 28.5 180.7 74.7 6.3 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-52.1-51.9-123.9-84-203.3-84s-151.2 32.1-203.3 84c-6.3 6.2-6.3 16.4 0 22.6s16.4 6.3 22.6 0C185.6 252.5 249.5 224 320 224m0 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M13.8 175.3C92 96.6 200.3 48 320 48s228 48.6 306.2 127.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3C556.4 82.5 444.1 32 320 32S83.6 82.5 2.5 164c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0M320 208c72.2 0 137.8 28.1 186.5 74 3.2 3 8.3 2.9 11.3-.3s2.9-8.3-.3-11.3C465.9 221.8 396.4 192 320 192s-145.9 29.8-197.5 78.4c-3.2 3-3.4 8.1-.3 11.3s8.1 3.4 11.3.3c48.7-45.9 114.3-74 186.5-74m0 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                <path className="aps-icon-background" d="" />
                <path
                  className="aps-icon-foreground"
                  d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2.9zM320 256c56.8 0 108.6 21.1 148.2 56 13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
