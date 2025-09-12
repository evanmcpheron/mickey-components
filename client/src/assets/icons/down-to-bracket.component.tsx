import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownToBracketIcon: React.FC<
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
                  d="M378.1 198.6 249.5 341.4c-6.1 6.7-14.7 10.6-23.8 10.6h-3.5c-9.1 0-17.7-3.8-23.8-10.6L69.9 198.6c-3.8-4.2-5.9-9.8-5.9-15.5 0-12.7 10.4-23.1 23.1-23.1H160V32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v128h72.9c12.8 0 23.1 10.4 23.1 23.1 0 5.7-2.1 11.2-5.9 15.5M64 352v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 53-43 96-96 96H96c-53 0-96-43-96-96v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  d="M114.2 192 224 302l109.8-110H280c-13.3 0-24-10.7-24-24V48h-64v120c0 13.3-10.7 24-24 24zM224 352c-11.5 0-22.5-4.6-30.6-12.7L77.6 223.2c-8.7-8.7-13.6-20.5-13.6-32.8 0-25.6 20.8-46.4 46.4-46.4H144V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v96h33.6c25.6 0 46.4 20.8 46.4 46.4 0 12.3-4.9 24.1-13.6 32.8L254.6 339.3c-8.1 8.1-19.1 12.7-30.6 12.7m-176-8v80c0 22.1 17.9 40 40 40h272c22.1 0 40-17.9 40-40v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88v-80c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M222.2 319.2c.5.5 1.1.8 1.8.8s1.4-.3 1.8-.8l124.4-131.9c1.2-1.2 1.8-2.9 1.8-4.6 0-3.7-3-6.7-6.7-6.7H288c-8.8 0-16-7.2-16-16V40c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v120c0 8.8-7.2 16-16 16h-57.3c-3.7 0-6.7 3-6.7 6.7 0 1.7.7 3.3 1.8 4.6zM224 352c-9.5 0-18.6-3.9-25.1-10.8l-124.4-132C67.8 202 64 192.5 64 182.7c0-21.4 17.3-38.7 38.7-38.7H144V40c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v104h41.3c21.4 0 38.7 17.3 38.7 38.7 0 9.9-3.8 19.3-10.5 26.5l-124.4 132c-6.5 6.9-15.6 10.8-25.1 10.8M32 336v96c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80v-96c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M216 332.7c2.1 2.1 5 3.3 8 3.3s5.9-1.2 8-3.3l131.8-132.1c2.7-2.7 4.2-6.4 4.2-10.2 0-8-6.5-14.4-14.4-14.4H280c-4.4 0-8-3.6-8-8V32c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v136c0 4.4-3.6 8-8 8H94.4c-8 0-14.4 6.5-14.4 14.4 0 3.8 1.5 7.5 4.2 10.2zm8 19.3c-7.2 0-14.2-2.9-19.3-8L72.9 211.9c-5.7-5.7-8.9-13.4-8.9-21.5 0-16.8 13.6-30.4 30.4-30.4H160V32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v128h65.6c16.8 0 30.4 13.6 30.4 30.4 0 8.1-3.2 15.8-8.9 21.5L243.3 344c-5.1 5.1-12.1 8-19.3 8M16 328v96c0 39.8 32.2 72 72 72h272c39.8 0 72-32.2 72-72v-96c0-4.4 3.6-8 8-8s8 3.6 8 8v96c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88v-96c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M0 352v64c0 53 43 96 96 96h256c53 0 96-43 96-96v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64c0-17.7-14.3-32-32-32S0 334.3 0 352"
                />
                <path
                  className="aps-icon-foreground"
                  d="m251.3 340.7 122.8-122.8c6.4-6.4 9.9-15 9.9-24 0-18.7-15.2-33.9-33.9-33.9H288V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H97.9C79.2 160 64 175.2 64 193.9c0 9 3.6 17.6 9.9 24l122.8 122.8c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3"
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
