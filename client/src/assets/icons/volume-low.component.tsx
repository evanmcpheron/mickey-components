import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VolumeLowIcon: React.FC<
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
                  d="M301.1 34.8C312.6 40 320 51.4 320 64v384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3m111.5 146.7c21.5 17.6 35.4 44.4 35.4 74.5s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"
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
                  d="M159.9 201.9 272 102.3v307.4l-112.1-99.6c-4.4-3.9-10.1-6.1-15.9-6.1H56c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h88c5.9 0 11.6-2.2 15.9-6.1M290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9l135.5 120.5c5.5 4.8 12.5 7.5 19.8 7.5 16.5 0 29.8-13.3 29.8-29.8V61.8c0-16.5-13.3-29.8-29.8-29.8m122.4 149.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c21.5-17.7 35.4-44.5 35.4-74.6s-13.9-56.9-35.4-74.5"
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
                  d="M151.6 188 288 66.7v378.6L151.6 324c-2.9-2.6-6.7-4-10.6-4H56c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24h85c3.9 0 7.7-1.4 10.6-4M290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9l135.5 120.5 10.6-12-10.6 12c5.5 4.8 12.5 7.5 19.8 7.5 16.5 0 29.8-13.3 29.8-29.8V61.8c0-16.5-13.3-29.8-29.8-29.8m119.4 147.2c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4C406 216.5 416 235.1 416 256s-10 39.5-25.6 51.2c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2c23.3-17.5 38.4-45.4 38.4-76.8s-15.1-59.3-38.4-76.8"
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
                  d="M281 51.5c2.5-2.2 5.8-3.5 9.2-3.5 7.6 0 13.8 6.2 13.8 13.8v388.4c0 7.6-6.2 13.8-13.8 13.8-3.4 0-6.6-1.2-9.2-3.5L143.2 338c-1.5-1.3-3.4-2-5.3-2H56c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40h81.9c2 0 3.9-.7 5.3-2zm9.2-19.5c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9l135.5 120.5c5.5 4.8 12.5 7.5 19.8 7.5 16.5 0 29.8-13.3 29.8-29.8V61.8c0-16.5-13.3-29.8-29.8-29.8m119.5 147.2c-3.5-2.7-8.5-1.9-11.2 1.6s-1.9 8.5 1.6 11.2c19.4 14.6 31.9 37.8 31.9 64s-12.5 49.4-31.9 64c-3.5 2.7-4.2 7.7-1.6 11.2s7.7 4.2 11.2 1.6c23.2-17.6 38.3-45.4 38.3-76.8s-15.1-59.2-38.3-76.8"
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
                  d="M378.8 185c8.4-10.3 23.5-11.8 33.8-3.5 21.5 17.6 35.4 44.4 35.4 74.5s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8l134.9 119.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448z"
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
