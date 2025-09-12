import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CricketBatBallIcon: React.FC<
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
                  d="M502.6 9.4c12.5 12.5 12.5 32.8 0 45.3l-135 135L409 231c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-23 23H240c-8.8 0-16-7.2-16-16V126.1l23-23c9.4-9.4 24.6-9.4 33.9 0l41.4 41.4 135-135C469.8-3 490.1-3 502.6 9.5zM352 432a80 80 0 1 1 160 0 80 80 0 1 1-160 0M16.1 334 192 158.1V272c0 26.5 21.5 48 48 48h113.9L178 495.9c-10 10-24.4 16.7-40.4 15.6-11.3-.8-28.6-2.8-46.4-8.2-17.3-5.1-37.1-14.2-52.2-30.3-16.2-15-25.2-34.9-30.4-52.2C3.2 403 1.2 385.7.5 374.4c-1.1-16 5.6-30.4 15.6-40.4"
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
                  d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-143 143-24.4-24.4c-21.9-21.9-57.3-21.9-79.2 0L16.1 334C6.1 344-.6 358.4.5 374.4c.8 11.3 2.8 28.6 8.2 46.4 5.1 17.3 14.2 37.1 30.3 52.2 15 16.2 34.9 25.2 52.2 30.4 17.8 5.4 35.1 7.4 46.4 8.2 16 1.1 30.4-5.6 40.4-15.6l208.3-208.4c21.9-21.9 21.9-57.3 0-79.2L361.9 184zM269.7 159.6l41.2 41.2.2.2.2.2 41.2 41.2c3.1 3.1 3.1 8.2 0 11.3L318.1 288H232c-4.4 0-8-3.6-8-8v-86.1l34.3-34.3c3.1-3.1 8.2-3.1 11.3 0zM176 241.9V280c0 30.9 25.1 56 56 56h38.1l-126 126c-.7.7-1.5 1.2-2.1 1.5-.5.2-.8.2-1.1.2-9.3-.6-22.6-2.2-35.7-6.2s-24-9.7-30.9-17.2c-.8-.8-1.6-1.7-2.4-2.4-7.5-6.9-13.2-17.8-17.2-30.9s-5.6-26.5-6.2-35.7c0-.3 0-.6.2-1.1.2-.6.7-1.4 1.5-2.1l126-126zM400 432a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M507.3 4.7c6.2 6.2 6.2 16.4 0 22.6L354.6 180l34.1 34.1c18.7 18.7 18.7 49.1 0 67.9l-33.3 33.3-182.7 182.6c-9 9-21.2 14.1-33.9 14.1H136C60.9 512 0 451.1 0 376v-2.7c0-12.7 5.1-24.9 14.1-33.9l182.6-182.7 33.4-33.4c18.7-18.7 49.1-18.7 67.9 0l34 34.1L484.7 4.7c6.2-6.2 16.4-6.2 22.6 0M192 206.6 36.7 361.9c-3 3-4.7 7.1-4.7 11.3v2.7c0 57.4 46.6 104 104 104h2.7c4.2 0 8.3-1.7 11.3-4.7L305.4 320H240c-26.5 0-48-21.5-48-48zM337.4 288l28.7-28.7c6.2-6.2 6.2-16.4 0-22.6L275.4 146c-6.2-6.2-16.4-6.2-22.6 0L224 174.6V272c0 8.8 7.2 16 16 16zM480 432a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M509.7 2.3c3.1 3.1 3.1 8.2 0 11.3L351.3 172l36.4 36.4c21.9 21.9 21.9 57.3 0 79.2L175 500.3c-7.5 7.5-17.7 11.7-28.3 11.7H136C60.9 512 0 451.1 0 376v-10.7c0-10.6 4.2-20.8 11.7-28.3l212.7-212.7c21.9-21.9 57.3-21.9 79.2 0l36.4 36.4L498.3 2.3c3.1-3.1 8.2-3.1 11.3 0zm-274 133.3L216 155.3V272c0 13.3 10.7 24 24 24h116.7l19.7-19.7c15.6-15.6 15.6-40.9 0-56.6l-84.1-84.1c-15.6-15.6-40.9-15.6-56.6 0M200 171.3l-177 177c-4.5 4.5-7 10.6-7 17V376c0 66.3 53.7 120 120 120h10.7c6.4 0 12.5-2.5 17-7l177-177H240c-22.1 0-40-17.9-40-40zM496 432a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M192 158.1 16.1 334C6.1 344-.6 358.4.5 374.4c.8 11.3 2.8 28.6 8.2 46.4 5.1 17.3 14.2 37.1 30.3 52.2 15 16.2 34.9 25.2 52.2 30.4 17.8 5.4 35.1 7.4 46.4 8.2 16 1.1 30.4-5.6 40.4-15.6l175.9-176H240c-26.5 0-48-21.5-48-48zM385.9 288l23-23c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17L281 103c-9.4-9.4-24.6-9.4-33.9 0l-23 23v146c0 8.8 7.2 16 16 16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M502.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-135 135 45.3 45.3 135-135c12.5-12.5 12.5-32.8 0-45.3M385.9 288H240c-8.8 0-16-7.2-16-16V126.1l-32 32V272c0 26.5 21.5 48 48 48h113.9zM512 432a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
