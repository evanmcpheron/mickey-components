import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DrumstickIcon: React.FC<
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
                  d="M150.6 287.8c6-6 9.4-14.1 9.4-22.6V176C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176h-89.2c-8.5 0-16.6 3.4-22.6 9.4l-26.8 26.8c-12.3 12.3-11.4 32.5-7.2 49.4 1.1 4.6 1.8 9.5 1.8 14.5 0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12-33.1 0-60-26.9-60-60s26.9-60 60-60c5 0 9.8.6 14.5 1.8 16.9 4.2 37.1 5.2 49.4-7.2l26.8-26.8z"
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
                  d="M240 304c-17.7 0-32-14.3-32-32v-96c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128zm-37.5 78c10.2-14.4 23.9-30 41.5-30h92c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176v92c0 17.7-15.6 31.3-30 41.5-2.4 1.7-4.6 3.6-6.8 5.7-12 12-31.5 11.1-47.9 6.8-4.9-1.3-10-2-15.4-2-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12 0 33.1 26.9 60 60 60s60-26.9 60-60c0-5.3-.7-10.5-2-15.4-4.3-16.4-5.2-35.9 6.8-47.9 2.1-2.1 4-4.4 5.7-6.7z"
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
                  d="M192 272v-96c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144h-96c-26.5 0-48-21.5-48-48m-32-96v96c0 3 .2 6 .5 8.9L121.4 320h-.1c-.1 0-.5.1-1.2.1-1.5-.1-3.5-.7-5.2-2-12-8.8-26.8-14.1-42.9-14.1-39.8 0-72 32.2-72 72 0 37.2 28.2 67.8 64.4 71.6C68.2 483.8 98.8 512 136 512c39.8 0 72-32.2 72-72 0-16.1-5.3-30.9-14.2-42.9-1.2-1.7-1.9-3.7-2-5.2 0-.7.1-1.1.1-1.2v-.1l39.1-39.1c2.9.3 5.9.5 8.9.5h96c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176m12.2 138.4c6.4 10.3 15.1 18.9 25.4 25.4L169.3 368c-15 15-9.9 36.5-1.2 48.1 4.9 6.7 7.9 14.9 7.9 23.8 0 22.1-17.9 40-40 40s-40-17.9-40-40c0-13.1-10.9-24-24-24-22.1 0-40-17.9-40-40s17.9-40 40-40c9 0 17.2 2.9 23.8 7.9 11.7 8.7 33.2 13.7 48.1-1.2l28.2-28.2z"
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
                  d="M176 185.9C176 92.1 252.1 16 345.9 16 428.8 16 496 83.2 496 166.1c0 93.8-76.1 169.9-169.9 169.9h-97c-29.3 0-53.1-23.8-53.1-53.1zM345.9 0C243.2 0 160 83.2 160 185.9v98.8l-45.8 45.8c-3.1 3.1-9.6 3.6-15.7-.3C88.6 323.7 76.7 320 64 320c-35.3 0-64 28.7-64 64s28.7 64 64 64c0 35.3 28.7 64 64 64s64-28.7 64-64c0-12.7-3.7-24.6-10.1-34.6-3.9-6.1-3.4-12.6-.3-15.7l45.7-45.7h98.8C428.8 352 512 268.8 512 166.1 512 74.4 437.6 0 345.9 0M208 348.7l-37.7 37.7c-10.3 10.3-8.2 25.8-1.8 35.6 4.8 7.5 7.6 16.4 7.6 25.9 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-8.7-7.3-16-16-16-26.5 0-48-21.5-48-48s21.5-48 48-48c9.6 0 18.5 2.8 25.9 7.6 9.8 6.3 25.3 8.5 35.6-1.8l37.7-37.7c6.8 21.2 23.5 37.9 44.7 44.7"
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
                  d="M160.2 278.2c3 39.2 34.3 70.5 73.5 73.5l-36.4 36.4c-12.3 12.3-11.4 32.5-7.2 49.4 1.1 4.6 1.8 9.5 1.8 14.5 0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12-33.1 0-60-26.9-60-60s26.9-60 60-60c5 0 9.8.6 14.5 1.8 16.9 4.2 37.1 5.2 49.4-7.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 176v96c0 44.2 35.8 80 80 80h96c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176"
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
