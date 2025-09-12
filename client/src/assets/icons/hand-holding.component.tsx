import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandHoldingIcon: React.FC<
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
                  d="M559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H193.7c-29.1 0-57.3 9.9-80 28l-44.9 36H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-366.1-8.3a.5.5 0 1 1-.9.2.5.5 0 1 1 .9-.2"
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
                  d="M165.2 358.7c6.6-4.4 14.3-6.7 22.2-6.7H344c8.8 0 16 7.2 16 16s-7.2 16-16 16h-88c-13.3 0-24 10.7-24 24s10.7 24 24 24h136c4.4 0 8.8-1.2 12.6-3.6l93.5-57.5c3.1-1.9 6.7-2.9 10.3-2.9h7.4c6.8 0 12.3 5.5 12.3 12.3 0 4.2-2.1 8-5.6 10.3l-95.6 61.9c-11.8 7.5-25.4 11.5-39.2 11.5H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h363.7c23.1 0 45.8-6.7 65.2-19.3l95.6-61.9c17.2-11.1 27.5-30.2 27.5-50.6 0-33.3-27-60.3-60.3-60.3h-7.4c-12.5 0-24.8 3.5-35.5 10L408 370v-2c0-35.3-28.7-64-64-64H187.4c-17.4 0-34.4 5.1-48.8 14.8L64.7 368H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.7 0 9.4-1.4 13.3-4z"
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
                  d="M195.4 304c-15.8 0-31.2 4.7-44.4 13.4L75.2 368H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c3.2 0 6.2-.9 8.9-2.7l79.9-53.3c7.9-5.3 17.1-8.1 26.6-8.1H344c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.8 0-16 7.2-16 16s7.2 16 16 16h148.6c2.9 0 5.7-.8 8.2-2.3l98.5-58.6c3.4-2 7.2-3 11.1-3h1.3c11.2 0 20.3 9.1 20.3 20.3 0 6.9-3.5 13.3-9.2 17l-119.7 77.8c-13 8.4-28.1 12.9-43.6 12.9H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h355.5c21.7 0 42.9-6.3 61-18.1l119.6-77.8C567 406.5 576 390 576 372.3c0-28.9-23.4-52.3-52.3-52.3h-1.3c-9.7 0-19.1 2.6-27.5 7.6L400.2 384h-5.6c3.5-7.3 5.4-15.4 5.4-24 0-30.9-25.1-56-56-56z"
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
                  d="M555.3 345.8c-7.9-10.7-22.9-12.9-33.6-5.1l-117.5 86.6c-4.1 3-9.1 4.7-14.2 4.7H268c-15.5 0-28-12.5-28-28s12.5-28 28-28h80c11 0 20-9 20-20s-9-20-20-20H193.7c-25.4 0-50.1 8.7-70 24.5L81 394.7c-4.3 3.4-9.5 5.3-15 5.3H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h58c1.8 0 3.6-.6 5-1.8l42.7-34.2c22.7-18.2 50.9-28 80-28H348c19.9 0 36 16.1 36 36s-16.1 36-36 36h-80c-6.6 0-12 5.4-12 12s5.4 12 12 12h121.9c1.7 0 3.4-.5 4.7-1.6l117.6-86.6c17.8-13.1 42.8-9.3 55.9 8.5s9.3 42.8-8.5 55.9l-126.5 93.3c-23.4 17.2-51.6 26.5-80.7 26.5H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h344.5c25.6 0 50.6-8.2 71.2-23.4l126.6-93.3c10.7-7.9 12.9-22.9 5.1-33.6z"
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
