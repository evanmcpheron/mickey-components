import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaucetIcon: React.FC<
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
                  d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12 31-3.9 1-.1 1 .1 31 3.9 96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32 0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
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
                  d="M224 64c13.3 0 24 10.7 24 24v21l104-13c17.7 0 32 14.3 32 32s-14.3 32-32 32l-104-13v45h26.7c14.9 0 29.1 5.9 39.6 16.4l15.6 15.6H360c83.9 0 152 68.1 152 152v16c0 30.9-25.1 56-56 56h-48c-30.9 0-56-25.1-56-56 0-4.4-3.6-8-8-8h-20.1c-23.4 29.2-59.5 48-99.9 48s-76.5-18.8-99.9-48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h112.3c8.2 0 15.8 4.2 20.2 11.1 14.3 22.2 39.2 36.9 67.5 36.9s53.2-14.7 67.4-36.9c4.4-6.9 12-11.1 20.2-11.1H344c30.9 0 56 25.1 56 56 0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-16c0-57.4-46.6-104-104-104h-40c-6.4 0-12.5-2.5-17-7l-22.6-22.6c-1.5-1.5-3.5-2.3-5.7-2.3h-93.4c-2.1 0-4.2.8-5.7 2.3L153 265c-4.5 4.5-10.6 7-17 7H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h102.1l15.6-15.6c10.5-10.5 24.7-16.4 39.6-16.4H200v-45L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l104 13V88c0-13.3 10.7-24 24-24"
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
                  d="M240 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h128v48h-18.7c-12.7 0-24.9 5.1-33.9 14.1l-34 33.9H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h112c4.2 0 8.3-1.7 11.3-4.7l38.6-38.6c3-3 7.1-4.7 11.3-4.7h69.5c4.2 0 8.3 1.7 11.3 4.7l38.6 38.6c3 3 7.1 4.7 11.3 4.7h48c61.9 0 112 50.1 112 112 0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16 0-26.5-21.5-48-48-48h-60.8c-5.7 0-11 3-13.8 8-13.9 24-39.7 40-69.3 40s-55.5-16.1-69.3-40c-2.9-4.9-8.1-8-13.8-8H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h116.1c20.2 29 53.8 48 91.9 48s71.7-19 91.9-48H368c8.8 0 16 7.2 16 16 0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48 0-79.5-64.5-144-144-144h-41.4l-33.9-33.9c-9-9-21.2-14.1-33.9-14.1H240v-48h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H240z"
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
                  d="M224 64c4.4 0 8 3.6 8 8v46.6l103.2-16.3c25.6-4 48.8 15.7 48.8 41.7s-23.2 45.7-48.8 41.7L232 169.4V208h26.7c10.6 0 20.8 4.2 28.3 11.7l36.3 36.3H376c75.1 0 136 60.9 136 136v16c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40 0-13.3-10.8-24-24-24l-40.1.1C298 413.2 263.2 432 224 432s-74-18.8-95.9-47.8L8 384c-4.4 0-8-3.6-8-8s3.6-8 8-8l124.2.2c2.6 0 5 1.3 6.5 3.4 18.8 26.9 50 44.4 85.3 44.4s66.4-17.5 85.3-44.4c1.5-2.1 3.9-3.4 6.5-3.4l44.2-.1c22.1 0 40 17.9 40 40 0 13.2 10.7 24 24 24h48c13.3 0 24-10.7 24-24V392c0-66.3-53.7-120-120-120h-56c-2.1 0-4.2-.8-5.7-2.3L275.7 231c-4.5-4.5-10.6-7-17-7h-69.4c-6.4 0-12.5 2.5-17 7l-38.6 38.6c-1.5 1.5-3.5 2.3-5.7 2.3H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h116.7l36.3-36.2c7.5-7.5 17.7-11.7 28.3-11.7H216v-38.6l-103.2 16.3C87.2 189.7 64 169.9 64 144s23.2-45.7 48.8-41.7L216 118.6V72c0-4.4 3.6-8 8-8m-113.7 54.1C94.4 115.6 80 127.9 80 144s14.4 28.4 30.3 25.9L216 153.2v-18.4zm227.5 0L232 134.8v18.3l105.7 16.7c15.9 2.5 30.3-9.8 30.3-25.9s-14.4-28.4-30.3-25.9z"
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
                  d="M192 96v12l32 4 32-4V96c0-17.7-14.3-32-32-32s-32 14.3-32 32m0 52v76h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32 0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-76l-32-4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m96 160 128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 16L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32"
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
