import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsMaximizeIcon: React.FC<
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
                  d="M320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L256 210.7 141.3 96H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32v-50.7L210.7 256 96 370.7V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-50.7L256 301.3 370.7 416H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v50.7L301.3 256 416 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32z"
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
                  d="M328 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h70.1L256 222.1 113.9 80H184c13.3 0 24-10.7 24-24s-10.7-24-24-24H56c-13.3 0-24 10.7-24 24v128c0 13.3 10.7 24 24 24s24-10.7 24-24v-70.1L222.1 256 80 398.1V328c0-13.3-10.7-24-24-24s-24 10.7-24 24v128c0 13.3 10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24h-70.1L256 289.9 398.1 432H328c-13.3 0-24 10.7-24 24s10.7 24 24 24h128c13.3 0 24-10.7 24-24V328c0-13.3-10.7-24-24-24s-24 10.7-24 24v70.1L289.9 256 432 113.9V184c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24z"
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
                  d="M336 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4L256 233.4 86.6 64H176c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6L233.4 256 64 425.4V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H86.6L256 278.6 425.4 448H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v89.4L278.6 256 448 86.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16z"
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
                  d="M328 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h124.7L256 244.7 59.3 48H184c4.4 0 8-3.6 8-8s-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8V59.3L244.7 256 48 452.7V328c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H59.3L256 267.3 452.7 464H328c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8V328c0-4.4-3.6-8-8-8s-8 3.6-8 8v124.7L267.3 256 464 59.3V184c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8z"
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
                  d="M192 32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-50.7L256 210.7 210.7 256 96 141.3V192c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32zm64 269.3 45.3-45.3L416 370.7V320c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h50.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.7L141.3 416H192c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32s32 14.3 32 32v50.7L370.7 96H320c-17.7 0-32-14.3-32-32"
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
