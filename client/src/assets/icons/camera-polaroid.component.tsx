import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraPolaroidIcon: React.FC<
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
                  d="M64 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v150.3l53.3 79.9c7 10.5 10.7 22.9 10.7 35.5V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-54.3c0-12.6 3.7-25 10.7-35.5L64 246.3zm224 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m160-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0M112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M512 432H64c-8.8 0-16-7.2-16-16v-32h480v32c0 8.8-7.2 16-16 16M68.4 336l32.9-49.3c7-10.5 10.7-22.9 10.7-35.5V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v155.2c0 12.6 3.7 25 10.7 35.5l32.9 49.3zM64 480h448c35.3 0 64-28.7 64-64v-44.6c0-12.6-3.7-25-10.7-35.5L514.7 260c-1.8-2.6-2.7-5.7-2.7-8.9V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v155.2c0 3.2-.9 6.2-2.7 8.9l-50.6 75.8C3.7 346.4 0 358.7 0 371.4V416c0 35.3 28.7 64 64 64m344-368a24 24 0 1 0 0 48 24 24 0 1 0 0-48M288 288a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-32-80a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M64 448h448c17.7 0 32-14.3 32-32v-44.6c0-6.3-1.9-12.5-5.4-17.8l-1.1-1.6h-499l-1.1 1.6c-3.5 5.3-5.4 11.4-5.4 17.8V416c0 17.7 14.3 32 32 32m452.2-128-28.1-42.2c-5.3-7.9-8.1-17.1-8.1-26.6V96c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v155.2c0 9.5-2.8 18.7-8.1 26.6L59.8 320zM512 480H64c-35.3 0-64-28.7-64-64v-44.6c0-12.6 3.7-25 10.7-35.5L61.3 260c1.8-2.6 2.7-5.7 2.7-8.9V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v155.2c0 3.2.9 6.2 2.7 8.9l50.6 75.8c7 10.5 10.7 22.9 10.7 35.5V416c0 35.3-28.7 64-64 64m-96-328a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-128-8a48 48 0 1 0 0 96 48 48 0 1 0 0-96m80 48a80 80 0 1 1-160 0 80 80 0 1 1 160 0M112 384h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M64 464h448c26.5 0 48-21.5 48-48v-44.6c0-6.7-1.4-13.3-4.1-19.4H20.1c-2.7 6.1-4.1 12.7-4.1 19.4V416c0 26.5 21.5 48 48 48m482.1-128-44.7-67.1c-3.5-5.3-5.4-11.4-5.4-17.8V96c0-26.5-21.5-48-48-48H128c-26.5 0-48 21.5-48 48v155.2c0 6.3-1.9 12.5-5.4 17.8l-44.7 67zM512 480H64c-35.3 0-64-28.7-64-64v-44.6c0-12.6 3.7-25 10.7-35.5L61.3 260c1.8-2.6 2.7-5.7 2.7-8.9V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v155.2c0 3.2.9 6.2 2.7 8.9l50.6 75.8c7 10.5 10.7 22.9 10.7 35.5V416c0 35.3-28.7 64-64 64m-96-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-16-32a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-192 64a80 80 0 1 1 160 0 80 80 0 1 1-160 0m80 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128M104 400h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M288 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128M0 361.7c0-3.3.2-6.5.7-9.7h574.6c.5 3.2.7 6.4.7 9.7V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zM112 400c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v150.3l53.3 79.9c5.2 7.8 8.6 16.6 10 25.8H.7c1.4-9.2 4.8-18 10-25.8L64 246.3zm224 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m160-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
