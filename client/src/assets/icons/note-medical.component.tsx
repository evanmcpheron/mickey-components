import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NoteMedicalIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224H336c-26.5 0-48 21.5-48 48v112H64c-35.3 0-64-28.7-64-64zm402.7 256H448l-32 32-64 64-32 32V368c0-8.8 7.2-16 16-16zM192 144v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
                  d="M384 80c8.8 0 16 7.2 16 16v224h-80c-17.7 0-32 14.3-32 32v80H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 480h229.5c17 0 33.3-6.7 45.3-18.7l90.5-90.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64m128-336v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
                  d="M384 64c17.7 0 32 14.3 32 32v213.5c0 3.6-.6 7.2-1.8 10.5H336c-26.5 0-48 21.5-48 48v78.2c-3.3 1.2-6.9 1.8-10.5 1.8H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm2.7 288L320 418.7V368c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h213.5c17 0 33.3-6.7 45.3-18.7l106.5-106.6c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64zm112 112v32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m64 0v48c0 8.8 7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16v48h-32v-48c0-8.8-7.2-16-16-16h-48v-32h48c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3v-48z"
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
                  d="M384 48c26.5 0 48 21.5 48 48v220.1c0 1.3-.1 2.6-.2 3.9H336c-26.5 0-48 21.5-48 48v95.8c-1.3.2-2.6.2-3.9.2H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zm-77.3 406.6q-1.35 1.35-2.7 2.4v-89c0-17.7 14.3-32 32-32h89.1q-1.2 1.5-2.4 2.7zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h220.1c12.7 0 24.9-5.1 33.9-14.1l115.9-115.8c9-9 14.1-21.2 14.1-33.9V96c0-35.3-28.7-64-64-64zm136 104c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8zm8-24c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h48v48c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24z"
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224H320c-17.7 0-32 14.3-32 32v128H64c-35.3 0-64-28.7-64-64zm192 48v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 144c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48zm96 336V352c0-17.7 14.3-32 32-32h128v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7z"
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
