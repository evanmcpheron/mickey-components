import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WeightScaleIcon: React.FC<
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
                  d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1-256 0M391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5.3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40 0 22.1 17.9 40 40 40s40-17.9 40-40"
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
                  d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1-256 0m304 0c0-22.6-4.3-44.2-12-64h28c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16h28c-7.7 19.8-12 41.4-12 64 0 97.2 78.8 176 176 176s176-78.8 176-176M391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5.3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40 0 22.1 17.9 40 40 40s40-17.9 40-40"
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
                  d="M112 176a144 144 0 1 1 288 0 144 144 0 1 1-288 0m320 0c0-28.8-6.9-56-19.2-80H448c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h35.2C86.9 120 80 147.2 80 176c0 97.2 78.8 176 176 176s176-78.8 176-176M391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM320 224c0-20.6-9.7-39-24.9-50.7l23.6-55c3.5-8.1-.3-17.5-8.4-21s-17.5.3-21 8.4l-23.6 55c-3.2-.5-6.4-.7-9.7-.7-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64m-64-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M416 176c0-36-11.9-69.3-32-96-4.2-5.5-8.7-10.8-13.5-15.8C341.4 34.5 300.9 16 256 16c-44.8 0-85.2 18.4-114.3 48-4.6 4.6-8.8 9.6-12.8 14.7L128 80c-20.1 26.7-32 60-32 96 0 88.4 71.6 160 160 160s160-71.6 160-160m-12.5-96c18 27.6 28.5 60.6 28.5 96 0 97.2-78.8 176-176 176S80 273.2 80 176c0-35.4 10.5-68.4 28.5-96H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM120.2 64C152.5 24.9 201.3 0 256 0s103.5 24.9 135.8 64H448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM304 224c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48c4.4 0 8.7.6 12.8 1.7l36-77.1c1.9-4 6.6-5.7 10.6-3.9s5.7 6.6 3.9 10.6l-36 77.1c12.5 8.7 20.7 23.1 20.7 39.5zm-48 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M80 176a176 176 0 1 1 352 0 176 176 0 1 1-352 0m216 48c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5.3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40 0 22.1 17.9 40 40 40s40-17.9 40-40"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 352c97.2 0 176-78.8 176-176 0-42.5-15.1-81.6-40.2-112H448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h56.2C95.1 94.4 80 133.5 80 176c0 97.2 78.8 176 176 176m40-128c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-22 17.8-39.9 39.7-40l33.6-78.3c3.5-8.1 12.9-11.9 21-8.4s11.9 12.9 8.4 21l-33.6 78.3c6.7 7.2 10.9 16.8 10.9 27.4"
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
