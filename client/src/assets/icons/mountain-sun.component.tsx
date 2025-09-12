import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MountainSunIcon: React.FC<
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
                  d="M560 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160M55.9 512h523c33.8 0 61.1-27.4 61.1-61.1 0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1 0 487 25 512 55.9 512"
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
                  d="M480 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0m-67.3 201.7 48.2-79c4.1-6.6 11.3-10.7 19.1-10.7s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8 0 33.8-27.4 61.1-61.1 61.1h-523C25 512 0 487 0 456.1c0-10.5 3-20.8 8.6-29.7L225.2 81c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7zm28.5 45.4 62.2 99.2c5.6 8.9 8.6 19.2 8.6 29.7 0 2.7-.2 5.3-.6 7.9h67.4c7.2 0 13.1-5.9 13.1-13.1 0-2.4-.7-4.8-1.9-6.8L480 263.6l-38.8 63.6zM456.1 464c4.4 0 7.9-3.5 7.9-7.9q0-2.25-1.2-4.2L256 122.3 49.2 451.9q-1.2 1.95-1.2 4.2c0 4.4 3.5 7.9 7.9 7.9z"
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
                  d="M608 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0m-23.9 400c13.2 0 23.9-10.7 23.9-23.9 0-4.5-1.3-8.9-3.7-12.7L259.6 98c-.8-1.3-2.2-2-3.6-2s-2.9.8-3.6 2L35.7 443.4a23.8 23.8 0 0 0-3.7 12.7c0 13.2 10.7 23.9 23.9 23.9zM55.9 512C25 512 0 487 0 456.1c0-10.5 3-20.8 8.6-29.7L225.2 81c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7 48.2-79c4-6.6 11.2-10.7 19-10.7s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8 0 33.8-27.4 61.1-61.1 61.1h-523zm447.5-85.6c5.6 8.9 8.6 19.2 8.6 29.7 0 8.6-1.9 16.7-5.4 23.9h72.2c16.1 0 29.1-13 29.1-29.1 0-5.3-1.5-10.6-4.3-15.2L480 232.9 431.7 312l71.7 114.3z"
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
                  d="M560 144a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160M412.7 281.7l48.2-79c4.1-6.6 11.3-10.7 19.1-10.7s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8 0 33.8-27.4 61.1-61.1 61.1h-523C25 512 0 487 0 456.1c0-10.5 3-20.8 8.6-29.7L225.2 81c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7zm9.5 15.1 81.2 129.5c5.6 8.9 8.6 19.2 8.6 29.7 0 15.6-6.4 29.8-16.8 39.9h83.6c24.9 0 45.1-20.2 45.1-45.1 0-8.3-2.3-16.4-6.6-23.5L485.4 211c-1.2-1.9-3.2-3-5.4-3s-4.3 1.2-5.4 3zM456.1 496c22 0 39.9-17.9 39.9-39.9 0-7.5-2.1-14.9-6.1-21.2L273.2 89.5C269.5 83.6 263 80 256 80s-13.5 3.6-17.2 9.5L22.1 434.9c-4 6.4-6.1 13.7-6.1 21.2 0 22 17.9 39.9 39.9 39.9z"
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
                  d="M480 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M381.1 512H55.9C25 512 0 487 0 456.1c0-10.5 3-20.8 8.6-29.7L225.2 81c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7 48.2-79c4-6.6 11.2-10.7 19-10.7s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8 0 33.8-27.4 61.1-61.1 61.1H381.1z"
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
