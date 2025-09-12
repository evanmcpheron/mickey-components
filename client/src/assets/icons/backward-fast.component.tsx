import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BackwardFastIcon: React.FC<
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
                  d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7V416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7V416c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32s32 14.3 32 32v118.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96v118.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96v320c0 12.4-7.2 23.7-18.4 29"
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
                  d="M16 424c0 13.3 10.7 24 24 24s24-10.7 24-24V287.9l174.6 152.7c5.4 4.8 12.4 7.4 19.6 7.4 16.5 0 29.8-13.3 29.8-29.8V287.9l174.6 152.7c5.4 4.8 12.4 7.4 19.6 7.4 16.5 0 29.8-13.3 29.8-29.8V93.8c0-16.5-13.3-29.8-29.8-29.8-7.2 0-14.2 2.6-19.6 7.4L288 224.1V93.8c0-16.5-13.3-29.8-29.8-29.8-7.2 0-14.2 2.6-19.6 7.4L64 224.1V88c0-13.3-10.7-24-24-24S16 74.7 16 88zm448-290.1v244.2L324.4 256zM240 378.1 100.4 256 240 133.9z"
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
                  d="M16 64c8.8 0 16 7.2 16 16v135.8L210.6 70.2c5-4 11.2-6.2 17.6-6.2 15.4 0 27.8 12.4 27.8 27.8v150.1L466.6 70.2c5-4 11.2-6.2 17.6-6.2 15.4 0 27.8 12.4 27.8 27.8v328.4c0 15.4-12.4 27.8-27.8 27.8-6.4 0-12.6-2.2-17.6-6.2L256 270.1v150.1c0 15.4-12.4 27.8-27.8 27.8-6.4 0-12.6-2.2-17.6-6.2L32 296.2V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16m17.3 192L224 411.4V100.6zM480 100.6 289.3 256 480 411.4z"
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
                  d="M8 64c4.4 0 8 3.6 8 8v162.4L207.8 71c5.3-4.5 12-7 19-7 16.1 0 29.2 13.1 29.2 29.2V248L463.8 71c5.3-4.5 12-7 19-7 16.1 0 29.2 13.1 29.2 29.2v325.6c0 16.1-13.1 29.2-29.2 29.2-6.9 0-13.7-2.5-19-7L256 264v154.8c0 16.1-13.1 29.2-29.2 29.2-6.9 0-13.7-2.5-19-7L16 277.6V440c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8m8 192c0 .4.2.8.5 1l201.7 171.8c2.4 2 5.4 3.2 8.6 3.2 7.3 0 13.2-5.9 13.2-13.2V93.2c0-7.3-5.9-13.2-13.2-13.2-3.1 0-6.2 1.1-8.6 3.2L16.5 255c-.3.3-.5.6-.5 1m256 .6 202.2 172.2c2.4 2 5.4 3.2 8.6 3.2 7.3 0 13.2-5.9 13.2-13.2V93.2c0-7.3-5.9-13.2-13.2-13.2-3.1 0-6.2 1.1-8.6 3.2L272 255.4z"
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
                  d="M32 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L64 214.3v83.3l171.5 143c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V297.7z"
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
