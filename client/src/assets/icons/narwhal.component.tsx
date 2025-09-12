import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NarwhalIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M639.3 20.7c2.4-7.8-1.4-16.1-8.9-19.4s-16.2-.4-20.2 6.6l-93.5 160.4c-16.9-5.4-34.9-8.3-53.6-8.3-50.9 0-100.7 17.5-140.2 49.6L154.1 346.8c-10.5 8.5-26.1 1.1-26.1-12.4v-81.3l29.9-20.9c21.4-15 34.1-39.4 34.1-65.5V112c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L96 148.5 25.2 98.9c-4.9-3.4-11.3-3.8-16.6-1.1S0 106 0 112v54.7c0 26.1 12.7 50.6 34.1 65.5L64 253.1V352c0 88.4 71.6 160 160 160h240c97.2 0 176-78.8 176-176 0-51.4-22.3-97.7-57.8-129.9l57-185.4zM496 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M639.4 20.5c2.3-7.7-1.6-16-9-19.2s-16-.4-20.1 6.5L516 167.3c-15.7-4.7-32.3-7.3-49.6-7.3-53.1 0-104.4 19.5-144.1 54.8L177.9 343.2c-6.4 5.7-14.6 8.8-23.1 8.8-19.2 0-34.8-15.6-34.8-34.8v-58.5l37.9-26.5c21.4-15 34.1-39.4 34.1-65.5V112c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L96 148.5 25.2 98.9c-4.9-3.4-11.3-3.8-16.6-1.1S0 106 0 112v54.7c0 26.1 12.7 50.6 34.1 65.5L72 258.7V352c0 88.4 71.6 160 160 160h232c97.2 0 176-80 176-177.2 0-50.1-21.2-95.5-55.1-127.5zM232 464c-46.3 0-86-28.1-103.1-68.1 8.1 2.7 16.8 4.1 25.9 4.1 20.3 0 39.8-7.4 55-20.9l144.4-128.4c30.9-27.5 70.9-42.7 112.2-42.7 69 0 125.6 57 125.6 126.8 0 71.1-57.7 129.2-128 129.2zm264-136a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M630.6 1.4c8 3.7 11.6 13.1 7.9 21.2l-76.3 168C609 222.3 640 275.6 640 336c0 97.2-78.8 176-176 176H240c-88.4 0-160-71.6-160-160v-87.7l-45.9-32.1C12.7 217.2 0 192.8 0 166.7V112c0-6 3.3-11.4 8.6-14.2s11.7-2.3 16.6 1.1L96 148.5l70.8-49.6c4.9-3.4 11.3-3.8 16.6-1.1S192 106 192 112v54.7c0 26.1-12.7 50.6-34.1 65.5L112 264.3v64c0 13.1 10.6 23.7 23.7 23.7 5.4 0 10.6-1.8 14.8-5.2l172.6-138.1c39.4-31.6 89.1-48.7 139.6-48.7 25.4 0 49.6 5.4 71.5 15L609.4 9.4c3.7-8 13.1-11.6 21.2-7.9zM464 480c79.5 0 144-64.5 144-144 0-79.2-65.5-144-145.4-144-43.3 0-85.9 14.8-119.6 41.7L170.5 371.8c-9.9 7.9-22.1 12.2-34.8 12.2-7.3 0-14.2-1.4-20.6-3.9C127.9 437.3 178.9 480 240 480zm40-208a24 24 0 1 1 0 48 24 24 0 1 1 0-48M32 166.7c0 15.7 7.6 30.3 20.5 39.3L96 236.5l43.5-30.5c12.8-9 20.5-23.7 20.5-39.3v-23.9l-54.8 38.4c-5.5 3.9-12.8 3.9-18.4 0L32 142.7v23.9z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M639.7 10.2c1-3.6-.6-7.5-3.9-9.2s-7.4-1-9.9 1.9L490.5 162.1c-8.9-1.4-18.1-2.1-27.4-2.1-50.9 0-100.7 17.5-140.2 49.6L154.1 346.8c-10.5 8.5-26.1 1.1-26.1-12.4v-78.9l25.2-15.1c24.1-14.5 38.8-40.5 38.8-68.6V112c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L96 148.5 25.2 98.9c-4.9-3.4-11.3-3.8-16.6-1.1S0 106 0 112v59.8c0 28.1 14.7 54.1 38.8 68.6L64 255.5V352c0 88.4 71.6 160 160 160h240c97.2 0 176-78.8 176-176 0-50.4-21.5-95.9-55.7-128zm-68.8 186.4c-18.4-14.1-39.6-24.7-62.6-30.7L614.5 41zM96 168l9.2-6.4L176 112v59.8c0 22.5-11.8 43.3-31.1 54.9l-25.2 15.1-7.8 4.7v88c0 26.9 31.3 41.8 52.2 24.8L333 222c36.6-29.8 82.8-46 130.1-46 88.5 0 160.9 71.7 160.9 160 0 88.4-71.6 160-160 160H224c-79.5 0-144-64.5-144-144V246.4l-7.8-4.7-25.1-15.1C27.8 215.1 16 194.2 16 171.8V112l70.8 49.6zm416 136a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M25.2 98.9c-4.9-3.4-11.3-3.8-16.6-1.1S0 106 0 112v54.7c0 26.1 12.7 50.6 34.1 65.5L64 253.1V352c0 88.4 71.6 160 160 160h240c97.2 0 176-78.8 176-176s-79.7-176-176.9-176c-50.9 0-100.7 17.5-140.2 49.6L154.1 346.8c-10.5 8.5-26.1 1.1-26.1-12.4v-81.3l29.9-20.9c21.4-15 34.1-39.4 34.1-65.5V112c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L96 148.5zM496 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M639.3 20.7c2.4-7.8-1.4-16.1-8.9-19.4s-16.2-.4-20.2 6.6l-93.5 160.4c24.6 7.8 46.9 20.9 65.6 37.8zM496 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
