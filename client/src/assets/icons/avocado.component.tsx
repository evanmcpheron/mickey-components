import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AvocadoIcon: React.FC<
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
                  d="M459.4 255.3c-18.5 15.2-33.5 35.6-38.1 59.1-10.2 51.9-34 104.5-66.3 136.7-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c32.3-32.3 84.9-56.1 136.7-66.3C221 86 241.4 71 256.6 52.5 283.1 20.5 323.2 0 368 0c79.5 0 144 64.5 144 144 0 44.8-20.5 84.9-52.6 111.3m-176.2 91.9c41.7-41.7 49.1-102.1 16.4-134.8s-93-25.3-134.8 16.4-49.1 102.1-16.4 134.8 93 25.3 134.8-16.4"
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
                  d="M464 144c0 29.9-13.6 56.5-35.1 74.2-24.2 19.9-47.3 49.3-54.7 86.9-8.9 45.7-29.5 88.5-53.1 112-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c23.6-23.6 66.3-44.2 112-53.1 37.6-7.4 67-30.4 86.9-54.7 17.8-21.4 44.4-35 74.3-35 53 0 96 43 96 96m-42.7 170.3c4.6-23.5 19.6-43.9 38.1-59.1C491.5 228.9 512 188.8 512 144 512 64.5 447.5 0 368 0c-44.8 0-84.9 20.5-111.3 52.6-15.2 18.5-35.6 33.5-59.1 38.1-51.9 10.2-104.5 34-136.7 66.3-81.2 81.2-81.2 212.9 0 294.2s212.9 81.2 294.2 0c32.3-32.3 56.1-84.9 66.3-136.7zm-138.1 32.9c41.7-41.7 49.1-102.1 16.4-134.8s-93-25.3-134.8 16.4-49.1 102.1-16.4 134.8 93 25.3 134.8-16.4"
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
                  d="M480 144c0 34.8-15.9 66-40.9 86.6-22.3 18.4-42.7 44.7-49.1 77.6-9.4 47.7-31 93.8-57.5 120.3-68.7 68.7-180.2 68.7-248.9 0s-68.7-180.2 0-248.9c26.5-26.5 72.5-48.1 120.3-57.5 32.9-6.4 59.3-26.8 77.6-49.1C302 47.9 333.2 32 368 32c61.9 0 112 50.1 112 112m-58.7 170.3c4.6-23.5 19.6-43.9 38.1-59.1C491.5 228.9 512 188.8 512 144 512 64.5 447.5 0 368 0c-44.8 0-84.9 20.5-111.3 52.6-15.2 18.5-35.6 33.5-59.1 38.1-51.9 10.2-104.5 34-136.7 66.3-81.2 81.2-81.2 212.9 0 294.2s212.9 81.2 294.2 0c32.3-32.3 56.1-84.9 66.3-136.7zm-245.2-74.2c38.2-38.2 88.1-40.4 112.1-16.4s21.8 73.9-16.4 112.1-88.1 40.4-112.1 16.4-21.8-73.9 16.4-112.1m134.8-39c-41.4-41.4-112.1-28.8-157.4 16.4s-57.8 116-16.4 157.4 112.1 28.8 157.4-16.4 57.8-116 16.4-157.4"
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
                  d="M496 144c0 39.8-18.2 75.4-46.8 98.9-20.4 16.8-38.1 40.2-43.6 68.4-9.8 49.8-32.5 99.1-61.9 128.5-75 75-196.5 75-271.5 0s-75-196.5 0-271.5c29.4-29.4 78.7-52.1 128.5-61.9 28.2-5.5 51.6-23.2 68.4-43.6C292.6 34.2 328.2 16 368 16c70.7 0 128 57.3 128 128m-74.7 170.3c4.6-23.5 19.6-43.9 38.1-59.1C491.5 228.9 512 188.8 512 144 512 64.5 447.5 0 368 0c-44.8 0-84.9 20.5-111.3 52.6-15.2 18.5-35.6 33.5-59.1 38.1-51.9 10.2-104.5 34-136.7 66.3-81.2 81.2-81.2 212.9 0 294.2s212.9 81.2 294.2 0c32.3-32.3 56.1-84.9 66.3-136.7zm-250.8-79.8c40-40 95.1-44.8 123.4-16.4s23.6 83.5-16.4 123.4-95.1 44.8-123.4 16.4-23.6-83.5 16.4-123.4m134.8-27.7c-37-37-102.6-27.1-146.1 16.4s-53.4 109.1-16.4 146.1 102.6 27.1 146.1-16.4 53.4-109.1 16.4-146.1"
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
                  d="M459.4 255.3c-18.5 15.2-33.5 35.6-38.1 59.1-10.2 51.9-34 104.5-66.3 136.7-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c32.3-32.3 84.9-56.1 136.7-66.3C221 86 241.4 71 256.6 52.5 283.1 20.5 323.2 0 368 0c79.5 0 144 64.5 144 144 0 44.8-20.5 84.9-52.6 111.3m-176.2 91.9c41.7-41.7 49.1-102.1 16.4-134.8s-93-25.3-134.8 16.4-49.1 102.1-16.4 134.8 93 25.3 134.8-16.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M299.6 212.4c32.7 32.7 25.3 93-16.4 134.8s-102.1 49.1-134.8 16.4-25.3-93 16.4-134.8 102.1-49.1 134.8-16.4"
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
