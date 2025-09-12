import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandBackPointUpIcon: React.FC<
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
                  d="M136 0c-22.1 0-40 17.9-40 40v280c0 8.8-7.2 16-16 16s-16-7.2-16-16v-55.7c-2 1.4-3.9 3-5.8 4.5l-19.2 16C24.4 297 16 315 16 334v38c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1H288c70.7 0 128-57.3 128-128V288c0-26.5-21.5-48-48-48-12.4 0-23.6 4.7-32.1 12.3C334 227.5 313.3 208 288 208c-12.4 0-23.6 4.7-32.1 12.3C254 195.5 233.3 176 208 176c-12.3 0-23.5 4.6-32 12.2V40c0-22.1-17.9-40-40-40"
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
                  d="M144 0c-35.3 0-64 28.7-64 64v188.8c-5.2 3.6-10.2 7.6-14.9 11.9l-20.3 18.5C26.5 299.9 16 323.5 16 348.3v10.2c0 54.1 28.7 104.1 75.4 131.3l2.6 1.5c23.2 13.6 49.7 20.7 76.6 20.7H296c66.3 0 120-53.7 120-120V288c0-35.3-28.7-64-64-64-2.8 0-5.6.2-8.3.5-11-19.4-31.8-32.5-55.7-32.5-5.3 0-10.5.7-15.5 1.9-10.8-20.2-32-33.9-56.5-33.9-2.7 0-5.4.2-8 .5V64c0-35.3-28.7-64-64-64m-16 64c0-8.8 7.2-16 16-16s16 7.2 16 16v136c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4 8.8 0 16 7.2 16 16v8c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4 8.8 0 16 7.2 16 16 0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2 8.8 0 16 7.2 16 16v104c0 39.8-32.2 72-72 72H170.6c-18.4 0-36.5-4.9-52.4-14.2l-11.7 20 11.7-20-2.6-1.5c-32-18.8-51.6-53-51.6-90v-10.2c0-11.3 4.8-22 13.1-29.6L96 301.5V344c0 8.8 7.2 16 16 16s16-7.2 16-16V64"
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
                  d="M136 0c-30.9 0-56 25.1-56 56v200.6c-3.2 2-6.4 4.2-9.5 6.5L48 280c-20.1 15.1-32 38.8-32 64v19.5c0 53 29.1 101.7 75.7 126.8l8.3 4.5c21 11.3 44.4 17.2 68.3 17.2H304c61.9 0 112-50.1 112-112v-96c0-35.3-28.7-64-64-64-2.8 0-5.6.2-8.3.5-11-19.4-31.8-32.5-55.7-32.5-5.3 0-10.5.7-15.5 1.9-10.8-20.2-32-33.9-56.5-33.9-8.5 0-16.6 1.7-24 4.7V56c0-30.9-25.1-56-56-56m-24 56c0-13.3 10.7-24 24-24s24 10.7 24 24v157.5c0 7.1 4.6 13.3 11.4 15.3s14-.6 18-6.5c5.8-8.7 15.6-14.3 26.7-14.3 15.6 0 28.6 11.2 31.4 25.9 1 5.1 4.4 9.5 9.2 11.6s10.3 1.8 14.8-.9c4.8-2.9 10.5-4.6 16.6-4.6 14.7 0 27.2 10 30.9 23.6 1.2 4.4 4.2 8.1 8.3 10.1s8.8 2.2 13.1.6c3.6-1.4 7.6-2.2 11.8-2.2 17.7 0 32 14.3 32 32v96c0 44.2-35.8 80-80 80H168.3c-18.5 0-36.8-4.6-53.1-13.4l-7.6 14.1 7.6-14.1-8.3-4.5C70.6 442.6 48 404.7 48 363.5V344c0-15.1 7.1-29.3 19.2-38.4L80 296v48c0 8.8 7.2 16 16 16s16-7.2 16-16V56"
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
                  d="M140 0c-28.7 0-52 23.3-52 52v197.6c-6 3.7-11.8 7.8-17.3 12.5l-29.2 24.6a71.97 71.97 0 0 0-25.5 55v24c0 48.8 26.2 93.9 68.5 118.1l18 10.3c20.6 11.7 43.8 17.9 67.5 17.9h142c57.4 0 104-46.6 104-104V304c0-.8-.1-1.5-.3-2.2C412.5 271.5 387 248 356 248q-5.4 0-10.5.9c-9.8-19.5-30.1-32.9-53.5-32.9-6.1 0-12 .9-17.6 2.6-9.6-20.4-30.3-34.6-54.4-34.6-10.1 0-19.6 2.5-28 6.9V52c0-28.7-23.3-52-52-52M88 268.8V344c0 4.4 3.6 8 8 8s8-3.6 8-8V52c0-19.9 16.1-36 36-36s36 16.1 36 36v154.5c0 3.2 1.9 6.1 4.9 7.4s6.4.6 8.7-1.6c7.9-7.6 18.6-12.2 30.5-12.2 19.9 0 36.7 13.2 42.1 31.3.7 2.2 2.3 4.1 4.4 5s4.6.9 6.7-.1c5.7-2.7 12-4.2 18.8-4.2 19 0 35.2 12.1 41.4 29 1.5 4 5.8 6.2 9.8 4.9 4-1.2 8.3-1.9 12.8-1.9 23.1 0 42.1 17.9 43.9 40.6 0 .3.1.6.1 1V408c0 48.6-39.4 88-88 88H170c-20.9 0-41.4-5.4-59.5-15.8l-18-10.3C55.1 448.5 32 408.8 32 365.7v-24c0-16.5 7.3-32.1 19.8-42.7L81 274.2c2.3-1.9 4.6-3.7 7-5.5z"
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
                  d="M136 0c-22.1 0-40 17.9-40 40v280c0 8.8-7.2 16-16 16s-16-7.2-16-16v-55.7c-2 1.4-3.9 3-5.8 4.5l-19.2 16C24.4 297 16 315 16 334v38c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1H288c70.7 0 128-57.3 128-128V288c0-26.5-21.5-48-48-48-12.4 0-23.6 4.7-32.1 12.3C334 227.5 313.3 208 288 208c-12.4 0-23.6 4.7-32.1 12.3C254 195.5 233.3 176 208 176c-12.3 0-23.5 4.6-32 12.2V40c0-22.1-17.9-40-40-40"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
