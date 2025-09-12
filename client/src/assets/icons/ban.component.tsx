import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BanIcon: React.FC<
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
                  d="M367.2 412.5 99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5m45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M385.1 419.1 92.9 126.9C64.8 162.3 48 207.2 48 256c0 114.9 93.1 208 208 208 48.8 0 93.7-16.8 129.1-44.9m33.9-33.9c28.2-35.5 45-80.4 45-129.2 0-114.9-93.1-208-208-208-48.8 0-93.7 16.8-129.1 44.9l292.2 292.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="m402.7 425.3-316-316C52.6 148.6 32 199.9 32 256c0 123.7 100.3 224 224 224 56.1 0 107.4-20.6 146.7-54.7m22.6-22.6C459.4 363.4 480 312.1 480 256c0-123.7-100.3-224-224-224-56.1 0-107.4 20.6-146.7 54.7zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M420 431.3 80.7 92C40.6 134.9 16 192.6 16 256c0 132.5 107.5 240 240 240 63.4 0 121.1-24.6 164-64.7m11.3-11.3c40.1-42.9 64.7-100.6 64.7-164 0-132.5-107.5-240-240-240-63.4 0-121.1 24.6-164 64.7zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="m99.5 144.8 267.7 267.7c17.5-12.5 32.8-27.8 45.3-45.3L144.8 99.5c-17.5 12.5-32.8 27.8-45.3 45.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 448a256 256 0 1 0 0-512 256 256 0 1 0 0 512"
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
