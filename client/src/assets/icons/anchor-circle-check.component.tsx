import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AnchorCircleCheckIcon: React.FC<
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
                  d="M320 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v208h-48c-53 0-96-43-96-96v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7v6.1c0 88.4 71.6 160 160 160h160c8.2 0 16.3-.6 24.2-1.8-22.2-16.2-40.4-37.5-53-62.2H320V240h32c17.7 0 32-14.3 32-32s-14.3-32-32-32zM640 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M320 80a32 32 0 1 1-64 0 32 32 0 1 1 64 0M288 0c-44.2 0-80 35.8-80 80 0 35.9 23.7 66.3 56.3 76.4q-.3 1.8-.3 3.6v32h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v224h-24c-73.7 0-133.7-58.6-135.9-131.8l16.3 14c10.1 8.6 25.2 7.5 33.8-2.6s7.5-25.2-2.6-33.8l-56-48c-9-7.7-22.3-7.7-31.2 0l-56 48c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6L56 332.1C58.2 431.8 139.8 512 240 512h96c17.2 0 33.9-2.4 49.7-6.8-14.7-11.8-27.4-25.9-37.6-41.7-4 .4-8 .5-12.1.5h-24V240h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-32q0-1.8-.3-3.6C344.3 146.3 368 115.9 368 80c0-44.2-35.8-80-80-80m352 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M336 80a48 48 0 1 1-96 0 48 48 0 1 1 96 0M288 0c-44.2 0-80 35.8-80 80 0 38.7 27.5 71 64.1 78.4-.1.5-.1 1-.1 1.6v32h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v256h-32c-79.5 0-144-64.5-144-144v-25.4l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L64 310.6V336c0 97.2 78.8 176 176 176h96c17.2 0 33.8-2.5 49.5-7-9.8-7.9-18.8-16.9-26.7-26.7q-11.1 1.8-22.8 1.8h-32V224h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-32c0-.5 0-1.1-.1-1.6C340.5 151 368 118.7 368 80c0-44.2-35.8-80-80-80m208 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m44.7-187.3L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"
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
                  d="M352 80a64 64 0 1 1-128 0 64 64 0 1 1 128 0M288 0c-44.2 0-80 35.8-80 80 0 41.5 31.6 75.6 72 79.6V208h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v272h-8c-101.6 0-184-82.4-184-184v-27.2l58.1 64.5c3 3.3 8 3.6 11.3.6s3.6-8 .6-11.3l-72-80c-1.6-1.6-3.7-2.6-6-2.6s-4.4 1-5.9 2.6l-72 80c-3 3.3-2.7 8.3.6 11.3s8.3 2.7 11.3-.6l58-64.5V312c0 110.5 89.5 200 200 200h32c25.9 0 50.7-4.9 73.4-13.9-4.3-3.9-8.5-8.1-12.4-12.5-19 6.7-39.6 10.4-61 10.4h-8V224h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80v-48.4c40.4-4 72-38.1 72-79.6 0-44.2-35.8-80-80-80m208 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="M288 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 32c0 33.4-17 62.8-42.9 80H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v208h19.2c12.6 24.7 30.9 46 53 62.2-7.9 1.2-16 1.8-24.2 1.8H208c-88.4 0-160-71.6-160-160v-6.1l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l56-56c9.4-9.4 24.6-9.4 33.9 0l56 56c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7v6.1c0 53 43 96 96 96h48V240H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h10.9C209 158.8 192 129.4 192 96c0-53 43-96 96-96s96 43 96 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-164.7-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
