import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const YinYangIcon: React.FC<
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
                  d="M256 64c53 0 96 43 96 96s-43 96-96 96-96 43-96 96 43 96 96 96c-106 0-192-86-192-192S150 64 256 64m0 448a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-352a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-64 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M464 256c0 114.9-93.1 208-208 208-50.9 0-92.2-41.2-92.2-92s41.3-92 92.2-92c77.3 0 140-62.7 140-140 0-15.4-2.5-30.1-7-44 45.9 38.2 75 95.7 75 160M256 48c50.8 0 92 41.2 92 92s-41.2 92-92 92c-77.3 0-140.2 62.6-140.2 140 0 15.3 2.5 30 7 43.8C77.1 377.6 48 320.2 48 256c0-114.9 93.1-208 208-208m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-368a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M480 256c0 123.7-100.3 224-224 224-57.4 0-104-46.6-104-104s46.6-104 104-104c75.1 0 136-60.9 136-136 0-26.5-7.6-51.2-20.6-72C436.5 103.1 480 174.5 480 256M256 32c57.4 0 104 46.6 104 104s-46.6 104-104 104c-75.1 0-136 60.9-136 136 0 26.5 7.6 51.2 20.6 72C75.5 408.9 32 337.5 32 256 32 132.3 132.3 32 256 32m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-136a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24-216a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M496 256c0 132.5-107.5 240-240 240-66.5 0-120-52.2-120-116s53.5-116 120-116c74.9 0 136-58.9 136-132 0-39.1-17.4-74.1-45.1-98.2C434.4 69.6 496 155.6 496 256M256 16c66.5 0 120 52.2 120 116s-53.5 116-120 116c-74.9 0-136 58.9-136 132 0 39.1 17.4 74.1 45.1 98.2C77.6 442.4 16 356.4 16 256 16 123.5 123.5 16 256 16m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0m64-256a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80"
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
                  d="M512 256c0 141.4-114.6 256-256 256-70.7 0-128-57.3-128-128s57.3-128 128-128 128-57.3 128-128S326.7 0 256 0c141.4 0 256 114.6 256 256M224 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256C0 114.6 114.6 0 256 0c70.7 0 128 57.3 128 128s-57.3 128-128 128-128 57.3-128 128 57.3 128 128 128C114.6 512 0 397.4 0 256m288 128a32 32 0 1 1-64 0 32 32 0 1 1 64 0M256 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
