import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WineGlassCrackIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48v-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0h-22.1c-11.9 0-19.6 12.5-14.3 23.2l14.2 28.5c3.5 7.1 1.4 15.7-5.1 20.3l-58.4 40.9c-6 4.2-8.4 12-5.8 18.9l31.1 81c2.1 5.5-1.9 11.4-7.8 11.4-2.4 0-4.7-1.1-6.3-2.9L92.1 118c-6.4-7.4-4.7-18.7 3.5-24l58.6-37.3c7.6-4.8 9.7-14.9 4.7-22.4L140.7 7.1c-3-4.5-8-7.1-13.3-7.1z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32.1 22.1C33.1 9.6 43.5 0 56 0h208c12.5 0 22.9 9.6 23.9 22.1l13.9 176.4c5.9 74.6-46.6 139.4-117.8 151.5v114h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V350C64.8 337.9 12.3 273.1 18.1 198.5zM163.3 48H78.2L66 202.3C61.7 257.1 105 304 160 304s98.3-46.9 94-101.7L241.8 48h-24.2l4.2 21.2c1.3 6.5-1.6 13.2-7.2 16.7L171.2 113c-6.5 4.1-9.2 12.2-6.5 19.3l30.9 80.4c2.1 5.5-1.9 11.3-7.8 11.3-2.5 0-4.8-1.1-6.4-3l-76-89.8c-5.4-6.4-5-15.8.9-21.6l52.3-52.3c2.6-2.6 4.1-5.9 4.6-9.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M149.2 32h-88L46.4 195.6C40.3 262.4 92.9 320 160 320s119.7-57.6 113.6-124.4L258.8 32h-75.1l23.2 58.1c3.1 7.7-.3 16.5-7.7 20.3l-44.2 22 48.3 48.3c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-3.6-3.6-5.3-8.8-4.5-13.9s4-9.4 8.6-11.7l50.8-25.4zm11.1-32h98.4c16.6 0 30.4 12.6 31.9 29.1l14.9 163.6c7.3 80.2-51.4 150-129.5 158.5V480h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V351.1C65.9 342.7 7.2 272.8 14.5 192.7L29.4 29.1C30.9 12.6 44.7 0 61.2 0h99.1"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M60.1 29.8C61.2 21.9 67.9 16 75.9 16h75.5l1.2 3 29.3 73.2-57.4 28.7c-2.3 1.2-3.9 3.3-4.3 5.9s.4 5.1 2.2 6.9l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-56.2-56.2 54.1-27c3.7-1.9 5.4-6.3 3.8-10.1L168.6 16h75.5c8 0 14.8 5.9 15.9 13.8l22.6 165.8C292.7 269.9 234.9 336 160 336S27.3 269.9 37.5 195.6zm-15.9-2.1L21.6 193.5C10.5 274.7 71.3 347.3 152 351.8V496H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V351.8c80.7-4.5 141.5-77.1 130.4-158.3L275.8 27.7C273.6 11.8 260.1 0 244.1 0H75.9c-16 0-29.5 11.8-31.7 27.7"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48v-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0h-48l25.8 51.7c3.5 7.1 1.4 15.7-5.1 20.3l-58.4 40.9c-6 4.2-8.4 12-5.8 18.9l31.1 81c2.1 5.5-1.9 11.4-7.8 11.4-2.4 0-4.7-1.1-6.3-2.9L92.1 118c-6.4-7.4-4.7-18.7 3.5-24l58.6-37.3c7.6-4.8 9.7-14.9 4.7-22.4L136 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M154.2 56.8 95.7 94c-8.2 5.2-9.9 16.6-3.5 24l89.3 103.1c1.6 1.8 3.9 2.9 6.3 2.9 5.9 0 9.9-5.9 7.8-11.4l-31.1-81c-2.6-6.9-.3-14.6 5.8-18.9l58.4-40.9c6.5-4.5 8.7-13.2 5.1-20.3L208 0h-72l22.9 34.4c5 7.5 2.8 17.6-4.7 22.4"
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
