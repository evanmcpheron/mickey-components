import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LightSwitchOnIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm96 96h64c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m32-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-32-320c-17.7 0-32 14.3-32 32v96h128v-96c0-17.7-14.3-32-32-32z"
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
                  d="M169.4 48c3.3 9.3 12.2 16 22.6 16s19.3-6.7 22.6-16H320c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H214.6c-3.3-9.3-12.2-16-22.6-16s-19.3 6.7-22.6 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm80 256h96v112h-96zm0-160c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48z"
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
                  d="M176 48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h112v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h112c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H208v16c0 8.8-7.2 16-16 16s-16-7.2-16-16M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 104h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m-48-24v96h128v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m0 224c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96H128zM96 144c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm272 200H112v104c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32zm-160-16h160V144c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32zM96 144c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zm96-104a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 400a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-40-280v48h80v-48zm-16 0c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-80c-8.8 0-16-7.2-16-16z"
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
                  d="M160 96c-35.3 0-64 28.7-64 64v96h192v-96c0-35.3-28.7-64-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 96v192c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64M208 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0 416a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
