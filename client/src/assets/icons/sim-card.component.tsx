import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SimCardIcon: React.FC<
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
                  d="M64 0h178.7c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0m32 192c-17.7 0-32 14.3-32 32v32h64v-64zM64 352h256v-64H64zm256-128c0-17.7-14.3-32-32-32h-32v64h64zm-160-32v64h64v-64zm128 256c17.7 0 32-14.3 32-32v-32h-64v64zm-128-64v64h64v-64zm-96 32c0 17.7 14.3 32 32 32h32v-64H64z"
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
                  d="M48 64v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V154.5c0-4.2-1.7-8.3-4.7-11.3l-90.5-90.5c-3-3-7.1-4.7-11.3-4.7H64c-8.8 0-16 7.2-16 16M0 448V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m128-208h16v80H80v-32c0-26.5 21.5-48 48-48M80 384v-32h128v80h-80c-26.5 0-48-21.5-48-48m176 48h-16v-80h64v32c0 26.5-21.5 48-48 48m48-144v32H176v-80h80c26.5 0 48 21.5 48 48"
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
                  d="M32 64v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V154.5c0-8.5-3.4-16.6-9.4-22.6l-90.5-90.5c-6-6-14.1-9.4-22.6-9.4H64c-17.7 0-32 14.3-32 32M0 448V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m64-168v-40c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V280m32 120c0 8.8 7.2 16 16 16h80v-40H96zm176 16c8.8 0 16-7.2 16-16v-24h-64v40zm-64-72h80v-48H96v48h112m80-104c0-8.8-7.2-16-16-16h-80v40h96zm-128-16h-48c-8.8 0-16 7.2-16 16v24h64z"
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
                  d="M16 64v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V154.5c0-12.7-5.1-24.9-14.1-33.9l-90.5-90.5c-9-9-21.2-14.1-33.9-14.1H64c-26.5 0-48 21.5-48 48M0 448V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m80-160v64h224v-64H80m192 144c17.7 0 32-14.3 32-32v-32h-64v64zM112 208c-17.7 0-32 14.3-32 32v32h64v-64zm112 64v-64h-64v64zm0 160v-64h-64v64zM80 400c0 17.7 14.3 32 32 32h32v-64H80zm160-128h64v-32c0-17.7-14.3-32-32-32h-32zM64 400V240c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48"
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
                  d="M64 0h178.7c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0m32 192c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 192H96c-17.7 0-32 14.3-32 32v32h64zm-64 96v64h256v-64H64m256-32v-32c0-17.7-14.3-32-32-32h-32v64zm-96-64h-64v64h64zm96 192h-64v64h32c17.7 0 32-14.3 32-32zm-96 64v-64h-64v64zm-96 0v-64H64v32c0 17.7 14.3 32 32 32z"
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
