import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlaneTailIcon: React.FC<
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
                  d="M61.5 308.8.8 39C-3.7 19 11.5 0 32 0h76.9a64 64 0 0 1 46 19.5L384 256h128v256H267.7c-10.7 0-21.2-1.9-31.2-5.7L40.4 431.9C16.1 422.7 0 399.4 0 373.4c0-28.2 18.8-52.8 45.9-60.3l15.5-4.3zM216 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="m.8 39 60.7 269.8-15.5 4.3c-27.2 7.4-46 32.1-46 60.3 0 26 16.1 49.3 40.4 58.5l196.1 74.4c10 3.8 20.5 5.7 31.2 5.7H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H267.7c-4.8 0-9.7-.9-14.2-2.6L57.4 387c-5.7-2.1-9.4-7.6-9.4-13.6 0-6.6 4.4-12.3 10.7-14.1L254 305.4c3.5-1 7-1.4 10.6-1.4H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H384L154.9 19.5a64 64 0 0 0-46-19.5H32C11.5 0-3.7 19 .8 39M216 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M47.7 32h46.4c12.5 0 24.4 4.8 33.4 13.5L345 256h-80.6c-7 0-13.9.9-20.6 2.7L85.9 300.8 32 51.4C29.9 41.4 37.5 32 47.7 32M.7 58.1 55 309l-6.7 1.8C19.8 318.4 0 344.2 0 373.7c0 27.3 17 51.7 42.7 61.1l197.1 72.3c8.8 3.2 18.1 4.9 27.5 4.9H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H267.4c-5.6 0-11.2-1-16.5-2.9L53.7 404.8C40.7 400 32 387.6 32 373.7c0-15 10.1-28.1 24.6-32L252 289.6c4-1.1 8.2-1.6 12.4-1.6H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H390.3l.4-.4-11.5-11.1-229.5-222C134.8 8.1 114.9 0 94.1 0H47.7C17.1 0-5.7 28.2.7 58.1M208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M39.4 16h62.1c14.9 0 29.1 5.9 39.6 16.4L364.7 256H264.1c-6.1 0-12.1.8-18 2.3L70.4 303.6 16 44.9C12.8 30 24.2 16 39.4 16M.3 48.2l54.6 259.4-4.3 1.1C20.8 316.4 0 343.3 0 374c0 28.5 18 54 44.9 63.5L243 507.8c7.7 2.7 15.9 4.1 24.1 4.1H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H267c-6.4 0-12.7-1.1-18.7-3.2L50.2 422.5C29.7 415.2 16 395.8 16 374c0-23.4 15.9-43.9 38.6-49.8l195.6-50.5c4.6-1.2 9.3-1.8 14-1.8H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H387.3l-5.7-5.7L152.4 21.1A71.98 71.98 0 0 0 101.5 0H39.4C14 0-4.9 23.4.3 48.2M200 368c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M61.5 308.8.8 39C-3.7 19 11.5 0 32 0h76.9a64 64 0 0 1 46 19.5L384 256H264.7c-7.9 0-15.8 1.1-23.4 3.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 464V256H264.7c-7.9 0-15.8 1.1-23.4 3.2L45.9 313.1C18.8 320.5 0 345.2 0 373.4c0 26 16.1 49.3 40.4 58.5l196.1 74.4c10 3.8 20.5 5.7 31.2 5.7H512v-48M216 352h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
