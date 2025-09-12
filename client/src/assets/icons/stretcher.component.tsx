import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StretcherIcon: React.FC<
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
                  d="M83 79.2C64.9 59.8 34.5 58.9 15.2 77s-20.3 48.5-2.2 67.8l110.5 117.9c15.1 16.1 36.3 25.3 58.4 25.3H592c26.5 0 48-21.5 48-48s-21.5-48-48-48H188.8zM240 448a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80 0c0-5.3-.7-10.5-1.9-15.5l49.9-36.3 49.9 36.3c-1.2 5-1.9 10.2-1.9 15.5 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-12.4 0-24 3.5-33.9 9.7l-37.3-27.1 64-46.5h-81.6L368 336.9 344.8 320h-81.6l64 46.5-37.3 27.1c-9.8-6.1-21.4-9.7-33.9-9.7-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64zm160-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M41.4 71.5c-9.1-9.6-24.3-10-33.9-.9s-10 24.3-.9 33.9l133.1 140.1c16.6 17.5 39.7 27.4 63.8 27.4H616c13.3 0 24-10.7 24-24s-10.7-24-24-24H203.5c-11 0-21.4-4.5-29-12.4zM241.2 304l86 62.5-37.3 27.1c-9.8-6.1-21.4-9.7-33.9-9.7-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64c0-5.3-.7-10.5-1.9-15.5l49.9-36.2 49.9 36.3c-1.2 5-1.9 10.2-1.9 15.5 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-12.4 0-24 3.5-33.9 9.7l-37.3-27.1 86-62.5h-81.6L368 336.9 322.8 304zM240 448a16 16 0 1 1 32 0 16 16 0 1 1-32 0m224 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M27.3 68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l141.2 141.3c15 15 35.4 23.4 56.6 23.4H624c8.8 0 16-7.2 16-16s-7.2-16-16-16H202.5c-12.7 0-24.9-5.1-33.9-14.1zM224 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0c0-8.8-1.8-17.3-5-24.9l53-40.6 53 40.6c-3.2 7.7-5 16.1-5 24.9 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-14.9 0-28.6 5.1-39.5 13.6l-46.2-35.3 97.3-74.3h-52.7L368 342.2 297.1 288h-52.7l97.2 74.4-46.2 35.3c-10.8-8.6-24.5-13.7-39.4-13.7-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M177.1 202.9 71.3 90.1c-12-12.9-32.3-13.5-45.2-1.4s-13.5 32.3-1.5 45.2l110.6 117.9c12.1 12.9 29 20.2 46.7 20.2H592c17.7 0 32-14.3 32-32s-14.3-32-32-32H188.8c-4.4 0-8.6-1.8-11.7-5.1M83 79.2 188.8 192H592c26.5 0 48 21.5 48 48s-21.5 48-48 48H181.9c-22.1 0-43.2-9.2-58.4-25.3L13 144.8C-5.1 125.5-4.2 95.1 15.2 77S64.9 59.8 83 79.2M272 464a32 32 0 1 0-64 0 32 32 0 1 0 64 0m16 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48c14.2 0 27 6.2 35.7 16l77.3-48.8L253 320h30l85 53.7 85-53.7h30l-100 63.2 77.3 48.8c8.8-9.8 21.5-16 35.7-16 26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48c0-6.6 1.3-12.8 3.7-18.5L368 392.6l-83.7 52.9c2.4 5.7 3.7 12 3.7 18.5m208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="m327.2 366.5-108-78.5h81.6l67.2 48.9 67.2-48.9h81.6l-108 78.5 37.3 27.1c9.8-6.1 21.4-9.7 33.9-9.7 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-5.3.7-10.5 1.9-15.5L368 396.2l-49.9 36.3c1.2 5 1.9 10.2 1.9 15.5 0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c12.4 0 24 3.5 33.9 9.7l37.3-27.1zM256 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32m224 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M15.2 77C34.5 58.9 64.9 59.8 83 79.2L188.8 192H592c26.5 0 48 21.5 48 48s-21.5 48-48 48H181.9c-22.1 0-43.2-9.2-58.4-25.3L13 144.8C-5.1 125.5-4.2 95.1 15.2 77"
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
