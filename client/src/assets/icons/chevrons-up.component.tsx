import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChevronsUpIcon: React.FC<
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
                  d="M278.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3l169.4 169.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-192-192zm192 384-192-192c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 301.3l169.4 169.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
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
                  d="M273 47c-9.4-9.4-24.6-9.4-33.9 0L47 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 273c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm192 384L273 239c-9.4-9.4-24.6-9.4-33.9 0L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"
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
                  d="M267.3 52.7c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 86.6l180.7 180.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm192 384-192-192c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l180.7 180.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6"
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
                  d="M261.7 50.3c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 67.3l210.3 210.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-216-216zm216 408-216-216c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 259.3l210.3 210.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"
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
                  d="M233.4 233.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 301.3 86.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M233.4 41.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3 86.6 278.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
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
