import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MugHotIcon: React.FC<
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
                  d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.2 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24M32 192c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H32m352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.2 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24"
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
                  d="M88 0c13.3 0 24 10.7 24 24 0 16.1 7.5 23.7 23.8 37.9l1.1 1C152.6 76.6 176 97.1 176 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C87.4 83.4 64 62.9 64 24 64 10.7 74.7 0 88 0M48 416c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V240H48zM0 224c0-17.7 14.3-32 32-32h368c61.9 0 112 50.1 112 112s-50.1 112-112 112h-16c0 53-43 96-96 96H96c-53 0-96-43-96-96zm384 144h16c35.3 0 64-28.7 64-64s-28.7-64-64-64h-16zM224 24c0 16.1 7.5 23.7 23.8 37.9l1.1 1C264.6 76.6 288 97.1 288 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-16.1-7.5-23.7-23.8-37.9l-1.1-1C199.4 83.4 176 62.9 176 24c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M80 0c-8.8 0-16 7.2-16 16 0 24.7 9.8 48.5 27.3 65.9l18.7 18.7c11.5 11.6 18 27.2 18 43.4 0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.7-9.8-48.5-27.3-65.9l-18.8-18.8C102.5 47.8 96 32.2 96 16c0-8.8-7.2-16-16-16M32 224h320v192c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm352 0h16c44.2 0 80 35.8 80 80s-35.8 80-80 80h-16zm0 192h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96M224 16c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 24.7 9.8 48.5 27.3 65.9l18.7 18.7c11.5 11.6 18 27.2 18 43.4 0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.7-9.8-48.5-27.3-65.9l-18.8-18.8C230.5 47.8 224 32.2 224 16"
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
                  d="M80 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 27.3 5.1 45.2 13.6 57.9C86 78.4 97.1 85 106.7 90.6l.4.3c9.9 5.9 18.2 10.9 24.4 20.1s10.9 23.5 10.9 49c0 4.4 3.6 8 8 8s8-3.6 8-8c0-27.3-5.1-45.2-13.6-57.9-8.4-12.5-19.5-19.1-29.1-24.7l-.4-.3c-9.9-5.9-18.2-10.9-24.4-20.1S80 33.5 80 8m129.6 0c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 27.3 5.1 45.2 13.6 57.9 8.4 12.5 19.5 19.1 29.1 24.7l.4.3c9.9 5.9 18.2 10.9 24.4 20.1s10.9 23.5 10.9 49c0 4.4 3.6 8 8 8s8-3.6 8-8c0-27.3-5.1-45.2-13.6-57.9-8.4-12.5-19.5-19.1-29.1-24.7l-.4-.3c-9.9-5.9-18.2-10.9-24.4-20.1s-10.9-23.5-10.9-49M344 208h24v208c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80V224c0-8.8 7.2-16 16-16zm40 176V208h24c48.6 0 88 39.4 88 88s-39.4 88-88 88zm0 32v-16h24c57.4 0 104-46.6 104-104s-46.6-104-104-104H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96"
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
                  d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.2 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24m112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.2 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 192c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H32m352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16z"
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
