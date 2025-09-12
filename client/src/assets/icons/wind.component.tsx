import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WindIcon: React.FC<
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
                  d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c53 0 96-43 96-96S405 0 352 0h-32c-17.7 0-32 14.3-32 32m64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32M128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32"
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
                  d="M288 24c0 13.3 10.7 24 24 24h44c24.3 0 44 19.7 44 44s-19.7 44-44 44H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h332c50.8 0 92-41.2 92-92S406.8 0 356 0h-44c-13.3 0-24 10.7-24 24m64 368c0 13.3 10.7 24 24 24h44c50.8 0 92-41.2 92-92s-41.2-92-92-92H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h396c24.3 0 44 19.7 44 44s-19.7 44-44 44h-44c-13.3 0-24 10.7-24 24M120 512h44c50.8 0 92-41.2 92-92s-41.2-92-92-92H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h140c24.3 0 44 19.7 44 44s-19.7 44-44 44h-44c-13.3 0-24 10.7-24 24s10.7 24 24 24"
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
                  d="M288 16c0 8.8 7.2 16 16 16h64c26.5 0 48 21.5 48 48s-21.5 48-48 48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c44.2 0 80-35.8 80-80S412.2 0 368 0h-64c-8.8 0-16 7.2-16 16m64 384c0 8.8 7.2 16 16 16h56c48.6 0 88-39.4 88-88s-39.4-88-88-88H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h408c30.9 0 56 25.1 56 56s-25.1 56-56 56h-56c-8.8 0-16 7.2-16 16M112 512h64c44.2 0 80-35.8 80-80s-35.8-80-80-80H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16"
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
                  d="M288 8c0 4.4 3.6 8 8 8h64c39.8 0 72 32.2 72 72s-32.2 72-72 72H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h352c48.6 0 88-39.4 88-88S408.6 0 360 0h-64c-4.4 0-8 3.6-8 8m64 400c0 4.4 3.6 8 8 8h68c46.4 0 84-37.6 84-84s-37.6-84-84-84H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h420c37.6 0 68 30.4 68 68s-30.4 68-68 68h-68c-4.4 0-8 3.6-8 8M104 512h64c48.6 0 88-39.4 88-88s-39.4-88-88-88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c39.8 0 72 32.2 72 72s-32.2 72-72 72h-64c-4.4 0-8 3.6-8 8s3.6 8 8 8"
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
                  d="M352 384c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c53 0 96-43 96-96S405 0 352 0zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32"
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
