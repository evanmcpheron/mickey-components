import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserHeadsetIcon: React.FC<
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
                  d="M224 32c-88.4 0-160 71.6-160 160v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16C32 86 118 0 224 0s192 86 192 192v16c0 61.9-50.1 112-112 112h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32h32c44.2 0 80-35.8 80-80v-16c0-88.4-71.6-160-160-160M96 192c0-70.7 57.3-128 128-128s128 57.3 128 128c0 13.9-2.2 27.3-6.3 39.8-8.3 14.5-23.9 24.2-41.7 24.2h-8.6c-11.1-19.1-31.7-32-55.4-32h-32c-35.3 0-64 28.7-64 64 0 1.4 0 2.7.1 4C114.8 268.6 96 232.5 96 192m128 160h89.6c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4 0 412.2 60.2 352 134.4 352H224"
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
                  d="M224 32c-88.4 0-160 71.6-160 160v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16C32 86 118 0 224 0s192 86 192 192v16c0 61.9-50.1 112-112 112h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32h32c44.2 0 80-35.8 80-80v-16c0-88.4-71.6-160-160-160m0 32c70.7 0 128 57.3 128 128 0 13.9-2.2 27.3-6.3 39.8-8.3 14.5-23.9 24.2-41.7 24.2h-8.6c-2.7-4.7-6.1-9.1-9.9-12.9 11.6-13.9 18.5-31.7 18.5-51.1 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 19.4 6.9 37.2 18.4 51.1C151 254.6 144 270.5 144 288c0 1.4 0 2.7.1 4C114.8 268.6 96 232.5 96 192c0-70.7 57.3-128 128-128m-16 288h105.6c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4 0 412.2 60.2 352 134.4 352H208m105.6 48H134.4c-40 0-73.6 27.1-83.5 64h346.2c-9.9-36.9-43.5-64-83.5-64"
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
                  d="M224 32c-88.4 0-160 71.6-160 160v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16C32 86 118 0 224 0s192 86 192 192v16c0 61.9-50.1 112-112 112h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32h32c44.2 0 80-35.8 80-80v-16c0-88.4-71.6-160-160-160m0 32c70.7 0 128 57.3 128 128 0 13.9-2.2 27.3-6.3 39.8-8.3 14.5-23.9 24.2-41.7 24.2h-8.4c15.2-17 24.4-39.4 24.4-64 0-53-43-96-96-96s-96 43-96 96c0 24.6 9.3 47.1 24.5 64.1-5.4 9.4-8.5 20.3-8.5 31.9 0 1.4 0 2.7.1 4C114.8 268.6 96 232.5 96 192c0-70.7 57.3-128 128-128m-16 288h105.6c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4 0 412.2 60.2 352 134.4 352zm105.6 32H134.4c-54.4 0-98.9 42.4-102.2 96h383.6c-3.3-53.6-47.8-96-102.2-96"
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
                  d="M224 32c-88.4 0-160 71.6-160 160v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-97.2 78.8-176 176-176s176 78.8 176 176v24c0 57.4-46.6 104-104 104h-88c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32 0 5.8-1.6 11.3-4.3 16H296c48.6 0 88-39.4 88-88v-24c0-88.4-71.6-160-160-160m32 256c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16m96-96c0 25.5-7.5 49.3-20.3 69.3-7.6 4-16.2 6.4-25.4 6.7 18.4-20 29.7-46.6 29.7-76 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 31.5 13 60 33.9 80.3-1.3 5-1.9 10.3-1.9 15.7 0 1.4 0 2.7.1 4C114.8 268.6 96 232.5 96 192c0-70.7 57.3-128 128-128s128 57.3 128 128M208 352h105.6c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4 0 412.2 60.2 352 134.4 352zM16 486.4c0 5.3 4.3 9.6 9.6 9.6h396.8c5.3 0 9.6-4.3 9.6-9.6C432 421 379 368 313.6 368H134.4C69 368 16 421 16 486.4"
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
                  d="M96 192c0-70.7 57.3-128 128-128s128 57.3 128 128c0 13.9-2.2 27.3-6.3 39.8-8.3 14.5-23.9 24.2-41.7 24.2h-8.6c-11.1-19.1-31.7-32-55.4-32h-32c-35.3 0-64 28.7-64 64 0 1.4 0 2.7.1 4C114.8 268.6 96 232.5 96 192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 32c-88.4 0-160 71.6-160 160v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16C32 86 118 0 224 0s192 86 192 192v16c0 61.9-50.1 112-112 112h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32h32c44.2 0 80-35.8 80-80v-16c0-88.4-71.6-160-160-160m-89.6 320h179.2c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4 0 412.2 60.2 352 134.4 352"
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
