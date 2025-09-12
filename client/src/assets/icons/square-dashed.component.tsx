import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareDashedIcon: React.FC<
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
                  d="M96 32h32v64H96c-17.7 0-32 14.3-32 32v32H0v-32c0-53 43-96 96-96M0 192h64v128H0zm384 0h64v128h-64zm64-32h-64v-32c0-17.7-14.3-32-32-32h-32V32h32c53 0 96 43 96 96zm0 192v32c0 53-43 96-96 96h-32v-64h32c17.7 0 32-14.3 32-32v-32zm-384 0v32c0 17.7 14.3 32 32 32h32v64H96c-53 0-96-43-96-96v-32zm96 128v-64h128v64zm0-384V32h128v64z"
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
                  d="M88 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-22.1 0-40 17.9-40 40v16c0 13.3-10.7 24-24 24S0 149.3 0 136v-16c0-48.6 39.4-88 88-88M24 192c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24S0 309.3 0 296v-80c0-13.3 10.7-24 24-24m400 0c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24m0-32c-13.3 0-24-10.7-24-24v-16c0-22.1-17.9-40-40-40h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c48.6 0 88 39.4 88 88v16c0 13.3-10.7 24-24 24m24 216v16c0 48.6-39.4 88-88 88h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c22.1 0 40-17.9 40-40v-16c0-13.3 10.7-24 24-24s24 10.7 24 24m-400 0v16c0 22.1 17.9 40 40 40h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-48.6 0-88-39.4-88-88v-16c0-13.3 10.7-24 24-24s24 10.7 24 24m136 104c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24zM160 56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24"
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
                  d="M88 32h24c8.8 0 16 7.2 16 16s-7.2 16-16 16H88c-30.9 0-56 25.1-56 56v24c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24c0-48.6 39.4-88 88-88M16 192c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m416 0c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m0-32c-8.8 0-16-7.2-16-16v-24c0-30.9-25.1-56-56-56h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24c48.6 0 88 39.4 88 88v24c0 8.8-7.2 16-16 16m16 208v24c0 48.6-39.4 88-88 88h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24c30.9 0 56-25.1 56-56v-24c0-8.8 7.2-16 16-16s16 7.2 16 16m-416 0v24c0 30.9 25.1 56 56 56h24c8.8 0 16 7.2 16 16s-7.2 16-16 16H88c-48.6 0-88-39.4-88-88v-24c0-8.8 7.2-16 16-16s16 7.2 16 16m144 112c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16zM160 48c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16"
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
                  d="M88 32h32c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-39.8 0-72 32.2-72 72v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32c0-48.6 39.4-88 88-88M8 192c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V200c0-4.4 3.6-8 8-8m432 0c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V200c0-4.4 3.6-8 8-8m0-32c-4.4 0-8-3.6-8-8v-32c0-39.8-32.2-72-72-72h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c48.6 0 88 39.4 88 88v32c0 4.4-3.6 8-8 8m8 200v32c0 48.6-39.4 88-88 88h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c39.8 0 72-32.2 72-72v-32c0-4.4 3.6-8 8-8s8 3.6 8 8m-432 0v32c0 39.8 32.2 72 72 72h32c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-48.6 0-88-39.4-88-88v-32c0-4.4 3.6-8 8-8s8 3.6 8 8m152 120c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c4.4 0 8 3.6 8 8s-3.6 8-8 8zm-8-440c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8"
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
                  d="M96 32h32v64H96c-17.7 0-32 14.3-32 32v32H0v-32c0-53 43-96 96-96m0 384h32v64H96c-53 0-96-43-96-96v-32h64v32c0 17.7 14.3 32 32 32m256 64h-32v-64h32c17.7 0 32-14.3 32-32v-32h64v32c0 53-43 96-96 96m96-320h-64v-32c0-17.7-14.3-32-32-32h-32V32h32c53 0 96 43 96 96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 192v128h64V192zm384 0v128h64V192zM160 480h128v-64H160zm0-384h128V32H160z"
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
