import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CustardIcon: React.FC<
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
                  d="M396.7 64c30 0 56 20.8 62.5 50.1l13.5 60.8c-21.8-7.5-49.2-14.9-72.7-14.9-26.4 0-45.8 9.4-62.2 17.2l-.7.3c-16.7 8-30.4 14.4-49.1 14.4s-32.3-6.4-49.1-14.4l-.7-.3c-16.4-7.8-35.8-17.2-62.2-17.2-23.5 0-50.9 7.4-72.6 14.9l13.5-60.8c6.5-29.3 32.4-50.1 62.4-50.1zM64.3 350.9l30.8-138.8c4.1-1.6 8.5-3.3 13.2-5 22-7.9 47.8-15.1 67.7-15.1 18.7 0 32.3 6.4 49.1 14.4l.7.3c16.4 7.9 35.8 17.2 62.2 17.2s45.8-9.4 62.2-17.2l.7-.3c16.7-8 30.4-14.4 49.1-14.4 19.8 0 45.6 7.2 67.7 15.1 4.7 1.7 9.2 3.4 13.2 5L512 352zM32 384h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M116.1 112.8 53.7 368h49.4l33.6-137.6c14.1-3.8 27.9-6.4 39.3-6.4 16.7 0 28.8 5.6 45.6 13.6l1 .5C238.9 246 259.8 256 288 256s49.1-10 65.4-17.9l1-.5c16.8-8.1 28.9-13.6 45.6-13.6 11.4 0 25.2 2.6 39.3 6.4L472.9 368h49.4l-62.4-255.2c-7-28.6-32.7-48.8-62.2-48.8H178.2c-29.5 0-55.2 20.2-62.2 48.8zm310.5 65.6c-9-1.5-18-2.4-26.6-2.4-28.2 0-49.1 10-65.4 17.9l-1 .5c-16.8 8-28.9 13.6-45.6 13.6s-28.8-5.6-45.6-13.6l-1-.5C225.1 186 204.2 176 176 176c-8.6 0-17.6.9-26.6 2.4l13.3-54.2c1.8-7.2 8.2-12.2 15.5-12.2h219.6c7.4 0 13.8 5 15.5 12.2zM0 424c0 13.3 10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"
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
                  d="m49.8 384 66.3-271.2c7-28.6 32.7-48.8 62.2-48.8h219.5c29.5 0 55.2 20.2 62.2 48.8L526.2 384h-32.9l-40.6-166c-18.1-5.7-37.2-10-52.7-10-18.7 0-32.3 6.4-49.1 14.4l-.7.3c-16.4 7.9-35.8 17.3-62.2 17.3s-45.8-9.4-62.2-17.2l-.7-.3c-16.7-8-30.4-14.4-49.1-14.4-15.5 0-34.6 4.4-52.7 10L82.7 384zM132 182.3c14.7-3.7 30-6.3 44-6.3 26.4 0 45.8 9.4 62.2 17.2l.7.3c16.7 8 30.4 14.4 49.1 14.4s32.3-6.4 49.1-14.4l.7-.3c16.4-7.9 35.8-17.2 62.2-17.2 14 0 29.3 2.6 44 6.3l-15.1-61.9c-3.6-14.3-16.4-24.4-31.1-24.4H178.2c-14.7 0-27.6 10.1-31.1 24.4zM0 432c0-8.8 7.2-16 16-16h544c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16"
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
                  d="m57.8 384 66.3-271.2c7-28.6 32.7-48.8 62.2-48.8h203.5c29.5 0 55.2 20.2 62.2 48.8L518.2 384h-16.4l-42.1-172.1C439.9 205.4 418 200 400 200c-20.7 0-35.9 7.2-52.5 15.2l-.4.2c-16.5 7.9-34.5 16.6-59.1 16.6s-42.6-8.7-59.1-16.6l-.4-.2c-16.7-8-31.8-15.2-52.5-15.2-18 0-39.9 5.4-59.7 11.9L74.2 384zm63-190.3c18.1-5.4 37.9-9.7 55.2-9.7 24.6 0 42.6 8.7 59.1 16.6l.4.2c16.7 8 31.8 15.2 52.5 15.2s35.9-7.2 52.5-15.2l.4-.2c16.5-7.9 34.5-16.6 59.1-16.6 17.3 0 37.1 4.3 55.2 9.7l-18.8-77.1C431.1 95.1 411.9 80 389.8 80H186.2c-22.1 0-41.4 15.1-46.6 36.6l-18.9 77.1zM0 440c0-4.4 3.6-8 8-8h560c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8"
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
                  d="M476.7 193.3C453.9 184.9 424 176 400 176c-22.7 0-39.4 8-56 16s-33.3 16-56 16-39.4-8-56-16-33.3-16-56-16c-24 0-53.9 8.9-76.7 17.3l-35 157.5L512 352z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M396.7 64H179.3c-30 0-56 20.8-62.5 50.1l-17.5 79.2C122.1 184.9 152 176 176 176c22.7 0 39.4 8 56 16s33.3 16 56 16 39.4-8 56-16 33.3-16 56-16c24 0 53.9 8.9 76.7 17.3l-17.6-79.2C452.6 84.8 426.7 64 396.7 64M32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
