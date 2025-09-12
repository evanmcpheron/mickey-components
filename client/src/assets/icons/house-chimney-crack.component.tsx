import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseChimneyCrackIcon: React.FC<
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
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H326.4L288 448l80.8-67.3c7.8-6.5 7.6-18.6-.4-24.9l-117.8-92.6c-14.6-11.5-33.8 7-22.8 22L288 368l-85.5 71.2c-6.1 5-7.5 13.8-3.5 20.5l31.4 52.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v121l52.8 46.4c8 7 12 15 11 24z"
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
                  d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5V432c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V245.5l24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8L512 182.6V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v85.9zM464 204.8V432c0 17.7-14.3 32-32 32H325.9L288 403.8l79.7-63.3c8.2-6.5 8-19.1-.4-25.3L252.2 229c-14.9-11.1-33.6 7.8-22.3 22.5l58.1 76.1-84.8 67.3c-6.4 5.1-7.9 14.2-3.6 21.1l30.3 48H144c-17.7 0-32-14.3-32-32V204.8L288 55.5z"
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
                  d="M277.4 4c6-5.3 15.1-5.3 21.2 0L384 79.4V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v136.3l58.6 51.7c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235v197c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V235l-37.4 33c-6.6 5.8-16.8 5.2-22.6-1.4s-5.2-16.8 1.4-22.6zM480 164.1V64h-64v43.6zM96 206.7V432c0 26.5 21.5 48 48 48h130.1l-47.4-71.1c-4.9-7.4-2.9-17.3 4.4-22.2l79.8-53.2-82.2-82.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l96 96c3.4 3.4 5.1 8.1 4.6 12.9s-3.1 9.1-7 11.7l-82.7 55.1 50.4 75.6H432c26.5 0 48-21.5 48-48V206.7L288 37.3z"
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
                  d="M282.7 2c3-2.7 7.6-2.7 10.6 0L384 82.3V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v139.7l61.3 54.3c3.3 2.9 3.6 8 .7 11.3s-8 3.6-11.3.7L512 217.1V448c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V217.1L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7s-2.6-8.4.7-11.3zM496 181.5V56c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v40.5zm-112-77.8-96-85L80 202.9V448c0 26.5 21.5 48 48 48h153.1l-55.7-83.6c-1.2-1.8-1.6-4.1-1.1-6.3s1.9-4 3.8-5.1l102.1-58.4-103.4-88.5c-3.4-2.9-3.7-7.9-.9-11.3s7.9-3.7 11.3-.9l112 96c2 1.7 3 4.2 2.8 6.8s-1.7 4.9-4 6.2l-104.6 59.8 56.9 85.3H448c26.5 0 48-21.5 48-48V202.9L384.3 104h-.3z"
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
                  d="M309.1 7.9C297-2.6 279-2.6 266.9 7.9l-256 224c-13.3 11.6-14.6 31.9-3 45.2s31.9 14.6 45.2 3L288 74.5l234.9 205.6c13.3 11.6 33.5 10.3 45.2-3s10.3-33.5-3-45.2L512 185.5V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v37.5z"
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
