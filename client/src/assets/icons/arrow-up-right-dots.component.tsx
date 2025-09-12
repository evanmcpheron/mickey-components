import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUpRightDotsIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zm416 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0M448 208a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m128 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-304-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-176 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m432-176a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 24c0 13.3 10.7 24 24 24h86.1L7 279c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l231-231V168c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24m448 56a48 48 0 1 0-96 0 48 48 0 1 0 96 0M448 208a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m128 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-304-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-176 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m432-176a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h121.4L4.7 292.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L288 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16zm384 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-128 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-16 80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m128-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96M256 336a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-144-48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m336-144a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-16-176a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 8c0 4.4 3.6 8 8 8h140.7L18.3 290.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L304 27.3V168c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8H152c-4.4 0-8 3.6-8 8m384 40a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-128 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-32 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m128-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96M240 336a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-160-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m336-160a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-32-176a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M528 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96M400 256a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m128 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96M320 336a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-80-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m336-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48-176a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.7L54.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 64H160c-17.7 0-32-14.3-32-32"
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
