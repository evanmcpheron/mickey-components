import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GreaterThanEqualIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M52.1 93.7c-16.4-6.6-24.4-25.2-17.8-41.6s25.2-24.4 41.6-17.8l320 128C408 167.1 416 178.9 416 192s-8 24.9-20.1 29.7l-320 128c-16.4 6.6-35-1.4-41.6-17.8s1.4-35 17.8-41.6L297.8 192zM416 416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M47 78.2c-12.3-5-18.2-19-13.2-31.3s19-18.2 31.3-13.2l336 136c9.1 3.7 15 12.5 15 22.2s-5.9 18.6-15 22.2L65 350.2c-12.3 5-26.3-1-31.3-13.2s1-26.3 13.2-31.3L328 192zM424 432c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M41.9 62.8c-8.2-3.3-12.1-12.7-8.8-20.9S45.8 29.8 54 33.1l352 144c6 2.5 9.9 8.3 9.9 14.8s-3.9 12.3-9.9 14.8l-352 144c-8.2 3.3-17.5-.6-20.9-8.8s.6-17.5 8.8-20.9l315.8-129zM432 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M36.9 47.4c-4.1-1.7-6-6.4-4.3-10.4S39 31 43 32.7l368 152c3 1.2 4.9 4.2 4.9 7.4s-2 6.2-4.9 7.4l-368 152c-4.1 1.7-8.8-.3-10.4-4.3s.3-8.8 4.3-10.4L387 192zM440 464c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M34.3 52.1c-6.6 16.4 1.4 35 17.8 41.6L297.8 192 52.1 290.3c-16.4 6.6-24.4 25.2-17.8 41.6s25.2 24.4 41.6 17.8l320-128C408 216.9 416 205.1 416 192s-8-24.9-20.1-29.7l-320-128c-16.4-6.6-35 1.4-41.6 17.8"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32"
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
