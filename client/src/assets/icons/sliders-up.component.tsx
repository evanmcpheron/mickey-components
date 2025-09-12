import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SlidersUpIcon: React.FC<
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
                  d="M96 0c17.7 0 32 14.3 32 32v54.7c28.3 12.3 48 40.5 48 73.3s-19.7 61-48 73.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V233.3C35.7 221 16 192.8 16 160s19.7-61 48-73.3V32C64 14.3 78.3 0 96 0m0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80-32c0 32.8-19.7 61-48 73.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-54.7c-28.3-12.3-48-40.5-48-73.3s19.7-61 48-73.3V32c0-17.7 14.3-32 32-32s32 14.3 32 32v246.7c28.3 12.3 48 40.5 48 73.3m112-160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0 73.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V265.3c-28.3-12.3-48-40.5-48-73.3s19.7-61 48-73.3V32c0-17.7 14.3-32 32-32s32 14.3 32 32v86.7c28.3 12.3 48 40.5 48 73.3s-19.7 61-48 73.3"
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
                  d="M96 0c13.3 0 24 10.7 24 24v59.7c32.5 10.2 56 40.5 56 76.3s-23.5 66.1-56 76.3V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V236.3c-32.5-10.2-56-40.5-56-76.3s23.5-66.1 56-76.3V24C72 10.7 82.7 0 96 0m0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80-32c0 35.8-23.5 66.1-56 76.3V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-59.7c-32.5-10.2-56-40.5-56-76.3s23.5-66.1 56-76.3V24c0-13.3 10.7-24 24-24s24 10.7 24 24v251.7c32.5 10.2 56 40.5 56 76.3m112-160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-8 76.3V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V268.3c-32.5-10.2-56-40.5-56-76.3s23.5-66.1 56-76.3V24c0-13.3 10.7-24 24-24s24 10.7 24 24v91.7c32.5 10.2 56 40.5 56 76.3s-23.5 66.1-56 76.3"
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
                  d="M96 0c8.8 0 16 7.2 16 16v65.6c36.5 7.4 64 39.7 64 78.4s-27.5 71-64 78.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V238.4C43.5 231 16 198.7 16 160s27.5-71 64-78.4V16c0-8.8 7.2-16 16-16m0 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96m160 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96m80-48c0 38.7-27.5 71-64 78.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-65.6c-36.5-7.4-64-39.7-64-78.4s27.5-71 64-78.4V16c0-8.8 7.2-16 16-16s16 7.2 16 16v257.6c36.5 7.4 64 39.7 64 78.4m128-160a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-32 78.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V270.4c-36.5-7.4-64-39.7-64-78.4s27.5-71 64-78.4V16c0-8.8 7.2-16 16-16s16 7.2 16 16v97.6c36.5 7.4 64 39.7 64 78.4s-27.5 71-64 78.4"
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
                  d="M96 0c4.4 0 8 3.6 8 8v88.5c31.6 3.9 56 30.9 56 63.5s-24.4 59.6-56 63.5V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V223.5c-31.6-3.9-56-30.9-56-63.5s24.4-59.6 56-63.5V8c0-4.4 3.6-8 8-8m0 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96m160 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96m64-48c0 32.6-24.4 59.6-56 63.5V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88.5c-31.6-3.9-56-30.9-56-63.5s24.4-59.6 56-63.5V8c0-4.4 3.6-8 8-8s8 3.6 8 8v280.5c31.6 3.9 56 30.9 56 63.5m144-160a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-40 63.5V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V255.5c-31.6-3.9-56-30.9-56-63.5s24.4-59.6 56-63.5V8c0-4.4 3.6-8 8-8s8 3.6 8 8v120.5c31.6 3.9 56 30.9 56 63.5s-24.4 59.6-56 63.5"
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
                  d="M96 0C78.3 0 64 14.3 64 32v54.7c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7V32c0-17.7-14.3-32-32-32M64 233.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V233.3c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7M256 0c-17.7 0-32 14.3-32 32v246.7c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7V32c0-17.7-14.3-32-32-32m-32 425.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-54.7c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7M448 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v86.7c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7zm-64 233.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V265.3c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160m160 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160m128-240a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
