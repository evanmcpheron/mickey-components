import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GarageCarIcon: React.FC<
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
                  d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0l267.9 107.1c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v264c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m254.3-194.6L242.2 328h155.6l-12.1-34.6c-1.1-3.2-4.2-5.4-7.6-5.4H261.8c-3.4 0-6.4 2.2-7.6 5.4zM188.9 335l20.1-57.5c7.9-22.5 29.1-37.5 52.9-37.5h116.3c23.8 0 45 15.1 52.9 37.5l20 57.5c17.2 9.5 28.9 27.9 28.9 49v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H224v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-21.1 11.7-39.5 28.9-49m51.1 89a24 24 0 1 0 0-48 24 24 0 1 0 0 48m184-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M323 51.1a7.8 7.8 0 0 0-6 0l-254 103c-9.1 3.7-15 12.5-15 22.2V488c0 13.3-10.7 24-24 24S0 501.3 0 488V176.3c0-29.3 17.8-55.7 44.9-66.7L299 6.6c13.5-5.5 28.6-5.5 42.1 0l254 103c27.2 11 45 37.4 45 66.7V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V176.3c0-9.8-5.9-18.6-15-22.2zM144 240v248c0 13.3-10.7 24-24 24s-24-10.7-24-24V232c0-22.1 17.9-40 40-40h368c22.1 0 40 17.9 40 40v256c0 13.3-10.7 24-24 24s-24-10.7-24-24V240zm127.9 85.9-7 26.1H375l-7.5-26.2c-1-3.4-4.1-5.8-7.7-5.8h-80.2c-3.6 0-6.8 2.4-7.7 5.9m-59.7 37 4.6-17.2 8.7-32.3c6.6-24.4 28.8-41.4 54.1-41.4h80.2c25 0 47 16.6 53.8 40.6l9.4 32.8 5.1 17.8C445 374.7 456 394.1 456 416v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H232v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72c0-22.1 11.2-41.5 28.2-53zM408 416c0-8.8-7.2-16-16-16H248c-8.8 0-16 7.2-16 16v16h176z"
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
                  d="M326.2 36c-4-1.7-8.4-1.7-12.4 0L51.6 146.4C39.7 151.4 32 163 32 175.9V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V175.9c0-25.8 15.4-49 39.2-59L301.4 6.5c11.9-5 25.3-5 37.3 0l262.1 110.4c23.7 10 39.2 33.2 39.2 59V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V175.9c0-12.9-7.7-24.5-19.6-29.5zM96 224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V224H128v272c0 8.8-7.2 16-16 16s-16-7.2-16-16zm156.9 75.1L238.4 344h163.2L387 299.1c-2.1-6.6-8.3-11.1-15.2-11.1H268.2c-6.9 0-13.1 4.5-15.2 11.1zm164.6-9.9 20.6 63.6c15.6 9.9 25.9 27.4 25.9 47.2v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H208v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-19.8 10.3-37.3 25.9-47.2l20.6-63.6c6.4-19.8 24.9-33.2 45.7-33.2h103.6c20.8 0 39.2 13.4 45.7 33.2M208 448h224v-48c0-13.3-10.7-24-24-24H232c-13.3 0-24 10.7-24 24zm24-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m160-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M329.1 20.4c-5.8-2.4-12.4-2.4-18.2 0L40.8 131.2c-15 6.2-24.8 20.8-24.8 37V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V168.2c0-22.7 13.7-43.2 34.7-51.8L304.8 5.6c9.7-4 20.6-4 30.4 0l270.1 110.8c21 8.6 34.7 29.1 34.7 51.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V168.2c0-16.2-9.8-30.8-24.8-37zM120 208c-4.4 0-8 3.6-8 8v288c0 4.4-3.6 8-8 8s-8-3.6-8-8V216c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24v288c0 4.4-3.6 8-8 8s-8-3.6-8-8V216c0-4.4-3.6-8-8-8zm111.5 64.6L211 336h218l-20.5-63.4c-3.2-9.9-12.4-16.6-22.8-16.6H254.4c-10.4 0-19.6 6.7-22.8 16.6zm-38.1 65.6 22.9-70.6c5.3-16.5 20.7-27.7 38.1-27.7h131.2c17.3 0 32.7 11.2 38.1 27.7l22.9 70.6c19.4 6.2 33.5 24.3 33.5 45.8v120c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40H176v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V384c0-21.4 14.1-39.6 33.5-45.8zM432 352H208c-17.7 0-32 14.3-32 32v64h288v-64c0-17.7-14.3-32-32-32m-208 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32m176 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M261.8 288h116.4c3.4 0 6.4 2.2 7.6 5.4l12 34.6H242.2l12.1-34.6c1.1-3.2 4.2-5.4 7.6-5.4zM209 277.5 188.9 335c-17.2 9.5-28.9 27.9-28.9 49v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h192v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-21.1-11.7-39.5-28.9-49L431 277.5c-7.8-22.4-29-37.5-52.8-37.5H261.8c-23.8 0-45 15.1-52.9 37.5zm7 122.5a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 171.3V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v264c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3"
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
