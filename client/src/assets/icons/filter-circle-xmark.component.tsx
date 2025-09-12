import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilterCircleXmarkIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M3.9 22.9C10.5 8.9 24.5 0 40 0h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9M432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 41.7C0 18.7 18.7 0 41.7 0h428.2C493.2 0 512 18.8 512 42.1c0 8.9-2.8 17.6-8.1 24.8l-92.3 126.3c-30.9 3.6-59.3 15.1-83.2 32.5L458.3 48H55l163.6 200.8c3.5 4.3 5.4 9.6 5.4 15.2v68.4l32.3 25.6c-.2 3.3-.3 6.6-.3 10 0 20.8 3.6 40.7 10.2 59.2l-75.1-59.6c-9.6-7.6-15.1-19.1-15.1-31.3v-63.8L9.4 68C3.3 60.6 0 51.3 0 41.7M432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 39.5C0 17.7 17.7 0 39.5 0h433C494.3 0 512 17.7 512 39.5c0 9.2-3.2 18.1-9.1 25.2L394.2 196.1c-24.4 5.3-47 15.8-66.4 30.1L478.3 44.3c1.1-1.3 1.7-3 1.7-4.8 0-4.2-3.4-7.5-7.5-7.5h-433c-4.2 0-7.5 3.4-7.5 7.5 0 1.8.6 3.4 1.7 4.8l186.6 225.5c2.4 2.9 3.7 6.5 3.7 10.2v88.2l34 26.4c2.7 18.1 8.3 35.3 16.1 51.2-3.1-1.2-6.1-2.8-8.7-4.9l-61-47.4c-7.8-6.1-12.4-15.4-12.4-25.3v-82.4L9.1 64.7C3.2 57.6 0 48.7 0 39.5M544 368a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m203.3-36.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l36.7 36.7 36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 37.6C0 16.8 16.8 0 37.6 0h436.8C495.2 0 512 16.8 512 37.6c0 8.5-2.9 16.8-8.2 23.5L396.1 195.7q-13.8 2.85-26.7 7.8L491.3 51.1c3.1-3.8 4.7-8.6 4.7-13.5 0-11.9-9.7-21.6-21.6-21.6H37.6C25.7 16 16 25.7 16 37.6c0 4.9 1.7 9.7 4.7 13.5L206.2 283c1.1 1.4 1.8 3.2 1.8 5v71.7c0 7.7 3.7 14.9 9.9 19.4l43.3 31.5c2.2 9 5.2 17.7 8.7 26.1L208.4 392c-10.3-7.5-16.5-19.6-16.5-32.3v-68.9L8.2 61.1C2.9 54.4 0 46.2 0 37.6M560 368a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m205.7-50.3L443.3 368l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L432 379.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l50.3-50.3-50.3-50.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l50.3 50.3 50.3-50.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M40 0C24.5 0 10.5 8.9 3.9 22.9S-.7 53.4 9 65.3l183 223.6V368c0 10.1 4.7 19.6 12.8 25.6l64 48c1.5 1.1 3 2.1 4.7 2.9-11.2-23.1-17.5-49.1-17.5-76.5 0-85 60.2-155.9 140.4-172.4L503 65.3c9.8-12 11.8-28.5 5.2-42.5S487.5 0 472 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6"
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
