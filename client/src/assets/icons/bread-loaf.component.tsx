import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BreadLoafIcon: React.FC<
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
                  d="M0 192C0 64 176 32 240 32s240 32 240 160c0 35.3-28.7 64-64 64v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64M397.4 34.9c-2-.9-4.1-1.9-6.2-2.8 3.1-.1 6-.2 8.8-.2 64 0 240 32 240 160 0 35.3-28.7 64-64 64V432c0 26.5-21.5 48-48 48h-96c10-13.4 16-30 16-48V282.5c37.3-13.2 64-48.7 64-90.5 0-82.2-57.6-130.7-114.6-157.1"
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
                  d="M64 208c-8.8 0-16-7.2-16-16 0-36.7 23.6-63.9 68.1-84.4C160.5 87.1 213.4 80 240 80s79.5 7.1 123.9 27.6c44.5 20.5 68.1 47.7 68.1 84.4 0 8.8-7.2 16-16 16-26.5 0-48 21.5-48 48v176H112V256c0-26.5-21.5-48-48-48m352 48h112v176H416V256m155.3-47.8c-1.1-.1-2.2-.2-3.3-.2h-90c1.3-5.1 2-10.5 2-16 0-51.1-28-86.9-65.8-111.5 28.7 2 72.2 9.7 109.7 27 44.5 20.6 68.1 47.8 68.1 84.5 0 8.8-7.2 16-16 16-1.6 0-3.1.1-4.7.2M112 480h416c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C640 64 464 32 400 32H240C176 32 0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48"
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
                  d="M64 224c-17.7 0-32-14.3-32-32 0-45.8 30.4-77.3 77.4-98.9C156.4 71.4 211.6 64 240 64s83.6 7.4 130.6 29.1S448 146.2 448 192c0 17.7-14.3 32-32 32s-32 14.3-32 32v176c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V256c0-17.7-14.3-32-32-32m352 32h128v176c0 8.8-7.2 16-16 16H413.3c1.8-5 2.7-10.4 2.7-16V256m155.3-31.7q-1.65-.3-3.3-.3h-96.6c5.4-9.4 8.6-20.3 8.6-32 0-64-44-104-96-128h16c28.4 0 83.6 7.4 130.6 29.1S608 146.2 608 192c0 17.7-14.3 32-32 32-1.6 0-3.2.1-4.7.3M112 480h416c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C640 64 464 32 400 32H240C176 32 0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48"
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
                  d="M64 240c-26.5 0-48-21.5-48-48 0-54.9 37.2-90.6 86.7-113.5C152.2 55.7 209.8 48 240 48s87.8 7.7 137.3 30.5C426.8 101.4 464 137.1 464 192c0 26.5-21.5 48-48 48-8.8 0-16 7.2-16 16v176c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V256c0-8.8-7.2-16-16-16m352 16h144v176c0 17.7-14.3 32-32 32H403.8c7.6-8.5 12.2-19.7 12.2-32V256m160-16H458.3c13.3-11.7 21.7-28.9 21.7-48 0-81.1-70.7-123.7-138.8-144H400c30.2 0 87.8 7.7 137.3 30.5C586.8 101.4 624 137.1 624 192c0 26.5-21.5 48-48 48m0 16c35.3 0 64-28.7 64-64C640 64 464 32 400 32H240C176 32 0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V256"
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
                  d="M240 32C176 32 0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C480 64 304 32 240 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368 480h160c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C640 64 464 32 400 32H240c64 0 240 32 240 160 0 35.3-28.7 64-64 64v176c0 26.5-21.5 48-48 48"
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
