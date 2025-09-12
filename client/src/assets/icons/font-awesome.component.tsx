import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FontAwesomeIcon: React.FC<
  IconProps & {
    type:
      | "solid"
      | "regular"
      | "light"
      | "thin"
      | "duotone"
      | "brands"
      | Dimensions;
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
                  d="M91.7 96c14.6-9.2 24.3-25.5 24.3-44 0-28.7-23.3-52-52-52S12 23.3 12 52c0 16.7 7.8 31.5 20 41v419h64v-64h373.6c14.6 0 26.4-11.8 26.4-26.4 0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7 0-14.6-11.8-26.4-26.4-26.4z"
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
                  d="M91.7 96c14.6-9.2 24.3-25.5 24.3-44 0-28.7-23.3-52-52-52S12 23.3 12 52c0 16.7 7.8 31.5 20 41v419h48v-64h389.6c14.6 0 26.4-11.8 26.4-26.4 0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7 0-14.6-11.8-26.4-26.4-26.4zM80 400V144h356.4l-48.3 108.5c-5.5 12.4-5.5 26.6 0 39L436.4 400z"
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
                  d="M64 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m55.5 64c5.4-9.4 8.6-20.3 8.6-32C128 28.7 99.3 0 64 0S0 28.7 0 64c0 23.7 12.9 44.4 32 55.4V512h32v-64h405.6c14.6 0 26.4-11.8 26.4-26.4 0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7 0-14.6-11.8-26.4-26.4-26.4H119.4zM64 128h397l-58.2 131c-3.7 8.3-3.7 17.7 0 26L461 416H64z"
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
                  d="M102.8 56a38.8 38.8 0 1 0-77.6 0 38.8 38.8 0 1 0 77.5 0zM64 112H48v320h421.6c5.7 0 10.4-4.7 10.4-10.4q0-2.25-.9-4.2l-61.7-138.9c-1.8-4.1-1.8-8.9 0-13l61.7-138.9c.6-1.3.9-2.8.9-4.2 0-5.7-4.7-10.4-10.4-10.4zm-32-10C17.5 91.8 8 75 8 56 8 25.1 33.1 0 64 0s56 25.1 56 56c0 15.7-6.4 29.8-16.8 40h366.4c14.6 0 26.4 11.8 26.4 26.4 0 3.7-.8 7.3-2.3 10.7L432 272l61.7 138.9c1.5 3.4 2.3 7 2.3 10.7 0 14.6-11.8 26.4-26.4 26.4H48v64H32V102"
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
                  d="M96 96v352h373.6c14.6 0 26.4-11.8 26.4-26.4 0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7 0-14.6-11.8-26.4-26.4-26.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 93c12.2-9.5 20-24.3 20-41 0-28.7-23.3-52-52-52S12 23.3 12 52c0 16.7 7.8 31.5 20 41v419h64z"
                />
              </svg>
            );

          case "brands":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M91.7 96c14.6-9.2 24.3-25.5 24.3-44 0-28.7-23.3-52-52-52S12 23.3 12 52c0 16.7 7.8 31.5 20 41v419h64v-64h373.6c14.6 0 26.4-11.8 26.4-26.4 0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7 0-14.6-11.8-26.4-26.4-26.4z"
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
