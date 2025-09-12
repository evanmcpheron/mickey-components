import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenLineIcon: React.FC<
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
                  d="m453.3 19.3 39.4 39.4c25 25 25 65.5 0 90.5l-48.4 48.4-130-129.9 48.4-48.4c25-25 65.5-25 90.5 0zM58.6 323.5 291.7 90.3l130 130-233.2 233.1c-10.4 10.4-23.3 18-37.4 22.2L30.8 511c-8.4 2.5-17.5.2-23.7-6.1s-8.6-15.2-6.1-23.7l35.4-120.3c4.2-14.1 11.8-27 22.2-37.4M248 464h304c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="m13.4 439 23-78.1c4.2-14.1 11.8-27 22.2-37.4L362.7 19.3c25-25 65.5-25 90.5 0l39.4 39.4c3.1 3.1 5.9 6.5 8.2 10 16.4 24.8 13.7 58.6-8.2 80.5L188.5 453.4c-1.3 1.3-2.6 2.6-4 3.8-9.6 8.5-21 14.8-33.4 18.4l-78.1 23L30.8 511c-8.4 2.5-17.5.2-23.7-6.1s-8.6-15.2-6.1-23.7zm62.2-41.2-16.2 54.8 54.8-16.1 23.4-6.9c6.4-1.9 12.3-5.4 17-10.1L383 191l-62-62L92.5 357.4c-.6.6-1.2 1.2-1.7 1.8-3.9 4.4-6.7 9.6-8.4 15.2l-6.9 23.4zM248 464h304c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M429.8 39.6c-9.4-9.4-24.6-9.4-33.9 0L341 94.4l76.6 76.6 54.8-54.8c9.4-9.4 9.4-24.6 0-33.9zM83.1 352.4C75.5 360 70 369.3 67 379.6l-27.4 92.8 92.8-27.3c10.3-3 19.6-8.6 27.2-16.1L395 193.6 318.4 117zM373.2 17c21.9-21.9 57.3-21.9 79.2 0L495 59.6c21.9 21.9 21.9 57.3 0 79.2L182.3 451.6c-11.4 11.4-25.4 19.7-40.8 24.2l-121 35.6c-5.6 1.7-11.7.1-15.8-4s-5.7-10.2-4-15.8l35.6-121c4.5-15.4 12.9-29.4 24.2-40.8zM240 480h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M440.2 25.9c-12.5-12.5-32.8-12.5-45.3 0l-66.8 66.9 91.1 91.1 66.9-66.9c12.5-12.5 12.5-32.8 0-45.3zM73.6 347.3c-10.4 10.4-18 23.3-22.2 37.4L19.8 492.2l107.5-31.6c14.1-4.2 27-11.8 37.4-22.2l243.2-243.2-91.1-91.1zm310-332.7c18.7-18.7 49.1-18.7 67.9 0l45.8 45.8c18.7 18.7 18.7 49.1 0 67.9L176 449.7c-12.3 12.3-27.5 21.3-44.2 26.2L10.3 511.7c-2.8.8-5.8.1-7.9-2s-2.8-5.1-2-7.9l35.7-121.6C41 363.5 50 348.3 62.3 336L383.7 14.6zM232 496h336c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M453.3 19.3c-25-25-65.5-25-90.5 0L303 79l130 130 59.7-59.7c25-25 25-65.5 0-90.5zM248 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M433 209 303 79 52.8 329.3c-6.6 6.6-11.5 14.8-14.1 23.8L1 481.2c-2.5 8.5-.2 17.6 6 23.8s15.3 8.5 23.7 6.1l128.2-37.7c9-2.6 17.2-7.5 23.8-14.1z"
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
