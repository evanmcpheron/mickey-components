import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseMedicalFlagIcon: React.FC<
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
                  d="M480 0c17.7 0 32 14.3 32 32h112c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H512v320h-64V32c0-17.7 14.3-32 32-32M276.8 39.7 416 159v353h1H96c-17.7 0-32-14.3-32-32V288H32c-13.4 0-25.4-8.3-30-20.9s-1-26.7 9.2-35.4l224-192c12-10.3 29.7-10.3 41.7 0zM224 208v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
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
                  d="M496 24v8h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H496v320h-48V24c0-13.3 10.7-24 24-24s24 10.7 24 24M286.3 36.7 416 133v59.8L272 85.9 112 204.6V432c0 17.7 14.3 32 32 32h256c5.8 0 11.3-1.6 16-4.3v50.7c-5.2 1-10.5 1.6-16 1.6H144c-44.2 0-80-35.8-80-80V240.2l-25.7 19.1c-10.6 7.9-25.7 5.7-33.6-5s-5.7-25.7 5-33.6l248-184c8.5-6.3 20.1-6.3 28.6 0M240 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
                  d="M480 16v16h144c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H480v320h-32V16c0-8.8 7.2-16 16-16s16 7.2 16 16m128 144V64H480v96zM281.6 35.2 416 136v40L272 68 96 200v240c0 22.1 17.9 40 40 40h272c2.7 0 5.4-.3 8-.8v32.4c-2.6.3-5.3.4-8 .4H136c-39.8 0-72-32.2-72-72V224l-38.4 28.8c-7.1 5.3-17.1 3.9-22.4-3.2s-3.9-17.1 3.2-22.4l256-192a15.9 15.9 0 0 1 19.2 0M256 176h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32m0 32v48c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7h-48v32h48c8.8 0 16 7.2 16 16v48h32v-48c0-8.8 7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16v-48z"
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
                  d="M464 8v24h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H464v320h-16V8c0-4.4 3.6-8 8-8s8 3.6 8 8m160 168V48H464v128zM276.8 33.6 416 138v20L272 50 80 194v254c0 26.5 21.5 48 48 48h288v16H128c-35.3 0-64-28.7-64-64V206l-43.2 32.4c-3.5 2.7-8.5 1.9-11.2-1.6s-1.9-8.5 1.6-11.2l256-192c2.8-2.1 6.8-2.1 9.6 0M248 200v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-56c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m8-24h32c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24"
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
                  d="M276.8 39.7 416 159v353h1H96c-17.7 0-32-14.3-32-32V288H32c-13.4 0-25.4-8.3-30-20.9s-1-26.7 9.2-35.4l224-192c12-10.3 29.7-10.3 41.7 0zM224 208v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v480h64V192h112c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16z"
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
