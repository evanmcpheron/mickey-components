import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GameConsoleHandheldCrankIcon: React.FC<
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
                  d="M32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm96 0c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm32 240c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zm144 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m152-216c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24h-24V168"
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
                  d="M96 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v176h32V168c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24h-56v96c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm128 32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m16 160c8.8 0 16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16m120 16a24 24 0 1 1 0 48 24 24 0 1 1 0-48m40 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm384 32v160h32v-96c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32v48c0 8.8-7.2 16-16 16h-48v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64M96 128v128h256V128zm-32 0c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm448 64h32v-32h-32zM128 336v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16s16 7.2 16 16m96 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M384 48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48m64 48v176h32V152c0-13.3 10.7-24 24-24h47.9c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H496v72c0 4.4-3.6 8-8 8h-40v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64m-96 16H96c-8.8 0-16 7.2-16 16v112c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16M96 96h256c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32m24 232v32h32c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h32v-32c0-4.4 3.6-8 8-8s8 3.6 8 8m120 8a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m32 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m184-240c-4.4 0-8 3.6-8 8v40h55.9c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 64h256c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m16 224c8.8 0 16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16m112 40a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m176-192c-13.3 0-24 10.7-24 24v56h72c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm432 200v-72h-48v48h-32v48h56c13.3 0 24-10.7 24-24"
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
