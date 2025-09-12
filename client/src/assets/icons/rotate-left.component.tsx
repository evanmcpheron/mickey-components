import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RotateLeftIcon: React.FC<
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
                  d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2S50.1 48.1 57 55l41.6 41.6c87.6-86.5 228.7-86.2 315.8 1 87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2S177.7 224 168 224z"
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
                  d="M140.8 122.9C171.7 96.2 212 80 256 80c97.2 0 176 78.8 176 176s-78.8 176-176 176c-39.7 0-76.2-13.1-105.6-35.2-10.6-8-25.6-5.8-33.6 4.8s-5.8 25.6 4.8 33.6C159 463.3 205.6 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32c-57.3 0-109.6 21.5-149.2 56.9L76.3 58.3C69.7 51.7 60.7 48 51.3 48 31.8 48 16 63.8 16 83.3V200c0 13.3 10.7 24 24 24h116.7c19.5 0 35.3-15.8 35.3-35.3 0-9.4-3.7-18.3-10.3-25l-40.8-40.8zm-76.8-9 62.1 62.1H64z"
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
                  d="M94.7 360.2c-3.2-5-8.7-8.2-14.7-8.2-12.3 0-20.3 12.8-13.7 23.2C106 438.2 176.1 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32c-56.1 0-107.4 20.6-146.7 54.7L78.6 56c-5.1-5.1-12.1-8-19.3-8C44.2 48 32 60.2 32 75.3V176c0 8.8 7.2 16 16 16h100.7c15.1 0 27.3-12.2 27.3-27.3 0-7.2-2.9-14.2-8-19.3l-36-36C165.5 81.1 208.7 64 256 64c106 0 192 86 192 192s-86 192-192 192c-67.6 0-127.1-35-161.3-87.8M64 86.6l73.4 73.4H64z"
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
                  d="M419.9 384.1c-70.7 90.5-201.4 106.6-292 35.8-22.9-17.9-41-39.7-54.2-63.6-2.1-3.9-7-5.3-10.9-3.2s-5.3 7-3.2 10.9c14.2 25.8 33.7 49.3 58.4 68.6 97.5 76.2 238.3 58.9 314.4-38.6s58.9-238.3-38.6-314.4c-89.7-70.3-216.3-61.1-295.2 17l11.3 11.3c73.3-72.5 190.8-81 274.2-15.8 90.5 70.7 106.6 201.4 35.8 292M32 192c-4.4 0-8-3.6-8-8V64c0-3.2 1.9-6.2 4.9-7.4s6.4-.6 8.7 1.7l120 120c2.3 2.3 3 5.7 1.7 8.7s-4.2 4.9-7.4 4.9H32zm120 16c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L49 47c-6.9-6.9-17.2-8.9-26.2-5.2S8 54.3 8 64v120c0 13.3 10.7 24 24 24z"
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
                  d="m98.6 96.6 45.3 45.3c62.6-61.5 163.1-61.2 225.3 1 62.5 62.5 62.5 163.8 0 226.3s-163.8 62.5-226.3 0c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3c87.5 87.5 229.3 87.5 316.8 0s87.5-229.3 0-316.8c-87.2-87.2-228.3-87.5-315.8-1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M168 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2S50.1 48.1 57 55l128 128c6.9 6.9 8.9 17.2 5.2 26.2S177.7 224 168 224"
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
