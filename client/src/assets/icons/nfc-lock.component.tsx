import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NfcLockIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v65.1c-24.9 3.6-47.2 15.3-64 32.5V144c0-26.5-21.5-48-48-48h-80c-26.5 0-48 21.5-48 48v66.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V144c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16v152.6c-19.1 11.1-32 31.7-32 55.4v32H112c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h208v64H64c-35.3 0-64-28.7-64-64zm464 144c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M384 80H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h256v48H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v65.1c-17.7 2.5-34 9.2-48 18.9V96c0-8.8-7.2-16-16-16m-16 72v62.3c-10.2 16.9-16 36.6-16 57.7v24.6c-19.1 11.1-32 31.7-32 55.4V160h-72v54.4c14.3 8.3 24 23.8 24 41.6 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6V152c0-22.1 17.9-40 40-40h88c22.1 0 40 17.9 40 40M128 352h192v48H120c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8zm336-112c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
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
                  d="M384 64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h256v32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v65.1c-11.3 1.6-22.1 4.9-32 9.6V96c0-17.7-14.3-32-32-32m0 64v65.6c-19.8 20.2-32 47.9-32 78.4V128H240v82.7c18.6 6.6 32 24.4 32 45.3 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V128c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32M96 384h224v32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H96zm128-144a16 16 0 1 0 0 32 16 16 0 1 0 0-32m240-16c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm160 80H384v128h160z"
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
                  d="M384 48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h256v16H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v65.3c-5.5.9-10.9 2.3-16 4.1V96c0-26.5-21.5-48-48-48m-16 208v34c-5.7 1.5-11 3.7-16 6.5V136c0-4.4-3.6-8-8-8H240c-4.4 0-8 3.6-8 8v80.8c18.3 3.7 32 19.8 32 39.2 0 22.1-17.9 40-40 40s-40-17.9-40-40c0-19.4 13.7-35.5 32-39.2V136c0-13.3 10.7-24 24-24h104c13.3 0 24 10.7 24 24zm-48 144H104c-13.3 0-24-10.7-24-24V136c0-13.3 10.7-24 24-24h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h216zm-96-168a24 24 0 1 0 0 48 24 24 0 1 0 0-48m240-24c-26.5 0-48 21.5-48 48v64h96v-64c0-26.5-21.5-48-48-48m-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64v64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h16zm-16 80c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H384"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h256v-64H112c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h208v-32c0-23.7 12.9-44.4 32-55.4V144c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16v66.7c18.6 6.6 32 24.4 32 45.3 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-26.5 21.5-48 48-48h80c26.5 0 48 21.5 48 48v49.6c16.8-17.1 39.1-28.9 64-32.5V96c0-35.3-28.7-64-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
