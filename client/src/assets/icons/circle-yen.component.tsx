import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleYenIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96.1-361.8c9.8-8.9 25-8.2 33.9 1.6l62.2 68.5 62.2-68.5c8.9-9.8 24.1-10.5 33.9-1.6s10.5 24.1 1.6 33.9L288.4 256H320c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40v32h40c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40v25c0 13.3-10.7 24-24 24s-24-10.7-24-24v-25h-40c-8.8 0-16-7.2-16-16s7.2-16 16-16h40v-32h-40c-8.8 0-16-7.2-16-16s7.2-16 16-16h31.6l-65.3-71.9c-8.9-9.8-8.2-25 1.6-33.9"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m159.9-105.8c9.8-8.9 25-8.2 33.9 1.6l62.2 68.5 62.2-68.5c8.9-9.8 24.1-10.5 33.9-1.6s10.5 24.1 1.6 33.9L288.4 256H320c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40v32h40c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40v25c0 13.3-10.7 24-24 24s-24-10.7-24-24v-25h-40c-8.8 0-16-7.2-16-16s7.2-16 16-16h40v-32h-40c-8.8 0-16-7.2-16-16s7.2-16 16-16h31.6l-65.3-71.9c-8.9-9.8-8.2-25 1.6-33.9"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m165.2-107.8c6.5-5.9 16.7-5.5 22.6 1.1l68.2 75 68.2-75c5.9-6.5 16.1-7 22.6-1.1s7 16.1 1.1 22.6L271 255.2h1v.8h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v17c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-.8h1l-76.8-84.5c-5.9-6.5-5.5-16.7 1.1-22.6z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m349.1-102.1c3.4 2.8 3.8 7.9 1 11.3l-77.5 92.3H320c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56V319h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v41c0 4.4-3.6 8-8 8s-8-3.6-8-8v-41h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-45.6h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h47.4l-77.6-92.3c-2.8-3.4-2.4-8.4 1-11.3s8.4-2.4 11.3 1l81.9 97.5 81.9-97.4c2.8-3.4 7.9-3.8 11.3-1z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96.1-361.8c9.8-8.9 25-8.2 33.9 1.6l62.2 68.5 62.2-68.5c8.9-9.8 24.1-10.5 33.9-1.6s10.5 24.1 1.6 33.9L303 240h25c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v16h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v25c0 13.3-10.7 24-24 24s-24-10.7-24-24v-25h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-16h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h25l-50.8-55.9c-8.9-9.8-8.2-25 1.6-33.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M193.8 151.9c-8.9-9.8-24.1-10.5-33.9-1.6s-10.5 24.1-1.6 33.9L209 240h-25c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v16h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v25c0 13.3 10.7 24 24 24s24-10.7 24-24v-25h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-16h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-25l50.8-55.9c8.9-9.8 8.2-25-1.6-33.9s-25-8.2-33.9 1.6L256 220.3l-62.2-68.5z"
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
