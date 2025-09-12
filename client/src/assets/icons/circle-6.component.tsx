import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Circle6Icon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-96 48c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70c-24.6 21-38.8 51.8-38.8 84.2"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-96-48c0-32.4 14.2-63.2 38.8-84.3l81.6-70c10.1-8.6 25.2-7.5 33.8 2.6s7.5 25.2-2.6 33.8L282 195.6c40.4 11.4 70 48.4 70 92.4 0 53-43 96-96 96s-96-43-96-96"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m43.7-378.9c-6-6.5-16.1-6.9-22.6-.8l-82.7 76.8c-22 20.4-34.4 49-34.4 78.9 0 53 43 96 96 96s96-43 96-96c0-51.8-41-94-92.3-95.9l39.1-36.3c6.5-6 6.9-16.1.8-22.6zM256 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m46-381.3c-2.9-3.3-8-3.7-11.3-.8l-97.9 85.7c-8.7 7.6-15.9 16.6-21.2 26.6-7.4 13.6-11.6 29.2-11.6 45.8 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-4.3 0-8.6.3-12.8.8l58.1-50.8c3.3-2.9 3.7-8 .8-11.3zM256.1 208a80 80 0 1 1-.1 160 80 80 0 1 1 .1-160"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-96 48c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70c-24.6 21-38.8 51.8-38.8 84.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M311.6 170.2c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70c-24.6 21-38.8 51.8-38.8 84.2 0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4zM304 288a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
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
