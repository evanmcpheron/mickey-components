import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GripDotsVerticalIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 112a48 48 0 1 0-96 0 48 48 0 1 0 96 0m112-272a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 112a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96-288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0M0 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m64 160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96M224 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m16 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0M0 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m80 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96M240 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m32 208a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m0 160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m0 160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
