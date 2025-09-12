import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WrenchIcon: React.FC<
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
                  d="M352 320c88.4 0 160-71.6 160-160 0-15.3-2.2-30.1-6.2-44.2-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16v-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0c-88.4 0-160 71.6-160 160 0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1 0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l181.6-181.6c17 6.2 35.4 9.5 54.5 9.5M80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M322.3 268c9.4 2.6 19.3 4 29.7 4 60.5 0 109.8-48 111.9-108l-25.3 25.3c-12 12-28.3 18.7-45.3 18.7H368c-35.3 0-64-28.7-64-64v-25.4c0-17 6.7-33.3 18.7-45.3L348 48.1c-60 2-108 51.4-108 111.9 0 10.3 1.4 20.3 4 29.7 4.6 16.6-.2 34.4-12.4 46.6L57.1 410.7c-5.9 5.8-9.1 13.8-9.1 22.1C48 450 62 464 79.2 464c8.3 0 16.2-3.3 22.1-9.1l174.4-174.5c12.2-12.2 30-16.9 46.6-12.4M424.6 39.4l-67.9 67.9c-3 3-4.7 7.1-4.7 11.3V144c0 8.8 7.2 16 16 16h25.4c4.2 0 8.3-1.7 11.3-4.7l67.9-67.9c7.2-7.2 19.3-5.9 23.7 3.3 10.1 21 15.7 44.5 15.7 69.3 0 88.4-71.6 160-160 160-14.7 0-28.9-2-42.3-5.7L135.2 488.8a79.1 79.1 0 0 1-56 23.2C35.5 512 0 476.5 0 432.8c0-21 8.3-41.1 23.2-56l174.5-174.5c-3.7-13.4-5.7-27.6-5.7-42.3C192 71.6 263.6 0 352 0c24.8 0 48.3 5.7 69.3 15.7 9.2 4.4 10.5 16.5 3.3 23.7M88 408a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M480 160c0-10.7-1.3-21.1-3.8-31l-48.9 48.9c-9 9-21.2 14.1-33.9 14.1H368c-26.5 0-48-21.5-48-48v-25.4c0-12.7 5.1-24.9 14.1-33.9L383 35.8c-9.9-2.5-20.3-3.8-31-3.8-70.7 0-128 57.3-128 128 0 9.2 1 18.1 2.8 26.7 3.2 15.2-.6 32.4-13.1 44.9L45.8 399.4C37 408.3 32 420.3 32 432.8c0 26.1 21.1 47.2 47.2 47.2 12.5 0 24.5-5 33.4-13.8l167.9-167.9c12.4-12.4 29.7-16.3 44.9-13.1 8.6 1.8 17.5 2.8 26.7 2.8 70.7 0 128-57.3 128-128zm32 0c0 88.4-71.6 160-160 160-11.4 0-22.6-1.2-33.3-3.5-5.6-1.2-11.5.3-15.6 4.4L135.2 488.8a79.1 79.1 0 0 1-56 23.2C35.5 512 0 476.5 0 432.8c0-21 8.3-41.1 23.2-56l167.9-167.9c4.1-4.1 5.6-10 4.4-15.6-2.3-10.7-3.5-21.9-3.5-33.3C192 71.6 263.6 0 352 0c24.8 0 48.3 5.7 69.3 15.7 9.2 4.4 10.5 16.5 3.3 23.7l-67.9 67.9c-3 3-4.7 7.1-4.7 11.3V144c0 8.8 7.2 16 16 16h25.4c4.2 0 8.3-1.7 11.3-4.7l67.9-67.9c7.2-7.2 19.3-5.9 23.7 3.3 10.1 21 15.7 44.5 15.7 69.3M88 408a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M320 118.6c0-8.5 3.4-16.6 9.4-22.6l71.5-71.5C385.6 19 369.2 16 352 16c-79.5 0-144 64.5-144 144 0 12.2 1.5 24 4.3 35.2 2.7 10.7.2 22.9-8.4 31.5l-171 171.1C22.1 408.6 16 423.2 16 438.5c0 31.7 25.8 57.5 57.5 57.5 15.3 0 29.9-6.1 40.7-16.9l171.1-171c8.6-8.6 20.7-11.1 31.5-8.4 11.3 2.8 23.1 4.3 35.2 4.3 79.5 0 144-64.5 144-144 0-17.2-3-33.6-8.5-48.9L416 182.6c-6 6-14.1 9.4-22.6 9.4H352c-17.7 0-32-14.3-32-32zm20.7-11.3c-3 3-4.7 7.1-4.7 11.3V160c0 8.8 7.2 16 16 16h41.4c4.2 0 8.3-1.7 11.3-4.7l72.7-72.7c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-13.5 0-26.6-1.7-39.2-4.8-5.8-1.5-12 0-16.2 4.2L125.5 490.5C111.7 504.3 93 512 73.5 512 32.9 512 0 479.1 0 438.5c0-19.5 7.7-38.2 21.5-52l171.1-171.1c4.2-4.2 5.7-10.4 4.2-16.2-3.2-12.5-4.8-25.6-4.8-39.2C192 71.6 263.6 0 352 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1zM80 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M201.5 214.5 19.9 396.1C7.2 408.8 0 426.1 0 444.1 0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l181.6-181.6c-44.5-16.1-79.9-51.5-96-96M56 432a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 320c88.4 0 160-71.6 160-160 0-15.3-2.2-30.1-6.2-44.2-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16v-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0c-88.4 0-160 71.6-160 160s71.6 160 160 160"
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
