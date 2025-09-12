import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Icon4: React.FC<
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
                  d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368h224v80c0 17.7 14.3 32 32 32s32-14.3 32-32v-80h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H82.4z"
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
                  d="M189.2 67.2c6.2-11.7 1.7-26.2-10-32.4s-26.2-1.7-32.4 10l-144 272c-3.9 7.4-3.7 16.4.6 23.6S15.6 352 24 352h248v104c0 13.3 10.7 24 24 24s24-10.7 24-24V352h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V152c0-13.3-10.7-24-24-24s-24 10.7-24 24v152H63.9z"
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
                  d="M174.3 55.2c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-144 288c-2.5 5-2.2 10.9.7 15.6s8.1 7.6 13.6 7.6H288V464c0 8.8 7.2 16 16 16s16-7.2 16-16V352h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v176H41.9z"
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
                  d="M159.2 43.4c1.9-4 .2-8.8-3.8-10.7s-8.8-.2-10.7 3.8L.8 340.6c-1.2 2.5-1 5.4.5 7.7s4 3.7 6.8 3.7H304v120c0 4.4 3.6 8 8 8s8-3.6 8-8V352h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V136c0-4.4-3.6-8-8-8s-8 3.6-8 8v200H20.6z"
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
                  d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368h224v80c0 17.7 14.3 32 32 32s32-14.3 32-32v-80h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H82.4z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
