import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SleighIcon: React.FC<
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32v160c0 53 43 96 96 96v32h64v-32h192v32h64v-32c53 0 96-43 96-96v-96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v41.3c0 30.2-24.5 54.7-54.7 54.7-75.5 0-145.6-38.9-185.6-102.9l-4.3-6.9C174.2 67.6 125 37.6 70.7 32.7c-2.2-.5-4.4-.7-6.7-.7H32m608 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v8c0 13.3-10.7 24-24 24H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h488c48.6 0 88-39.4 88-88z"
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
                  d="M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h8v176c0 62.5 44.8 114.5 104 125.8V432H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h504c44.2 0 80-35.8 80-80v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24v16c0 17.7-14.3 32-32 32H440v-48.2c67-4.2 120-59.8 120-127.8V144h24c13.3 0 24-10.7 24-24s-10.7-24-24-24H456c-22.1 0-40 17.9-40 40v45.7c0 23.3-18.9 42.3-42.3 42.3-58.3 0-112.5-30-143.4-79.5l-18.9-30.2C182.5 67.9 133.7 38.1 80 32.8c-5.1-.5-10.2-.8-15.4-.8H24m368 400H184v-48h208zm40-96H160c-44.2 0-80-35.8-80-80V81.1c37.2 5 70.5 26.3 90.7 58.6l18.9 30.3c39.7 63.5 109.2 102 184.1 102 49.9 0 90.3-40.4 90.3-90.3V144h48v112c0 44.2-35.8 80-80 80"
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
                  d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h16v192c0 59.6 40.8 109.8 96 124v68H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h520c39.8 0 72-32.2 72-72v-24c0-8.8-7.2-16-16-16s-16 7.2-16 16v24c0 22.1-17.9 40-40 40H448v-64c70.7 0 128-57.3 128-128V128h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H488c-22.1 0-40 17.9-40 40v35.8c0 28.8-23.4 52.2-52.2 52.2-72 0-139-37.1-177.1-98.2l-7.2-11.5C179.6 63.4 124 32.4 64 32H16m400 416H160v-64h256zm72-320h56v128c0 53-43 96-96 96H160c-53 0-96-43-96-96V64c48.9.4 94.3 25.7 120.3 67.2l7.2 11.5c44 70.5 121.2 113.3 204.3 113.3 46.5 0 84.2-37.7 84.2-84.2V136c0-4.4 3.6-8 8-8"
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
                  d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v208c0 70.7 57.3 128 128 128v80H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h536c35.3 0 64-28.7 64-64v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v24c0 26.5-21.5 48-48 48H432v-80h16c70.7 0 128-57.3 128-128V112h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-96c-22.1 0-40 17.9-40 40v47.3c0 31.3-25.5 56.7-56.8 56.7-83.1 0-159.8-45.7-199.2-118.9C178.4 66.2 121.1 32 58.8 32H8m408 432H176v-80h240zm136-352h8v144c0 61.9-50.1 112-112 112H160c-61.9 0-112-50.1-112-112V48h10.8c56.5 0 108.4 31 135.2 80.7C236.1 207.1 318.2 256 407.2 256c40.1 0 72.8-32.5 72.8-72.7V136c0-13.3 10.7-24 24-24z"
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
                  d="M608 352c17.7 0 32 14.3 32 32v8c0 48.6-39.4 88-88 88H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h488c13.3 0 24-10.7 24-24v-8c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64c0-17.7 14.3-32 32-32h32c2.3 0 4.6.2 6.7.7 54.2 4.9 103.5 34.9 132.7 81.6l4.3 6.9c40 64 110.1 102.9 185.6 102.9 30.2 0 54.7-24.5 54.7-54.7V128c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32v96c0 53-43 96-96 96v64h-64v-64H192v64h-64v-64c-53 0-96-43-96-96V96C14.3 96 0 81.7 0 64"
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
