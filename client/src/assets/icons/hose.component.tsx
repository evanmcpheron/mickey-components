import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HoseIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 104c0 13.3 10.7 24 24 24s24-10.7 24-24v-2.3l80.2-11.5c1.1 7.8 7.7 13.8 15.8 13.8 8.8 0 16-7.2 16-16V40c0-8.8-7.2-16-16-16-8.1 0-14.7 6-15.8 13.7L336 26.3V24c0-13.3-10.7-24-24-24s-24 10.7-24 24zM64 176c0-44.2 35.8-80 80-80h112V32H144C64.5 32 0 96.5 0 176s64.5 144 144 144h272c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-44.2 0-80-35.8-80-80M32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M312 128c13.3 0 24-10.7 24-24v-2.3l80.2-11.5c1.1 7.8 7.7 13.8 15.8 13.8 8.8 0 16-7.2 16-16V40c0-8.8-7.2-16-16-16-8.1 0-14.7 6-15.8 13.7L336 26.3V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24M8 488c0 13.3 10.7 24 24 24h384c13.3 0 24-10.7 24-24s-10.7-24-24-24H32c-13.3 0-24 10.7-24 24m24-104c-13.3 0-24 10.7-24 24s10.7 24 24 24h384c13.3 0 24-10.7 24-24s-10.7-24-24-24zM8 328c0 13.3 10.7 24 24 24h384c13.3 0 24-10.7 24-24s-10.7-24-24-24H32c-13.3 0-24 10.7-24 24m48-172c0-37.6 30.4-68 68-68h132V40H124C59.9 40 8 91.9 8 156s51.9 116 116 116h292c13.3 0 24-10.7 24-24s-10.7-24-24-24H124c-37.6 0-68-30.4-68-68"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 112c0 8.8 7.2 16 16 16s16-7.2 16-16v-1.9l96.1-12c1 7.8 7.7 13.9 15.9 13.9 8.8 0 16-7.2 16-16V32c0-8.8-7.2-16-16-16-8.1 0-14.8 6.1-15.9 13.9l-96.1-12V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96m32-61.9 96 12v3.8l-96 12V50.1M48 448h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16m-35.8-16C4.6 440.5 0 451.7 0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48 0-12.3-4.6-23.5-12.2-32 7.6-8.5 12.2-19.7 12.2-32s-4.6-23.5-12.2-32c7.6-8.5 12.2-19.7 12.2-32s-4.6-23.5-12.2-32c7.6-8.5 12.2-19.7 12.2-32 0-26.5-21.5-48-48-48H152c-30.9 0-56-25.1-56-56s25.1-56 56-56h104V80H152c-48.6 0-88 39.4-88 88s39.4 88 88 88h248c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-66.3 0-120-53.7-120-120S85.7 48 152 48h104V16H152C68.1 16 0 84.1 0 168c0 48.8 23 92.2 58.7 120H48c-26.5 0-48 21.5-48 48 0 12.3 4.6 23.5 12.2 32C4.6 376.5 0 387.7 0 400s4.6 23.5 12.2 32M152 320h248c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16zM48 384h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M304 103.2v8.8c0 4.4-3.6 8-8 8s-8-3.6-8-8V16c0-4.4 3.6-8 8-8s8 3.6 8 8v8.8l128.1 14.3c.5-4 3.8-7.1 7.9-7.1 4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8-4.1 0-7.5-3.1-7.9-7.1zm0-16.1 128-14.3V55.2L304 40.9zM56 432h336c13.3 0 24-10.7 24-24s-10.7-24-24-24H56c-13.3 0-24 10.7-24 24s10.7 24 24 24m-40-24c0-13.1 6.3-24.7 16-32-9.7-7.3-16-18.9-16-32 0-22.1 17.9-40 40-40h41c-48.1-24.4-81-74.4-81-132C16 90.3 82.3 24 164 24h92v16h-92C91.1 40 32 99.1 32 172s59.1 132 132 132h228c13.3 0 24-10.7 24-24s-10.7-24-24-24H164c-46.4 0-84-37.6-84-84s37.6-84 84-84h92v16h-92c-37.6 0-68 30.4-68 68s30.4 68 68 68h228c22.1 0 40 17.9 40 40 0 13.1-6.3 24.7-16 32 9.7 7.3 16 18.9 16 32s-6.3 24.7-16 32c9.7 7.3 16 18.9 16 32s-6.3 24.7-16 32c9.7 7.3 16 18.9 16 32 0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40 0-13.1 6.3-24.7 16-32-9.7-7.3-16-18.9-16-32m376-88H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24m0 128H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 176c0-44.2 35.8-80 80-80h144V32H144C64.5 32 0 96.5 0 176s64.5 144 144 144h272c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-44.2 0-80-35.8-80-80M32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M312 128c-13.3 0-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24v2.3l80.2 11.5C417.3 30 423.9 24 432 24c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16-8.1 0-14.7-6-15.8-13.7L336 101.7v2.3c0 13.3-10.7 24-24 24"
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
