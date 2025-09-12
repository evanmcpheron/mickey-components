import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CommentCheckIcon: React.FC<
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
                  d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32 0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9-1.9 24.5-11.4 46.3-21.4 62.9-5.5 9.2-11.1 16.6-15.2 21.6-2.1 2.5-3.7 4.4-4.9 5.7-.6.6-1 1.1-1.3 1.4l-.3.3c-4.6 4.6-5.9 11.4-3.4 17.4s8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3 22.9-10 42.4-21.9 54.3-30.6 31.8 11.5 67 17.9 104.1 17.9zm113-255L241 321c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 159c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4-8.2 6-22.3 14.8-39.4 22.7 5.6-14.7 9.9-31.3 11.3-49.4 1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1M26.3 423.8q-2.4 4.05-5.1 8.1l-.3.5-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5-4.6 4.6-5.9 11.4-3.4 17.4s8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9.8-.1 1.6-.3 2.4-.5 17.8-3.5 34.9-9.5 50.1-16.1 22.9-10 42.4-21.9 54.3-30.6 31.8 11.5 67 17.9 104.1 17.9 141.4 0 256-93.1 256-208S397.4 32 256 32 0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9-1.9 24.5-11.4 46.3-21.4 62.9M369 193c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0z"
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
                  d="M32 240c0-91.4 93.8-176 224-176s224 84.6 224 176-93.8 176-224 176c-32 0-63-5.9-93.5-16.2-9.9-3.3-20.7-1.8-29.2 4.2-15.4 10.7-31.4 20-48.4 27.4l6.3 14.6-6.4-14.7c-10.5 4.6-21.5 8.6-32.7 11.5.5-.9 1.1-1.8 1.6-2.6C68 416.5 76.3 391 79.4 363.9c1-9.2-2.1-17.7-7.4-23.9-24.5-29.4-40-62.9-40-100M256 32C114.5 32 0 125.2 0 240c0 46.6 19.6 87.1 47.4 120.5 0 .1.1.1.1.2-2.6 22.6-9.5 43.5-21.3 63.1-6.5 10.8-13.5 20.8-21.7 29-4.5 4.6-5.9 11.5-3.4 17.4s8.3 9.8 14.8 9.8c28.7 0 57.6-8.9 81.6-19.3 19.2-8.4 37.1-18.7 53.9-30.5.2-.1.5-.2.7-.1C185.5 441.3 220 448 256 448c141.5 0 256-93.2 256-208S397.5 32 256 32m107.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 281.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0z"
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
                  d="M157.3 415c-5-1.8-10.6-1-14.9 2.1-11 8-29.4 19.3-51.2 28.8C68.3 456 41.6 464 16 464l.1-.1.3-.3.1-.1c.4-.4.9-.9 1.5-1.6 1.3-1.4 3.2-3.6 5.4-6.3l-12.2-10 12.2 10C28 450 34 442 40 432c10.7-17.9 21.4-42.1 23.6-69.9.3-4.3-1.1-8.6-3.9-11.8C31.9 318.8 16 280.7 16 240 16 136.9 120.2 48 256 48s240 88.9 240 192-104.2 192-240 192c-35.2 0-68.6-6.1-98.7-17M4.7 452.7c-4.6 4.6-5.9 11.4-3.4 17.4s8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3 22.9-10 42.4-21.9 54.3-30.6 31.8 11.5 67 17.9 104.1 17.9 141.4 0 256-93.1 256-208S397.4 32 256 32 0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9-1.9 24.5-11.4 46.3-21.4 62.9-5.5 9.2-11.1 16.6-15.2 21.6-2.1 2.5-3.7 4.4-4.9 5.7-.6.6-1 1.1-1.3 1.4l-.3.3zm353-271c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 292.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0z"
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
                  d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32 0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9-1.9 24.5-11.4 46.3-21.4 62.9-5.5 9.2-11.1 16.6-15.2 21.6-2.1 2.5-3.7 4.4-4.9 5.7-.6.6-1 1.1-1.3 1.4l-.3.3c-4.6 4.6-5.9 11.4-3.4 17.4s8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3 22.9-10 42.4-21.9 54.3-30.6 31.8 11.5 67 17.9 104.1 17.9zm113-255L241 321c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 159c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M369 159c9.4 9.4 9.4 24.6 0 33.9L241 321c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 159c9.4-9.4 24.6-9.4 33.9 0z"
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
