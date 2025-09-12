import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CirclePhoneHangupIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m135.4-202c-5.3 8.6-16.8 12.3-26.7 8.5l-46.2-17.6c-8.7-3.3-14.1-11.6-13.1-20.3l2.9-26.7c-33.8-10.8-70.8-10.8-104.6 0l2.9 26.7c.9 8.7-4.4 16.9-13.1 20.3l-46.2 17.6c-9.9 3.8-21.4.2-26.7-8.5l-21.8-35.2c-4.8-7.8-3.4-17.5 3.4-23.8 84.9-78.6 222.6-78.6 307.5 0 6.8 6.3 8.2 16.1 3.4 23.8z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m135.4-218 21.7-35.2c4.8-7.8 3.4-17.5-3.4-23.8-84.9-78.6-222.6-78.6-307.5 0-6.8 6.3-8.2 16.1-3.4 23.8l21.8 35.2c5.3 8.6 16.8 12.3 26.7 8.5l46.2-17.6c8.7-3.3 14.1-11.6 13.1-20.3l-2.9-26.6c33.8-10.8 70.8-10.8 104.6 0l-2.9 26.7c-.9 8.7 4.4 16.9 13.1 20.3l46.2 17.6c9.9 3.8 21.4.2 26.7-8.5z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M112 248.6c.1-.5.3-1.2 1.1-1.9 78.8-72.9 207-72.9 285.7 0 .8.7 1 1.4 1.1 1.9s0 1.1-.4 1.8l-21.7 35.2c-1 1.7-4.1 3.2-7.4 1.9l-46.2-17.6c-2.4-.9-2.9-2.6-2.9-3.4l2.8-18.1c1.2-7.8-3.4-15.3-10.9-17.7-37-11.9-77.4-11.9-114.3 0-7.5 2.4-12.1 9.9-10.9 17.7l2.8 18.1c0 .9-.5 2.5-2.9 3.4l-46.2 17.6c-3.3 1.2-6.4-.3-7.4-1.9l-21.7-35.2c-.4-.7-.5-1.2-.4-1.8zm308.6-25.4c-91-84.3-238.2-84.3-329.2 0-12.3 11.4-15.1 29.5-6.2 44l21.7 35.2c9.6 15.6 29.4 21.4 46 15l46.2-17.6c14.9-5.7 25.1-20.3 23.3-36.9 0-.2-.1-.5-.1-.7l-.7-4.5c22.5-5.1 46.1-5.1 68.6 0l-.7 4.5c0 .2-.1.5-.1.7-1.8 16.6 8.5 31.3 23.3 36.9l46.3 17.7c16.6 6.3 36.4.6 46-15l21.7-35.2c8.9-14.4 6.1-32.6-6.2-44z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M105.6 254.6c-2.7-4.4-2-10 2.1-13.7 81.8-75.8 214.8-75.8 296.6 0 4.1 3.8 4.8 9.3 2.1 13.7l-21.7 35.2c-3.2 5.1-10.4 7.7-17 5.2l-46.2-17.6c-5.7-2.2-8.5-7.2-8-11.9l2.9-26.7c.4-3.8-1.9-7.3-5.5-8.5-35.4-11.4-74.1-11.4-109.4 0-3.6 1.2-5.9 4.7-5.5 8.5l2.9 26.7c.5 4.8-2.4 9.8-8 11.9L144.4 295c-6.6 2.5-13.9-.1-17-5.2l-21.7-35.2zm309.5-25.5c-88-81.5-230.4-81.5-318.3 0-9.5 8.8-11.7 22.8-4.8 33.9l21.7 35.2c7.5 12.1 23.1 16.8 36.4 11.8l46.2-17.6c11.8-4.5 19.6-16 18.2-28.6l-2.2-20c28.4-7.9 58.8-7.9 87.2 0l-2.2 20c-1.4 12.7 6.4 24.1 18.2 28.6l46.4 17.6c13.3 5.1 28.9.4 36.4-11.8L420 263c6.9-11.1 4.7-25.1-4.8-33.9z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m135.4-202c-5.3 8.6-16.8 12.3-26.7 8.5l-46.2-17.6c-8.7-3.3-14.1-11.6-13.1-20.3l2.9-26.7c-33.8-10.8-70.8-10.8-104.6 0l2.9 26.7c.9 8.7-4.4 16.9-13.1 20.3l-46.2 17.6c-9.9 3.8-21.4.2-26.7-8.5l-21.8-35.2c-4.8-7.8-3.4-17.5 3.4-23.8 84.9-78.6 222.6-78.6 307.5 0 6.8 6.3 8.2 16.1 3.4 23.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M364.7 318.5c9.9 3.8 21.4.2 26.7-8.5l21.7-35.2c4.8-7.8 3.4-17.5-3.4-23.8-84.9-78.6-222.6-78.6-307.5 0-6.8 6.3-8.2 16.1-3.4 23.8l21.8 35.2c5.3 8.6 16.8 12.3 26.7 8.5l46.2-17.6c8.7-3.3 14.1-11.6 13.1-20.3l-2.9-26.6c33.8-10.8 70.8-10.8 104.6 0l-2.9 26.7c-.9 8.7 4.4 16.9 13.1 20.3l46.2 17.6z"
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
