import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SkiBootIcon: React.FC<
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
                  d="M383.4 38c3.3-17.4-8-34.1-25.4-37.5s-34.1 8-37.5 25.4l-1.2 6h-73.6c-22.1 130.8-76 201.3-127.2 238.9-26.2 19.3-51.2 29.5-69.9 35-6.3 1.8-11.8 3.1-16.5 4L.6 474c-1.8 9.4.7 19.1 6.8 26.4S22.5 512 32 512h448c17.7 0 32-14.3 32-32s-14.3-32-32-32v-72c0-12.3-7-23.4-18-28.8L340 288h-68c-8.8 0-16-7.2-16-16s7.2-16 16-16h69.5l12.3-64H288c-8.8 0-16-7.2-16-16s7.2-16 16-16h72l17.3-90 6.2-32zM38.8 275.4l.9-.3c15.6-4.6 37.1-13.3 59.9-30 43-31.6 92.3-92.9 113.7-213.1H112c-15.3 0-28.5 10.9-31.4 26z"
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
                  d="M364.1.3c13.1 2.2 21.8 14.6 19.6 27.7l-45 262.4L449 345.7c19 9.5 31 28.9 31 50.1V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H63.2c-35.4 0-61.9-32.5-54.9-67.2L88.5 51.2C90.8 40 100.6 32 112 32h222.3l2.1-12.1C338.6 6.9 351-1.9 364.1.3M202.4 80h-70.8L97.7 246.4C135.4 219.3 177.6 170 202.4 80m33.1 0c-32 124.3-95.5 182.5-146.6 209.4l-33.6 165c-1 5 2.8 9.6 7.8 9.6H432v-68.2c0-3-1.7-5.8-4.4-7.2l-126.3-63.1c-2.8-1.4-5.2-3.3-7.2-5.5H224c-8.8 0-16-7.2-16-16s7.2-16 16-16h66.4l11-64H256c-8.8 0-16-7.2-16-16s7.2-16 16-16h50.8l19.3-112z"
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
                  d="M383.7 19.1c1.7-8.7-4-17.1-12.7-18.8s-17.1 4-18.8 12.7l-3.6 19H130.3c-22.9 0-42.7 16.2-47.1 38.7l-75.4 384C2 484.4 24.7 512 54.9 512H496c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-76.7c0-17.8-9.9-34.2-25.6-42.5L330 295.4zM239.4 64h103l-24.9 128H256c-8.8 0-16 7.2-16 16s7.2 16 16 16h55.3l-12.4 64H224c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c1.2 0 2.3-.1 3.4-.4l132.1 69.5c5.3 2.8 8.5 8.2 8.5 14.2V480H54.9c-10.1 0-17.6-9.2-15.7-19.1l32-163.1c55-23.2 134.1-82.9 168.2-233.8m-32.9 0C178.6 180.4 122.7 233.7 79 258.4l35.6-181.5c1.5-7.5 8.1-12.9 15.7-12.9z"
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
                  d="M391.8 9.9c1.1-4.3-1.5-8.6-5.8-9.7s-8.6 1.5-9.7 5.8l-6.5 26H122.5c-19.2 0-35.7 13.7-39.3 32.5l-75.9 400C2.7 489.2 21.6 512 46.6 512H504c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V392.5c0-22.9-13.9-43.5-35.2-52l-123.3-49.3 62.2-249.1.1-.3 8-31.8zM235.4 48h130.4l-36 144H256c-4.4 0-8 3.6-8 8s3.6 8 8 8h69.8l-20 80H224c-4.4 0-8 3.6-8 8s3.6 8 8 8h86.5l128.4 51.4c15.2 6.1 25.1 20.8 25.1 37.1V496H46.6c-15 0-26.4-13.7-23.6-28.5L55.6 296c1.2.1 2.3-.1 3.5-.6 56.4-23.4 140.3-85 176.2-245.6.1-.6.2-1.2.2-1.7zm-16.2 0C185.6 196.2 110.5 254.7 59 278L98.9 67.5C101.1 56.2 111 48 122.5 48z"
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
                  d="M480 448H5.6l-5 26c-1.8 9.4.7 19.1 6.8 26.4S22.5 512 32 512h448.1c17.6 0 31.9-14.3 31.9-32s-14.3-32-32-32M35.4 292.8c45.7-10.8 158.9-58 194-260.8H112c-15.3 0-28.5 10.9-31.4 26z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M358 .6c17.4 3.3 28.7 20.1 25.4 37.5l-6.2 32L360 160h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h65.8l-12.3 64H272c-8.8 0-16 7.2-16 16s7.2 16 16 16h68l122 59.2c11 5.4 18 16.5 18 28.8v72H5.6l29.8-155.2c45.7-10.8 158.9-58 194-260.8h90l1.2-6C323.9 8.6 340.7-2.8 358 .6"
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
