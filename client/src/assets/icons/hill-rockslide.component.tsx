import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HillRockslideIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m252.4 103.8 27 48c2.8 5 8.2 8.2 13.9 8.2h53.3c5.8 0 11.1-3.1 13.9-8.2l27-48c2.7-4.9 2.7-10.8 0-15.7l-27-48c-2.8-5-8.2-8.2-13.9-8.2h-53.2c-5.8 0-11.1 3.1-13.9 8.2l-27 48c-2.7 4.9-2.7 10.8 0 15.7zM68.3 87C43.1 61.8 0 79.7 0 115.3V432c0 44.2 35.8 80 80 80h316.7c35.6 0 53.5-43.1 28.3-68.3zm435.9 316.6c4.9 2.7 10.8 2.7 15.7 0l48-27c5-2.8 8.2-8.2 8.2-13.9v-53.3c0-5.8-3.1-11.1-8.2-13.9l-48-27c-4.9-2.7-10.8-2.7-15.7 0l-48 27c-5 2.8-8.2 8.2-8.2 13.9v53.3c0 5.8 3.1 11.1 8.2 13.9zM192 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m124.4 71.8c-2.7-4.9-2.7-10.8 0-15.7l27-48c2.8-5 8.2-8.2 13.9-8.2h53.3c5.8 0 11.1 3.1 13.9 8.2l27 48c2.7 4.9 2.7 10.8 0 15.7l-27 48c-2.8 5-8.2 8.2-13.9 8.2h-53.2c-5.8 0-11.1-3.1-13.9-8.2l-27-48zM48 145.9V440c0 13.3 10.7 24 24 24h294.1zM0 126.6C0 91 43.1 73.1 68.3 98.3l345.4 345.4c25.2 25.2 7.4 68.3-28.3 68.3H72c-39.8 0-72-32.2-72-72zm504.2 277-48-27c-5-2.8-8.2-8.2-8.2-13.9v-53.3c0-5.8 3.1-11.1 8.2-13.9l48-27c4.9-2.7 10.8-2.7 15.7 0l48 27c5 2.8 8.2 8.2 8.2 13.9v53.3c0 5.8-3.1 11.1-8.2 13.9l-48 27c-4.9 2.7-10.8 2.7-15.7 0M352 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M238.5 127.7c-5.5-9.7-5.5-21.6 0-31.4l27-48c5.6-10.1 16.3-16.3 27.9-16.3h53.3c11.6 0 22.2 6.2 27.9 16.3l27 48c5.5 9.7 5.5 21.6 0 31.4l-27 48c-5.7 10.1-16.3 16.3-27.9 16.3h-53.3c-11.6 0-22.2-6.2-27.9-16.3zM293.4 64l-27 48 27 48h53.3l27-48-27-48zM32 118.6V448c0 17.7 14.3 32 32 32h329.4zm-32 0C0 90.1 34.5 75.8 54.6 96L416 457.4c20.2 20.2 5.9 54.6-22.6 54.6H64c-35.3 0-64-28.7-64-64zm432.3 287.9c-10.1-5.7-16.3-16.3-16.3-27.9v-53.2c0-11.6 6.2-22.2 16.3-27.9l48-27c9.7-5.5 21.6-5.5 31.4 0l48 27c10.1 5.7 16.3 16.3 16.3 27.9v53.3c0 11.6-6.2 22.2-16.3 27.9l-48 27c-9.7 5.5-21.6 5.5-31.4 0l-48-27zm63.7-.9 48-27v-53.2l-48-27-48 27v53.3l48 27zM128 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 40a24 24 0 1 0 0 48 24 24 0 1 0 0-48m40 24a40 40 0 1 1-80 0 40 40 0 1 1 80 0m45.4 59.8c-4.1-7.3-4.1-16.2 0-23.5l27-48c4.3-7.6 12.2-12.2 20.9-12.2h53.3c8.7 0 16.7 4.7 20.9 12.2l27 48c4.1 7.3 4.1 16.2 0 23.5l-27 48c-4.3 7.6-12.2 12.2-20.9 12.2h-53.2c-8.7 0-16.7-4.7-20.9-12.2l-27-48zm13.9-15.7c-1.4 2.4-1.4 5.4 0 7.8l27 48c1.4 2.5 4.1 4.1 7 4.1h53.3c2.9 0 5.6-1.6 7-4.1l27-48c1.4-2.4 1.4-5.4 0-7.8l-27-48c-1.4-2.5-4.1-4.1-7-4.1h-53.3c-2.9 0-5.6 1.6-7 4.1zM29.7 97c-5-5-13.7-1.5-13.7 5.7V456c0 22.1 17.9 40 40 40h353.4c7.1 0 10.7-8.6 5.7-13.7zM0 102.6c0-21.4 25.9-32.1 41-17L426.3 471c15.1 15.1 4.4 41-17 41H56c-30.9 0-56-25.1-56-56zm484.2 324-48-27c-7.6-4.3-12.2-12.2-12.2-20.9v-53.3c0-8.7 4.7-16.7 12.2-20.9l48-27c7.3-4.1 16.2-4.1 23.5 0l48 27c7.6 4.3 12.2 12.2 12.2 20.9v53.3c0 8.7-4.7 16.7-12.2 20.9l-48 27c-7.3 4.1-16.2 4.1-23.5 0m15.7-13.9 48-27c2.5-1.4 4.1-4.1 4.1-7v-53.3c0-2.9-1.6-5.6-4.1-7l-48-27c-2.4-1.4-5.4-1.4-7.8 0l-48 27c-2.5 1.4-4.1 4.1-4.1 7v53.3c0 2.9 1.6 5.6 4.1 7l48 27c2.4 1.4 5.4 1.4 7.8 0M328 288a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m60.4 24.2c-2.7 4.9-2.7 10.8 0 15.7l27 48c2.8 5 8.2 8.2 13.9 8.2h53.3c5.8 0 11.1-3.1 13.9-8.2l27-48c2.7-4.9 2.7-10.8 0-15.7l-27-48c-2.8-5-8.2-8.2-13.9-8.2h-53.2c-5.8 0-11.1 3.1-13.9 8.2l-27 48zm251.8 315.4c4.9 2.7 10.8 2.7 15.7 0l48-27c5-2.8 8.2-8.2 8.2-13.9v-53.3c0-5.8-3.1-11.1-8.2-13.9l-48-27c-4.9-2.7-10.8-2.7-15.7 0l-48 27c-5 2.8-8.2 8.2-8.2 13.9v53.3c0 5.8 3.1 11.1 8.2 13.9zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M54.6 73.4c-9.2-9.2-22.9-11.9-34.9-6.9S0 83.1 0 96v384c0 17.7 14.3 32 32 32h384c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-384-384z"
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
