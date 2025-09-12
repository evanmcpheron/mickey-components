import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoomboxIcon: React.FC<
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
                  d="M120 48h400c22.1 0 40 17.9 40 40v72H448c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32H80V88c0-22.1 17.9-40 40-40m488 120.6V88c0-48.6-39.4-88-88-88H120C71.4 0 32 39.4 32 88v80.6c-19.1 11-32 31.7-32 55.4v224c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V224c0-23.7-12.9-44.4-32-55.4M256 336a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-192 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0m400 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224"
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
                  d="M136 48h368c22.1 0 40 17.9 40 40v72h-96c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32H96V88c0-22.1 17.9-40 40-40M48 88v74c-27.6 7.1-48 32.2-48 62v224c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V224c0-29.8-20.4-54.9-48-62V88c0-48.6-39.4-88-88-88H136C87.4 0 48 39.4 48 88m16 120h512c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16m112 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-48-96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m432 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-96-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M144 32h352c26.5 0 48 21.5 48 48v80H96V80c0-26.5 21.5-48 48-48M64 80v80c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64V80c0-44.2-35.8-80-80-80H144C99.8 0 64 35.8 64 80m16 112h496c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32zm16 144a80 80 0 1 1 160 0 80 80 0 1 1-160 0m192 0a112 112 0 1 0-224 0 112 112 0 1 0 224 0m176-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 192a112 112 0 1 0 0-224 112 112 0 1 0 0 224M208 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M80 72v88h112c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h112V72c0-30.9-25.1-56-56-56H136c-30.9 0-56 25.1-56 56m-16 88V72c0-39.8 32.2-72 72-72h368c39.8 0 72 32.2 72 72v88c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64m328 16H64c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48H392m-168-32c-8.8 0-16 7.2-16 16h32c0-8.8-7.2-16-16-16m192 0c-8.8 0-16 7.2-16 16h32c0-8.8-7.2-16-16-16m-112 16h32c0-8.8-7.2-16-16-16s-16 7.2-16 16M176 432a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224m384 112a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-208 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0"
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
                  d="M0 224c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm288 112a112 112 0 1 0-224 0 112 112 0 1 0 224 0m176 112a112 112 0 1 0 0-224 112 112 0 1 0 0 224"
                />
                <path
                  className="aps-icon-foreground"
                  d="M120 48c-22.1 0-40 17.9-40 40v72H64c-11.7 0-22.6 3.1-32 8.6V88c0-48.6 39.4-88 88-88h400c48.6 0 88 39.4 88 88v80.6c-9.4-5.4-20.3-8.6-32-8.6h-16V88c0-22.1-17.9-40-40-40zm328 112h-64c0-17.7 14.3-32 32-32s32 14.3 32 32m-96 0h-64c0-17.7 14.3-32 32-32s32 14.3 32 32m-96 0h-64c0-17.7 14.3-32 32-32s32 14.3 32 32m-80 256a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224m368 112a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-192 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0"
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
