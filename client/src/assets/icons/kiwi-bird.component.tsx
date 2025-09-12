import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KiwiBirdIcon: React.FC<
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
                  d="M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4H448c4.6 0 9.1-.2 13.6-.7l85.3 121.9c4 5.7 11.3 8.2 17.9 6.1S576 471 576 464V224c0-70.7-57.3-128-128-128h-55.7c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32 86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3V456c0 13.3 10.7 24 24 24s24-10.7 24-24v-46c15.3 3.9 31.4 6 48 6 5.4 0 10.7-.2 16-.7V456c0 13.3 10.7 24 24 24s24-10.7 24-24v-50.9c12.4-4.4 24.2-10 35.2-16.7M448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M266.4 347.3c31.2-18.9 74.9-43.3 125.9-43.3H448c44.2 0 80-35.8 80-80s-35.8-80-80-80h-55.7c-51 0-94.7-24.4-125.9-43.3C244.7 87.6 219.3 80 192 80c-79.5 0-144 64.5-144 144s64.5 144 144 144c27.3 0 52.7-7.6 74.4-20.7m125.9 4.7c-36.4 0-69.9 17.6-101.1 36.4-11.1 6.7-22.9 12.3-35.2 16.7V456c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40.7c-5.3.4-10.6.7-16 .7-16.6 0-32.7-2.1-48-6v46c0 13.3-10.7 24-24 24s-24-10.7-24-24v-65.7C38.6 357.1 0 295.1 0 224 0 118 86 32 192 32c36.3 0 70.3 10.1 99.2 27.6C322.4 78.4 355.9 96 392.3 96H448c70.7 0 128 57.3 128 128v240c0 7.3-4.9 13.7-12 15.5s-14.5-1.3-18-7.7l-68.4-123.2c-9.5 2.2-19.4 3.4-29.6 3.4zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M192 384c33.9 0 65.3-10.5 91.2-28.5 33.7-23.4 78.2-51.5 130.4-51.5H464c44.2 0 80-35.8 80-80s-35.8-80-80-80h-50.4c-52.2 0-96.7-28.1-130.4-51.5C257.3 74.5 225.9 64 192 64c-88.4 0-160 71.6-160 160s71.6 160 160 160m311.3-55.1 40.7 73.4v-99.9c-11.4 11.6-25.2 20.7-40.7 26.5M546 471.8l-75.5-136c-2.1.1-4.3.2-6.5.2h-50.4c-41.2 0-78.3 22.3-112.1 45.8-13.9 9.7-29.2 17.5-45.4 23.3V464c0 8.8-7.2 16-16 16s-16-7.2-16-16v-50.7c-10.4 1.7-21.1 2.7-32 2.7-22.4 0-44-3.8-64-10.9V464c0 8.8-7.2 16-16 16s-16-7.2-16-16v-73.7C38.6 357.1 0 295.1 0 224 0 118 86 32 192 32c40.7 0 78.4 12.6 109.4 34.2 33.8 23.5 71 45.8 112.1 45.8H464c61.9 0 112 50.1 112 112v240c0 7.3-4.9 13.7-12 15.5s-14.5-1.3-18-7.7M448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M192 400c-22.6 0-44.2-4.3-64-12v-60c0-4.4-3.6-8-8-8s-8 3.6-8 8v52.8C55 351.7 16 292.4 16 224c0-97.2 78.8-176 176-176 37.3 0 71.8 11.6 100.3 31.4 33.8 23.5 74.6 48.6 121.3 48.6H464c53 0 96 43 96 96s-43 96-96 96h-50.4c-46.7 0-87.5 25.2-121.3 48.6-28.5 19.8-63 31.4-100.3 31.4M0 224c0 77.5 45.9 144.3 112 174.6V472c0 4.4 3.6 8 8 8s8-3.6 8-8v-66.9c20 7.1 41.6 10.9 64 10.9 10.9 0 21.6-.9 32-2.7V472c0 4.4 3.6 8 8 8s8-3.6 8-8v-62c22.3-5.7 43-15.4 61.4-28.2 33.8-23.5 71-45.8 112.1-45.8H464c6.3 0 12.4-.5 18.5-1.5L561 475.9c1.8 3.2 5.5 4.8 9 3.9s6-4.1 6-7.7V232h-.3c.2-2.6.3-5.3.3-8 0-61.9-50.1-112-112-112h-50.4c-41.2 0-78.3-22.3-112.1-45.8C270.4 44.6 232.7 32 192 32 86 32 0 118 0 224m560 217.1-61.4-110.5c25.9-8.4 47.6-25.9 61.4-48.8zM448 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M477.6 348.6 546 471.8c3.5 6.4 10.9 9.5 18 7.7s12-8.2 12-15.5V224.3c-.1 60.4-42.1 111-98.4 124.3M208 415.3V456c0 13.3 10.7 24 24 24s24-10.7 24-24v-50.9c-15.2 5.4-31.3 8.9-48 10.3zm-112-25V456c0 13.3 10.7 24 24 24s24-10.7 24-24v-46c-17-4.4-33.1-11-48-19.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4H448c70.7 0 128-57.3 128-128S518.7 96 448 96h-55.7c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32 86 32 0 118 0 224s86 192 192 192c36.3 0 70.3-10.1 99.2-27.6M448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
