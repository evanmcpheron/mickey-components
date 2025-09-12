import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GlobeStandIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M15 367c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l18.5-18.5c34.3 27.7 74.9 43.8 116.5 48.3V464H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-33.3c49.1-5.3 96.8-26.7 134.4-64.3 81.7-81.7 87.1-211 16.1-298.9L401 49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-34.6 34.5c-9.4 9.4-9.4 24.6 0 33.9 68.7 68.7 68.7 180.2 0 248.9s-180.2 68.7-248.9 0c-9.4-9.4-24.6-9.4-33.9 0zm193-15a144 144 0 1 0 0-288 144 144 0 1 0 0 288"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M15 367c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l18.5-18.5c34.3 27.7 74.9 43.8 116.5 48.3V464H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-33.3c49.1-5.3 96.8-26.7 134.4-64.3 81.7-81.7 87.1-211 16.1-298.9L401 49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-34.6 34.5c-9.4 9.4-9.4 24.6 0 33.9 68.7 68.7 68.7 180.2 0 248.9s-180.2 68.7-248.9 0c-9.4-9.4-24.6-9.4-33.9 0zm97-159a96 96 0 1 1 192 0 96 96 0 1 1-192 0m240 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M28.7 348.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l10-10c37.7 32.8 83.8 50.8 130.7 54.1V480H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H224v-64.6c51.9-3.7 102.7-25.4 142.4-65 83.7-83.7 87.3-217.1 10.9-305.1l10-10c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-20.9 20.9c-6.2 6.2-6.2 16.4 0 22.6 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-6.2-6.2-16.4-6.2-22.6 0zM80 192a128 128 0 1 1 256 0 128 128 0 1 1-256 0m288 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M34.3 354.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L61 350.3c43.5 40.4 99.5 59.6 155 57.6V496H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H232v-89.3c47-5.2 92.7-25.9 128.7-61.9 82.5-82.5 84.3-215 5.6-299.7l15.4-15.4c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-21 20.9c-3.1 3.1-3.1 8.2 0 11.3 78.1 78.1 78.1 204.7 0 282.8s-204.7 78.1-282.8 0c-3.1-3.1-8.2-3.1-11.3 0zM64 192a144 144 0 1 1 288 0 144 144 0 1 1-288 0m304 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0"
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
                <path className="aps-icon-background" d="" />
                <path
                  className="aps-icon-foreground"
                  d="M304 64a144 144 0 1 0 0 288 144 144 0 1 0 0-288M111 367c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l18.5-18.5c34.3 27.7 74.9 43.8 116.5 48.3V464H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96v-33.3c49.1-5.3 96.8-26.7 134.4-64.3 81.7-81.7 87.1-211 16.1-298.9L497 49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-34.6 34.5c-9.4 9.4-9.4 24.6 0 33.9 68.7 68.7 68.7 180.2 0 248.9s-180.2 68.7-248.9 0c-9.4-9.4-24.6-9.4-33.9 0z"
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
