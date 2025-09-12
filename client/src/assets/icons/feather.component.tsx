import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FeatherIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M278.5 215.6 23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41 11.1-7.2 5.5-23-7.8-23-5.1 0-9.2-4.1-9.2-9.2 0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3H377c-5.1 0-9.2-4.1-9.2-9.2 0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7 10.8-21 16.4-44.5 16.4-68.6 0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149c-48 48-75 113.1-75 181v55.3l189.6-189.5c6.2-6.2 16.4-6.2 22.6 0 5.4 5.4 6.1 13.6 2.2 19.8z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M311.9 166.1 112 366.1v-36c0-55.2 21.9-108.1 60.9-147.1L276.7 79.2c20-20 47.1-31.2 75.3-31.2s55.3 11.2 75.3 31.2l5.5 5.5c20 20 31.2 47.1 31.2 75.3 0 16.8-4 33.3-11.4 48H337.9l7.9-7.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zm-22 89.9h122.2l-48 48H241.9zm24.9 96c-37.2 30.9-84.2 48-132.9 48h-36l48-48h121zM64 330v84L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h84c67.9 0 133-27 181-75l103.8-103.6c29-29 45.3-68.3 45.3-109.3s-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149c-48 48-75 113.1-75 181"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M325.6 163.8 96 393.4V330c0-59.4 23.6-116.4 65.6-158.4L265.4 67.9c23-23 54.1-35.9 86.6-35.9s63.7 12.9 86.6 35.9l5.5 5.5c23 23 35.9 54.1 35.9 86.6 0 22.8-6.3 44.9-18 64H310.6l37.6-37.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0m-47 92.2h156.1l-64 64H214.6zm60.1 96c-41.8 41-98.1 64-156.8 64h-63.3l64-64zM64 330v95.3L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L86.6 448H182c67.9 0 133-27 181-75l103.7-103.7c29-29 45.3-68.3 45.3-109.3s-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149c-48 48-75 113.1-75 181"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M339.2 161.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L299.3 224h181c10.2-19.6 15.7-41.5 15.7-64 0-36.7-14.6-72-40.6-97.9l-5.5-5.5C424 30.6 388.7 16 352 16s-72 14.6-97.9 40.6L150.3 160.3C105.3 205.3 80 266.4 80 330v90.6zM283.3 240l-80 80h190.1l62.1-62.1c5.6-5.6 10.6-11.6 15.1-17.9zM400 336l-37 37c-48 48-113.1 75-181 75H75.3l-61.6 61.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L64 436.7V330c0-67.9 27-133 75-181L242.7 45.3C271.7 16.3 311 0 352 0s80.3 16.3 109.3 45.3l5.5 5.5C495.7 79.7 512 119 512 160s-16.3 80.3-45.3 109.3zm-22.6 0H187.3l-96 96H182c63.7 0 124.7-25.3 169.7-70.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M97.9 448h84c49.7 0 97.9-14.4 139-41 11.1-7.2 5.5-23-7.8-23-5.1 0-9.2-4.1-9.2-9.2 0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3H377c-5.1 0-9.2-4.1-9.2-9.2 0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7 10.8-21.1 16.4-44.6 16.4-68.7 0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149c-48 48-75 113.1-75 181v84l247-247c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M24 512c-6.2 0-12.3-2.3-17-7-9.4-9.4-9.4-24.6 0-33.9L311 167c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 505c-4.7 4.7-10.8 7-17 7"
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
