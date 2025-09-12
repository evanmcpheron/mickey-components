import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseChimneyIcon: React.FC<
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
                  d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32v69.7c-.1.9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2 1.5.1 3 .2 4.5.2h56c22.1 0 40-17.9 40-40v-88c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v88c0 22.1 17.9 40 40 40h56.5c1.4 0 2.8 0 4.2-.1 1.1.1 2.2.1 3.3.1h16c22.1 0 40-17.9 40-40v-16.2c.3-2.6.5-5.3.5-8.1l-.7-160.2h32z"
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
                  d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5V432c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V245.5l24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8L512 182.6V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v85.9zM464 204.8V432c0 17.7-14.3 32-32 32h-48V312c0-22.1-17.9-40-40-40H232c-22.1 0-40 17.9-40 40v152h-48c-17.7 0-32-14.3-32-32V204.8L288 55.5zM336 464h-96V320h96z"
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
                  d="M277.4 4c6-5.3 15.1-5.3 21.2 0L384 79.4V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v136.3l58.6 51.7c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235v197c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V235l-37.4 33c-6.6 5.8-16.8 5.2-22.6-1.4s-5.2-16.8 1.4-22.6zM480 164.1V64h-64v43.6zM96 206.7V432c0 26.5 21.5 48 48 48h64V320c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v160h64c26.5 0 48-21.5 48-48V206.7L288 37.3zM336 320h-96v160h96z"
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
                  d="M282.7 2c3-2.7 7.6-2.7 10.6 0L384 82.3V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v139.7l61.3 54.3c3.3 2.9 3.6 8 .7 11.3s-8 3.6-11.3.7L512 217.1V448c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V217.1L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7s-2.6-8.4.7-11.3zM496 181.5V56c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v40.5zm-112-77.8-96-85L80 202.9V448c0 26.5 21.5 48 48 48h80V328c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v168h80c26.5 0 48-21.5 48-48V202.9L384.3 104h-.3zM352 496V328c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v168z"
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
                  d="m64 270.5.1 201.5c0 22.1 17.9 40 40 40H184c22.1 0 40-17.9 40-40v-88.3c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V472c0 22.1 17.9 40 40 40h80.5c22.1 0 40-18 40-40.1l-.4-201.3L288 74.5z"
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
