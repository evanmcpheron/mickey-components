import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TarpDropletIcon: React.FC<
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
                  d="M288 160c-35.3 0-64-26.9-64-60 0-24 33.7-70.1 52.2-93.5 6.1-7.7 17.5-7.7 23.6 0C318.3 29.9 352 76 352 100c0 33.1-28.7 60-64 60M64 128h133.5c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64H512c35.3 0 64 28.7 64 64v160H448c-17.7 0-32 14.3-32 32v128H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m384 384V384h128zM96 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M288 160c-35.3 0-64-26.9-64-60 0-24 33.7-70.1 52.2-93.5 6.1-7.7 17.5-7.7 23.6 0C318.3 29.9 352 76 352 100c0 33.1-28.7 60-64 60M64 128h133.5c7 19.8 20.3 36.6 37.5 48H64c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h352v-80c0-17.7 14.3-32 32-32h80V192c0-8.8-7.2-16-16-16H341.1c17.2-11.4 30.5-28.2 37.5-48H512c35.3 0 64 28.7 64 64v172.1c0 12.7-5.1 24.9-14.1 33.9L462 497.9c-9 9-21.2 14.1-33.9 14.1H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m48 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M328 113.5c0-.1-.1-1.1-.6-3.1-.6-2.3-1.7-5.3-3.2-8.9-3.2-7.4-7.9-16-13.7-25.3-7-11.3-15-22.6-22.4-32.6-7.4 10-15.4 21.3-22.4 32.6-5.8 9.3-10.5 17.9-13.7 25.3-1.6 3.6-2.6 6.6-3.2 8.9-.5 2-.6 3-.6 3.1 0 17.7 15.9 35.5 40 35.5s40-17.8 40-35.5zm32 0c0 37.3-32.2 67.5-72 67.5s-72-30.2-72-67.5c0-27.7 39.7-81.3 60.2-107 6.1-7.7 17.5-7.7 23.7 0 20.4 25.7 60.2 79.3 60.2 107zM64 128h129.3c1.9 11.5 5.9 22.3 11.5 32H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h320V368c0-26.5 21.5-48 48-48h112V192c0-17.7-14.3-32-32-32H371.2c5.6-9.7 9.6-20.5 11.5-32H512c35.3 0 64 28.7 64 64v156.1c0 12.7-5.1 24.9-14.1 33.9L446.1 497.9c-9 9-21.2 14.1-33.9 14.1H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m359.4 347.3 115.9-115.9c2.1-2.1 3.5-4.6 4.2-7.4H432c-8.8 0-16 7.2-16 16v111.5c2.8-.7 5.4-2.1 7.4-4.2M96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M344 113.5c0-3.6-1.4-9.8-5.2-18.4-3.6-8.3-8.8-17.7-14.8-27.4-11.8-18.9-26-37.7-36-50.4-10 12.7-24.2 31.5-36 50.4-6 9.7-11.2 19-14.8 27.4-3.8 8.7-5.2 14.8-5.2 18.4 0 27.5 24.1 51.5 56 51.5s56-24 56-51.5m16 0c0 37.3-32.2 67.5-72 67.5s-72-30.2-72-67.5c0-27.7 39.7-81.3 60.2-107 6.1-7.7 17.5-7.7 23.7 0 20.4 25.7 60.2 79.3 60.2 107zM64 128h129.3c.9 5.5 2.3 10.9 4.1 16H64c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h332.1c1.3 0 2.6-.1 3.9-.2V376c0-22.1 17.9-40 40-40h119.8c.2-1.3.2-2.6.2-3.9V192c0-26.5-21.5-48-48-48H378.5c1.8-5.1 3.2-10.5 4.1-16H512c35.3 0 64 28.7 64 64v140.1c0 12.7-5.1 24.9-14.1 33.9L430.1 497.9c-9 9-21.2 14.1-33.9 14.1H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m354.7 358.6 131.9-131.9q1.35-1.35 2.4-2.7H440c-13.3 0-24 10.7-24 24v113.1q1.5-1.2 2.7-2.4zM72 216a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M64 128h133.5c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64H512c35.3 0 64 28.7 64 64v160H448c-17.7 0-32 14.3-32 32v128H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m32 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 160c35.3 0 64-26.9 64-60 0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0C257.7 29.9 224 76 224 100c0 33.1 28.7 60 64 60m128 352 160-160H448c-17.7 0-32 14.3-32 32z"
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
