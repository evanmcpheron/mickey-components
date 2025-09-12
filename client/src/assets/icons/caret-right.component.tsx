import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CaretRightIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S63.9 115 63.9 128v256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M201.4 256 112 166.6v178.7zm45.3-22.6c12.5 12.5 12.5 32.8 0 45.3l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64 397 64 384V128c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M221.8 250.4c1.3 1.4 2.2 3.5 2.2 5.6s-.8 4.2-2.2 5.6L108.3 381.8c-1.3 1.4-3.2 2.2-5.2 2.2-3.9 0-7.1-3.2-7.1-7.1V135.2c0-3.9 3.2-7.1 7.1-7.1 2 0 3.8.8 5.2 2.2zm23.3-22L131.6 108.3c-7.4-7.8-17.7-12.3-28.4-12.3C81.5 96 64 113.5 64 135.1v241.7c0 21.6 17.5 39.1 39.1 39.1 10.8 0 21.1-4.4 28.5-12.3l113.5-120c7-7.4 10.9-17.3 10.9-27.6s-3.9-20.1-10.9-27.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M233.4 240.6c4.2 4 6.6 9.6 6.6 15.4s-2.4 11.4-6.6 15.4L101.3 396.5c-2.3 2.2-5.4 3.5-8.7 3.5-7 0-12.6-5.6-12.6-12.6V124.6c0-7 5.6-12.6 12.6-12.6 3.2 0 6.3 1.2 8.7 3.5zm11-11.6L112.3 103.8c-5.3-5-12.4-7.8-19.7-7.8C76.8 96 64 108.8 64 124.6v262.8c0 15.8 12.8 28.6 28.6 28.6 7.3 0 14.4-2.8 19.7-7.8L244.4 283c7.4-7 11.6-16.8 11.6-27s-4.2-20-11.6-27"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S63.9 115 63.9 128v256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
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
