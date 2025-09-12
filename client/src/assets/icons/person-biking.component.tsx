import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonBikingIcon: React.FC<
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
                  d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m27.2 64-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6l60.5 38.4V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zM56 384a72 72 0 1 1 144 0 72 72 0 1 1-144 0m200 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0m184 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0m200 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0"
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
                  d="M448 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M208 384a80 80 0 1 1-160 0 80 80 0 1 1 160 0m-80-128a128 128 0 1 0 0 256 128 128 0 1 0 0-256m464 128a80 80 0 1 1-160 0 80 80 0 1 1 160 0m-80-128a128 128 0 1 0 0 256 128 128 0 1 0 0-256M341.5 149.6c3.5-2.5 8.3-1.9 11 1.4l44.8 56c4.6 5.7 11.5 9 18.7 9h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-52.5L390 121c-18.8-23.5-52.7-27.9-76.9-10.1l-74.6 55c-38.5 28.4-33.4 87.4 9.3 108.8l56.2 28.1V416c0 13.3 10.7 24 24 24s24-10.7 24-24V288c0-9.1-5.1-17.4-13.3-21.5l-69.6-34.8c-10.7-5.3-12-20.1-2.3-27.2l74.6-55z"
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
                  d="M392 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112M224 384a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96-128a128 128 0 1 0 0 256 128 128 0 1 0 0-256m480 128a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96-128a128 128 0 1 0 0 256 128 128 0 1 0 0-256m-202.9-89.6c6.1-5.2 15.1-5.1 21.1.3l59.1 53.2c2.9 2.6 6.8 4.1 10.7 4.1h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-73.9l-54.5-49.1c-17.9-16.1-45-16.5-63.3-.8l-59.1 50.6c-23.9 20.5-21.9 58.1 4 76l86.8 59.7V416c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-5.3-2.6-10.2-6.9-13.2l-93.7-64.4c-8.7-6-9.3-18.5-1.3-25.3l59.1-50.6z"
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
                  d="M392 16a40 40 0 1 1 0 80 40 40 0 1 1 0-80m0 96a56 56 0 1 0 0-112 56 56 0 1 0 0 112M240 384a112 112 0 1 1-224 0 112 112 0 1 1 224 0M128 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256m496 128a112 112 0 1 1-224 0 112 112 0 1 1 224 0M512 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256M304.9 151.5c8.8-7.6 21.8-7.7 30.8-.4l67.3 55c1.4 1.2 3.2 1.8 5.1 1.8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-77.2l-65-53.2c-15-12.3-36.6-12-51.4.6L235.3 190c-20.3 17.4-18.1 49.4 4.3 64l96.4 62.4V416c0 4.4 3.6 8 8 8s8-3.6 8-8V312c0-2.7-1.4-5.2-3.7-6.7l-100-64.7c-13.5-8.7-14.8-27.9-2.6-38.4l59.1-50.7z"
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
                  d="M200 384a72 72 0 1 0-144 0 72 72 0 1 0 144 0M0 384a128 128 0 1 1 256 0 128 128 0 1 1-256 0m584 0a72 72 0 1 0-144 0 72 72 0 1 0 144 0m-200 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M400 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-34.6 111.2 61.8 48.8H480c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-7.3 0-14.3-2.5-20-7l-40.7-32.6-60.3 48.5 42.7 28.5c8.9 5.9 14.2 15.9 14.2 26.6v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V305.1l-60.5-38.4c-32.8-20.8-35-67.9-4.3-91.6l83.1-64.2c17.4-13.5 41.8-13.3 59.1.3z"
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
