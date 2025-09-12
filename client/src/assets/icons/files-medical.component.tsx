import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilesMedicalIcon: React.FC<
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
                  d="M160 0h160v96c0 17.7 14.3 32 32 32h96v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64m256 64 32 32h-96V0l32 32zM24 96c13.3 0 24 10.7 24 24v256c0 48.6 39.4 88 88 88h192c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24m216 80v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
                  d="M384 368H160c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h160v48c0 17.7 14.3 32 32 32h48v224c0 8.8-7.2 16-16 16m-224 48h224c35.3 0 64-28.7 64-64V122.5c0-17-6.7-33.3-18.7-45.3l-58.6-58.5C358.7 6.7 342.5 0 325.5 0H160c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h192c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88zm197.3 72v37.3H208c-8.8 0-16 7.2-16 16v21.3c0 8.8 7.2 16 16 16h37.3V320c0 8.8 7.2 16 16 16h21.3c8.8 0 16-7.2 16-16v-37.3H336c8.8 0 16-7.2 16-16v-21.4c0-8.8-7.2-16-16-16h-37.3V192c0-8.8-7.2-16-16-16h-21.4c-8.8 0-16 7.2-16 16"
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
                  d="M384 384c17.7 0 32-14.3 32-32V144h-80c-17.7 0-32-14.3-32-32V32H160c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32zm6-272-54-54.5V112zM96 64c0-35.3 28.7-64 64-64h144c12.8 0 25.1 5.1 34.1 14.2l96 96.8a48 48 0 0 1 13.9 33.8V352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zM16 96c8.8 0 16 7.2 16 16v272c0 53 43 96 96 96h208c8.8 0 16 7.2 16 16s-7.2 16-16 16H128C57.3 512 0 454.7 0 384V112c0-8.8 7.2-16 16-16m245.3 64h21.3c17.7 0 32 14.3 32 32v21.3H336c17.7 0 32 14.3 32 32v21.3c0 17.7-14.3 32-32 32h-21.3V320c0 17.7-14.3 32-32 32h-21.4c-17.7 0-32-14.3-32-32v-21.3H208c-17.7 0-32-14.3-32-32v-21.4c0-17.7 14.3-32 32-32h21.3V192c0-17.7 14.3-32 32-32m0 32v37.3c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7H208v21.3h37.3c8.8 0 16 7.2 16 16V320h21.3v-37.3c0-8.8 7.2-16 16-16h37.3v-21.4h-37.2c-8.8 0-16-7.2-16-16V192z"
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
                  d="M384 400H192c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h132.1c4.1 0 8.1.8 11.9 2.3V88c0 13.3 10.7 24 24 24h69.7c1.5 3.7 2.3 7.8 2.3 11.9V352c0 26.5-21.5 48-48 48m55.1-304c-1.5-2.1-3.2-4.2-5.1-6.1l-75.9-75.8c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V123.9c0-9.5-2.8-18.7-8-26.5V96zm-21.7 0H360c-4.4 0-8-3.6-8-8V30.6zM96 96H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48h32zm173.3 89.3c0-4.4 3.6-8 8-8h21.3c4.4 0 8 3.6 8 8v44c0 4.4 3.6 8 8 8h44c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-44c-4.4 0-8 3.6-8 8v44c0 4.4-3.6 8-8 8h-21.3c-4.4 0-8-3.6-8-8v-44c0-4.4-3.6-8-8-8h-44c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8h44c2.1 0 4.2-.8 5.7-2.3s2.3-3.5 2.3-5.7zm8-24c-13.3 0-24 10.7-24 24v36h-36c-13.3 0-24 10.7-24 24v21.3c0 13.3 10.7 24 24 24h36v36c0 13.3 10.7 24 24 24h21.3c13.3 0 24-10.7 24-24v-36h36c13.3 0 24-10.7 24-24v-21.3c0-13.3-10.7-24-24-24h-36v-36c0-13.3-10.7-24-24-24z"
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
                  d="M352 0H160c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V96h-64c-17.7 0-32-14.3-32-32zM240 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 64V0l96 96h-64c-17.7 0-32-14.3-32-32M24 96c13.3 0 24 10.7 24 24v256c0 48.6 39.4 88 88 88h192c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24m216 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
