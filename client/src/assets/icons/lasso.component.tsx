import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LassoIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 176c0 97.2-128.9 176-288 176-13.2 0-26.3-.5-39-1.6 4.6 12.8 7 26.5 7 40.6 0 66.8-54.2 121-121 121H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h71c31.5 0 57-25.5 57-57 0-21.6-12.2-41.3-31.5-51l-46.8-23.4.2-.4C44.7 284.1 0 233.2 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176M288 288c123.7 0 224-50.1 224-112S411.7 64 288 64 64 114.1 64 176s100.3 112 224 112"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 176c0 97.2-128.9 176-288 176-14.9 0-29.6-.7-43.9-2 7.7 15.3 11.9 32.4 11.9 50.2 0 61.7-50.1 111.8-111.8 111.8H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h88.2c35.2 0 63.8-28.6 63.8-63.8 0-24.9-14.5-47.5-37.1-57.9l-44.3-20.5C50.2 290.1 0 236.6 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176M288 304c132.5 0 240-57.3 240-128S420.5 48 288 48 48 105.3 48 176s107.5 128 240 128"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 176c0 97.2-128.9 176-288 176-22.9 0-45.3-1.6-66.7-4.7 11.9 17.2 18.7 38 18.7 59.7 0 58-47 105-105 105H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h87c40.3 0 73-32.7 73-73 0-27.6-15.6-52.9-40.4-65.3l-34.9-17.4C52.9 293 0 238.3 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176M288 320c141.4 0 256-64.5 256-144S429.4 32 288 32 32 96.5 32 176s114.6 144 256 144"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 176c0 97.2-128.9 176-288 176-30.4 0-59.6-2.9-87.1-8.2 19.5 18.1 31.1 43.8 31.1 71.2 0 53.6-43.4 97-97 97H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h95c44.7 0 81-36.3 81-81 0-30.7-17.3-58.7-44.8-72.4l-30.7-15.4C56.4 296.5 0 240.3 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176M288 336c150.2 0 272-71.6 272-160S438.2 16 288 16 16 87.6 16 176s121.8 160 272 160"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M576 176c0 97.2-128.9 176-288 176-13.2 0-26.3-.5-39-1.6 4.6 12.8 7 26.5 7 40.6 0 66.8-54.2 121-121 121H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h71c31.5 0 57-25.5 57-57 0-21.6-12.2-41.3-31.5-51l-46.8-23.4.2-.4C44.7 284.1 0 233.2 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176M288 288c123.7 0 224-50.1 224-112S411.7 64 288 64 64 114.1 64 176s100.3 112 224 112"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
