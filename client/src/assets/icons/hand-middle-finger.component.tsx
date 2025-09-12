import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandMiddleFingerIcon: React.FC<
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
                  d="M232 0c-22.1 0-40 17.9-40 40v164.2c-8.5-7.6-19.7-12.2-32-12.2-26.5 0-48 21.5-48 48v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-55.7c-2 1.4-3.9 3-5.8 4.5l-19.2 16C40.4 297 32 315 32 334v38c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1H304c70.7 0 128-57.3 128-128V288c0-26.5-21.5-48-48-48-12.4 0-23.6 4.7-32.1 12.3C350 227.5 329.3 208 304 208c-12.3 0-23.5 4.6-32 12.2V40c0-22.1-17.9-40-40-40"
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
                  d="M224 0c-35.3 0-64 28.7-64 64v120.5c-2.6-.3-5.3-.5-8-.5-35.3 0-64 28.7-64 64v10.8c-2.4 1.9-4.7 3.9-6.9 5.9l-20.3 18.5C42.5 299.9 32 323.5 32 348.3v10.2c0 54.1 28.7 104.1 75.4 131.3l2.6 1.5c23.2 13.6 49.7 20.7 76.6 20.7H312c66.3 0 120-53.7 120-120V288c0-35.3-28.7-64-64-64-5.3 0-10.5.7-15.5 1.9-10.8-20.2-32-33.9-56.5-33.9-2.7 0-5.4.2-8 .5V64c0-35.3-28.7-64-64-64m-16 64c0-8.8 7.2-16 16-16s16 7.2 16 16v168c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4 8.8 0 16 7.2 16 16v8c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4 8.8 0 16 7.2 16 16v104c0 39.8-32.2 72-72 72H186.6c-18.4 0-36.5-4.9-52.4-14.2l-11.7 20 11.7-20-2.6-1.5c-32-18.8-51.6-53-51.6-90v-10.2c0-11.3 4.8-22 13.1-29.6l10.9-9.9V344c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8 7.2-16 16-16 5.2 0 9.9 2.5 12.8 6.4 6.2 8.3 17 11.6 26.8 8.3s16.4-12.4 16.4-22.8z"
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
                  d="M224 56c0-13.3 10.7-24 24-24s24 10.7 24 24v170.7c0 5.2 2.5 10.1 6.8 13.1s9.7 3.8 14.6 2c3.3-1.2 6.9-1.8 10.7-1.8 14.7 0 27.2 10 30.9 23.6 1.2 4.4 4.2 8.1 8.3 10.1s8.8 2.2 13.1.6c3.6-1.4 7.6-2.2 11.8-2.2 17.7 0 32 14.3 32 32v96c0 44.2-35.8 80-80 80H184.3c-18.5 0-36.8-4.6-53.1-13.4l-7.6 14.1 7.6-14.1-8.3-4.5C86.6 442.6 64 404.7 64 363.5V344c0-15.1 7.1-29.3 19.2-38.4l22.5-16.9c2-1.5 4.1-3 6.3-4.4V344c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-.9-.1-1.9-.2-2.8.2-.9.2-1.8.2-2.8V256c0-17.7 14.3-32 32-32 8.2 0 15.7 3.1 21.3 8.1 4.7 4.2 11.4 5.3 17.2 2.7s9.5-8.3 9.5-14.6zm24-56c-30.9 0-56 25.1-56 56v138c-5.1-1.3-10.5-2-16-2-32.5 0-59.3 24.2-63.4 55.6-9.1 4.2-17.8 9.4-26 15.5L64 280c-20.1 15.1-32 38.8-32 64v19.5c0 53 29.1 101.7 75.7 126.8l8.3 4.5c21 11.3 44.4 17.2 68.3 17.2H320c61.9 0 112-50.1 112-112v-96c0-35.3-28.7-64-64-64-2.8 0-5.6.2-8.3.5-11-19.4-31.8-32.5-55.7-32.5V56c0-30.9-25.1-56-56-56"
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
                  d="M200 52c0-19.9 16.1-36 36-36s36 16.1 36 36v180.2c0 2.9 1.6 5.6 4.2 7s5.7 1.3 8.2-.3c6.8-4.4 15-6.9 23.7-6.9 19 0 35.2 12.1 41.4 29 1.5 4 5.8 6.2 9.8 4.9 4-1.2 8.3-1.9 12.8-1.9 23.1 0 42.1 17.9 43.9 40.6 0 .3.1.6.1 1V408c0 48.6-39.4 88-88 88H186c-20.9 0-41.4-5.4-59.5-15.8l-18-10.3C71.1 448.5 48 408.8 48 365.7v-24c0-16.5 7.3-32.1 19.8-42.7L97 274.2c2.3-1.9 4.6-3.7 7-5.5V344c0 4.4 3.6 8 8 8s8-3.6 8-8v-88c0-.3 0-.6-.1-.9 0-.3.1-.6.1-.9V252c0-24.3 19.7-44 44-44 8.7 0 16.9 2.5 23.7 6.9 2.5 1.6 5.6 1.7 8.2.3s4.2-4.1 4.2-7V52zm36-52c-28.7 0-52 23.3-52 52v143.4c-6.3-2.2-13-3.4-20-3.4-32.3 0-58.7 25.5-60 57.5-6.1 3.7-11.9 7.8-17.4 12.5l-29.1 24.7a71.97 71.97 0 0 0-25.5 55v24c0 48.8 26.2 93.9 68.5 118.1l18 10.3c20.6 11.7 43.8 17.9 67.5 17.9h142c57.4 0 104-46.6 104-104V304c0-.8-.1-1.5-.3-2.2C428.5 271.5 403 248 372 248q-5.4 0-10.5.9c-9.8-19.5-30.1-32.9-53.5-32.9-7 0-13.7 1.2-20 3.4V52c0-28.7-23.3-52-52-52"
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
                  d="M232 0c-22.1 0-40 17.9-40 40v164.2c-8.5-7.6-19.7-12.2-32-12.2-26.5 0-48 21.5-48 48v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-55.7c-2 1.4-3.9 3-5.8 4.5l-19.2 16C40.4 297 32 315 32 334v38c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1H304c70.7 0 128-57.3 128-128V288c0-26.5-21.5-48-48-48-12.4 0-23.6 4.7-32.1 12.3C350 227.5 329.3 208 304 208c-12.3 0-23.5 4.6-32 12.2V40c0-22.1-17.9-40-40-40"
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
