import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CodePullRequestIcon: React.FC<
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
                  d="M305.8 2.1C314.4 5.9 320 14.5 320 24v40h16c70.7 0 128 57.3 128 128v166.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-35.3-28.7-64-64-64h-16v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1M104 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0m8 73.3v205.4c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80c0 32.8-19.7 61-48 73.3M104 432a24 24 0 1 0-48 0 24 24 0 1 0 48 0m328 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M305.8 2.1C314.4 5.9 320 14.5 320 24v48h16c66.3 0 120 53.7 120 120v163.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V192c0-39.8-32.2-72-72-72h-16v48c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1M112 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-8 76.3v199.4c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-35.8 23.5-66.1 56-76.3V156.3C23.5 146.1 0 115.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3m8 275.7a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M323.8 5.2c5.9 6.5 5.5 16.7-1.1 22.6L265.4 80H336c61.9 0 112 50.1 112 112v161.6c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4V192c0-44.2-35.8-80-80-80h-70.6l57.4 52.2c6.5 5.9 7 16.1 1.1 22.6s-16.1 7-22.6 1.1l-88-80c-3.3-3-5.2-7.3-5.2-11.8s1.9-8.8 5.2-11.8l88-80c6.5-5.9 16.7-5.5 22.6 1.1zM432 384a48 48 0 1 0 0 96 48 48 0 1 0 0-96M128 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-32 78.4v195.2c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80S0 476.2 0 432c0-38.7 27.5-71 64-78.4V158.4C27.5 151 0 118.7 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80c0 38.7-27.5 71-64 78.4M128 432a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M32 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m56 63.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64S16 28.7 16 64c0 32.6 24.4 59.6 56 63.5v257c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5zM32 448a48 48 0 1 1 96 0 48 48 0 1 1-96 0m400-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112c35.3 0 64-28.7 64-64 0-32.6-24.4-59.6-56-63.5V192c0-57.4-46.6-104-104-104h-91.3l72.7-66.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5l-88 80c-1.6 1.5-2.6 3.6-2.6 5.9s1 4.4 2.6 5.9l88 80c3.3 3 8.3 2.7 11.3-.5s2.7-8.3-.5-11.3L244.7 104H336c48.6 0 88 39.4 88 88v192.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64"
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
                  d="M112 153.3c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7v205.4c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7zm288 205.4c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7V192c0-70.7-57.3-128-128-128h-16V24c0-9.5-5.6-18.1-14.2-21.9S287-.2 279.9 6.2l-80 72c-5.1 4.6-7.9 11-7.9 17.8s2.9 13.3 7.9 17.8l80 72c7 6.3 17.2 7.9 25.8 4.1s14.2-12.4 14.2-21.9v-40h16c35.3 0 64 28.7 64 64v166.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160m0 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160m328-80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
