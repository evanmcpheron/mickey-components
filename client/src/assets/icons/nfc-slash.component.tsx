import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NfcSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68V96c0-35.3-28.7-64-64-64H160c-21.6 0-40.7 10.7-52.3 27.1zm134.7 105.6c8.7-9 21-14.7 34.5-14.7h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-3.3 0-6.4 1-8.9 2.7l-25.6-20.1zm128.6 100.8c.6-.3 1.3-.5 1.9-.7V144c0-26.5 21.5-48 48-48h80c26.5 0 48 21.5 48 48v206.9l-32-25.1V144c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16v66.7c18.6 6.6 32 24.4 32 45.3 0 2.3-.2 4.6-.5 6.8L302 211.5zm184.8 268.1L406.2 416H208c-26.5 0-48-21.5-48-48V222.1l-64-50.5V416c0 35.3 28.7 64 64 64h320c2.3 0 4.6-.1 6.9-.4M208 384h157.5L192 247.3V368c0 8.8 7.2 16 16 16"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68V96c0-35.3-28.7-64-64-64H160c-21.6 0-40.7 10.7-52.3 27.1zm106.9 83.8c2.6-5.3 8.1-8.9 14.3-8.9h320c8.8 0 16 7.2 16 16v267.5l-32-25.1V152c0-22.1-17.9-40-40-40h-88c-22.1 0-40 17.9-40 40v54.7l-60-47c11.4-1.9 20-11.8 20-23.7 0-13.3-10.7-24-24-24h-16c-10.5 0-20.1 4-27.2 10.7zM416 300.8l-48.5-38c.3-2.2.5-4.5.5-6.8 0-17.8-9.7-33.3-24-41.6V160h72zm70.9 178.9L426.5 432H160c-8.8 0-16-7.2-16-16V209.5l-48-37.9V416c0 35.3 28.7 64 64 64h320c2.3 0 4.6-.1 6.9-.4zM385.8 400l-60.9-48H224v-79.5l-48-37.8V360c0 22.1 17.9 40 40 40z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM544 351.3V96c0-35.3-28.7-64-64-64H160c-6 0-11.9.8-17.4 2.4L180.1 64H480c17.7 0 32 14.3 32 32v230zm-64-50.5V128c0-17.7-14.3-32-32-32H336c-17.7 0-32 14.3-32 32v33.8l32 25.3V128h112v147.5zM378.8 384H192V236.5l-32-25.3V384c0 17.7 14.3 32 32 32h227.4l-40.5-32zM128 186l-32-25.3V416c0 35.3 28.7 64 64 64h320c6 0 11.9-.8 17.4-2.4L459.9 448H160c-17.7 0-32-14.3-32-32z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM544 96v245.1l-16-12.6V96c0-26.5-21.5-48-48-48H172.7l-19.8-15.6c2.3-.3 4.7-.4 7.1-.4h320c35.3 0 64 28.7 64 64m-232 62 16 12.6V136c0-4.4 3.6-8 8-8h104c4.4 0 8 3.6 8 8v129.3l16 12.7V136c0-13.3-10.7-24-24-24H336c-13.3 0-24 10.7-24 24zM192 376V246.7L176 234v142c0 13.3 10.7 24 24 24h186.2l-20.3-16H200c-4.4 0-8-3.6-8-8M96 170.9V416c0 35.3 28.7 64 64 64h320c2.4 0 4.7-.1 7.1-.4L467.3 464H160c-26.5 0-48-21.5-48-48V183.5z"
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
                  d="M406.2 416H208c-26.5 0-48-21.5-48-48V222.1l-64-50.5V416c0 35.3 28.7 64 64 64h320c2.3 0 4.6-.1 6.9-.4zM192 247.3V368c0 8.8 7.2 16 16 16h157.5zM208 128c-3.3 0-6.4 1-8.9 2.7l103 80.7c.6-.3 1.3-.5 1.9-.7V144c0-26.5 21.5-48 48-48h80c26.5 0 48 21.5 48 48v206.9l64 50.2V96c0-35.3-28.7-64-64-64H160c-21.6 0-40.7 10.7-52.3 27.1l65.8 51.6c8.7-9 21-14.7 34.5-14.7h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm240 197.8V144c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16v66.7c18.6 6.6 32 24.4 32 45.3 0 2.3-.2 4.6-.5 6.8z"
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
