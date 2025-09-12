import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h96c123.7 0 224 100.3 224 224S283.7 480 160 480H64c-35.3 0-64-28.7-64-64zm160 0H64v320h96c88.4 0 160-71.6 160-160S248.4 96 160 96"
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
                  d="M56 80c-4.4 0-8 3.6-8 8v336c0 4.4 3.6 8 8 8h104c97.2 0 176-78.8 176-176S257.2 80 160 80zM0 88c0-30.9 25.1-56 56-56h104c123.7 0 224 100.3 224 224S283.7 480 160 480H56c-30.9 0-56-25.1-56-56z"
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
                  d="M48 64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h112c106 0 192-86 192-192S266 64 160 64zM0 80c0-26.5 21.5-48 48-48h112c123.7 0 224 100.3 224 224S283.7 480 160 480H48c-26.5 0-48-21.5-48-48z"
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
                  d="M32 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h128c114.9 0 208-93.1 208-208S274.9 48 160 48zM0 64c0-17.7 14.3-32 32-32h128c123.7 0 224 100.3 224 224S283.7 480 160 480H32c-17.7 0-32-14.3-32-32z"
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
                  d="M0 96c0-35.3 28.7-64 64-64h96c123.7 0 224 100.3 224 224S283.7 480 160 480H64c-35.3 0-64-28.7-64-64zm160 0H64v320h96c88.4 0 160-71.6 160-160S248.4 96 160 96"
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
