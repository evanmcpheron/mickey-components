import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CardHeartIcon: React.FC<
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 221.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 253.1 80 237.5 80 221.3"
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
                  d="M64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 157.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 253.1 80 237.5 80 221.3"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 157.3c0 7.8 3.1 15.2 8.6 20.7l71.4 71.4 71.4-71.4c5.5-5.5 8.6-12.9 8.6-20.7 0-16.2-13.1-29.3-29.3-29.3-7.8 0-15.2 3.1-20.7 8.6l-18.7 18.7c-6.2 6.2-16.4 6.2-22.6 0L162 200.6c-5.5-5.5-12.9-8.6-20.7-8.6-16.2 0-29.3 13.1-29.3 29.3m29.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.9-82.7C86.5 253.1 80 237.5 80 221.3c0-33.8 27.4-61.3 61.3-61.3"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 153.9v.6c0 10.6 4 20.9 11.2 28.8l78.9 86.1c1.5 1.7 3.7 2.6 5.9 2.6s4.4-.9 5.9-2.6l78.9-86.1c7.2-7.8 11.2-18.1 11.2-28.8v-.6c0-23.2-18.8-41.9-41.9-41.9-11.1 0-21.8 4.4-29.7 12.3L197.7 207c-1.5 1.5-3.5 2.3-5.7 2.3s-4.2-.8-5.7-2.3l-18.7-18.7c-7.9-7.9-18.5-12.3-29.7-12.3-23.1 0-41.9 18.8-41.9 41.9m41.9-57.9c15.4 0 30.1 6.1 41 17l13.1 13.1 13.1-13.1c10.9-10.9 25.6-17 41-17 32 0 57.9 25.9 57.9 57.9v.6c0 14.7-5.5 28.8-15.4 39.6l-78.9 86.1c-4.5 5-11 7.8-17.7 7.8s-13.1-2.8-17.7-7.8l-78.9-86.1C85.5 247.3 80 233.2 80 218.6v-.6c0-32 25.9-57.9 57.9-57.9z"
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm138.2 351.7c-5.7 5.7-14.9 5.7-20.1 0l-84.7-87.4c-24.5-25.3-23.2-67.3 4.3-90.9 23.6-20.5 59.9-16.6 81.7 5.7l8.7 9.2 8.3-9.2c21.8-22.3 57.7-26.2 82.2-5.7 27.1 23.6 28.4 65.6 3.9 90.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m286.6 264.3-84.3 87.4c-5.7 5.7-14.9 5.7-20.1 0l-84.8-87.4c-24.5-25.3-23.2-67.3 4.3-90.9 23.6-20.5 59.9-16.6 81.7 5.7l8.7 9.2 8.3-9.2c21.8-22.3 57.7-26.2 82.2-5.7 27.1 23.6 28.4 65.6 3.9 90.9z"
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
