import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoneyBillSimpleWaveIcon: React.FC<
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
                  d="M0 112.5v309.8c0 18 10.1 35 27 41.3 87 32.5 174 10.3 261-11.9 79.8-20.3 159.6-40.7 239.3-18.9 23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3-87-32.5-174-10.3-261 11.9-79.8 20.3-159.6 40.6-239.3 18.8C25.6 72.8 0 88.6 0 112.5M288 352c-44.2 0-80-43-80-96s35.8-96 80-96 80 43 80 96-35.8 96-80 96"
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
                  d="M265.7 407.9c4.5-1.1 9-2.3 13.5-3.4 73.7-18.9 160.5-41.1 248.8-20.9V91.8c-66.2-23.1-134.4-8.8-217.7 12.3-4.5 1.1-9 2.3-13.5 3.5-73.7 18.8-160.5 41.1-248.8 20.8v291.8c66.2 23.1 134.4 8.9 217.7-12.3M0 421.5V113c0-24.2 25.4-40.3 48.4-34 79.8 22 159.7 1.6 239.6-18.7 86.9-22.1 173.8-44.3 260.7-12C565.8 54.6 576 72 576 90.5V399c0 24.3-25.4 40.3-48.3 34-79.9-22-159.8-1.6-239.7 18.7-86.9 22.1-173.8 44.3-260.7 12C10.2 457.4 0 440 0 421.5M288 352c-44.2 0-80-43-80-96s35.8-96 80-96 80 43 80 96-35.8 96-80 96"
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
                  d="M32 422.3c0 6.8 3.7 10.4 6.2 11.3 72.8 27.2 146.7 11.3 231.1-10.2 4.3-1.1 8.6-2.2 13-3.3 77.8-19.9 165.3-42.3 253.5-18.2 2.2.6 4.9.2 6.9-1.2.9-.6 1.2-1.1 1.3-1.2V89.7c0-6.8-3.7-10.4-6.2-11.3C465 51.2 391.1 67.1 306.7 88.5c-4.3 1.1-8.6 2.2-13 3.3-77.8 19.9-165.3 42.3-253.5 18.2-2.2-.6-4.9-.2-6.9 1.2-.9.6-1.2 1.1-1.3 1.2v309.9m-32 0V112.5c0-23.9 25.6-39.7 48.7-33.4 79.8 21.8 159.6 1.5 239.3-18.9C375 38 462 15.8 549 48.3c16.9 6.3 27 23.2 27 41.3v309.9c0 23.9-25.6 39.7-48.7 33.4-79.8-21.8-159.6-1.5-239.3 18.9-87 22.2-174 44.4-261 11.9-16.9-6.3-27-23.2-27-41.3zM224 256c0 47 31.3 80 64 80s64-33 64-80-31.3-80-64-80-64 33-64 80m64-112c55.6 0 96 53 96 112s-40.4 112-96 112-96-53-96-112 40.4-112 96-112"
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
                  d="M16 422.3c0 12.4 6.9 22.7 16.6 26.3 78.1 29.1 156.8 11.7 240.7-9.6 4-1 8-2 12-3.1 78.7-20.1 162.3-41.4 246.3-18.5 15.2 4.2 28.4-6.9 28.4-17.9V89.7c0-12.4-6.9-22.7-16.6-26.3-78.1-29.2-156.7-11.7-240.6 9.6-4 1-8 2-12 3.1C212 96.2 128.4 117.5 44.4 94.6 29.2 90.4 16 101.5 16 112.5zm-16 0V112.5c0-23.9 25.6-39.7 48.7-33.4 79.8 21.8 159.6 1.5 239.3-18.9C375 38 462 15.8 549 48.3c16.9 6.3 27 23.2 27 41.3v309.9c0 23.9-25.6 39.7-48.7 33.4-79.8-21.8-159.6-1.5-239.3 18.9-87 22.2-174 44.4-261 11.9-16.9-6.3-27-23.2-27-41.3zM216 256c0 50 33.5 88 72 88s72-38 72-88-33.5-88-72-88-72 38-72 88m72-104c49.9 0 88 48 88 104s-38.1 104-88 104-88-48-88-104 38.1-104 88-104"
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
                  d="M288 352c44.2 0 80-43 80-96s-35.8-96-80-96-80 43-80 96 35.8 96 80 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 112.5v309.8c0 18 10.1 35 27 41.3 87 32.5 174 10.3 261-11.9 79.8-20.3 159.6-40.7 239.3-18.9 23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3-87-32.5-174-10.3-261 11.9-79.8 20.3-159.6 40.6-239.3 18.8C25.6 72.8 0 88.6 0 112.5M288 352c-44.2 0-80-43-80-96s35.8-96 80-96 80 43 80 96-35.8 96-80 96"
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
