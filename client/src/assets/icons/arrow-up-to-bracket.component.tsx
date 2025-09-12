import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUpToBracketIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m374.6 297.4-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3zM64 160V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M369 295 241 167c-9.4-9.4-24.6-9.4-33.9 0L79 295c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87L200 488c0 13.3 10.7 24 24 24s24-10.7 24-24V241.9l87 87c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zM48 168V88c0-22.1 17.9-40 40-40h272c22.1 0 40 17.9 40 40v80c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6-39.4-88-88-88H88C39.4 0 0 39.4 0 88v80c0 13.3 10.7 24 24 24s24-10.7 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m363.3 292.7-128-128c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 214.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V214.6l100.7 100.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6M32 176V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v96c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-44.2-35.8-80-80-80H80C35.8 0 0 35.8 0 80v96c0 8.8 7.2 16 16 16s16-7.2 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m365.7 298.3-136-136c-3.1-3.1-8.2-3.1-11.3 0l-136 136c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L216 187.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8V187.3l122.3 122.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3zM16 184V88c0-39.8 32.2-72 72-72h272c39.8 0 72 32.2 72 72v96c0 4.4 3.6 8 8 8s8-3.6 8-8V88c0-48.6-39.4-88-88-88H88C39.4 0 0 39.4 0 88v96c0 4.4 3.6 8 8 8s8-3.6 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M246.6 169.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
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
