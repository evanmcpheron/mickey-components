import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LaptopFileIcon: React.FC<
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
                  d="M128 0C92.7 0 64 28.7 64 64v224H19.2C8.6 288 0 296.6 0 307.2 0 349.6 34.4 384 76.8 384H320v-96H128V64h320v32h64V64c0-35.3-28.7-64-64-64zm384 128H400c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V256h-96c-17.7 0-32-14.3-32-32zm32 0v96h96z"
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
                  d="M448 48H128c-8.8 0-16 7.2-16 16v256h208v64H48c-26.5 0-48-21.5-48-48 0-8.8 7.2-16 16-16h48V64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v32h-48V64c0-8.8-7.2-16-16-16m-48 416h192V256h-48c-17.7 0-32-14.3-32-32v-48H400zm192 48H400c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h124.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V464c0 26.5-21.5 48-48 48"
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
                  d="M448 32H128c-17.7 0-32 14.3-32 32v224h224v32H33.9c5.5 18.5 22.7 32 42.9 32H320v32H76.8C34.4 384 0 349.6 0 307.2 0 296.6 8.6 288 19.2 288H64V64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v32h-32V64c0-17.7-14.3-32-32-32m-64 432c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V288h-80c-26.5 0-48-21.5-48-48v-80h-80c-8.8 0-16 7.2-16 16zm128-303.5V240c0 8.8 7.2 16 16 16h79.5c-.7-2.8-2.1-5.4-4.2-7.4l-83.9-83.9c-2.1-2.1-4.6-3.5-7.4-4.2m30.1-18.4L626 226c9 9 14.1 21.2 14.1 33.9V464c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h108.1c12.7 0 24.9 5.1 33.9 14.1z"
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
                  d="M448 16H128c-26.5 0-48 21.5-48 48v224h240v16H19.2c-1.8 0-3.2 1.4-3.2 3.2 0 33.6 27.2 60.8 60.8 60.8H320v16H76.8C34.4 384 0 349.6 0 307.2 0 296.6 8.6 288 19.2 288H64V64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v32h-16V64c0-26.5-21.5-48-48-48m176 448V259.9c0-1.3-.1-2.6-.2-3.9H552c-22.1 0-40-17.9-40-40v-71.8c-1.3-.2-2.6-.2-3.9-.2H400c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32m-96-313.1V216c0 13.3 10.7 24 24 24h65.1q-1.2-1.5-2.4-2.7l-83.9-83.9q-1.35-1.35-2.7-2.4zM592 512H400c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h108.1c12.7 0 24.9 5.1 33.9 14.1l83.9 83.9c9 9 14.1 21.2 14.1 33.9V464c0 26.5-21.5 48-48 48"
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
                  d="M64 64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v32h-64V64H128v224h192v96H76.8C34.4 384 0 349.6 0 307.2 0 296.6 8.6 288 19.2 288H64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M400 128h112v96c0 17.7 14.3 32 32 32h96v208c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48m240 96h-96v-96z"
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
