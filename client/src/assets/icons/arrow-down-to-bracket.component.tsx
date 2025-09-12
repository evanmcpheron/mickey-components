import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowDownToBracketIcon: React.FC<
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
                  d="m374.6 214.6-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l73.4 73.4V32c0-17.7 14.3-32 32-32s32 14.3 32 32v210.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM64 352v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 53-43 96-96 96H96c-53 0-96-43-96-96v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  d="M369 217 241 345c-9.4 9.4-24.6 9.4-33.9 0L79 217c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87L200 24c0-13.3 10.7-24 24-24s24 10.7 24 24v246.1l87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM48 344v80c0 22.1 17.9 40 40 40h272c22.1 0 40-17.9 40-40v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88v-80c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="m363.3 219.3-128 128c-6.2 6.2-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L208 297.4V16c0-8.8 7.2-16 16-16s16 7.2 16 16v281.4l100.7-100.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M32 336v96c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80v-96c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="m365.7 213.7-136 136c-3.1 3.1-8.2 3.1-11.3 0l-136-136c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L216 324.7V8c0-4.4 3.6-8 8-8s8 3.6 8 8v316.7l122.3-122.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM16 328v96c0 39.8 32.2 72 72 72h272c39.8 0 72-32.2 72-72v-96c0-4.4 3.6-8 8-8s8 3.6 8 8v96c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88v-96c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M0 352v64c0 53 43 96 96 96h256c53 0 96-43 96-96v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64c0-17.7-14.3-32-32-32S0 334.3 0 352"
                />
                <path
                  className="aps-icon-foreground"
                  d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v210.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"
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
