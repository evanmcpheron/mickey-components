import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChessKingIcon: React.FC<
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
                  d="M224 0c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16v48h152c22.1 0 40 17.9 40 40 0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40h152v-48h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32M38.6 473.4 80 432h288l41.4 41.4c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16"
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
                  d="M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v40H59.6C26.7 144 0 170.7 0 203.6c0 8.2 1.7 16.3 4.9 23.8L59.1 352h52.3L49 208.2c-.6-1.5-1-3-1-4.6 0-6.4 5.2-11.6 11.6-11.6h328.8c6.4 0 11.6 5.2 11.6 11.6 0 1.6-.3 3.2-1 4.6L336.5 352h52.3L443 227.4c3.3-7.5 4.9-15.6 4.9-23.8 0-32.9-26.7-59.6-59.6-59.6H248v-40h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zM101.2 432h245.6l16.6 32H84.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3h-265c-12 0-22.9 6.7-28.4 17.3l-26.5 51.2c-3 5.8-4.6 12.2-4.6 18.7 0 22.6 18.2 40.8 40.8 40.8h302.4c22.5 0 40.8-18.2 40.8-40.8 0-6.5-1.6-12.9-4.6-18.7z"
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
                  d="M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-40c-8.8 0-16 7.2-16 16s7.2 16 16 16h40v48H59.6C26.7 128 0 154.7 0 187.6c0 8.2 1.7 16.3 4.9 23.8L66.1 352H101L34.3 198.6c-1.5-3.5-2.3-7.2-2.3-11 0-15.2 12.4-27.6 27.6-27.6h328.8c15.2 0 27.6 12.4 27.6 27.6 0 3.8-.8 7.5-2.3 11L347 352h34.9L443 211.4c3.3-7.5 4.9-15.6 4.9-23.8 0-32.9-26.7-59.6-59.6-59.6H240V80h40c8.8 0 16-7.2 16-16s-7.2-16-16-16h-40zm142.9 452.7c.7 1.2 1.1 2.5 1.1 3.9 0 4.1-3.3 7.4-7.4 7.4H71.4c-4.1 0-7.4-3.3-7.4-7.4 0-1.4.4-2.7 1.1-3.9L97.8 416h252.4zM97.8 384c-11.1 0-21.4 5.7-27.2 15.1l-32.7 52.7c-3.8 6.2-5.9 13.4-5.9 20.8 0 21.7 17.7 39.4 39.4 39.4h305.2c21.8 0 39.4-17.7 39.4-39.4 0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1z"
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
                  d="M224 0c4.4 0 8 3.6 8 8v48h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v88h176c22.1 0 40 17.9 40 40v1.9c0 5-.9 10-2.8 14.6L379.5 384h-17.2l68.1-173.3c1.1-2.8 1.7-5.8 1.7-8.8V200c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24v1.9c0 3 .6 6 1.7 8.8l68 173.3H68.5L2.8 216.6C.9 211.9 0 206.9 0 201.9V200c0-22.1 17.9-40 40-40h176V72h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V8c0-4.4 3.6-8 8-8M94.3 432c-4.5 0-8.9 1.9-11.9 5.3l-30.6 33.9c-2.5 2.7-3.8 6.3-3.8 9.9 0 8.2 6.6 14.8 14.8 14.8h322.4c8.2 0 14.8-6.6 14.8-14.8 0-3.7-1.4-7.2-3.8-9.9l-30.6-33.9c-3-3.4-7.4-5.3-11.9-5.3zm313.8 28.5c5.1 5.7 7.9 13 7.9 20.6 0 17-13.8 30.8-30.8 30.8H62.8c-17 0-30.8-13.8-30.8-30.8 0-7.6 2.8-15 7.9-20.6l30.6-33.9c6.1-6.7 14.7-10.6 23.8-10.6h259.4c9.1 0 17.7 3.8 23.8 10.6z"
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
                  d="M368 432H80l-41.4 41.4c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6h338.8c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v48H40.9C18.3 160 0 178.3 0 200.9q0 7.05 2.4 13.8L80 432h288l77.6-217.3c1.6-4.4 2.4-9.1 2.4-13.8 0-22.6-18.3-40.9-40.9-40.9H256v-48h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16z"
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
