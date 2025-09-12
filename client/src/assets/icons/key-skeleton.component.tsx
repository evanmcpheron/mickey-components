import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KeySkeletonIcon: React.FC<
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
                  d="M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 224c79.5 0 144-64.5 144-144S383.5 0 304 0 160 64.5 160 144c0 28.2 8.1 54.5 22.1 76.7L9.4 393.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 416 96 397.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 352l86.1-86.1c22.2 14 48.5 22.1 76.7 22.1z"
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
                  d="M304 48a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 240c79.5 0 144-64.5 144-144S383.5 0 304 0 160 64.5 160 144c0 31.1 9.9 59.9 26.6 83.4L7 407c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47L88 393.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 98.6-98.6c23.6 16.7 52.4 26.6 83.5 26.6"
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
                  d="M304 32a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256c79.5 0 144-64.5 144-144S383.5 0 304 0 160 64.5 160 144c0 34 11.8 65.2 31.5 89.9L4.7 420.7c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L38.6 432 80 390.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L102.6 368l111.5-111.5C238.8 276.2 270 288 304 288"
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
                  d="M304 16a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272c79.5 0 144-64.5 144-144S383.5 0 304 0 160 64.5 160 144c0 36.9 13.9 70.5 36.7 96L2.3 434.3c-3.1 3.1-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L19.3 440 72 387.3l58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L83.3 376 208 251.3c25.5 22.8 59.1 36.7 96 36.7"
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
                  d="M182.1 220.7 9.4 393.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 416 96 397.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 352l86.1-86.1c-18.3-11.5-33.8-27-45.3-45.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 224a144 144 0 1 0 0-288 144 144 0 1 0 0 288"
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
