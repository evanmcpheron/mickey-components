import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SensorTriangleExclamationIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h161c-.6-4-1-8.1-1-12.3 0-13.2 3.4-26.2 9.9-37.7l150.4-265c13-22.9 37.3-37.1 63.7-37.1V96c0-35.3-28.7-64-64-64zm48 88v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24m96 0v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24m53.8 325.8c-3.8 6.7-5.8 14.2-5.8 21.9 0 24.5 19.8 44.3 44.3 44.3h295.4c24.5 0 44.3-19.8 44.3-44.3 0-7.7-2-15.2-5.8-21.9l-150.4-265c-7.3-12.8-21-20.8-35.8-20.8s-28.5 8-35.8 20.9l-150.4 265zM464 272v88c0 8.8-7.2 16-16 16s-16-7.2-16-16v-88c0-8.8 7.2-16 16-16s16 7.2 16 16m-16 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M64 80h320c8.8 0 16 7.2 16 16v49.9c13.1-11.4 30.1-17.9 48-17.9V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h161c-.6-4-1-8.1-1-12.3 0-12.5 3-24.7 8.9-35.7H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m80 72c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm96 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm21.8 293.8c-3.8 6.7-5.8 14.2-5.8 21.9 0 24.5 19.8 44.3 44.3 44.3h295.4c24.5 0 44.3-19.8 44.3-44.3 0-7.7-2-15.2-5.8-21.9l-150.4-265c-7.3-12.8-21-20.8-35.8-20.8s-28.5 8-35.8 20.9l-150.4 265zM464 272v88c0 8.8-7.2 16-16 16s-16-7.2-16-16v-88c0-8.8 7.2-16 16-16s16 7.2 16 16m-16 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M64 64h320c17.7 0 32 14.3 32 32v39.4c9.8-4.8 20.7-7.4 32-7.4V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h161c-.6-4-1-8.1-1-12.3 0-6.7.9-13.3 2.6-19.7H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm291.8 36.9c-7.3-12.9-21-20.9-35.8-20.9s-28.5 8-35.8 20.9l-150.4 265c-3.8 6.7-5.8 14.2-5.8 21.9 0 24.5 19.8 44.3 44.3 44.3h295.4c24.5 0 44.3-19.8 44.3-44.3 0-7.7-2-15.2-5.8-21.9zM440 196.7c1.6-2.9 4.7-4.7 8-4.7s6.4 1.8 8 4.7l150.4 265c1 1.9 1.6 3.9 1.6 6.1 0 6.8-5.5 12.3-12.3 12.3H300.3c-6.8 0-12.3-5.5-12.3-12.3 0-2.1.6-4.2 1.6-6.1zM464 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16zm-16 144a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M64 48h320c26.5 0 48 21.5 48 48v33.8c5.2-1.2 10.6-1.8 16-1.8V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h161c-.6-4-1-8.1-1-12.3 0-1.2 0-2.5.1-3.7H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48m32 56c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8zm64 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8zm115.7 349.7 150.4-265c4.5-7.9 12.9-12.8 21.9-12.8s17.5 4.9 21.9 12.8l150.4 265c2.4 4.3 3.7 9.1 3.7 14 0 15.6-12.7 28.3-28.3 28.3H300.3c-15.6 0-28.3-12.7-28.3-28.3 0-4.9 1.3-9.7 3.7-14m136.5-272.8-150.4 265c-3.8 6.7-5.8 14.2-5.8 21.9 0 24.5 19.8 44.3 44.3 44.3h295.4c24.5 0 44.3-19.8 44.3-44.3 0-7.7-2-15.2-5.8-21.9l-150.4-265c-7.3-12.9-21-20.9-35.8-20.9s-28.5 8-35.8 20.9M456 288c0-4.4-3.6-8-8-8s-8 3.6-8 8v96c0 4.4 3.6 8 8 8s8-3.6 8-8zm-8 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v32c-26.4 0-50.7 14.2-63.7 37.1L233.9 430c-6.5 11.5-9.9 24.5-9.9 37.7 0 4.2.3 8.3 1 12.3H64c-35.3 0-64-28.7-64-64zm88 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24m96 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="m412.2 180.9-150.4 265c-3.8 6.7-5.8 14.2-5.8 21.9 0 24.5 19.8 44.3 44.3 44.3h295.4c24.5 0 44.3-19.8 44.3-44.3 0-7.7-2-15.2-5.8-21.9l-150.4-265c-7.3-12.9-21-20.9-35.8-20.9s-28.5 8-35.8 20.9M448 256c8.8 0 16 7.2 16 16v88c0 8.8-7.2 16-16 16s-16-7.2-16-16v-88c0-8.8 7.2-16 16-16m-24 176a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
