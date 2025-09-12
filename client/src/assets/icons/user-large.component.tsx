import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserLargeIcon: React.FC<
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
                  d="M256 288a144 144 0 1 0 0-288 144 144 0 1 0 0 288m-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7h450.6c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3z"
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
                  d="M352 144a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-240 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0M49.3 464h413.4c-8.3-54.4-55.3-96-112-96H161.3c-56.7 0-103.6 41.6-112 96M0 481.3C0 392.2 72.2 320 161.3 320h189.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3"
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
                  d="M368 144a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0M32 480h448c-.7-70.8-58.3-128-129.3-128H161.3c-71 0-128.6 57.2-129.3 128m-32 1.3C0 392.2 72.2 320 161.3 320h189.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3"
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
                  d="M376 136a120 120 0 1 0-240 0 120 120 0 1 0 240 0m-256 0a136 136 0 1 1 272 0 136 136 0 1 1-272 0M16 481.3c0 8.1 6.6 14.7 14.7 14.7h450.6c8.1 0 14.7-6.6 14.7-14.7C496 401 431 336 350.7 336H161.3C81 336 16 401 16 481.3m-16 0C0 392.2 72.2 320 161.3 320h189.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3"
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
                  d="M112 144a144 144 0 1 1 288 0 144 144 0 1 1-288 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 481.3C0 392.2 72.2 320 161.3 320h189.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3"
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
