import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderTopIcon: React.FC<
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
                  d="M0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64m64 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-128 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0m448 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-256 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M64 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-128 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m448 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-256 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-32-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-64-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M0 56c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 80 0 69.3 0 56m64 104a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-128 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0m448 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-256 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M64 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-128 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m448 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-256 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-32-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-64-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M0 48c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 64 0 56.8 0 48m56 112a24 24 0 1 1-48 0 24 24 0 1 1 48 0m336 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-144 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0M8 352a24 24 0 1 1 48 0 24 24 0 1 1-48 0m432 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-240 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0M56 256a24 24 0 1 1-48 0 24 24 0 1 1 48 0m336 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-144 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0M8 448a24 24 0 1 1 48 0 24 24 0 1 1-48 0m432 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-240 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-48-192a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-48 192a24 24 0 1 1 48 0 24 24 0 1 1-48 0m240 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-48-192a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M0 40c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m48 120a16 16 0 1 1-32 0 16 16 0 1 1 32 0m352 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-160 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0M16 352a16 16 0 1 1 32 0 16 16 0 1 1-32 0m416 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-224 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0M48 256a16 16 0 1 1-32 0 16 16 0 1 1 32 0m352 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-160 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0M16 448a16 16 0 1 1 32 0 16 16 0 1 1-32 0m416 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-224 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-64-192a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-32 192a16 16 0 1 1 32 0 16 16 0 1 1-32 0m224 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-32-192a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M64 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m384 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-256 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0M64 352a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M0 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m448 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-256 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0M64 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64"
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
