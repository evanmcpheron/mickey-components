import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BeerMugEmptyIcon: React.FC<
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
                  d="M32 64c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v32h51.2c42.4 0 76.8 34.4 76.8 76.8v102.1c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm352 247.6 56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7v-102c0-7.1-5.7-12.8-12.8-12.8H384zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M80 80v336c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V80zm304 303.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v32h59.2c38 0 68.8 30.8 68.8 68.8v117.9c0 27.3-16.2 52.1-41.2 63zm0-239.7v187.3l67.5-29.5c7.6-3.3 12.5-10.8 12.5-19.1V164.8c0-11.5-9.3-20.8-20.8-20.8zm-240-16c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m64 0c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m64 0c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16"
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
                  d="M352 64H64v352c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64m32 306.5V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v32h64c35.3 0 64 28.7 64 64v102.1c0 31.8-18.8 60.6-47.9 73.3l-80.1 35zm0-242.5v207.5l67.2-29.4c17.5-7.6 28.8-24.9 28.8-44V160c0-17.7-14.3-32-32-32zm-240 0c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m64 0c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m64 0c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16"
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
                  d="M352 48c8.8 0 16 7.2 16 16v352c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V64c0-8.8 7.2-16 16-16zm32 368v-42.8l84.9-37.1c26.2-11.5 43.1-37.4 43.1-66V152c0-30.9-25.1-56-56-56h-72V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v352c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64m78.4-94.6L384 355.8V112h72c22.1 0 40 17.9 40 40v118.1c0 22.2-13.2 42.4-33.6 51.3M144 136c0-4.4-3.6-8-8-8s-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8zm72 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8zm72 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M32 64c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v32h51.2c42.4 0 76.8 34.4 76.8 76.8v102.1c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm352 247.6 56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7v-102c0-7.1-5.7-12.8-12.8-12.8H384zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 128c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m64 0c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m64 0c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16"
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
