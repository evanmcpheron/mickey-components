import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SinkIcon: React.FC<
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
                  d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32 14.3 32 32 32 32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96v192h-64v-24c0-30.9-25.1-56-56-56H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v24H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v-24c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-30.9 0-56 25.1-56 56v24h-64zm192 320v-32H32v32c0 53 43 96 96 96h256c53 0 96-43 96-96"
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
                  d="M280 88c0-22.1 17.9-40 40-40s40 17.9 40 40v24c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6-39.4-88-88-88s-88 39.4-88 88v200h-72v-24c0-30.9-25.1-56-56-56H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88v-24c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-30.9 0-56 25.1-56 56v24h-72zM32 368v24c0 66.3 53.7 120 120 120h208c66.3 0 120-53.7 120-120v-24h-48v24c0 39.8-32.2 72-72 72H152c-39.8 0-72-32.2-72-72v-24z"
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
                  d="M272 80c0-26.5 21.5-48 48-48s48 21.5 48 48v32c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-44.2-35.8-80-80-80s-80 35.8-80 80v208h-80v-16c0-26.5-21.5-48-48-48H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16 7.2 16 16v16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H384v-16c0-8.8 7.2-16 16-16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-26.5 0-48 21.5-48 48v16h-80zM32 352v48c0 61.9 50.1 112 112 112h224c61.9 0 112-50.1 112-112v-48h-32v48c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80v-48z"
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
                  d="M264 72c0-30.9 25.1-56 56-56s56 25.1 56 56v48c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-39.8-32.2-72-72-72s-72 32.2-72 72v216H144v-24c0-22.1-17.9-40-40-40H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c13.3 0 24 10.7 24 24v24H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96v-24c0-13.3 10.7-24 24-24h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64c-22.1 0-40 17.9-40 40v24H264zM32 304h448c8.8 0 16 7.2 16 16s-7.2 16-16 16H32c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 80v24c0 57.4 46.6 104 104 104h240c57.4 0 104-46.6 104-104v-24h-16v24c0 48.6-39.4 88-88 88H136c-48.6 0-88-39.4-88-88v-24z"
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
                  d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32zm448 96H32v32c0 53 43 96 96 96h256c53 0 96-43 96-96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32 14.3 32 32 32 32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96v192h64zM56 208c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v24h48v-24c0-30.9-25.1-56-56-56zm344 56c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-30.9 0-56 25.1-56 56v24h48z"
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
