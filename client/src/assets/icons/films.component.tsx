import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilmsIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm8 48h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m304 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm-304 88h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m304 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm-304 88h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m304 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zM288 80h96c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m-32 176c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 264v-32h160v104H256zm0-80V80h160v104zM440 32H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-72M160 80h48v48h-64V96c0-8.8 7.2-16 16-16m-16 96h64v64h-64zm0 112h64v48h-48c-8.8 0-16-7.2-16-16zm368 48h-48v-48h64v32c0 8.8-7.2 16-16 16m16-96h-64v-64h64zm0-112h-64V80h48c8.8 0 16 7.2 16 16zm-480-8c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 272v-48h224v128H224zm0-80V64h224v128zM464 32H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-48M160 64h32v64h-64V96c0-17.7 14.3-32 32-32m-32 96h64v96h-64zm0 160v-32h64v64h-32c-17.7 0-32-14.3-32-32m384 32h-32v-64h64v32c0 17.7-14.3 32-32 32m32-96h-64v-96h64zm0-128h-64V64h32c17.7 0 32 14.3 32 32zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v240c0 70.7 57.3 128 128 128h336c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 288v-72h224v152H224zm0-88V48h224v152zm240 80v-64h96v64zm0-144h96v64h-96zm112 72V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V208M560 96v24h-96V48h48c26.5 0 48 21.5 48 48M160 48h48v72h-96V96c0-26.5 21.5-48 48-48m-48 88h96v64h-96zm96 80v64h-96v-64zm-96 104v-24h96v72h-48c-26.5 0-48-21.5-48-48m400 48h-48v-72h96v24c0 26.5-21.5 48-48 48M0 192v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48v-16c-35.3 0-64 28.7-64 64"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M256 112v48c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32m0 144v48c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 96c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm56 0v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16m336-16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM152 200v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16m336-16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM152 304v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16m336-16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM256 112v48c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32m32 112c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32z"
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
