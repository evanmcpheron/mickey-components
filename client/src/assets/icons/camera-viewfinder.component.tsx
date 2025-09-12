import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraViewfinderIcon: React.FC<
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
                  d="M56 0h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-4.4 0-8 3.6-8 8v80c0 13.3-10.7 24-24 24S0 149.3 0 136V56C0 25.1 25.1 0 56 0m320 0h80c30.9 0 56 25.1 56 56v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-4.4-3.6-8-8-8h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24M48 376v80c0 4.4 3.6 8 8 8h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-30.9 0-56-25.1-56-56v-80c0-13.3 10.7-24 24-24s24 10.7 24 24m464 0v80c0 30.9-25.1 56-56 56h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c4.4 0 8-3.6 8-8v-80c0-13.3 10.7-24 24-24s24 10.7 24 24M180 128l6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6h94.7c10 0 19 6.2 22.5 15.6L332 128h36c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48zm140 128a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M56 0h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-4.4 0-8 3.6-8 8v80c0 13.3-10.7 24-24 24S0 149.3 0 136V56C0 25.1 25.1 0 56 0m320 0h80c30.9 0 56 25.1 56 56v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-4.4-3.6-8-8-8h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24M48 376v80c0 4.4 3.6 8 8 8h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-30.9 0-56-25.1-56-56v-80c0-13.3 10.7-24 24-24s24 10.7 24 24m464 0v80c0 30.9-25.1 56-56 56h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c4.4 0 8-3.6 8-8v-80c0-13.3 10.7-24 24-24s24 10.7 24 24M173.8 120.2c6.3-14.7 20.8-24.2 36.8-24.2h90.9c16 0 30.5 9.5 36.8 24.2l3.3 7.8H352c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h10.5zm42 23.8-7.5 17.5c-3.8 8.8-12.5 14.5-22.1 14.5H160c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16h-26.3c-9.6 0-18.3-5.7-22.1-14.5l-7.4-17.5zM200 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0"
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
                  d="M0 48v96c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8 7.2-16 16-16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H48C21.5 0 0 21.5 0 48m216.6 48c-16.7 0-31.6 10.3-37.5 26l-2.3 6H152c-30.9 0-56 25.1-56 56v144c0 30.9 25.1 56 56 56h208c30.9 0 56-25.1 56-56V184c0-30.9-25.1-56-56-56h-24.9l-2.3-6c-5.8-15.7-20.8-26-37.4-26zm-7.5 37.2c1.2-3.1 4.2-5.2 7.5-5.2h78.7c3.3 0 6.3 2.1 7.5 5.2l6.2 16.4c2.3 6.2 8.3 10.4 15 10.4h36c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24h36c6.7 0 12.6-4.1 15-10.4l6.2-16.4zM224 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M464 0h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16 7.2 16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-26.5-21.5-48-48-48M0 464c0 26.5 21.5 48 48 48h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.8 0-16-7.2-16-16v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16zm464 48c26.5 0 48-21.5 48-48v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
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
                  d="M0 40v112c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-13.3 10.7-24 24-24h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H40C17.9 0 0 17.9 0 40M472 0H360c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c13.3 0 24 10.7 24 24v112c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-22.1-17.9-40-40-40M208 256a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M40 512h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H40c-13.3 0-24-10.7-24-24V360c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 22.1 17.9 40 40 40m472-40V360c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 13.3-10.7 24-24 24H360c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c22.1 0 40-17.9 40-40M211.1 96c-10 0-19 6.2-22.5 15.6l-6.1 16.4H144c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-38.5l-6.2-16.4c-3.5-9.4-12.5-15.6-22.5-15.6zm-7.5 21.2c1.2-3.1 4.2-5.2 7.5-5.2h89.8c3.3 0 6.3 2.1 7.5 5.2l8.1 21.6c1.2 3.1 4.2 5.2 7.5 5.2h44c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32h44c3.3 0 6.3-2.1 7.5-5.2z"
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
                  d="M24 0C10.7 0 0 10.7 0 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V48h88c13.3 0 24-10.7 24-24S149.3 0 136 0zm464 0H376c-13.3 0-24 10.7-24 24s10.7 24 24 24h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24M0 488c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H48v-88c0-13.3-10.7-24-24-24S0 362.7 0 376zm488 24c13.3 0 24-10.7 24-24V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h-88c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M186.2 111.6 180 128h-36c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-36l-6.2-16.4c-3.5-9.4-12.5-15.6-22.5-15.6h-94.7c-10 0-19 6.2-22.5 15.6zM256 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
