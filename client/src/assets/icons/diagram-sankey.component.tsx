import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiagramSankeyIcon: React.FC<
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
                  d="M294.4 44.8c6-8.1 15.5-12.8 25.6-12.8h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H336l-86.4 115.2c-6 8.1-15.5 12.8-25.6 12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h176zM141.9 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H216.5l57.6 96H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-11.2 0-21.7-5.9-27.4-15.5z"
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
                  d="M329.9 80c-2.8 0-5.4 1.5-6.8 3.8l-69.3 113.4C243.6 213.8 225.5 224 206 224H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h182.1c2.8 0 5.4-1.5 6.8-3.8l69.3-113.4C292.3 42.2 310.4 32 329.9 32H552c13.3 0 24 10.7 24 24s-10.7 24-24 24zm-124 240 61.7 108c1.4 2.5 4.1 4 6.9 4H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H274.6c-20.1 0-38.7-10.8-48.6-28.2L150.6 320H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h528c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
                  d="M354.1 64c-5.6 0-10.8 2.9-13.7 7.8L263 200.7c-8.7 14.5-24.3 23.3-41.2 23.3H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h205.9c5.6 0 10.8-2.9 13.7-7.8L313 55.3c8.6-14.5 24.3-23.3 41.1-23.3H560c8.8 0 16 7.2 16 16s-7.2 16-16 16zM201.7 320l74.5 120.4c2.9 4.7 8.1 7.6 13.6 7.6H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H289.8c-16.6 0-32.1-8.6-40.8-22.7L164 320H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h164.9l.7-.4.3.4H560c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
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
                  d="M355 48c-8.8 0-16.9 4.8-21.1 12.5l-77.8 142.7c-7 12.8-20.5 20.8-35.1 20.8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h213c8.8 0 16.9-4.8 21.1-12.5l77.8-142.7C326.9 40 340.4 32 355 32h213c4.4 0 8 3.6 8 8s-3.6 8-8 8zM174.6 304l94.7 148.9c4.4 6.9 12 11.1 20.2 11.1H568c4.4 0 8 3.6 8 8s-3.6 8-8 8H289.6c-13.7 0-26.4-7-33.7-18.5L155.6 304H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h560c4.4 0 8 3.6 8 8s-3.6 8-8 8z"
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
                  d="M32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32h109.9l86.7 144.5c5.8 9.6 16.2 15.5 27.4 15.5h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H274.1l-57.6-96H544c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M294.4 44.8c6-8.1 15.5-12.8 25.6-12.8h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H336l-86.4 115.2c-6 8.1-15.5 12.8-25.6 12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h176z"
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
