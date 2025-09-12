import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KipSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M340.8 88.3c13.4-11.5 15-31.7 3.5-45.1s-31.7-15-45.1-3.5L128 186.4V64c0-17.7-14.3-32-32-32S64 46.3 64 64v160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V325.6l171.2 146.7c13.4 11.5 33.6 9.9 45.1-3.5s9.9-33.6-3.5-45.1L182.5 288H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H182.5z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 32c13.3 0 24 10.7 24 24v154.5L312.3 37.8c10-8.7 25.2-7.5 33.8 2.5s7.5 25.2-2.5 33.8L160.6 232H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H160.6l183.1 157.8c10 8.7 11.2 23.8 2.5 33.8s-23.8 11.2-33.8 2.5L112 301.5V457c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V56c0-13.3 10.7-24 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 32c8.8 0 16 7.2 16 16v174.4L325.9 35.6c6.9-5.6 16.9-4.5 22.5 2.3s4.5 16.9-2.3 22.5L125.1 240H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H125.1l221 179.6c6.9 5.6 7.9 15.6 2.3 22.5s-15.7 7.9-22.5 2.3L96 289.6V465c0 8.8-7.2 16-16 16s-16-7.2-16-16V272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V48c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 32c4.4 0 8 3.6 8 8v198.8L338.8 33.9c3.4-2.8 8.4-2.4 11.3 1s2.4 8.4-1 11.3L109.9 248H376c4.4 0 8 3.6 8 8s-3.6 8-8 8H109.9l239.3 201.9c3.4 2.9 3.8 7.9 1 11.3s-7.9 3.8-11.3 1L96 273.2V473c0 4.4-3.6 8-8 8s-8-3.6-8-8V264H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h72V40c0-4.4 3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 224v64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm118.5 64-37.3-32 37.3-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M340.8 88.3c13.4-11.5 15-31.7 3.5-45.1s-31.7-15-45.1-3.5L128 186.4V64c0-17.7-14.3-32-32-32S64 46.3 64 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V325.6l171.2 146.7c13.4 11.5 33.6 9.9 45.1-3.5s9.9-33.6-3.5-45.1L145.2 256z"
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
