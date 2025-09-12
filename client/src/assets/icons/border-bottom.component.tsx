import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderBottomIcon: React.FC<
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
                  d="M448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32m-64-96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m128 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M448 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m32 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 192a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M448 456c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h400c13.3 0 24 10.7 24 24m-64-104a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m128 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M448 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m32 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 192a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M448 464c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h416c8.8 0 16 7.2 16 16m-56-112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-336 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m144 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m240-192a24 24 0 1 1-48 0 24 24 0 1 1 48 0M8 160a24 24 0 1 1 48 0 24 24 0 1 1-48 0m240 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m144 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-336 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m144 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0M440 64a24 24 0 1 1-48 0 24 24 0 1 1 48 0M8 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m240 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m48 192a24 24 0 1 1 48 0 24 24 0 1 1-48 0m48-192a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-240 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m48 192a24 24 0 1 1-48 0 24 24 0 1 1 48 0"
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
                  d="M0 472c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m16-120a16 16 0 1 0 32 0 16 16 0 1 0-32 0m416 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-224 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0M48 160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-160 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M16 256a16 16 0 1 0 32 0 16 16 0 1 0-32 0m416 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-224 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0M48 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-160 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M112 256a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32-192a16 16 0 1 0-32 0 16 16 0 1 0 32 0m160 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32 192a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M384 352a32 32 0 1 0 64 0 32 32 0 1 0-64 0M0 352a32 32 0 1 0 64 0 32 32 0 1 0-64 0m256 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m256 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0M0 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m256 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0M64 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m160 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0M288 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"
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
