import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KazooIcon: React.FC<
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
                  d="M514 128h94c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-94c-19.8 10.2-42.2 16-66 16s-46.3-5.8-66-16H224c-3 0-6-.4-9-1.3l-192-56c-13.6-4-23-16.5-23-30.7v-80c0-14.2 9.4-26.7 23-30.7l192-56c2.9-.8 5.9-1.3 9-1.3h158c19.8-10.2 42.2-16 66-16s46.3 5.8 66 16m30 128a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-116.7-43.3 20.7 20.7 20.7-20.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L470.6 256l20.7 20.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L448 278.6l-20.7 20.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l20.7-20.7-20.7-20.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0"
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
                  d="M560 256c0 29.6-8.9 57.1-24.2 80H576c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16h-40.2c15.3 22.9 24.2 50.4 24.2 80m16 128h-94c-19.8 10.2-42.2 16-66 16s-46.3-5.8-66-16H241.7c-11.8 0-23.4-1.6-34.7-4.8-39.3-11.1-136.7-38.7-184-52.5-13.6-4-23-16.5-23-30.7v-80c0-14.2 9.4-26.7 23-30.7 47.3-13.8 144.7-41.4 184-52.5 11.3-3.2 23-4.8 34.7-4.8H350c19.8-10.2 42.2-16 66-16s46.3 5.8 66 16h94c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64m-334.3-48h54.5c-15.3-22.9-24.2-50.4-24.2-80s8.9-57.1 24.2-80h-54.5c-7.4 0-14.6 1-21.7 3-36.3 10.3-122.1 34.6-172 49v56c49.9 14.5 135.7 38.7 172.1 49 7 2 14.3 3 21.7 3zM416 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-17.9-142.1 17.9 17.8 17.9-17.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L444.3 256l17.9 17.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L416 284.3l-17.9 17.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l17.9-17.9-17.9-17.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0z"
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
                  d="M416 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224m107.3 208c22.8-25.5 36.7-59.1 36.7-96 0-37.3-14.2-71.2-37.4-96.8.2.3.5.5.7.8H576c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32zM482 384h94c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-94c-19.8-10.2-42.2-16-66-16s-46.3 5.8-66 16H228.4c-2.9 0-5.8.4-8.6 1.2C196 135.9 77 169.6 23 185.3c-13.6 4-23 16.5-23 30.7v80c0 14.2 9.4 26.7 23 30.7 53.9 15.7 173 49.4 196.8 56.1 2.8.8 5.7 1.2 8.6 1.2H350c19.8 10.2 42.2 16 66 16s46.3-5.8 66-16m-173.3-32h-80.3c-24-6.8-142.7-40.3-196.4-56v-80c53.7-15.7 172.4-49.2 196.4-56h80.2c-22.8 25.5-36.7 59.1-36.7 96s13.9 70.5 36.7 96zm56-147.3c-6.2 6.2-6.2 16.4 0 22.6l28.7 28.7-28.7 28.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l28.7-28.7 28.7 28.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L438.6 256l28.7-28.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L416 233.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0"
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
                  d="M448 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272c23.8 0 46.3-5.8 66-16h94c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-94c-19.8-10.2-42.2-16-66-16s-46.3 5.8-66 16H224c-3 0-6 .4-9 1.3l-192 56c-13.6 4-23 16.5-23 30.7v80c0 14.2 9.4 26.7 23 30.7l192 56c2.9.8 5.9 1.3 9 1.3h158c19.8 10.2 42.2 16 66 16m160-32h-69.5c32.6-26.4 53.5-66.8 53.5-112s-20.9-85.6-53.5-112H608c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16M224 144h133.5c-32.6 26.4-53.5 66.8-53.5 112s20.9 85.6 53.5 112H224q-2.25 0-4.5-.6l-192-56c-6.8-2-11.5-8.2-11.5-15.4v-80c0-7.1 4.7-13.4 11.5-15.4l192-56q2.25-.6 4.5-.6m189.7 66.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l34.3 34.4-34.3 34.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l34.3-34.3 34.3 34.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L459.3 256l34.3-34.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L448 244.7l-34.3-34.3z"
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
                  d="M592 256c0 55.7-31.7 104.1-78 128h94c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-94c46.3 23.9 78 72.3 78 128M224 384h158c-46.3-23.9-78-72.3-78-128s31.7-104.1 78-128H224c-3 0-6 .4-9 1.3l-192 56c-13.6 4-23 16.5-23 30.7v80c0 14.2 9.4 26.7 23 30.7l192 56c2.9.8 5.9 1.3 9 1.3m203.3-171.3c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l20.7 20.7-20.7 20.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l20.7-20.7 20.7 20.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L470.6 256l20.7-20.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L448 233.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-240a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
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
