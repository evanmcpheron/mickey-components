import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TicketsPerforatedIcon: React.FC<
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
                  d="M160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64v-48c0-8.8-7.4-15.7-15.7-18.6C605.5 246.9 592 229 592 208s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V96c0-35.3-28.7-64-64-64zm368 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16 80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"
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
                  d="M160 80h416c8.8 0 16 7.2 16 16v38.2c-24 15.7-40 42.8-40 73.8s16 58.1 40 73.8V320c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16M96 96v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64v-56c0-8.8-7.4-15.7-15.6-19.1-14.3-6.1-24.4-20.3-24.4-36.9s10.1-30.8 24.4-36.9c8.1-3.4 15.6-10.3 15.6-19.1V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m400 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"
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
                  d="M160 64h416c17.7 0 32 14.3 32 32v47.5c-23.7 11.8-40 36.2-40 64.5s16.3 52.8 40 64.5V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m452.2 77.5h-.1zm0 132.9h-.1zM96 96v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64v-56c0-8.8-7.4-15.7-15.6-19.1-14.3-6.1-24.4-20.3-24.4-36.9s10.1-30.8 24.4-36.9c8.1-3.4 15.6-10.3 15.6-19.1V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m400 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v256c0 61.9 50.1 112 112 112h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-44.2 0-80-35.8-80-80z"
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
                  d="M160 48h416c26.5 0 48 21.5 48 48v49.9c-.3.1-.6.3-.9.4C596 153.6 576 178.5 576 208s20 54.4 47.1 61.8c.3.1.6.2.9.4V320c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48M96 96v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64v-51.2c0-7.1-5.8-12.6-12.7-14.5C607 248.8 592 230.1 592 208s15-40.8 35.3-46.3c6.8-1.9 12.7-7.4 12.7-14.5V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m400 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32M16 96c0-4.4-3.6-8-8-8s-8 3.6-8 8v280c0 57.4 46.6 104 104 104h448c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-48.6 0-88-39.4-88-88z"
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
                  d="M96 96c0-35.3 28.7-64 64-64h416c35.3 0 64 28.7 64 64v48c0 8.8-7.4 15.7-15.7 18.6C605.5 169.1 592 187 592 208s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v48c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm448 16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72zm496-8a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
