import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PrintIcon: React.FC<
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
                  d="M128 0C92.7 0 64 28.7 64 64v96h64V64h226.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0zm256 352v96H128v-96zm64 32h32c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zm-16-136a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M112 160V64c0-8.8 7.2-16 16-16h229.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c3 3 4.7 7.1 4.7 11.3V160h48V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C390.7 6.7 374.5 0 357.5 0H128C92.7 0 64 28.7 64 64v96zm16 208h256v96H128zm-16-48c-17.7 0-32 14.3-32 32H48v-96c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v96h-32c0-17.7-14.3-32-32-32zm320 80h48c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v112c0 17.7 14.3 32 32 32h48v80c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32z"
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
                  d="M96 160H64V64c0-35.3 28.7-64 64-64h229.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3V160h-32V90.5c0-8.5-3.4-16.6-9.4-22.6l-26.5-26.5c-6-6-14.1-9.4-22.6-9.4H128c-17.7 0-32 14.3-32 32zm352 64H64c-17.7 0-32 14.3-32 32v128h32v-32c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v32h32V256c0-17.7-14.3-32-32-32m0 192v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64H32c-17.7 0-32-14.3-32-32V256c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v128c0 17.7-14.3 32-32 32zM96 352v128h320V352zm336-104a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M80 160H64V64c0-35.3 28.7-64 64-64h229.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3V160h-16V90.5c0-12.7-5.1-24.9-14.1-33.9l-26.5-26.5c-9-9-21.2-14.1-33.9-14.1H128c-26.5 0-48 21.5-48 48zm368 48H64c-26.5 0-48 21.5-48 48v128c0 8.8 7.2 16 16 16h32v-48c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v48h32c8.8 0 16-7.2 16-16V256c0-26.5-21.5-48-48-48m0 208v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64H32c-17.7 0-32-14.3-32-32V256c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v128c0 17.7-14.3 32-32 32zM96 336c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16zm336-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M64 64v128h384V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C390.7 6.7 374.5 0 357.5 0H128C92.7 0 64 28.7 64 64m32 288v96c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v96c0 17.7-14.3 32-32 32h-64v-32H96v32H32c-17.7 0-32-14.3-32-32zm456 16a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
