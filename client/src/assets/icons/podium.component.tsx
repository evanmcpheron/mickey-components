import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PodiumIcon: React.FC<
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
                  d="M182.4 72c8.3 14.3 23.8 24 41.6 24h64c26.5 0 48-21.5 48-48S314.5 0 288 0h-64c-17.8 0-33.3 9.7-41.6 24H168c-48.6 0-88 39.4-88 88v32H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H128v-32c0-22.1 17.9-40 40-40zM48 224l25.7 231.1c3.6 32.4 31 56.9 63.6 56.9h173.4c32.6 0 60-24.5 63.6-56.9L400 224z"
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
                  d="M168 72c-22.1 0-40 17.9-40 40v32h296c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h56v-32c0-48.6 39.4-88 88-88h14.4C190.7 9.7 206.2 0 224 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24zM73.5 455.2 47.3 224h48.3l25.7 225.8c.9 8.1 7.8 14.2 15.9 14.2h173.7c8.1 0 15-6.1 15.9-14.2L352.4 224h48.3l-26.2 231.2c-3.7 32.3-31 56.8-63.6 56.8H137.1c-32.6 0-59.9-24.4-63.6-56.8"
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
                  d="M288 32h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16M178.7 64H168c-26.5 0-48 21.5-48 48v48h312c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h72v-48c0-44.2 35.8-80 80-80h10.7c6.6-18.6 24.4-32 45.3-32h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-20.9 0-38.7-13.4-45.3-32M73.5 455.2 47.3 224h32.2l25.9 227.6c1.8 16.2 15.5 28.4 31.8 28.4h173.7c16.3 0 30-12.2 31.8-28.4L368.5 224h32.2l-26.2 231.2c-3.7 32.3-31 56.8-63.6 56.8H137.1c-32.6 0-59.9-24.4-63.6-56.8"
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
                  d="M288 16h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32M176.7 56H168c-30.9 0-56 25.1-56 56v48h328c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h88v-48c0-39.8 32.2-72 72-72h8.7c3.8-22.7 23.5-40 47.3-40h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-23.8 0-43.5-17.3-47.3-40M73.6 455.2 45.5 208h16.1l27.8 245.4c2.8 24.3 23.3 42.6 47.7 42.6h173.8c24.4 0 44.9-18.3 47.7-42.6L386.4 208h16.1l-28 247.2c-3.7 32.3-31 56.8-63.6 56.8H137.1c-32.6 0-59.9-24.4-63.6-56.8z"
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
                  d="M310.7 512H137.3c-32.6 0-60-24.5-63.6-56.9L44.4 192h359.2l-29.3 263.1c-3.6 32.4-31 56.9-63.6 56.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M182.4 72H168c-22.1 0-40 17.9-40 40v32h296c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h56v-32c0-48.6 39.4-88 88-88h14.4C190.7 9.7 206.2 0 224 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24"
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
