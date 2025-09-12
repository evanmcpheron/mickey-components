import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChestnutIcon: React.FC<
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
                  d="M224 32c5.3 0 10.3 2.7 13.3 7.1 2.9 4.3 7.9 9.7 15.5 16.6 7.5 6.8 16.7 14.3 27.2 22.8l3.1 2.5c20.3 16.4 44.7 36.1 68.2 59.6C400.8 190.2 448 258 448 352H0c0-94 47.2-161.8 96.7-211.3 23.5-23.5 47.9-43.2 68.2-59.6l3.1-2.5c10.6-8.5 19.7-16 27.2-22.8 7.6-6.9 12.7-12.3 15.5-16.6 3-4.5 8-7.1 13.3-7.1zM4 384h440c-14.2 55.2-64.3 96-124 96H128c-59.6 0-109.8-40.8-124-96"
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
                  d="M154 90.5c13.9-11.4 27.8-22.7 41.1-34.8 7.6-6.9 12.7-12.3 15.5-16.6 3-4.5 8-7.1 13.3-7.1s10.3 2.7 13.3 7.1c2.9 4.3 7.9 9.7 15.5 16.6 13.3 12.1 27.2 23.4 41.1 34.8 19.6 16.1 39.3 32.1 57.3 50.2C400.8 190.2 448 258 448 352c0 70.7-57.3 128-128 128H128C57.3 480 0 422.7 0 352c0-94 47.2-161.8 96.7-211.3 18.1-18.1 37.7-34.1 57.3-50.2M393.3 384H54.7c12.3 28.3 40.5 48 73.3 48h192c32.8 0 61-19.7 73.3-48m-76-209.4c-13.6-13.6-28.6-26.3-45.2-39.9-2.7-2.2-5.5-4.5-8.2-6.8-12.8-10.5-26.6-21.7-39.9-33.6-13.3 11.9-27.1 23.1-39.9 33.6-2.8 2.3-5.6 4.5-8.2 6.8-16.6 13.6-31.6 26.3-45.2 39.9C88.9 216.4 53.4 268 48.6 336h350.8c-4.8-68-40.3-119.6-82.1-161.4"
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
                  d="M328.7 163.3c-14.2-14.2-29.7-27.3-46.4-41-2.8-2.3-5.6-4.5-8.4-6.9-13.9-11.4-28.5-23.3-42.5-36-2.5-2.3-5-4.6-7.4-7-2.4 2.3-4.8 4.7-7.4 7-14 12.7-28.6 24.6-42.5 36l-8.4 6.9c-16.6 13.7-32.2 26.8-46.4 41C72.8 209.8 32 270 32 352h384c0-82-40.8-142.2-87.3-188.7M37.5 384c13.2 37.3 48.7 64 90.5 64h192c41.8 0 77.4-26.7 90.5-64zm313.8-243.3C400.8 190.2 448 258 448 352c0 70.7-57.3 128-128 128H128C57.3 480 0 422.7 0 352c0-94 47.2-161.8 96.7-211.3 18.1-18.1 37.7-34.1 57.3-50.2 13.9-11.4 27.8-22.7 41.1-34.8 7.6-6.9 12.7-12.3 15.5-16.6 3-4.5 8-7.1 13.3-7.1s10.3 2.7 13.3 7.1c2.9 4.3 7.9 9.7 15.5 16.6 13.3 12.1 27.2 23.4 41.1 34.8 19.6 16.1 39.3 32.1 57.3 50.2z"
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
                  d="M340 152c-14.8-14.8-30.9-28.3-47.6-42-2.8-2.3-5.6-4.6-8.5-7-13.9-11.4-28.2-23-41.8-35.4C234.3 60.5 228 54 224 48c-4 6-10.3 12.5-18.1 19.6-13.7 12.4-28 24-41.9 35.4-2.8 2.3-5.7 4.6-8.5 7-16.7 13.7-32.7 27.2-47.6 42C60 200 16 264 16 352c0 5.4.4 10.8 1.1 16h413.8c.7-5.2 1.1-10.6 1.1-16 0-88-44-152-92-200M20.6 384c13.8 46.3 56.6 80 107.4 80h192c50.7 0 93.6-33.7 107.4-80zm330.7-243.3C400.8 190.2 448 258 448 352c0 70.7-57.3 128-128 128H128C57.3 480 0 422.7 0 352c0-94 47.2-161.8 96.7-211.3 18.1-18.1 37.7-34.1 57.3-50.2 13.9-11.4 27.8-22.7 41.1-34.8 7.6-6.9 12.7-12.3 15.5-16.6 3-4.5 8-7.1 13.3-7.1s10.3 2.7 13.3 7.1c2.9 4.3 7.9 9.7 15.5 16.6 13.3 12.1 27.2 23.4 41.1 34.8 19.6 16.1 39.3 32.1 57.3 50.2z"
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
                  d="M4 384h440c-14.2 55.2-64.3 96-124 96H128c-59.6 0-109.8-40.8-124-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 32c5.3 0 10.3 2.7 13.3 7.1 2.9 4.3 7.9 9.7 15.5 16.6 7.5 6.8 16.7 14.3 27.2 22.8l3.1 2.5c20.3 16.4 44.7 36.1 68.2 59.6C400.8 190.2 448 258 448 352c0 11-1.4 21.8-4 32H4c-2.6-10.2-4-21-4-32 0-94 47.2-161.8 96.7-211.3 23.5-23.5 47.9-43.2 68.2-59.6l3.1-2.5c10.6-8.5 19.7-16 27.2-22.8 7.6-6.9 12.7-12.3 15.5-16.6 3-4.5 8-7.1 13.3-7.1z"
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
