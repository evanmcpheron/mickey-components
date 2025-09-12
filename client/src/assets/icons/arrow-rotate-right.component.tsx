import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowRotateRightIcon: React.FC<
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
                  d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2l-17.6-17.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8 229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3 163.8-62.5 226.3 0z"
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
                  d="M472 224c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v80.1l-20-23.5C387 63.4 325.1 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224c50.4 0 97-16.7 134.4-44.8 10.6-8 12.7-23 4.8-33.6s-23-12.7-33.6-4.8C332.2 418.9 295.7 432 256 432c-97.2 0-176-78.8-176-176S158.8 80 256 80c54.3 0 102.9 24.6 135.2 63.4l.1.2 27.6 32.4H328c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
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
                  d="M464 192c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v92.6C408.8 75.5 337.5 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224c79.9 0 150-41.8 189.7-104.8 6.6-10.4-1.4-23.2-13.7-23.2-6 0-11.4 3.2-14.7 8.2C383.1 413 323.6 448 256 448c-106 0-192-86-192-192S150 64 256 64c71.1 0 133.1 38.6 166.3 96H336c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
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
                  d="M384.1 419.9c-90.5 70.7-221.2 54.7-292-35.8s-54.7-221.2 35.8-292c90.5-70.7 221.2-54.7 291.9 35.8L456 176H328c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v120l-31.4-41.8-.1-.1C356.4 20.6 215.6 3.3 118.1 79.5S3.3 296.4 79.5 393.9s216.9 114.8 314.4 38.6c24.7-19.3 44.2-42.7 58.4-68.6 2.1-3.9.7-8.7-3.2-10.9s-8.7-.7-10.9 3.2c-13.2 24-31.3 45.7-54.3 63.7z"
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
                  d="m386.3 160-17.1-17.1c-62.5-62.5-163.8-62.5-226.3 0s-62.5 163.8 0 226.3 163.8 62.5 226.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3C327 502 185.2 502 97.7 414.5s-87.5-229.3 0-316.8 229.3-87.5 316.8 0l17.5 17.5V160z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 192c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32s14.3-32 32-32h96V64c0-17.7 14.3-32 32-32s32 14.3 32 32z"
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
