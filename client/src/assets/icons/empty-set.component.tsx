import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EmptySetIcon: React.FC<
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
                  d="m435.4 121.9 67.2-67.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-67.1 67.2C352.8 48.6 306.3 32 256 32 132.3 32 32 132.3 32 256c0 50.3 16.6 96.8 44.6 134.2L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l67.2-67.2c37.4 28 83.8 44.6 134.1 44.6 123.7 0 224-100.3 224-224 0-50.3-16.6-96.8-44.6-134.1zm-91.2.7L122.5 344.2C105.8 318.9 96 288.6 96 256c0-88.4 71.6-160 160-160 32.6 0 62.9 9.8 88.2 26.5zm-176.5 267 221.8-221.8c16.7 25.3 26.5 55.6 26.5 88.2 0 88.4-71.6 160-160 160-32.6 0-62.9-9.8-88.2-26.5z"
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
                  d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-74.6 74.4C358.1 50.6 309.2 32 256 32 132.3 32 32 132.3 32 256c0 53.2 18.6 102.1 49.5 140.5L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.5-74.5c38.4 31 87.3 49.5 140.5 49.5 123.7 0 224-100.3 224-224 0-53.2-18.6-102.1-49.5-140.5zm-142.7 74.7L115.7 362.3C93.3 332.8 80 295.9 80 256c0-97.2 78.8-176 176-176 39.9 0 76.8 13.3 106.3 35.7M149.7 396.3l246.6-246.6C418.7 179.2 432 216.1 432 256c0 97.2-78.8 176-176 176-39.9 0-76.8-13.3-106.3-35.7"
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
                  d="M491.3 43.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-66 66C363.4 52.6 312.1 32 256 32 132.3 32 32 132.3 32 256c0 56.1 20.6 107.4 54.7 146.7l-66 66c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l66-66C148.6 459.4 199.9 480 256 480c123.7 0 224-100.3 224-224 0-56.1-20.6-107.4-54.7-146.7zM380 109.4 109.4 380C81.1 346.5 64 303.3 64 256c0-106 86-192 192-192 47.3 0 90.5 17.1 124 45.4M132 402.6 402.6 132c28.3 33.5 45.4 76.7 45.4 124 0 106-86 192-192 192-47.3 0-90.5-17.1-124-45.4"
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
                  d="M485.7 37.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-65.8 65.7C368.6 54.8 315 32 256 32 132.3 32 32 132.3 32 256c0 59 22.8 112.6 60.1 152.6l-65.8 65.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l65.7-65.7C143.4 457.2 197 480 256 480c123.7 0 224-100.3 224-224 0-59-22.8-112.6-60.1-152.6l65.7-65.7zm-88.3 65.7-294 293.9C69 360.2 48 310.6 48 256c0-114.9 93.1-208 208-208 54.6 0 104.2 21 141.3 55.4zM114.7 408.6l293.9-293.9C443 151.8 464 201.4 464 256c0 114.9-93.1 208-208 208-54.6 0-104.2-21-141.3-55.4"
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
                  d="M390.2 76.6C352.8 48.6 306.3 32 256 32 132.3 32 32 132.3 32 256c0 50.3 16.6 96.8 44.6 134.2l45.9-45.9C105.8 318.9 96 288.6 96 256c0-88.4 71.6-160 160-160 32.6 0 62.9 9.8 88.2 26.5l45.9-45.9zM167.8 389.5l-45.9 45.9c37.4 28 83.8 44.6 134.1 44.6 123.7 0 224-100.3 224-224 0-50.3-16.6-96.8-44.6-134.1l-45.9 45.9c16.7 25.3 26.5 55.6 26.5 88.2 0 88.4-71.6 160-160 160-32.6 0-62.9-9.8-88.2-26.5"
                />
                <path
                  className="aps-icon-foreground"
                  d="M502.6 9.4c12.5 12.5 12.5 32.8 0 45.3l-448 448c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l448-448c12.5-12.5 32.8-12.5 45.3 0"
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
