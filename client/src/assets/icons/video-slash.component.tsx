import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VideoSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6S608 395.8 608 384V128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64-14.2 9.5v150.9l-32-25.1V128c0-35.3-28.7-64-64-64H113.9zM407 416.7 32.3 121.5c-.2 2.1-.3 4.3-.3 6.5v256c0 35.3 28.7 64 64 64h256c23.4 0 43.9-12.6 55-31.3"
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
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1L113.9 64H352c35.3 0 64 28.7 64 64v172.8l144 112.8v-265L448 199v-52.6l104.3-46.9c5.1-2.3 10.6-3.5 16.2-3.5 21.8 0 39.5 17.7 39.5 39.5v315.8l22.8 17.9c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2M368 263.1V128c0-8.8-7.2-16-16-16H175.2zM32 128c0-2.2.1-4.4.3-6.5L80 159v225c0 8.8 7.2 16 16 16h256c8.2 0 15-6.2 15.9-14.1l39.1 30.8c-11.2 18.7-31.6 31.3-55 31.3H96c-35.3 0-64-28.7-64-64z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM416 175.2V128c0-35.3-28.7-64-64-64H180.1l40.5 32H352c17.7 0 32 14.3 32 32v97l32 25.3v-75zM64 384V135.4l-29.9-23.6Q32 119.6 32 128v256c0 35.3 28.7 64 64 64h256c26.4 0 49-16 58.8-38.8l-27.1-21.4c-1.9 15.9-15.3 28.2-31.7 28.2H96c-17.7 0-32-14.3-32-32m512-249.8v242.4l26.5 20.9c3.5-5.8 5.5-12.5 5.5-19.7V134.2c0-21.1-17.1-38.2-38.2-38.2-6.4 0-12.8 1.6-18.4 4.7L448 157.6v36.5l118.8-65.4c.9-.5 1.9-.8 3-.8 3.4 0 6.2 2.8 6.2 6.2z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm403 201.2V128c0-35.3-28.7-64-64-64H180.1l20.3 16H352c26.5 0 48 21.5 48 48v109.6l16 12.6zM48 128c0-1.7.1-3.4.3-5l-14.2-11.2Q32 119.6 32 128v256c0 35.3 28.7 64 64 64h256c26.4 0 49-16 58.8-38.8l-13.2-10.4c-6.2 19.3-24.3 33.2-45.6 33.2H96c-26.5 0-48-21.5-48-48zm544 249.8c0 3.5-.8 6.7-2.2 9.6l12.7 10.1c3.5-5.8 5.5-12.5 5.5-19.7V134.2c0-21.1-17.1-38.2-38.2-38.2-6.4 0-12.8 1.6-18.4 4.7L448 157.6v18.3l111.1-61.1c3.3-1.8 7-2.7 10.7-2.7 12.3 0 22.2 9.9 22.2 22.2z"
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
                  d="M32.3 121.5 407 416.7c-11.2 18.7-31.6 31.3-55 31.3H96c-35.3 0-64-28.7-64-64V128c0-2.2.1-4.4.3-6.5M448 325.8V174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6S608 116.2 608 128v256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-13.8-9.2zM113.9 64H352c35.3 0 64 28.7 64 64v172.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
