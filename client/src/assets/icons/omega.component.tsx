import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OmegaIcon: React.FC<
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
                  d="M224 96c-88.4 0-160 71.6-160 160 0 56.4 29.1 106 73.3 134.5 13.3 8.6 22.7 23.7 22.7 41.2 0 26.7-21.6 48.3-48.3 48.3H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h35.2C25.8 375.4 0 318.7 0 256 0 132.3 100.3 32 224 32s224 100.3 224 224c0 62.7-25.8 119.4-67.2 160H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-79.7c-26.7 0-48.3-21.6-48.3-48.3 0-17.5 9.4-32.6 22.7-41.2C354.9 362 384 312.4 384 256c0-88.4-71.6-160-160-160"
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
                  d="M224 80c-97.2 0-176 78.8-176 176 0 63.7 33.8 119.5 84.6 150.4 11.4 7 19.4 19.6 19.4 34.2 0 21.8-17.6 39.4-39.4 39.4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h61.4C33.4 391 0 327.4 0 256 0 132.3 100.3 32 224 32s224 100.3 224 224c0 71.4-33.4 135-85.4 176H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88.6c-21.8 0-39.4-17.6-39.4-39.4 0-14.6 8-27.2 19.4-34.2C366.2 375.5 400 319.7 400 256c0-97.2-78.8-176-176-176"
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
                  d="M224 64C118 64 32 150 32 256c0 69.5 36.9 130.4 92.3 164.1 9.4 5.7 15.9 16.1 15.9 27.9 0 17.7-14.3 32-32 32H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h92.2v-.1c-.1-.1-.2-.3-.5-.5C43.1 408.2 0 337.1 0 256 0 132.3 100.3 32 224 32s224 100.3 224 224c0 81.1-43.1 152.1-107.6 191.4-.3.2-.4.3-.5.5v.1H432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-92.2c-17.7 0-32-14.3-32-32 0-11.8 6.5-22.2 15.9-27.9C379.1 386.4 416 325.5 416 256c0-106-86-192-192-192"
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
                  d="M224 48C109.1 48 16 141.1 16 256c0 75.3 40 141.3 100 177.8 7.4 4.5 12.4 12.5 12.4 21.6 0 13.6-11 24.6-24.6 24.6H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h95.7c4.8 0 8.6-3.9 8.6-8.6 0-3.1-1.7-6.1-4.7-7.9C43.1 408.1 0 337.1 0 256 0 132.3 100.3 32 224 32s224 100.3 224 224c0 81.1-43.1 152.1-107.6 191.4-3 1.8-4.7 4.9-4.7 7.9 0 4.8 3.9 8.6 8.6 8.6H440c4.4 0 8 3.6 8 8s-3.6 8-8 8h-95.7c-13.6 0-24.6-11-24.6-24.6 0-9.1 5-17.1 12.4-21.6C392 397.3 432 331.3 432 256c0-114.9-93.1-208-208-208"
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
                  d="M224 96c-88.4 0-160 71.6-160 160 0 56.4 29.1 106 73.3 134.5 13.3 8.6 22.7 23.7 22.7 41.2 0 26.7-21.6 48.3-48.3 48.3H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h35.2C25.8 375.4 0 318.7 0 256 0 132.3 100.3 32 224 32s224 100.3 224 224c0 62.7-25.8 119.4-67.2 160H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-79.7c-26.7 0-48.3-21.6-48.3-48.3 0-17.5 9.4-32.6 22.7-41.2C354.9 362 384 312.4 384 256c0-88.4-71.6-160-160-160"
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
