import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WatchFitnessIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zm0 416h256c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48M0 160c0-44.2 35.8-80 80-80h224c44.2 0 80 35.8 80 80v192c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80zm141.3 0c-33.9 0-61.3 27.4-61.3 61.3 0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112.3 0C85.6 0 64 21.6 64 48.3v17.3C27.5 73 0 105.3 0 144v224c0 38.7 27.5 71 64 78.4V464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-17.6c36.5-7.4 64-39.7 64-78.4V144c0-38.7-27.5-71-64-78.4V48.3C320 21.6 298.4 0 271.7 0zM304 112c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zM93.7 226.8c0 14.4 5.8 28.3 16.2 38.4l70.9 69c6.2 6 16.1 6 22.3 0l70.9-69c10.4-10.1 16.2-23.9 16.2-38.4 0-29.5-23.9-53.5-53.5-53.5h-1.5c-14.3 0-28.1 5.6-38.4 15.6l-4.9 4.8-4.9-4.8c-10.3-10-24-15.6-38.4-15.6h-1.5c-29.5 0-53.5 23.9-53.5 53.5z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 48v16h192V48c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16M64 65.6V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v17.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-17.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M96 464c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-16H96zM80 96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm32 125.3c0 7.8 3.1 15.2 8.6 20.7l71.4 71.4 71.4-71.4c5.5-5.5 8.6-12.9 8.6-20.7 0-16.2-13.1-29.3-29.3-29.3-7.8 0-15.2 3.1-20.7 8.6l-18.7 18.7c-6.2 6.2-16.4 6.2-22.6 0L162 200.6c-5.5-5.5-12.9-8.6-20.7-8.6-16.2 0-29.3 13.1-29.3 29.3m29.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 253.1 80 237.5 80 221.3c0-33.8 27.4-61.3 61.3-61.3"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 40v24h224V40c0-13.3-10.7-24-24-24H104c-13.3 0-24 10.7-24 24M64 65.6V40c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v25.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V472c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40v-25.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M80 472c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24H80zm224-40c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H80c-35.3 0-64 28.7-64 64v224c0 35.3 28.6 64 63.9 64H304M96 217.9v.6c0 10.6 4 20.9 11.2 28.8l78.9 86.1c1.5 1.7 3.7 2.6 5.9 2.6s4.4-.9 5.9-2.6l78.9-86.1c7.2-7.8 11.2-18.1 11.2-28.8v-.6c0-23.2-18.8-41.9-41.9-41.9-11.1 0-21.8 4.4-29.7 12.3L197.7 207c-1.5 1.5-3.5 2.3-5.7 2.3s-4.2-.8-5.7-2.3l-18.7-18.7c-7.9-7.9-18.5-12.3-29.7-12.3-23.1 0-41.9 18.8-41.9 41.9m41.9-57.9c15.4 0 30.1 6.1 41 17l13.1 13.1 13.1-13.1c10.9-10.9 25.6-17 41-17 32 0 57.9 25.9 57.9 57.9v.6c0 14.7-5.5 28.8-15.4 39.6l-78.9 86.1c-4.5 5-11 7.8-17.7 7.8s-13.1-2.8-17.7-7.8l-78.9-86.1C85.5 247.3 80 233.2 80 218.6v-.6c0-32 25.9-57.9 57.9-57.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M80 64C35.8 64 0 99.8 0 144v224c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V144c0-44.2-35.8-80-80-80zm0 157.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 253.1 80 237.5 80 221.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112.3 0h159.4C298.4 0 320 21.6 320 48.3v17.3c-5.2-1-10.5-1.6-16-1.6H80c-5.5 0-10.8.6-16 1.6V48.3C64 21.6 85.6 0 112.3 0M64 464v-17.6c5.2 1 10.5 1.6 16 1.6h224c5.5 0 10.8-.6 16-1.6V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48m16-242.7c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 253.1 80 237.5 80 221.3"
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
