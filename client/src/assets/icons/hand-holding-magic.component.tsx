import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandHoldingMagicIcon: React.FC<
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
                  d="M192 80c0 8.8 7.2 16 16 16h80c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80c-44.2 0-80-35.8-80-80s35.8-80 80-80h112c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h64c35.3 0 64-28.7 64-64s-28.7-64-64-64H208c-8.8 0-16 7.2-16 16m376.2 256.3c13.1 17.8 9.3 42.8-8.5 55.9l-126.6 93.3c-23.4 17.2-51.6 26.5-80.7 26.5H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h36.8l44.9-36c22.7-18.2 50.9-28 80-28H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h120.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5M193.6 384h-.9z"
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
                  d="M176 76c0 15.5 12.5 28 28 28h84c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84c-42 0-76-34-76-76s34-76 76-76h124c66.3 0 120 53.7 120 120s-53.7 120-120 120h-48v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h72c39.8 0 72-32.2 72-72s-32.2-72-72-72H204c-15.5 0-28 12.5-28 28m11.4 276c-7.9 0-15.6 2.3-22.2 6.7L85.3 412c-3.9 2.6-8.6 4-13.3 4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40.7l73.8-49.2C153 309.1 170 304 187.4 304H344c35.3 0 64 28.7 64 64v2l64.9-40c10.7-6.6 22.9-10 35.5-10h7.4c33.3 0 60.3 27 60.3 60.3 0 20.4-10.4 39.5-27.5 50.6L453 492.8c-19.4 12.6-42.1 19.3-65.2 19.3H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h363.7c13.9 0 27.5-4 39.1-11.6l95.6-61.9c3.5-2.3 5.6-6.1 5.6-10.3 0-6.8-5.5-12.3-12.3-12.3h-7.4c-3.6 0-7.2 1-10.3 2.9l-93.5 57.5c-3.8 2.3-8.1 3.6-12.6 3.6H256c-13.3 0-24-10.7-24-24s10.7-24 24-24h88c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M160 80c0 26.5 21.5 48 48 48h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-44.2 0-80-35.8-80-80s35.8-80 80-80h120c66.3 0 120 53.7 120 120s-53.7 120-120 120h-56v24c0 8.8-7.2 16-16 16s-16-7.2-16-16v-26.5c0-16.3 13.2-29.5 29.5-29.5H328c48.6 0 88-39.4 88-88s-39.4-88-88-88H208c-26.5 0-48 21.5-48 48m-9 237.4c13.1-8.8 28.6-13.4 44.4-13.4H344c30.9 0 56 25.1 56 56 0 8.6-1.9 16.7-5.4 24h5.6l94.7-56.4c8.3-4.9 17.8-7.6 27.5-7.6h1.3c28.9 0 52.3 23.4 52.3 52.3 0 17.7-9 34.2-23.8 43.8l-119.6 77.8c-18.2 11.8-39.4 18.1-61 18.1H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h355.5c15.5 0 30.6-4.5 43.6-12.9l119.6-77.8c5.8-3.7 9.2-10.2 9.2-17 0-11.2-9.1-20.3-20.3-20.3h-1.3c-3.9 0-7.7 1.1-11.1 3l-98.5 58.7c-2.5 1.5-5.3 2.3-8.2 2.3H256c-8.8 0-16-7.2-16-16s7.2-16 16-16h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H195.4c-9.5 0-18.7 2.8-26.6 8.1l-79.9 53.2c-2.6 1.8-5.7 2.7-8.9 2.7H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h59.2z"
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
                  d="M144 80c0-35.3 28.7-64 64-64h120c57.4 0 104 46.6 104 104s-46.6 104-104 104h-57.8c-12.2 0-22.2 9.9-22.2 22.2V272c0 4.4 3.6 8 8 8s8-3.6 8-8v-25.8c0-3.4 2.8-6.2 6.2-6.2H328c66.3 0 120-53.7 120-120S394.3 0 328 0H208c-44.2 0-80 35.8-80 80s35.8 80 80 80h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88c-35.3 0-64-28.7-64-64m377.8 260.7c10.7-7.9 25.7-5.6 33.6 5.1s5.6 25.7-5.1 33.6l-126.7 93.2C403 487.8 378.1 496 352.5 496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h344.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5l-117.7 86.6c-1.4 1-3 1.6-4.7 1.6H268c-6.6 0-12-5.4-12-12s5.4-12 12-12h80c19.9 0 36-16.1 36-36s-16.1-36-36-36H193.7c-29.1 0-57.3 9.9-80 28L71 382.2c-1.4 1.1-3.2 1.8-5 1.8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h58c5.4 0 10.7-1.9 15-5.3l42.7-34.2c19.9-15.9 44.5-24.5 70-24.5H348c11 0 20 9 20 20s-9 20-20 20h-80c-15.5 0-28 12.5-28 28s12.5 28 28 28h121.9c5.1 0 10.1-1.6 14.2-4.7l117.6-86.6z"
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
                  d="M559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H193.7c-29.1 0-57.3 9.9-80 28l-44.9 36H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-366.1-8.3a.5.5 0 1 1-.9.2.5.5 0 1 1 .9-.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80c-44.2 0-80-35.8-80-80s35.8-80 80-80h112c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h64c35.3 0 64-28.7 64-64s-28.7-64-64-64z"
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
