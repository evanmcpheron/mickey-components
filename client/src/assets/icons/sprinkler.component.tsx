import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SprinklerIcon: React.FC<
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
                  d="M24 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48M0 128a24 24 0 1 1 48 0 24 24 0 1 1-48 0m0 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0M64 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m40-32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m360 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-80a24 24 0 1 1-48 0 24 24 0 1 1 48 0M488 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-40 72a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-40-32a24 24 0 1 1-48 0 24 24 0 1 1 48 0M256 64c17.7 0 32 14.3 32 32v160h100.2c15.3 0 27.8 12.4 27.8 27.8 0 7.8-3.3 15.2-9 20.5L320 384v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96l-87-79.7c-5.7-5.3-9-12.7-9-20.5 0-15.3 12.4-27.8 27.8-27.8H224V96c0-17.7 14.3-32 32-32"
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
                  d="M0 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48M88 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48M64 184a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88-80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m360 128a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-128a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-80a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24 136a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88-80a24 24 0 1 1 0 48 24 24 0 1 1 0-48M97.8 270.8c3.7-9 12.5-14.8 22.2-14.8h112V88c0-13.3 10.7-24 24-24s24 10.7 24 24v168h112c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-89 89v86c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-86.1l-89-89c-6.9-6.9-8.9-17.2-5.2-26.2zM256 304h-78.1l55 55c4.5 4.5 7 10.6 7 17v88h32v-88c0-6.4 2.5-12.5 7-17l55-55z"
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
                  d="M496 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32M32 144a16 16 0 1 1-32 0 16 16 0 1 1 32 0m128 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m192 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m144-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32M96 208a16 16 0 1 1-32 0 16 16 0 1 1 32 0m400 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32M32 272a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0M32 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m224 48c8.8 0 16 7.2 16 16v176h120c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-89 89v86c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-86.1l-89-89c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8h120V80c0-8.8 7.2-16 16-16M139.3 288l75.3 75.3c6 6 9.4 14.1 9.4 22.6V472c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-86.1c0-8.5 3.4-16.6 9.4-22.6l75.3-75.3H139.3"
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
                  d="M496 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32M32 144a16 16 0 1 1-32 0 16 16 0 1 1 32 0m128 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m192 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m144-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32M96 208a16 16 0 1 1-32 0 16 16 0 1 1 32 0m400 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32M32 272a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0M32 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m224 48c4.4 0 8 3.6 8 8v184h128c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-89 89v86c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-86.1l-89-89c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8h128V72c0-4.4 3.6-8 8-8M120 272c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7l89 89c3 3 4.7 7.1 4.7 11.3V472c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-86.1c0-4.2 1.7-8.3 4.7-11.3l89-89c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H120"
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
                  d="M0 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48M88 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48M64 184a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88-80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m360 128a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-128a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-80a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24 136a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88-80a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32v160H123.8c-15.4 0-27.8 12.4-27.8 27.8 0 7.8 3.3 15.2 9 20.5l87 79.7v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96l87-79.7c5.7-5.3 9-12.7 9-20.5 0-15.3-12.4-27.8-27.8-27.8H288z"
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
