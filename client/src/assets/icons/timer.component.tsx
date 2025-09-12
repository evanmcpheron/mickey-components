import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TimerIcon: React.FC<
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
                  d="M256 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V66.7c90.8 15.2 160 94.2 160 189.3 0 106-86 192-192 192S64 362 64 256c0-53.7 22-102.3 57.6-137.1 12.6-12.4 12.8-32.6.5-45.3s-32.6-12.8-45.3-.5C29.5 119.6 0 184.4 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m-63 159c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"
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
                  d="M232 24c0-13.3 10.7-24 24-24 141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256c0-37.9 8.2-73.8 23-106.1 6-13.2 13.1-25.8 21.2-37.6 0-.1.1-.1.1-.2C53.4 98.7 63.6 86.3 75 75c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-9.2 9.2-17.6 19.3-25 30.1 0 .1-.1.1-.1.2-21.2 31.2-34.2 68.5-35.7 108.7-.1 2.7-.2 5.4-.2 8.1 0 114.9 93.1 208 208 208s208-93.1 208-208c0-106.8-80.4-194.7-184-206.6V104c0 13.3-10.7 24-24 24s-24-10.7-24-24V24zm-73 135c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9"
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
                  d="M256 0c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V32.6C388.2 40.8 480 137.7 480 256c0 123.7-100.3 224-224 224S32 379.7 32 256c0-61.9 25.1-117.8 65.6-158.4 6.2-6.2 6.2-16.4 0-22.6S81.2 68.8 75 75C28.7 121.3 0 185.3 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m-84.7 148.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"
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
                  d="M256 0c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V16.1c128.8 4.2 232 110 232 239.9 0 132.5-107.5 240-240 240S16 388.5 16 256c0-66.3 26.9-126.3 70.3-169.7 3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0C28.7 121.3 0 185.3 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m-90.3 154.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"
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
                  d="M224 32c0-17.7 14.3-32 32-32 141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256c0-71.6 29.5-136.4 76.8-182.9 12.6-12.4 32.9-12.2 45.3.5s12.2 32.9-.5 45.3C86 153.7 64 202.3 64 256c0 106 86 192 192 192s192-86 192-192c0-95.1-69.2-174.1-160-189.3V96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M159 159c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9"
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
