import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CrownIcon: React.FC<
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
                  d="M309 106c11.4-7 19-19.7 19-34 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-57.3 114.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24 0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40h.7l45.7 251.4c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L535.3 176h.7c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7z"
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
                  d="M309 106c11.4-7 19-19.7 19-34 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-5.8 11.6-51.5 103c-9.1 18.2-32.7 23.4-48.6 10.7l-72-57.6L72 160c5-6.7 8-15 8-24 0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40h.7l4.4 23.9 41.3 227.5c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L531 199.9l4.4-23.9h.7c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 9 3 17.3 8 24L487 173.7l-72 57.6c-15.9 12.7-39.5 7.5-48.6-10.7l-51.6-102.9zM133.7 418.9l-31.5-173.3 28.9 23.1c39.8 31.8 98.8 18.9 121.5-26.7l35.4-70.7 35.4 70.7c22.8 45.6 81.8 58.5 121.5 26.7l28.9-23.1-31.5 173.3c-1.4 7.6-8 13.1-15.7 13.1H149.4c-7.7 0-14.4-5.5-15.7-13.1"
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
                  d="M309 106c11.4-7 19-19.7 19-34 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-57.3 114.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24 0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40h.7l45.7 251.4c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L535.3 176h.7c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7zM117.9 421.7 78.8 206.4l62.3 49.9c31.8 25.5 79 15.1 97.2-21.4l49.7-99.3 49.7 99.4c18.2 36.4 65.4 46.8 97.2 21.4l62.3-49.9-39.1 215.2c-2.8 15.2-16 26.3-31.5 26.3H149.4c-15.5 0-28.7-11.1-31.5-26.3"
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
                  d="M264 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m29.9 39.6L352 227.8c13.7 27.3 49.1 35.1 72.9 16l91.3-73c1.1.6 2.3 1.2 3.5 1.8l-45.9 252c-4.2 22.8-24 39.4-47.2 39.4H149.4c-23.2 0-43.1-16.6-47.2-39.4L56.4 172.5c1.2-.5 2.3-1.1 3.5-1.8l91.3 73c23.9 19.1 59.3 11.3 72.9-16l58.1-116.2c1.9.3 3.9.4 5.9.4s4-.1 5.9-.4zM309 106c11.4-7 19-19.7 19-34 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-57.3 114.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24 0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40h.7l45.7 251.4c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L535.3 176h.7c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7zM16 136a24 24 0 1 1 48 0 24 24 0 1 1-48 0m520-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M248 72a40 40 0 1 1 80 0 40 40 0 1 1-80 0M0 136a40 40 0 1 1 80 0 40 40 0 1 1-80 0m536-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
                />
                <path
                  className="aps-icon-foreground"
                  d="m504 160-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106c-6.1 3.8-13.3 6-21 6s-14.9-2.2-21-6l-57.3 114.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c-7.2 9.5-18.5 15.8-31.3 16l45.7 251.4c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L535.3 176c-12.8-.2-24.1-6.5-31.3-16"
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
