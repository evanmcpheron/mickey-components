import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CassetteTapeIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-28.9l-36.3-96.9c-7-18.7-24.9-31.1-44.9-31.1H174.2c-20 0-37.9 12.4-44.9 31.1L92.9 480H64c-35.3 0-64-28.7-64-64zm416.8 298.4 32.1 85.6H127.1l32.1-85.6c2.3-6.2 8.3-10.4 15-10.4h227.6c6.7 0 12.6 4.1 15 10.4M341.5 192h-107c3.5 10 5.5 20.8 5.5 32s-1.9 22-5.5 32h107c-3.5-10-5.5-20.8-5.5-32s1.9-22 5.5-32m90.5 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-320 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
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
                  d="M512 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16h-40l-25.6-61.5c-8.7-20.9-29.1-34.5-51.7-34.5H181.3c-22.6 0-43 13.6-51.7 34.5L104 432H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm-92 352H156l17.9-43.1c1.2-3 4.2-4.9 7.4-4.9h213.4c3.2 0 6.1 1.9 7.4 4.9zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm112 176a16 16 0 1 1 0 32 16 16 0 1 1 0-32m64 16c0-5.5-.7-10.9-2-16h100c-1.3 5.1-2 10.5-2 16s.7 10.9 2 16H238c1.3-5.1 2-10.5 2-16m224 0c0-35.3-28.7-64-64-64H176c-35.3 0-64 28.7-64 64s28.7 64 64 64h224c35.3 0 64-28.7 64-64m-80 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M512 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32h-33.9l-23.4-64.4c-6.9-19-24.9-31.6-45.1-31.6H166.4c-20.2 0-38.2 12.6-45.1 31.6L97.9 448H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm-67.9 384H131.9l19.4-53.5c2.3-6.3 8.3-10.5 15-10.5h243.3c6.7 0 12.7 4.2 15 10.5zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64m55.4 64c5.4-9.4 8.6-20.3 8.6-32s-3.1-22.6-8.6-32h145.2c-5.4 9.4-8.6 20.3-8.6 32s3.1 22.6 8.6 32zM160 288h256c35.3 0 64-28.7 64-64s-28.7-64-64-64H160c-35.3 0-64 28.7-64 64s28.7 64 64 64m256-96a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M512 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48h-42l-23.7-83c-4.9-17.2-20.6-29-38.5-29H168.1c-17.9 0-33.6 11.8-38.5 29L106 464H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zm-58.6 416H122.6l22.5-78.6c2.9-10.3 12.4-17.4 23.1-17.4h239.7c10.7 0 20.1 7.1 23.1 17.4zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96m42.3 96c13.3-11.7 21.7-28.9 21.7-48s-8.4-36.3-21.7-48h171.4c-13.3 11.7-21.7 28.9-21.7 48s8.4 36.3 21.7 48zM160 288h256c35.3 0 64-28.7 64-64s-28.7-64-64-64H160c-35.3 0-64 28.7-64 64s28.7 64 64 64m256-112a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-28.9l-36.3-96.9c-7-18.7-24.9-31.1-44.9-31.1H174.2c-20 0-37.9 12.4-44.9 31.1L92.9 480H64c-35.3 0-64-28.7-64-64zm416.8 298.4 32.1 85.6H127.1l32.1-85.6c2.3-6.2 8.3-10.4 15-10.4h227.6c6.7 0 12.6 4.1 15 10.4M160 128c-44.2 0-80 35.8-80 80s35.8 80 80 80h256c44.2 0 80-35.8 80-80s-35.8-80-80-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M240 208c0 11.4-2.4 22.2-6.7 32h109.4c-4.3-9.8-6.7-20.6-6.7-32s2.4-22.2 6.7-32H233.3c4.3 9.8 6.7 20.6 6.7 32m176 80H160c-44.2 0-80-35.8-80-80s35.8-80 80-80h256c44.2 0 80 35.8 80 80s-35.8 80-80 80m-256-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m272-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
