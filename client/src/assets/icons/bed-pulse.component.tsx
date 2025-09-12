import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BedPulseIcon: React.FC<
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
                  d="M483.2 9.6 524 64h92c13.3 0 24 10.7 24 24s-10.7 24-24 24H512c-7.6 0-14.7-3.6-19.2-9.6l-24.1-32.1-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L339.2 112H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h136c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5C445.9 6.2 453.2 1 461.6.1s16.6 2.7 21.6 9.5M320 160h12.7l20.7 31.1c11.2 16.8 30.6 26.3 50.7 24.8s37.9-13.7 46.5-32l11.3-23.9H544c53 0 96 43 96 96v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64v32c0 17.7-14.3 32-32 32S0 497.7 0 480V96c0-17.7 14.3-32 32-32s32 14.3 32 32v256h224V192c0-17.7 14.3-32 32-32m-144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
                  d="M483.2 9.6 524 64h92c13.3 0 24 10.7 24 24s-10.7 24-24 24H512c-7.6 0-14.7-3.6-19.2-9.6l-24.1-32.1-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L339.2 112H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h136c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5C445.9 6.2 453.2 1 461.6.1s16.6 2.7 21.6 9.5M288 216c0-27.3 19.5-50 45.4-55l20 30.1c4.7 7 10.8 12.7 17.8 16.9H344c-4.4 0-8 3.6-8 8v152h256v-88c0-39.8-32.2-72-72-72h-91.2c9.3-5.6 17-13.9 21.8-24.2l11.3-23.8H520c66.3 0 120 53.7 120 120v216c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80H48v72c0 13.3-10.7 24-24 24S0 501.3 0 488V88c0-13.3 10.7-24 24-24s24 10.7 24 24v280h240zm-80 32a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-128 0a88 88 0 1 1 176 0 88 88 0 1 1-176 0"
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
                  d="M478.3 8.8 505.9 64H624c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-6.1 0-11.6-3.4-14.3-8.8L465.6 55l-50.7 126.9c-2.3 5.9-7.9 9.8-14.2 10s-12.2-3.2-15-8.8L342.1 96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h144c6.1 0 11.6 3.4 14.3 8.8l32.1 64.2 50.7-126.9c2.3-5.9 7.9-9.8 14.2-10s12.2 3.2 15 8.8zM304 160h34.3l16 32H304c-8.8 0-16 7.2-16 16v144h320v-80c0-44.2-35.8-80-80-80h-82.7l12.8-32H528c61.9 0 112 50.1 112 112v224c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16v272h224V208c0-26.5 21.5-48 48-48m304 256v-32H32v32zM192 240a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M471.2 4.4 500.9 64H632c4.4 0 8 3.6 8 8s-3.6 8-8 8H496c-3 0-5.8-1.7-7.2-4.4l-24-48.1L407.4 171c-1.2 2.9-3.9 4.9-7.1 5s-6.1-1.6-7.5-4.4L347.1 80H200c-4.4 0-8-3.6-8-8s3.6-8 8-8h152c3 0 5.8 1.7 7.2 4.4l40 80.1L456.6 5c1.2-2.9 3.9-4.9 7.1-5s6.1 1.6 7.5 4.4M312 160h39.3l8 16H312c-13.3 0-24 10.7-24 24v152h336v-88c0-48.6-39.4-88-88-88h-96.1l6.4-16H536c57.4 0 104 46.6 104 104v240c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H16v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8v280h256V200c0-22.1 17.9-40 40-40m312 272v-64H16v64zM208 240a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M332.7 160H320c-17.7 0-32 14.3-32 32v160h352v-96c0-53-43-96-96-96h-82.1l-11.2 23.8c-8.6 18.3-26.4 30.5-46.5 32s-39.5-8-50.7-24.8zM256 240a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M483.2 9.6C478.1 2.9 469.9-.7 461.6.1s-15.7 6-19.3 13.7l-45.9 97.5L372 74.7C367.5 68 360 64 352 64H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h123.2l40.8 61.3c4.8 7.2 13.1 11.3 21.7 10.6s16.3-5.9 19.9-13.7l47-99.9 24.1 32.1c4.5 6 11.6 9.6 19.2 9.6H616c13.3 0 24-10.7 24-24s-10.7-24-24-24h-92zM64 96c0-17.7-14.3-32-32-32S0 78.3 0 96v384c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h512v32c0 17.7 14.3 32 32 32s32-14.3 32-32V352H64z"
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
