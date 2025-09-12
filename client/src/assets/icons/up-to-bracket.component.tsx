import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpToBracketIcon: React.FC<
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
                  d="M374.1 294.1 251.3 171.3c-7.2-7.2-17.1-11.3-27.3-11.3s-20.1 4.1-27.3 11.3L73.9 294.1c-6.4 6.4-9.9 15-9.9 24 0 18.7 15.2 33.9 33.9 33.9H160v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352h62.1c18.7 0 33.9-15.2 33.9-33.9 0-9-3.6-17.6-9.9-24M64 160V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32"
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
                  d="M114.2 320 224 210l109.8 110H280c-13.3 0-24 10.7-24 24v120h-64V344c0-13.3-10.7-24-24-24zM224 160c-11.5 0-22.5 4.6-30.6 12.7L77.6 288.8c-8.7 8.7-13.6 20.5-13.6 32.8 0 25.6 20.8 46.4 46.4 46.4H144v96c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-96h33.6c25.6 0 46.4-20.8 46.4-46.4 0-12.3-4.9-24.1-13.6-32.8L254.6 172.7c-8.1-8.1-19.1-12.7-30.6-12.7m-176 8V88c0-22.1 17.9-40 40-40h272c22.1 0 40 17.9 40 40v80c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6-39.4-88-88-88H88C39.4 0 0 39.4 0 88v80c0 13.3 10.7 24 24 24s24-10.7 24-24"
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
                  d="M222.2 192.8c.5-.5 1.1-.8 1.8-.8s1.4.3 1.8.8l124.4 131.9c1.2 1.2 1.8 2.9 1.8 4.6 0 3.7-3 6.7-6.7 6.7H288c-8.8 0-16 7.2-16 16v120c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V352c0-8.8-7.2-16-16-16h-57.3c-3.7 0-6.7-3-6.7-6.7 0-1.7.7-3.3 1.8-4.6zM224 160c-9.5 0-18.6 3.9-25.1 10.8l-124.4 132C67.8 310 64 319.5 64 329.3c0 21.4 17.3 38.7 38.7 38.7H144v104c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V368h41.3c21.4 0 38.7-17.3 38.7-38.7 0-9.9-3.8-19.3-10.5-26.5l-124.4-132c-6.5-6.9-15.6-10.8-25.1-10.8M32 176V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v96c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-44.2-35.8-80-80-80H80C35.8 0 0 35.8 0 80v96c0 8.8 7.2 16 16 16s16-7.2 16-16"
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
                  d="M216 179.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3l131.8 132.1c2.7 2.7 4.2 6.4 4.2 10.2 0 8-6.5 14.4-14.4 14.4H280c-4.4 0-8 3.6-8 8v136c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V344c0-4.4-3.6-8-8-8H94.4c-8 0-14.4-6.5-14.4-14.4 0-3.8 1.5-7.5 4.2-10.2zm8-19.3c-7.2 0-14.2 2.9-19.3 8L72.9 300.1c-5.7 5.7-8.9 13.4-8.9 21.5 0 16.8 13.6 30.4 30.4 30.4H160v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352h65.6c16.8 0 30.4-13.6 30.4-30.4 0-8.1-3.2-15.8-8.9-21.5L243.3 168c-5.1-5.1-12.1-8-19.3-8M16 184V88c0-39.8 32.2-72 72-72h272c39.8 0 72 32.2 72 72v96c0 4.4 3.6 8 8 8s8-3.6 8-8V88c0-48.6-39.4-88-88-88H88C39.4 0 0 39.4 0 88v96c0 4.4 3.6 8 8 8s8-3.6 8-8"
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
                  d="M0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M196.7 171.3 73.9 294.1c-6.4 6.4-9.9 15-9.9 24 0 18.7 15.2 33.9 33.9 33.9H160v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352h62.1c18.7 0 33.9-15.2 33.9-33.9 0-9-3.6-17.6-9.9-24L251.3 171.3c-7.2-7.2-17.1-11.3-27.3-11.3s-20.1 4.1-27.3 11.3"
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
