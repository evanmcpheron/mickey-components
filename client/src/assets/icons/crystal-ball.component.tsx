import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CrystalBallIcon: React.FC<
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
                  d="M448 224c0 62.7-25.7 119.3-67.2 160H67.2C25.7 343.3 0 286.7 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224M152.5 84.3l-9.8 26.4-26.4 9.8c-7 2.6-7 12.4 0 15l26.4 9.8 9.8 26.4c2.6 7 12.4 7 15 0l9.8-26.4 26.4-9.8c7-2.6 7-12.4 0-15l-26.4-9.8-9.8-26.4c-2.6-7-12.4-7-15 0m159 48c-2.6-7-12.4-7-15 0l-18.4 49.8-49.8 18.4c-7 2.6-7 12.4 0 15l49.8 18.4 18.4 49.8c2.6 7 12.4 7 15 0l18.4-49.8 49.8-18.4c7-2.6 7-12.4 0-15l-49.8-18.4zm98.9 331.8c3.7 5.1 5.6 11.3 5.6 17.6 0 16.7-13.6 30.3-30.3 30.3H62.3C45.6 512 32 498.4 32 481.7c0-6.3 2-12.5 5.6-17.6L72 416h304z"
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
                  d="M400 224c0 71-42 132.2-102.6 160h83.3c41.5-40.7 67.2-97.3 67.2-160C448 100.3 347.7 0 224 0S0 100.3 0 224c0 62.7 25.7 119.3 67.2 160h83.3C90 356.2 48 295 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176M167.5 100.3c-2.6-7-12.4-7-15 0l-9.8 26.4-26.4 9.8c-7 2.6-7 12.4 0 15l26.4 9.8 9.8 26.4c2.6 7 12.4 7 15 0l9.8-26.4 26.4-9.8c7-2.6 7-12.4 0-15l-26.4-9.8zm113 48-18.4 49.8-49.8 18.4c-7 2.6-7 12.4 0 15l49.8 18.4 18.4 49.8c2.6 7 12.4 7 15 0l18.4-49.8 49.8-18.4c7-2.6 7-12.4 0-15l-49.8-18.4-18.4-49.8c-2.6-7-12.4-7-15 0M20.3 474.2c-5.1 7.3-5.8 16.9-1.6 24.8s12.4 13 21.3 13h368c8.9 0 17.2-5 21.3-12.9s3.5-17.5-1.6-24.8L386.9 416H61.1z"
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
                  d="M416 224c0 49.2-18.5 94-48.9 128h40.7c25.3-36.3 40.2-80.4 40.2-128C448 100.3 347.7 0 224 0S0 100.3 0 224c0 47.6 14.8 91.7 40.2 128h40.7C50.5 318 32 273.2 32 224c0-106 86-192 192-192s192 86 192 192M64 384c-5.6 0-10.8 2.9-13.7 7.8l-46.2 77c-2.7 4.4-4.1 9.5-4.1 14.7C0 499.2 12.8 512 28.5 512h391c15.8 0 28.5-12.8 28.5-28.5 0-5.2-1.4-10.2-4.1-14.7l-46.2-77c-2.9-4.8-8.1-7.8-13.7-7.8zm-29.3 96 38.4-64h301.8l38.4 64zM288 144c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16M144 96c-8.8 0-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16"
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
                  d="M432 224c0 55.9-22 106.6-57.9 144h21.5c32.7-38.9 52.4-89.2 52.4-144C448 100.3 347.7 0 224 0S0 100.3 0 224c0 54.8 19.7 105.1 52.4 144h21.5C38 330.6 16 279.9 16 224c0-114.9 93.1-208 208-208s208 93.1 208 208M80 400c-2.7 0-5.2 1.3-6.7 3.6l-44.9 67.3c-2.9 4.3-4.4 9.4-4.4 14.7 0 14.6 11.8 26.4 26.4 26.4h347.2c14.6 0 26.4-11.8 26.4-26.4 0-5.2-1.5-10.3-4.4-14.7l-44.9-67.4c-1.5-2.2-4-3.6-6.7-3.6H80zm-38.2 79.8L84.3 416h279.4l42.5 63.8c1.1 1.7 1.8 3.7 1.8 5.8 0 5.8-4.7 10.4-10.4 10.4H50.4c-5.8 0-10.4-4.7-10.4-10.4 0-2.1.6-4.1 1.8-5.8M288 152c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-56c0-4.4-3.6-8-8-8m-144-48c-4.4 0-8 3.6-8 8v24h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-24c0-4.4-3.6-8-8-8"
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
                  d="M362.6 400c52-41 85.4-104.6 85.4-176C448 100.3 347.7 0 224 0S0 100.3 0 224c0 71.4 33.4 135 85.4 176zM152.5 84.3c2.6-7 12.4-7 15 0l9.8 26.4 26.4 9.8c7 2.6 7 12.4 0 15l-26.4 9.8-9.8 26.4c-2.6 7-12.4 7-15 0l-9.8-26.4-26.4-9.8c-7-2.6-7-12.4 0-15l26.4-9.8zm159 48 18.4 49.8 49.8 18.4c7 2.6 7 12.4 0 15l-49.8 18.4-18.4 49.8c-2.6 7-12.4 7-15 0l-18.4-49.8-49.8-18.4c-7-2.6-7-12.4 0-15l49.8-18.4 18.4-49.8c2.6-7 12.4-7 15 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M362.6 400H85.4l-63.7 73.4c-3.7 4.2-5.7 9.7-5.7 15.3 0 12.9 10.4 23.3 23.3 23.3h369.4c12.9 0 23.3-10.4 23.3-23.3 0-5.6-2-11-5.7-15.3z"
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
