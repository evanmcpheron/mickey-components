import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NotebookIcon: React.FC<
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
                  d="M64 48v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v56c0 26.5 21.5 48 48 48h80V0h-80C85.5 0 64 21.5 64 48M432 0H224v512h208c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48"
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
                  d="M240 48h176c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H240zm-48 0v416h-64c-8.8 0-16-7.2-16-16v-32h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v-88h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v-88h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24V64c0-8.8 7.2-16 16-16zM64 416v32c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v32H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v88H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v88H24c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
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
                  d="M192 32h-64c-17.7 0-32 14.3-32 32v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v96h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v96h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v48c0 17.7 14.3 32 32 32h64zm32 448h192c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224zm-16 32h-80c-35.3 0-64-28.7-64-64v-48H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-96H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-96H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V64c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64z"
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
                  d="M208 16h208c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H208zm-16 0v480h-64c-26.5 0-48-21.5-48-48v-56h40c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V264h40c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V136h40c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V64c0-26.5 21.5-48 48-48zM64 392v56c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v56H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v112H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v112H8c-4.4 0-8 3.6-8 8s3.6 8 8 8z"
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
                  d="M192 0h240c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 0C85.5 0 64 21.5 64 48v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v56c0 26.5 21.5 48 48 48h80V0z"
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
