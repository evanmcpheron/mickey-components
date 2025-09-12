import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MessageQuoteIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm160 48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71V144c0-17.7-14.3-32-32-32zm224 80v-48c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71z"
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
                  d="M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432zm-.2 76.2.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5l17.1-12.8zM160 112c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71V144c0-17.7-14.3-32-32-32zm224 80v-48c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71z"
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
                  d="M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm144 144v48h-48v-48zm-48 80h48c-.9 21.2-15.6 39.4-36.3 44.6l-15.5 3.9c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l15.5-3.9C215 290.7 240 258.7 240 222v-78c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32m144-80h48v48h-48zm48 80c-.9 21.2-15.6 39.4-36.3 44.6l-15.5 3.9c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l15.5-3.9C359 290.7 384 258.7 384 222v-78c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32z"
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
                  d="M176 416c0-8.8-7.2-16-16-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H309.3c-3.5 0-6.8 1.1-9.6 3.2L176 496zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm144 128c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16zm0 96c5.8 0 11.3-1.6 16-4.3V230c0 25.7-17.5 48.1-42.4 54.3l-15.5 3.9c-4.3 1.1-6.9 5.4-5.8 9.7s5.4 6.9 9.7 5.8l15.5-3.9c32.1-8 54.5-36.8 54.5-69.9V144c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32zm96-96h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m64 91.7V230c0 25.7-17.5 48.1-42.4 54.3l-15.5 3.9c-4.3 1.1-6.9 5.4-5.8 9.7s5.4 6.9 9.7 5.8l15.5-3.9c32.1-8 54.5-36.8 54.5-69.9V144c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h48c5.8 0 11.3-1.6 16-4.3"
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
                  d="M0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3l-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64zm160 48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71V144c0-17.7-14.3-32-32-32zm224 80v-48c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h32v7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 144c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v87.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V224h-32c-17.7 0-32-14.3-32-32zm256 87.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7V224h-32c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v87.3"
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
