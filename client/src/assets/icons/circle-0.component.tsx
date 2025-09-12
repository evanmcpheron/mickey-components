import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Circle0Icon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384c53 0 96 43 96 96v64c0 53-43 96-96 96s-96-43-96-96v-64c0-53 43-96 96-96m-48 96v64c0 26.5 21.5 48 48 48s48-21.5 48-48v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384c-53 0-96 43-96 96v64c0 53 43 96 96 96s96-43 96-96v-64c0-53-43-96-96-96m-48 96c0-26.5 21.5-48 48-48s48 21.5 48 48v64c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384c-53 0-96 43-96 96v64c0 53 43 96 96 96s96-43 96-96v-64c0-53-43-96-96-96m-64 96c0-35.3 28.7-64 64-64s64 28.7 64 64v64c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384c-53 0-96 43-96 96v64c0 53 43 96 96 96s96-43 96-96v-64c0-53-43-96-96-96m-80 96c0-44.2 35.8-80 80-80s80 35.8 80 80v64c0 44.2-35.8 80-80 80s-80-35.8-80-80z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384c53 0 96 43 96 96v64c0 53-43 96-96 96s-96-43-96-96v-64c0-53 43-96 96-96m-48 96v64c0 26.5 21.5 48 48 48s48-21.5 48-48v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 224c0-53 43-96 96-96s96 43 96 96v64c0 53-43 96-96 96s-96-43-96-96zm96-48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48s48-21.5 48-48v-64c0-26.5-21.5-48-48-48"
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
