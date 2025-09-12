import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseTurretIcon: React.FC<
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
                  d="M256 464V277.1c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4V464c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48m168-192c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zM24 0C10.7 0 0 10.7 0 24v173.5c0 17 6.7 33.3 18.7 45.3L64 288v176c0 26.5 21.5 48 48 48h128c-10-13.4-16-30-16-48V277.1c0-22.4 9.4-43.8 25.9-59L352 124.6V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v72h-32V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v72H96V24C96 10.7 85.3 0 72 0zm152 160c22.1 0 40 17.9 40 40v24c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-24c0-22.1 17.9-40 40-40"
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
                  d="M56 48c-4.4 0-8 3.6-8 8v147.8c0 2 .7 3.9 2 5.3l55.9 62.9c3.9 4.4 6.1 10.1 6.1 15.9V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V297.1L14.1 241C5 230.8 0 217.5 0 203.8V56C0 25.1 25.1 0 56 0h240c30.9 0 56 25.1 56 56v68.6l-48 44V56c0-4.4-3.6-8-8-8h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V48h-64v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V48zm120 96c22.1 0 40 17.9 40 40v40c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-40c0-22.1 17.9-40 40-40m100.8 93 128-117.3c24.5-22.4 62-22.4 86.5 0L619.2 237c13.2 12.1 20.8 29.2 20.8 47.2V448c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V284.2c0-17.9 7.5-35.1 20.8-47.2m27.2 47.2V448c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V284.2c0-4.5-1.9-8.8-5.2-11.8L458.8 155c-6.1-5.6-15.5-5.6-21.6 0l-128 117.3c-3.3 3-5.2 7.3-5.2 11.8zm96 11.8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24z"
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
                  d="M288 448V284.2c0-9 3.8-17.5 10.4-23.6l128-117.3c12.2-11.2 31-11.2 43.2 0l128 117.3c6.6 6.1 10.4 14.6 10.4 23.6V448c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32m-32-163.8V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V284.2c0-17.9-7.5-35.1-20.8-47.2l-128-117.3c-24.5-22.4-62-22.4-86.5 0L276.8 237c-13.2 12.1-20.8 29.2-20.8 47.2m160 3.8h64v64h-64zm-32 0v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32M32 48c0-8.8 7.2-16 16-16h48v64c0 8.8 7.2 16 16 16s16-7.2 16-16V32h96v64c0 8.8 7.2 16 16 16s16-7.2 16-16V32h48c8.8 0 16 7.2 16 16v105.9l32-29.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v155.8c0 11.8 4.3 23.1 12.1 31.9L64 294.1V496c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-3.9-1.4-7.7-4-10.6l-56-62.9c-2.6-2.9-4-6.7-4-10.6zm160 176h-32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16zm-16-80c-26.5 0-48 21.5-48 48v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48c0-26.5-21.5-48-48-48"
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
                  d="M272 456V280.6c0-11.2 4.7-21.9 13-29.5l136-124.6c15.3-14 38.8-14 54.1 0L611 251.1c8.3 7.6 13 18.3 13 29.5V456c0 22.1-17.9 40-40 40H312c-22.1 0-40-17.9-40-40m-16-175.4V456c0 30.9 25.1 56 56 56h272c30.9 0 56-25.1 56-56V280.6c0-15.7-6.6-30.7-18.2-41.3l-136-124.7c-21.4-19.6-54.3-19.6-75.7 0l-136 124.7C262.6 250 256 264.9 256 280.6m160-.6h64c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8m-24 8v64c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24M16 40c0-13.3 10.7-24 24-24h56v72c0 4.4 3.6 8 8 8s8-3.6 8-8V16h128v72c0 4.4 3.6 8 8 8s8-3.6 8-8V16h56c13.3 0 24 10.7 24 24v99.3l16-14.7V40c0-22.1-17.9-40-40-40H40C17.9 0 0 17.9 0 40v163.8c0 9.8 3.6 19.3 10.1 26.6L64 291v205c0 4.4 3.6 8 8 8s8-3.6 8-8V288c0-2-.7-3.9-2-5.3l-55.9-62.9c-3.9-4.4-6.1-10.1-6.1-15.9zm192 184h-64v-48c0-17.7 14.3-32 32-32s32 14.3 32 32zm-32-96c-26.5 0-48 21.5-48 48v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48c0-26.5-21.5-48-48-48"
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
                  d="M24 0C10.7 0 0 10.7 0 24v173.5c0 17 6.7 33.3 18.7 45.3L64 288v176c0 26.5 21.5 48 48 48h128c-10-13.4-16-30-16-48V277.1c0-22.4 9.4-43.8 25.9-59L352 124.6V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v72h-32V24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v72H96V24C96 10.7 85.3 0 72 0zm152 160c22.1 0 40 17.9 40 40v24c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-24c0-22.1 17.9-40 40-40"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 464V277.1c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4V464c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48m168-192c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"
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
