import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HockeyStickPuckIcon: React.FC<
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
                  d="M462.3 3.4c15.8 7.9 22.2 27.1 14.3 42.9L261.5 476.6c-10.8 21.7-33 35.4-57.2 35.4H96V352h156.2L419.4 17.7c7.9-15.8 27.1-22.2 42.9-14.3M0 384c0-17.7 14.3-32 32-32h32v160H32c-17.7 0-32-14.3-32-32zm416 32h192c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32"
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
                  d="M499 2.7c11.8 6.1 16.4 20.6 10.3 32.3L282.7 473.1c-12.4 23.9-37 38.9-64 38.9H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h240c1.3 0 2.5.1 3.7.3L466.7 13C472.8 1.2 487.3-3.4 499 2.7M283 368H144v96h74.8c9 0 17.2-5 21.3-13zm-219 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32v-96zm368 64v32h160v-32zm-48 0c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48z"
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
                  d="M503.3 1.8c7.8 4.1 10.9 13.7 6.9 21.6l-234.6 454c-11 21.3-32.9 34.6-56.9 34.6H56c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h264.9L481.8 8.7c4.1-7.9 13.7-10.9 21.6-6.9zM304.4 352H128v128h90.8c12 0 22.9-6.7 28.4-17.3zM56 352c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h40V352zm376 80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v16c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48z"
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
                  d="M507.7.9c3.9 2 5.5 6.9 3.4 10.8l-242.9 470c-9.6 18.6-28.8 30.3-49.8 30.3H48c-26.5 0-48-21.5-48-48v-85.3c0-26.5 21.5-48 48-48h280.3L496.9 4.3c2-3.9 6.9-5.5 10.8-3.4M320 346.7H112V496h106.5c15 0 28.7-8.3 35.5-21.6zm-272 0c-17.7 0-32 14.3-32 32V464c0 17.7 14.3 32 32 32h48V346.7zM432 416c-17.7 0-32 14.3-32 32v16c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-16c0-17.7-14.3-32-32-32zm-48 32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v16c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48z"
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
                  d="M476.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L252.2 352H96v160h108.2c24.2 0 46.4-13.7 57.2-35.4zM32 352c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h32V352z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 352H64v160h32zm320 64c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"
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
