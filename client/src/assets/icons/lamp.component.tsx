import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LampIcon: React.FC<
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
                  d="M82.5 19.7C87.4 7.8 99.1 0 112 0h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 256 416 256H32c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1zM160 288h128v32s64 50.5 64 112c0 24.4-8.3 44.6-16.4 58.7-8.5 14.7-25.2 21.3-42.1 21.3h-139c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-61.5 64-112 64-112z"
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
                  d="m2.5 211.7 80-192C87.4 7.8 99.1 0 112 0h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 256 416 256H32c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1M56 208h336L325.3 48H122.7zm88 105.4V288h48v25.4c0 17-6.7 32-16.2 42.9C165.7 368 144 398.1 144 432c0 12.2 3.7 23.1 8.4 31.9.6.1 1.3.1 2.1.1h139c.8 0 1.5-.1 2.1-.1 4.6-8.8 8.4-19.7 8.4-31.9 0-32.3-22.1-63.8-32.6-76.4-9.2-10.9-15.4-25.6-15.4-42V288h48v25.6c0 4.1 1.6 8 4.2 11.2 11.7 14 43.8 56.9 43.8 107.2 0 24.4-8.3 44.6-16.4 58.7-8.5 14.7-25.2 21.3-42.1 21.3h-139c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-51.9 31.6-93.4 43.5-107.1 2.8-3.2 4.5-7.3 4.5-11.5"
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
                  d="M112 32 32 224h384L336 32zM82.5 19.7C87.4 7.8 99.1 0 112 0h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 256 416 256H32c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1zM160 312.2V288h32v24.2c0 14.8-6.7 27.8-16.5 36.6-6.8 6.1-19.3 18.4-29.8 34.1-10.7 16-17.7 32.9-17.7 49.1 0 17.1 5.8 31.8 12.1 42.6 1 1.7 4.8 5.4 14.4 5.4h139c9.7 0 13.5-3.7 14.4-5.4 6.3-10.8 12.1-25.5 12.1-42.6 0-16.2-7-33.1-17.7-49.1-10.5-15.7-23-28-29.8-34.1-9.8-8.8-16.5-21.8-16.5-36.6V288h32v24.2c0 4.9 2.2 9.5 5.9 12.8 15.8 14.3 58.1 57 58.1 107 0 24.4-8.3 44.6-16.4 58.7-8.5 14.7-25.2 21.3-42.1 21.3h-139c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-50 42.3-92.7 58.1-107 3.6-3.3 5.9-7.9 5.9-12.8"
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
                  d="m97.2 25.8-80 192c-2.1 4.9-1.5 10.6 1.5 15s8 7.1 13.3 7.1h384c5.4 0 10.3-2.7 13.3-7.1s3.5-10.1 1.5-15l-80-192c-2.5-6-8.3-9.8-14.8-9.8H112c-6.5 0-12.3 3.9-14.8 9.8m-14.7-6.1C87.4 7.8 99.1 0 112 0h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 256 416 256H32c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1zM160 312.2V288h16v24.2c0 9.8-4.5 18.7-11.2 24.7-7.4 6.6-20.9 19.9-32.4 37.1-11.6 17.3-20.4 37.4-20.4 58 0 20.7 7 38.2 14.2 50.6 4.7 8.2 15 13.4 28.3 13.4h139c13.3 0 23.5-5.2 28.3-13.4C329 470.2 336 452.7 336 432c0-20.6-8.8-40.6-20.4-58-11.5-17.2-25-30.4-32.4-37.1-6.7-6-11.2-14.9-11.2-24.7V288h16v24.2c0 4.9 2.2 9.5 5.9 12.8 15.8 14.3 58.1 57 58.1 107 0 24.4-8.3 44.6-16.4 58.7-8.5 14.7-25.2 21.3-42.1 21.3h-139c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-50 42.3-92.7 58.1-107 3.6-3.3 5.9-7.9 5.9-12.8"
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
                  d="M288 256H160v48s-64 66.5-64 128c0 24.4 8.3 44.6 16.4 58.7 8.5 14.7 25.2 21.3 42.1 21.3h139c17 0 33.6-6.6 42.1-21.3 8.1-14 16.4-34.3 16.4-58.7 0-61.5-64-128-64-128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-80 192c-4.1 9.9-3 21.2 2.9 30.1S21.3 256 32 256h384c10.7 0 20.7-5.3 26.6-14.2s7-20.2 2.9-30.1l-80-192C360.6 7.8 348.9 0 336 0z"
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
