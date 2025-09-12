import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RightFromLineIcon: React.FC<
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
                  d="m313.9 105.9 122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L313.9 406.1c-6.4 6.4-15 9.9-24 9.9-18.7 0-33.9-15.2-33.9-33.9V320H128c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9 9 0 17.6 3.6 24 9.9M64 96v320c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  d="M288 146.2 398 256 288 365.8V312c0-13.3-10.7-24-24-24H144v-64h120c13.3 0 24-10.7 24-24zM448 256c0-11.5-4.6-22.5-12.7-30.6L319.2 109.6c-8.7-8.7-20.5-13.6-32.8-13.6-25.6 0-46.4 20.8-46.4 46.4V176h-96c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96v33.6c0 25.6 20.8 46.4 46.4 46.4 12.3 0 24.1-4.9 32.8-13.6l116.1-115.8c8.1-8.1 12.7-19.1 12.7-30.6M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M415.2 254.2c.5.5.8 1.1.8 1.8s-.3 1.4-.8 1.8L283.3 382.2c-1.2 1.2-2.9 1.8-4.6 1.8-3.7 0-6.7-3-6.7-6.7V320c0-8.8-7.2-16-16-16H136c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h120c8.8 0 16-7.2 16-16v-57.3c0-3.7 3-6.7 6.7-6.7 1.7 0 3.3.7 4.6 1.8zM448 256c0-9.5-3.9-18.6-10.8-25.1l-132-124.4C298 99.8 288.5 96 278.7 96c-21.4 0-38.7 17.3-38.7 38.7V176H136c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h104v41.3c0 21.4 17.3 38.7 38.7 38.7 9.9 0 19.3-3.8 26.5-10.5l132-124.4c6.9-6.5 10.8-15.6 10.8-25.1M0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16S0 71.2 0 80"
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
                  d="M428.7 248c2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8L296.6 395.8c-2.7 2.7-6.4 4.2-10.2 4.2-8 0-14.4-6.5-14.4-14.4V312c0-4.4-3.6-8-8-8H128c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h136c4.4 0 8-3.6 8-8v-73.6c0-8 6.5-14.4 14.4-14.4 3.8 0 7.5 1.5 10.2 4.2zm19.3 8c0-7.2-2.9-14.2-8-19.3L307.9 104.9c-5.7-5.7-13.4-8.9-21.5-8.9-16.8 0-30.4 13.6-30.4 30.4V192H128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128v65.6c0 16.8 13.6 30.4 30.4 30.4 8.1 0 15.8-3.2 21.5-8.9L440 275.3c5.1-5.1 8-12.1 8-19.3M0 72v368c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8"
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
                  d="M0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32S0 78.3 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M436.7 228.7 313.9 105.9c-6.4-6.4-15-9.9-24-9.9-18.7 0-33.9 15.2-33.9 33.9V192H128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128v62.1c0 18.7 15.2 33.9 33.9 33.9 9 0 17.6-3.6 24-9.9l122.8-122.8c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3"
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
