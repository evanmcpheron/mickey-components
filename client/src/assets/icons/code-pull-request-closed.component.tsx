import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CodePullRequestClosedIcon: React.FC<
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
                  d="M329.4 9.4c12.5-12.5 32.8-12.5 45.3 0L400 34.7l25.4-25.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L445.3 80l25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L400 125.3l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 80l-25.3-25.4c-12.5-12.5-12.5-32.8 0-45.3zM136 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 0c0 32.8-19.7 61-48 73.3v205.4c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V153.3C51.7 141 32 112.8 32 80c0-44.2 35.8-80 80-80s80 35.8 80 80m-80 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48m288 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 56c-44.2 0-80-35.8-80-80 0-32.8 19.7-61 48-73.3V224c0-17.7 14.3-32 32-32s32 14.3 32 32v134.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80"
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
                  d="M144 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m48 0c0 35.8-23.5 66.1-56 76.3v199.4c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V156.3C55.5 146.1 32 115.8 32 80c0-44.2 35.8-80 80-80s80 35.8 80 80m-80 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 48c-44.2 0-80-35.8-80-80 0-35.8 23.5-66.1 56-76.3V224c0-13.3 10.7-24 24-24s24 10.7 24 24v131.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80M327 7c9.4-9.4 24.6-9.4 33.9 0l39 39L439 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-39 39 39 39c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39-39 39c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L327 41c-9.4-9.4-9.4-24.6 0-33.9z"
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
                  d="M160 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m32 0c0 38.7-27.5 71-64 78.4v195.2c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4V158.4C59.5 151 32 118.7 32 80c0-44.2 35.8-80 80-80s80 35.8 80 80M64 432a48 48 0 1 0 96 0 48 48 0 1 0-96 0m336 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-16-126.4V208c0-8.8 7.2-16 16-16s16 7.2 16 16v145.6c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4M332.7 12.7c6.2-6.2 16.4-6.2 22.6 0L400 57.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L422.6 80l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L400 102.6l-44.7 44.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L377.4 80l-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6"
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
                  d="M112 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m8 111.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64S48 28.7 48 64c0 32.6 24.4 59.6 56 63.5v257c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5zM330.3 10.3c-3.1 3.1-3.1 8.2 0 11.3L388.7 80l-58.3 58.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L400 91.3l58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L411.3 80l58.3-58.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L400 68.7l-58.3-58.4c-3.1-3.1-8.2-3.1-11.3 0zM64 448a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112c35.3 0 64-28.7 64-64 0-32.6-24.4-59.6-56-63.5V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v184.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64"
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
                  d="M144 153.3c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7v205.4c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7zM400 192c-17.7 0-32 14.3-32 32v134.7c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7V224c0-17.7-14.3-32-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M329.4 9.4c12.5-12.5 32.8-12.5 45.3 0L400 34.7l25.4-25.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L445.3 80l25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L400 125.3l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 80l-25.3-25.4c-12.5-12.5-12.5-32.8 0-45.3zM136 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0m80 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-104a80 80 0 1 1 0 160 80 80 0 1 1 0-160m288 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-104a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
