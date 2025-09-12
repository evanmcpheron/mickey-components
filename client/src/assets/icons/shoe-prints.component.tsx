import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShoePrintsIcon: React.FC<
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
                  d="M416 0c-63.7 0-160 32-160 32v128c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0M128 96c0 35.3 28.7 64 64 64h32V32h-32c-35.3 0-64 28.7-64 64m160 416c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32v128s96.3 32 160 32M0 416c0 35.3 28.7 64 64 64h32V352H64c-35.3 0-64 28.7-64 64"
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
                  d="M323.7 62.6C355.1 54.7 390.3 48 416 48c41.2 0 89.8 10.6 126.5 28.9C582 96.7 592 116.3 592 128c0 9.4-5.1 21.5-35.9 33.1-29.4 11.1-67 14.9-92.1 14.9-34.7 0-53.5-10.4-80.2-25.7l-.7-.4c-20.6-11.8-45.1-25.8-79.1-33V67.8c6-1.7 12.7-3.4 19.7-5.2M256 160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0c-63.7 0-160 32-160 32v128M128 96c0 35.3 28.7 64 64 64h32V32h-32c-35.3 0-64 28.7-64 64m67.7 353.4c-7-1.8-13.7-3.5-19.7-5.2v-49.1c34-7.3 58.5-21.3 79.1-33l.7-.4c26.7-15.3 45.5-25.7 80.2-25.7 25.2 0 62.7 3.7 92.1 14.9 30.8 11.6 35.9 23.7 35.9 33.1 0 11.7-10 31.3-49.5 51.1C377.8 453.4 329.2 464 288 464c-25.7 0-60.9-6.7-92.3-14.6M128 352v128s96.3 32 160 32c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32M0 416c0 35.3 28.7 64 64 64h32V352H64c-35.3 0-64 28.7-64 64"
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
                  d="M319.9 47c31.6-7.9 68.4-15 96.1-15 43.5 0 94.5 11 133.7 30.6 41 20.5 58.3 44.3 58.3 65.4 0 19.6-13.4 35.6-46.2 48.1-31.9 12.1-71.6 15.9-97.8 15.9-39.2 0-61-12.3-88.1-27.8l-.5-.3c-22.9-13.1-49.1-28.1-87.4-33.7V55.7c8.8-2.6 19.8-5.6 31.9-8.6zM256 160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0c-63.7 0-160 32-160 32v128m-64-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V32h-32c-35.3 0-64 28.7-64 64s28.7 64 64 64h32v-32zm-.1 337c-12.1-3-23-6-31.9-8.6v-74.7c38.2-5.6 64.5-20.6 87.4-33.7l.5-.3C275 332.3 296.8 320 336 320c26.2 0 65.9 3.8 97.8 15.9 32.8 12.5 46.2 28.5 46.2 48.1 0 21.1-17.4 44.9-58.3 65.4C382.5 469 331.5 480 288 480c-27.7 0-64.5-7.2-96.1-15M128 352v128s96.3 32 160 32c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32m-64 32h32v-32H64c-35.3 0-64 28.7-64 64s28.7 64 64 64h32v-32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M276.6 42.3c9.8-2.9 23.6-6.9 39.4-10.8C347.8 23.6 386.2 16 416 16c45.7 0 99.3 11.5 140.8 32.3C599.3 69.6 624 97.4 624 128c0 29.8-21.6 49.8-56.5 63-34.4 13-76.3 17-103.5 17-43.6 0-68.5-14.1-96.1-29.9l-.3-.2c-25.3-14.5-52.8-30.2-95.7-33.4V43.7c1.4-.4 3-.9 4.6-1.4zM256 160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0c-63.7 0-160 32-160 32v128m-64-16c-26.5 0-48-21.5-48-48s21.5-48 48-48h32V32h-32c-35.3 0-64 28.7-64 64s28.7 64 64 64h32v-16zm-43.4 325.7c-1.7-.5-3.2-1-4.6-1.4V367.4c42.8-3.2 70.3-18.9 95.7-33.4l.3-.2c27.5-15.7 52.4-29.8 96-29.8 27.2 0 69 3.9 103.5 17 34.9 13.2 56.5 33.2 56.5 63 0 30.6-24.7 58.4-67.2 79.7C387.3 484.5 333.7 496 288 496c-29.8 0-68.2-7.6-100-15.5-15.7-3.9-29.5-7.9-39.4-10.8M128 352v128s96.3 32 160 32c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32m-64 16h32v-16H64c-35.3 0-64 28.7-64 64s28.7 64 64 64h32v-16H64c-26.5 0-48-21.5-48-48s21.5-48 48-48"
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
                  d="M128 480s96.3 32 160 32c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32zm-64 0h32V352H64c-35.3 0-64 28.7-64 64s28.7 64 64 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 32S352.3 0 416 0c96 0 224 48 224 128s-119.6 96-176 96c-48 0-76-16-104-32s-56-32-104-32zm-64 0h32v128h-32c-35.3 0-64-28.7-64-64s28.7-64 64-64"
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
