import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MapLocationIcon: React.FC<
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
                  d="M302.8 312C334.9 271.9 408 174.6 408 120 408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192 7.7 9.6 22 9.6 29.6 0M416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7-2.9 6.8-6.1 13.7-9.6 20.6zM15.1 187.3C6 191 0 199.8 0 209.6v270.8c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6-5.6-13.2-10.4-27.4-12.8-41.5L15 187.3zM384 255c-20.5 31.3-42.3 59.6-56.2 77-20.5 25.6-59.1 25.6-79.6 0-13.9-17.4-35.7-45.7-56.2-77v194.4l192 54.9z"
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
                  d="M403 148.6c3.2-10.3 5-20 5-28.6C408 53.7 354.3 0 288 0c-61.6 0-112.4 46.4-119.2 106.2-.5 4.5-.8 9.1-.8 13.8 0 10.3 2.6 22 7 34.6.7 2.1 1.5 4.2 2.3 6.3 10.4 27 28.3 57.1 46.7 84.4 18.1 26.9 36.7 51.1 49.2 66.6 7.7 9.6 22 9.6 29.6 0 12.4-15.5 31.1-39.7 49.2-66.6.1-.2.3-.4.4-.6 4.6-6.8 9.1-13.7 13.5-20.8 3.3-5.3 6.5-10.7 9.6-16 0-.1.1-.1.1-.2 11.8-20.4 21.8-40.8 27.4-59.2zm-8.3 89.6c-13.9 22.5-29.1 44.2-42.7 62.4v153.1l-128-46.5V300.6c-13.5-18.2-28.8-39.9-42.7-62.4-1.8-2.9-3.6-5.8-5.3-8.8v177.8L48 453.7V200.8l96.9-35.2c-5.2-14.9-8.9-30.5-8.9-45.6v-2.3L15.8 161.4C6.3 164.9 0 173.9 0 184v304c0 7.8 3.8 15.2 10.2 19.7s14.6 5.6 22 2.9l167.8-61 167.8 61c5.3 1.9 11.1 1.9 16.4 0l176-64c9.5-3.4 15.8-12.5 15.8-22.6V120c0-7.8-3.8-15.2-10.2-19.7s-14.6-5.6-22-2.9l-105 38.2c-2.2 15-7.3 30.2-13.2 44.2-2 4.6-4.1 9.3-6.3 14L528 154.3v252.9l-128 46.5V229.5c-1.8 3-3.5 5.9-5.3 8.8z"
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
                  d="M376 120c0 7.4-2.7 19-9.4 35-6.5 15.4-15.7 32.4-26.4 49.7-17.1 27.8-36.9 54.7-52.2 74.4-15.3-19.7-35.1-46.6-52.2-74.4-10.7-17.3-19.9-34.3-26.4-49.7-6.7-15.9-9.4-27.6-9.4-35 0-48.6 39.4-88 88-88s88 39.4 88 88m32 0C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192 7.7 9.6 22 9.6 29.6 0C334.9 271.9 408 174.6 408 120m-4.6 103.6c.9-.2 1.7-.4 2.5-.8L544 167.6v253.6l-128 51.2V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v170.8l-192-54.9V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v117.2L32 472.4V218.8l115.5-46.2c-3.9-10-7.2-20.4-9.2-30.8L15.1 191.1C6 194.8 0 203.6 0 213.4v270.8c0 17 17.1 28.6 32.9 22.3l144-57.6 218.7 62.5c3.4 1 7 .8 10.3-.5l155-62c9.1-3.6 15.1-12.5 15.1-22.3V155.8c0-17-17.1-28.6-32.9-22.3l-117.9 47.2c-6.1 14.2-13.6 28.8-21.8 42.9"
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
                  d="M392 120c0-57.4-46.6-104-104-104S184 62.6 184 120c0 10.5 3.6 24.5 10.7 41.2 6.9 16.4 16.6 34.2 27.5 51.9 21.8 35.4 47.6 69.1 63.5 88.9 1.3 1.6 3.4 1.6 4.6 0 15.9-19.8 41.7-53.6 63.5-88.9 10.9-17.7 20.6-35.5 27.5-51.9 7-16.7 10.7-30.7 10.7-41.2m16 0c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120m130.5 27.2-117.4 42.7c1.6-3.4 3.1-6.7 4.5-10.1 1.4-3.3 2.7-6.6 4-10l103.5-37.6c20.9-7.6 42.9 7.9 42.9 30.1v260.9c0 13.5-8.4 25.5-21.1 30.1l-160.2 58.2c-1.6.6-3.4.6-5.1.1l-205.4-63.2-141.3 51.4C22.1 507.4 0 491.9 0 469.7V208.8c0-13.5 8.4-25.5 21.1-30.1l116.3-42.3c.8 5.3 2 10.5 3.4 15.8L26.5 193.8c-6.3 2.3-10.5 8.3-10.5 15v260.9c0 11.1 11 18.8 21.5 15L176 434.4V296c0-4.4 3.6-8 8-8s8 3.6 8 8v138.1l192 59.1V296c0-4.4 3.6-8 8-8s8 3.6 8 8v196.6l149.5-54.4c6.3-2.3 10.5-8.3 10.5-15V162.3c0-11.1-11-18.8-21.5-15z"
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
                  d="M416 503V200.4c3.5-6.9 6.7-13.8 9.6-20.6.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3zM15.1 187.3l122.6-49c2.4 14.1 7.2 28.3 12.8 41.5 2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3M384 255v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77 20.5 25.6 59.1 25.6 79.6 0 13.9-17.4 35.7-45.7 56.2-77"
                />
                <path
                  className="aps-icon-foreground"
                  d="M408 120c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120"
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
