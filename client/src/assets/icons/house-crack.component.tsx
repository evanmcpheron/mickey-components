import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseCrackIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64h102.4l-31.3-52.2c-4.1-6.8-2.6-15.5 3.5-20.5L288 368l-60.2-82.8c-10.9-15 8.2-33.5 22.8-22l117.9 92.6c8 6.3 8.2 18.4.4 24.9L288 448l38.4 64h122.1c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0l264 224c10.1 8.6 11.3 23.7 2.8 33.8s-23.7 11.3-33.8 2.8L512 245.5V432c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V245.5l-24.5 20.8c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8zM288 55.5 112 204.8V432c0 17.7 14.3 32 32 32h85.9l-30.3-48.1c-4.4-6.9-2.8-16 3.6-21.1l84.8-67.2-58.1-76.1c-11.3-14.8 7.4-33.6 22.3-22.5l115.2 86.2c8.4 6.3 8.6 18.8.4 25.3L288 403.8l37.9 60.2H432c17.7 0 32-14.3 32-32V204.8z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235v197c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V235l37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6zM96 432V206.7L288 37.3l192 169.4V432c0 26.5-21.5 48-48 48H312.6l-50.4-75.6 82.7-55.1c4-2.7 6.6-7 7-11.7s-1.2-9.5-4.6-12.9l-96-96c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l82.2 82.2-79.8 53.2c-7.4 4.9-9.3 14.8-4.4 22.2l47.4 71.1H144c-26.5 0-48-21.5-48-48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M293.3 2c-3-2.7-7.6-2.7-10.6 0L2.7 250c-3.3 2.9-3.6 8-.7 11.3s8 3.6 11.3.7L64 217.1V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V217.1l50.7 44.9c3.3 2.9 8.4 2.6 11.3-.7s2.6-8.4-.7-11.3zM80 448V202.9L288 18.7l208 184.2V448c0 26.5-21.5 48-48 48H300.3l-56.9-85.3L348 350.9c2.3-1.3 3.8-3.6 4-6.2s-.8-5.1-2.8-6.8l-112-96c-3.4-2.9-8.4-2.5-11.3.9s-2.5 8.4.9 11.3l103.4 88.6L228 401.1c-1.9 1.1-3.3 3-3.8 5.1s-.1 4.4 1.1 6.3l55.8 83.5H128c-26.5 0-48-21.5-48-48"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64.1 448 64 270.5l224-196 224.1 196.1.4 177.3c.1 35.4-28.6 64.1-64 64.1H326.4L288 448l80.8-67.3c7.8-6.5 7.6-18.6-.4-24.9l-117.8-92.6c-14.6-11.5-33.8 7-22.8 22L288 368l-85.5 71.2c-6.1 5-7.5 13.8-3.5 20.5l31.4 52.3H128.1c-35.3 0-64-28.6-64-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2z"
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
