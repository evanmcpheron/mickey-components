import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartScatterBubbleIcon: React.FC<
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
                  d="M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32m96 272a48 48 0 1 1 96 0 48 48 0 1 1-96 0m224-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-160-48a48 48 0 1 1 96 0 48 48 0 1 1-96 0M384 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M24 32c13.3 0 24 10.7 24 24v352c0 13.3 10.7 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.8 0-72-32.2-72-72V56c0-13.3 10.7-24 24-24m152 224a48 48 0 1 1 0 96 48 48 0 1 1 0-96m200 32a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48-160a48 48 0 1 1 0 96 48 48 0 1 1 0-96m168 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M16 32c8.8 0 16 7.2 16 16v352c0 26.5 21.5 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16m160 291.2a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4m0-67.2a48 48 0 1 1 0 96 48 48 0 1 1 0-96m208 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48-92.8a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4m0-67.2a48 48 0 1 1 0 96 48 48 0 1 1 0-96m176 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M8 32c4.4 0 8 3.6 8 8v368c0 30.9 25.1 56 56 56h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-39.8 0-72-32.2-72-72V40c0-4.4 3.6-8 8-8m168 304a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m224 32a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48-80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m192 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-96-16a48 48 0 1 0-96 0 48 48 0 1 0 96 0m64 176a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-176 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
