import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleNIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-52.3-373.7L304 283.2V152c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 10.5-6.8 19.8-16.8 22.9s-20.9-.6-26.9-9.2L208 228.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.5 6.8-19.8 16.8-22.9s20.9.6 26.9 9.2"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-52.3-373.7c-6-8.6-16.9-12.4-26.9-9.2S160 141.5 160 152v208c0 13.3 10.7 24 24 24s24-10.7 24-24V228.8l100.3 144.9c6 8.6 16.9 12.4 26.9 9.2S352 370.5 352 360V152c0-13.3-10.7-24-24-24s-24 10.7-24 24v131.2z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-67-377.3c-4-5.7-11.3-8.1-17.9-5.9S160 137 160 144v224c0 8.8 7.2 16 16 16s16-7.2 16-16V193.9l131 183.4c4 5.7 11.3 8.1 17.9 5.9S352 374.9 352 368V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v174.1z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-98-381.2c-2.2-2.5-5.7-3.4-8.8-2.3s-5.2 4.2-5.2 7.5v240c0 4.4 3.6 8 8 8s8-3.6 8-8V157.4l194 223.8c2.2 2.5 5.7 3.4 8.8 2.3s5.2-4.2 5.2-7.5V136c0-4.4-3.6-8-8-8s-8 3.6-8 8v218.6z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-52.3-373.7L304 283.2V152c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 10.5-6.8 19.8-16.8 22.9s-20.9-.6-26.9-9.2L208 228.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.5 6.8-19.8 16.8-22.9s20.9.6 26.9 9.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176.8 129.1c10-3.1 20.9.6 26.9 9.2L304 283.2V152c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 10.5-6.8 19.8-16.8 22.9s-20.9-.6-26.9-9.2L208 228.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.5 6.8-19.8 16.8-22.9"
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
