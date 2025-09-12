import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleQuartersIcon: React.FC<
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
                  d="M120.2 391.8 256 256l135.8 135.8C426.5 357 448 309 448 256s-21.5-101-56.2-135.8L256 256 120.2 120.2C85.5 155 64 203 64 256s21.5 101 56.2 135.8M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M108.9 403.1 256 256l147.1 147.1C440.7 365.4 464 313.4 464 256s-23.3-109.4-60.9-147.1L256 256 108.9 108.9C71.3 146.6 48 198.6 48 256s23.3 109.4 60.9 147.1M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M402.7 425.3 256 278.6 109.3 425.3C148.6 459.4 199.9 480 256 480s107.4-20.6 146.7-54.7m22.6-22.6C459.4 363.4 480 312.1 480 256s-20.6-107.4-54.7-146.7L278.6 256zm-22.6-316C363.4 52.6 312.1 32 256 32S148.6 52.6 109.3 86.7L256 233.4zm-316 22.6C52.6 148.6 32 199.9 32 256s20.6 107.4 54.7 146.7L233.4 256zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="m420 431.3-164-164-164 164c42.9 40.1 100.6 64.7 164 64.7s121.1-24.6 164-64.7m11.3-11.3c40.1-42.9 64.7-100.6 64.7-164s-24.6-121.1-64.7-164l-164 164zM420 80.7C377.1 40.6 319.4 16 256 16S134.9 40.6 92 80.7l164 164zM80.7 92C40.6 134.9 16 192.6 16 256s24.6 121.1 64.7 164l164-164zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M256 256 120.2 391.8C155 426.5 203 448 256 448s101-21.5 135.8-56.2zm135.8-135.8C357 85.5 309 64 256 64s-101 21.5-135.8 56.2L256 256z"
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
