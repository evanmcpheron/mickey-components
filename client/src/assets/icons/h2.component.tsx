import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const H2Icon: React.FC<
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
                  d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V288h192v128c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H64zm385.9 47.4c11.6-9.9 26.4-15.4 41.7-15.4h4.4c35.3 0 64 28.7 64 64v5.8c0 17.9-7.5 35.1-20.8 47.2L378.4 392.4c-9.7 8.9-13 22.9-8.2 35.2S386.8 448 400 448h208c17.7 0 32-14.3 32-32s-14.3-32-32-32H482.3l100.2-91.9c26.4-24.2 41.5-58.5 41.5-94.4V192c0-70.7-57.3-128-128-128h-4.5c-30.6 0-60.1 10.9-83.3 30.8l-29 24.9c-13.4 11.5-15 31.7-3.5 45.1s31.7 15 45.1 3.5l29-24.9z"
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
                  d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V272h224v152c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v136H48zm397.3 40.8C457.9 118 474 112 490.7 112h9.2c42.1 0 76.2 34.1 76.2 76.2 0 21.3-8.9 41.5-24.5 56L375.7 406.4c-7.3 6.7-9.7 17.2-6.1 26.4s12.5 15.3 22.4 15.3h224c13.3 0 24-10.7 24-24s-10.7-24-24-24H453.4l130.7-120.7c25.5-23.5 39.9-56.6 39.9-91.2C624 119.6 568.4 64 499.8 64h-9.2c-28.1 0-55.3 10.1-76.6 28.3l-29.7 25.4c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l29.7-25.4z"
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
                  d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h256v160c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H32zm400.1 41.5c19.2-16.5 43.7-25.5 69-25.5h5.9c47 0 85 38.1 85 85 0 23.1-9.4 45.2-26.1 61.2l-185 178.2c-4.7 4.5-6.2 11.5-3.7 17.5s8.3 10 14.8 10h232c8.8 0 16-7.2 16-16s-7.2-16-16-16H431.7l156.4-150.6c23-22 35.9-52.5 35.9-84.3 0-64.6-52.4-117-117-117h-5.8c-33 0-64.8 11.8-89.9 33.2l-21.7 18.6c-6.7 5.8-7.5 15.9-1.7 22.6s15.8 7.5 22.6 1.7l21.7-18.6z"
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
                  d="M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V256h288v184c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H16zm410.9 35.5c20.7-17.7 47-27.5 74.2-27.5h4.2c52.2 0 94.6 42.4 94.6 94.6 0 24.5-9.5 48-26.5 65.7L386.2 434.4c-2.2 2.3-2.9 5.7-1.6 8.7s4.2 4.9 7.4 4.9h232c4.4 0 8-3.6 8-8s-3.6-8-8-8H410.8L585 251.4c19.9-20.6 31-48.1 31-76.8C616 113.5 566.5 64 505.4 64h-4.2c-31.1 0-61.1 11.1-84.7 31.3l-21.7 18.6c-3.4 2.9-3.7 7.9-.9 11.3s7.9 3.7 11.3.9z"
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
                  d="M32 64c17.7 0 32 14.3 32 32v128h192V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M491.5 128c-15.3 0-30.1 5.5-41.7 15.4l-29 24.9c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l29-24.9C431.4 74.9 461 64 491.5 64h4.5c70.7 0 128 57.3 128 128v5.8c0 35.9-15.1 70.1-41.5 94.4L482.3 384H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H400c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2l160.8-147.5c13.2-12.1 20.8-29.2 20.8-47.2V192c0-35.3-28.7-64-64-64z"
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
