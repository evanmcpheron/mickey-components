import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ThoughtBubbleIcon: React.FC<
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
                  d="M374.8 80.3C355.9 33.2 309.8 0 256 0s-99.9 33.2-118.8 80.3c-3-.2-6.1-.3-9.2-.3C57.3 80 0 137.3 0 208s57.3 128 128 128c14.4 0 28.3-2.4 41.3-6.8 15.4 32.4 48.4 54.8 86.7 54.8s71.3-22.4 86.7-54.8c12.9 4.4 26.8 6.8 41.3 6.8 70.7 0 128-57.3 128-128S454.7 80 384 80c-3.1 0-6.1.1-9.2.3M144 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96M32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M256 0c-48.7 0-91.4 25.6-115.4 64C62.6 65.9 0 129.6 0 208c0 79.5 64.5 144 144 144 9.4 0 18.7-.9 27.6-2.7 21.7 21.4 51.5 34.7 84.4 34.7s62.7-13.3 84.4-34.7c9 1.7 18.2 2.7 27.6 2.7 79.5 0 144-64.5 144-144 0-78.4-62.6-142.1-140.6-144-24-38.4-66.7-64-115.4-64m-79.7 98.7C190.4 68.7 220.8 48 256 48s65.6 20.7 79.7 50.7c4.3 9.1 13.8 14.6 23.8 13.7 2.8-.2 5.6-.4 8.5-.4 53 0 96 43 96 96s-43 96-96 96c-10 0-19.7-1.5-28.7-4.4-9.6-3-20 .3-26.2 8.3C299.9 325 279.2 336 256 336s-43.9-11-57.1-28.1c-6.1-8-16.6-11.3-26.2-8.3-9 2.8-18.7 4.4-28.7 4.4-53 0-96-43-96-96s43-96 96-96c2.9 0 5.7.1 8.5.4 10 .9 19.5-4.6 23.8-13.7M192 432a48 48 0 1 0-96 0 48 48 0 1 0 96 0M64 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M256 0c-50.7 0-94.4 29.4-115.2 72.1-1.6-.1-3.2-.1-4.8-.1C60.9 72 0 132.9 0 208s60.9 136 136 136c10.8 0 21.2-1.3 31.3-3.6 20.5 26.5 52.6 43.6 88.7 43.6s68.2-17.1 88.7-43.6c10.1 2.4 20.5 3.6 31.3 3.6 75.1 0 136-60.9 136-136S451.1 72 376 72c-1.6 0-3.2 0-4.8.1C350.4 29.4 306.7 0 256 0m-90 94.5C179.6 58 214.8 32 256 32s76.4 26 90 62.5c2.6 7 9.6 11.2 17 10.3 4.3-.5 8.6-.8 13-.8 57.4 0 104 46.6 104 104s-46.6 104-104 104c-11.5 0-22.6-1.9-32.9-5.3-7.1-2.4-14.8.5-18.7 6.9-14.1 23-39.5 38.4-68.4 38.4s-54.3-15.4-68.4-38.5c-3.9-6.4-11.6-9.2-18.7-6.9-10.3 3.4-21.4 5.3-32.9 5.3C78.6 312 32 265.4 32 208s46.6-104 104-104c4.4 0 8.8.3 13 .8 7.4.9 14.4-3.3 17-10.3M144 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-80 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M137.2 80.3C156.1 33.3 202.1 0 256 0s99.9 33.3 118.8 80.3c3-.2 6.1-.3 9.2-.3 70.7 0 128 57.3 128 128s-57.3 128-128 128c-12.9 0-25.3-1.9-37.1-5.5-17.7 31.9-51.8 53.5-90.9 53.5s-73.2-21.6-90.9-53.5c-11.7 3.6-24.2 5.5-37.1 5.5C57.3 336 0 278.7 0 208S57.3 80 128 80c3.1 0 6.1.1 9.2.3M256 16c-49.1 0-90.8 31.5-105.9 75.5-1.2 3.6-4.8 5.8-8.5 5.3-4.4-.5-9-.8-13.6-.8-61.9 0-112 50.1-112 112s50.1 112 112 112c13.5 0 26.4-2.4 38.3-6.7 3.9-1.4 8.2.4 10 4.1 14.1 29.9 44.5 50.6 79.7 50.6s65.6-20.7 79.7-50.6c1.8-3.7 6.1-5.5 10-4.1 11.9 4.4 24.9 6.7 38.3 6.7 61.9 0 112-50.1 112-112S445.9 96 384 96c-4.6 0-9.1.3-13.6.8-3.7.5-7.3-1.8-8.5-5.3C346.8 47.5 305.1 16 256 16M32 496a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m144-16a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M144 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96M32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M374.8 80.3C355.9 33.2 309.8 0 256 0s-99.9 33.2-118.8 80.3c-3-.2-6.1-.3-9.2-.3C57.3 80 0 137.3 0 208s57.3 128 128 128c14.4 0 28.3-2.4 41.3-6.8 15.4 32.4 48.4 54.8 86.7 54.8s71.3-22.4 86.7-54.8c12.9 4.4 26.8 6.8 41.3 6.8 70.7 0 128-57.3 128-128S454.7 80 384 80c-3.1 0-6.1.1-9.2.3"
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
