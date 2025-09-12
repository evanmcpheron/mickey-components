import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LocationPinLockIcon: React.FC<
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
                  d="M215.7 499.2c11-13.8 25.1-31.7 40.3-52.3V352c0-23.7 12.9-44.4 32-55.4V272c0-55.6 40.5-101.7 93.6-110.5C367 70 287.7 0 192 0 86 0 0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128m208 112c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M192 451.7c18.5-23.7 41.6-54.7 64-88.1v83.2c-15.3 20.6-29.3 38.6-40.3 52.3-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0c95.7 0 175 70 189.6 161.5-16.9 2.8-32.6 9.4-46.1 18.9C329.6 106.3 267.6 48 192 48c-79.5 0-144 64.5-144 144 0 12.4 4.5 31.6 15.3 57.2 10.5 24.8 25.4 52.2 42.5 79.9 28.5 46.2 61.5 90.8 86.2 122.6M224 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0m288 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M192 477.6c16.8-21.1 40.2-51.4 64-85.5v54.8c-15.3 20.6-29.3 38.6-40.3 52.3-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0c95.7 0 175 70 189.6 161.5a111.7 111.7 0 0 0-30.9 9.9C340.6 92.8 273.4 32 192 32c-88.4 0-160 71.6-160 160 0 15.6 5.4 37 16.6 63.4 10.9 25.9 26.2 54 43.6 82.1 34.1 55.3 74.4 108.2 99.9 140zM144 192a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160m208-48c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm0 80v128h160V352z"
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
                  d="M203.2 489.2c14-17.5 32.8-41.7 52.8-69.5v27.1c-15.3 20.6-29.3 38.6-40.3 52.3-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0c95.7 0 175 70 189.6 161.5-5.3.9-10.6 2.1-15.6 3.8C353.1 80.7 280.1 16 192 16 94.8 16 16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6 11.3 26.9 27.1 55.8 44.7 84.3 35.2 57 76.8 111.4 102.3 143.2 5.9 7.3 16.6 7.3 22.4 0zM192 112a80 80 0 1 1 0 160 80 80 0 1 1 0-160m64 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m144 16c-26.5 0-48 21.5-48 48v64h96v-64c0-26.5-21.5-48-48-48m-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64v64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h16zm-16 80c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H320"
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
                  d="M256 446.8c-15.3 20.6-29.3 38.6-40.3 52.3-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0c95.7 0 175 70 189.6 161.5-53.1 8.8-93.6 54.9-93.6 110.5v24.6c-19.1 11.1-32 31.7-32 55.4zm0-254.8a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
