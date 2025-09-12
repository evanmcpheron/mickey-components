import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MicrophoneStandIcon: React.FC<
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
                  d="M479.2 32.8c-43.7-43.7-114.7-43.7-158.4 0l-4.7 4.7 158.4 158.4 4.7-4.7c43.7-43.7 43.7-114.7 0-158.4M293.5 60.1l-4.7 4.7c-24.4 24.4-35.2 57.2-32.4 89l101.8 101.8c31.8 2.8 64.6-8 89-32.4l4.7-4.7zm-64.4 111.6L215.8 187 7.8 427c-11 12.7-10.3 31.7 1.6 43.6l32 32c11.9 11.9 30.9 12.6 43.6 1.6l139-120.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32V328.2l37-32 15.3-13.3z"
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
                  d="m476.9 204.9 1-1c45.9-46.9 45.6-122.2-1-168.7s-121.8-46.9-168.7-1l-1 .9-16 16-16 16-.9 1c-22.5 22.9-33.9 52.6-34.3 82.4L17.2 388.2A63.26 63.26 0 0 0 0 431.6c0 16.8 6.7 33 18.6 44.9l16.8 16.8c12 12 28.1 18.7 45 18.7 16.1 0 31.7-6.1 43.4-17.2L232 393.4V488c0 13.3 10.7 24 24 24s24-10.7 24-24V348.4l81.5-76.4c29.8-.4 59.5-11.8 82.4-34.2l1-1 16-16 16-16zm-115 19.1L325 187l-37-36.9c.5-17.4 7.2-34.6 20.1-48l101.8 101.8c-13.4 12.9-30.7 19.6-48 20.1m82-54L342.1 68.1c28.2-27.2 73-26.8 100.8 1s28.1 72.7 1 100.8zM80.4 464c-4.1 0-8.1-1.6-11-4.5l-16.9-16.9c-2.9-2.9-4.5-6.9-4.5-11 0-3.9 1.5-7.7 4.2-10.6l212.4-226.5L291 221l26.5 26.5L91 459.8c-2.9 2.7-6.7 4.2-10.6 4.2"
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
                  d="M449.5 186.9 325.1 62.5l4.7-4.7c34.4-34.4 90.1-34.4 124.4 0s34.4 90.1 0 124.5l-4.7 4.7zm-22.6 22.6-4.7 4.7c-17.5 17.5-40.6 26.1-63.6 25.8L272 153.4c-.4-23 8.2-46.1 25.8-63.6l4.7-4.7zM358.3 272c31.3.4 62.7-11.3 86.5-35.1l4.7-4.7 11.3-11.3 11.3-11.3 4.7-4.7c46.9-46.9 46.9-122.8 0-169.7S354-11.7 307.1 35.1l-4.7 4.7-11.3 11.3-11.3 11.4-4.7 4.7c-23.8 23.8-35.5 55.2-35.1 86.5l-225 240c-9.6 10.3-15 23.9-15 38 0 14.7 5.8 28.8 16.3 39.3l24.8 24.8C51.5 506.2 65.6 512 80.4 512c14.1 0 27.7-5.4 38-15L256 367.9V496c0 8.8 7.2 16 16 16s16-7.2 16-16V337.9zM96.5 473.6c-4.4 4.1-10.1 6.4-16.1 6.4-6.2 0-12.2-2.5-16.6-6.9l-24.9-24.8c-4.4-4.4-6.9-10.4-6.9-16.6 0-6 2.3-11.7 6.4-16.1l218-232.6 72.6 72.6z"
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
                  d="m468.9 212.9 5.7-5.7 2.3-2.3c46.9-46.9 46.9-122.8 0-169.7S354-11.7 307.1 35.1l-2.3 2.3-5.7 5.7-5.7 5.7-10.3 10.3c-26.5 26.5-38 62.4-34.5 97l-235.7 251C4.6 415.9 0 427.6 0 439.6c0 12.6 5 24.7 13.9 33.6l24.9 24.9c8.9 8.9 21 13.9 33.6 13.9 12.1 0 23.7-4.6 32.5-12.9L248 364.7V504c0 4.4 3.6 8 8 8s8-3.6 8-8V352q0-1.05-.3-2.1l92.1-86.5c34.6 3.5 70.5-8 97-34.5l10.3-10.3 5.7-5.7zm-114.5 34.2-89.5-89.5c-4-30.9 5.8-63.3 29.6-87.1l10.3-10.3 147.1 147-10.3 10.3c-23.8 23.8-56.2 33.6-87.1 29.6zm-36-200.7c40.6-40.6 106.5-40.6 147.1 0s40.6 106.5 0 147.1l-2.3 2.3-147.1-147 2.3-2.3zM72.4 496c-8.4 0-16.4-3.3-22.3-9.2l-24.9-24.9C19.3 456 16 448 16 439.6c0-8 3.1-15.7 8.5-21.6l231.7-246.5 84.3 84.3L93.9 487.5c-5.8 5.5-13.6 8.5-21.6 8.5z"
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
                  d="m316.1 37.5-22.6 22.6 158.4 158.4 11.3-11.3 11.3-11.3zM41.4 502.6c11.9 11.9 30.9 12.6 43.6 1.6l286.4-248.3-115.3-115.3L7.8 427c-11 12.7-10.3 31.7 1.6 43.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M479.2 32.8c43.7 43.7 43.7 114.7 0 158.4l-4.7 4.7L316.1 37.5l4.7-4.7c43.7-43.7 114.7-43.7 158.4 0M293.5 60.1l158.4 158.4-4.7 4.7c-21 21-48.3 31.9-75.8 32.8L256.1 140.6c.8-27.5 11.7-54.8 32.8-75.8l4.7-4.7zM224 480v-96.3l64-55.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32"
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
