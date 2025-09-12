import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RotateRightIcon: React.FC<
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
                  d="M463.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224z"
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
                  d="M371.2 122.9C340.3 96.2 300 80 256 80c-97.2 0-176 78.8-176 176s78.8 176 176 176c39.7 0 76.2-13.1 105.6-35.2 10.6-8 25.6-5.8 33.6 4.8s5.8 25.6-4.8 33.6C353 463.3 306.4 480 256 480 132.3 480 32 379.7 32 256S132.3 32 256 32c57.3 0 109.6 21.5 149.2 56.9l30.5-30.5c6.6-6.6 15.6-10.3 25-10.3C480.2 48 496 63.8 496 83.3V200c0 13.3-10.7 24-24 24H355.3c-19.5 0-35.3-15.8-35.3-35.3 0-9.4 3.7-18.3 10.3-25l40.8-40.8zm76.8-9L385.9 176H448z"
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
                  d="M417.3 360.2c3.2-5 8.7-8.2 14.7-8.2 12.3 0 20.3 12.8 13.7 23.2C406 438.2 335.9 480 256 480 132.3 480 32 379.7 32 256S132.3 32 256 32c56.1 0 107.4 20.6 146.7 54.7L433.4 56c5.1-5.1 12.1-8 19.3-8 15.1 0 27.3 12.2 27.3 27.3V176c0 8.8-7.2 16-16 16H363.3c-15.1 0-27.3-12.2-27.3-27.3 0-7.2 2.9-14.2 8-19.3l36-36C346.5 81.1 303.3 64 256 64 150 64 64 150 64 256s86 192 192 192c67.6 0 127.1-35 161.3-87.8M448 86.6 374.6 160H448z"
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
                  d="M92.1 384.1c70.7 90.5 201.4 106.6 292 35.8 22.9-17.9 41.1-39.7 54.2-63.7 2.1-3.9 7-5.3 10.9-3.2s5.3 7 3.2 10.9c-14.2 25.8-33.7 49.3-58.4 68.6-97.5 76.2-238.3 58.9-314.4-38.6s-59-238.2 38.5-314.4c89.8-70.2 216.4-61 295.3 17.1l-11.3 11.3c-73.3-72.5-190.8-81-274.2-15.8-90.5 70.7-106.6 201.4-35.8 292M480 192c4.4 0 8-3.6 8-8V64c0-3.2-1.9-6.2-4.9-7.4s-6.4-.6-8.7 1.7l-120 120c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9H480zm-120 16c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2L463 47c6.9-6.9 17.2-8.9 26.2-5.2S504 54.3 504 64v120c0 13.3-10.7 24-24 24z"
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
                  d="m413.4 96.6-45.3 45.3c-62.6-61.5-163.1-61.2-225.3 1-62.5 62.5-62.5 163.8 0 226.3s163.8 62.5 226.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-229.3 87.5-316.8 0s-87.5-229.3 0-316.8c87.2-87.2 228.3-87.5 315.8-1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M344 224h128c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224"
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
