import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RankingStarIcon: React.FC<
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
                  d="M353.8 54.1 330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0l-23.6 47.8-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32zM32 320c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32zm416 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32"
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
                  d="m353.8 54.1 52.3 7.5c9.3 1.4 13.2 12.9 6.4 19.8l-38 36.6 9 52.1c1.4 9.3-8.2 16.5-16.8 12.2l-46.6-24.4-46.9 24.8c-8.6 4.3-18.3-2.9-16.8-12.2l9-52.1-38-37c-6.8-6.8-2.9-18.3 6.4-19.8l52.3-7.5 23.7-47.8c4.3-8.6 16.5-8.3 20.4 0zM272 304v160h96V304zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zM48 368v96h96v-96zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm592 32h-96v64h96zm-96-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48"
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
                  d="m300.5 77.2-3.7 7.5-8.3 1.2-43.5 6.3 31.6 30.8 6 5.9-1.4 8.3-7.4 43.3 39-20.6 7.4-3.9 7.5 3.9 38.7 20.3-7.4-43.3-1.4-8.3 6.1-5.9 31.4-30.3-43.4-6.3-8.3-1.2-3.7-7.5L320 37.8zm-5-62c10.3-20.6 39.4-19.9 49.1.1l19.9 40.2 44 6.3h.2c22.1 3.4 31.5 30.6 15.3 46.9l-.2.2-31.9 30.8 7.5 43.7v.3c3.4 22-19.5 39.1-39.8 28.9l-.3-.1-39.1-20.5-39.5 20.9-.3.2c-20.3 10.2-43.2-6.9-39.8-28.9v-.3l7.5-43.8-31.9-31.1-.2-.2c-16.2-16.2-6.7-43.5 15.3-46.9h.2l44-6.3 19.9-40.2zM192 368v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48m224 64v32c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zM256 304v160c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16M32 368v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16m448 64v32c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m16-48h96c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48"
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
                  d="m317 17.9-23.7 47.8-1.9 3.8-4.2.6-52.2 7.5c-2.9.5-4.1 4-2 6.2l37.9 37 3 2.9-.7 4.1-8.9 52c-.4 2.9 2.6 5.1 5.3 3.8l46.8-24.7 3.7-2 3.7 2 46.5 24.4c2.7 1.3 5.7-.9 5.3-3.8l-8.9-52-.7-4.2 3-2.9 37.9-36.6c2.1-2.1.9-5.7-2-6.2L352.7 70l-4.2-.6-1.9-3.8L323 17.9l-.1-.1c-1.1-2.3-4.7-2.5-6 .1zm-14.3-7.1c7.3-14.6 28-14.1 34.8.1l21.8 44 48.1 6.9h.1c15.7 2.4 22.4 21.8 10.9 33.3l-.1.1-34.9 33.7 8.2 47.9v.1c2.4 15.7-13.9 27.8-28.3 20.6l-.1-.1-43-22.4-43.2 22.8-.2.1c-14.5 7.3-30.7-4.9-28.3-20.6v-.1l8.2-47.9-34.9-34.2-.1-.1c-11.5-11.5-4.8-30.9 10.9-33.3h.1l48.1-6.9 21.8-44zM272 272c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V304c0-17.7-14.3-32-32-32zm-48 32c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zM48 336c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zM0 368c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm592 32h-96c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32m-96-16h96c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48"
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
                  d="M224 288c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM0 352c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm480 32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="m330.2 6.3 23.6 47.8 52.3 7.5c9.3 1.4 13.2 12.9 6.4 19.8l-38 36.6 9 52.1c1.4 9.3-8.2 16.5-16.8 12.2l-46.6-24.4-46.9 24.8c-8.6 4.3-18.3-2.9-16.8-12.2l9-52.1-38-37c-6.8-6.8-2.9-18.3 6.4-19.8l52.3-7.5 23.7-47.8c4.3-8.6 16.5-8.3 20.4 0"
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
