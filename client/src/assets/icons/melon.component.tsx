import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MelonIcon: React.FC<
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
                  d="M256 512c-38.5 0-75-8.5-107.7-23.7 67.1-5.8 149.8-48.2 220.8-119.2s113.4-153.8 119.2-220.8C503.5 181 512 217.5 512 256c0 141.4-114.6 256-256 256M74.7 436.8c-19.1-19.4-26.8-55.8-11.9-108 14.6-51.2 49.6-110.2 102.7-163.3S277.6 77.4 328.8 62.8c52.4-15 88.9-7.1 108.2 12.2s27.2 55.9 12.2 108.2c-14.6 51.2-49.6 110.2-102.7 163.3s-112.1 88.1-163.3 102.7c-52.1 14.9-88.6 7.2-108-11.9zm-51-73.1C8.5 331 0 294.5 0 256 0 114.6 114.6 0 256 0c38.5 0 75 8.5 107.7 23.7-67.1 5.8-149.8 48.2-220.8 119.2S29.5 296.7 23.7 363.7"
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
                  d="M464 256c0-25.8-4.7-50.4-13.2-73.2-14.9 51.3-51.2 110.5-104.3 163.6s-112.3 89.4-163.6 104.3c22.8 8.6 47.4 13.2 73.2 13.2 114.9 0 208-93.1 208-208zM61.2 329.2c14.9-51.3 51.2-110.5 104.3-163.6S277.8 76.2 329.1 61.3C306.4 52.7 281.8 48 256 48 141.1 48 48 141.1 48 256c0 25.8 4.7 50.4 13.2 73.2M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m403-147c-5.2-5.2-24.1-13.9-67.8.7-40.7 13.6-89.8 44-135.7 89.9s-76.3 95-89.9 135.7c-14.6 43.7-5.8 62.6-.7 67.8s24.1 13.9 67.8-.7c40.7-13.6 89.9-44 135.7-89.9s76.3-95 89.9-135.7c14.6-43.7 5.8-62.6.7-67.8"
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
                  d="M480 256c0-35.8-8.4-69.7-23.4-99.7-8.4 56.6-47.7 127.6-110.2 190.1S212.9 448.2 156.3 456.6c30 14.9 63.9 23.4 99.7 23.4 123.7 0 224-100.3 224-224M55.4 355.7c8.4-56.6 47.7-127.6 110.2-190.1S299.1 63.8 355.7 55.4c-30-15-63.9-23.4-99.7-23.4C132.3 32 32 132.3 32 256c0 35.8 8.4 69.7 23.4 99.7M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M414.3 97.7c-11.8-11.8-38.7-18.4-84.2-3.2-43.5 14.5-94.7 46.5-142 93.8s-79.3 98.5-93.8 142c-15.2 45.5-8.6 72.4 3.2 84.2s38.7 18.4 84.2 3.2c43.5-14.5 94.7-46.5 142-93.8s79.3-98.5 93.8-142c15.2-45.5 8.6-72.4-3.2-84.2"
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
                  d="M496 256c0-47.7-13.9-92.1-37.9-129.5 3.9 59.8-37.6 145.8-111.7 219.9S186.4 462 126.5 458.1c37.4 24 81.8 37.9 129.5 37.9 132.5 0 240-107.5 240-240M53.9 385.5C50 325.7 91.5 239.7 165.6 165.6S325.7 50 385.5 53.9C348.1 29.9 303.7 16 256 16 123.5 16 16 123.5 16 256c0 47.7 13.9 92.1 37.9 129.5M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M425.7 86.3c-18.4-18.3-53.3-22.8-100.6-7-46.3 15.4-99.6 49-148.2 97.6S94.7 278.8 79.3 325.1c-15.8 47.3-11.3 82.2 7 100.6s53.2 22.8 100.6 7.1c46.3-15.4 99.6-49 148.2-97.6s82.2-101.9 97.6-148.2c15.8-47.3 11.3-82.2-7.1-100.6z"
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
                  d="M256 512c-38.5 0-75-8.5-107.7-23.7 67.1-5.8 149.8-48.2 220.8-119.2s113.4-153.8 119.2-220.8C503.5 181 512 217.5 512 256c0 141.4-114.6 256-256 256M74.7 436.8c-19.1-19.4-26.8-55.8-11.9-108 14.6-51.2 49.6-110.2 102.7-163.3S277.6 77.4 328.8 62.8c52.4-15 88.9-7.1 108.2 12.2s27.2 55.9 12.2 108.2c-14.6 51.2-49.6 110.2-102.7 163.3s-112.1 88.1-163.3 102.7c-52.1 14.9-88.6 7.2-108-11.9zm-51-73.1C8.5 331 0 294.5 0 256 0 114.6 114.6 0 256 0c38.5 0 75 8.5 107.7 23.7-67.1 5.8-149.8 48.2-220.8 119.2S29.5 296.7 23.7 363.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M363.7 23.7c54.8 25.5 99.2 69.8 124.6 124.6-5.8 67.1-48.2 149.8-119.2 220.8S215.3 482.5 148.3 488.3c-27.3-12.7-52-30-73.1-51 19.4 19.1 55.8 26.8 108 11.9 51.2-14.6 110.2-49.6 163.3-102.7s88.1-112.1 102.7-163.3c15-52.4 7.1-88.9-12.2-108.2s-55.9-27.2-108.2-12.2c-51.2 14.6-110.2 49.6-163.3 102.7S77.4 277.6 62.8 328.8c-14.9 52.1-7.2 88.6 11.9 108-21-21.1-38.4-45.8-51-73.1 5.8-67.1 48.2-149.8 119.2-220.8S296.7 29.5 363.7 23.7"
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
