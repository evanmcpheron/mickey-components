import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SyringeIcon: React.FC<
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
                  d="m441 7 32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15-38.2 38.1 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3.3.6.7 1 1l16 16 56 56 56 56 16 16 1 1-191 191a55.92 55.92 0 0 1-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57v-88.8c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"
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
                  d="M407 7c-9.4 9.4-9.4 24.6 0 33.9l15 15-38 38.2L329 39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72 72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 38-38.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L473 39 441 7c-9.4-9.4-24.6-9.4-33.9 0zM271.4 94.6l-191 191C69.9 296.2 64 310.4 64 325.3v88.8L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h88.8c14.9 0 29.1-5.9 39.6-16.4l191-191c-.3-.3-.7-.6-1-1l-33-33-191 191c-1.5 1.5-3.5 2.3-5.7 2.3H112v-74.5c0-2.1.8-4.2 2.3-5.7l27.3-27.3 23 23c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-23-23 41.4-41.4 23 23c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-23-23 41.4-41.4 23 23c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-23-23 13.1-13.1-33-33c-.3-.3-.6-.7-1-1z"
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
                  d="M404.7 4.7c-6.2 6.2-6.2 16.4 0 22.6L433.4 56 384 105.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80 80 80c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L406.6 128 456 78.6l28.7 28.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-40-40-40-40c-6.2-6.2-16.4-6.2-22.6 0m-272 224-50 49.9c-12 12-18.7 28.3-18.7 45.3v101.5L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L86.6 448h101.5c17 0 33.3-6.7 45.3-18.7l192-192-22.6-22.6-192 192c-6 6-14.1 9.4-22.6 9.4H96v-92.2c0-8.5 3.4-16.6 9.4-22.6l38.6-38.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L166.6 240l41.4-41.4 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L230.6 176l66.7-66.7-22.6-22.7-78.1 78.1-64 64z"
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
                  d="M402.3 2.3c-3.1 3.1-3.1 8.2 0 11.3L444.7 56 384 116.7l-82.3-82.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l88 88 88 88c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L395.3 128 456 67.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-48-48-48-48c-3.1-3.1-8.2-3.1-11.3 0m-264 232-57.9 58A55.92 55.92 0 0 0 64 331.9v104.8L2.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L75.3 448h104.8c14.9 0 29.1-5.9 39.6-16.4l205.7-205.7-11.3-11.3-205.7 205.7c-7.5 7.5-17.7 11.7-28.3 11.7H80V331.9c0-10.6 4.2-20.8 11.7-28.3l52.3-52.3 58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L155.3 240l52.7-52.7 58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L219.3 176l78.1-78.1-11.3-11.3-83.7 83.7-64 64z"
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
                  d="m294.1 72-83.7 83.7 57 57c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-57-57-41.4 41.4 57 57c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-57-57-43.4 43.4A55.92 55.92 0 0 0 64 325.3v88.8L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h88.8c14.9 0 29.1-5.9 39.6-16.4L440 217.9c-.3-.3-.7-.6-1-.9l-16-16-56-56-56-56-16-16c-.3-.3-.6-.7-.9-1"
                />
                <path
                  className="aps-icon-foreground"
                  d="M441 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15L384 94.1 329 39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72 72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 38-38.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L473 39zM210.3 155.7l-22.6 22.6 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm-64 64-22.6 22.6 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"
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
