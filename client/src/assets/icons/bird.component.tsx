import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BirdIcon: React.FC<
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
                  d="M0 192v-3.6C0 172.7 12.7 160 28.4 160H224c17.7 0 32-14.3 32-32V96c0-53 43-96 96-96 47.5 0 86.9 34.5 94.6 79.7l57.6 34.6c4.8 2.9 7.8 8.1 7.8 13.7s-2.9 10.8-7.8 13.7L448 175.5V192c0 93.9-57.7 174.3-139.7 207.6l40.9 77.2c6.2 11.7 1.7 26.2-10 32.4s-26.2 1.7-32.4-10l-45.7-86.3C249 415 236.6 416 224 416h-3l32.2 60.8c6.2 11.7 1.7 26.2-10 32.4s-26.2 1.7-32.4-10l-48.6-91.9C68.5 380.5 0 294.3 0 192m376-72a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M48.7 208H192c44.2 0 80-35.8 80-80v-16c0-35.3 28.7-64 64-64s64 28.7 64 64v80c0 97.2-78.8 176-176 176-91.8 0-167.2-70.3-175.3-160M0 188.4v3.6c0 102.3 68.5 188.5 162.1 215.4l48.6 91.9c6.2 11.7 20.7 16.2 32.4 10s16.2-20.7 10-32.4L221 416h3c12.6 0 25-1 37.1-3.1l45.7 86.3c6.2 11.7 20.7 16.2 32.4 10s16.2-20.7 10-32.4l-40.9-77.2C390.3 366.3 448 285.9 448 192v-16.5l56.2-33.7c4.8-2.9 7.8-8.1 7.8-13.7s-2.9-10.8-7.8-13.7l-61.7-37C427.9 32.4 385.7 0 336 0c-61.9 0-112 50.1-112 112v16c0 17.7-14.3 32-32 32H28.4C12.7 160 0 172.7 0 188.4M336 144a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M32 192h160c35.3 0 64-28.7 64-64v-24c0-39.8 32.2-72 72-72s72 32.2 72 72v96c0 101.6-82.4 184-184 184S32 301.6 32 200zm-32-3.6V200c0 106.2 76.7 194.6 177.8 212.6l48.1 90.9c4.1 7.8 13.8 10.8 21.6 6.7s10.8-13.8 6.7-21.6L215.8 416h.2c19.3 0 37.9-2.5 55.7-7.3l50.2 94.7c4.1 7.8 13.8 10.8 21.6 6.7s10.8-13.8 6.7-21.6l-47.9-90.4C378.6 364.8 432 288.6 432 200v-14.9l72.2-43.3c4.8-2.9 7.8-8.1 7.8-13.7s-2.9-10.8-7.8-13.7l-79-47.6C410.2 27.8 372.3 0 328 0c-57.4 0-104 46.6-104 104v24c0 17.7-14.3 32-32 32H28.4C12.7 160 0 172.7 0 188.4M464.9 128 432 147.7v-39.4zM328 144a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M240 104c0-48.6 39.4-88 88-88 41.1 0 75.6 28.2 85.3 66.3l-.3.5.5.3c1.6 6.7 2.5 13.8 2.5 21v80c0 110.3-90.8 200-201.3 200C105.5 384 16 295.5 16 186.7c0-5.9 4.8-10.7 10.7-10.7H192c26.5 0 48-21.5 48-48zm192 0c0-3.4-.2-6.8-.5-10.2l57 34.2-56.5 33.9zm0 80v-3.5l76.1-45.7c2.4-1.4 3.9-4 3.9-6.9s-1.5-5.4-3.9-6.9l-80-48-.9-.6C413.8 30.5 374.5 0 328 0c-57.4 0-104 46.6-104 104v24c0 17.7-14.3 32-32 32H26.7C11.9 160 0 171.9 0 186.7 0 292.2 77.7 379.8 178.6 397l62.5 111c2.2 3.8 7 5.2 10.9 3s5.2-7 3-10.9l-56.7-100.7c5.4.4 10.9.6 16.4.6 18.8 0 37-2.4 54.4-6.9l68.1 115c2.2 3.8 7.2 5.1 11 2.8s5.1-7.2 2.8-11l-66-111.5c85.1-29.1 147-109.6 147-204.4m-96-56a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="m162.1 407.4 48.6 91.9c6.2 11.7 20.7 16.2 32.4 10s16.2-20.7 10-32.4L221 416c-20.4-.3-40.1-3.3-58.9-8.6m99 5.6 45.7 86.3c6.2 11.7 20.7 16.2 32.4 10s16.2-20.7 10-32.4l-40.9-77.2c-15 6.1-30.8 10.6-47.2 13.4zM448 175.5l56.2-33.7c4.8-2.9 7.8-8.1 7.8-13.7s-2.9-10.8-7.8-13.7l-57.6-34.7c.9 5.3 1.4 10.7 1.4 16.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 188.4v3.6c0 123.7 100.3 224 224 224s224-100.3 224-224V96c0-53-43-96-96-96s-96 43-96 96v32c0 17.7-14.3 32-32 32H28.4C12.7 160 0 172.7 0 188.4M352 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
