import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CompactDiscIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-96-32a96 96 0 1 0 192 0 96 96 0 1 0-192 0m-64-16c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-14.2-103.2c8.8-1 15.1-8.9 14.1-17.7S247 96 238.2 97c-74.1 8.2-133 67.1-141.2 141.2-1 8.8 5.4 16.7 14.1 17.7s16.7-5.4 17.7-14.1c6.6-59.3 53.7-106.4 113-113"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m72 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-120 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-97.2 78.8-176 176-176 8.8 0 16 7.2 16 16s-7.2 16-16 16c-79.5 0-144 64.5-144 144"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m336 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m80 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-152 0c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-101.6 82.4-184 184-184 4.4 0 8 3.6 8 8s-3.6 8-8 8c-92.8 0-168 75.2-168 168"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-160a96 96 0 1 1 0-192 96 96 0 1 1 0 192M96 240c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-45.4 22.3-89.2 54.5-121.5S194.6 64 240 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-35 0-71.1 17.5-98.8 45.2S96 205 96 240"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 32a96 96 0 1 1-192 0 96 96 0 1 1 192 0"
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
