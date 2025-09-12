import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleLeftIcon: React.FC<
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
                  d="M512 256a256 256 0 1 0-512 0 256 256 0 1 0 512 0M217.4 376.9l-99.9-107.1c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1 12.3 0 22.3 10 22.3 22.3V208h96c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-96v57.7c0 12.3-10 22.3-22.3 22.3-6.2 0-12.1-2.6-16.3-7.1"
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
                  d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1 12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-96v-57.7c0-12.3-10-22.3-22.3-22.3-6.2 0-12.1 2.6-16.3 7.1l-99.9 107.1c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8z"
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
                  d="M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-400 0c0 9.2 3.5 18 9.7 24.7l84 91c7.2 7.8 17.4 12.3 28.1 12.3 21.1 0 38.3-17.1 38.3-38.3V320h80c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48h-80v-25.7c0-21.1-17.1-38.3-38.3-38.3-10.7 0-20.9 4.5-28.1 12.3l-84 91c-6.2 6.7-9.7 15.6-9.7 24.7m33.2 3c-.8-.8-1.2-1.9-1.2-3s.4-2.2 1.2-3l84-91c1.2-1.3 2.9-2 4.6-2 3.5 0 6.3 2.8 6.3 6.3V208c0 8.8 7.2 16 16 16h96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-96c-8.8 0-16 7.2-16 16v41.7c0 3.5-2.8 6.3-6.3 6.3-1.7 0-3.4-.7-4.6-2z"
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
                  d="M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-400 0c0 7.2 2.9 14.2 8 19.3l99.7 99.7c5.7 5.7 13.5 9 21.7 9 16.9 0 30.6-13.7 30.6-30.6V304h88c22.1 0 40-17.9 40-40v-16c0-22.1-17.9-40-40-40h-88v-49.4c0-16.9-13.7-30.6-30.6-30.6-8.1 0-15.9 3.2-21.7 9L120 236.7c-5.1 5.1-8 12.1-8 19.3m19.3 8c-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8l99.7-99.7c2.7-2.7 6.5-4.3 10.3-4.3 8.1 0 14.6 6.5 14.6 14.6V216c0 4.4 3.6 8 8 8h96c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-96c-4.4 0-8 3.6-8 8v57.4c0 8.1-6.5 14.6-14.6 14.6-3.9 0-7.6-1.5-10.3-4.3z"
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
                  d="M512 256a256 256 0 1 0-512 0 256 256 0 1 0 512 0M217.4 376.9l-99.9-107.1c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1 12.3 0 22.3 10 22.3 22.3V208h96c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-96v57.7c0 12.3-10 22.3-22.3 22.3-6.2 0-12.1-2.6-16.3-7.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="m117.5 269.8 99.9 107.1c4.2 4.5 10.1 7.1 16.3 7.1 12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-96v-57.7c0-12.3-10-22.3-22.3-22.3-6.2 0-12.1 2.6-16.3 7.1l-99.9 107.1c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8"
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
