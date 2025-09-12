import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RobotIcon: React.FC<
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
                  d="M320 0c17.7 0 32 14.3 32 32v64h120c39.8 0 72 32.2 72 72v272c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72h120V32c0-17.7 14.3-32 32-32M208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zM264 256a40 40 0 1 0-80 0 40 40 0 1 0 80 0m152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80M48 224h16v192H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16V224z"
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
                  d="M320 0c13.3 0 24 10.7 24 24v72h104c53 0 96 43 96 96v224c0 53-43 96-96 96H192c-53 0-96-43-96-96V192c0-53 43-96 96-96h104V24c0-13.3 10.7-24 24-24M192 144c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48H192M48 224h16v192H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16V224zM208 384h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16M200 256a40 40 0 1 1 80 0 40 40 0 1 1-80 0m200-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
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
                  d="M320 0c8.8 0 16 7.2 16 16v80h112c53 0 96 43 96 96v224c0 53-43 96-96 96H192c-53 0-96-43-96-96V192c0-53 43-96 96-96h112V16c0-8.8 7.2-16 16-16M192 128c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H192m16 256h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16M224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a64 64 0 1 1-128 0 64 64 0 1 1 128 0m96 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128M48 224h16v32H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h16v32H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m544 160c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-16v-32h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16v-32z"
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
                  d="M320 0c4.4 0 8 3.6 8 8v88h120c53 0 96 43 96 96v224c0 53-43 96-96 96H192c-53 0-96-43-96-96V192c0-53 43-96 96-96h120V8c0-4.4 3.6-8 8-8M192 112c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80V192c0-44.2-35.8-80-80-80H192m8 288h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8m96 0h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8m96 0h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8M224 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80m56 40a56 56 0 1 1-112 0 56 56 0 1 1 112 0m96 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0m40 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112M48 224h16v16H48c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h16v16H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m544 176c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-16v-16h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16v-16z"
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
                  d="M320 0c-17.7 0-32 14.3-32 32v64h64V32c0-17.7-14.3-32-32-32M192 400c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m96 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m96 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16M80 224c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h16V224zm480 0h-16v192h16c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M168 96c-39.8 0-72 32.2-72 72v272c0 39.8 32.2 72 72 72h304c39.8 0 72-32.2 72-72V168c0-39.8-32.2-72-72-72zm40 288h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16M184 256a40 40 0 1 1 80 0 40 40 0 1 1-80 0m232-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
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
