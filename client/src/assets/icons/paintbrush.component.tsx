import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PaintbrushIcon: React.FC<
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
                  d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2s-42.9-17.3-61.5-3.3L262.4 187.2c-24 18-38.2 46.1-38.4 76.1zm-19.6 25.4-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9.2 7.8.6 11.6 1.8 17.5-10.2 36.4-27.8 36.4H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h144c61.9 0 112-50.1 112-112 0-2.5-.1-5-.2-7.5z"
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
                  d="m278 219.5 78.5 78.5L524.7 73.6c4.8-6.4 4.1-15.3-1.5-20.9s-14.5-6.3-20.9-1.5zm-78.9 102.1c-4.9-1-9.9-1.6-15.1-1.6-39.8 0-72 32.2-72 72 0 3.8.3 7.5.8 11.1 3.3 21.4-2.2 43.1-13.8 60l-.7.9H184c39.8 0 72-32.2 72-72 0-5.2-.5-10.2-1.6-15.1L199 321.5zM384 341.3c-19.1 25.5-48.6 41.1-80.3 42.6q.3 4.05.3 8.1c0 66.3-53.7 120-120 120H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h6c18.1 0 30.1-19.8 27.4-37.6-.9-6-1.4-12.1-1.4-18.4 0-66.3 53.7-120 120-120q4.05 0 8.1.3c1.5-31.7 17-61.1 42.5-80.3L473.5 12.8c25.5-19.1 61.1-16.6 83.7 5.9s25.1 58.2 6 83.7z"
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
                  d="M295.7 360c-5.4 0-10.6-.5-15.7-1.5v-.1l-3.9-.9-57.7-57.7-.9-3.9h-.1c-1-5.1-1.5-10.3-1.5-15.7 0-25.5 12.2-49.5 32.8-64.5L493.1 38.1c12.7-9.3 30.3-7.9 41.4 3.2S547 70 537.8 82.7L360.2 327.2c-15 20.6-39 32.8-64.5 32.8m-42.2 20.1c.3 1.3.6 2.6.9 4 1 5.1 1.6 10.4 1.6 15.9 0 44.2-35.8 80-80 80H36.8c21.2 0 37.5-11.5 47.2-24.9 9.5-13.1 14.2-30 12.5-46.7-.3-2.7-.4-5.5-.4-8.3 0-44.2 35.8-80 80-80 5.4 0 10.7.5 15.9 1.6 1.3.3 2.7.6 4 .9l57.7 57.7zm34.2 11.6c2.6.2 5.3.3 8 .3 35.7 0 69.3-17.1 90.4-46l177.6-244.4c18.5-25.5 15.8-60.6-6.5-82.9s-57.4-25-82.9-6.5L230 190c-28.9 21-46 54.6-46 90.3 0 2.7.1 5.4.3 8-2.7-.2-5.5-.3-8.3-.3-61.9 0-112 50.1-112 112 0 3.9.2 7.8.6 11.6 1.8 17.5-10.2 36.4-27.8 36.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h144c61.9 0 112-50.1 112-112 0-2.8-.1-5.5-.3-8.3"
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
                  d="M295.7 376c-10.6 0-20.9-1.7-30.5-4.9v-.1c-1.6-.5-3.1-1.1-4.6-1.7l-53.8-53.8c-.6-1.5-1.2-3.1-1.7-4.6h-.1c-3.2-9.6-5-19.8-5-30.5 0-30.6 14.6-59.4 39.4-77.4L483.7 25.2c19.1-13.9 45.5-11.8 62.2 4.9s18.8 43.1 4.9 62.2L373.1 336.6c-18 24.8-46.8 39.4-77.4 39.4m-43 8c2.2 7.6 3.3 15.7 3.3 24 0 46.3-35.7 84.2-81.1 87.7-.7.1-1.3.1-1.9.3H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h4c14.6 0 26.2-7.7 33.6-17.4 7.3-9.6 11.2-22 10.6-34.3-.1-1.4-.1-2.8-.1-4.3 0-48.6 39.4-88 88-88 8.3 0 16.4 1.2 24 3.3zm17.6 5.1c8.2 1.9 16.7 2.9 25.4 2.9 35.7 0 69.3-17.1 90.4-46l177.6-244.4c18.5-25.5 15.8-60.6-6.5-82.9s-57.4-25-82.9-6.5L230 190c-28.9 21-46 54.6-46 90.3 0 8.7 1 17.3 2.9 25.4-6.1-1.1-12.4-1.7-18.9-1.7-57.4 0-104 46.6-104 104 0 1.7 0 3.4.1 5 .8 17.1-11 35-28.2 35H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h143.8c.1 0 .2-.1.2-.2s.1-.2.1-.2c53.6-4.2 95.9-49 95.9-103.7 0-6.5-.6-12.8-1.7-18.9z"
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
                  d="M208.1 272.1c-.6 0-1.2-.1-1.8-.1H184c-66.3 0-120 53.7-120 120 0 6.2.5 12.4 1.4 18.4C68.1 428.2 56.1 448 38 448h-6c-17.7 0-32 14.3-32 32s14.3 32 32 32h143.9c.1 0 .1-.1.1-.1l.1-.1c2.6.2 5.2.3 7.9.3 66.3 0 120-53.7 120-120 0-2.8-.1-5.5-.2-8.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M411 331.6c-19.9 32.6-55.3 52.4-93.4 52.4-4.8 0-9.6-.3-14.3-.9L208 272c.2-35.9 17.8-69.4 47.1-90.1L500.2 8.8c18.6-13.1 43.9-11.4 60.5 4.2s20 40.6 8.2 60.1z"
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
