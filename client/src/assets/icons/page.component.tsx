import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PageIcon: React.FC<
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
                  d="M64 512h256c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64"
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
                  d="M64 464h256c8.8 0 16-7.2 16-16V138.5c0-4.2-1.7-8.3-4.7-11.3l-74.5-74.5c-3-3-7.1-4.7-11.3-4.7H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m256 48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64"
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
                  d="M64 480h256c17.7 0 32-14.3 32-32V138.5c0-8.5-3.4-16.6-9.4-22.6l-74.5-74.5c-6-6-14.1-9.4-22.6-9.4H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32m256 32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64"
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
                  d="M64 496h256c26.5 0 48-21.5 48-48V138.5c0-12.7-5.1-24.9-14.1-33.9l-74.5-74.5c-9-9-21.2-14.1-33.9-14.1H64c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48m256 16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64"
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
                  d="M64 512h256c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
