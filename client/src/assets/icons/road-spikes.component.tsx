import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RoadSpikesIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 116.8c0-15.8 20.5-22 29.3-8.9L192 256V116.8c0-15.8 20.5-22 29.3-8.9L320 256V116.8c0-15.8 20.5-22 29.3-8.9L448 256V116.8c0-15.8 20.5-22 29.3-8.9l129.5 194.3c14.2 21.3-1.1 49.7-26.6 49.7H64zM32 384h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 352H64V116.8c0-15.8 20.5-22 29.3-8.9l5.9 8.9 9.6 14.3 3.2 4.9 80 120V116.8c0-15.8 20.5-22 29.3-8.9l5.9 8.9 9.6 14.3 3.2 4.9 80 120V116.8c0-15.8 20.5-22 29.3-8.9l5.9 8.9 9.6 14.3 3.2 4.9 80 120V116.8c0-15.8 20.5-22 29.3-8.9l5.9 8.9 9.6 14.3 3.2 4.9 110.8 166.2c14.2 21.3-1.1 49.7-26.6 49.7H192zm-25.7-48L112 222.5V304zM0 424c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m240-201.5V304h54.3zM422.3 304 368 222.5V304zm73.7-81.5V304h54.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M93.3 108 160 208l32 48V116.8c0-15.8 20.5-22 29.3-8.9L288 208l32 48V116.8c0-15.8 20.5-22 29.3-8.9L416 208l32 48V116.8c0-15.8 20.5-22 29.3-8.9l129.5 194.3c14.2 21.3-1.1 49.7-26.6 49.7H64V116.8c0-15.8 20.5-22 29.3-8.9zM512 320h68.2L480 169.7V320zm-90.6-46.2L352 169.7V320h100.2zm-128 0L224 169.7V320h100.2zm-128 0L96 169.7V320h100.2zM16 416h608c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M580.2 336c12.8 0 20.4-14.2 13.3-24.9L464 116.8V336zM448 256V116.8c0-15.8 20.5-22 29.3-8.9l129.5 194.3c14.2 21.3-1.1 49.7-26.6 49.7H64V116.8c0-15.8 20.5-22 29.3-8.9L192 256V116.8c0-15.8 20.5-22 29.3-8.9L320 256V116.8c0-15.8 20.5-22 29.3-8.9zm0 28.8-112-168V336h112zM320 336v-51.2l-112-168V336zM80 116.8V336h112v-51.2zM0 440c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M416 246.9V114.8c0-15.6 20.1-22 29.1-9.2l136.7 195.2c17 24.4 26.2 53.4 26.2 83.2H32V114.8c0-15.6 20.1-22 29.1-9.2L160 246.9V114.8c0-15.6 20.1-22 29.1-9.2L288 246.9V114.8c0-15.6 20.1-22 29.1-9.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 416c0-17.7 14.3-32 32-32h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
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
