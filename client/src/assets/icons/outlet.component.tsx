import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OutletIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm0 224c0-61.1 30.8-99.1 49.7-116.6 8.8-8.2 20.7-11.4 32.6-11.4h155.3c12 0 23.9 3.3 32.6 11.4 19 17.5 49.8 55.5 49.8 116.6s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4H146.4c-12 0-23.9-3.3-32.6-11.4C94.8 355 64 317.1 64 256m96-64c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c0-8.8-7.2-16-16-16m128 0c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c0-8.8-7.2-16-16-16m-64 96c-13.3 0-24 10.7-24 24v16c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-16c0-13.3-10.7-24-24-24"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 160c0-52.3 26.5-85.2 43.6-100.9 8.6-8 20.2-11.1 31.9-11.1h137c11.7 0 23.3 3.1 31.9 11.1 17 15.8 43.6 48.7 43.6 100.9s-26.5 85.2-43.6 100.9c-8.6 8-20.2 11.1-31.9 11.1h-137c-11.7 0-23.3-3.1-31.9-11.1C106.5 341.2 80 308.3 80 256m96-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-16zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 8.8 7.2 16 16 16s16-7.2 16-16zm-104 88v16c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 160c0 49.2 24.6 79.3 39.5 93.1 1.2 1.1 4.3 2.9 10.9 2.9h155.2c6.6 0 9.7-1.8 10.9-2.9 14.9-13.8 39.5-43.9 39.5-93.1s-24.6-79.3-39.5-93.1c-1.2-1.1-4.3-2.9-10.9-2.9H146.4c-6.6 0-9.7 1.8-10.9 2.9C120.6 176.7 96 206.8 96 256m-32 0c0-61.1 30.8-99.1 49.7-116.6 8.8-8.2 20.7-11.4 32.6-11.4h155.3c12 0 23.9 3.3 32.6 11.4 19 17.5 49.8 55.5 49.8 116.6s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4H146.4c-12 0-23.9-3.3-32.6-11.4C94.8 355 64 317.1 64 256m112-64c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m96 0c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m-48 96c13.3 0 24 10.7 24 24v16c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-16c0-13.3 10.7-24 24-24"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 160c0 55.2 27.7 89.2 44.6 104.8 5 4.6 12.5 7.2 21.8 7.2h155.2c9.3 0 16.8-2.6 21.8-7.2C340.3 345.2 368 311.2 368 256s-27.7-89.2-44.6-104.8c-5-4.6-12.5-7.2-21.8-7.2H146.4c-9.3 0-16.8 2.6-21.8 7.2C107.7 166.8 80 200.8 80 256m-16 0c0-61.1 30.8-99.1 49.7-116.6 8.8-8.2 20.7-11.4 32.6-11.4h155.3c12 0 23.9 3.3 32.6 11.4 19 17.5 49.8 55.5 49.8 116.6s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4H146.4c-12 0-23.9-3.3-32.6-11.4C94.8 355 64 317.1 64 256m96-64c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8m128 0c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8m-48 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h32zm-48 0c0-17.7 14.3-32 32-32s32 14.3 32 32v16c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16z"
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
                  d="M113.7 139.4C94.8 156.9 64 194.9 64 256s30.8 99 49.7 116.6c8.8 8.2 20.7 11.4 32.6 11.4h155.3c12 0 23.9-3.3 32.6-11.4C353.2 355 384 317.1 384 256s-30.8-99.1-49.7-116.6c-8.8-8.2-20.7-11.4-32.6-11.4H146.4c-12 0-23.9 3.3-32.6 11.4zM160 192c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m128 0c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m-64 96c13.3 0 24 10.7 24 24v16c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-16c0-13.3 10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm0 224c0-61.1 30.8-99.1 49.7-116.6 8.8-8.2 20.7-11.4 32.6-11.4h155.3c12 0 23.9 3.3 32.6 11.4 19 17.5 49.8 55.5 49.8 116.6s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4H146.4c-12 0-23.9-3.3-32.6-11.4C94.8 355 64 317.1 64 256"
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
