import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScreenUsersIcon: React.FC<
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
                  d="M96 0C60.7 0 32 28.7 32 64v184.4C49 233.2 71.4 224 96 224V64h448v160c24.6 0 47 9.2 64 24.4V64c0-35.3-28.7-64-64-64zm64 320a64 64 0 1 0-128 0 64 64 0 1 0 128 0M0 480c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64m384-160a64 64 0 1 0-128 0 64 64 0 1 0 128 0M224 480c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64m320-96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 32c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64z"
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
                  d="M80 320a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-96 96c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zm240-96a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-96 96c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zm256-112a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 80a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-96 96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64m96-432H96c-8.8 0-16 7.2-16 16v161.3a96 96 0 0 0-48 23.1V64C32 28.7 60.7 0 96 0h448c35.3 0 64 28.7 64 64v184.4c-13.2-11.8-29.7-20.1-48-23.1V64c0-8.8-7.2-16-16-16"
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
                  d="M544 32H96c-17.7 0-32 14.3-32 32v165.5c-11.9 4.2-22.8 10.7-32 19V64C32 28.7 60.7 0 96 0h448c35.3 0 64 28.7 64 64v184.4c-9.2-8.3-20.1-14.8-32-19V64c0-17.7-14.3-32-32-32M96 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m224 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m256 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0M32 480v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32m256-32c-17.7 0-32 14.3-32 32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-17.7-14.3-32-32-32zm192 32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"
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
                  d="M544 16H96c-26.5 0-48 21.5-48 48v172.8c-5.7 3.3-11.1 7.2-16 11.6V64C32 28.7 60.7 0 96 0h448c35.3 0 64 28.7 64 64v184.4c-4.9-4.4-10.3-8.3-16-11.6V64c0-26.5-21.5-48-48-48M96 368a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m224 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m272 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0M16 488v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-39.8 32.2-72 72-72h48c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56m280-56c-30.9 0-56 25.1-56 56v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-39.8 32.2-72 72-72h48c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56zm168 56v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-39.8 32.2-72 72-72h48c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56h-48c-30.9 0-56 25.1-56 56"
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
                  d="M32 64C32 28.7 60.7 0 96 0h448c35.3 0 64 28.7 64 64v184.4c-17-15.2-39.4-24.4-64-24.4V64H96v160c-24.6 0-47 9.2-64 24.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 32c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zm256-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 32c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64zm320-96a64 64 0 1 0-128 0 64 64 0 1 0 128 0M448 480c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64"
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
