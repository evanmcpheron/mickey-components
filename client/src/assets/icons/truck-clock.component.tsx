import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckClockIcon: React.FC<
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
                  d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M320 176a112 112 0 1 0-224 0 112 112 0 1 0 224 0M208 96c8.8 0 16 7.2 16 16v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="M64 48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h12.8c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48H352c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zm416 464c-53 0-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v32h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c0 53-43 96-96 96m78-272c-.1-.1-.2-.3-.4-.4l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96m368-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M96 192a112 112 0 1 1 224 0 112 112 0 1 1-224 0m112-64c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32c0-8.8-7.2-16-16-16"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h5.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H384V64c0-17.7-14.3-32-32-32zm0 384c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v32h65.3c14 0 27.3 6.1 36.4 16.8l78.7 91.8c7.5 8.7 11.6 19.8 11.6 31.2V384h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96m352-288v96h154.9l-77.5-90.4c-3-3.5-7.5-5.6-12.1-5.6zm0 128v88.4c17-15.2 39.4-24.4 64-24.4 41.8 0 77.4 26.7 90.5 64h5.5V256zM224 416a64 64 0 1 0-128 0 64 64 0 1 0 128 0m256 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128M208 256a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224m16 64v32h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h3.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64H400V64c0-26.5-21.5-48-48-48zm.4 400H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v32h58.7c10.6 0 20.8 4.2 28.3 11.7l93.3 93.3c7.5 7.5 11.7 17.7 11.7 28.3V400h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.4c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H239.6c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8M416 216h172c-.9-1.3-1.9-2.6-3-3.7L491.7 119c-4.5-4.5-10.6-7-17-7H416zm0 16v141.4c15.9-22.6 42.2-37.4 72-37.4 40.3 0 74.2 27.1 84.7 64H592V232zM224 424a72 72 0 1 0-144 0 72 72 0 1 0 144 0m264 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144M208 272a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 56v56h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M224 112v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16M96 432a80 80 0 1 1 160 0 80 80 0 1 1-160 0m288 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 48C0 21.5 21.5 0 48 0h320c26.5 0 48 21.5 48 48v48h50.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96h-66.2c-7.8-54.3-54.4-96-110.9-96S72.9 361.7 65.1 416H48c-26.5 0-48-21.5-48-48zm416 208h128v-18.7L466.7 160H416zm-208 32a112 112 0 1 0 0-224 112 112 0 1 0 0 224"
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
