import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HexagonCheckIcon: React.FC<
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
                  d="M17.1 292a71.81 71.81 0 0 1 0-72l88.3-152.9c12.9-22.3 36.6-36 62.4-36h176.5a72.1 72.1 0 0 1 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72l-88.3 152.9c-12.9 22.3-36.6 36-62.4 36H167.7a72.1 72.1 0 0 1-62.4-36zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0z"
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
                  d="M17.1 292a71.81 71.81 0 0 1 0-72l88.3-152.9c12.9-22.3 36.6-36 62.4-36h176.5a72.1 72.1 0 0 1 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72l-88.3 152.9c-12.9 22.3-36.6 36-62.4 36H167.7a72.1 72.1 0 0 1-62.4-36zm41.6-48c-4.3 7.4-4.3 16.6 0 24L147 420.9c4.3 7.4 12.2 12 20.8 12h176.5c8.6 0 16.5-4.6 20.8-12L453.4 268c4.3-7.4 4.3-16.6 0-24L365.1 91.1c-4.3-7.4-12.2-12-20.8-12H167.7c-8.6 0-16.5 4.6-20.8 12L58.6 244zM369 209 241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="M16 288a64.16 64.16 0 0 1 0-64l92.3-159.8c11.4-19.8 32.6-32 55.4-32h184.6c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64l-92.3 159.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16h184.6c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16H163.7c-11.4 0-22 6.1-27.7 16zm319.6-36.7-128 128c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l52.7 52.7 116.7-116.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
                  d="M400.8 450.8 497.1 284c2.5-4.3 4.4-8.9 5.6-13.6 2-7.7 2.4-15.7 1.1-23.6-1.1-6.5-3.3-12.9-6.7-18.8L400.8 61.2c-10-17.3-28.5-28-48.5-28H159.7c-20 0-38.5 10.7-48.5 28L14.9 228c-3.9 6.7-6.3 14.1-7.1 21.6-1.4 11.8 1 23.9 7.1 34.4l96.3 166.8c10 17.3 28.5 28 48.5 28h192.6c20 0 38.5-10.7 48.5-28M483.2 236c2.7 4.6 4.4 9.7 5 14.8l-2.7 20.4c-.7 1.6-1.5 3.2-2.3 4.8l-96.3 166.8c-7.1 12.4-20.4 20-34.6 20H159.7c-14.3 0-27.5-7.6-34.6-20L28.8 276c-3.6-6.2-5.4-13.1-5.4-20 0-3.4.4-6.8 1.3-10.1.9-3.4 2.2-6.8 4.1-9.9l96.3-166.8c7.1-12.4 20.4-20 34.6-20h192.6c14.3 0 27.5 7.6 34.6 20zm-125.5-38.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 308.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0z"
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
                  d="M17.1 292a71.81 71.81 0 0 1 0-72l88.3-152.9c12.9-22.3 36.6-36 62.4-36h176.5a72.1 72.1 0 0 1 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72l-88.3 152.9c-12.9 22.3-36.6 36-62.4 36H167.7a72.1 72.1 0 0 1-62.4-36zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M369 175c9.4 9.4 9.4 24.6 0 33.9L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0z"
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
