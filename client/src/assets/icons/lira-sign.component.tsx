import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LiraSignIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 160.4c0-35.5 28.8-64.4 64.4-64.4 6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4V192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h14c-2.2 10.5-6.1 20.6-11.7 29.9L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H88.5l.7-1.1c11.6-19.3 18.9-40.7 21.6-62.9H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H112v-32h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H112z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 159.2c0-43.7 35.5-79.2 79.2-79.2 8.5 0 17 1.4 25.1 4.1l80.1 26.7c12.6 4.2 26.2-2.6 30.4-15.2s-2.6-26.2-15.2-30.4l-80.1-26.7c-13-4.3-26.6-6.5-40.2-6.5C105 32 48 89 48 159.2V192H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v4.5c0 18.8-5.1 37.3-14.8 53.5L3.4 443.7c-4.4 7.4-4.6 16.6-.3 24.2S15.4 480 24 480h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H66.4l8-13.3C88.5 395.1 96 368.1 96 340.5V336h136c13.3 0 24-10.7 24-24s-10.7-24-24-24H96v-48h136c13.3 0 24-10.7 24-24s-10.7-24-24-24H96z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 152c0-48.6 39.4-88 88-88h7.1c9.5 0 18.9 1.5 27.8 4.5l80 26.7c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-80-26.7c-12.2-4.1-25-6.2-37.9-6.2H168C101.7 32 48 85.7 48 152v72H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v22.1c0 14-.8 28-2.4 41.9H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h24.5c-7.3 35.6-19.9 70.1-37.4 102.3l-1.1 2c-2.7 5-2.6 11 .3 15.8S10.4 480 16 480h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H42.1c14.4-30.6 24.8-62.9 31-96H240c8.8 0 16-7.2 16-16s-7.2-16-16-16H77.8c1.5-13.9 2.2-27.9 2.2-41.9V256h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 143.2C80 90.6 122.6 48 175.2 48c10.2 0 20.4 1.7 30.1 4.9l80.1 26.7c4.2 1.4 8.7-.9 10.1-5.1s-.9-8.7-5.1-10.1l-80-26.7c-11.3-3.8-23.2-5.7-35.2-5.7C113.8 32 64 81.8 64 143.2V224H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v20.6q0 30-4.8 59.4H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h48.3c-9.6 46.7-28.2 91.4-54.9 131.5-.9 1.3-1.4 2.8-1.4 4.5 0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H22.6c24.2-39.5 41.1-82.9 50-128H248c4.4 0 8-3.6 8-8s-3.6-8-8-8H75.4c3-19.6 4.6-39.4 4.6-59.4V240h168c4.4 0 8-3.6 8-8s-3.6-8-8-8H80z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M48 192v64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96v44.5c0 6.6-.7 13.1-2 19.5H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm62.8 64q1.2-9.6 1.2-19.5V288h112c17.7 0 32 14.3 32 32s-14.3 32-32 32zm1.2-96v-64h112c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176.4 96c-35.5 0-64.4 28.8-64.4 64.4v172.1c0 29-7.9 57.5-22.8 82.3l-.7 1.1H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3.4-32.2l29.8-49.6c9-14.9 13.7-32 13.7-49.4V160.4C48 89.5 105.5 32 176.4 32c13.8 0 27.5 2.2 40.6 6.6l81.2 27.1c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2l-81.2-27.1q-9.9-3.3-20.4-3.3z"
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
