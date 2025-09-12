import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrafficConeIcon: React.FC<
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
                  d="M173.7 128 216 20.3C220.8 8.1 232.7 0 245.8 0h20.4c13.2 0 25 8.1 29.8 20.3L338.3 128zm-25.1 64h214.8l37.7 96H110.9zM48 448l37.7-96h340.6l37.7 96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
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
                  d="M217.8 15c3.7-9 12.5-15 22.2-15h32c9.8 0 18.6 5.9 22.2 15l182.7 449H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h11.1zM386 368H126l-39.1 96h338.2l-39-96zm-19.5-48-45.6-112H191.1l-45.6 112zM210.6 160h90.8L256 48.4z"
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
                  d="M248.2 32h15.5c3.3 0 6.2 2 7.4 5l49.2 123H191.6l49.2-123c1.2-3 4.2-5 7.4-5m84.9 160 51.2 128H127.6l51.2-128h154.4zm64 160 51.2 128H63.6l51.2-128h282.4zm-186-326.9L29.2 480H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-13.2L300.9 25.1C294.8 10 280.1 0 263.8 0h-15.6c-16.4 0-31.1 10-37.1 25.1"
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
                  d="M232.9 16h46.2c6.8 0 12.8 4.3 15.1 10.6L341.8 160H170.2l47.6-133.4c2.3-6.4 8.3-10.6 15.1-10.6m114.6 160 51.4 144H113.1l51.4-144zm57.1 160 43.8 122.7c1.5 4.2 6.1 6.3 10.2 4.8s6.3-6.1 4.8-10.2L309.2 21.2C304.7 8.5 292.6 0 279.1 0h-46.2c-13.5 0-25.6 8.5-30.1 21.2L48.5 453.3c-1.5 4.2.7 8.7 4.8 10.2s8.7-.7 10.2-4.8L107.4 336zM0 504c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8"
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
                  d="M173.7 128h164.6l25.1 64H148.6zm-62.8 160h290.2l25.1 64H85.7l25.1-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M173.7 128 216 20.3C220.8 8.1 232.7 0 245.8 0h20.4c13.2 0 25 8.1 29.8 20.3L338.3 128zm-25.1 64h214.8l37.7 96H110.9zM48 448l37.7-96h340.6l37.7 96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
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
