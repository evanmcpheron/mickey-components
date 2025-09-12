import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RupiahSignIcon: React.FC<
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
                  d="M0 64c0-17.7 14.3-32 32-32h80c79.5 0 144 64.5 144 144 0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-56-139.9H64v128c0 17.7-14.3 32-32 32S0 465.7 0 448V64m64 192h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64zm256-96h80c61.9 0 112 50.1 112 112s-50.1 112-112 112h-48v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32m80 160c26.5 0 48-21.5 48-48s-21.5-48-48-48h-48v96z"
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
                  d="M0 56c0-13.3 10.7-24 24-24h96c75.1 0 136 60.9 136 136 0 59.4-38.1 109.9-91.1 128.4l57.5 151c4.7 12.4-1.5 26.3-13.9 31s-26.3-1.5-31-13.9L116.4 304H48v152c0 13.3-10.7 24-24 24S0 469.3 0 456V56m48 200h72c48.6 0 88-39.4 88-88s-39.4-88-88-88H48zm264-96h88c61.9 0 112 50.1 112 112s-50.1 112-112 112h-64v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m88 176c35.3 0 64-28.7 64-64s-28.7-64-64-64h-64v128z"
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
                  d="M0 80c0-26.5 21.5-48 48-48h64c79.5 0 144 64.5 144 144 0 65.6-43.9 121-103.9 138.3l54.8 144c3.1 8.3-1 17.5-9.3 20.6s-17.5-1-20.6-9.3l-57.1-149.8c-2.6.1-5.3.2-7.9.2H32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V80m32 208h80c61.9 0 112-50.1 112-112S173.9 64 112 64H48c-8.8 0-16 7.2-16 16zm288-80v144h80c44.2 0 80-35.8 80-80s-35.8-80-80-80h-64c-8.8 0-16 7.2-16 16m16-48h64c61.9 0 112 50.1 112 112s-50.1 112-112 112h-80v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-26.5 21.5-48 48-48"
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
                  d="M0 72c0-22.1 17.9-40 40-40h80c75.1 0 136 60.9 136 136 0 68.7-50.9 125.5-117.1 134.7l60.6 166.6c1.5 4.2-.6 8.7-4.8 10.2s-8.7-.6-10.3-4.8l-62-170.7H16v168c0 4.4-3.6 8-8 8s-8-3.6-8-8V72m16 216h104c66.3 0 120-53.7 120-120S186.3 48 120 48H40c-13.3 0-24 10.7-24 24zm288-88v168h96c53 0 96-43 96-96s-43-96-96-96h-72c-13.3 0-24 10.7-24 24m96 184h-96v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V200c0-22.1 17.9-40 40-40h72c61.9 0 112 50.1 112 112s-50.1 112-112 112"
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
                  d="M288 192c0-17.7 14.3-32 32-32h80c61.9 0 112 50.1 112 112s-50.1 112-112 112h-48v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V192m64 128h48c26.5 0 48-21.5 48-48s-21.5-48-48-48h-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V320h42.3l56 139.9c6.6 16.4 25.2 24.4 41.6 17.8s24.4-25.2 17.8-41.6l-51.4-128.4C220.8 285.3 256 234.8 256 176c0-79.5-64.5-144-144-144zm80 224H64V96h48c44.2 0 80 35.8 80 80s-35.8 80-80 80"
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
