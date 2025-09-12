import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareStarIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 8c-6.1 0-11.7 3.5-14.3 8.9l-36.2 73.4-81 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.8 1.2l72.4-38 72.5 38.1c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81.1-11.8-36.2-73.4c-2.7-5.5-8.3-8.9-14.3-8.9z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 25c6.1 0 11.7 3.5 14.3 8.9l31.3 63.3 69.9 10.2c6 .9 11 5.1 12.9 10.9s.3 12.2-4 16.4L297.8 280l11.9 69.6c1 6-1.4 12.1-6.4 15.6s-11.5 4.1-16.8 1.2L224 333.6l-62.5 32.9c-5.4 2.8-11.9 2.4-16.9-1.2s-7.4-9.6-6.4-15.6l12-69.7-50.5-49.3c-4.4-4.3-5.9-10.6-4-16.4s6.9-10 12.9-10.9l69.9-10.2 31.3-63.3c2.7-5.5 8.3-8.9 14.3-8.9z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm238.3 16.9 36.2 73.4 81.1 11.8c6 .9 11 5.1 12.9 10.9s.3 12.2-4 16.4l-58.6 57.2 13.8 80.7c1 6-1.4 12.1-6.4 15.6s-11.5 4.1-16.8 1.2l-72.5-38-72.5 38.1c-5.4 2.8-11.9 2.4-16.8-1.2s-7.4-9.6-6.4-15.6l13.8-80.7-58.6-57.3c-4.4-4.3-5.9-10.6-4-16.4s6.9-10 12.9-10.9l81-11.8 36.2-73.4c2.7-5.5 8.3-8.9 14.3-8.9s11.7 3.5 14.3 8.9zm-40 95.1c-2.3 4.7-6.8 8-12 8.8l-57.3 8.3 41.5 40.4c3.8 3.7 5.5 9 4.6 14.2l-9.8 57.1 51.2-26.9c4.7-2.5 10.2-2.5 14.9 0l51.2 26.9-9.8-57.1c-.9-5.2.8-10.5 4.6-14.2l41.6-40.4-57.3-8.3c-5.2-.8-9.7-4-12-8.8L224 156.2l-25.6 51.9z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm175.7 106.2-81 11.8 58.6 57.2c3.8 3.7 5.5 9 4.6 14.2L144.1 366l72.5-38.1c4.7-2.5 10.2-2.5 14.9 0l72.4 38.1-13.8-80.7c-.9-5.2.8-10.5 4.6-14.2l58.6-57.1-81-11.8c-5.2-.8-9.7-4-12-8.8L224 120l-36.2 73.4c-2.3 4.7-6.8 8-12 8.8zm179.9-4.1c6 .9 11 5.1 12.9 10.9s.3 12.2-4 16.4l-58.6 57.2 13.8 80.7c1 6-1.4 12.1-6.4 15.6s-11.5 4.1-16.8 1.2l-72.5-38-72.5 38.1c-5.4 2.8-11.9 2.4-16.9-1.2s-7.4-9.6-6.4-15.6l13.8-80.7-58.5-57.3c-4.4-4.3-5.9-10.6-4-16.4s6.9-10 12.9-10.9l81.1-11.8 36.2-73.4c2.7-5.5 8.3-8.9 14.3-8.9s11.7 3.5 14.3 8.9l36.2 73.4 81 11.8z"
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 8c-6.1 0-11.7 3.5-14.3 8.9l-36.2 73.4-81 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.8 1.2l72.4-38 72.5 38.1c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81.1-11.8-36.2-73.4c-2.7-5.5-8.3-8.9-14.3-8.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M238.3 112.9c-2.7-5.5-8.3-8.9-14.3-8.9s-11.7 3.5-14.3 8.9l-36.2 73.4-81.1 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.9 1.2l72.4-38 72.5 38.1c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81-11.8-36.2-73.4z"
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
