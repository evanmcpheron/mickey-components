import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FolderTreeIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v352c0 35.3 28.7 64 64 64h192v-64H64V160h192V96H64zm224 160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32h-98.7c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32zm0 288c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-98.7c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v368c0 30.9 25.1 56 56 56h200v-48H56c-4.4 0-8-3.6-8-8V160h208v-48H48zm288 152V48h44.1l17 17c9.6 9.6 22.6 15 36.2 15H528v96zM288 32v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H433.3c-.8 0-1.7-.3-2.3-.9L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32m48 432V336h44.1l17 17c9.6 9.6 22.6 15 36.2 15H528v96zm-48-144v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H433.3c-.8 0-1.7-.3-2.3-.9l-21.7-21.7c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v352c0 26.5 21.5 48 48 48h208v-32H48c-8.8 0-16-7.2-16-16V128h224V96H32zm362.7 16 21.7 21.7C423 60.3 432 64 441.3 64H544v128H320V32zM288 32v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H441.3c-.8 0-1.7-.3-2.3-.9L417.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32m32 288h74.7l21.7 21.7c6.6 6.6 15.6 10.3 24.9 10.3H544v128H320zm-32 0v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H441.3c-.8 0-1.7-.3-2.3-.9l-21.7-21.7c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v376c0 22.1 17.9 40 40 40h216v-16H40c-13.3 0-24-10.7-24-24V136h240v-16H16zm288 24c0-8.8 7.2-16 16-16h74.7c4.2 0 8.3 1.7 11.3 4.7l21.7 21.7c3.6 3.6 8.5 5.6 13.6 5.6H544c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H320c-8.8 0-16-7.2-16-16zm-16 0v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H441.3c-.8 0-1.7-.3-2.3-.9L417.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32m16 288c0-8.8 7.2-16 16-16h74.7c4.2 0 8.3 1.7 11.3 4.7l21.7 21.7c3.6 3.6 8.5 5.6 13.6 5.6H544c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H320c-8.8 0-16-7.2-16-16zm-16 0v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H441.3c-.8 0-1.7-.3-2.3-.9l-21.7-21.7c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 0c17.7 0 32 14.3 32 32v64h224v64H64v224h224v64H64c-35.3 0-64-28.7-64-64V32C0 14.3 14.3 0 32 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 32v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32h-98.7c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32m0 288v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-98.7c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32z"
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
