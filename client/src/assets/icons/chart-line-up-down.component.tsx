import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartLineUpDownIcon: React.FC<
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
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16zm313.4 57.4L288 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l57.4-57.3 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l112-112 18.7 18.7c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6V80c0-8.8-7.2-16-16-16h-89.4C362.1 64 352 74.1 352 86.6c0 6 2.4 11.8 6.6 16l18.7 18.7zm64 141.3-18.7 18.7-34.7-34.7-45.3 45.3 34.7 34.7-18.7 18.7c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6h89.4c8.8 0 16-7.2 16-16v-89.4c0-12.5-10.1-22.6-22.6-22.6-6 0-11.8 2.4-16 6.6z"
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
                  d="M24 32c13.3 0 24 10.7 24 24v352c0 13.3 10.7 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.8 0-72-32.2-72-72V56c0-13.3 10.7-24 24-24m352 80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c6.4 0 12.5 2.5 17 7s7 10.6 7 17v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-22.1L305 273c-9.4 9.4-24.6 9.4-33.9 0l-63-63-63 63c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l63 63 110-110.1zm0 272c-13.3 0-24-10.7-24-24s10.7-24 24-24h22.1l-47-47 33.9-34 47 47v-22.1c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 6.4-2.5 12.5-7 17s-10.6 7-17 7h-80z"
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
                  d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v352c0 44.2 35.8 80 80 80h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48zm336 48h57.4L288 233.4l-68.7-68.7c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l84.7-84.7 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0L448 118.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16m0 288h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16v57.4l-68.7-68.7-22.6 22.6 68.7 68.7H368c-8.8 0-16 7.2-16 16s7.2 16 16 16"
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
                  d="M8 32c4.4 0 8 3.6 8 8v368c0 30.9 25.1 56 56 56h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-39.8 0-72-32.2-72-72V40c0-4.4 3.6-8 8-8m344 40c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V91.3L293.7 261.7c-3.1 3.1-8.2 3.1-11.3 0L208 187.3l-98.3 98.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l104-104c3.1-3.1 8.2-3.1 11.3 0l74.3 74.4L452.7 80H360c-4.4 0-8-3.6-8-8m8 312c-4.4 0-8-3.6-8-8s3.6-8 8-8h92.7l-90.3-90.3 11.3-11.3 90.3 90.3V264c0-4.4 3.6-8 8-8s8 3.6 8 8v112c0 4.4-3.6 8-8 8z"
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
                  d="M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="m358.6 102.6 18.7 18.7-89.3 89.4-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l57.4-57.3 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l112-112 18.7 18.7c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6V80c0-8.8-7.2-16-16-16h-89.4C362.1 64 352 74.1 352 86.6c0 6 2.4 11.8 6.6 16m64 178.7-34.7-34.7-45.3 45.3 34.7 34.7-18.7 18.7c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6H464c8.8 0 16-7.2 16-16v-89.3c0-12.5-10.1-22.6-22.6-22.6-6 0-11.8 2.4-16 6.6l-18.7 18.7z"
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
