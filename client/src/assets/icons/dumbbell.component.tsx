import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DumbbellIcon: React.FC<
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
                  d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64H64c-17.7 0-32-14.3-32-32v-64c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h32zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32h-32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32M416 224v64H224v-64z"
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
                  d="M128 88c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56v144h128V88c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56v16h24c30.9 0 56 25.1 56 56v72h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v72c0 30.9-25.1 56-56 56h-24v16c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56V280H256v144c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-16h-24c-30.9 0-56-25.1-56-56v-72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-72c0-30.9 25.1-56 56-56h24zm48 16v320c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8zm-48 48h-24c-4.4 0-8 3.6-8 8v192c0 4.4 3.6 8 8 8h24zm336 232V88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v336c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-40m72-24c4.4 0 8-3.6 8-8V160c0-4.4-3.6-8-8-8h-24v208z"
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
                  d="M208 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zm-80 349.3V432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V272h128v160c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-18.7c5 1.8 10.4 2.7 16 2.7h32c26.5 0 48-21.5 48-48v-96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-96c0-26.5-21.5-48-48-48h-32c-5.6 0-11 1-16 2.7V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160H256V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v18.7c-5-1.7-10.4-2.7-16-2.7H80c-26.5 0-48 21.5-48 48v96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v96c0 26.5 21.5 48 48 48h32c5.6 0 11-1 16-2.7M512 144c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm-32 224v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v288M128 144v224c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16"
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
                  d="M184 48c13.3 0 24 10.7 24 24v368c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V72c0-13.3 10.7-24 24-24zm-72 360v32c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40V264h192v176c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40v-32c6.7 5 15 8 24 8h16c22.1 0 40-17.9 40-40V264h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V136c0-22.1-17.9-40-40-40h-16c-9 0-17.3 3-24 8V72c0-22.1-17.9-40-40-40h-32c-22.1 0-40 17.9-40 40v176H224V72c0-22.1-17.9-40-40-40h-32c-22.1 0-40 17.9-40 40v32c-6.7-5-15-8-24-8H72c-22.1 0-40 17.9-40 40v112H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v112c0 22.1 17.9 40 40 40h16c9 0 17.3-3 24-8m416-272c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm-16 240v64c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V72c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v304M112 136v240c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V136c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24"
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
                  d="M0 256c0-17.7 14.3-32 32-32v64c-17.7 0-32-14.3-32-32m448 32H192v-64h256zm160 0v-64c17.7 0 32 14.3 32 32s-14.3 32-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 32c-17.7 0-32 14.3-32 32v64H64c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm384 0h-32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64h32c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-32V64c0-17.7-14.3-32-32-32"
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
