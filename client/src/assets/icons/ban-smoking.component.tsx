import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BanSmokingIcon: React.FC<
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
                  d="m99.5 144.8 79.2 79.2 96 96 92.5 92.5C335.9 434.9 297.5 448 256 448c-106 0-192-86-192-192 0-41.5 13.1-79.9 35.5-111.2M333.3 288l-32-32H384v32zm32 32H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H269.3L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192 0 41.5-13.1 79.9-35.5 111.2zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-416c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48h-32c-8.8 0-16-7.2-16-16s-7.2-16-16-16m-42.5 224-96-96H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16z"
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
                  d="m92.9 126.9 292.2 292.2C349.7 447.2 304.8 464 256 464c-114.9 0-208-93.1-208-208 0-48.8 16.8-93.7 44.9-129.1m165 97.1-131-131.1C162.3 64.8 207.2 48 256 48c114.9 0 208 93.1 208 208 0 48.8-16.8 93.7-44.9 129.1L353.9 320H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm32 32H384v32h-62.1zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-416c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48h-32c-8.8 0-16-7.2-16-16s-7.2-16-16-16M112 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h128.8l-96-96z"
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
                  d="M86.7 109.3 201.4 224l32 32 32 32 32 32 105.3 105.3C363.4 459.4 312.1 480 256 480 132.3 480 32 379.7 32 256c0-56.1 20.6-107.4 54.7-146.7M278.6 256H384v32h-73.4zm64 64H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H246.6L109.3 86.7C148.6 52.6 199.9 32 256 32c123.7 0 224 100.3 224 224 0 56.1-20.6 107.4-54.7 146.7zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-416c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48h-32c-8.8 0-16-7.2-16-16s-7.2-16-16-16m-51.9 192H128v-32h60.1l-32-32H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h140.1z"
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
                  d="M80.7 92 420 431.3C377.1 471.4 319.4 496 256 496 123.5 496 16 388.5 16 256c0-63.4 24.6-121.1 64.7-164m154.6 132L92 80.7C134.9 40.6 192.6 16 256 16c132.5 0 240 107.5 240 240 0 63.4-24.6 121.1-64.7 164l-100-100H384c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm16 16H384c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-68.7zm4.7 272a256 256 0 1 0 0-512 256 256 0 1 0 0 512m8-408c-4.4 0-8 3.6-8 8 0 22.1 17.9 40 40 40h48c13.3 0 24 10.7 24 24 0 4.4 3.6 8 8 8s8-3.6 8-8c0-22.1-17.9-40-40-40h-48c-13.3 0-24-10.7-24-24 0-4.4-3.6-8-8-8m-11.9 200H128c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h60.1l-16-16H128c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h140.1z"
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
                  d="m269.3 224 32 32H384v32h-50.7l32 32H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-90.5 0H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h162.7l-96-96zM288 112c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48h-32c-8.8 0-16-7.2-16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M367.2 412.5 99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5m45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
