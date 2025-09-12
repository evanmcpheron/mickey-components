import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonChalkboardIcon: React.FC<
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
                  d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-8 384V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32V192h136c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16V64h192v192H384v-32h-64v48c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l28.7-47.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32"
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
                  d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-13.7 80H208v128h-32V176.1c.7 0 1.5-.1 2.3-.1M176 488V352h32v136c0 13.3 10.7 24 24 24s24-10.7 24-24V176h136c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24V48h224v224H368v-48h-48v48c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H178.3c-31.7 0-61 17.1-76.6 44.7L43.1 276.2c-6.5 11.5-2.5 26.2 9.1 32.7s26.2 2.5 32.7-9.1l43.1-76.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24"
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
                  d="M168 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0m-68.7 104H224v160h-64V164c6-2.6 12.5-4 19.3-4M160 496V352h64v144c0 8.8 7.2 16 16 16s16-7.2 16-16V160h144c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V48c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16v-80h-32v80c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H179.3c-29.5 0-56.7 16.3-70.6 42.3L49.9 280.5c-4.2 7.8-1.2 17.5 6.6 21.7s17.5 1.2 21.7-6.6l49.8-93.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16"
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
                  d="M152 56a40 40 0 1 1 80 0 40 40 0 1 1-80 0m96 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0M122 173.9c9.7-18.4 28.8-29.9 49.5-29.9H384c8.8 0 16 7.2 16 16s-7.2 16-16 16H264c-8.8 0-16 7.2-16 16v288c0 8.8-7.2 16-16 16s-16-7.2-16-16V360c0-13.3-10.7-24-24-24s-24 10.7-24 24v120c0 8.8-7.2 16-16 16s-16-7.2-16-16V248c0-4.4-3.6-8-8-8s-8 3.6-8 8v232c0 17.7 14.3 32 32 32s32-14.3 32-32V360c0-4.4 3.6-8 8-8s8 3.6 8 8v120c0 17.7 14.3 32 32 32s32-14.3 32-32V192h120c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48V48c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H368c-17.7 0-32-14.3-32-32v-48h-16v48c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H171.5c-26.7 0-51.2 14.8-63.7 38.4L32.9 308.3c-2.1 3.9-.6 8.7 3.3 10.8s8.7.6 10.8-3.3z"
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
                  d="M144 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H264V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 128V64h192v192H384v-64h-64v80c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80z"
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
