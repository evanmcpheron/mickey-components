import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MicrophoneLinesSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V256h-57.1l-34.5-27c2.9-3.1 7-5 11.6-5h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96s-96 43-96 96v54.3zm319.4 373.1c-12.1 3.8-24.9 5.8-38.2 5.8-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9z"
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
                  d="M472.1 344.7c15.2-26 23.9-56.3 23.9-88.7v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L408 294.5c5.2-11.8 8-24.8 8-38.5V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7zM272 187.9V96c0-26.5 21.5-48 48-48s48 21.5 48 48h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v64c0 2.3-.2 4.6-.5 6.8zm86.2 190.3c-12.1 3.8-24.9 5.8-38.2 5.8-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zm369.6 393.7-28.1-22.2c-14.7 5.8-30.6 9.1-47.4 9.1-70.7 0-128-57.3-128-128v-19.5l-32-25.3V256c0 83 63.1 151.2 144 159.2V480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-64.8c21.3-2.1 41.4-8.4 59.5-18.1M256 123.9V96c0-35.3 28.7-64 64-64s64 28.7 64 64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32h-48c-8.3 0-15.2 6.4-15.9 14.5l22.1 17.5H384v32h-1.2l33.2 26.2V96c0-53-43-96-96-96s-96 43-96 96v2.7l32 25.3zm190.7 150.6 28.1 22.2c3.4-13 5.2-26.6 5.2-40.7v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 6.3-.5 12.4-1.3 18.5"
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
                  d="m387.6 401.1-14.3-11.3c-16.5 6.6-34.5 10.2-53.3 10.2-79.5 0-144-64.5-144-144v-22l-16-12.6V256c0 85.7 67.4 155.6 152 159.8V496h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80v-80.2c21.2-1 41.3-6.2 59.6-14.7M240 101.1V96c0-44.2 35.8-80 80-80s80 35.8 80 80v16h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v48h-65.1l20.3 16H400v35.4l16 12.6V96c0-53-43-96-96-96-50.6 0-92 39.1-95.7 88.7zM476.8 288c2.1-10.4 3.2-21.1 3.2-32v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 7.1-.5 14-1.5 20.8zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="m401.3 412.2-43.1-33.9c-12.1 3.7-24.9 5.7-38.2 5.7-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c20.4-2.8 39.7-9.1 57.3-18.2m70.8-67.5c15.2-26 23.9-56.3 23.9-88.7v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7zM408 294.5c5.2-11.8 8-24.8 8-38.5h-57.1zM324.4 229c2.9-3.1 7-5 11.6-5h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96s-96 43-96 96v54.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
