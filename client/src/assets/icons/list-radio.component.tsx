import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ListRadioIcon: React.FC<
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
                  d="M64 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m128-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zM40 416a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M64 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M64 32a64 64 0 1 0 0 128 64 64 0 1 0 0-128m120 40c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24zM64 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128M40 416a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M32 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0A64 64 0 1 0 0 96a64 64 0 1 0 128 0m64 0c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16m0 160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16m0 160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16M64 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128m16-96a16 16 0 1 0-32 0 16 16 0 1 0 32 0M32 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M64 56a40 40 0 1 0 0 80 40 40 0 1 0 0-80m0 96a56 56 0 1 1 0-112 56 56 0 1 1 0 112m104-56c0-4.4 3.6-8 8-8h320c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8m0 160c0-4.4 3.6-8 8-8h320c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8m0 160c0-4.4 3.6-8 8-8h320c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8M64 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80m0 96a56 56 0 1 1 0-112 56 56 0 1 1 0 112m40 104a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-96 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m56-304a16 16 0 1 1 0-32 16 16 0 1 1 0 32"
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
                  d="M160 96c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32m32 128h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
