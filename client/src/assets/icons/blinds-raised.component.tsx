import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlindsRaisedIcon: React.FC<
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
                  d="M32 0C14.3 0 0 14.3 0 32c0 11.9 6.5 22.2 16.1 27.8L1.2 100.6c-.8 2.2-1.2 4.6-1.2 7C0 118.9 9.1 128 20.4 128H128V64h32v64h331.6c11.3 0 20.4-9.1 20.4-20.4 0-2.4-.4-4.7-1.2-7l-14.9-40.8C505.5 54.2 512 43.9 512 32c0-17.7-14.3-32-32-32zm112 512c26.5 0 48-21.5 48-48 0-20.9-13.4-38.7-32-45.3V224h331.9c11.1 0 20.1-9 20.1-20.1 0-2.6-.5-5.1-1.4-7.5L496 160H160v64h-32v-64H16L1.4 196.4c-1 2.4-1.4 4.9-1.4 7.5C0 215 9 224 20.1 224H128v194.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48"
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
                  d="M24 0C10.7 0 0 10.7 0 24c0 10.6 6.9 19.6 16.4 22.8l-15 45C.5 94.6 0 97.5 0 100.5 0 115.7 12.3 128 27.5 128H112V80H55.9l10.7-32H144v324.1c-28 9.9-48 36.5-48 67.9 0 39.8 32.2 72 72 72s72-32.2 72-72c0-31.4-20-58-48-67.9V48h253.4l10.7 32H224v48h260.5c15.2 0 27.5-12.3 27.5-27.5 0-3-.5-5.9-1.4-8.7l-15-45C505.1 43.6 512 34.6 512 24c0-13.3-10.7-24-24-24H24m120 440a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-32-232H55.5l15.4-48H20.5L1.3 219.9c-.9 2.7-1.3 5.6-1.3 8.4C0 243.6 12.4 256 27.7 256H112zm112 48h260.3c15.3 0 27.7-12.4 27.7-27.7 0-2.9-.4-5.7-1.3-8.4L491.5 160h-50.4l15.4 48H224z"
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
                  d="M32 0C14.3 0 0 14.3 0 32v32c0 17.7 14.3 32 32 32h96v322.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V96h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm0 32h448v32H32zm96 432a16 16 0 1 1 32 0 16 16 0 1 1-32 0M35.9 160l9.8-32H12.3L.9 165c-.6 2-.9 4.1-.9 6.1C0 182.7 9.3 192 20.9 192H96v-32zm0 96 9.8-32H12.3L.9 261c-.6 2-.9 4.1-.9 6.1C0 278.7 9.3 288 20.9 288H96v-32zm156.1 0v32h299.1c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-11.4-37h-33.5l9.8 32zm0-96v32h299.1c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-11.4-37h-33.5l9.8 32z"
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
                  d="M32 16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V32c0-8.8-7.2-16-16-16zM0 32C0 14.3 14.3 0 32 0h448c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H152v320.7c22.7 3.8 40 23.5 40 47.3 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-23.8 17.3-43.5 40-47.3V96H32C14.3 96 0 81.7 0 64zm176 432a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-72-288v16H19.7C8.8 192 0 183.2 0 172.3c0-2.8.6-5.7 1.8-8.2L18.5 128h17.6l-19.8 42.8q-.3.75-.3 1.5c0 2 1.6 3.7 3.7 3.7zm80 16v-16h308.3c2 0 3.7-1.6 3.7-3.7 0-.5-.1-1.1-.3-1.5L475.9 128h17.6l16.6 36.1c1.2 2.6 1.8 5.4 1.8 8.2 0 10.9-8.8 19.7-19.7 19.7zm308.3 80c2 0 3.7-1.6 3.7-3.7 0-.5-.1-1.1-.3-1.5L475.9 224h17.6l16.6 36.1c1.2 2.6 1.8 5.4 1.8 8.2 0 10.9-8.8 19.7-19.7 19.7H184v-16zM104 272v16H19.7C8.8 288 0 279.2 0 268.3c0-2.8.6-5.7 1.8-8.2L18.5 224h17.6l-19.8 42.8q-.3.75-.3 1.5c0 2 1.6 3.7 3.7 3.7z"
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
                  d="M128 128H20.4C9.1 128 0 118.9 0 107.6c0-2.4.4-4.7 1.2-7L32 16h448l30.8 84.6c.8 2.2 1.2 4.6 1.2 7 0 11.3-9.1 20.4-20.4 20.4H160V32h-32zm0 32v64H20.1C9 224 0 215 0 203.9c0-2.6.5-5.1 1.4-7.5L16 160zm32 64v-64h336l14.6 36.4c1 2.4 1.4 4.9 1.4 7.5 0 11.1-9 20.1-20.1 20.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 32C0 14.3 14.3 0 32 0h448c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v354.7c18.6 6.6 32 24.4 32 45.3 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V64H32C14.3 64 0 49.7 0 32"
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
