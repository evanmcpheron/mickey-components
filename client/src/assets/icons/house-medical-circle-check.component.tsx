import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseMedicalCircleCheckIcon: React.FC<
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
                  d="M320 368c0 59.5 29.5 112.1 74.8 144H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l212.7 186.9c-8.5-1.3-17.3-1.9-26.1-1.9-54.7 0-103.5 24.9-135.8 64H320v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16m32 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0l222.5 188.9c-9.8-1.7-19.9-2.6-30.1-2.6-14.2 0-28.1 1.7-41.3 4.9L288 55.5 112 204.8V432c0 17.7 14.3 32 32 32h204.5c12.3 18.8 28 35.1 46.3 48H144c-44.2 0-80-35.8-80-80V245.5l-24.5 20.8c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8zM320 256h40.2c-15.3 18.5-26.9 40.2-33.6 64H320v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zm32 112a144 144 0 1 1 288 0 144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235v197c0 44.2 35.8 80 80 80h250.8c-12.9-9.1-24.5-19.9-34.6-32H144c-26.5 0-48-21.5-48-48V206.7L288 37.3l178.1 157.2c9.7-1.7 19.7-2.5 29.9-2.5 5.6 0 11.1.3 16.5.8zM368 240h-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32v32c0 17.7 14.3 32 32 32h32c6.7 0 12.9-2 18-5.5-1.3-8.6-2-17.5-2-26.5 0-22.6 4.3-44.2 12-64h-12c-8.8 0-16 7.2-16 16v48h-32v-48c0-8.8-7.2-16-16-16h-48v-32h48c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3v-48h32v48c0 8.8 7.2 16 16 16h28.5c7.5-11.4 16.2-22 26-31.3-2.1-.4-4.3-.7-6.5-.7m128 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m44.7-187.3L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"
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
                  d="M282.7 2c3-2.7 7.6-2.7 10.6 0l215 190.4c-4.1-.3-8.2-.4-12.3-.4-4 0-8 .1-11.9.4L288 18.7 80 202.9V448c0 26.5 21.5 48 48 48h247.2c6.1 5.8 12.7 11.1 19.6 16H128c-35.3 0-64-28.7-64-64V217.1L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7s-2.6-8.4.7-11.3zm84.6 246c-4.7 5.1-9.1 10.4-13.3 16h-34c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8h8.2c.2 5.5.7 10.9 1.5 16.3-4.4 4.7-10.7 7.7-17.7 7.7h-32c-13.3 0-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v48zM496 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m58.3 98.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l42.4 42.4 74.3-74.3z"
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
                  d="M394.8 512c-45.3-31.9-74.8-84.5-74.8-144 0-5.4.2-10.7.7-16h-.7v16c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h40.2c32.3-39.1 81.1-64 135.8-64 8.9 0 17.6.7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64z"
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
