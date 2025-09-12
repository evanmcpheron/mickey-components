import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MusicNoteIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 32c0-9.9-4.5-19.2-12.3-25.2S353.8-1.4 344.2 1l-128 32C202 36.5 192 49.3 192 64v295.7c-14.5-4.9-30.8-7.7-48-7.7-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80V153l103.8-26c14.2-3.5 24.2-16.3 24.2-31z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 31.1C384 13.9 370.1 0 352.9 0c-2.7 0-5.3.3-7.9 1L193.9 40.8C183.3 43.6 176 53.1 176 64v302.3c-18.1-9-40.2-14.3-64-14.3-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80V195.4l141.9-36.1C376.6 156.6 384 147 384 136zM176 432c0 2.6-1.4 9.4-12.7 17.5-11.2 8-29.2 14.5-51.3 14.5s-40.1-6.5-51.3-14.5C49.4 441.4 48 434.6 48 432s1.4-9.4 12.7-17.5c11.2-8 29.2-14.5 51.3-14.5s40.1 6.5 51.3 14.5c11.3 8.1 12.7 14.9 12.7 17.5m160-314.7-112 28.5V82.5L336 53z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 23.1C384 10.3 373.7 0 360.9 0c-2 0-4 .3-5.9.8L203.9 40.5c-7 1.8-11.9 8.2-11.9 15.5v320c-20.3-14.8-48.7-24-80-24-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80V189.1l147.9-37.6c7.1-1.8 12.1-8.2 12.1-15.5zM192 432c0 9.1-5.1 20.3-19.4 30.5S137 480 112 480s-46.3-7.3-60.6-17.5S32 441.1 32 432s5.1-20.3 19.4-30.5S87 384 112 384s46.3 7.3 60.6 17.5S192 422.9 192 432m160-308.4-128 32.5V68.3l128-33.7v88.9z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m230 52.6 138-36.3v115.3c0 3.7-2.5 6.9-6 7.8l-138 35V60.3c0-3.6 2.4-6.8 6-7.7M224 432V190.7c.7 0 1.3-.1 2-.2l139.9-35.6c10.6-2.7 18.1-12.3 18.1-23.3V15.1C384 6.8 377.2 0 368.9 0c-1.3 0-2.6.2-3.8.5L225.9 37.1C215.3 39.9 208 49.4 208 60.3v330.5c-19.6-23.2-55.3-38.8-96-38.8-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80m-16 0c0 15.6-8.8 31.2-26.1 43.5C164.6 487.9 140 496 112 496s-52.6-8.1-69.9-20.5C24.8 463.2 16 447.6 16 432s8.8-31.2 26.1-43.5C59.4 376.1 84 368 112 368s52.6 8.1 69.9 20.5c17.3 12.3 26.1 28 26.1 43.5"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M384 32c0-9.9-4.5-19.2-12.3-25.2S353.8-1.4 344.2 1l-128 32C202 36.5 192 49.3 192 64v295.7c37.8 12.8 64 40.4 64 72.3V153l103.8-26c14.2-3.5 24.2-16.3 24.2-31z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 352a112 80 0 1 0 0 160 112 80 0 1 0 0-160"
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
