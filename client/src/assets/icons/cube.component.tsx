import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CubeIcon: React.FC<
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
                  d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6c25.4 9.1 42.4 33.2 42.4 60.3v242.8c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3zM256 66 82.3 128 256 190l173.7-62zm32 368.6 160-57.1v-188l-160 57.1z"
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
                  d="M258.8 50.7c-1.8-.7-3.8-.7-5.7 0L63.6 122.6 256 198.2l192.4-75.6zM48 377.9c0 3.3 2.1 6.3 5.2 7.5L232 453.2V240.4L48 168.1zm232 75.3 178.8-67.8c3.1-1.2 5.2-4.2 5.2-7.5V168.1l-184 72.3zM236.1 5.9C248.9 1 263 1 275.8 5.9l200 75.9c21.8 8.2 36.2 29 36.2 52.3v243.8c0 23.3-14.4 44.1-36.1 52.4l-200 75.9c-12.8 4.9-26.9 4.9-39.7 0l-200-75.9C14.4 422 0 401.2 0 377.9V134.1C0 110.8 14.4 90 36.1 81.7l200-75.9z"
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
                  d="M261.5 35.1c-3.6-1.3-7.5-1.3-11 0L44.1 110.7 256 194l211.9-83.2zM32 385.7c0 6.7 4.2 12.7 10.5 15L240 473.1V222L32 140.3zm240 87.4 197.5-72.4c6.3-2.3 10.5-8.3 10.5-15V140.3L272 222v251zM239.5 5c10.7-3.9 22.4-3.9 33 0l208 76.3c18.9 6.9 31.5 24.9 31.5 45.1v259.3c0 20.1-12.6 38.1-31.5 45.1l-208 76.2c-10.7 3.9-22.4 3.9-33 0l-208-76.3C12.6 423.8 0 405.8 0 385.7V126.4c0-20.1 12.6-38.1 31.5-45.1z"
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
                  d="M264 19.3c-5.2-1.8-10.9-1.8-16.1 0L32 96c-4.9 1.7-9 5-11.8 9.1L256 199.4l235.8-94.3c-2.8-4.1-6.9-7.4-11.8-9.1zM16 393.4c0 10.2 6.4 19.2 16 22.6l216 76.6V213.4L16 120.6zm248 99.3L480 416c9.6-3.4 16-12.5 16-22.6V120.6l-232 92.8zM242.6 4.3c8.7-3.1 18.1-3.1 26.8 0l216 76.6c16 5.7 26.6 20.8 26.6 37.7v274.8c0 16.9-10.7 32-26.6 37.7l-216 76.6c-8.7 3.1-18.1 3.1-26.8 0l-216-76.6C10.7 425.4 0 410.3 0 393.4V118.6c0-16.9 10.7-32 26.6-37.7z"
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
                  d="M64 189.4v188l160 57.1v-188zm384 188v-188l-160 57.2v188l160-57.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6c25.4 9.1 42.4 33.2 42.4 60.3v242.8c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3zM256 66 82.3 128 256 190l173.7-62zM64 377.4l160 57.1v-188L64 189.4zm224 57.1 160-57.1v-188l-160 57.2v188z"
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
