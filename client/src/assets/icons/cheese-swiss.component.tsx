import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CheeseSwissIcon: React.FC<
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
                  d="M451 93c37.7 37.7 61 89.7 61 147.2V256H0c0-5.4.7-10.7 2.1-15.8 3.8-13.7 12.4-25.8 24.5-33.9L96 160l23.2-15.4c7.8-5.2 18.4-2.3 25.5 3.8 8.4 7.2 19.3 11.6 31.3 11.6 26.5 0 48-21.5 48-48 0-5.2-.8-10.2-2.3-14.9-2.9-9-1.6-19.9 6.3-25.1l47-31.3c8.6-5.7 18.6-8.7 28.9-8.7 56 0 106.8 22.1 144.2 58 1 1 2 2 3 2.9zm-19 195h80v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V288h304c8.8 0 15.7 7.4 18.6 15.7C329.1 322.5 347 336 368 336s38.9-13.5 45.4-32.3c2.9-8.4 9.8-15.7 18.6-15.7m-208 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M464 256v-15.8C464 151.7 392.3 80 303.8 80c-.8 0-1.6.2-2.3.7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2c-3.3 2.2-5.3 5.9-5.3 9.8h274.7c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32zM48 304v112c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V304h-60.2c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16zm464-63.8V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2M176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M480 244v12h-66.7c-6.6-18.6-24.4-32-45.3-32s-38.7 13.4-45.3 32H32c0-9.3 4.6-18 12.4-23.1l148.7-99.2c-.7 3.3-1.1 6.7-1.1 10.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-23.6-17-43.2-39.4-47.2l47.2-31.5c1.3-.8 2.8-1.3 4.3-1.3 99.4 0 180 80.6 180 180zm-157.3 44c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V288zM512 256v-12c0-117.1-94.9-212-212-212-7.8 0-15.5 2.3-22 6.7L26.6 206.2C10 217.3 0 236 0 256v160c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64zM160 368a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m16-240a16 16 0 1 1 0 32 16 16 0 1 1 0-32m112 144a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M495.9 240h-92.1c-8.8-9.8-21.6-16-35.8-16s-27 6.2-35.8 16H27.3l141-101.9c-.2 1.9-.4 3.9-.4 5.9 0 26.5 21.5 48 48 48s48-21.5 48-48c0-23.3-16.6-42.7-38.6-47.1L290.2 50c1.9-1.3 4.1-2.1 6.4-2.1C404.3 48 492 133.3 495.9 240M16 256h306.7c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H496v160c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V256m320 16a32 32 0 1 1 64 0 32 32 0 1 1-64 0m176-16v-8.7C512 128.4 415.6 32 296.7 32c-5.7 0-11.2 1.8-15.8 5.1L13.3 230.4c-8.4 6-13.3 15.7-13.3 26V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64zm-336 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m8-272a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M512 256v-15.8C512 125.2 418.8 32 303.8 32c-10.3 0-20.3 3-28.9 8.7l-47 31.3c-7.8 5.2-9.2 16.1-6.3 25.1 1.5 4.7 2.3 9.7 2.3 14.9 0 26.5-21.5 48-48 48-12 0-22.9-4.4-31.3-11.6-7.1-6.1-17.7-9.1-25.5-3.8L28.5 205C11.3 216.5.8 235.5 0 256h332.2c-7.6 8.5-12.2 19.7-12.2 32 0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32zM224 384a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368 336c26.5 0 48-21.5 48-48 0-12.3-4.6-23.5-12.2-32H512v160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256h332.2c-7.6 8.5-12.2 19.7-12.2 32 0 26.5 21.5 48 48 48m-144 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
