import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderBottomRightIcon: React.FC<
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
                  d="M448 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v336c0 8.8-7.2 16-16 16H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h336c44.2 0 80-35.8 80-80zm-160 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0M96 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0m96 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0M0 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M448 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v352c0 13.3-10.7 24-24 24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h352c39.8 0 72-32.2 72-72zM320 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-192 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M448 64c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 17.7-14.3 32-32 32H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c35.3 0 64-28.7 64-64zM320 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-192 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48m96-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48M32 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 144a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-48a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 144a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M448 56c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 22.1-17.9 40-40 40H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c30.9 0 56-25.1 56-56zM320 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-192 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32M32 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32"
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
                  d="M32 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64M320 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-192 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M416 32c17.7 0 32 14.3 32 32v336c0 44.2-35.8 80-80 80H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h336c8.8 0 16-7.2 16-16V64c0-17.7 14.3-32 32-32"
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
