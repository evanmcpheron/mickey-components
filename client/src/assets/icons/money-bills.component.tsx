import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoneyBillsIcon: React.FC<
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
                  d="M96 96v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m64 160c35.3 0 64 28.7 64 64h-64zm64-160c0 35.3-28.7 64-64 64V96zm352 160v64h-64c0-35.3 28.7-64 64-64M512 96h64v64c-35.3 0-64-28.7-64-64M288 208a80 80 0 1 1 160 0 80 80 0 1 1-160 0M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"
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
                  d="M528 80c0 35.3 28.7 64 64 64v128c-35.3 0-64 28.7-64 64H208c0-35.3-28.7-64-64-64V144c35.3 0 64-28.7 64-64zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm288 176a80 80 0 1 0-160 0 80 80 0 1 0 160 0M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"
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
                  d="M576 64c17.7 0 32 14.3 32 32v32c-35.3 0-64-28.7-64-64zm-352 0h288c0 53 43 96 96 96v96c-53 0-96 43-96 96H224c0-53-43-96-96-96v-96c53 0 96-43 96-96m-96 224c35.3 0 64 28.7 64 64h-32c-17.7 0-32-14.3-32-32zm416 64c0-35.3 28.7-64 64-64v32c0 17.7-14.3 32-32 32zM192 64c0 35.3-28.7 64-64 64V96c0-17.7 14.3-32 32-32zm-32-32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm208 240a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-96-64a96 96 0 1 0 192 0 96 96 0 1 0-192 0M32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v256c0 61.9 50.1 112 112 112h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-44.2 0-80-35.8-80-80z"
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
                  d="M576 48c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm-96 96c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48zm224 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0m176 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0m136-56c0-4.4-3.6-8-8-8h-8c-30.9 0-56-25.1-56-56v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 39.8 32.2 72 72 72h8c4.4 0 8-3.6 8-8m-456 8h8c39.8 0 72-32.2 72-72v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 30.9-25.1 56-56 56h-8c-4.4 0-8 3.6-8 8s3.6 8 8 8m456 104c0-4.4-3.6-8-8-8h-8c-39.8 0-72 32.2-72 72v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-30.9 25.1-56 56-56h8c4.4 0 8-3.6 8-8m-456-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h8c30.9 0 56 25.1 56 56v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-39.8-32.2-72-72-72z"
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
                  d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72zm176-24c0 35.3-28.7 64-64 64v96c35.3 0 64 28.7 64 64h288c0-35.3 28.7-64 64-64v-96c-35.3 0-64-28.7-64-64zm64 112a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm352 64c0 35.3 28.7 64 64 64v96c-35.3 0-64 28.7-64 64H224c0-35.3-28.7-64-64-64v-96c35.3 0 64-28.7 64-64z"
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
