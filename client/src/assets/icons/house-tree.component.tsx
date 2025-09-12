import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseTreeIcon: React.FC<
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
                  d="M393.4 9.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S557 192.1 544 192.1h-29.4L601 300c7.7 9.6 9.2 22.8 3.9 33.9S588.3 352 576 352h-29.4L633 460c7.7 9.6 9.2 22.8 3.9 33.9S620.3 512 608 512H400c10-13.4 16-30 16-48V277.1c0-22.4-9.4-43.8-25.9-59l-107.2-98.2zM0 277.1c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zM144 296v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24"
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
                  d="M417.4 7.5C412.9 2.7 406.6 0 400 0s-12.9 2.7-17.4 7.5l-103.5 109 35.4 32.4 85.5-90L496.1 160H448c-9.6 0-18.2 5.7-22 14.5s-2 19 4.6 26L528.3 304H480c-9.4 0-17.9 5.4-21.8 13.9s-2.6 18.5 3.5 25.6L564.1 464H416c0 18-6 34.6-16 48h216c9.4 0 17.9-5.4 21.8-13.9s2.6-18.5-3.5-25.6L531.9 352H584c9.6 0 18.2-5.7 22-14.5s2-19-4.6-26L503.7 208H552c9.6 0 18.3-5.7 22.1-14.5s2-19-4.7-26zM20.8 237C7.5 249.1 0 266.2 0 284.2V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V284.2c0-17.9-7.5-35.1-20.8-47.2l-128-117.3c-24.5-22.4-62-22.4-86.5 0zM48 284.2c0-4.5 1.9-8.8 5.2-11.8l128-117.4c6.1-5.6 15.5-5.6 21.6 0l128 117.3c3.3 3 5.2 7.3 5.2 11.8V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm96 11.8v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24"
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
                  d="M404.1 37.1c6.4-7.1 17.4-7.1 23.8 0L538.5 160H480c-6.2 0-11.8 3.6-14.5 9.1s-1.8 12.2 2.1 17l108.2 132.5c.1.2.2.3.2.5 0 .5-.4.9-.9.9H496c-6.3 0-12.1 3.7-14.6 9.5s-1.4 12.6 2.8 17.2L606 480H414.4c-2.4 11.8-7.4 22.7-14.4 32h209.6c16.8 0 30.4-13.6 30.4-30.4 0-7.6-2.8-14.9-8-20.5L532.3 352h42.8c18.1 0 32.9-14.7 32.9-32.9 0-7.6-2.6-14.9-7.4-20.8L513.7 192h34.7c15.2 0 27.6-12.3 27.6-27.6 0-6.8-2.5-13.4-7.1-18.4L451.7 15.7c-19.1-21.2-52.3-21.2-71.4 0l-95.4 106 23.6 21.6zM32 284.2c0-9 3.8-17.5 10.4-23.6l128-117.3c12.2-11.2 31-11.2 43.2 0l128 117.3c6.6 6.1 10.4 14.6 10.4 23.6V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zM0 448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V284.2c0-17.9-7.5-35.1-20.8-47.2l-128-117.3c-24.5-22.4-62-22.4-86.5 0L20.8 237C7.5 249.1 0 266.2 0 284.2zm224-160v64h-64v-64zm-64-32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
                  d="M404.1 25c6.4-7 17.4-7 23.7 0L559 170q.9 1.05.9 2.4c0 2-1.6 3.6-3.5 3.6H488c-3.1 0-5.9 1.8-7.2 4.6s-.9 6.1 1 8.5L590 321.5c1.3 1.6 2 3.6 2 5.6 0 4.9-4 8.9-8.9 8.9H504c-3.2 0-6 1.9-7.3 4.8s-.7 6.3 1.4 8.6l124.2 135.9c1.1 1.2 1.7 2.7 1.7 4.3 0 3.5-2.9 6.4-6.4 6.4H409.3c-2.5 5.7-5.6 11.1-9.3 16h217.6c12.4 0 22.4-10 22.4-22.4 0-5.6-2.1-11-5.9-15.1L522.2 352h61c13.7 0 24.9-11.1 24.9-24.9 0-5.7-2-11.3-5.6-15.7L504.9 192h51.6c10.8 0 19.5-8.8 19.5-19.6 0-4.8-1.8-9.5-5.1-13.1l-131.2-145c-12.7-14-34.8-14-47.5 0L290.5 126.8l11.8 10.8zM16 280.6c0-11.2 4.7-21.9 13-29.5l136-124.6c15.3-14 38.8-14 54.1 0L355 251.1c8.3 7.6 13 18.3 13 29.5V456c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40zM0 456c0 30.9 25.1 56 56 56h272c30.9 0 56-25.1 56-56V280.6c0-15.7-6.6-30.7-18.2-41.3l-136-124.7c-21.4-19.6-54.3-19.6-75.7 0L18.2 239.4C6.6 250 0 264.9 0 280.6zm224-176c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8zm-64-16c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24z"
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
                  d="M438.6 9.4c-12.5-12.5-32.8-12.5-45.3 0L282.9 119.9l107.2 98.3c16.5 15.2 25.9 36.5 25.9 59V464c0 18-6 34.6-16 48h208c12.3 0 23.5-7 28.8-18.1s3.8-24.2-3.9-33.9l-86.3-108H576c12.3 0 23.5-7 28.8-18.1s3.8-24.2-3.9-33.9l-86.3-108H544c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 464V277.1c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48m168-192c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"
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
