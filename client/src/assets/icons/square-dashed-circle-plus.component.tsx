import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareDashedCirclePlusIcon: React.FC<
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
                  d="M96 32C43 32 0 75 0 128v32h64v-32c0-17.7 14.3-32 32-32h32V32zM0 192v128h64V192zm64 160H0v32c0 53 43 96 96 96h32v-64H96c-17.7 0-32-14.3-32-32zm320-224v70.6c15.3-4.3 31.4-6.6 48-6.6 5.4 0 10.7.2 16 .7V128c0-53-43-96-96-96h-32v64h32c17.7 0 32 14.3 32 32M160 480h136.2c-15.3-18.5-26.9-40.2-33.6-64H160zm0-384h128V32H160zm272 416a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M104 32H88C39.4 32 0 71.4 0 120v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-22.1 17.9-40 40-40h16c13.3 0 24-10.7 24-24s-10.7-24-24-24M0 296c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24S0 202.7 0 216zm24 56c-13.3 0-24 10.7-24 24v16c0 48.6 39.4 88 88 88h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-22.1 0-40-17.9-40-40v-16c0-13.3-10.7-24-24-24m400-160c13.3 0 24-10.7 24-24v-48c0-48.6-39.4-88-88-88h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c22.1 0 40 17.9 40 40v48c0 13.3 10.7 24 24 24M256 456c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24m8-376c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24zm168 432a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M112 32c8.8 0 16 7.2 16 16s-7.2 16-16 16H88c-30.9 0-56 25.1-56 56v24c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24c0-48.6 39.4-88 88-88zM0 304v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16m16 48c8.8 0 16 7.2 16 16v24c0 30.9 25.1 56 56 56h24c8.8 0 16 7.2 16 16s-7.2 16-16 16H88c-48.6 0-88-39.4-88-88v-24c0-8.8 7.2-16 16-16m417.3-159.4c-9.1.8-17.3-6.1-17.3-15.3V120c0-30.9-25.1-56-56-56h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24c48.6 0 88 39.4 88 88v57.4c0 8.1-6.7 14.6-14.7 15.2M160 464c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16M272 64h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16m272 304a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m160-64v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M120 32c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-39.8 0-72 32.2-72 72v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32c0-48.6 39.4-88 88-88zM0 312V200c0-4.4 3.6-8 8-8s8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8m8 40c4.4 0 8 3.6 8 8v32c0 39.8 32.2 72 72 72h32c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-48.6 0-88-39.4-88-88v-32c0-4.4 3.6-8 8-8m431.7-159.8c-4.2-.2-7.7-3.6-7.7-7.8V120c0-39.8-32.2-72-72-72h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c48.6 0 88 39.4 88 88v64.3c0 4.5-3.8 8-8.3 7.8zm-153 275.1c.9 1.2 1.3 2.7 1.3 4.2v.3c0 4.5-3.7 8.2-8.2 8.2H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h112.5c2.5 0 4.8 1.3 6.2 3.3M280 48H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c4.4 0 8 3.6 8 8s-3.6 8-8 8m280 320a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m152-72v64h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h64v-64c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M128 32v64H96c-17.7 0-32 14.3-32 32v32H0v-32c0-53 43-96 96-96zM0 320V192h64v128zm0 32h64v32c0 17.7 14.3 32 32 32h32v64H96c-53 0-96-43-96-96zm448-159.3c-5.3-.5-10.6-.7-16-.7-16.6 0-32.7 2.3-48 6.6V128c0-17.7-14.3-32-32-32h-32V32h32c53 0 96 43 96 96zM262.6 416c5.5 19.3 14.1 37.2 25.4 53.2V480H160v-64zM288 96H160V32h128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16"
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
