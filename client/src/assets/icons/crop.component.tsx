import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CropIcon: React.FC<
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
                  d="m448 109.3 54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64H160v64h178.7L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32v32H32C14.3 64 0 78.3 0 96s14.3 32 32 32h32v256c0 35.3 28.7 64 64 64h224v-64H173.3L384 173.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32z"
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
                  d="M80 24c0-13.3 10.7-24 24-24s24 10.7 24 24v326.1L350.1 128H160V80h238.1L471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-73 73L432 384h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V161.9L161.9 384H352v48H136c-30.9 0-56-25.1-56-56V128H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h56z"
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
                  d="m416 118.6 91.3-91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L393.4 96H160v32h201.4L128 361.4V16c0-8.8-7.2-16-16-16S96 7.2 96 16v80H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v240c0 26.5 21.5 48 48 48h208v-32H150.6L384 150.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80z"
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
                  d="m416 107.3 93.7-93.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L404.7 96H160c-4.4 0-8 3.6-8 8s3.6 8 8 8h228.7L112 388.7V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v280c0 13.3 10.7 24 24 24h232c4.4 0 8-3.6 8-8s-3.6-8-8-8H123.3L400 123.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88z"
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
                  d="M457.4 9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-56.8 56.8c-5.9-22-23.2-39.4-45.3-45.3zM384 128v45.3L173.3 384H384v64H128c-35.3 0-64-28.7-64-64V32C64 14.3 78.3 0 96 0s32 14.3 32 32v306.7L338.7 128zm64 320v-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h32V64zm352 416c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-35.3-28.7-64-64-64H128v64h256z"
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
