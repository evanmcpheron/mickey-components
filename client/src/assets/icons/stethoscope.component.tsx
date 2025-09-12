import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StethoscopeIcon: React.FC<
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
                  d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7c26.1 8.7 43.7 33.1 43.7 60.7V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112v-70.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2M480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M142.5 15.6c4.7 12.4-1.6 26.2-14 30.9L85.2 62.7c-3.1 1.2-5.2 4.2-5.2 7.5V200c0 57.4 46.6 104 104 104h16c57.4 0 104-46.6 104-104V70.2c0-3.3-2.1-6.3-5.2-7.5l-43.2-16.2c-12.4-4.7-18.7-18.5-14-30.9s18.5-18.7 30.9-14l43.2 16.2c21.8 8.1 36.3 29 36.3 52.4V200c0 78.5-59.5 143.1-135.8 151.1 3.7 63 55.9 112.9 119.8 112.9 66.3 0 120-53.7 120-120v-75.7c-32.5-10.2-56-40.5-56-76.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V344c0 92.8-75.2 168-168 168-90.4 0-164.1-71.4-167.8-160.8C91.7 343.3 32 278.6 32 200V70.2C32 46.9 46.5 26 68.3 17.8l43.3-16.3c12.4-4.7 26.2 1.6 30.9 14zM480 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M127 10.4c3.1 8.3-1.1 17.5-9.4 20.6L74.4 47.2c-6.3 2.3-10.4 8.3-10.4 15V192c0 70.7 57.3 128 128 128s128-57.3 128-128V62.2c0-6.7-4.1-12.6-10.4-15L266.4 31c-8.3-3.1-12.5-12.3-9.4-20.6S269.3-2.1 277.6 1l43.2 16.2c18.7 7 31.1 24.9 31.1 44.9V192c0 83-63.1 151.2-144 159.2v.8c0 70.7 57.3 128 128 128s128-57.3 128-128v-98c-27.6-7.1-48-32.2-48-62 0-35.3 28.7-64 64-64s64 28.7 64 64c0 29.8-20.4 54.9-48 62v98c0 88.4-71.6 160-160 160s-160-71.6-160-160v-.8C95.1 343.2 32 275 32 192V62.2c0-20 12.4-37.9 31.1-44.9L106.4 1c8.3-3.1 17.5 1.1 20.6 9.4M480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M127.5 5.2c1.6 4.1-.5 8.7-4.7 10.3L79.6 31.7C70.2 35.2 64 44.2 64 54.2V192c0 70.7 57.3 128 128 128s128-57.3 128-128V54.2c0-10-6.2-19-15.6-22.5l-43.2-16.2c-4.1-1.6-6.2-6.2-4.7-10.3S262.7-1 266.8.5L310 16.7c15.6 5.9 26 20.8 26 37.5V192c0 76.8-60.2 139.6-136 143.8V360c0 75.1 60.9 136 136 136s136-60.9 136-136V255.5c-31.6-3.9-56-30.9-56-63.5 0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.6-56 63.5V360c0 83.9-68.1 152-152 152s-152-68.1-152-152v-24.2c-75.8-4.2-136-67-136-143.8V54.2c0-16.7 10.3-31.6 26-37.5L117.2.5c4.1-1.6 8.7.5 10.3 4.7M480 144a48 48 0 1 0 0 96 48 48 0 1 0 0-96"
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
                  d="M448 265.3V336c0 61.9-50.1 112-112 112-57.6 0-105-43.4-111.3-99.3Q208.8 352 192 352c-10.8 0-21.3-1.1-31.5-3.1C167.1 440.1 243.1 512 336 512c97.2 0 176-78.8 176-176v-70.7c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M122.1 62.4c16.8-5.6 25.8-23.7 20.2-40.5S118.6-3.9 101.9 1.6l-26.1 8.7C49.6 19.1 32 43.5 32 71.1V192c0 88.4 71.6 160 160 160s160-71.6 160-160V71.1c0-27.5-17.6-52-43.8-60.7l-26.1-8.8c-16.8-5.6-34.9 3.5-40.5 20.2s3.5 34.9 20.2 40.5l26.2 8.8V192c0 53-43 96-96 96s-96-43-96-96V71.1zM512 192a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160"
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
