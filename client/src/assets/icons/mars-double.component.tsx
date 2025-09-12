import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MarsDoubleIcon: React.FC<
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
                  d="M312 32c-9.7 0-18.5 5.8-22.2 14.8S288.1 66.1 295 73l33.4 33.4-52.6 52.6c-28.4-19.5-62.7-31-99.8-31C78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L407 185c6.9 6.9 17.2 8.9 26.2 5.2S448 177.7 448 168V56c0-13.3-10.7-24-24-24zM64 304a112 112 0 1 1 224 0 112 112 0 1 1-224 0m304 176c97.2 0 176-78.8 176-176 0-37-11.4-71.4-31-99.8l52.6-52.6L599 185c6.9 6.9 17.2 8.9 26.2 5.2S640 177.7 640 168V56c0-13.3-10.7-24-24-24H504c-9.7 0-18.5 5.8-22.2 14.8-1.2 2.9-1.8 6-1.8 9v.4c0 6.2 2.5 12.2 7 16.8l33.4 33.4-40.4 40.3V168c0 22.6-13.6 43.1-34.6 51.7-.8.3-1.7.7-2.5 1 22.8 20.5 37.1 50.2 37.1 83.3 0 61.9-50.1 112-112 112-5.4 0-10.8-.4-16-1.1-12.9 20.4-29.1 38.3-48.1 53.1 19.8 7.8 41.4 12 64 12z"
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
                  d="M288 56c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24v-54.1l-83.7 83.7C338.7 227.2 352 264.1 352 304c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7L366.1 80H312c-13.3 0-24-10.7-24-24M176 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256m304-273.9L558.1 80H504c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24v-54.1l-83.7 83.7C530.7 227.2 544 264.1 544 304c0 97.2-78.8 176-176 176-22.6 0-44.2-4.3-64-12 14.3-11.2 27.1-24.2 38-38.6 8.4 1.7 17.1 2.6 26 2.6 70.7 0 128-57.3 128-128 0-35.7-14.7-68.1-38.3-91.3 13.6-10.2 22.3-26.4 22.3-44.7z"
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
                  d="M304 48c0-8.8 7.2-16 16-16h112c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.6L311.3 191.4C336.7 221.9 352 261.2 352 304c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c42.8 0 82.1 15.3 112.6 40.7L393.4 64H320c-8.8 0-16-7.2-16-16M176 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288m293.4-257.9c4.5-5.6 7.8-12.3 9.5-19.6L585.4 64H512c-8.8 0-16-7.2-16-16s7.2-16 16-16h112c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.6l-100 100c22.6 30.6 36 68.4 36 109.4 0 101.6-82.4 184-184 184-20.7 0-40.5-3.4-59.1-9.7 10.1-7.6 19.5-16.2 28.1-25.5 10 2.1 20.3 3.2 30.9 3.2 83.9 0 152-68.1 152-152 0-38.3-14.1-73.3-37.5-100l-5.1-5.9z"
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
                  d="M637.7 34.3c1.5 1.5 2.3 3.5 2.3 5.7v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3l-126 126c63.1 69.1 61.3 176.3-5.5 243.1-48.6 48.6-118.5 62.8-179.6 42.7 4.8-4 9.5-8.2 14-12.5 53.3 14.1 112.5.3 154.3-41.5 62.5-62.5 62.5-163.8 0-226.3-3.1-3.1-3.1-8.2 0-11.3L612.7 48H488c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c2.1 0 4.2.8 5.7 2.3M296 48c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3l-126 126c28.6 31.3 46 72.9 46 118.7 0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c45.7 0 87.4 17.4 118.7 46l126-126zM176 464a160 160 0 1 0 0-320 160 160 0 1 0 0 320"
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
                  d="M368 480c-22.6 0-44.2-4.3-64-12 18.9-14.8 35.2-32.8 48.1-53.1 5.2.7 10.6 1.1 16 1.1 61.9 0 112-50.1 112-112 0-33.1-14.3-62.8-37.1-83.3.9-.3 1.7-.6 2.5-1 20.9-8.7 34.6-29.1 34.6-51.7v-21.3l40.4-40.4L487 73c-4.5-4.5-7-10.6-7-16.8v-.4c0-3 .6-6.1 1.8-9 3.7-9 12.5-14.8 22.2-14.8h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4-52.6 52.6c19.5 28.4 31 62.7 31 99.8 0 97.2-78.8 176-176 176M176 224a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M312 32c-9.7 0-18.5 5.8-22.2 14.8S288.1 66.1 295 73l33.4 33.4-52.6 52.6c-28.4-19.5-62.7-31-99.8-31C78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L407 185c6.9 6.9 17.2 8.9 26.2 5.2S448 177.7 448 168V56c0-13.3-10.7-24-24-24zM64 304a112 112 0 1 1 224 0 112 112 0 1 1-224 0m320 0c0 28.3-5.7 55.4-15.9 80 44.2 0 79.9-35.8 79.9-80s-35.8-80-79.9-80c10.3 24.6 15.9 51.7 15.9 80"
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
