import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WebAwesomeIcon: React.FC<
  IconProps & {
    type:
      | "solid"
      | "regular"
      | "light"
      | "thin"
      | "duotone"
      | "brands"
      | Dimensions;
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
                  d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1 0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7H217.4c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192l106.1-92.9c-17.7-8.3-30-26.3-30-47.1 0-28.7 23.3-52 52-52s52 23.3 52 52z"
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
                  d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l102.2-20.4 2.2-.4c-5.3-7.7-8.4-17.1-8.4-27.1 0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48l-9.8 21.8L481 442.3c-10.3 23-33.2 37.7-58.4 37.7H217.4c-25.2 0-48-14.8-58.4-37.7L56.2 213.8 46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1l2.2.4L192 192l106.1-92.9c-17.7-8.3-30-26.3-30-47.1 0-28.7 23.3-52 52-52s52 23.3 52 52zm44.2 176.1L320 143.8l-96.4 84.3c-11.2 9.8-26.4 13.9-41 10.9L114 225.4l88.7 197.2c2.6 5.7 8.3 9.4 14.6 9.4h205.2c6.3 0 12-3.7 14.6-9.4L526 225.4l-68.5 13.7c-14.6 2.9-29.8-1.1-41-10.9z"
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
                  d="M340.2 52a20 20 0 1 0-40 0 20 20 0 1 0 40 0m-42 47.1c-17.7-8.3-30-26.3-30-47.1 0-28.7 23.3-52 52-52s52 23.3 52 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1 0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48l-1.8 3.9L481 442.3c-10.3 23-33.2 37.7-58.4 37.7H217.4c-25.2 0-48-14.8-58.4-37.7L48.1 195.9l-1.7-3.9C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192l106.1-92.9zM48.2 192h-.3.3m406.1 31.4c-9.8 2-19.9-.7-27.3-7.3l-107-93.6-106.9 93.6c-7.5 6.6-17.6 9.2-27.3 7.3l-99-19.8 101.4 225.5c5.2 11.5 16.6 18.9 29.2 18.9h205.2c12.6 0 24-7.4 29.2-18.9l101.5-225.5zM592 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32M64 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M284.2 52a36 36 0 1 1 72 0 36 36 0 1 1-72 0m38.8 51.9L437.5 204c3.7 3.3 8.8 4.6 13.7 3.6l115.3-23.1c3.3 2.1 6.9 3.8 10.7 5L466.4 435.7c-7.8 17.2-24.9 28.3-43.8 28.3H217.4c-18.9 0-36-11.1-43.8-28.3L62.9 189.6c3.8-1.2 7.4-2.9 10.7-5l115.3 23.1c4.9 1 9.9-.4 13.7-3.6L317 103.9c1.1.1 2.1.1 3.2.1 1 0 1.9 0 2.9-.1zM46.4 192 159 442.3c10.3 23 33.2 37.7 58.4 37.7h205.2c25.2 0 48-14.8 58.4-37.7L593.6 192c25.8-.9 46.4-22 46.4-48 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 10.1 3.1 19.4 8.4 27.1L448 192 342 99.2c17.8-8.2 30.2-26.3 30.2-47.2 0-28.7-23.3-52-52-52s-52 23.3-52 52c0 20.8 12.3 38.8 30 47.1L192 192 87.6 171.1C92.9 163.4 96 154 96 144c0-26.5-21.5-48-48-48S0 117.5 0 144c0 26 20.6 47.1 46.4 48M592 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64M16 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M46.4 192 159 442.3c10.3 23 33.2 37.7 58.4 37.7h205.2c25.2 0 48-14.8 58.4-37.7L593.6 192H592c-1 0-2.1 0-3.1-.1l-3-.3c-2-.3-3.9-.6-5.8-1.1q-5.7-1.5-10.8-4.2c-6.8-3.6-12.6-8.9-16.9-15.2L448 192 342 99.2c-6.6 3.1-14 4.8-21.8 4.8-1 0-2 0-2.9-.1s-1.9-.1-2.9-.2c-1.9-.2-3.8-.5-5.6-.9-3.7-.8-7.2-2-10.6-3.6L192 192 87.6 171.1C79 183.7 64.4 192 48 192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M268.2 52a52 52 0 1 1 104 0 52 52 0 1 1-104 0M0 144a48 48 0 1 1 96 0 48 48 0 1 1-96 0m592-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
              </svg>
            );

          case "brands":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1 0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7H217.4c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192l106.1-92.9c-17.7-8.3-30-26.3-30-47.1 0-28.7 23.3-52 52-52s52 23.3 52 52z"
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
