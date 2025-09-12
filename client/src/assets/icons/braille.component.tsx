import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BrailleIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96m224 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128M80 416a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m240 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0M64 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128M224 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128m128 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0m240 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m64 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m16 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-96-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m16 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96m224 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-88a64 64 0 1 1 0 128 64 64 0 1 1 0-128M88 416a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m248 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0M64 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128M224 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128m128 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0m248 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m64 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-88a64 64 0 1 1 0 128 64 64 0 1 1 0-128m24 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-96-136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-88a64 64 0 1 1 0 128 64 64 0 1 1 0-128m24 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m160 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128M32 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m64 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M32 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m64-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m128-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M240 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0M64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m160 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128M16 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m48 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M16 256a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m48-160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m128-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m112-64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-48 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M416 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-48 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M240 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0M64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M592 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0M224 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128M80 416a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m240 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m416-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m16 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-96-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m16 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128M288 96a64 64 0 1 0-128 0 64 64 0 1 0 128 0m128 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
