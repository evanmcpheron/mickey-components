import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EnvelopeOpenIcon: React.FC<
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
                  d="M64 208.1 256 65.9l192 142.2v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0"
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
                  d="M255.4 48.2c.2-.1.4-.2.6-.2s.4.1.6.2l204 145.8c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1v-13.6c0-2.6 1.2-5 3.4-6.5zM48 276.2l142 116.6c38.4 31.5 93.7 31.5 132 0l142-116.6V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8zM256 0c-10.2 0-20.2 3.2-28.5 9.1l-204 145.8C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0"
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
                  d="M241.6 36.8 45 182.4c-8.1 6-13 15.6-13 25.7v3.2l10.2 8.3 195.6 160.7c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5l195.6-160.7 10.2-8.3v-3.2c0-10.1-4.8-19.7-13-25.7L270.4 36.8c-4.2-3.1-9.2-4.8-14.4-4.8s-10.3 1.7-14.4 4.8M32 252.7V448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V252.7L294.5 405.1c-10.8 8.9-24.5 13.8-38.5 13.8s-27.7-4.9-38.5-13.8zM222.5 11c9.7-7.1 21.4-11 33.5-11s23.8 3.9 33.5 11l196.6 145.7c16.3 12.1 25.9 31.1 25.9 51.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208.1c0-20.3 9.6-39.4 25.9-51.4z"
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
                  d="M232 23.9 35.4 169.5C23.2 178.6 16 192.9 16 208.1v8.4l1.6 1.3 215.1 176.7c6.6 5.4 14.8 8.3 23.3 8.3s16.7-2.9 23.3-8.3l215.1-176.7 1.6-1.3v-8.4c0-15.2-7.2-29.5-19.4-38.6L280 23.9c-7-5.1-15.4-7.9-24-7.9s-17 2.8-24 7.9M16 237.2V448c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V237.2L289.4 406.9c-9.4 7.7-21.2 12-33.4 12s-24-4.2-33.4-12zM222.5 11c9.7-7.1 21.4-11 33.5-11s23.8 3.9 33.5 11l196.6 145.7c16.3 12.1 25.9 31.1 25.9 51.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208.1c0-20.3 9.6-39.4 25.9-51.4z"
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
                  d="M256 65.9 64 208.1v47.4L222.5 373c9.7 7.2 21.4 11 33.5 11s23.8-3.9 33.5-11L448 255.5v-47.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 208.1 256 65.9l192 142.2v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0"
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
