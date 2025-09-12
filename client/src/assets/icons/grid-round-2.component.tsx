import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GridRound2Icon: React.FC<
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
                  d="M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192m0 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192m160-160a96 96 0 1 0 192 0 96 96 0 1 0-192 0m96 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192"
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
                  d="M128 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m112-256a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0"
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
                  d="M128 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0m96-256a64 64 0 1 0 128 0 64 64 0 1 0-128 0m64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0"
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
                  d="M128 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0m80-256a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 240a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0"
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
                  d="M384 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192M128 288a96 96 0 1 0 0 192 96 96 0 1 0 0-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192m256 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192"
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
