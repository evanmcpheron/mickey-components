import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RoadLockIcon: React.FC<
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
                  d="M288 32h-74.8c-27.1 0-51.3 17.1-60.3 42.6L35.1 407.2c-2.1 5.9-3.1 12-3.1 18.2 0 30.1 24.5 54.6 54.6 54.6H288v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64h32V352c0-23.7 12.9-44.4 32-55.4V272c0-58.3 44.6-106.2 101.5-111.5l-30.4-85.9C478 49.1 453.9 32 426.8 32H352v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32m176 16c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M217.7 32c-30.4 0-57.5 19-67.7 47.6l-109.4 304C23.7 430.5 58.4 480 108.3 480H384v-48h-40v-24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H108.3c-16.6 0-28.2-16.5-22.6-32.1l109.4-304c3.4-9.5 12.5-15.9 22.6-15.9H296v24c0 13.3 10.7 24 24 24s24-10.7 24-24V80h78.3c10.1 0 19.2 6.3 22.6 15.9l28.3 78.5c13.8-7.8 29.4-12.7 46-14L490 79.6C479.7 51 452.6 32 422.3 32zM344 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24zm184 24c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M217.6 32c-26.9 0-50.9 16.8-60.1 42l-117 320c-15.3 41.8 15.7 86 60.1 86H384v-32h-48v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H100.6c-22.2 0-37.7-22.1-30.1-43l117-320c4.6-12.6 16.6-21 30.1-21H304v48c0 8.8 7.2 16 16 16s16-7.2 16-16V64h86.4c13.4 0 25.4 8.4 30.1 21l30.8 84.3c9.7-4.2 20.1-7.1 31-8.4L482.5 74c-9.2-25.2-33.2-42-60.1-42zM336 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm192 16c26.5 0 48 21.5 48 48v48h-96v-48c0-26.5 21.5-48 48-48m-80 48v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m0 80h160v128H448z"
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
                  d="M217.4 32C194 32 173 46.6 164.9 68.6l-124.5 336C26.9 441.1 54 480 93 480h291v-16h-56v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H93c-27.9 0-47.2-27.8-37.5-53.9l124.4-336c5.8-15.7 20.8-26.1 37.5-26.1H312v56c0 4.4 3.6 8 8 8s8-3.6 8-8V48h94.6c16.7 0 31.7 10.4 37.5 26.1l33.8 91.2c5.1-1.6 10.3-2.9 15.7-3.8l-34.4-93C467 46.6 446 32 422.6 32zM328 200c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8zm200 8c26.5 0 48 21.5 48 48v64h-96v-64c0-26.5 21.5-48 48-48m-64 48v64h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 80h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16"
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
                  d="M213.2 32H288v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.3 17.1 60.3 42.6l30.4 85.9C460.6 165.8 416 213.7 416 272v24.6c-19.1 11.1-32 31.7-32 55.4v128h-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H86.6C56.5 480 32 455.5 32 425.4c0-6.2 1.1-12.4 3.1-18.2L152.9 74.6C162 49.1 186.1 32 213.2 32M320 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
