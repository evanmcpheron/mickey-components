import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LinesLeaningIcon: React.FC<
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
                  d="M190.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2zm70.9-41.7c-17.4-2.9-33.9 8.9-36.8 26.3l-64 384c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l64-384c2.9-17.4-8.9-33.9-26.3-36.8M352 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32"
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
                  d="M190.6 64.1c4.5-12.5-2-26.2-14.5-30.7s-26.2 2-30.7 14.5l-144 400c-4.5 12.5 2 26.2 14.5 30.7s26.2-2 30.7-14.5zm78.1-31.7c-13-2.6-25.6 5.8-28.2 18.8l-80 400c-2.6 13 5.8 25.6 18.8 28.2s25.6-5.8 28.2-18.8l80-400c2.6-13-5.8-25.6-18.8-28.2M360 32c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24"
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
                  d="M190.9 53.7c3.2-8.2-.9-17.5-9.2-20.7s-17.5.9-20.7 9.2L1 458.2c-3.2 8.2.9 17.5 9.2 20.7s17.5-.9 20.7-9.2zm84.7-21.3c-8.6-2-17.2 3.4-19.2 12l-96 416c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l96-416c2-8.6-3.4-17.2-12-19.2M368 32c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16"
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
                  d="M376 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8m-94 .3c-4.3-1.1-8.6 1.5-9.8 5.7l-112 432c-1.1 4.3 1.5 8.6 5.7 9.8s8.6-1.5 9.8-5.7l112-432c1.1-4.3-1.5-8.6-5.7-9.8M175.5 42.8c1.5-4.1-.6-8.7-4.7-10.3s-8.7.6-10.3 4.7l-160 432c-1.5 4.1.6 8.7 4.7 10.3s8.7-.6 10.3-4.7z"
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
                  d="M190.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2zM384 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M261.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8l-64 384c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l64-384c2.9-17.4 19.4-29.2 36.8-26.3"
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
