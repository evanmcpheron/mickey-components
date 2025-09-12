import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClockTwoThirtyIcon: React.FC<
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
                  d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-24 392V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24"
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
                  d="M48 256a208 208 0 1 0 416 0 208 208 0 1 0-416 0m464 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M232 392V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24"
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
                  d="M32 256a224 224 0 1 0 448 0 224 224 0 1 0-448 0m480 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M240 400V256c0-5.3 2.7-10.3 7.1-13.3l96-64c7.4-4.9 17.3-2.9 22.2 4.4s2.9 17.3-4.4 22.2L272 264.6V400c0 8.8-7.2 16-16 16s-16-7.2-16-16"
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
                  d="M16 256a240 240 0 1 0 480 0 240 240 0 1 0-480 0m496 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M248 408V256c0-2.7 1.3-5.2 3.6-6.7l96-64c3.7-2.5 8.6-1.5 11.1 2.2s1.5 8.6-2.2 11.1L264 260.3V408c0 4.4-3.6 8-8 8s-8-3.6-8-8"
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
                  d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-24 392V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 416c-13.3 0-24-10.7-24-24V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24"
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
