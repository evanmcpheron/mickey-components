import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquarePhoneIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384 196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm154.7 32.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384 196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm171.2 48.1-56 12c-1.8.4-3.2 2-3.2 3.9 0 114.9 93.1 208 208 208 1.9 0 3.5-1.3 3.9-3.2l12-56c.4-1.9-.6-3.8-2.3-4.5l-56-24c-1.6-.7-3.5-.2-4.7 1.1l-16.6 20.3c-5 6.1-13.6 7.6-20.4 3.7-25.4-14.7-46.6-35.9-61.4-61.4-3.9-6.8-2.4-15.4 3.7-20.4l20.3-16.6c1.4-1.1 1.8-3 1.1-4.7l-24-56c-.8-1.8-2.6-2.7-4.5-2.3zm33.9-10.3 24 56c6.3 14.7 2.1 31.9-10.3 42l-9.2 7.5c8.6 11.9 19.1 22.4 31 31l7.5-9.2c10.2-12.4 27.3-16.6 42-10.3l56 24c15.8 6.8 24.6 23.8 21 40.6l-12 56C351.6 388.1 337 400 320 400 187.5 400 80 292.6 80 160c0-17 11.9-31.6 28.5-35.2l56-12c16.8-3.6 33.9 5.2 40.6 21"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm156.8 40.4-44 12c-5.2 1.4-8.8 6.2-8.8 11.6 0 119.3 96.7 216 216 216 5.4 0 10.2-3.6 11.6-8.8l12-44c1.6-5.8-1.4-11.9-7-14.2l-48-20c-4.9-2-10.5-.6-13.9 3.5l-20.2 24.7c-2.3 2.8-6.3 3.7-9.6 2.2-36.9-17.4-66.7-47.3-84.2-84.2-1.6-3.3-.7-7.3 2.2-9.6l24.7-20.2c4.1-3.4 5.5-9 3.5-13.9l-20-48c-2.3-5.6-8.4-8.5-14.2-7zm29 .8 20 48c4.8 11.4 1.5 24.6-8.1 32.4L178 233.8c15.2 29.1 39.1 53 68.2 68.2l16.1-19.7c7.8-9.6 21-12.9 32.4-8.1l48 20c13 5.4 19.9 19.6 16.2 33.2l-12 44c-3.3 12.2-14.4 20.6-27 20.6C191.9 392 88 288.1 88 160c0-12.6 8.5-23.7 20.6-27l44-12c13.6-3.7 27.8 3.3 33.2 16.2"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384 196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M178.5 140.3c-3.9-9.3-14-14.2-23.7-11.6l-44 12C102 143.1 96 151 96 160c0 123.7 100.3 224 224 224 9 0 16.9-6 19.3-14.7l12-44c2.6-9.7-2.3-19.9-11.6-23.7l-48-20c-8.2-3.4-17.6-1-23.2 5.8L248.3 312c-35.2-16.6-63.7-45.1-80.3-80.3l24.7-20.2c6.8-5.6 9.2-15 5.8-23.2z"
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
