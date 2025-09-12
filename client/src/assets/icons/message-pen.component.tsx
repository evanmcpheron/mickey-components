import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MessagePenIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm340.8 59c-14.7-14.7-38.6-14.7-53.3 0l-14.9 15 53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM178.1 232.5c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.6c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9-53.3-53.3z"
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
                  d="M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432zm-.2 76.2.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5l17.1-12.8zm133-369.2c-14.7-14.7-38.6-14.7-53.3 0l-14.9 15 53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM178.1 232.5c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.6c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9-53.3-53.3z"
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
                  d="M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm252.3 147.7c4.9 4.9 4.9 12.9 0 17.8l-8.1 8.1-17.8-17.8 8.1-8.1c4.9-4.9 12.9-4.9 17.8 0m-109.2 91.4 60.7-60.7 17.8 17.8-60.8 60.8c-2.1 2.1-4.6 3.5-7.4 4.2L198 266l4.9-19.5c.7-2.8 2.2-5.4 4.2-7.4M275.8 125l-91.4 91.5c-6.1 6.2-10.5 13.9-12.6 22.3l-11.3 45.3c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l45.3-11.3c8.4-2.1 16.2-6.5 22.3-12.6l91.4-91.5c17.4-17.4 17.4-45.6 0-63s-45.7-17.4-63.1 0z"
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
                  d="M176 416c0-8.8-7.2-16-16-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H309.3c-3.5 0-6.8 1.1-9.6 3.2L176 496zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm100.6 299.4c4 4 9.7 5.6 15.2 4.2l36.7-9.2c5.6-1.4 10.8-4.3 14.9-8.4L341 176.4c14.7-14.7 14.7-38.6 0-53.4s-38.6-14.7-53.4 0L178 232.6c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.7c-1.4 5.5.2 11.2 4.2 15.2m15.7-28.9 4.8-19.1c.7-2.8 2.2-5.4 4.2-7.4l85.7-85.7 30.7 30.7-85.7 85.7c-2.1 2.1-4.6 3.5-7.4 4.2l-19.1 4.8-17.6 4.4zm149.4-105.4L317 177.7 286.3 147l12.6-12.6c8.5-8.5 22.3-8.5 30.7 0s8.5 22.3 0 30.7z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm340.8 59c-14.7-14.7-38.6-14.7-53.3 0l-14.9 15 53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM178.1 232.5c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.6c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9-53.3-53.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m287.5 123-14.9 15 53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3s-38.6-14.7-53.3 0zM250 160.6l-71.9 71.9c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.6c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9z"
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
