import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GridRoundIcon: React.FC<
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
                  d="M128 96A64 64 0 1 1 0 96a64 64 0 1 1 128 0m0 160a64 64 0 1 1-128 0 64 64 0 1 1 128 0M64 480a64 64 0 1 1 0-128 64 64 0 1 1 0 128M288 96a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-64 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128m64 96a64 64 0 1 1-128 0 64 64 0 1 1 128 0m96-256a64 64 0 1 1 0-128 64 64 0 1 1 0 128m64 96a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-64 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128"
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
                  d="M88 96a24 24 0 1 1-48 0 24 24 0 1 1 48 0M64 32a64 64 0 1 0 0 128 64 64 0 1 0 0-128m24 224a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48M0 416a64 64 0 1 0 128 0 64 64 0 1 0-128 0M248 96a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 24a64 64 0 1 0 128 0 64 64 0 1 0-128 0m88 160a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128M384 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 24a64 64 0 1 0 128 0 64 64 0 1 0-128 0m88 160a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 24a64 64 0 1 0 128 0 64 64 0 1 0-128 0"
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
                  d="M96 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0M64 32a64 64 0 1 0 0 128 64 64 0 1 0 0-128m32 224a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 416a64 64 0 1 0 128 0 64 64 0 1 0-128 0M256 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-64 32a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128M384 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-64 32a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-64 32a64 64 0 1 0 128 0 64 64 0 1 0-128 0"
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
                  d="M112 96a48 48 0 1 1-96 0 48 48 0 1 1 96 0M64 32a64 64 0 1 0 0 128 64 64 0 1 0 0-128m48 224a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96M0 416a64 64 0 1 0 128 0 64 64 0 1 0-128 0M272 96a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-64 48a64 64 0 1 0 128 0 64 64 0 1 0-128 0m112 160a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128M384 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-64 48a64 64 0 1 0 128 0 64 64 0 1 0-128 0m112 160a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-64 48a64 64 0 1 0 128 0 64 64 0 1 0-128 0"
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
                  d="M224 32a64 64 0 1 0 0 128 64 64 0 1 0 0-128M64 192a64 64 0 1 0 0 128 64 64 0 1 0 0-128m96 224a64 64 0 1 0 128 0 64 64 0 1 0-128 0m224-224a64 64 0 1 0 0 128 64 64 0 1 0 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 96A64 64 0 1 1 0 96a64 64 0 1 1 128 0m0 320a64 64 0 1 1-128 0 64 64 0 1 1 128 0m96-96a64 64 0 1 1 0-128 64 64 0 1 1 0 128M448 96a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-64 384a64 64 0 1 1 0-128 64 64 0 1 1 0 128"
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
