import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RhombusIcon: React.FC<
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
                  d="M254.4 14.1C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9l-184-216z"
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
                  d="M224 52.3 50.5 256 224 459.7 397.5 256zM9.6 230.1l184-216C201.2 5.1 212.3 0 224 0s22.8 5.1 30.4 14.1l184 216c12.7 14.9 12.7 36.9 0 51.9l-184 216c-7.6 8.9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.6 282c-12.8-15-12.8-37 0-51.9"
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
                  d="m438.5 230.1-184-216C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9zM230.1 34.8l184 216c2.5 3 2.5 7.4 0 10.4l-184 216c-1.5 1.8-3.7 2.8-6.1 2.8s-4.6-1-6.1-2.8l-184-216c-2.5-3-2.5-7.4 0-10.4l184-216c1.5-1.8 3.7-2.8 6.1-2.8s4.6 1 6.1 2.8"
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
                  d="M242.3 24.4C237.7 19.1 231 16 224 16s-13.7 3.1-18.3 8.4l-184 216c-7.6 9-7.6 22.2 0 31.1l184 216c4.6 5.4 11.2 8.4 18.3 8.4s13.7-3.1 18.3-8.4l184-216c7.6-9 7.6-22.2 0-31.1zM224 0c11.7 0 22.8 5.1 30.4 14.1l184 216c12.7 14.9 12.7 36.9 0 51.9l-184 216c-7.6 8.9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.6 282c-12.8-15-12.8-37 0-51.9l184-216C201.2 5.1 212.3 0 224 0"
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
                  d="M254.4 14.1C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9l-184-216z"
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
