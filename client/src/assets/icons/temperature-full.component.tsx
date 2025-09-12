import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TemperatureFullIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48M48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v164.5c0 .1.1.3.2.6.2.6.8 1.6 1.7 2.8 18.9 24.4 30.1 55 30.1 88.1 0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1.9-1.2 1.5-2.2 1.7-2.8.1-.3.2-.5.2-.6zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V112c0-8.8 7.2-16 16-16s16 7.2 16 16v210.7c18.6 6.6 32 24.4 32 45.3"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 48c-35.3 0-64 28.7-64 64v161.9c0 14.5-5.7 27.1-12.8 36.6C71.1 326.5 64 346.4 64 368c0 53 43 96 96 96s96-43 96-96c0-21.6-7.1-41.5-19.2-57.5-7.1-9.5-12.8-22.1-12.8-36.6V112c0-35.3-28.7-64-64-64M48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v161.9c0 1.7.7 4.4 3.2 7.8 18.1 24.1 28.8 54 28.8 86.4 0 79.5-64.5 144-144 144S16 447.5 16 368c0-32.4 10.7-62.3 28.8-86.4 2.5-3.4 3.2-6.1 3.2-7.8zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V112c0-8.8 7.2-16 16-16s16 7.2 16 16v210.7c18.6 6.6 32 24.4 32 45.3"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 32c-35.3 0-64 28.7-64 64v156.7c0 14.9-7 27.7-16 36.9-19.8 20.2-32 47.9-32 78.4 0 61.9 50.1 112 112 112s112-50.1 112-112c0-30.5-12.2-58.2-32-78.4-9-9.2-16-22-16-36.9V96c0-35.3-28.7-64-64-64M64 96c0-53 43-96 96-96s96 43 96 96v156.7c0 4.6 2.2 9.8 6.8 14.5 25.5 26 41.2 61.6 41.2 100.8 0 79.5-64.5 144-144 144S16 447.5 16 368c0-39.3 15.7-74.9 41.2-100.8 4.6-4.7 6.8-9.9 6.8-14.5zm96 304a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 32c-35.3 0-64-28.7-64-64 0-29.8 20.4-54.9 48-62V96c0-8.8 7.2-16 16-16s16 7.2 16 16v210c27.6 7.1 48 32.2 48 62 0 35.3-28.7 64-64 64"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 16c-35.3 0-64 28.7-64 64v163.8c0 8.4-4.4 15.7-10.7 20.3C53 287.3 32 325.2 32 368c0 70.7 57.3 128 128 128s128-57.3 128-128c0-42.8-21-80.7-53.3-104-6.3-4.6-10.7-11.9-10.7-20.3V80c0-35.3-28.7-64-64-64M80 80c0-44.2 35.8-80 80-80s80 35.8 80 80v163.8c0 2.7 1.4 5.4 4 7.3 36.3 26.1 60 68.8 60 117 0 79.5-64.5 144-144 144S16 447.5 16 368c0-48.2 23.7-90.8 60-117 2.6-1.9 4-4.6 4-7.3zm80 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 16c-35.3 0-64-28.7-64-64 0-32.6 24.4-59.6 56-63.5V72c0-4.4 3.6-8 8-8s8 3.6 8 8v232.5c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48M48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v164.5c0 .1.1.3.2.6.2.6.8 1.6 1.7 2.8 18.9 24.4 30.1 55 30.1 88.1 0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1.9-1.2 1.5-2.2 1.7-2.8.1-.3.2-.5.2-.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3z"
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
