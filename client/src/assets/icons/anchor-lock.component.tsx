import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AnchorLockIcon: React.FC<
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
                  d="M320 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v208h-48c-53 0-96-43-96-96v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7v6.1c0 88.4 71.6 160 160 160h160c8 0 15.9-.6 23.6-1.7-4.8-9-7.6-19.3-7.6-30.3v-33.3c-5.2.9-10.5 1.3-16 1.3H320V240h32c17.7 0 32-14.3 32-32s-14.3-32-32-32zM528 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M320 80a32 32 0 1 1-64 0 32 32 0 1 1 64 0M288 0c-44.2 0-80 35.8-80 80 0 35.9 23.7 66.3 56.3 76.4q-.3 1.8-.3 3.6v32h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v224h-24c-73.7 0-133.7-58.6-135.9-131.8l16.3 14c10.1 8.6 25.2 7.5 33.8-2.6s7.5-25.2-2.6-33.8l-56-48c-9-7.7-22.3-7.7-31.2 0l-56 48c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6L56 332.1C58.2 431.8 139.8 512 240 512h96c18.3 0 36.1-2.7 52.8-7.7-3.1-7.5-4.8-15.7-4.8-24.3v-24.7c-14.9 5.6-31.1 8.7-48 8.7h-24V240h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-32q0-1.8-.3-3.6C344.3 146.3 368 115.9 368 80c0-44.2-35.8-80-80-80m240 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M336 80a48 48 0 1 1-96 0 48 48 0 1 1 96 0M288 0c-44.2 0-80 35.8-80 80 0 38.7 27.5 71 64.1 78.4-.1.5-.1 1-.1 1.6v32h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v256h-32c-79.5 0-144-64.5-144-144v-25.4l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L64 310.6V336c0 97.2 78.8 176 176 176h96c18.3 0 36-2.8 52.6-8-3-7.4-4.6-15.5-4.6-24v-8.2c-15 5.3-31.2 8.2-48 8.2h-32V224h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-32c0-.5 0-1.1-.1-1.6C340.5 151 368 118.7 368 80c0-44.2-35.8-80-80-80m240 224c26.5 0 48 21.5 48 48v48h-96v-48c0-26.5 21.5-48 48-48m-80 48v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m0 80h160v128H448z"
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
                  d="M352 80a64 64 0 1 1-128 0 64 64 0 1 1 128 0M288 0c-44.2 0-80 35.8-80 80 0 41.5 31.6 75.6 72 79.6V208h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v272h-8c-101.6 0-184-82.4-184-184v-27.2l58.1 64.5c3 3.3 8 3.6 11.3.6s3.6-8 .6-11.3l-72-80c-1.6-1.6-3.7-2.6-6-2.6s-4.4 1-5.9 2.6l-72 80c-3 3.3-2.7 8.3.6 11.3s8.3 2.7 11.3-.6l58-64.5V312c0 110.5 89.5 200 200 200h32c29.1 0 56.7-6.2 81.7-17.4-1.1-4.7-1.7-9.6-1.7-14.6v-2.3c-24.2 11.7-51.3 18.3-80 18.3h-8V224h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80v-48.4c40.4-4 72-38.1 72-79.6 0-44.2-35.8-80-80-80m240 208c26.5 0 48 21.5 48 48v64h-96v-64c0-26.5 21.5-48 48-48m-64 48v64h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 80h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16"
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
                  d="M288 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 32c0 33.4-17 62.8-42.9 80H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v208h48c5.5 0 10.8-.5 16-1.3V480c0 11 2.7 21.3 7.6 30.3-7.7 1.1-15.6 1.7-23.6 1.7H208c-88.4 0-160-71.6-160-160v-6.1l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l56-56c9.4-9.4 24.6-9.4 33.9 0l56 56c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7v6.1c0 53 43 96 96 96h48V240H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h10.9C209 158.8 192 129.4 192 96c0-53 43-96 96-96s96 43 96 96"
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
