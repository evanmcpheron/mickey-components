import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowRotateLeftIcon: React.FC<
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
                  d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2l17.6-17.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3-163.8-62.5-226.3 0z"
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
                  d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224S379.7 480 256 480c-50.4 0-97-16.7-134.4-44.8-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176S353.2 80 256 80c-54.3 0-102.9 24.6-135.2 63.4l-.1.2L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
                  d="M48 192c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v92.6C103.2 75.5 174.5 32 256 32c123.7 0 224 100.3 224 224S379.7 480 256 480c-79.9 0-150-41.8-189.7-104.8C59.8 364.8 67.7 352 80 352c6 0 11.4 3.2 14.7 8.2C128.9 413 188.4 448 256 448c106 0 192-86 192-192S362 64 256 64c-71.1 0-133.1 38.6-166.3 96H176c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
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
                  d="M127.9 419.9c90.5 70.7 221.2 54.7 292-35.8s54.7-221.2-35.8-292c-90.5-70.7-221.2-54.7-292 35.8L56 176h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8v120l31.4-41.8.1-.1C155.6 20.6 296.4 3.3 393.9 79.5s114.8 216.9 38.6 314.4-216.9 114.8-314.4 38.6c-24.7-19.3-44.2-42.7-58.4-68.5-2.1-3.9-.7-8.7 3.2-10.9s8.7-.7 10.9 3.2C87 380.3 105.1 402 128 420z"
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
                  d="m125.7 160 17.1-17.1c62.5-62.5 163.8-62.5 226.3 0s62.5 163.8 0 226.3-163.8 62.5-226.3 0c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3c87.5 87.5 229.3 87.5 316.8 0s87.5-229.3 0-316.8-229.3-87.5-316.8 0L80 115.2V160z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M16 192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H80V64c0-17.7-14.3-32-32-32S16 46.3 16 64z"
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
