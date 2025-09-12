import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TarpIcon: React.FC<
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
                  d="M576 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h352V320c0-17.7 14.3-32 32-32h128zM448 448l128-128H448zM96 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M48 128c0-8.8 7.2-16 16-16h448c8.8 0 16 7.2 16 16v160h-80c-17.7 0-32 14.3-32 32v80H64c-8.8 0-16-7.2-16-16zm528 0c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h364.1c12.7 0 24.9-5.1 33.9-14.1l99.9-99.9c9-9 14.1-21.2 14.1-33.9zm-464 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M32 384V128c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v128H432c-26.5 0-48 21.5-48 48v112H64c-17.7 0-32-14.3-32-32m391.4 27.3c-2.1 2.1-4.6 3.5-7.4 4.2V304c0-8.8 7.2-16 16-16h111.5c-.7 2.8-2.1 5.4-4.2 7.4zM576 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h348.1c12.7 0 24.9-5.1 33.9-14.1l115.9-115.8c9-9 14.1-21.2 14.1-33.9zM96 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M16 128c0-26.5 21.5-48 48-48h448c26.5 0 48 21.5 48 48v140.1c0 1.3-.1 2.6-.2 3.9H440c-22.1 0-40 17.9-40 40v119.8c-1.3.2-2.6.2-3.9.2H64c-26.5 0-48-21.5-48-48zm402.7 294.6q-1.35 1.35-2.7 2.4V312c0-13.3 10.7-24 24-24h113.1q-1.2 1.5-2.4 2.7zM576 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h332.1c12.7 0 24.9-5.1 33.9-14.1l131.9-131.8c9-9 14.1-21.2 14.1-33.9zm-472 24a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M512 64c35.3 0 64 28.7 64 64v160H448c-17.7 0-32 14.3-32 32v128H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM96 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M576 288 416 448V320c0-17.7 14.3-32 32-32z"
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
