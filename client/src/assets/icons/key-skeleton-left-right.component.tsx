import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KeySkeletonLeftRightIcon: React.FC<
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
                  d="M576 128a64 64 0 1 0-128 0 64 64 0 1 0 128 0m64 0c0 70.7-57.3 128-128 128-59.6 0-109.8-40.8-124-96h-68v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h196c14.2-55.2 64.4-96 124-96 70.7 0 128 57.3 128 128M64 384a64 64 0 1 0 128 0 64 64 0 1 0-128 0m-64 0c0-70.7 57.3-128 128-128 59.6 0 109.8 40.8 124 96h68v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h32v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32H252c-14.2 55.2-64.3 96-124 96C57.3 512 0 454.7 0 384"
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
                  d="M592 128a80 80 0 1 0-160 0 80 80 0 1 0 160 0m48 0c0 70.7-57.3 128-128 128-62.5 0-114.5-44.8-125.8-104H304v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72c0-13.3 10.7-24 24-24h202.2C397.5 44.8 449.5 0 512 0c70.7 0 128 57.3 128 128M48 384a80 80 0 1 0 160 0 80 80 0 1 0-160 0m-48 0c0-70.7 57.3-128 128-128 62.5 0 114.5 44.8 125.8 104H336v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48h48v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v72c0 13.3-10.7 24-24 24H253.8c-11.3 59.2-63.3 104-125.8 104C57.3 512 0 454.7 0 384"
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
                  d="M608 128a96 96 0 1 0-192 0 96 96 0 1 0 192 0m32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128h-96v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16h212c14.2-55.2 64.4-96 124-96 70.7 0 128 57.3 128 128M32 384a96 96 0 1 0 192 0 96 96 0 1 0-192 0m-32 0c0-70.7 57.3-128 128-128s128 57.3 128 128h96v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 8.8-7.2 16-16 16H252c-14.2 55.2-64.3 96-124 96C57.3 512 0 454.7 0 384"
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
                  d="M624 112a96 96 0 1 0-192 0 96 96 0 1 0 192 0m16 0c0 61.9-50.1 112-112 112s-112-50.1-112-112H272v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h249.1C424.9 41.7 471.6 0 528 0c61.9 0 112 50.1 112 112M16 400a96 96 0 1 0 192 0 96 96 0 1 0-192 0m-16 0c0-61.9 50.1-112 112-112s112 50.1 112 112h144v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v72h80v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v80c0 4.4-3.6 8-8 8H222.9c-7.8 54.3-54.4 96-110.9 96C50.1 512 0 461.9 0 400"
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
                  d="M128 448a64 64 0 1 1 0-128 64 64 0 1 1 0 128m0-192C57.3 256 0 313.3 0 384s57.3 128 128 128c59.6 0 109.8-40.8 124-96h196c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h-32v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h-68c-14.2-55.2-64.3-96-124-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 192c70.7 0 128-57.3 128-128S582.7 0 512 0c-59.6 0-109.8 40.8-124 96H192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h68c14.2 55.2 64.3 96 124 96"
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
