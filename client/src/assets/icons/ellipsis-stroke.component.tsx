import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EllipsisStrokeIcon: React.FC<
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
                  d="M416 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144m-160 96a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144m-136 72a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-96 0a72 72 0 1 0 144 0 72 72 0 1 0-144 0"
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
                  d="M416 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-160 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-136 64a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0"
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
                  d="M416 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-160 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-128 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-96 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0"
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
                  d="M416 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-160 80a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-128 48a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-80 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0"
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
                  d="M256 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144"
                />
                <path
                  className="aps-icon-foreground"
                  d="M392 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0m96 0a72 72 0 1 1-144 0 72 72 0 1 1 144 0m-416 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0m96 0a72 72 0 1 1-144 0 72 72 0 1 1 144 0"
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
