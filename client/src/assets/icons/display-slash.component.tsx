import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DisplaySlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-70.5-55.2c27.4-7.2 47.6-32.2 47.6-61.9V64c0-35.3-28.7-64-64-64H96C79.6 0 64.6 6.2 53.2 16.4zM113.9 64H544v288h-62.6zM32 352c0 35.3 28.7 64 64 64h176l-10.7 32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32 0-2.1-.2-4.1-.6-6.1L446.6 448h-67.9L368 416h38l-81.2-64H96V171.8l-64-50.4z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-70.5-55.2c27.4-7.2 47.6-32.2 47.6-61.9V64c0-35.3-28.7-64-64-64H96C79.6 0 64.6 6.2 53.2 16.4zm54.9 43c.7-.1 1.5-.2 2.3-.2h448c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16h-42.2L93.7 48.2zM80 352V159.2l-48-37.8V352c0 35.3 28.7 64 64 64h147.7l-8 48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-51.7l-8-48h9.7l-61-48H96c-8.8 0-16-7.2-16-16m212.3 64h55.3l8 48h-71.3z"
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
                  d="M32 110.3V352c0 35.3 28.7 64 64 64h149.1l-10.7 64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-58.4l-10.7-64h24.3l-40.5-32H96c-17.7 0-32-14.3-32-32V135.6zm562.5 281C603 380.5 608 366.8 608 352V64c0-35.3-28.7-64-64-64H96c-1.5 0-3 .1-4.4.2H99L139.4 32H544c17.7 0 32 14.3 32 32v288c0 7.3-2.5 14.1-6.6 19.5zM277.6 416h84.9l10.7 64H266.9zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M544 16c26.5 0 48 21.5 48 48v288c0 11.1-3.8 21.3-10.1 29.4l12.6 9.9C603 380.5 608 366.8 608 352V64c0-35.3-28.7-64-64-64H96c-1.5 0-3 .1-4.4.2H99L119.1 16zM32 110.3V352c0 35.3 28.7 64 64 64h158.6l-13.3 80H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-73.2l-13.3-80h33.7l-20.3-16H96c-26.5 0-48-21.5-48-48V123zM112 352h226.1l-20.3-16H112V173.5l-16-12.7V336c0 8.8 7.2 16 16 16m432-16V80c0-8.8-7.2-16-16-16H179.9l20.3 16H528v256h-3.6l14.6 11.6c3-2.9 4.9-7 4.9-11.6zM257.4 496l13.3-80h98.4l13.3 80zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M446.8 448h-68.1L368 416h38.2L325 352H96V171.6l-64-50.4V352c0 35.3 28.7 64 64 64h176l-10.7 32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32q0-3.3-.6-6.3zm97.2-96h-62.6l79 61.9c27.4-7.2 47.6-32.2 47.6-61.9V64c0-35.3-28.7-64-64-64H96C79.6 0 64.6 6.2 53.2 16.4L113.9 64H544z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
