import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GripDotsIcon: React.FC<
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
                  d="M336 176a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-160 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0M64 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96m272 112a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-112 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96M16 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0"
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
                  d="M352 192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-160 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0M64 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 320a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
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
                  d="M384 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96M48 176a16 16 0 1 0 32 0 16 16 0 1 0-32 0m64 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0m272 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-176 48a16 16 0 1 0 32 0 16 16 0 1 0-32 0m64 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0M64 352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M384 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96M32 176a32 32 0 1 0 64 0 32 32 0 1 0-64 0m80 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0m272 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-192 48a32 32 0 1 0 64 0 32 32 0 1 0-64 0m80 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0M64 368a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M384 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-112 48a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-112 48a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
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
