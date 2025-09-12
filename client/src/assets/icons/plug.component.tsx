import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlugIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32m192 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32M32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-67.2C297 398 352 333.4 352 256v-32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24v88h48zm176 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h48zM24 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v64c0 80.2 59 146.6 136 158.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-73.8c77-11.6 136-78 136-158.2v-64h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24m168 224c-61.9 0-112-50.1-112-112v-64h224v64c0 61.9-50.1 112-112 112"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v96h32zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v96h32zM16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64c0 83 63.1 151.2 144 159.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-96.8c80.9-8 144-76.2 144-159.2v-64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m176 224c-70.7 0-128-57.3-128-128v-64h256v64c0 70.7-57.3 128-128 128"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v104h16zm176 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v104h16zM8 144c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v80c0 81.3 63.8 147.6 144 151.8V504c0 4.4 3.6 8 8 8s8-3.6 8-8V391.8c80.2-4.2 144-70.5 144-151.8v-80h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H8m184 232c-75.1 0-136-60.9-136-136v-80h272v80c0 75.1-60.9 136-136 136"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32v128h64zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 192c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32v32c0 77.4-55 142-128 156.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-67.2C87 398 32 333.4 32 256v-32c-17.7 0-32-14.3-32-32"
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
