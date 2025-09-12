import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CodePullRequestDraftIcon: React.FC<
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
                  d="M56 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m56 73.3c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3v205.4C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3zM56 432a24 24 0 1 1 48 0 24 24 0 1 1-48 0m312-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160m48-432a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M48 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m56 76.3c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.4C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3zM48 432a32 32 0 1 1 64 0 32 32 0 1 1-64 0m320-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160m48-432a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M32 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m64 78.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4zM32 432a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160m32-448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M32 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m56 63.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64S16 28.7 16 64c0 32.6 24.4 59.6 56 63.5v257c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5zM32 448a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-456a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80m-24 120a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0"
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
                  d="M416 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-304 73.3c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7v205.4c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7zM368 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160m0 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160m264-80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
