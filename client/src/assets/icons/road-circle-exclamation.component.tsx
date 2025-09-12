import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RoadCircleExclamationIcon: React.FC<
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
                  d="M213.2 32H288v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.3 17.1 60.3 42.6l42.7 120.6c-10.9-2.1-22.2-3.2-33.8-3.2-59.5 0-112.1 29.6-144 74.8V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32 2.3 0 4.6-.3 6.8-.7-4.5 15.5-6.8 31.8-6.8 48.7 0 5.4.2 10.7.7 16h-.7c-17.7 0-32 14.3-32 32v64H86.6C56.5 480 32 455.5 32 425.4c0-6.2 1.1-12.4 3.1-18.2L152.9 74.6C162 49.1 186.1 32 213.2 32M496 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"
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
                  d="M217.7 32c-30.4 0-57.5 19-67.7 47.6l-109.4 304C23.7 430.5 58.4 480 108.3 480h251.9c-21.9-26.6-36.2-59.7-39.5-96h-.7c-13.3 0-24 10.7-24 24v24H108.3c-16.6 0-28.2-16.5-22.6-32.1l109.4-304c3.4-9.5 12.5-15.9 22.6-15.9H296v24c0 13.3 10.7 24 24 24s24-10.7 24-24V80h78.3c10.1 0 19.2 6.3 22.6 15.9l34.9 96.9c5.4-.5 10.8-.7 16.3-.7 12.3 0 24.2 1.3 35.8 3.6L490 79.6C479.7 51 452.6 32 422.3 32zm109.2 287c4.1-14.1 9.8-27.4 17.1-39.8V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24 2.4 0 4.7-.4 6.9-1M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-96a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-144c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16"
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
                  d="M157.5 74c9.2-25.2 33.2-42 60.1-42h204.8c26.9 0 50.9 16.8 60.1 42l44.1 120.6c-9.9-1.7-20.2-2.7-30.6-2.7-1.5 0-2.9 0-4.4.1L452.5 85c-4.6-12.6-16.6-21-30.1-21H336v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64h-86.4c-13.4 0-25.4 8.4-30.1 21L70.6 405c-7.6 20.9 7.8 43 30.1 43h238.5c5.9 11.4 12.9 22.2 21 32H100.6c-44.5 0-75.4-44.2-60.1-86zM336 208v86.6c-3.5 7.6-6.5 15.6-8.9 23.8-2.1 1.1-4.6 1.7-7.1 1.7-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16s16 7.2 16 16m272 160a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-112c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="M217.4 32C194 32 173 46.6 164.9 68.6l-124.5 336C26.9 441.1 54 480 93 480h267.2c-4.2-5.1-8.1-10.4-11.8-16H328v-43.4c-2-6.5-3.7-13.2-5-20q-1.35-.6-3-.6c-4.4 0-8 3.6-8 8v56H93c-27.9 0-47.2-27.8-37.5-53.9l124.4-336c5.8-15.7 20.8-26.1 37.5-26.1H312v56c0 4.4 3.6 8 8 8s8-3.6 8-8V48h94.6c16.7 0 31.7 10.4 37.5 26.1l43.7 118.1c6 .3 11.9.8 17.7 1.7L475.1 68.6C467 46.6 446 32 422.6 32zM328 200c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8zm40 168a128 128 0 1 1 256 0 128 128 0 1 1-256 0m272 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-168c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8s8-3.6 8-8v-96c0-4.4-3.6-8-8-8"
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
                  d="M288 32h-74.8c-27.1 0-51.3 17.1-60.3 42.6L35.1 407.2c-2.1 5.9-3.1 12-3.1 18.2 0 30.1 24.5 54.6 54.6 54.6H288v-64c0-17.7 14.3-32 32-32h.7c-.5-5.3-.7-10.6-.7-16 0-16.9 2.4-33.3 6.8-48.7-2.2.5-4.5.7-6.8.7-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v42.8c31.9-45.2 84.5-74.8 144-74.8 11.6 0 22.9 1.1 33.8 3.2L487.1 74.6C478 49.1 453.9 32 426.8 32H352v64c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m168 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-8-152c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
