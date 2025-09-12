import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClockFiveThirtyIcon: React.FC<
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
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m24-120v-56.7l20 30c7.4 11 22.3 14 33.3 6.7s14-22.3 6.7-33.3l-64-96c-5.9-8.8-16.8-12.7-26.9-9.7s-17 12.4-17 23v136c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M280 392v-56.7l20 30c7.4 11 22.3 14 33.3 6.7s14-22.3 6.7-33.3l-64-96c-5.9-8.8-16.8-12.7-26.9-9.7s-17 12.4-17 23v136c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M272 400v-91.2l34.7 52c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-64-96c-3.9-5.9-11.2-8.5-17.9-6.4s-11.4 8.3-11.4 15.3V400c0 8.8 7.2 16 16 16s16-7.2 16-16"
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
                  d="M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M264 408V282.4l49.3 74c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-64-96c-2-2.9-5.6-4.2-9-3.2s-5.7 4.1-5.7 7.7v152c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m24-120v-56.7l20 30c7.4 11 22.3 14 33.3 6.7s14-22.3 6.7-33.3l-64-96c-5.9-8.8-16.8-12.7-26.9-9.7s-17 12.4-17 23v136c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 416c13.3 0 24-10.7 24-24v-56.7l20 30c7.4 11 22.3 14 33.3 6.7s14-22.3 6.7-33.3l-64-96c-5.9-8.8-16.8-12.7-26.9-9.7s-17 12.4-17 23v136c0 13.3 10.7 24 24 24z"
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
