import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonCarryBoxIcon: React.FC<
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
                  d="M80 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m16 210.7v-65l16.6 24.9c8.9 13.4 23.9 21.4 39.9 21.4H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v96h-30.9l-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6v88.1c0 17 6.7 33.3 18.7 45.3l79.4 79.4 14.3 85.9c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8l-15.2-90.9c-1.6-9.9-6.3-19-13.4-26.1l-51-51zM0 346.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-69.5z"
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
                  d="M80 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96M0 488V340.3c.5.4 1.1.9 1.6 1.3L48 378.1V488c0 13.3-10.7 24-24 24S0 501.3 0 488m59.2-312C53 176 48 181 48 187.2v85.3c0 2.5 1.1 4.8 3.1 6.3L72 295.2V179c-3.9-1.9-8.3-3-12.8-3m60.8 70.2v86.7l25.8 20.3c8.1 6.4 13.4 15.6 14.9 25.8l15.1 105.6c1.9 13.1-7.2 25.3-20.4 27.2s-25.3-7.2-27.2-20.4l-14.6-102.5-92.2-72.4C7.9 305.9 0 289.6 0 272.4v-85.2C0 154.5 26.5 128 59.2 128c26.1 0 50.5 13.3 64.6 35.3l49.3 76.7H192V128c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H168.7c-13.6 0-26.3-6.9-33.6-18.4zm120-6.2h96v-96h-96z"
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
                  d="M56 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0M0 496c0 8.8 7.2 16 16 16s16-7.2 16-16V365.5L1.6 341.6c-.5-.4-1.1-.9-1.6-1.3zm60-320c7 0 13.8 1.5 20 4.2v139.2l-40.9-27.2c-4.5-3-7.1-8-7.1-13.3V204c0-15.5 12.5-28 28-28m52 38.5 37.8 58.8c5.9 9.2 16 14.7 26.9 14.7H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v128h-15.3l-47.8-74.4c-15-23.4-41-37.6-68.9-37.6-33.1 0-60 26.9-60 60v74.9c0 16 8 31 21.4 39.9l100.2 66.8 22.7 113.5c1.7 8.7 10.2 14.3 18.8 12.6s14.3-10.2 12.6-18.8L153 379.4c-1.7-8.3-6.6-15.6-13.6-20.3L112 340.8zM224 256V128h128v128H224"
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
                  d="M91.4 226.4c-6.7 2-11.4 8.3-11.4 15.3v65.1c0 4.2 1.7 8.3 4.7 11.3l51 51c4.7 4.7 7.8 10.8 8.9 17.4l15.2 90.9c1.5 8.7-4.4 17-13.2 18.4s-17-4.4-18.4-13.2l-14.3-85.9c-.5-3.3-2.1-6.3-4.5-8.7l-79.3-79.3c-9-9-14.1-21.2-14.1-33.9v-88.2c0-23.5 19.1-42.6 42.6-42.6 18.7 0 36.2 9.3 46.5 24.9l42.6 64c3 4.5 8 7.1 13.3 7.1h63c8.8 0 16 7.2 16 16s-7.2 16-16 16h-71.4c-10.7 0-20.7-5.3-26.6-14.3l-16.6-24.9c-3.9-5.9-11.2-8.5-17.9-6.4zM251.7 272c2.7-4.7 4.3-10.2 4.3-16 0-17.7-14.3-32-32-32h-62.9l-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6v88.1c0 17 6.7 33.3 18.7 45.3l79.4 79.4 14.3 85.9c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8l-15.2-90.9c-1.6-9.9-6.3-19-13.4-26.1l-51-51v-65.1l16 24 .6.9c8.9 13.4 23.9 21.4 39.9 21.4H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v64h16v-64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H251.7M80 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64m48 32a48 48 0 1 0-96 0 48 48 0 1 0 96 0M0 346.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-69.5l-16-16V480c0 8.8-7.2 16-16 16s-16-7.2-16-16V362.5z"
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
                  d="M224 96c-17.7 0-32 14.3-32 32v96h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h128c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m64 193.7v65.1l51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.4-85.9L18.7 320C6.7 308 0 291.7 0 274.7v-88.1C0 154.2 26.2 128 58.6 128c24.1 0 46.5 12 59.9 32l42.6 64H224c17.7 0 32 14.3 32 32s-14.3 32-32 32h-71.4c-16 0-31-8-39.9-21.4zM0 480V346.5l64 64V480c0 17.7-14.3 32-32 32S0 497.7 0 480"
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
