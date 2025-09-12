import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NotesIcon: React.FC<
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
                  d="M160 32c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h179.2c4.3 0 8.6-.4 12.8-1.3V320c0-17.7 14.3-32 32-32h94.7c.9-4.2 1.3-8.5 1.3-12.8V96c0-35.3-28.7-64-64-64zm224 320v64l96-96h-96zm-88 112H136c-48.6 0-88-39.4-88-88V152c0-13.3-10.7-24-24-24S0 138.7 0 152v224c0 75.1 60.9 136 136 136h160c13.3 0 24-10.7 24-24s-10.7-24-24-24"
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
                  d="M144 96c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v192h-48c-17.7 0-32 14.3-32 32v48H160c-8.8 0-16-7.2-16-16zm-48 0v256c0 35.3 28.7 64 64 64h197.5c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m224 392c0-13.3-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V152c0-13.3-10.7-24-24-24S0 138.7 0 152v224c0 75.1 60.9 136 136 136h160c13.3 0 24-10.7 24-24"
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
                  d="M128 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v160h-80c-26.5 0-48 21.5-48 48v80H160c-17.7 0-32-14.3-32-32zm318.2 192c-1.6 4.5-4.2 8.7-7.6 12.1l-74.5 74.5c-3.4 3.4-7.6 6-12.1 7.6V304c0-8.8 7.2-16 16-16zM96 96v256c0 35.3 28.7 64 64 64h181.5c17 0 33.3-6.7 45.3-18.7l74.5-74.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m224 400c0-8.8-7.2-16-16-16H128c-53 0-96-43-96-96V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v240c0 70.7 57.3 128 128 128h176c8.8 0 16-7.2 16-16"
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
                  d="M112 96c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48v181.5q0 5.4-1.2 10.5H392c-22.1 0-40 17.9-40 40v70.8q-5.1 1.2-10.5 1.2H160c-26.5 0-48-21.5-48-48zm344 208c-1.8 2.7-3.8 5.1-6.1 7.4l-74.5 74.5c-2.3 2.3-4.8 4.3-7.4 6.1v-64c0-13.3 10.7-24 24-24zM96 96v256c0 35.3 28.7 64 64 64h181.5c17 0 33.3-6.7 45.3-18.7l74.5-74.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m-32 32c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48z"
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
                  d="M160 32c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192v-96c0-17.7 14.3-32 32-32h96V96c0-35.3-28.7-64-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M296 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24v224c0 48.6 39.4 88 88 88zm56-48v-96c0-17.7 14.3-32 32-32h96z"
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
