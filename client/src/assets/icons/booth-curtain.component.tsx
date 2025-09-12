import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoothCurtainIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v416c0 17.7 14.3 32 32 32s32-14.3 32-32V64h64V0zm448 64c0-35.3-28.7-64-64-64H192c-17.7 0-32 14.3-32 32v368c0 26.5 21.5 48 48 48s48-21.5 48-48c0 26.5 21.5 48 48 48s48-21.5 48-48c0 26.5 21.5 48 48 48s48-21.5 48-48v80c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
                  d="M56 48c-4.4 0-8 3.6-8 8v432c0 13.3-10.7 24-24 24S0 501.3 0 488V56C0 25.1 25.1 0 56 0h88v48zM416 0h40c30.9 0 56 25.1 56 56v432c0 13.3-10.7 24-24 24s-24-10.7-24-24v-28.1c-7.5 2.7-15.6 4.1-24 4.1-18.4 0-35.3-6.9-48-18.3-12.7 11.4-29.6 18.3-48 18.3s-35.3-6.9-48-18.3c-12.7 11.4-29.6 18.3-48 18.3-39.8 0-72-32.2-72-72V32c0-17.7 14.3-32 32-32h208m-48 48h-48v344c0 13.3 10.7 24 24 24s24-10.7 24-24zm96 344V56c0-4.4-3.6-8-8-8h-40v344c0 13.3 10.7 24 24 24s24-10.7 24-24m-240 0c0 13.3 10.7 24 24 24s24-10.7 24-24V48h-48z"
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
                  d="M0 32v464c0 8.8 7.2 16 16 16s16-7.2 16-16V32h32V0H32C14.3 0 0 14.3 0 32m288 0v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm-32 416c19.1 0 36.3-8.4 48-21.7 11.7 13.3 28.9 21.7 48 21.7s36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7 11.7 0 22.6-3.1 32-8.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v352c0 35.3 28.7 64 64 64 19.1 0 36.3-8.4 48-21.7 11.7 13.3 28.9 21.7 48 21.7M480 48v336c0 17.7-14.3 32-32 32s-32-14.3-32-32V32h64zm-96-16v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zM192 384c0 17.7-14.3 32-32 32s-32-14.3-32-32V32h64z"
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
                  d="M16 40v464c0 4.4-3.6 8-8 8s-8-3.6-8-8V40C0 17.9 17.9 0 40 0h24v16H40c-13.3 0-24 10.7-24 24m416-24v384c0 17.7 14.3 32 32 32s32-14.3 32-32V40c0-13.3-10.7-24-24-24zm64 419.8c-8.5 7.6-19.7 12.2-32 12.2-16.7 0-31.4-8.5-40-21.5-8.6 12.9-23.3 21.5-40 21.5s-31.4-8.5-40-21.5c-8.6 12.9-23.3 21.5-40 21.5s-31.4-8.5-40-21.5c-8.6 12.9-23.3 21.5-40 21.5s-31.4-8.5-40-21.5c-8.6 12.9-23.3 21.5-40 21.5-26.5 0-48-21.5-48-48V32c0-17.7 14.3-32 32-32h344c22.1 0 40 17.9 40 40v464c0 4.4-3.6 8-8 8s-8-3.6-8-8zM128 16c-8.8 0-16 7.2-16 16v368c0 17.7 14.3 32 32 32s32-14.3 32-32V16zm64 0v384c0 17.7 14.3 32 32 32s32-14.3 32-32V16zm80 0v384c0 17.7 14.3 32 32 32s32-14.3 32-32V16zm80 0v384c0 17.7 14.3 32 32 32s32-14.3 32-32V16z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h96v64H64v416c0 17.7-14.3 32-32 32S0 497.7 0 480zM448 0c35.3 0 64 28.7 64 64v416c0 17.7-14.3 32-32 32s-32-14.3-32-32V0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 0h288v400c0 26.5-21.5 48-48 48s-48-21.5-48-48c0 26.5-21.5 48-48 48s-48-21.5-48-48c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
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
