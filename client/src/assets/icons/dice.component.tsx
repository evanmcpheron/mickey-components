import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiceIcon: React.FC<
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
                  d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8l138.8 138.8c28.1 28.1 73.7 28.1 101.8 0l138.8-138.8c28.1-28.1 28.1-73.7 0-101.8zM200 224a24 24 0 1 1 48 0 24 24 0 1 1-48 0M96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m128 176a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-176a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-128-80a24 24 0 1 1 0-48 24 24 0 1 1 0 48m96 328c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8zm160-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M241 68.3c-9.4-9.4-24.6-9.4-33.9 0L68.3 207c-9.4 9.4-9.4 24.6 0 33.9L207 379.7c9.4 9.4 24.6 9.4 33.9 0L379.7 241c9.4-9.4 9.4-24.6 0-33.9zm-67.9-34c28.1-28.1 73.7-28.1 101.8 0l138.8 138.8c28.1 28.1 28.1 73.7 0 101.8L274.9 413.7c-28.1 28.1-73.7 28.1-101.8 0L34.3 274.9c-28.1-28.1-28.1-73.7 0-101.8zM320 413.8l116.3-116.3c28.6-28.6 37-69.6 25.4-105.5H576c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H384c-35.3 0-64-28.7-64-64zM504 352a24 24 0 1 0-48 0 24 24 0 1 0 48 0M120 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m104-56a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 208a24 24 0 1 1 0-48 24 24 0 1 1 0 48m104-152a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-104 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M252.3 57c-15.6-15.6-40.9-15.6-56.6 0L57 195.7c-15.6 15.6-15.6 40.9 0 56.6L195.7 391c15.6 15.6 40.9 15.6 56.6 0L391 252.3c15.6-15.6 15.6-40.9 0-56.6zm-79.2-22.7c28.1-28.1 73.7-28.1 101.8 0l138.8 138.8c28.1 28.1 28.1 73.7 0 101.8L274.9 413.7c-28.1 28.1-73.7 28.1-101.8 0L34.3 274.9c-28.1-28.1-28.1-73.7 0-101.8zM320 448v-34.2l32-32V448c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H466.7c0-10.8-1.7-21.6-5-32H576c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H384c-35.3 0-64-28.7-64-64m160-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48M224 144a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-104 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m104 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 152a24 24 0 1 1 0-48 24 24 0 1 1 0 48m104-152a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M263.6 45.7c-21.9-21.9-57.3-21.9-79.2 0L45.7 184.4c-21.9 21.9-21.9 57.3 0 79.2l138.7 138.7c21.9 21.9 57.3 21.9 79.2 0l138.7-138.7c21.9-21.9 21.9-57.3 0-79.2zm-90.5-11.4c28.1-28.1 73.7-28.1 101.8 0l138.8 138.8c28.1 28.1 28.1 73.7 0 101.8L274.9 413.7c-28.1 28.1-73.7 28.1-101.8 0L34.3 274.9c-28.1-28.1-28.1-73.7 0-101.8zM320 448v-34.2l16-16V448c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H465.5c-.8-5.4-2.1-10.8-3.8-16H576c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H384c-35.3 0-64-28.7-64-64m144-96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64M208 120a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M104 224a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m88-32a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-16 72a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m88-72a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M173.1 34.3c28.1-28.1 73.7-28.1 101.8 0l138.8 138.8c28.1 28.1 28.1 73.7 0 101.8L274.9 413.7c-28.1 28.1-73.7 28.1-101.8 0L34.3 274.9c-28.1-28.1-28.1-73.7 0-101.8zM224 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m128 128a24 24 0 1 0-48 0 24 24 0 1 0 48 0m128-128a24 24 0 1 0-48 0 24 24 0 1 0 48 0M248 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48M96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 176a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-176a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-32 248v-34.2l116.3-116.3c28.6-28.6 37-69.6 25.4-105.5H576c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H384c-35.3 0-64-28.7-64-64m160-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
