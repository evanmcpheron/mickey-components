import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LitecoinSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64v149.6l-40.8 11.6c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22l23.2-6.7V448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V261.9l136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 56c0-13.3-10.7-24-24-24S64 42.7 64 56v164.5l-46.2 12.3C5 236.2-2.6 249.4.8 262.2s16.6 20.4 29.4 17l33.8-9V456c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H112V257.4l158.2-42.2c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17L112 207.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v179.5l-51.9 13C3.5 242.6-1.7 251.3.5 259.9s10.8 13.8 19.4 11.6l44.1-11V440c0 22.1 17.9 40 40 40h264c8.8 0 16-7.2 16-16s-7.2-16-16-16H104c-4.4 0-8-3.6-8-8V252.5l179.9-45c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6L96 219.5z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v190.8L6.2 248.2c-4.3 1-7 5.3-6 9.6s5.3 7 9.6 6L80 247.3V440c0 22.1 17.9 40 40 40h256c4.4 0 8-3.6 8-8s-3.6-8-8-8H120c-13.3 0-24-10.7-24-24V243.5l185.8-43.7c4.3-1 7-5.3 6-9.6s-5.3-7-9.6-6L96 227.1z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m64 213.6-40.8 11.6c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22l23.2-6.7zm64 48.3 136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 32c17.7 0 32 14.3 32 32v352h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32"
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
