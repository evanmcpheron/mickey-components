import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxCircleCheckIcon: React.FC<
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
                  d="M93.7 32H208v128H0L50.7 58.5C58.9 42.3 75.5 32 93.7 32M240 32h114.3c18.2 0 34.8 10.3 42.9 26.5L448 160H240zM0 416V192h416v.7c-89.7 8.1-160 83.5-160 175.3 0 42.5 15.1 81.6 40.2 112H64c-35.3 0-64-28.7-64-64m288-48a144 144 0 1 1 288 0 144 144 0 1 1-288 0m211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M342.4 80c6.3 0 12.1 3.7 14.6 9.5l31.4 70.5H248V80zM48 208h310.6c22.3-10.3 47.2-16 73.4-16 5.4 0 10.7.2 16 .7v-3.1c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h232.2c-11.8-14.3-21.4-30.5-28.2-48H64c-8.8 0-16-7.2-16-16zm11.6-48L91 89.5c2.6-5.8 8.3-9.5 14.6-9.5H200v80zM576 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0"
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
                  d="M240 64h102.4c12.6 0 24.1 7.4 29.2 19l34.2 77H240zm0 128h208v-2.4c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h232.2c-8.1-9.8-15.2-20.6-21-32H64c-17.7 0-32-14.3-32-32V192h208m-32-32H42.1l34.2-77c5.1-11.6 16.6-19 29.2-19H208zm224 96a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-187.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M232 48h110.4c19 0 36.2 11.2 43.9 28.5l41.6 93.6c.9 1.9 1.6 3.9 2.2 5.9H232zM16 192h432v-2.4c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h232.2c-4.2-5.1-8.1-10.4-11.8-16H64c-26.5 0-48-21.5-48-48zm200-16H18c.6-2 1.3-4 2.2-5.9l41.5-93.6C69.4 59.2 86.6 48 105.6 48H216zm216 64a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L416 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="M50.7 58.5 0 160h208V32H93.7c-18.2 0-34.8 10.3-43 26.5M240 160h208L397.3 58.5c-8.2-16.2-24.8-26.5-43-26.5H240zm176 32H0v224c0 35.3 28.7 64 64 64h232.2c-25.1-30.4-40.2-69.5-40.2-112 0-91.8 70.3-167.2 160-175.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-164.7-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
