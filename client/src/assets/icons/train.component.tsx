import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrainIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 0C43 0 0 43 0 96v256c0 48 35.2 87.7 81.1 94.9l-46 46c-7 7-2 19.1 7.9 19.1h39.7c8.5 0 16.6-3.4 22.6-9.4L160 448h128l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96zM64 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm160 192a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M352 48c26.5 0 48 21.5 48 48v96H48V96c0-26.5 21.5-48 48-48zM48 352V240h352v112c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48M96 0C43 0 0 43 0 96v256c0 42.8 28 79 66.6 91.4L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h188.2l57 57c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-27.6-27.6C420 431 448 394.8 448 352V96c0-53-43-96-96-96zm128 360a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M352 32c35.3 0 64 28.7 64 64v128H32V96c0-35.3 28.7-64 64-64zM32 352v-96h384v96c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64M96 0C43 0 0 43 0 96v256c0 46 32.4 84.4 75.6 93.8l-38.9 38.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l59.3-59.3h210.8l59.3 59.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-38.9-38.9C415.6 436.4 448 398 448 352V96c0-53-43-96-96-96zm128 368a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M352 16c44.2 0 80 35.8 80 80v256c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80V96c0-44.2 35.8-80 80-80zM96 0C43 0 0 43 0 96v256c0 49.4 37.3 90.1 85.3 95.4l-51 50.9c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l61.7-61.6h233.4l61.7 61.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-50.9-50.9c48-5.3 85.3-46 85.3-95.4V96c0-53-43-96-96-96zm176 320a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M96 80h256c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16M64 96v96c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM35.1 492.9c-7 7-2 19.1 7.9 19.1h39.7c8.5 0 16.6-3.4 22.6-9.4L160 448H96c-5.1 0-10-.4-14.9-1.1zm307.5 9.7c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c-4.8.8-9.8 1.1-14.9 1.1h-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96C0 43 43 0 96 0h256c53 0 96 43 96 96v256c0 53-43 96-96 96H96c-53 0-96-43-96-96zm64 0v96c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m160 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
