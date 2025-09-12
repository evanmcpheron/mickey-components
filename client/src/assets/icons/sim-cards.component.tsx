import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SimCardsIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 0c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V141.3c0-17-6.7-33.3-18.7-45.3L352 18.7C340 6.7 323.7 0 306.7 0zm48 144v48h-48v-16c0-17.7 14.3-32 32-32zm-48 80h224v48H160zm224-32h-48v-48h16c17.7 0 32 14.3 32 32zm-80-48v48h-64v-48zm80 160v16c0 17.7-14.3 32-32 32h-16v-48zm-80 48h-64v-48h64zm-96 0h-16c-17.7 0-32-14.3-32-32v-16h48zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h224c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 352c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V138.5c0-4.2-1.7-8.3-4.7-11.3l-74.5-74.5c-3-3-7.1-4.7-11.3-4.7H160c-8.8 0-16 7.2-16 16zM429.3 93.3c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h149.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5zM24 96c13.3 0 24 10.7 24 24v256c0 48.6 39.4 88 88 88h224c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24m184 80h64v64h-96v-32c0-17.7 14.3-32 32-32m-32 128v-32h64v64h-32c-17.7 0-32-14.3-32-32m192 0c0 17.7-14.3 32-32 32h-64v-64h96zm0-96v32h-64v-64h32c17.7 0 32 14.3 32 32"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 368c0 17.7 14.3 32 32 32h240c17.7 0 32-14.3 32-32V154.5c0-8.5-3.4-16.6-9.4-22.6l-90.5-90.5c-6-6-14.1-9.4-22.6-9.4H144c-17.7 0-32 14.3-32 32zM80 64c0-35.3 28.7-64 64-64h149.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V368c0 35.3-28.7 64-64 64H144c-35.3 0-64-28.7-64-64zM16 96c8.8 0 16 7.2 16 16v272c0 53 43 96 96 96h240c8.8 0 16 7.2 16 16s-7.2 16-16 16H128C57.3 512 0 454.7 0 384V112c0-8.8 7.2-16 16-16m160 96v16h48v-32h-32c-8.8 0-16 7.2-16 16m120 16h56v-16c0-8.8-7.2-16-16-16h-80v32zm0 32H176v32h176v-32zm-8 64v32h48c8.8 0 16-7.2 16-16v-16zm-56 0h-56v16c0 8.8 7.2 16 16 16h64v-32zm-40-160h144c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H192c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 368V64c0-26.5 21.5-48 48-48h149.5c12.7 0 24.9 5.1 33.9 14.1l90.5 90.5c9 9 14.1 21.2 14.1 33.9V368c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48M80 64v304c0 35.3 28.7 64 64 64h240c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C326.7 6.7 310.5 0 293.5 0H144c-35.3 0-64 28.7-64 64M48 82c-27.6 7.1-48 32.2-48 62v304c0 35.3 28.7 64 64 64h240c29.8 0 54.9-20.4 62-48h-16.7c-6.6 18.6-24.4 32-45.3 32H64c-26.5 0-48-21.5-48-48V144c0-20.9 13.4-38.7 32-45.3zm120 102c0-13.3 10.7-24 24-24h24v48h-48zm128 24h-64v-48h64zm64-24v24h-48v-48h24c13.3 0 24 10.7 24 24m-56 40h56v48H168v-48h136m32 112h-24v-48h48v24c0 13.3-10.7 24-24 24m-104-48h64v48h-64zm-64 24v-24h48v48h-24c-13.3 0-24-10.7-24-24m24-168c-22.1 0-40 17.9-40 40v128c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V184c0-22.1-17.9-40-40-40H192"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 64c0-35.3 28.7-64 64-64h146.7c17 0 33.3 6.7 45.3 18.7L429.3 96c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm96 80c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v256c0 75.1 60.9 136 136 136h224c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88zm144 24c-17.7 0-32 14.3-32 32v16h48v-48zm-32 128h224v-48H160zm224-96c0-17.7-14.3-32-32-32h-16v48h48zm-144-32v48h64v-48zm96 160v48h16c17.7 0 32-14.3 32-32v-16zm-32 0h-64v48h64zm-96 0h-48v16c0 17.7 14.3 32 32 32h16z"
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
