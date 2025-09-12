import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BracketSquareRightIcon: React.FC<
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
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 96c0-35.3-28.7-64-64-64H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v320H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c35.3 0 64-28.7 64-64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 88c0-30.9-25.1-56-56-56H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c4.4 0 8 3.6 8 8v336c0 4.4-3.6 8-8 8H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c30.9 0 56-25.1 56-56z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 80c0-26.5-21.5-48-48-48H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c26.5 0 48-21.5 48-48z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 72c0-22.1-17.9-40-40-40H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c13.3 0 24 10.7 24 24v368c0 13.3-10.7 24-24 24H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c22.1 0 40-17.9 40-40z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 96c0-35.3-28.7-64-64-64H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v320H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c35.3 0 64-28.7 64-64z"
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
