import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CanFoodIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M270.3 304.5c12.1-2.5 23.4-5.5 33.7-9V426c-2.8 1.6-6.6 3.6-11.8 5.7-22.4 9.2-57.8 16.3-100.2 16.3s-77.8-7.1-100.2-16.3c-5.2-2.1-9-4.1-11.8-5.7V295.5c10.3 3.5 21.6 6.5 33.7 9 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5m-100.1-40a32 32 0 1 1 43.5 46.9 32 32 0 1 1-43.5-46.9M16 72v368c0 39.8 78.8 72 176 72s176-32.2 176-72V72c0-39.8-78.8-72-176-72S16 32.2 16 72m288 0c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24 112 10.7 112 24"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 434.3c-3.4 3-10.2 7.5-21.7 12.2C273.5 456.6 235.9 464 192 464s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2V289.4c14.2 6.1 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1zm48 5.7V72c0-39.8-78.8-72-176-72S16 32.2 16 72v368c0 39.8 78.8 72 176 72s176-32.2 176-72M304 72c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24 112 10.7 112 24M192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M336 432V285.6c-12.8 6.5-27.7 11.9-43.7 16.2-6.5 1.7-13.3 3.3-20.4 4.7-1.3 43-36.6 77.6-80 77.6s-78.7-34.5-80-77.6c-7-1.4-13.8-3-20.4-4.7-16-4.3-30.8-9.7-43.7-16.2V432c0 3 1.5 7.5 7.6 13.3s15.9 11.8 29.2 17.1C111.4 473.1 149.3 480 192 480s80.6-6.9 107.2-17.6c13.4-5.3 23.1-11.3 29.2-17.1S336 435 336 432m0-183.7V127.6c-7.4 4.7-15.9 8.9-24.9 12.5C279.8 152.6 237.7 160 192 160s-87.8-7.4-119.1-19.9c-9.1-3.6-17.5-7.8-24.9-12.5v120.7c11.7 8.5 29.3 16.4 51.9 22.5 5.6 1.5 11.4 2.9 17.5 4.1 11.7-29.8 40.7-50.9 74.6-50.9s62.9 21.1 74.5 50.9c6.1-1.2 11.9-2.6 17.5-4.1 22.7-6.1 40.3-14 51.9-22.5zM48 80c0 3 1.5 7.5 7.6 13.3s15.9 11.8 29.2 17.1C111.4 121.1 149.3 128 192 128s80.6-6.9 107.2-17.6c13.4-5.3 23.1-11.3 29.2-17.1S336 83 336 80s-1.5-7.5-7.6-13.3-15.9-11.8-29.2-17.1C272.6 38.9 234.7 32 192 32s-80.6 6.9-107.2 17.6c-13.4 5.3-23.1 11.3-29.2 17.1S48 77 48 80m320 0v360c0 39.8-78.8 72-176 72S16 479.8 16 440V72C16 32.2 94.8 0 192 0s176 32.2 176 72zM192 352a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M343 456.5c-7 6.7-17.9 13.5-32.7 19.6C280.9 488.2 239 496 192 496s-88.9-7.8-118.4-19.9c-14.8-6-25.7-12.8-32.7-19.6-6.9-6.7-9-12.3-9-16.5V279.9c15.1 9.6 34.6 17.6 56.9 23.6 7.4 2 15.2 3.8 23.2 5.3 2.5 41.9 37.3 75.2 79.9 75.2s77.4-33.2 79.9-75.2c8.1-1.5 15.8-3.3 23.2-5.3 22.3-6 41.9-13.9 56.9-23.6V440c0 4.3-2 9.8-9 16.5zm-71.8-163.9c-5.5-38.8-38.9-68.6-79.2-68.6s-73.7 29.8-79.2 68.6c-6.8-1.4-13.4-2.9-19.7-4.6-26.6-7.1-47.6-16.8-61.1-27.8V107.4c9.5 8.8 22.6 16.5 38.2 22.7 31.6 12.6 74.6 20.3 121.8 20.3s90.2-7.6 121.8-20.3c15.6-6.2 28.8-13.9 38.2-22.7v152.9c-13.5 10.9-34.5 20.6-61.1 27.8-6.3 1.7-12.9 3.2-19.7 4.6zM352 75.2c0 6.4-3.2 13.2-10.7 20.3s-18.8 13.9-33.5 19.7c-29.2 11.8-70.2 19.2-115.8 19.2s-86.6-7.4-115.8-19.1c-14.6-5.9-26-12.6-33.5-19.7-7.5-7.2-10.7-14-10.7-20.4S35.2 62 42.7 54.9c7.5-7.2 18.8-13.9 33.5-19.8C105.4 23.4 146.4 16 192 16s86.6 7.4 115.8 19.1c14.6 5.9 26 12.6 33.5 19.7s10.7 14 10.7 20.3zm16 0V72c0-39.8-78.8-72-176-72S16 32.2 16 72v368c0 39.8 78.8 72 176 72s176-32.2 176-72zM128 304a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 128c97.2 0 176-28.7 176-64S289.2 0 192 0 16 28.7 16 64s78.8 64 176 64m0 256a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 434.3V275.4c-14.1 6.1-30.7 11.2-49.2 15-6.4-37.7-39.3-66.4-78.8-66.4s-72.4 28.7-78.8 66.4c-18.5-3.8-35.1-8.9-49.2-15v158.9c3.4 3 10.2 7.5 21.7 12.2C110.5 456.6 148.1 464 192 464s81.5-7.4 106.3-17.5c11.5-4.7 18.3-9.2 21.7-12.2m48 5.7c0 39.8-78.8 72-176 72S16 479.8 16 440V72q0-2.1.3-4.2c5.4 33.6 82 60.2 175.7 60.2s170.3-26.6 175.7-60.2q.3 2.1.3 4.2z"
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
