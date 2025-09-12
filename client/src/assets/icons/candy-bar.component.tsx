import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CandyBarIcon: React.FC<
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
                  d="M0 320h128v-96H0zm0 64c0 35.3 28.7 64 64 64h64v-96H0zm288 64v-96H160v96zm0-224H160v96h128zm0-160H160v128h128zm288 0H320v384h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M44.2 192H128v-83.8c0-7.1-9-11.1-15-7.4-12 7.1-26 11.2-41 11.2q-6 0-11.7-.9c-7-1-14.2 6.2-13.1 13.1q.9 5.7.9 11.7c0 15-4.1 29-11.3 41-3.6 6.1.4 15 7.4 15z"
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
                  d="M0 320v-96h128v96zm0 64v-32h128v96H64c-35.3 0-64-28.7-64-64m288 64H160v-96h128v-32H160v-96h128v-32H160V64h416c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H288M36.7 177c7.2-12 11.3-26 11.3-41q0-6-.9-11.7c-1-7 6.2-14.2 13.1-13.1q5.7.9 11.7.9c15 0 29-4.1 41-11.3 6.1-3.6 15 .4 15 7.4V192H44.2c-7.1 0-11.1-9-7.4-15zM336 112v288h240c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16z"
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
                  d="M155.5 74.7c2.3-6.4 8.3-10.7 15.1-10.7H576c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V234.5c0-6.8 4.3-12.8 10.7-15.1C41.8 208.5 64 178.8 64 144c0-8.8 7.2-16 16-16 34.8 0 64.5-22.2 75.5-53.3M192 96v96h128V96zm-32 30.4c-17 17.4-39.7 29.2-65 32.6-1.6 11.7-4.9 22.8-9.8 33H160zm-96 96c-9.2 9.4-20 17.1-32 22.8V320h128v-96H64zM32 352v32c0 17.7 14.3 32 32 32h96v-64zm160 64h128v-64H192zm128-96v-96H192v96zm32 96h224c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H352z"
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
                  d="M165.2 70c.9-3.5 4.1-6 7.7-6H576c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H56c-30.9 0-56-25.1-56-56V237c0-3.7 2.5-6.8 6-7.7 38-9.8 66-44.3 66-85.3 0-4.4 3.6-8 8-8 41 0 75.5-28 85.2-66M184 80v112h136V80zm-16 23.4c-17.1 27.1-46.5 45.8-80.3 48.3-1.1 14.4-5.1 28.1-11.4 40.3H168zM66 208c-12.7 16.2-30 28.5-50 35v77h152V208zM16 336v56c0 22.1 17.9 40 40 40h112v-96zm168 96h136v-96H184zm152-112v112h240c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48H336v240m-16-112H184v112h136z"
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
                  d="M288 64h288c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H288z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 224v96h128v-96zm0 128v32c0 35.3 28.7 64 64 64h64v-96zm160 96h128v-96H160zm128-128v-96H160v96zm0-128V64H160v128zm-243.8 0H128v-83.8c0-7.1-9-11.1-15-7.4-12 7.1-26 11.2-41 11.2q-6 0-11.7-.9c-7-1-14.2 6.2-13.1 13.1q.9 5.7.9 11.7c0 15-4.1 29-11.3 41-3.6 6.1.4 15 7.4 15z"
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
