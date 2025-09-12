import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LinkHorizontalIcon: React.FC<
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
                  d="M144.6 64C64.7 64 0 128.7 0 208.6c0 70.7 51.1 131 120.8 142.6l1.9.3c17.4 2.9 33.9-8.9 36.8-26.3s-8.9-33.9-26.3-36.8l-1.9-.3C92.5 281.6 64 248 64 208.6c0-44.5 36.1-80.6 80.6-80.6h158.8c44.5 0 80.6 36.1 80.6 80.6 0 39.4-28.5 73-67.4 79.5l-1.9.3c-17.4 2.9-29.2 19.4-26.3 36.8s19.4 29.2 36.8 26.3l1.9-.3c69.7-11.6 120.8-72 120.8-142.6C448 128.7 383.3 64 303.4 64zm350.8 384c79.9 0 144.6-64.7 144.6-144.6 0-70.7-51.1-131-120.8-142.6l-1.9-.3c-17.4-2.9-33.9 8.9-36.8 26.3s8.9 33.9 26.3 36.8l1.9.3c38.9 6.5 67.4 40.1 67.4 79.5 0 44.5-36.1 80.6-80.6 80.6H336.6c-44.5 0-80.6-36.1-80.6-80.6 0-39.4 28.5-73 67.4-79.5l1.9-.3c17.4-2.9 29.2-19.4 26.3-36.8s-19.4-29.2-36.8-26.3l-1.9.3C243.1 172.4 192 232.7 192 303.4c0 79.9 64.7 144.6 144.6 144.6z"
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
                  d="M143.9 64C64.4 64 0 128.4 0 207.9c0 75.7 58.7 138.5 134.3 143.5l8.1.5c13.2.9 24.7-9.1 25.5-22.3s-9.1-24.7-22.4-25.5l-8.1-.5C87.1 300.2 48 258.3 48 207.9 48 155 90.9 112 143.9 112h160.2c52.9 0 95.9 42.9 95.9 95.9 0 50.5-39.1 92.3-89.5 95.6l-8.1.5c-13.2.9-23.2 12.3-22.4 25.5s12.3 23.2 25.5 22.3l8.1-.5c75.6-5 134.3-67.8 134.3-143.5C448 128.4 383.6 64 304.1 64zm352.2 384c79.5 0 143.9-64.4 143.9-143.9 0-75.7-58.7-138.5-134.3-143.5l-8.1-.5c-13.2-.9-24.7 9.1-25.5 22.4s9.1 24.7 22.3 25.5l8.1.5c50.4 3.4 89.5 45.2 89.5 95.6 0 52.9-42.9 95.9-95.9 95.9H335.9c-53 0-95.9-42.9-95.9-95.9 0-50.5 39.1-92.3 89.5-95.7l7.1-.5c13.2-.9 23.2-12.3 22.3-25.6s-12.3-23.2-25.6-22.3l-7.1.5C250.7 165.6 192 228.4 192 304.1c0 79.5 64.4 143.9 143.9 143.9z"
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
                  d="M128 64C57.3 64 0 121.3 0 192s57.3 128 128 128h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-53 0-96-43-96-96s43-96 96-96h176.1c52.9 0 95.9 42.9 95.9 95.9 0 50.3-38.9 92-89 95.6l-8.1.6c-8.8.6-15.4 8.3-14.8 17.1s8.3 15.4 17.1 14.8l8.1-.6c66.9-4.8 118.7-60.5 118.7-127.5C432 121.2 374.8 64 304.1 64zm384 384c70.7 0 128-57.3 128-128s-57.3-128-128-128h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c53 0 96 43 96 96s-43 96-96 96H335.9c-52.9 0-95.9-42.9-95.9-95.9 0-50.3 38.9-92 89-95.6l8.1-.6c8.8-.6 15.4-8.3 14.8-17.1s-8.3-15.4-17.1-14.8l-8.1.6C259.8 197.4 208 253.1 208 320.1c0 70.7 57.2 127.9 127.9 127.9z"
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
                  d="M512 432c70.7 0 128-57.3 128-128s-57.3-128-128-128h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24c61.9 0 112 50.1 112 112s-50.1 112-112 112H320c-61.9 0-112-50.1-112-112s50.1-112 112-112h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56c-70.7 0-128 57.3-128 128s57.3 128 128 128zM128 80C57.3 80 0 137.3 0 208s57.3 128 128 128h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24c-61.9 0-112-50.1-112-112S66.1 96 128 96h192c61.9 0 112 50.1 112 112s-50.1 112-112 112h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56c70.7 0 128-57.3 128-128S390.7 80 320 80z"
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
                  d="M640 303.4c0 79.9-64.7 144.6-144.6 144.6H336.6C256.7 448 192 383.3 192 303.4c0-70.7 51.1-131 120.8-142.6l1.9-.3c17.4-2.9 33.9 8.9 36.8 26.3s-8.9 33.9-26.3 36.8l-1.9.3c-38.8 6.5-67.3 40.1-67.3 79.5 0 44.5 36.1 80.6 80.6 80.6h158.8c44.5 0 80.6-36.1 80.6-80.6 0-39.4-28.5-73-67.4-79.5l-1.9-.3c-17.4-2.9-29.2-19.4-26.3-36.8s19.4-29.2 36.8-26.3l1.9.3c69.7 11.6 120.8 72 120.8 142.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 208.6C0 128.7 64.7 64 144.6 64h158.8C383.3 64 448 128.7 448 208.6c0 70.7-51.1 131-120.8 142.6l-1.9.3c-17.4 2.9-33.9-8.9-36.8-26.3s8.9-33.9 26.3-36.8l1.9-.3c38.9-6.5 67.4-40.1 67.4-79.5 0-44.5-36.1-80.6-80.6-80.6H144.6c-44.5 0-80.6 36.1-80.6 80.6 0 39.4 28.5 73 67.4 79.5l1.9.3c17.4 2.9 29.2 19.4 26.3 36.8s-19.4 29.2-36.8 26.3l-1.9-.3C51.1 339.6 0 279.3 0 208.6"
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
