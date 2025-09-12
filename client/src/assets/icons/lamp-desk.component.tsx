import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LampDeskIcon: React.FC<
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
                  d="M192 65.9C192 29.5 221.5 0 257.9 0c17.5 0 34.3 6.9 46.6 19.3L349.3 64H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-73.5 73.5-45.1 45.1-73.5 73.5c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V173.3l-92.6 92.6L209 448h143c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h111L97 263.8c-2.7-10.9.5-22.4 8.4-30.4L218.7 120l-7.4-7.4C198.9 100.2 192 83.4 192 65.9M432 288c-14.7 0-27.8-6.6-36.6-16.9l67.7-67.7c10.3 8.8 16.9 21.9 16.9 36.6 0 26.5-21.5 48-48 48"
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
                  d="m347.3 97.9-38-38c-7.7-7.6-18-11.9-28.7-11.9-22.4 0-40.6 18.2-40.6 40.6 0 10.8 4.3 21.1 11.9 28.7l38.1 38.1c9 9 14.1 21.2 14.1 33.9v60.1L441.4 112h-60.1c-12.7 0-24.9-5.1-33.9-14.1zm-4.1-72L381.3 64H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-73.5 73.5-45.1 45.1-73.5 73.5c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6v-98.8l-13.7-13.7c-.6.7-1.3 1.4-2 2.1l-93.1 86L204.4 464H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h130.5L96.9 262.6c-2.5-8.7.1-18.1 6.8-24.2l104-96c.5-.5 1-.9 1.5-1.3A88.7 88.7 0 0 1 192 88.6C192 39.7 231.7 0 280.6 0c23.5 0 46 9.3 62.6 25.9M432 288c-14.7 0-27.8-6.6-36.6-16.9l67.7-67.7c10.3 8.8 16.9 21.9 16.9 36.6 0 26.5-21.5 48-48 48"
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
                  d="M381.3 96H480L288 288v-98.7c0-8.5-3.4-16.6-9.4-22.6l-38.1-38.1c-10.5-10.6-16.5-25-16.5-40 0-31.3 25.3-56.6 56.6-56.6 15 0 29.4 6 40 16.6l38.1 38.1c6 6 14.1 9.4 22.6 9.4zm0-32-38.1-38.1C326.6 9.3 304.1 0 280.6 0 231.7 0 192 39.7 192 88.6c0 21.7 7.9 42.5 22.2 58.6l-97.5 97.5c-4 4-5.6 9.9-4.1 15.4L171.2 480H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H204.3l-58.5-219.2 90.8-90.8 19.4 19.3V288c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l192-192c9.2-9.2 11.9-22.9 6.9-34.9S493 64 480 64zm-2.6 223.9C391 298 406.8 304 424 304c39.8 0 72-32.2 72-72 0-17.2-6-33-16.1-45.4L457 209.5c4.4 6.4 7 14.2 7 22.5 0 22.1-17.9 40-40 40-8.4 0-16.1-2.6-22.5-7l-22.8 22.8z"
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
                  d="M381.3 80H480c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-192 192c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-98.7c0-4.2-1.7-8.3-4.7-11.3l-38.1-38.1c-13.6-13.6-21.2-32.1-21.2-51.3 0-40.1 32.5-72.6 72.6-72.6 19.2 0 37.7 7.6 51.3 21.3L370 75.4c3 3 7.1 4.7 11.3 4.7zm0-16-38.1-38.1C326.6 9.3 304.1 0 280.6 0 231.7 0 192 39.7 192 88.6c0 23.5 9.3 46 25.9 62.6l1.8 1.8-97.4 97.4c-2 2-2.8 4.9-2.1 7.7l61.4 238H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H198.2l-61.3-237.7 94.1-94.1 25 25V288c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l192-192c9.2-9.2 11.9-22.9 6.9-34.9S493 64 480 64zm4.7 216.5c9 4.8 19.2 7.5 30 7.5 35.3 0 64-28.7 64-64 0-10.9-2.7-21.1-7.5-30l-12 12c2.2 5.6 3.5 11.6 3.5 18 0 26.5-21.5 48-48 48-6.4 0-12.4-1.2-18-3.5z"
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
                  d="M105.4 233.4 218.7 120l37.3 37.3v16l-92.6 92.6L209 448h-66L97 263.8c-2.7-10.9.5-22.4 8.4-30.4M183.3 512h1.4zm262.9-336.9c11 10.2 17.8 24.8 17.8 40.9 0 30.9-25.1 56-56 56-16.2 0-30.7-6.8-40.9-17.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 65.9C192 29.5 221.5 0 257.9 0c17.5 0 34.3 6.9 46.6 19.3L349.3 64H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-192 192c-9.2 9.2-22.9 11.9-34.9 6.9S256 301 256 288V157.3l-44.7-44.7C198.9 100.2 192 83.4 192 65.9M32 448h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
