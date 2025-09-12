import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CrossIcon: React.FC<
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
                  d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80v208c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48h-80V48c0-26.5-21.5-48-48-48z"
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
                  d="M112 48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64v192c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V272H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h64zm112 0h-64v88c0 13.3-10.7 24-24 24H48v64h88c13.3 0 24 10.7 24 24v216h64V248c0-13.3 10.7-24 24-24h88v-64h-88c-13.3 0-24-10.7-24-24z"
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
                  d="M128 40c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v88h88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-88v216c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V256H40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h88zm40-8c-4.4 0-8 3.6-8 8v104c0 8.8-7.2 16-16 16H40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h104c8.8 0 16 7.2 16 16v232c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V240c0-8.8 7.2-16 16-16h104c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H240c-8.8 0-16-7.2-16-16V40c0-4.4-3.6-8-8-8z"
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
                  d="M128 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96v224c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V256H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h96zm32-16c-8.8 0-16 7.2-16 16v104c0 4.4-3.6 8-8 8H32c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h104c4.4 0 8 3.6 8 8v232c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V248c0-4.4 3.6-8 8-8h104c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H248c-4.4 0-8-3.6-8-8V32c0-8.8-7.2-16-16-16z"
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
                  d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80v208c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48h-80V48c0-26.5-21.5-48-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 256h128v32H128z"
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
