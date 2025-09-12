import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserUnlockIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 128a128 128 0 1 1 256 0 128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c43.6 0 83.6 15.7 114.6 41.7q-.3 3.15-.3 6.3v128c0 11.7 3.1 22.6 8.6 32H29.7C13.3 512 0 498.7 0 482.3M496 272v48h112c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80s80 35.8 80 80h-48c0-17.7-14.3-32-32-32s-32 14.3-32 32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m208 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M49.3 464c8.9-63.3 63.3-112 129-112h91.4c49.3 0 92.1 27.3 114.3 67.7V352q0-3.15.3-6.3c-31-26-71-41.7-114.6-41.7h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h362.9c-5.4-9.4-8.6-20.3-8.6-32v-16zM496 272c0-17.7 14.3-32 32-32s32 14.3 32 32h48c0-44.2-35.8-80-80-80s-80 35.8-80 80v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H496z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-224a128 128 0 1 1 0 256 128 128 0 1 1 0-256m-45.7 336c-80 0-145 64.3-146.3 144h352c0 11.7 3.1 22.6 8.6 32H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304h91.4c43.6 0 83.6 15.7 114.6 41.7q-.3 3.15-.3 6.3v39c-26.8-33.5-68-55-114.3-55zM480 272v48h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80s80 35.8 80 80h-32c0-26.5-21.5-48-48-48s-48 21.5-48 48m-32 208h160V352H448z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-240a128 128 0 1 1 0 256 128 128 0 1 1 0-256m-45.7 320C88.7 320 16 392.7 16 482.3c0 7.6 6.1 13.7 13.7 13.7H386c1.5 5.7 3.7 11 6.5 16H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304h91.4c43.6 0 83.6 15.7 114.6 41.7q-.3 3.15-.3 6.3v15.1C354.7 338 314.3 320 269.7 320zM480 256v64h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h16v-64c0-35.3 28.7-64 64-64s64 28.7 64 64v16h-16v-16c0-26.5-21.5-48-48-48s-48 21.5-48 48m-16 80h-16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H464"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 128a128 128 0 1 1 256 0 128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c43.6 0 83.6 15.7 114.6 41.7q-.3 3.15-.3 6.3v128c0 11.7 3.1 22.6 8.6 32H29.7C13.3 512 0 498.7 0 482.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M528 240c-17.7 0-32 14.3-32 32v48h112c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80s80 35.8 80 80h-48c0-17.7-14.3-32-32-32"
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
