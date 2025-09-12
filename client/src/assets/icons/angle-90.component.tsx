import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Angle90Icon: React.FC<
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
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zm32 33.6v48.3c31 3.6 60.4 12.5 87.4 25.7l25.3-41.1C174.2 113 136.2 101.6 96 97.6m115.2 89.7c32.6 21 60.5 48.9 81.5 81.5l40.9-25.2c-25-39-58.2-72.2-97.2-97.2zM334.1 384h48.3c-4-40.2-15.4-78.2-32.9-112.6l-41.1 25.3c13.2 26.9 22 56.3 25.7 87.4z"
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
                  d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v400c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm48 41.6v48.3c31 3.6 60.4 12.5 87.4 25.7l25.3-41.1C174.2 113 136.2 101.6 96 97.6m115.2 89.7c32.6 21 60.5 48.9 81.5 81.5l40.9-25.2c-25-39-58.2-72.2-97.2-97.2zM334.1 384h48.3c-4-40.2-15.4-78.2-32.9-112.6l-41.1 25.3c13.2 26.9 22 56.3 25.7 87.4z"
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
                  d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v416c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H32zm160.8 75c-29.9-13.2-62.2-21.9-96-25.3-9.1-.9-16.8 6.4-16.8 15.6 0 8.5 6.7 15.5 15.1 16.4 29.3 3.2 57.3 10.7 83.3 22 7.6 3.3 16.6.8 21-6.3 4.9-8 2-18.5-6.6-22.3zm104.7 124.4c5.1 7.1 14.8 9.3 22.2 4.7 7.6-4.7 10-14.8 4.7-22.1-20.6-28.8-45.8-54-74.6-74.6-7.3-5.2-17.4-2.9-22.1 4.7-4.6 7.4-2.3 17.1 4.7 22.2 24.9 18 46.9 40 64.9 64.9zm30.8 54.1c11.3 26 18.8 54 22 83.3.9 8.5 7.9 15.1 16.4 15.1 9.2 0 16.5-7.7 15.6-16.8-3.4-33.9-12.2-66.1-25.3-96-3.8-8.6-14.3-11.6-22.3-6.6-7.1 4.4-9.6 13.4-6.3 21z"
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
                  d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v432c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H16zm167.8 114c-34.2-15.7-72-24.8-111.8-25.9-4.4-.1-8 3.5-8 7.9s3.6 8 8 8.1c37.3 1.1 72.7 9.7 104.8 24.3 3.8 1.7 8.2.4 10.4-3.1 2.5-4 1-9.3-3.3-11.3zm104.6 108.2c2.5 3.6 7.3 4.7 11 2.4 3.8-2.4 5-7.4 2.4-11.1a287.6 287.6 0 0 0-75.4-75.4c-3.7-2.5-8.7-1.4-11.1 2.4-2.3 3.7-1.2 8.6 2.4 11 27.7 19 51.6 43 70.6 70.6zm23.2 41c14.6 32.1 23.2 67.5 24.3 104.8.1 4.4 3.7 8 8.1 8s8-3.6 7.9-8c-1.1-39.8-10.3-77.6-25.9-111.8-2-4.3-7.3-5.8-11.3-3.3-3.5 2.2-4.8 6.6-3.1 10.4z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m225.8 139.9-27.4 39.6c-30.9-17.6-65.5-29.3-102.4-33.6V97.6c47 4.7 91 19.5 129.8 42.3m72.3 137.6c-18.7-31.5-43.5-58.9-72.9-80.5l27.3-39.5c35.2 25.7 65 58.5 87.2 96.2L298 277.5zm14.7 28.5 41.9-24c14.6 31.6 24.1 65.9 27.7 102h-48.3c-3.2-27.5-10.5-53.7-21.3-78"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 32c17.7 0 32 14.3 32 32v352h352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32"
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
