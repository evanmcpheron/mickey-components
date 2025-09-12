import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserTagIcon: React.FC<
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
                  d="M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3l107.4 107.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7zm24 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m208 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M49.3 464c8.9-63.3 63.3-112 129-112h91.4c18.7 0 36.5 3.9 52.6 11-1.5-6.1-2.3-12.4-2.3-18.8v-33c-15.9-4.7-32.8-7.2-50.3-7.2h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c10 0 18.8-4.9 24.2-12.5L396.9 454c.7 3.3 1.3 6.6 1.8 10zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3l107.4 107.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7zm24 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M32 480c1.2-79.7 66.2-144 146.3-144h91.4c17.7 0 34.6 3.1 50.3 8.9v-33.7c-15.9-4.7-32.8-7.2-50.3-7.2h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c10 0 18.8-4.9 24.2-12.5l-26.8-26.8c.2 2.4.2 4.8.3 7.2H32zm513.9 11.3 73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3l107.4 107.3c18.7 18.7 49.1 18.7 67.9 0zM384 256h82.7c8.5 0 16.6 3.4 22.6 9.4l107.4 107.3c6.2 6.2 6.2 16.4 0 22.6l-73.4 73.4c-6.2 6.2-16.4 6.2-22.6 0L393.4 361.4c-6-6-9.4-14.1-9.4-22.6zm56 40a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1-224 0m240 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M16 482.3C16 392.7 88.7 320 178.3 320h91.4c17.6 0 34.5 2.8 50.3 7.9v-16.7c-15.9-4.7-32.8-7.2-50.3-7.2h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c10 0 18.8-4.9 24.2-12.5l-11.7-11.7c-2.1 4.8-6.9 8.1-12.5 8.1H29.7c-7.6 0-13.7-6.1-13.7-13.7zM384 240h82.7c12.7 0 24.9 5.1 33.9 14.1L608 361.4c12.5 12.5 12.5 32.8 0 45.3L534.6 480c-12.5 12.5-32.8 12.5-45.3 0L382.1 372.7c-9-9-14.1-21.2-14.1-33.9V256c0-8.8 7.2-16 16-16m-32 16v82.7c0 17 6.7 33.3 18.7 45.3l107.4 107.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384c-17.7 0-32 14.3-32 32m88 40a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M96 128a128 128 0 1 1 256 0 128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c17.5 0 34.3 2.5 50.3 7.2v33c0 21.1 8.4 41.2 23.3 56.1l99.2 99.2c-5.4 7.5-14.2 12.5-24.2 12.5H29.7C13.3 512 0 498.7 0 482.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 256c0-17.7 14.3-32 32-32h82.7c17 0 33.3 6.7 45.3 18.7l107.3 107.4c18.7 18.7 18.7 49.1 0 67.9l-73.4 73.4c-18.7 18.7-49.1 18.7-67.9 0L370.7 384c-12-12-18.7-28.3-18.7-45.3zm80 72a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
