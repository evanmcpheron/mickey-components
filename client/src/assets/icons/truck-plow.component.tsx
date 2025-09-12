import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckPlowIcon: React.FC<
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
                  d="M192 96v96h135.5l-57.6-96zm-64 96V80c0-26.5 21.5-48 48-48h93.9c22.5 0 43.3 11.8 54.9 31.1L402.1 192H448c17.7 0 32 14.3 32 32v64h32V176c0-7.3 2.5-14.3 7-20l64-80c11-13.8 31.2-16 45-5s16 31.2 5 45l-57 71.2v169.6l57 71.2c11 13.8 8.8 33.9-5 45s-33.9 8.8-45-5l-64-80c-4.5-5.7-7-12.7-7-20v-16h-37.5c3.5 10 5.5 20.8 5.5 32 0 53-43 96-96 96s-96-43-96-96c0-11.2 1.9-22 5.5-32H224c-1.9 0-3.8-.2-5.6-.5 3.7 10.2 5.6 21.1 5.6 32.5 0 53-43 96-96 96s-96-43-96-96c0-11.2 1.9-22 5.5-32H32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32zm32 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M184 80h86.1c2.8 0 5.4 1.5 6.8 3.8L343 192H176V88c0-4.4 3.6-8 8-8m214.6 112c-.6-1.5-1.3-3.1-2.2-4.5L317.8 58.8C307.7 42.2 289.6 32 270.1 32H184c-30.9 0-56 25.1-56 56v104H56c-30.9 0-56 25.1-56 56v96c0 19.4 13.7 35.5 32 39.2v.8c0 53 43 96 96 96s96-43 96-96h48c0 53 43 96 96 96s96-43 96-96h54.1l.1.1 80 88c8.9 9.8 24.1 10.5 33.9 1.6s10.5-24.1 1.6-33.9L560 358.7V217.3l73.8-81.1c8.9-9.8 8.2-25-1.6-33.9s-25-8.2-33.9 1.6l-80 88c-4 4.4-6.2 10.2-6.2 16.1v128H480v-88c0-30.9-25.1-56-56-56zM432 312.4c-17-15.2-39.4-24.4-64-24.4-35.5 0-66.6 19.3-83.2 48h-73.6c-16.6-28.7-47.6-48-83.2-48-33.4 0-62.8 17-80 42.9V248c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8zM80 384a48 48 0 1 1 96 0 48 48 0 1 1-96 0m288-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M176 64h94.1c5.6 0 10.7 2.9 13.7 7.7L357.2 192H160V80c0-8.8 7.2-16 16-16m218.8 128-5.1-8.3L311 55c-8.7-14.3-24.2-23-41-23h-94c-26.5 0-48 21.5-48 48v112H56c-30.9 0-56 25.1-56 56v96c0 19.4 13.7 35.5 32 39.2v.8c0 53 43 96 96 96s96-43 96-96h48c0 53 43 96 96 96s96-43 96-96h56.5l75.2 90.2c5.7 6.8 15.7 7.7 22.5 2s7.7-15.7 2-22.5L544 362.2V213.8l76.3-91.6c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2l-80 96c-2.4 2.9-3.7 6.5-3.7 10.2V352h-32.9c.5-2.6.8-5.3.8-8v-96c0-30.9-25.1-56-56-56zM448 330.9C430.8 305 401.4 288 368 288c-41.8 0-77.4 26.7-90.5 64h-59c-13.2-37.3-48.7-64-90.5-64-41.7 0-77.1 26.5-90.4 63.6-3.2-1-5.6-4.1-5.6-7.6v-96c0-13.3 10.7-24 24-24h368c13.3 0 24 10.7 24 24zM64 384a64 64 0 1 1 128 0 64 64 0 1 1-128 0m304-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M168 48h102.4c8.2 0 15.9 4.2 20.3 11.2L374.5 192H144V72c0-13.3 10.7-24 24-24m225.5 144-2.7-4.3-86.6-137.1C296.9 39 284.1 32 270.4 32H168c-22.1 0-40 17.9-40 40v120H56c-30.9 0-56 25.1-56 56v96c0 19.4 13.7 35.5 32 39.2v.8c0 53 43 96 96 96s96-43 96-96h48c0 53 43 96 96 96s96-43 96-96h68.7l93.7 93.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L544 372.7V203.3l93.7-93.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-96 96c-1.5 1.5-2.3 3.5-2.3 5.7v168H488c5-6.7 8-15 8-24v-96c0-30.9-25.1-56-56-56zm69.1 175.1c-8-45-47.3-79.1-94.5-79.1-47.6 0-87.1 34.6-94.7 80h-50.7c-7.6-45.4-47.1-80-94.7-80-47.3 0-86.5 34.1-94.5 79.1C23.4 364.3 16 355 16 344v-96c0-22.1 17.9-40 40-40h384c22.1 0 40 17.9 40 40v96c0 11-7.4 20.3-17.5 23.1zM48 384a80 80 0 1 1 160 0 80 80 0 1 1-160 0m320-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
                  d="M128 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160m224 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="m269.9 96 57.6 96H192V96zm132.2 96L324.8 63.1C313.2 43.8 292.4 32 269.9 32H176c-26.5 0-48 21.5-48 48v112H32c-17.7 0-32 14.3-32 32v96c0 16 11.7 29.2 27 31.6C45 314 83.5 288 128 288c44.7 0 83.2 26.2 101.2 64h21.6c18-37.8 56.5-64 101.2-64s83.2 26.2 101.2 64H512v16c0 7.3 2.5 14.3 7 20l64 80c11 13.8 31.2 16 45 5s16-31.2 5-45l-57-71.2V187.2l57-71.2c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-64 80c-4.5 5.7-7 12.7-7 20v112h-32v-64c0-17.7-14.3-32-32-32z"
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
