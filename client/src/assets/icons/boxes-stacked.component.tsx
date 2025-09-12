import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxesStackedIcon: React.FC<
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
                  d="M248 0h-40c-26.5 0-48 21.5-48 48v112c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zM64 256c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80zm288 256h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80h-40c-15 0-28.8 5.1-39.7 13.8 4.9 10.4 7.7 22 7.7 34.2v160c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512"
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
                  d="M384 48c8.8 0 16 7.2 16 16v128h48V64c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v128h48V64c0-8.8 7.2-16 16-16h56v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V48zm-56.4 464H512c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64H327.6c11.8 13.2 20.1 29.7 23.1 48H376v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-64h56c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H350.7a96 96 0 0 1-23.1 48M256 272c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V288c0-8.8 7.2-16 16-16h56v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-64zM64 224c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64z"
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
                  d="M384 32c17.7 0 32 14.3 32 32v128h32V64c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v128h32V64c0-17.7 14.3-32 32-32h32v56c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V32zm-128 0h64v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8zm71.6 480H512c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64H327.6c8.3 9.2 14.8 20.1 19 32h5.4v56c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-56h32c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H346.5c-4.2 11.9-10.7 22.8-19 32zM384 256h64v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8zm-128 0c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V288c0-17.7 14.3-32 32-32h32v56c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-56zm-128 56v-56h64v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8m128-88H64c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64"
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
                  d="M368 16c26.5 0 48 21.5 48 48v128c0 5.6-1 11-2.7 16H430c1.3-5.1 2-10.5 2-16V64c0-35.3-28.7-64-64-64H208c-35.3 0-64 28.7-64 64v128c0 5.5.7 10.9 2 16h16.7c-1.8-5-2.7-10.4-2.7-16V64c0-26.5 21.5-48 48-48h32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V16zm-112 0h64v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm52 478.5c11.5 10.9 27 17.5 44 17.5h160c35.3 0 64-28.7 64-64V304c0-35.3-28.7-64-64-64H352c-20.2 0-38.3 9.4-50 24 3.4 4.7 6.4 9.8 8.9 15.1 8.4-13.9 23.7-23.2 41.1-23.2h32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h32c26.5 0 48 21.5 48 48v144c0 26.5-21.5 48-48 48H352c-14.9 0-28.2-6.8-37-17.4-1.9 5.5-4.2 10.9-7 15.9M400 256h64v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm-128 48v144c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48h32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64h32c26.5 0 48 21.5 48 48m-160 16v-64h64v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16m112-80H64c-35.3 0-64 28.7-64 64v144c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V304c0-35.3-28.7-64-64-64"
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
                  d="M248 80V16c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16M104 336v-80h80v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16m288-80h80v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M248 0h-40c-26.5 0-48 21.5-48 48v112c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zM64 256c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80zm288 256h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80h-40c-15 0-28.8 5.1-39.7 13.8 4.9 10.4 7.7 22 7.7 34.2v160c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512"
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
