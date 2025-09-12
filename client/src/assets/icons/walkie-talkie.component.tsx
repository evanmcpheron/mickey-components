import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WalkieTalkieIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24v72H48c-26.5 0-48 21.5-48 48v156.1C0 312.8 5.1 325 14.1 334l3.9 3.9c9 9 14.1 21.2 14.1 33.9V464c0 26.5 21.5 48 48 48H304c26.5 0 48-21.5 48-48v-92.1c0-12.7 5.1-24.9 14.1-33.9l3.9-3.9c9-9 14.1-21.2 14.1-33.9V144c0-26.5-21.5-48-48-48H320c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32h-48zm0 136h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24v72h-8c-30.9 0-56 25.1-56 56v153.4c0 10.6 4.2 20.8 11.7 28.3L32 353.9V456c0 30.9 25.1 56 56 56h208c30.9 0 56-25.1 56-56V353.9l20.3-20.3c7.5-7.5 11.7-17.7 11.7-28.3V152c0-30.9-25.1-56-56-56h-8c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32h-48zm80 120h136c4.4 0 8 3.6 8 8v150.1l-20.3 20.3c-7.5 7.5-11.7 17.7-11.7 28.3V456c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V350.6c0-10.6-4.2-20.8-11.7-28.3L48 302.1V152c0-4.4 3.6-8 8-8h136m-56 48c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 80c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 16c0-8.8-7.2-16-16-16S64 7.2 64 16v80h-8c-30.9 0-56 25.1-56 56v150.1c0 10.6 4.2 20.8 11.7 28.3l17.9 17.9c1.5 1.5 2.3 3.5 2.3 5.7v102c0 30.9 25.1 56 56 56H296c30.9 0 56-25.1 56-56V353.9c0-2.1.8-4.2 2.3-5.7l17.9-17.9c7.5-7.5 11.7-17.7 11.7-28.3V152c0-30.9-25.1-56-56-56H96zM80 128h248c13.3 0 24 10.7 24 24v150.1c0 2.1-.8 4.2-2.3 5.7l-17.9 17.9c-7.5 7.5-11.7 17.7-11.7 28.3v102c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24V353.9c0-10.6-4.2-20.8-11.7-28.3l-18-17.9c-1.5-1.5-2.3-3.5-2.3-5.7V152c0-13.3 10.7-24 24-24zm96-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zM96 192c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m0 64c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m0 64c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H48c-26.5 0-48 21.5-48 48v154.7c0 10.6 4.2 20.8 11.7 28.3L25 340.3c4.5 4.5 7 10.6 7 17V464c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V357.3c0-6.4 2.5-12.5 7-17l13.3-13.3c7.5-7.5 11.7-17.7 11.7-28.3V144c0-26.5-21.5-48-48-48h-16v-8c0-17.7-14.3-32-32-32s-32 14.3-32 32v8h-32v-8c0-17.7-14.3-32-32-32s-32 14.3-32 32v8H96zm176 88v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8zm-64-8v8h-32v-8c0-8.8 7.2-16 16-16s16 7.2 16 16M88 112h248c17.7 0 32 14.3 32 32v154.7c0 6.4-2.5 12.5-7 17L347.7 329c-7.5 7.5-11.7 17.7-11.7 28.3V464c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V357.3c0-10.6-4.2-20.8-11.7-28.3L23 315.7c-4.5-4.5-7-10.6-7-17V144c0-17.7 14.3-32 32-32zm8 72c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8m0 64c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8m0 64c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 64c17.7 0 32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h16c26.5 0 48 21.5 48 48v156.1c0 12.7-5.1 24.9-14.1 33.9l-3.9 3.9c-9 9-14.1 21.2-14.1 33.9V464c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-92.1c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-14.1-21.2-14.1-33.9V144c0-26.5 21.5-48 48-48H160c0-17.7 14.3-32 32-32m-80 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24v72h48zm0 136c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
