import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BrightnessLowIcon: React.FC<
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
                  d="M224 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64 176a96 96 0 1 1 192 0 96 96 0 1 1-192 0m96 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64m176-176a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-320 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0-256a32 32 0 1 1 64 0 32 32 0 1 1-64 0M160 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M288 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m176-176a32 32 0 1 0 0-64 32 32 0 1 0 0 64M48 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m112-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
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
                  d="M280 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m176-176a24 24 0 1 0 0-48 24 24 0 1 0 0 48M56 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0m96-128a24 24 0 1 0-48 0 24 24 0 1 0 48 0m256 256a24 24 0 1 0-48 0 24 24 0 1 0 48 0m0-256a24 24 0 1 0-48 0 24 24 0 1 0 48 0M104 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0"
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
                  d="M272 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-176a16 16 0 1 0 0-32 16 16 0 1 0 0 32M64 256a16 16 0 1 0 32 0 16 16 0 1 0-32 0m80-128a16 16 0 1 0-32 0 16 16 0 1 0 32 0m256 256a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0-256a16 16 0 1 0-32 0 16 16 0 1 0 32 0M112 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0"
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
                  d="M256 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64m176-176a32 32 0 1 0 0-64 32 32 0 1 0 0 64M48 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m112-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
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
