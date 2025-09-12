import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TireIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-16.1 62v65c44.3-5.5 81.5-33.6 99.8-72.4l-61.9-20.1c-8.6 13.5-22.1 23.5-38 27.6zm47.9-58 61.8 20.1c1.5-7.8 2.3-15.9 2.3-24.2 0-36.8-15.5-69.9-40.3-93.3l-38.2 52.6c9.1 11 14.5 25.2 14.5 40.6 0 1.4 0 2.7-.1 4zm-40.2-63.5 38.2-52.6C299.5 133.8 278.4 128 256 128s-43.5 5.8-61.8 15.9l28.1 38.8 10 13.8c7.3-2.9 15.3-4.5 23.6-4.5s16.3 1.6 23.6 4.5zm-111.3-33.8C143.5 186.1 128 219.2 128 256c0 8.3.8 16.3 2.3 24.2l61.8-20.2c-.1-1.3-.1-2.7-.1-4 0-15.4 5.5-29.6 14.5-40.6l-10.1-13.9-28.1-38.7zM202 290.4l-61.9 20.1c18.3 38.8 55.5 66.9 99.8 72.4v-65c-15.8-4.1-29.3-14.1-37.9-27.5M256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m336 .9 39.2 12.8c.5-4.5.8-9 .8-13.6 0-31.2-11.9-59.6-31.4-80.9l-24.2 33.4c9.8 13.3 15.6 29.7 15.6 47.5v.9zm-14.9 45.6c-10 14-24.4 24.6-41.2 29.9v41.3c34.4-7 63.5-28.7 80.4-58.3L321 302.6zM232 373.6v-41.3c-16.7-5.3-31.1-15.9-41.1-29.8l-39.3 12.8c16.8 29.6 45.9 51.3 80.3 58.3zm-95.2-104 39.2-12.7v-.9c0-17.8 5.8-34.2 15.6-47.5l-1.7-2.3-22.6-31.1C147.9 196.4 136 224.8 136 256c0 4.6.3 9.2.8 13.6m93.6-89.5c8-2.7 16.6-4.2 25.6-4.2s17.6 1.5 25.6 4.2l24.2-33.4c-15.2-6.9-32-10.8-49.8-10.8s-34.6 3.9-49.8 10.8l22.6 31.3 1.6 2.2zM288 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M256 88a168 168 0 1 1 0 336 168 168 0 1 1 0-336"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m319.9 4 61.8 20.1c1.5-7.8 2.3-15.9 2.3-24.2 0-36.8-15.5-69.9-40.3-93.3l-38.2 52.6c9.1 11 14.5 25.2 14.5 40.6 0 1.4 0 2.7-.1 4zm-9.9 30.4c-8.6 13.5-22.1 23.5-38 27.6v65c44.3-5.5 81.5-33.6 99.8-72.4l-61.9-20.1zM240 383v-65c-15.8-4.1-29.3-14.1-37.9-27.5l-61.9 20.1c18.3 38.8 55.5 66.9 99.8 72.4M130.3 280.2l61.8-20.2c-.1-1.3-.1-2.7-.1-4 0-15.4 5.5-29.6 14.5-40.6l-10.1-13.9-28.1-38.7C143.5 186.1 128 219.2 128 256c0 8.3.8 16.3 2.3 24.2m102.1-83.7c7.3-2.9 15.3-4.5 23.6-4.5s16.3 1.6 23.6 4.5l38.2-52.6C299.5 133.8 278.4 128 256 128s-43.5 5.8-61.8 15.9l28.1 38.8 10 13.8zM288 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m304 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-40.1 63.5v80.3c57.7-3.2 106.3-40.2 126.3-91.6l-76.4-24.9c-9.2 19.4-27.8 33.5-50 36.2zm54.9-51.4 76.4 24.9c3.1-11.8 4.8-24.2 4.8-37 0-45-20.6-85.2-52.9-111.6l-47.2 65c12.4 11.7 20.1 28.2 20.1 46.6 0 4.1-.4 8.2-1.1 12.1zM334.1 135c-22.5-14.6-49.3-23-78.1-23s-55.6 8.5-78.1 23l38 52.3L225 200c9.2-5.1 19.7-8 31-8s21.8 2.9 31 8zm-169.2 9.4C132.6 170.8 112 211 112 256c0 12.8 1.7 25.2 4.8 37l76.4-24.9c-.8-3.9-1.1-8-1.1-12.1 0-18.4 7.7-34.9 20.1-46.6l-9.2-12.7-38-52.3zm33.2 138.9-76.4 24.9c20 51.4 68.6 88.4 126.2 91.6v-80.3c-22.1-2.8-40.7-16.8-49.8-36.2M256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320"
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
                  d="M239.9 318v65c-44.2-5.5-81.5-33.6-99.8-72.4l61.9-20.1c8.6 13.4 22.1 23.4 37.9 27.5m32 0c15.9-4.1 29.4-14.1 38-27.6l61.9 20.1c-18.3 38.8-55.6 66.9-99.8 72.4v-65zm47.9-58c.1-1.3.1-2.7.1-4 0-15.4-5.5-29.6-14.5-40.6l38.2-52.6c24.9 23.3 40.4 56.4 40.4 93.2 0 8.3-.8 16.3-2.3 24.2L319.9 260zm-40.2-63.5c-7.3-2.9-15.3-4.5-23.6-4.5s-16.3 1.6-23.6 4.5l-10-13.8-28.1-38.8c18.2-10.1 39.3-15.9 61.7-15.9s43.5 5.8 61.8 15.9zm-73.1 18.9c-9.1 11-14.5 25.2-14.5 40.6 0 1.4 0 2.7.1 4l-61.8 20.1c-1.5-7.8-2.3-15.9-2.3-24.2 0-36.8 15.5-69.9 40.3-93.3l28.1 38.7 10.1 13.9zM256 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320m-32-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m416 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0m-160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
