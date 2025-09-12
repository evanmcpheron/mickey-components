import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Icon2: React.FC<
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
                  d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8l-30.9 30.8c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l30.9-30.8C67.5 47.3 104.4 32 142.9 32 223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l190.9-190.8c15.2-15.2 23.8-35.9 23.8-57.4 0-44.8-36.3-81.1-81.1-81.1"
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
                  d="M147.5 80c-26.6 0-52.2 10.6-71 29.4L41 145c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l35.5-35.6C70.4 47.6 108.2 32 147.5 32h7.3c78 0 141.2 63.2 141.2 141.2 0 39.1-16.2 76.4-44.7 103.1L84.8 432H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-9.9 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l210.9-197.3c18.8-17.6 29.5-42.2 29.5-68 0-51.5-41.7-93.2-93.2-93.2z"
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
                  d="M148 64c-28.8 0-56.9 11.5-77.2 31.8l-27.5 27.5c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l27.5-27.6C74.6 46.8 110.9 32 148 32c76.5 0 140 61.9 140 138.8 0 38.4-15.9 75-43.9 101.3L56.5 448H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-6.6 0-12.5-4-14.9-10.1S.2 456.8 5 452.3l217.2-203.6c21.5-20.2 33.8-48.4 33.8-77.9C256 112 207.2 64 148 64"
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
                  d="M147 48c-30.7 0-60.6 11.3-83.5 31.7L29.3 110c-3.3 2.9-8.4 2.6-11.3-.7s-2.6-8.4.7-11.3l34.1-30.3C78.7 44.7 112.4 32 147 32c77.4 0 141 62.8 141 140.3 0 40.3-17.3 78.6-47.5 105.2L29.2 464H312c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-3.3 0-6.3-2.1-7.5-5.2s-.3-6.6 2.2-8.8l227.2-200.5c26.8-23.6 42.1-57.5 42.1-93.2C272 103.7 215.7 48 147 48"
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
                  d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8l-30.9 30.8c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l30.9-30.8C67.5 47.3 104.4 32 142.9 32 223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l190.9-190.8c15.2-15.2 23.8-35.9 23.8-57.4 0-44.8-36.3-81.1-81.1-81.1"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
