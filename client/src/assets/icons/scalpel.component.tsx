import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScalpelIcon: React.FC<
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
                  d="M387.4 25.1C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6v4c0 17.6-6.2 34.6-17.6 48.1L369.3 271c-9.1 10.8-22.5 17-36.7 17H200c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1zM169.4 320H288v16c0 74.9-65.5 118.6-126.1 142.9C100.1 503.6 34.1 512 16 512c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l160-160z"
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
                  d="M421.4 59.2c5.1-6.1 13-9.2 20.9-8.5 12.3 1.3 21.7 11.7 21.7 24 0 5.9-2.2 11.6-6.1 16L325.1 240h-56.3zM227.7 288h97.5c13.7 0 26.8-5.9 35.9-16.1l132.7-149.3c11.7-13.2 18.2-30.3 18.2-47.9 0-37-28.1-68-64.9-71.7-23.7-2.4-47 7.1-62.4 25.3L206.1 240l-.4.5-5.6 6.7-12.2 14.5c-4 4.8-4.9 11.4-2.3 17.1s8.3 9.3 14.5 9.3h27.8zm-63 36.7-160 160c-4.6 4.6-5.9 11.5-3.5 17.4S9.5 512 16 512c18.1 0 84.1-8.4 145.9-33.1C222.5 454.6 288 410.9 288 336v-16H169.4z"
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
                  d="M200 288c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L387.4 25.1C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6v4c0 17.6-6.2 34.6-17.6 48.1L369.3 271c-9.1 10.8-22.5 17-36.7 17zM411.9 45.7 234.4 256h98.2c4.7 0 9.2-2.1 12.2-5.7L470 102c6.5-7.7 10-17.4 10-27.5v-4c0-21.2-17.3-38.5-38.6-38.5-11.4 0-22.2 5-29.5 13.7M4.7 484.7 169.4 320h45.3l-155 154.9c29.2-5 68.3-14.1 106.2-29.7C227.3 419.9 279.2 380.5 287 320h32.2c-8 80.6-76 128-141.1 154.8C108.1 503.6 34 512 16 512c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4"
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
                  d="M399.6 35.4C410 23.1 425.3 16 441.4 16c30.1 0 54.6 24.5 54.6 54.6v4c0 13.8-4.9 27.2-13.8 37.8L357.1 260.6c-6.1 7.2-15 11.4-24.5 11.4H200zM441.4 0c-20.8 0-40.6 9.2-54 25.1L187.8 261.7c-4 4.8-4.9 11.4-2.3 17.1s8.3 9.3 14.5 9.3h132.6c14.1 0 27.6-6.2 36.7-17l125.1-148.4c11.4-13.5 17.6-30.5 17.6-48.1v-4c0-39-31.6-70.6-70.6-70.6M2.3 498.4c-2.2 2.3-2.9 5.7-1.6 8.7s4.2 4.9 7.4 4.9c17.9 0 95-8.9 167.8-39.6 66-27.9 131.2-75 142.5-152.4h-16.3c-11.1 67.6-68.8 110.7-132.5 137.6-53.9 22.8-110.2 33.1-141 36.8L198.5 320h-22.4z"
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
                  d="m169.4 320-4.7 4.7-160 160c-4.6 4.6-5.9 11.5-3.5 17.4S9.5 512 16 512c18.1 0 84.1-8.4 145.9-33.1C222.5 454.6 288 410.9 288 336v-16H169.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M441.2 0c-20.6 0-40.2 9-53.7 24.6l-231.6 269c-4.1 4.7-5 11.4-2.4 17.1s8.3 9.3 14.5 9.3h132.9c13.9 0 27.1-6 36.3-16.5l156.6-180.6c11.7-13.5 18.2-30.8 18.2-48.7v-3.4C512 31.7 480.3 0 441.2 0"
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
