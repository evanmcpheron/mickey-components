import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EnvelopeCircleCheckIcon: React.FC<
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
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48zm246.4 275.2a63.9 63.9 0 0 1-76.8 0L0 176v208c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.6.3-11.1.8-16.6zM640 336a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M64 112h384c8.8 0 16 7.2 16 16v22.1l-22.6 18.5C458.6 163 477 160 496 160c5.4 0 10.7.2 16 .7V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h296.2c-11.8-14.3-21.4-30.5-28.2-48H64c-8.8 0-16-7.2-16-16V212.2l142 116.6c37.7 31 91.8 31.5 130.1 1.5.9-29.2 8.9-56.5 22.4-80.4l-50.9 41.8c-20.7 17-50.4 17-71.1 0L48 150.1V128c0-8.8 7.2-16 16-16m576 224a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M64 96h384c17.7 0 32 14.3 32 32v32.7c5.3-.5 10.6-.7 16-.7s10.7.2 16 .7V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h296.2c-8.1-9.8-15.2-20.6-21-32H64c-17.7 0-32-14.3-32-32V207.6l176.7 129.5c28.2 20.6 66.5 20.6 94.6 0l17.1-12.5c1-16.2 4.3-31.8 9.4-46.6l-45.4 33.3c-16.9 12.4-39.9 12.4-56.8 0L32 167.9V128c0-17.7 14.3-32 32-32m432 128a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-187.3c-6.2-6.2-16.4-6.2-22.6 0L480 353.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M64 80h384c26.5 0 48 21.5 48 48v32c5.4 0 10.7.2 16 .7V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h296.2c-4.2-5.1-8.1-10.4-11.8-16H64c-26.5 0-48-21.5-48-48V176.7l194.8 157.1c26.4 21.3 64 21.3 90.4 0l19.7-15.9c.8-8.1 2.2-16.1 4.1-23.9l-33.9 27.3c-20.5 16.5-49.8 16.5-70.3 0L16 156.2V128c0-26.5 21.5-48 48-48m432 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 364.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="M0 112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48 0 15.1-7.1 29.3-19.2 38.4l-13.9 10.4c-66.6 6.4-122.4 50-146.3 109.8l-57.4 43a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112m320.8 207.4c-.5 5.5-.8 11-.8 16.6 0 42.5 15.1 81.6 40.2 112H64c-35.3 0-64-28.7-64-64V176l217.6 163.2a63.9 63.9 0 0 0 76.8 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 480a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-164.7-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
