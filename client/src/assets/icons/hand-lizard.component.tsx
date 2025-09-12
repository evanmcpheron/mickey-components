import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandLizardIcon: React.FC<
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
                  d="M0 112c0-26.5 21.5-48 48-48h238.5c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8v76c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-13.8L273.9 352H112c-26.5 0-48-21.5-48-48s21.5-48 48-48h128c26.5 0 48-21.5 48-48s-21.5-48-48-48H48c-26.5 0-48-21.5-48-48"
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
                  d="M72 112c-13.3 0-24 10.7-24 24s10.7 24 24 24h168c35.3 0 64 28.7 64 64s-28.7 64-64 64H136c-13.3 0-24 10.7-24 24s10.7 24 24 24h152c4.5 0 8.9 1.3 12.7 3.6l64 40c7 4.4 11.3 12.1 11.3 20.4v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-10.7L281.1 384H136c-39.8 0-72-32.2-72-72s32.2-72 72-72h104c8.8 0 16-7.2 16-16s-7.2-16-16-16H72c-39.8 0-72-32.2-72-72s32.2-72 72-72h209.6c46.7 0 90.9 21.5 119.7 58.3l78.4 100.1c20.9 26.7 32.3 59.7 32.3 93.7V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V316.1c0-23.2-7.8-45.8-22.1-64.1l-78.4-100.1c-19.7-25.2-49.9-39.9-81.9-39.9z"
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
                  d="M0 120c0-30.9 25.1-56 56-56h230.6c36.2 0 70.1 17.5 91.1 46.9l113.4 158.8c13.6 19 20.9 41.8 20.9 65.1V432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-97.2c0-16.7-5.2-32.9-14.9-46.5L351.7 129.5c-15-21-39.3-33.5-65.1-33.5H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h200c35.3 0 64 28.7 64 64s-28.7 64-64 64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h152c3.2 0 6.2.9 8.9 2.7l96 64c4.4 3 7.1 8 7.1 13.3v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-23.4L267.2 352H120c-30.9 0-56-25.1-56-56s25.1-56 56-56h136c17.7 0 32-14.3 32-32s-14.3-32-32-32H56c-30.9 0-56-25.1-56-56"
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
                  d="M0 112c0-26.5 21.5-48 48-48h245.6c34.2 0 66.2 16.8 85.6 45l114.4 165.8c12 17.4 18.4 38 18.4 59V440c0 4.4-3.6 8-8 8s-8-3.6-8-8V333.9c0-17.8-5.4-35.3-15.6-50L366 118c-16.4-23.8-43.5-38-72.4-38H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c35.3 0 64 28.7 64 64s-28.7 64-64 64H112c-17.7 0-32 14.3-32 32s14.3 32 32 32h154.8c5.1 0 10 1.6 14.1 4.6l77.2 56.2c6.2 4.5 9.9 11.7 9.9 19.4V440c0 4.4-3.6 8-8 8s-8-3.6-8-8v-23.9c0-2.6-1.2-5-3.3-6.5l-77.2-56.1c-1.4-1-3-1.5-4.7-1.5H112c-26.5 0-48-21.5-48-48s21.5-48 48-48h128c26.5 0 48-21.5 48-48s-21.5-48-48-48H48c-26.5 0-48-21.5-48-48"
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
                  d="M0 112c0-26.5 21.5-48 48-48h238.5c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8v76c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-13.8L273.9 352H112c-26.5 0-48-21.5-48-48s21.5-48 48-48h128c26.5 0 48-21.5 48-48s-21.5-48-48-48H48c-26.5 0-48-21.5-48-48"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
