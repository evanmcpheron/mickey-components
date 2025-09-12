import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MessageSmileIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm192 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-169.5 62.1c-9.9 8.8-10.7 24-1.9 33.9 26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32c-8.8-9.9-24-10.7-33.9-1.9z"
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
                  d="M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432zm-.2 76.2.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5l17.1-12.8zM192 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-169.5 62.1c-9.9 8.8-10.7 24-1.9 33.9 26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32c-8.8-9.9-24-10.7-33.9-1.9z"
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
                  d="M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm128 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m128 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-164.1 68.1c-6.6 5.9-7.1 16-1.3 22.6C179.5 302.5 215.7 320 256 320s76.5-17.5 101.4-45.3c5.9-6.6 5.3-16.7-1.3-22.6s-16.7-5.3-22.6 1.3c-19 21.2-46.7 34.6-77.5 34.6s-58.5-13.4-77.5-34.7c-5.9-6.6-16-7.1-22.6-1.3z"
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
                  d="M176 416c0-8.8-7.2-16-16-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H309.3c-3.5 0-6.8 1.1-9.6 3.2L176 496zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm128 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m128 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-158.8 74c-3.3 2.9-3.6 8-.6 11.3C184 287.5 218.1 304 256 304s72-16.5 95.4-42.7c2.9-3.3 2.7-8.3-.6-11.3s-8.3-2.7-11.3.6C319 273.6 289.2 288 256 288s-63-14.4-83.5-37.3c-2.9-3.3-8-3.6-11.3-.6z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm192 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-169.5 62.1c-9.9 8.8-10.7 24-1.9 33.9 26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32c-8.8-9.9-24-10.7-33.9-1.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 144a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-167.6 96c-8.8-9.9-24-10.7-33.9-1.9s-10.7 24-1.9 33.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32z"
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
