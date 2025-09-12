import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoneyBillTrendUpIcon: React.FC<
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
                  d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1l-91.2 78.2c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c8.8 0 16.8 3.6 22.6 9.3zM0 304c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm48 112v48h48c0-26.5-21.5-48-48-48m48-112H48v48c26.5 0 48-21.5 48-48m368 112c-26.5 0-48 21.5-48 48h48zm-48-112c0 26.5 21.5 48 48 48v-48zm-96 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M320 24c0 13.3 10.7 24 24 24h54.1L286.7 159.3l-95.1-81.5c-9-7.7-22.4-7.7-31.3.1l-120 104c-10 8.7-11.1 23.8-2.4 33.9s23.8 11.1 33.9 2.4l104.4-90.5 96.3 82.5c9.5 8.2 23.7 7.6 32.6-1.3l127-127V136c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H344c-13.3 0-24 10.7-24 24M103.5 304h305c3.6 29 26.6 51.9 55.5 55.5v49c-29 3.6-51.9 26.6-55.5 55.5h-305c-3.6-29-26.6-51.9-55.5-55.5v-49c28.9-3.6 51.9-26.6 55.5-55.5M48 256c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm208 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M352 16c0 8.8 7.2 16 16 16h57.4L287.2 170.2 186.4 83.9c-6-5.1-14.8-5.1-20.8 0l-112 96c-6.7 5.8-7.5 15.9-1.7 22.6s15.9 7.5 22.6 1.7L176 117.1l101.6 87.1c6.3 5.4 15.8 5.1 21.7-.8L448 54.6V112c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m128 288v32c-26.5 0-48-21.5-48-48h32c8.8 0 16 7.2 16 16m-368-16h288c0 44.2 35.8 80 80 80v32c-44.2 0-80 35.8-80 80H112c0-44.2-35.8-80-80-80v-32c44.2 0 80-35.8 80-80m320 192c0-26.5 21.5-48 48-48v32c0 8.8-7.2 16-16 16zM32 432c26.5 0 48 21.5 48 48H48c-8.8 0-16-7.2-16-16zm48-144c0 26.5-21.5 48-48 48v-32c0-8.8 7.2-16 16-16zm-32-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm176 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M352 8c0 4.4 3.6 8 8 8h92.7L287.6 181.1 181.2 89.9c-3-2.6-7.5-2.6-10.5.1l-128 112c-3.3 2.9-3.7 8-.8 11.3s8 3.7 11.3.8l122.9-107.5 106.7 91.5c3.2 2.7 7.9 2.5 10.9-.4L464 27.3V120c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8m112 264c17.7 0 32 14.3 32 32v24c-30.9 0-56-25.1-56-56zm-376 0h336c0 39.8 32.2 72 72 72v80c-39.8 0-72 32.2-72 72H88c0-39.8-32.2-72-72-72v-80c39.8 0 72-32.2 72-72m352 224c0-30.9 25.1-56 56-56v24c0 17.7-14.3 32-32 32zM16 440c30.9 0 56 25.1 56 56H48c-17.7 0-32-14.3-32-32zm56-168c0 30.9-25.1 56-56 56v-24c0-17.7 14.3-32 32-32zm-24-16c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm160 128a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M48 256c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm48 208H48v-48c26.5 0 48 21.5 48 48M48 352v-48h48c0 26.5-21.5 48-48 48m368 112c0-26.5 21.5-48 48-48v48zm48-112c-26.5 0-48-21.5-48-48h48zm-208-32a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M477.6 19.8c-1.5-3.7-3.8-7.3-6.9-10.3l-.1-.1C464.8 3.6 456.8 0 448 0h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h18.7l-84.4 84.4-89.5-76.7c-12-10.3-29.7-10.3-41.7 0l-112 96c-13.4 11.5-15 31.7-3.5 45.1s31.7 15 45.1 3.5l91.3-78.2 91.2 78.1c12.7 10.9 31.6 10.2 43.5-1.7L416 109.3V128c0 17.7 14.3 32 32 32s32-14.3 32-32V31.9c0-4.3-.9-8.4-2.4-12.2z"
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
