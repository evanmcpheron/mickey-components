import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GrillIcon: React.FC<
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
                  d="M0 72c0-22.1 17.9-40 40-40h368c22.1 0 40 17.9 40 40v24c0 89.8-52.9 167.3-129.2 203L382 446.5c5.2 12.2-.4 26.3-12.6 31.5s-26.3-.4-31.5-12.6L316.7 416H160c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c3.4 0 6.8.3 10.1.8l23.1-53.8C52.9 263.3 0 185.8 0 96zm151.8 296h144.4l-22.9-53.4c-15.9 3.6-32.3 5.4-49.3 5.4s-33.4-1.9-49.3-5.4zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M48 80h352v16c0 97.2-78.8 176-176 176S48 193.2 48 96zm-8-48C17.9 32 0 49.9 0 72v24c0 89.8 52.9 167.3 129.2 203l-23.1 53.8c-3.3-.5-6.7-.8-10.1-.8-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64h156.7l21.2 49.5c5.2 12.2 19.3 17.8 31.5 12.6s17.8-19.3 12.6-31.5L318.8 299C395.1 263.3 448 185.8 448 96V72c0-22.1-17.9-40-40-40zm111.8 336 22.9-53.4c15.9 3.6 32.3 5.4 49.3 5.4s33.4-1.9 49.3-5.4l22.9 53.4zM72 416a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M408 64c4.4 0 8 3.6 8 8v24c0 106-86 192-192 192S32 202 32 96V72c0-4.4 3.6-8 8-8zM40 32C17.9 32 0 49.9 0 72v24c0 92.5 56 171.9 136 206.1l-23.7 52c-5.2-1.4-10.7-2.1-16.4-2.1-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64h168.7l24.8 54.6c3.7 8 13.1 11.6 21.2 7.9s11.6-13.1 7.9-21.2L312 302.1C392 267.9 448 188.5 448 96V72c0-22.1-17.9-40-40-40zm100.4 337.9 26.1-57.3c18.4 4.9 37.7 7.5 57.6 7.5s39.2-2.6 57.6-7.5l32.4 71.4H151.4c-3-5.2-6.8-10-11.1-14.1zM96 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M408 48c13.3 0 24 10.7 24 24v24c0 114.9-93.1 208-208 208S16 210.9 16 96V72c0-13.3 10.7-24 24-24zM40 32C17.9 32 0 49.9 0 72v24c0 93.9 57.8 174.3 139.8 207.6l-23.5 51.7c-6.4-2.1-13.2-3.3-20.3-3.3-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64c0-5.5-.7-10.9-2-16h176.5l34.2 75.3c1.8 4 6.6 5.8 10.6 4s5.8-6.6 4-10.6l-75-165.1C390.2 270.3 448 189.9 448 96V72c0-22.1-17.9-40-40-40zm287.2 352H151.4c-5.1-8.8-12.2-16.3-20.7-21.8l24.1-53.1c21.8 7.1 45 10.9 69.2 10.9s47.4-3.8 69.2-10.9zM96 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="m106.1 352.8 23.1-53.8c14.4 6.7 29.7 12 45.6 15.6l-23 53.4h144.4l-22.9-53.4q23.85-5.4 45.6-15.6l63.2 147.5c5.2 12.2-.4 26.3-12.6 31.5s-26.3-.4-31.5-12.6L316.7 416H160c0-31.9-23.3-58.4-53.9-63.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M40 32C17.9 32 0 49.9 0 72v24c0 123.7 100.3 224 224 224S448 219.7 448 96V72c0-22.1-17.9-40-40-40zm32 384a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
