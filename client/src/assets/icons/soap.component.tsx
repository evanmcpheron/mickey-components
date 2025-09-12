import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SoapIcon: React.FC<
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
                  d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m112 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0 160c0 27.6-11.7 52.5-30.4 70.1 36.5 13.6 62.4 48.7 62.4 89.9 0 53-43 96-96 96H160c-53 0-96-43-96-96s43-96 96-96h88.4c-15.2-17-24.4-39.4-24.4-64H96c-53 0-96 43-96 96v128c0 53 43 96 96 96h320c53 0 96-43 96-96V288c0-53-43-96-96-96m-256 96c-35.3 0-64 28.7-64 64s28.7 64 64 64h192c35.3 0 64-28.7 64-64s-28.7-64-64-64H160"
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
                  d="M208 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96M96 192h113.1c2.5 17.7 9.2 34 18.9 48H96c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48h-4.1c9.6-13.7 16.1-29.6 18.8-46.9 46 7.1 81.3 46.9 81.3 94.9v128c0 53-43 96-96 96H96c-53 0-96-43-96-96V288c0-53 43-96 96-96m224 96h32c35.3 0 64 28.7 64 64s-28.7 64-64 64H160c-35.3 0-64-28.7-64-64s28.7-64 64-64zm-192 64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32 14.3-32 32m192-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-112a80 80 0 1 1 0 160 80 80 0 1 1 0-160m64-96a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M224 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0M96 192h129.3c1.9 11.5 5.9 22.3 11.5 32H96c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64h-12.8c5.6-9.7 9.6-20.5 11.5-32h1.3c53 0 96 43 96 96v128c0 53-43 96-96 96H96c-53 0-96-43-96-96V288c0-53 43-96 96-96m64 80h192c44.2 0 80 35.8 80 80s-35.8 80-80 80H160c-44.2 0-80-35.8-80-80s35.8-80 80-80m-48 80c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48s-21.5-48-48-48H160c-26.5 0-48 21.5-48 48M400 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-48 176a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M240 48a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0M96 192h129.3c.9 5.5 2.3 10.9 4.1 16H96c-44.2 0-80 35.8-80 80v128c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V288c0-44.2-35.8-80-80-80h-5.5c1.8-5.1 3.2-10.5 4.1-16h1.4c53 0 96 43 96 96v128c0 53-43 96-96 96H96c-53 0-96-43-96-96V288c0-53 43-96 96-96M80 352c0-44.2 35.8-80 80-80h192c44.2 0 80 35.8 80 80s-35.8 80-80 80H160c-44.2 0-80-35.8-80-80m16 0c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64s-28.7-64-64-64H160c-35.3 0-64 28.7-64 64M384 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-16 176a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m96 144a64 64 0 1 1 128 0 64 64 0 1 1-128 0M384 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M385.6 262.1c18.7-17.6 30.4-42.5 30.4-70.1 53 0 96 43 96 96v128c0 53-43 96-96 96H96c-53 0-96-43-96-96V288c0-53 43-96 96-96h128c0 24.6 9.2 47 24.4 64H160c-53 0-96 43-96 96s43 96 96 96h192c53 0 96-43 96-96 0-41.2-25.9-76.3-62.4-89.9M320 288h32c35.3 0 64 28.7 64 64s-28.7 64-64 64H160c-35.3 0-64-28.7-64-64s28.7-64 64-64z"
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
