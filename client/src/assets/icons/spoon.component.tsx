import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SpoonIcon: React.FC<
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
                  d="M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96 0 96-80 192-160.2 192-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"
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
                  d="m286.1 193.9 32 32c9.3 9.4 21.5 14 33.8 14.1 21.1 0 48.8-13.5 73.2-42.7C449 168.6 464 131.2 464 96c0-26.5-21.5-48-48-48-35.2 0-72.6 15-101.3 38.9-29.2 24.4-42.7 52.1-42.7 73.2 0 12.3 4.7 24.5 14.1 33.8m-34.9 33c-18.1-18.6-27.1-42.6-27.2-66.7C224 80 320 0 416 0c53 0 96 43 96 96 0 96-80 192-160.2 192-24.1 0-48.2-9.1-66.7-27.2L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9z"
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
                  d="m274.7 205.3 32 32c12.5 12.5 28.7 18.7 45.1 18.7 27.5 0 59.3-17 85.5-48.5 26-31.1 42.7-72 42.7-111.5 0-35.3-28.7-64-64-64-39.5 0-80.4 16.7-111.5 42.6-31.5 26.3-48.5 58.1-48.5 85.5 0 16.4 6.3 32.6 18.7 45.1zm-22.6 22.6c-18.7-18.7-28.1-43.2-28.1-67.7C224 80 320 0 416 0c53 0 96 43 96 96 0 96-80 192-160.2 192-24.5 0-49-9.4-67.7-28.1l-4.7-4.7L27.3 507.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l252.1-252.1z"
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
                  d="m263.4 216.6 32 32c15.6 15.6 36 23.4 56.4 23.4 33.8 0 69.7-20.5 97.8-54.2 28-33.5 46.3-78 46.3-121.8 0-44.2-35.8-80-80-80-43.7 0-88.2 18.3-121.8 46.3-33.6 28.2-54.1 64.1-54.1 97.9 0 20.4 7.8 40.8 23.4 56.4m-11.3 11.3c-18.7-18.7-28.1-43.2-28.1-67.7C224 80 320 0 416 0c53 0 96 43 96 96 0 96-80 192-160.2 192-24.5 0-49-9.4-67.7-28.1l-10.3-10.3L13.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l260.1-260.2-10.3-10.3z"
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
                  d="M224 160.2c0 24.5 9.4 49 28.1 67.7l32 32c18.7 18.7 43.2 28.1 67.7 28.1C432 288 512 192 512 96c0-53-43-96-96-96-96 0-192 80-192 160.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M245.8 220.9q3 3.6 6.3 6.9l32 32c2.2 2.2 4.6 4.3 6.9 6.3L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"
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
