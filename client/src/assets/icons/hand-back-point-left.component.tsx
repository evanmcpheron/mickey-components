import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandBackPointLeftIcon: React.FC<
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
                  d="M0 168c0-22.1 17.9-40 40-40h280c8.8 0 16-7.2 16-16s-7.2-16-16-16h-55.7c1.4-2 3-3.9 4.5-5.8l16-19.2C297 56.4 315 48 334 48h38c38 0 74 16.9 98.3 46.1l4.5 5.4c24 28.8 37.1 65 37.1 102.4L512 320c0 70.7-57.3 128-128 128h-96c-26.5 0-48-21.5-48-48 0-12.4 4.7-23.6 12.3-32.1C227.5 366 208 345.3 208 320c0-12.4 4.7-23.6 12.3-32.1C195.5 286 176 265.3 176 240c0-12.3 4.6-23.5 12.2-32H40c-22.1 0-40-17.9-40-40"
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
                  d="M0 176c0-35.3 28.7-64 64-64h188.8c3.6-5.2 7.6-10.2 11.9-14.9l18.4-20.3C299.9 58.5 323.5 48 348.3 48h10.2c54.1 0 104.1 28.7 131.3 75.4l1.5 2.6c13.6 23.2 20.7 49.7 20.7 76.6V328c0 66.3-53.7 120-120 120H288c-35.3 0-64-28.7-64-64 0-2.8.2-5.6.5-8.3-19.4-11-32.5-31.8-32.5-55.7 0-5.3.7-10.5 1.9-15.5-20.2-10.8-33.9-32-33.9-56.5 0-2.7.2-5.4.5-8H64c-35.3 0-64-28.7-64-64m64-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h136c10.3 0 19.5 6.6 22.8 16.4s-.1 20.6-8.3 26.8c-3.9 3-6.4 7.6-6.4 12.8 0 8.8 7.2 16 16 16h8c10.3 0 19.5 6.6 22.8 16.4s-.1 20.6-8.3 26.8c-3.9 3-6.4 7.6-6.4 12.8 0 8.8 7.2 16 16 16 9.1 0 17.4 5.1 21.5 13.3s3.2 17.9-2.3 25.1c-2 2.7-3.2 6-3.2 9.6 0 8.8 7.2 16 16 16h104c39.8 0 72-32.2 72-72V202.6c0-18.4-4.9-36.5-14.2-52.4l20-11.7-20 11.7-1.5-2.6c-18.6-32-52.8-51.6-89.8-51.6h-10.2c-11.3 0-22 4.8-29.6 13.1L301.5 128H344c8.8 0 16 7.2 16 16s-7.2 16-16 16H64"
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
                  d="M0 168c0-30.9 25.1-56 56-56h200.6c2-3.2 4.2-6.4 6.5-9.5L280 80c15.1-20.1 38.8-32 64-32h19.5c53 0 101.7 29.1 126.8 75.7l4.5 8.3c11.3 21 17.2 44.4 17.2 68.3V336c0 61.9-50.1 112-112 112h-96c-35.3 0-64-28.7-64-64 0-2.8.2-5.6.5-8.3-19.4-11-32.5-31.8-32.5-55.7 0-5.3.7-10.5 1.9-15.5-20.2-10.8-33.9-32-33.9-56.5 0-8.5 1.7-16.6 4.7-24H56c-30.9 0-56-25.1-56-56m56-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h157.5c7.1 0 13.3 4.6 15.3 11.4s-.6 14-6.5 18c-8.7 5.8-14.3 15.6-14.3 26.7 0 15.6 11.2 28.6 25.9 31.4 5.1 1 9.5 4.4 11.6 9.2s1.8 10.3-.9 14.8c-2.9 4.8-4.6 10.5-4.6 16.6 0 14.7 10 27.2 23.6 30.9 4.4 1.2 8.1 4.2 10.1 8.3s2.2 8.8.6 13.1c-1.4 3.6-2.2 7.6-2.2 11.8 0 17.7 14.3 32 32 32h96c44.2 0 80-35.8 80-80V200.5c0-18.5-4.6-36.8-13.4-53.1l14.1-7.6-14.1 7.6-4.5-8.3C442.6 102.6 404.7 80 363.5 80H344c-15.1 0-29.3 7.1-38.4 19.2L296 112h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H56"
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
                  d="M0 172c0-28.7 23.3-52 52-52h197.6c3.7-6 7.8-11.8 12.5-17.3l24.7-29.2c13.7-16.2 33.8-25.5 55-25.5h24c48.8 0 93.9 26.2 118.1 68.5l10.3 18c11.6 20.6 17.8 43.8 17.8 67.5v142c0 57.4-46.6 104-104 104H304c-.8 0-1.5-.1-2.2-.3C271.5 444.5 248 419 248 388q0-5.4.9-10.5c-19.5-9.8-32.9-30.1-32.9-53.5 0-6.1.9-12 2.6-17.6-20.4-9.6-34.6-30.3-34.6-54.4 0-10.1 2.5-19.6 6.9-28H52c-28.7 0-52-23.3-52-52m268.8-52H344c4.4 0 8 3.6 8 8s-3.6 8-8 8H52c-19.9 0-36 16.1-36 36s16.1 36 36 36h154.5c3.2 0 6.1 1.9 7.4 4.9s.6 6.4-1.6 8.7c-7.6 7.9-12.2 18.6-12.2 30.5 0 19.9 13.2 36.7 31.3 42.1 2.2.7 4.1 2.3 5 4.4s.9 4.6-.1 6.7c-2.7 5.7-4.2 12-4.2 18.8 0 19 12.1 35.2 29 41.4 4 1.5 6.2 5.8 4.9 9.8-1.2 4-1.9 8.3-1.9 12.8 0 23.1 17.9 42.1 40.6 43.9.3 0 .6.1 1 .1h102.5c48.6 0 88-39.4 88-88v-142c0-20.9-5.4-41.4-15.8-59.5l-10.3-18C448.5 87.1 408.8 64 365.7 64h-24c-16.5 0-32.1 7.3-42.7 19.8L274.2 113c-1.9 2.3-3.7 4.6-5.5 7z"
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
                  d="M0 168c0-22.1 17.9-40 40-40h280c8.8 0 16-7.2 16-16s-7.2-16-16-16h-55.7c1.4-2 3-3.9 4.5-5.8l16-19.2C297 56.4 315 48 334 48h38c38 0 74 16.9 98.3 46.1l4.5 5.4c24 28.8 37.1 65 37.1 102.4L512 320c0 70.7-57.3 128-128 128h-96c-26.5 0-48-21.5-48-48 0-12.4 4.7-23.6 12.3-32.1C227.5 366 208 345.3 208 320c0-12.4 4.7-23.6 12.3-32.1C195.5 286 176 265.3 176 240c0-12.3 4.6-23.5 12.2-32H40c-22.1 0-40-17.9-40-40"
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
