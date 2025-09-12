import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleRightIcon: React.FC<
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m294.6-120.9 99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8l-99.9 107.1c-4.2 4.5-10.1 7.1-16.3 7.1-12.3 0-22.3-10-22.3-22.3V304h-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96v-57.7c0-12.3 10-22.3 22.3-22.3 6.2 0 12.1 2.6 16.3 7.1"
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
                  d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m294.6-120.9c-4.2-4.5-10.1-7.1-16.3-7.1-12.3 0-22.3 10-22.3 22.3V208h-96c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3 6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8z"
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
                  d="M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m400 0c0-9.2-3.5-18-9.7-24.7l-84-91a38.3 38.3 0 0 0-28.1-12.3c-21.1 0-38.3 17.1-38.3 38.3V192h-80c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80v25.7c0 21.1 17.1 38.3 38.3 38.3 10.7 0 20.9-4.5 28.1-12.3l84-91c6.2-6.7 9.7-15.6 9.7-24.7m-33.2-3c.8.8 1.2 1.9 1.2 3s-.4 2.2-1.2 3l-84 91c-1.2 1.3-2.9 2-4.6 2-3.5 0-6.3-2.8-6.3-6.3V304c0-8.8-7.2-16-16-16h-96c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h96c8.8 0 16-7.2 16-16v-41.7c0-3.5 2.8-6.3 6.3-6.3 1.7 0 3.4.7 4.6 2z"
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
                  d="M496 256a240 240 0 1 1-480 0 240 240 0 1 1 480 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m400 0c0-7.2-2.9-14.2-8-19.3L292.3 137c-5.7-5.7-13.5-9-21.7-9-16.9 0-30.6 13.7-30.6 30.6V208h-88c-22.1 0-40 17.9-40 40v16c0 22.1 17.9 40 40 40h88v49.4c0 16.9 13.7 30.6 30.6 30.6 8.1 0 15.9-3.2 21.7-9l99.7-99.7c5.1-5.1 8-12.1 8-19.3m-19.3-8c2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8L281 363.7c-2.7 2.7-6.5 4.3-10.3 4.3-8.1 0-14.6-6.6-14.6-14.6V296c0-4.4-3.6-8-8-8h-96c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h96c4.4 0 8-3.6 8-8v-57.4c0-8.1 6.5-14.6 14.6-14.6 3.9 0 7.6 1.5 10.3 4.3z"
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m294.6-120.9 99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8l-99.9 107.1c-4.2 4.5-10.1 7.1-16.3 7.1-12.3 0-22.3-10-22.3-22.3V304h-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96v-57.7c0-12.3 10-22.3 22.3-22.3 6.2 0 12.1 2.6 16.3 7.1"
                />
                <path
                  className="aps-icon-foreground"
                  d="m394.5 242.2-99.9-107.1c-4.2-4.5-10.1-7.1-16.3-7.1-12.3 0-22.3 10-22.3 22.3V208h-96c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3 6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8"
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
