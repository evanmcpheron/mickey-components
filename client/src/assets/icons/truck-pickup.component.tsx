import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckPickupIcon: React.FC<
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
                  d="m368.6 96 76.8 96H288V96zM224 80v112H64c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32h33.1c-.7 5.2-1.1 10.6-1.1 16 0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h66.3c-.7 5.2-1.1 10.6-1.1 16 0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h33c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c0-17.7-14.3-32-32-32h-48.6L418.6 56c-12.1-15.2-30.5-24-50-24H272c-26.5 0-48 21.5-48 48m0 288a48 48 0 1 1-96 0 48 48 0 1 1 96 0m288 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
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
                  d="M272 88v88h174.9l-72.2-92.9c-1.5-1.9-3.8-3.1-6.3-3.1H280c-4.4 0-8 3.6-8 8m140.6-34.4L507.7 176H552c30.9 0 56 25.1 56 56v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-57.3c.9 5.2 1.3 10.5 1.3 16 0 53-43 96-96 96s-96-43-96-96c0-5.5.5-10.8 1.3-16h-98.6c.9 5.2 1.3 10.5 1.3 16 0 53-43 96-96 96s-96-43-96-96c0-5.5.5-10.8 1.3-16H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-88c0-30.9 25.1-56 56-56h136V88c0-30.9 25.1-56 56-56h88.3c17.3 0 33.6 8 44.2 21.6zM96 320h8.4c17.6-19.6 43.1-32 71.6-32s54 12.4 71.6 32h144.8c17.6-19.6 43.1-32 71.6-32s54 12.4 71.6 32H560v-88c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v88zm128 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0m240 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M256 80v112h229.3L389 70.1c-3-3.8-7.7-6.1-12.6-6.1H272c-8.8 0-16 7.2-16 16m268.6 110.1 1.5 1.9H552c30.9 0 56 25.1 56 56v104h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c0 53-43 96-96 96s-96-43-96-96h-96c0 53-43 96-96 96s-96-43-96-96H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V248c0-30.9 25.1-56 56-56h136V80c0-26.5 21.5-48 48-48h104.5c14.7 0 28.6 6.7 37.7 18.3zM64 352h21.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64h107c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H576V248c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24zm176 32a64 64 0 1 0-128 0 64 64 0 1 0 128 0m224 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M240 72v120h253.8L387.3 57.1c-4.6-5.8-11.5-9.1-18.8-9.1H264c-13.3 0-24 10.7-24 24m270.3 115 3.9 5H552c30.9 0 56 25.1 56 56v120h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72c0 53-43 96-96 96s-96-43-96-96h-96c0 53-43 96-96 96s-96-43-96-96H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V248c0-30.9 25.1-56 56-56h136V72c0-22.1 17.9-40 40-40h104.5c12.2 0 23.8 5.6 31.4 15.2zM48 368h33.3c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80h98.7c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80H592V248c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40zm208 16a80 80 0 1 0-160 0 80 80 0 1 0 160 0m208 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
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
                <path
                  className="aps-icon-background"
                  d="M160 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160m320 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 96v96h157.4l-76.8-96zm130.6-40 108.8 136H576c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-26.8c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64H261.2c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h160V80c0-26.5 21.5-48 48-48h96.6c19.4 0 37.8 8.8 50 24"
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
