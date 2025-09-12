import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HoneyPotIcon: React.FC<
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
                  d="M128 32H64c-17.7 0-32 14.3-32 32s14.3 32 32 32C25.1 125.2 0 171.7 0 224c0 138.8 79.6 217.9 113.3 245.1 9.3 7.5 21.1 10.9 33.1 10.9h155.2c12 0 23.7-3.3 33.1-10.9C368.4 441.9 448 362.8 448 224c0-52.3-25.1-98.8-64-128 17.7 0 32-14.3 32-32s-14.3-32-32-32H176v104c0 13.3-10.7 24-24 24s-24-10.7-24-24zM64 224h320c0 53.7-14.7 96.1-32.9 128H96.9C78.7 320.1 64 277.7 64 224"
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
                  d="M78.6 352c21.5 40.9 49 67 64.6 79.6h.1c.4.1 1.4.4 3.1.4h155.2c1.6 0 2.6-.2 3.1-.4h.1c15.5-12.6 43.1-38.7 64.6-79.6zM48 224h352c0-79.5-64.5-144-144-144h-64c-5.4 0-10.7.3-16 .9V136c0 13.3-10.7 24-24 24s-24-10.7-24-24V95c-47.4 23.6-80 72.5-80 129m8-192h336c13.3 0 24 10.7 24 24s-10.7 24-24 24h-9c39.9 35.2 65 86.7 65 144 0 138.8-79.6 217.9-113.3 245.1-9.3 7.5-21.1 10.9-33.1 10.9H146.4c-12 0-23.7-3.3-33.1-10.9C79.6 441.9 0 362.8 0 224c0-57.3 25.1-108.8 65-144h-9c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M128 64h32v80c0 8.8 7.2 16 16 16s16-7.2 16-16V64h176c8.8 0 16 7.2 16 16s-7.2 16-16 16H224v32h96c53 0 96 43 96 96H32c0-53 43-96 96-96V96H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm319.8 173.2c.2-4.3.2-8.7.2-13.2 0-42.9-21.1-80.8-53.4-104 12.9-8.6 21.4-23.3 21.4-40 0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48 0 16.7 8.5 31.4 21.4 40C21.1 143.2 0 181.1 0 224c0 4.5.1 8.9.2 13.2-.1.9-.2 1.8-.2 2.8 0 1.5.2 2.9.6 4.3 7.2 126.3 80.7 199 112.7 224.9 9.3 7.5 21.1 10.9 33.1 10.9h155.2c12 0 23.7-3.3 33.1-10.9 32-25.9 105.5-98.6 112.7-224.9.4-1.4.6-2.8.6-4.3 0-1-.1-1.9-.2-2.8M414.4 256c-2.4 23.5-7.3 44.9-13.9 64h-353C41 300.9 36 279.5 33.6 256zm-27.1 96c-23.4 47.9-55.2 78.1-72.7 92.3-2.5 2-6.7 3.7-12.9 3.7H146.4c-6.3 0-10.5-1.7-12.9-3.7-17.5-14.1-49.4-44.4-72.7-92.3z"
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
                  d="M376 48c13.3 0 24 10.7 24 24s-10.7 24-24 24H240v16h80c61.9 0 112 50.1 112 112 0 5.4-.1 10.8-.4 16H16.4c-.2-5.2-.4-10.6-.4-16 0-61.9 50.1-112 112-112V96H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h80v92c0 15.5 12.5 28 28 28s28-12.5 28-28V48zm54.5 208c-2.9 30-9.7 56.6-18.7 80H36.3c-9-23.4-15.8-50-18.7-80h413zM405 352c-24.9 54.7-60.9 89-80.4 104.7-5.9 4.8-13.9 7.3-23 7.3H146.4c-9.1 0-17.1-2.5-23-7.3C103.9 441 67.9 406.7 43 352zM168 48h24v92c0 6.6-5.4 12-12 12s-12-5.4-12-12zM32 72c0 20.3 15.1 37 34.6 39.6C26.9 133.4 0 175.5 0 224c0 138.8 79.6 217.9 113.3 245.1 9.3 7.5 21.1 10.9 33.1 10.9h155.2c12 0 23.7-3.3 33.1-10.9C368.4 441.9 448 362.8 448 224c0-48.5-26.9-90.6-66.6-112.4C400.9 109 416 92.3 416 72c0-22.1-17.9-40-40-40H72c-22.1 0-40 17.9-40 40"
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
                  d="M128 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V32zm320 192H0c0 50.4 10.5 93 25.5 128h397c15-35 25.5-77.6 25.5-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32h64v104c0 13.3 10.7 24 24 24s24-10.7 24-24V32h208c17.7 0 32 14.3 32 32s-14.3 32-32 32c38.9 29.2 64 75.7 64 128H0c0-52.3 25.1-98.8 64-128-17.7 0-32-14.3-32-32s14.3-32 32-32M25.5 352h397c-26.3 61.4-66.4 99.8-87.8 117.1-9.3 7.5-21.1 10.9-33.1 10.9H146.4c-12 0-23.7-3.3-33.1-10.9-21.4-17.3-61.5-55.7-87.8-117.1"
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
