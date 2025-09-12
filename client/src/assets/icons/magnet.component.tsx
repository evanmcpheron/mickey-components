import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MagnetIcon: React.FC<
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
                  d="M0 160v96c0 123.7 100.3 224 224 224s224-100.3 224-224v-96H320v96c0 53-43 96-96 96s-96-43-96-96v-96zm0-32h128V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64zm320 0h128V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32z"
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
                  d="M48 256c0 97.2 78.8 176 176 176s176-78.8 176-176v-64h-64v64c0 61.9-50.1 112-112 112s-112-50.1-112-112v-64H48zM0 88c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v168c0 35.3 28.7 64 64 64s64-28.7 64-64V88c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v168c0 123.7-100.3 224-224 224S0 379.7 0 256z"
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
                  d="M48 64c-8.8 0-16 7.2-16 16v48h80V80c0-8.8-7.2-16-16-16zM32 256c0 106 86 192 192 192s192-86 192-192v-96h-80v96c0 61.9-50.1 112-112 112s-112-50.1-112-112v-96H32zm384-128V80c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v48zM0 80c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v176c0 44.2 35.8 80 80 80s80-35.8 80-80V80c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v176c0 123.7-100.3 224-224 224S0 379.7 0 256z"
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
                  d="M40 48c-13.3 0-24 10.7-24 24v72h112V72c0-13.3-10.7-24-24-24zM16 256c0 114.9 93.1 208 208 208s208-93.1 208-208v-96H320v96c0 53-43 96-96 96s-96-43-96-96v-96H16zm416-112V72c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24v72zM0 72c0-22.1 17.9-40 40-40h64c22.1 0 40 17.9 40 40v184c0 44.2 35.8 80 80 80s80-35.8 80-80V72c0-22.1 17.9-40 40-40h64c22.1 0 40 17.9 40 40v184c0 123.7-100.3 224-224 224S0 379.7 0 256z"
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
                  d="M0 160h128V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64zm320 0h128V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 160v96c0 123.7 100.3 224 224 224s224-100.3 224-224v-96H320v96c0 53-43 96-96 96s-96-43-96-96v-96z"
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
