import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TentDoublePeakIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M182.6 9.4c-6.4-6.5-15.3-9.9-24.4-9.4S140.7 4.9 135 12L93.9 63.5c-13.5 16.9-29 31.9-46.3 44.9l-34.8 26C4.7 140.4 0 149.9 0 160v32h576v-32c0-10.1-4.7-19.6-12.8-25.6l-34.7-26.1c-17.3-12.9-32.8-28-46.3-44.9L441 12C435.3 4.9 426.9.6 417.8 0s-18 2.9-24.4 9.3l-18.8 18.8C351.7 51.1 320.5 64 288 64s-63.7-12.9-86.6-35.9zM576 224H0v256c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V297.9c0-5.5 4.4-9.9 9.9-9.9 3.7 0 7.2 2.1 8.8 5.5l100.5 200.8c5.4 10.8 16.5 17.7 28.6 17.7H544c17.7 0 32-14.3 32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m131.3 93.4 30-37.5 6.1 6.1c32 32 75.4 50 120.6 50s88.6-18 120.6-49.9l6.1-6.1 30 37.5c16 20 34.5 37.9 55 53.3L528 168v24H48v-24l28.4-21.3c20.5-15.4 39-33.3 55-53.3zM264 240v224H48V240zm48 0h216v224H416zM393.4 9.4l-18.8 18.7C351.7 51.1 320.5 64 288 64s-63.7-12.9-86.6-35.9L182.6 9.4c-6.4-6.5-15.3-9.9-24.4-9.4S140.7 4.9 135 12L93.9 63.5c-13.5 16.9-29 31.9-46.3 44.9l-34.8 26C4.7 140.4 0 149.9 0 160v320c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V160c0-10.1-4.7-19.6-12.8-25.6l-34.7-26.1c-17.3-12.9-32.8-28-46.3-44.9L441 12C435.3 4.9 426.9.6 417.8 0s-18 2.9-24.4 9.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m12.8 134.4 34.8-26.1c17.3-12.9 32.8-28 46.3-44.9L135 12c5.7-7.1 14.1-11.5 23.2-12s18 2.9 24.4 9.3L201.3 28c23 23 54.1 35.9 86.6 35.9S351.6 51 374.5 28l18.9-18.6C399.8 3 408.7-.4 417.8.1s17.5 4.9 23.2 12l41.2 51.4c13.5 16.9 29 31.9 46.3 44.9l34.7 26.1c8.1 6 12.8 15.5 12.8 25.6V480c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V160c0-10.1 4.7-19.6 12.8-25.6m106-51c-15.2 19-32.7 35.9-52.1 50.5L32 160v32h512v-32l-34.7-26.1c-19.4-14.6-36.9-31.5-52.1-50.5L416 32l-18.7 18.7C368.3 79.7 329 96 288 96s-80.3-16.3-109.3-45.3L160 32zM313.9 224l128 256H544V224zm-41.9 0H32v256h240zm32 256h102.1L304 275.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 480c0 8.8 7.2 16 16 16h240V208H16zm272 16h138.7L288 232.4zm272-304v-32c0-5-2.4-9.8-6.4-12.8l-33.3-24.9c-12.9-9.7-24.7-20.8-35-33.2l-56-67.3c-3-3.6-7.5-5.8-12.3-5.8h-3.8c-4.2 0-8.3 1.7-11.3 4.7l-21.8 21.8c-24 24-56.6 37.5-90.5 37.5h-3.2c-33.9 0-66.5-13.5-90.5-37.5l-21.8-21.8c-3-3-7.1-4.7-11.3-4.7H159c-4.7 0-9.3 2.1-12.3 5.8L90.6 89a203.8 203.8 0 0 1-35 33.2l-33.2 25c-4 3-6.4 7.8-6.4 12.8v32zm-266.7 16 151.5 288H544c8.8 0 16-7.2 16-16V208zM0 480V160c0-10.1 4.7-19.6 12.8-25.6l33.3-24.9c11.9-9 22.7-19.3 32.3-30.7l56-67.3C140.5 4.2 149.5 0 159 0h3.8c8.5 0 16.6 3.4 22.6 9.4l21.8 21.8c21 21 49.5 32.8 79.2 32.8h3.2c29.7 0 58.2-11.8 79.2-32.8l21.8-21.8c6-6 14.1-9.4 22.6-9.4h3.8c9.5 0 18.5 4.2 24.6 11.5l56 67.3c9.5 11.4 20.4 21.7 32.3 30.7l33.3 24.9c8.1 6 12.8 15.5 12.8 25.6v320c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M576 192H0v288c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V297.9c0-5.5 4.4-9.9 9.9-9.9 3.7 0 7.2 2.1 8.8 5.5l100.5 200.8c5.4 10.8 16.5 17.7 28.6 17.7H544c17.7 0 32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M182.6 9.4c-6.4-6.5-15.3-9.9-24.4-9.4S140.7 4.9 135 12L93.9 63.5c-13.5 16.9-29 31.9-46.3 44.9l-34.8 26C4.7 140.4 0 149.9 0 160v32h576v-32c0-10.1-4.7-19.6-12.8-25.6l-34.7-26.1c-17.3-12.9-32.8-28-46.3-44.9L441 12C435.3 4.9 426.9.6 417.8 0s-18 2.9-24.4 9.3l-18.8 18.8C351.7 51.1 320.5 64 288 64s-63.7-12.9-86.6-35.9zm224.6 484.9L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5-5.5 0-9.9 4.4-9.9 9.9V480c0 17.7-14.3 32-32 32h179.8c-12.1 0-23.2-6.8-28.6-17.7"
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
