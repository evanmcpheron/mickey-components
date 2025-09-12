import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SliderIcon: React.FC<
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
                  d="M352 160v192h-32V160zm-32-64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-64h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-64c0-35.3-28.7-64-64-64zM0 256c0 17.7 14.3 32 32 32h192v-64H32c-17.7 0-32 14.3-32 32"
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
                  d="M352 144c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zm-32-48c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-72h72c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72v-72c0-35.3-28.7-64-64-64zM0 256c0 13.3 10.7 24 24 24h200v-48H24c-13.3 0-24 10.7-24 24"
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
                  d="M352 128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm-32-32c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-80h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-80c0-35.3-28.7-64-64-64zM0 256c0 8.8 7.2 16 16 16h208v-32H16c-8.8 0-16 7.2-16 16"
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
                  d="M352 112c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zm-32-16c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-88h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88v-88c0-35.3-28.7-64-64-64zM0 256c0 4.4 3.6 8 8 8h216v-16H8c-4.4 0-8 3.6-8 8"
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
                  d="M32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32h192v64zm448 0h-64v-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 160v192h-32V160zm-32-64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"
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
