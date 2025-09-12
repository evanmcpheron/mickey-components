import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TransgenderIcon: React.FC<
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
                  d="M112 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-31 31L112 78.1l7-7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-7 7 15.2 15.2C187.7 107.6 220.5 96 256 96s68.3 11.6 94.9 31.2l68.8-68.8-31-31c-4.6-4.6-5.9-11.5-3.5-17.4S393.5.1 400 .1h96c8.8 0 16 7.2 16 16v96c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-31-31-68.8 68.8c19.5 26.5 31.1 59.3 31.1 94.8 0 80.2-59 146.6-136 158.2V432h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-17.8c-77-11.6-136-78-136-158.2 0-35.5 11.6-68.3 31.2-94.9L112 145.9l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l7-7-19.8-19.7-31 31c-4.6 4.6-11.5 5.9-17.4 3.5S0 118.5 0 112V16C0 7.2 7.2 0 16 0zm240 256a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
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
                  d="M128 24c0-13.3-10.7-24-24-24H24C10.7 0 0 10.7 0 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9L78.1 112l-7 7c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7 15.2 15.2C107.6 187.7 96 220.5 96 256c0 80.2 59 146.6 136 158.2V432h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v-17.8c77-11.6 136-78 136-158.2 0-35.5-11.6-68.3-31.2-94.9L464 81.9V104c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h22.1l-79.2 79.2C324.3 107.6 291.5 96 256 96s-68.3 11.6-94.9 31.2L145.9 112l7-7c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-7 7L81.9 48H104c13.3 0 24-10.7 24-24m128 344c-61.9 0-112-50.1-112-112 0-29.8 11.7-56.9 30.7-77a21.976 21.976 0 0 0 4.3-4.3c20.1-19 47.2-30.7 77-30.7s56.9 11.7 77 30.7a21.976 21.976 0 0 0 4.3 4.3c19 20.1 30.7 47.2 30.7 77 0 61.9-50.1 112-112 112"
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
                  d="M144 32c8.8 0 16-7.2 16-16s-7.2-16-16-16H32c-8.8 0-16 7.2-16 16v112c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6L89.4 96l-4.7 4.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l4.7-4.7 13.2 13.2C106.8 157.9 96 189.7 96 224c0 83 63.1 151.2 144 159.2V416h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32.8c80.9-8 144-76.2 144-159.2 0-34.3-10.8-66.1-29.2-92.2L464 54.6V128c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h73.4l-75.6 75.6C337.1 80.6 298.5 64 256 64s-81.1 16.6-109.8 43.6L134.6 96l4.7-4.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-4.7 4.7L70.6 32zm112 64a128 128 0 1 1 0 256 128 128 0 1 1 0-256"
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
                  d="M136 16c4.4 0 8-3.6 8-8s-3.6-8-8-8H24c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3L92.7 88l-18.4 18.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L104 99.3l26 26c-21.3 27.2-34 61.4-34 98.7 0 85.7 67.4 155.6 152 159.8V432h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48v-48.2c84.6-4.2 152-74.1 152-159.8 0-37.2-12.7-71.5-34-98.7l98-98V120c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8H376c-4.4 0-8 3.6-8 8s3.6 8 8 8h92.7l-97.2 97.2C342.3 82.9 301.4 64 256 64s-86.3 18.9-115.5 49.2L115.3 88l18.3-18.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L104 76.7 43.3 16zm120 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288"
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
                  d="M192 256a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-31 31L112 78.1l7-7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-7 7 15.2 15.2C187.7 107.6 220.5 96 256 96s68.3 11.6 94.9 31.2l68.8-68.8-31-31c-4.6-4.6-5.9-11.5-3.5-17.4S393.5.1 400 .1h96c8.8 0 16 7.2 16 16v96c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-31-31-68.8 68.8c19.5 26.5 31.1 59.3 31.1 94.8 0 80.2-59 146.6-136 158.2V432h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-17.8c-77-11.6-136-78-136-158.2 0-35.5 11.6-68.3 31.2-94.9L112 145.9l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l7-7-19.8-19.7-31 31c-4.6 4.6-11.5 5.9-17.4 3.5S0 118.5 0 112V16C0 7.2 7.2 0 16 0zm240 256a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
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
