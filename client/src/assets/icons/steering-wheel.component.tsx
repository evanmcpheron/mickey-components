import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SteeringWheelIcon: React.FC<
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
                  d="M224 358.9v86.5c-80.4-13.5-143.9-77-157.3-157.4h102.2zm64 0 55.1-70.9h102.2c-13.4 80.4-76.9 143.9-157.3 157.3zM352 224l-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7H195.8c-12.1 0-23.2 6.8-28.6 17.7L160 224H66.7C81.9 133.2 160.9 64 256 64s174.1 69.2 189.3 160zm-96 288a256 256 0 1 0 0-512 256 256 0 1 0 0 512"
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
                  d="M232 369v93.6C133.7 451.3 56.2 371.4 48.6 272h107.8l74.3 95.5c.4.5.8 1 1.3 1.5m48 0c.4-.5.9-1 1.3-1.5l74.3-95.5h107.8c-7.6 99.4-85 179.3-183.4 190.6zm72-145-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7H195.8c-12.1 0-23.2 6.8-28.6 17.7L160 224H50.4C65.8 124.3 152 48 256 48s190.2 76.3 205.6 176zm-96 288a256 256 0 1 0 0-512 256 256 0 1 0 0 512"
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
                  d="M240 384v95.4C134.4 472 49.1 391.4 34.3 288h106.1c2.2 4.2 5.1 8.1 8.6 11.6l73.1 73.1c5.2 5.2 11.4 9 17.9 11.3m32 0c6.6-2.3 12.7-6.1 17.9-11.3l73.1-73.1c3.5-3.5 6.3-7.4 8.6-11.6h106.1C462.9 391.4 377.6 472 272 479.4zm104.1-128c-.8-4-2.2-8-4.1-11.8l-12.8-25.7c-8.2-16.2-24.8-26.5-43-26.5H195.8c-18.2 0-34.8 10.3-42.9 26.5L140 244.2c-1.9 3.8-3.3 7.8-4.1 11.8H32C32 132.3 132.3 32 256 32s224 100.3 224 224zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-74.5-279.2c2.7-5.4 8.3-8.8 14.3-8.8h120.4c6.1 0 11.6 3.4 14.3 8.8l12.8 25.7c3.1 6.2 1.9 13.6-3 18.5l-73.1 73.1c-6.2 6.2-16.4 6.2-22.6 0l-73-73.1c-4.9-4.9-6.1-12.3-3-18.5l12.8-25.7z"
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
                  d="M248 385.9v110C129.9 492 33.4 402.8 18.1 288h127.5c2 5.1 5 9.9 9.1 14l73 73c5.8 5.8 12.9 9.4 20.3 10.9m16 0c7.4-1.5 14.5-5.1 20.3-10.9l73-73c4.1-4.1 7.1-8.8 9.1-14h127.5C478.6 402.8 382.1 492 264 495.9zM369 272c-.2-5.5-1.6-11-4.2-16.2L352 230.1c-6.8-13.6-20.6-22.1-35.8-22.1H195.8c-15.2 0-29 8.6-35.8 22.1l-12.8 25.7c-2.6 5.2-4 10.7-4.2 16.2H16.5c-.3-5.3-.5-10.6-.5-16C16 123.5 123.5 16 256 16s240 107.5 240 240c0 5.4-.2 10.7-.5 16zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-81.7-274.7c4.1-8.1 12.4-13.3 21.5-13.3h120.4c9.1 0 17.4 5.1 21.5 13.3l12.8 25.7c4.6 9.2 2.8 20.4-4.5 27.7l-73 73c-9.4 9.4-24.6 9.4-33.9 0l-73.1-73c-7.3-7.3-9.1-18.5-4.5-27.7z"
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
                  d="M288 445.3c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7v-86.4L168.9 288H66.7C65 277.6 64 266.9 64 256s.9-21.6 2.7-32H160l7.2-14.3c5.4-10.8 16.5-17.7 28.6-17.7h120.4c12.1 0 23.2 6.8 28.6 17.7L352 224h93.3c1.7 10.4 2.7 21.1 2.7 32s-.9 21.6-2.7 32H343.1L288 358.9v86.5z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 448a256 256 0 1 0 0-512 256 256 0 1 0 0 512"
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
