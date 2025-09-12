import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TextSizeIcon: React.FC<
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
                  d="M64 128V96h96v320h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V96h96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32m320 176v-16h64v128h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16V288h64v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v32c0 17.7 14.3 32 32 32s32-14.3 32-32"
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
                  d="M48 128V80h120v352h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48V80h120v48c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v56c0 13.3 10.7 24 24 24s24-10.7 24-24m312 168v-24h96v160h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32V272h88v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-32c0-22.1-17.9-40-40-40H352c-22.1 0-40 17.9-40 40v32c0 13.3 10.7 24 24 24s24-10.7 24-24"
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
                  d="M32 32C14.3 32 0 46.3 0 64v64c0 8.8 7.2 16 16 16s16-7.2 16-16V64h144v384h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V64h144v64c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-17.7-14.3-32-32-32zm320 192c-17.7 0-32 14.3-32 32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h112v192h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V256h112v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-17.7-14.3-32-32-32H352"
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
                  d="M16 56c0-4.4 3.6-8 8-8h160v416h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V48h160c4.4 0 8 3.6 8 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v48c0 4.4 3.6 8 8 8s8-3.6 8-8zm320 192c0-4.4 3.6-8 8-8h128v224h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V240h128c4.4 0 8 3.6 8 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8v-48c0-13.3-10.7-24-24-24H344c-13.3 0-24 10.7-24 24v48c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M64 96v32c0 17.7-14.3 32-32 32S0 145.7 0 128V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V96h-96v320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 288v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16h-64v128h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V288z"
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
