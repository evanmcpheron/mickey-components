import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SignalBarsSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L608 451.2V48c0-26.5-21.5-48-48-48s-48 21.5-48 48v328l-64-50.2V176c0-26.5-21.5-48-48-48s-48 21.5-48 48v74.6zM560 512h-.3.7-.3zm-112-48v-15l-96-75.6V464c0 26.5 21.5 48 48 48s48-21.5 48-48M288 322.9l-74.7-58.8c-12.8 8.6-21.3 23.3-21.3 39.9v160c0 26.5 21.5 48 48 48s48-21.5 48-48zM80 384c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-8.5-6.6c1.1-4.7 1.6-9.5 1.6-14.5V64c0-35.3-28.7-64-64-64s-64 28.7-64 64v299.5l-32-25.1V192c0-35.3-28.7-64-64-64s-64 28.7-64 64v46zM384 275.7V192c0-8.8 7.2-16 16-16s16 7.2 16 16v108.8zm160 125.4V64c0-8.8 7.2-16 16-16s16 7.2 16 16v362.2zM559.6 512h.8zM336 360.7V448c0 35.3 28.7 64 64 64 31 0 56.9-22.1 62.8-51.4L416 423.8V448c0 8.8-7.2 16-16 16s-16-7.2-16-16v-49.5zm-124.5-98c-21 10.4-35.5 32.2-35.5 57.3v128c0 35.3 28.7 64 64 64s64-28.7 64-64V335.5l-92.5-72.9zM256 448c0 8.8-7.2 16-16 16s-16-7.2-16-16V320c0-8.8 7.2-16 16-16s16 7.2 16 16zm-160 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128"
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
                  d="M448 176c0-26.5-21.5-48-48-48s-48 21.5-48 48v23.7l32 25.3v-49c0-8.8 7.2-16 16-16s16 7.2 16 16v74.2l32 25.3zm-64 288v-75.9l-32-25.3V464c0 26.5 21.5 48 48 48s48-21.5 48-48v-25.4l-32-25.3V464c0 8.8-7.2 16-16 16s-16-7.2-16-16m-96-151.7-66.6-52.6C204.1 267 192 284.1 192 304v160c0 26.5 21.5 48 48 48s48-21.5 48-48zm256 39V48c0-8.8 7.2-16 16-16s16 7.2 16 16v328.6l32 25.3V48c0-26.5-21.5-48-48-48s-48 21.5-48 48v278zM256 304v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16M96 432v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16m-64 0v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M448 176c0-26.5-21.5-48-48-48s-48 21.5-48 48v13.5l16 12.6V176c0-17.7 14.3-32 32-32s32 14.3 32 32v76.7l16 12.6zm-80 288v-78.4L352 373v91c0 26.5 21.5 48 48 48s48-21.5 48-48v-15.2l-16-12.6V464c0 17.7-14.3 32-32 32s-32-14.3-32-32M192 304v160c0 26.5 21.5 48 48 48s48-21.5 48-48V322.5l-16-12.6V464c0 17.7-14.3 32-32 32s-32-14.3-32-32V304c0-13.2 8-24.5 19.4-29.4l-13.6-10.8c-13.2 8.6-21.8 23.4-21.8 40.2m336 24.5V48c0-17.7 14.3-32 32-32s32 14.3 32 32v331l16 12.6V48c0-26.5-21.5-48-48-48s-48 21.5-48 48v267.8l16 12.6zM112 432v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-17.7 14.3-32 32-32s32 14.3 32 32m-80 0v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M608 451.2V48c0-26.5-21.5-48-48-48s-48 21.5-48 48v328zM448 325.8V176c0-26.5-21.5-48-48-48s-48 21.5-48 48v74.6zM560 512h-.3.7-.3zm-112-48v-15l-96-75.6V464c0 26.5 21.5 48 48 48s48-21.5 48-48M288 322.9l-74.7-58.8c-12.8 8.6-21.3 23.3-21.3 39.9v160c0 26.5 21.5 48 48 48s48-21.5 48-48zM80 384c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
