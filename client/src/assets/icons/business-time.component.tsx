import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BusinessTimeIcon: React.FC<
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
                  d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v40H64c-35.3 0-64 28.7-64 64v96h360.2c32.3-39.1 81.1-64 135.8-64 5.4 0 10.7.2 16 .7V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56m192 296h-96c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.2-10.7.7-16zm320 16a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h64c35.3 0 64 28.7 64 64v32.7c-5.3-.5-10.6-.7-16-.7-10.9 0-21.6 1-32 2.9V160c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v96h312.2c-21.9 26.6-36.2 59.7-39.5 96H224c-17.7 0-32-14.3-32-32v-16H48v112c0 8.8 7.2 16 16 16h268c6.9 17.5 16.4 33.7 28.2 48H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm224 272a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"
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
                  d="M160 48v48h192V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16m-32 48V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v48h64c35.3 0 64 28.7 64 64v32.7c-5.3-.5-10.6-.7-16-.7s-10.7.2-16 .7V160c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v96h328.2c-8.1 9.8-15.2 20.6-21 32H208v48h114.9c-1.9 10.4-2.9 21.1-2.9 32H208c-17.7 0-32-14.3-32-32v-48H32v128c0 17.7 14.3 32 32 32h275.2c5.9 11.4 12.9 22.2 21 32H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm368 384a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="M144 40v56h224V40c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24m-16 56V40c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v56h64c35.3 0 64 28.7 64 64v32.7c-5.3-.5-10.6-.7-16-.7v-32c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v96h344.2c-4.2 5.1-8.1 10.4-11.8 16H192v48c0 8.8 7.2 16 16 16h114.9c-1 5.3-1.7 10.6-2.2 16H208c-17.7 0-32-14.3-32-32v-48H16v144c0 26.5 21.5 48 48 48h284.5c3.6 5.6 7.6 10.9 11.8 16H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm368 400a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c4.4 0 8 3.6 8 8v64h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8"
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
                  d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h64c35.3 0 64 28.7 64 64v32.7c-5.3-.5-10.6-.7-16-.7-54.7 0-103.5 24.9-135.8 64H0v-96c0-35.3 28.7-64 64-64zm192.7 256c-.5 5.3-.7 10.6-.7 16 0 42.5 15.1 81.6 40.2 112H64c-35.3 0-64-28.7-64-64V288h192v32c0 17.7 14.3 32 32 32h96.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
