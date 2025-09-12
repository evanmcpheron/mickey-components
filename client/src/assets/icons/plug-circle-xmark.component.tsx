import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlugCircleXmarkIcon: React.FC<
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
                  d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32m192 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32M32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-67.2c12.3-2.5 24.1-6.4 35.1-11.5-2.1-10.8-3.1-21.9-3.1-33.3 0-80.3 53.8-148 127.3-169.2.5-2.2.7-4.5.7-6.8 0-17.7-14.3-32-32-32zm400 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288m59.3-180.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l36.7 36.7 36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
                  d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24v88h48zm176 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h48zM24 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v64c0 80.2 59 146.6 136 158.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-73.8c15.2-2.3 29.7-6.7 43.1-12.9-2.1-10.8-3.1-21.9-3.1-33.3 0-7.1.4-14.1 1.2-20.9-18.3 13.1-40.9 20.9-65.2 20.9-61.9 0-112-50.1-112-112v-64h224v55.2c13.8-14.6 30-26.8 48-36V192h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24m408 368a144 144 0 1 0 0-288 144 144 0 1 0 0 288m59.3-180.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l36.7 36.7 36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
                  d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v96h32zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v96h32zM16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64c0 83 63.1 151.2 144 159.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-96.8c17.3-1.7 33.7-6.2 48.9-12.9q-.9-9-.9-18.3c0-6 .3-11.8.9-17.6-19 11.2-41.2 17.6-64.9 17.6-70.7 0-128-57.3-128-128v-64h256v56.2c9.8-8.1 20.6-15.2 32-21V176h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m304 224a112 112 0 1 1 224 0 112 112 0 1 1-224 0m256 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-84.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368z"
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
                  d="M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v104h16zm176 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v104h16zM8 144c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v80c0 81.3 63.8 147.6 144 151.8V504c0 4.4 3.6 8 8 8s8-3.6 8-8V391.8c20-1 39-6 56.3-14-.2-3.2-.3-6.5-.3-9.8 0-2.7.1-5.4.2-8.1-19.1 10.3-41 16.1-64.2 16.1-75.1 0-136-60.9-136-136v-80h272v66c5.1-3.8 10.5-7.3 16-10.5V160h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H8m296 224a128 128 0 1 1 256 0 128 128 0 1 1-256 0m272 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-82.3-50.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L432 356.7l-50.3-50.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l50.3 50.3-50.3 50.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l50.3-50.3 50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L443.3 368l50.3-50.3z"
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
                  d="M128 32v96H64V32C64 14.3 78.3 0 96 0s32 14.3 32 32m192 0v96h-64V32c0-17.7 14.3-32 32-32s32 14.3 32 32M0 192c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32 0 2.3-.3 4.6-.7 6.8C309.8 220 256 287.7 256 368c0 11.4 1.1 22.5 3.1 33.3-11.1 5.1-22.9 9-35.1 11.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-67.2C87 398 32 333.4 32 256v-32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6"
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
