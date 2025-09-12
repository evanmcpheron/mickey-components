import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleMIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.5-374.1L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L275.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8s20.7.3 26.8 8.8z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.5-374.1c-6.1-8.4-16.9-12-26.8-8.8s-16.6 12.4-16.6 22.8V360c0 13.3 10.7 24 24 24s24-10.7 24-24V226.2l60.5 83.8c4.5 6.2 11.7 9.9 19.5 9.9s14.9-3.7 19.5-9.9l60.4-83.8V360c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-10.4-6.7-19.6-16.6-22.8s-20.7.3-26.8 8.8L256 255z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-98.9-377.2c-4-5.7-11.3-8.2-17.9-6.1S128 137 128 144v224c0 8.8 7.2 16 16 16s16-7.2 16-16V194.8l82.9 118.4c3 4.3 7.9 6.8 13.1 6.8s10.1-2.5 13.1-6.8L352 194.8V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-7-4.5-13.2-11.2-15.3s-13.9.4-17.9 6.1L256 276.1z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M142.5 131.4c-2-2.8-5.6-4-9-3s-5.6 4.1-5.6 7.6v240c0 4.4 3.6 8 8 8s8-3.6 8-8V161l105.6 147.6c1.5 2.1 3.9 3.4 6.5 3.4s5-1.2 6.5-3.4L368 161v215c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-3.5-2.2-6.6-5.6-7.6s-6.9.1-9 3L256 290.2z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.5-374.1L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L275.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8s20.7.3 26.8 8.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144.6 129.2c9.9-3.2 20.7.3 26.8 8.8L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L275.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8"
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
