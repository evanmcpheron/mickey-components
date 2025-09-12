import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VaultIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v352c0 35.3 28.7 64 64 64h16l16 32h64l16-32h224l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 320a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-240a160 160 0 1 1 0 320 160 160 0 1 1 0-320m256 141.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3 0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3"
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
                  d="M64 48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H112v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c-35.3 0-64-28.7-64-64zm320 176a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-240 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272-16c0 17.8-9.7 33.3-24 41.6V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V217.6c-14.3-8.3-24-23.8-24-41.6 0-26.5 21.5-48 48-48s48 21.5 48 48"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H96v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c-35.3 0-64-28.7-64-64zm352 176a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-288 0a160 160 0 1 1 320 0 160 160 0 1 1-320 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m256 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m32 0c0 20.9-13.4 38.7-32 45.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3 0-26.5 21.5-48 48-48s48 21.5 48 48"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H80v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c-35.3 0-64-28.7-64-64zm368 176a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-304 0a160 160 0 1 1 320 0 160 160 0 1 1-320 0m160 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m272 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m16 0c0 23.8-17.3 43.5-40 47.3V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V223.3c-22.7-3.8-40-23.6-40-47.3 0-26.5 21.5-48 48-48s48 21.5 48 48"
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
                  d="M64 0C28.7 0 0 28.7 0 64v352c0 35.3 28.7 64 64 64h16l16 32h64l16-32h224l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm0 240a160 160 0 1 1 320 0 160 160 0 1 1-320 0m416-18.7V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3 0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M304 240a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-240 0a160 160 0 1 1 320 0 160 160 0 1 1-320 0m448-64c0 20.9-13.4 38.7-32 45.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3 0-26.5 21.5-48 48-48s48 21.5 48 48"
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
