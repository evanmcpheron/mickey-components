import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WifiFairIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M171.8 312c39.5-34.9 91.3-56 148.2-56s108.7 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8zM320 480a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M152.4 321.2c44.1-40.5 103-65.2 167.6-65.2s123.5 24.7 167.6 65.2c9.8 9 24.9 8.3 33.9-1.5s8.3-24.9-1.5-33.9C467.4 237.5 397.1 208 320 208s-147.4 29.5-200.1 77.9c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5zM320 480a56 56 0 1 0 0-112 56 56 0 1 0 0 112"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M139.3 298.7C185.6 252.5 249.5 224 320 224s134.4 28.5 180.7 74.7c6.3 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-52.1-51.9-123.9-84-203.3-84s-151.2 32.1-203.3 84c-6.3 6.2-6.3 16.4 0 22.6s16.4 6.3 22.6 0M288 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M133.5 282c48.7-45.9 114.3-74 186.5-74s137.8 28.1 186.5 74c3.2 3 8.3 2.9 11.3-.3s2.9-8.3-.3-11.3C465.9 221.8 396.4 192 320 192s-145.9 29.8-197.5 78.4c-3.2 3-3.4 8.1-.3 11.3s8.1 3.4 11.3.3M272 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                <path
                  className="aps-icon-background"
                  d="M320 96c-103.2 0-196.8 40.7-265.8 106.9-12.8 12.2-33 11.8-45.2-.9s-11.8-33 .9-45.2C90.3 79.5 199.6 32 320 32s229.7 47.5 310.2 124.7c12.8 12.2 13.2 32.5.9 45.2s-32.5 13.2-45.2.9C516.8 136.7 423.2 96 320 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M171.8 312c39.5-34.9 91.3-56 148.2-56s108.7 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8zM320 480a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
