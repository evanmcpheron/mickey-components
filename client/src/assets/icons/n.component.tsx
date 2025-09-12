import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NIcon: React.FC<
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
                  d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 13.5-8.4 25.5-21.1 30.1s-26.9.7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-13.5 8.4-25.5 21.1-30.1"
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
                  d="M15.8 33.4c9.5-3.5 20.1-.6 26.6 7.1L336 390.1V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 10.1-6.3 19.1-15.8 22.6s-20.1.6-26.6-7.1L48 121.9V456c0 13.3-10.7 24-24 24S0 469.3 0 456V56c0-10.1 6.3-19.1 15.8-22.6"
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
                  d="M10.5 33c6.3-2.3 13.4-.4 17.7 4.7L352 420.3V48c0-8.8 7.2-16 16-16s16 7.2 16 16v416c0 6.7-4.2 12.7-10.5 15s-13.4.4-17.7-4.7L32 91.7V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-6.7 4.2-12.7 10.5-15"
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
                  d="M5.2 32.5c3.1-1.2 6.7-.2 8.9 2.3L368 450.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v432c0 3.4-2.1 6.3-5.2 7.5s-6.7.2-8.9-2.3L16 61.7V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-3.4 2.1-6.3 5.2-7.5"
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
                  d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 13.5-8.4 25.5-21.1 30.1s-26.9.7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-13.5 8.4-25.5 21.1-30.1"
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
