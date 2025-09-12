import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LightbulbExclamationIcon: React.FC<
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
                  d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h160zm-80 128c44.2 0 80-35.8 80-80v-16H112v16c0 44.2 35.8 80 80 80m0-448c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24m-32 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M320 176c0 27.2-8.4 52.3-22.8 72.9-3.7 5.3-8.1 11.3-12.7 17.7-12.9 17.7-28.3 38.9-39.8 59.8-10.4 19-15.7 38.8-18.3 57.5H275c2.2-12 5.9-23.7 11.8-34.5 9.9-18 22.2-34.9 34.5-51.8 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 12.3 16.8 24.6 33.7 34.5 51.8 5.9 10.8 9.6 22.5 11.8 34.5h48.6c-2.6-18.7-7.9-38.6-18.3-57.5-11.5-20.9-26.9-42.1-39.8-59.8-4.7-6.4-9-12.4-12.8-17.7C72.4 228.3 64 203.2 64 176c0-70.7 57.3-128 128-128s128 57.3 128 128M192 512c44.2 0 80-35.8 80-80v-16H112v16c0 44.2 35.8 80 80 80m0-400c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16m24 168a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M336 176c0 30.6-9.5 58.8-25.7 82.1-4.1 5.9-8.8 12.3-13.6 19-12.7 17.5-27.1 37.2-38 57.1-8.9 16.2-13.7 33.3-16.2 49.9H275c2.2-12 5.9-23.7 11.8-34.5 9.9-18 22.2-34.9 34.5-51.8 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 12.3 16.8 24.6 33.7 34.5 51.8 5.9 10.8 9.6 22.5 11.8 34.5h32.4c-2.5-16.6-7.3-33.7-16.2-49.9-10.9-20-25.3-39.7-38-57.1-4.9-6.7-9.5-13-13.6-19C57.5 234.8 48 206.6 48 176c0-79.5 64.5-144 144-144s144 64.5 144 144M146.7 448h90.5c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32zM112 432c0 44.2 35.8 80 80 80s80-35.8 80-80v-5.3c0-5.9-4.8-10.7-10.7-10.7H122.7c-5.9 0-10.7 4.8-10.7 10.7zm80-336c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16m24 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M352 176c0 33.9-10.5 65.3-28.5 91.2-4.5 6.5-9.5 13.3-14.5 20.2-12.5 17.2-25.9 35.5-36.3 54.4-7.4 13.5-11.6 27.8-14 42.2H275c2.2-12 5.9-23.7 11.8-34.5 9.9-18 22.2-34.9 34.5-51.8 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 12.3 16.8 24.6 33.7 34.5 51.8 5.9 10.8 9.6 22.5 11.8 34.5h16.2c-2.4-14.4-6.6-28.7-14-42.2-10.4-19-23.7-37.3-36.3-54.4-5-6.9-10-13.7-14.5-20.2C42.5 241.3 32 209.9 32 176c0-88.4 71.6-160 160-160s160 71.6 160 160M128 432h128c0 35.3-28.7 64-64 64s-64-28.7-64-64m-16 0c0 44.2 35.8 80 80 80s80-35.8 80-80v-5.3c0-5.9-4.8-10.7-10.7-10.7H122.7c-5.9 0-10.7 4.8-10.7 10.7zm80-336c-4.4 0-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-4.4-3.6-8-8-8m16 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M321.2 297.8c-19.8 27.1-39.7 54.4-49.2 86.2H112c-9.6-31.9-29.5-59.1-49.2-86.2-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3-5 7.2-10.2 14.3-15.4 21.4zM192 64c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 512c44.2 0 80-35.8 80-80v-48H112v48c0 44.2 35.8 80 80 80"
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
