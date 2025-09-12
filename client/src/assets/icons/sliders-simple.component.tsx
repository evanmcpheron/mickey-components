import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SlidersSimpleIcon: React.FC<
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
                  d="M96 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m90.5 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H186.5c-13.2 37.3-48.7 64-90.5 64-53 0-96-43-96-96s43-96 96-96c41.8 0 77.4 26.7 90.5 64M384 160a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-58.5-32c13.2-37.3 48.7-64 90.5-64 53 0 96 43 96 96s-43 96-96 96c-41.8 0-77.4-26.7-90.5-64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
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
                  d="M80 336a32 32 0 1 0 0 64 32 32 0 1 0 0-64m76.3 8H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H156.3c-10.2 32.5-40.5 56-76.3 56-44.2 0-80-35.8-80-80s35.8-80 80-80c35.8 0 66.1 23.5 76.3 56M400 144a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-44.3-24c10.2-32.5 40.5-56 76.3-56 44.2 0 80 35.8 80 80s-35.8 80-80 80c-35.8 0-66.1-23.5-76.3-56H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
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
                  d="M80 320a48 48 0 1 0 0 96 48 48 0 1 0 0-96m78.4 32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H158.4c-7.4 36.5-39.7 64-78.4 64-44.2 0-80-35.8-80-80s35.8-80 80-80c38.7 0 71 27.5 78.4 64M384 144a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-30.4-16c7.4-36.5 39.7-64 78.4-64 44.2 0 80 35.8 80 80s-35.8 80-80 80c-38.7 0-71-27.5-78.4-64H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
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
                  d="M80 304a64 64 0 1 0 0 128 64 64 0 1 0 0-128m79.6 56H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H159.6c-4 40.4-38.1 72-79.6 72-44.2 0-80-35.8-80-80s35.8-80 80-80c41.5 0 75.6 31.6 79.6 72M368 144a64 64 0 1 0 128 0 64 64 0 1 0-128 0m-15.6-8c4-40.4 38.1-72 79.6-72 44.2 0 80 35.8 80 80s-35.8 80-80 80c-41.5 0-75.6-31.6-79.6-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"
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
                  d="M325.5 192H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h293.5c-3.5 10-5.5 20.8-5.5 32s1.9 22 5.5 32m-139 192c3.5-10 5.5-20.8 5.5-32s-1.9-22-5.5-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M416 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-128a96 96 0 1 0 0 192 96 96 0 1 0 0-192M96 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-128a96 96 0 1 0 0 192 96 96 0 1 0 0-192"
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
