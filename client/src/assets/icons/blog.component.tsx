import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlogIcon: React.FC<
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
                  d="M192 32c0 17.7 14.3 32 32 32 123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32m0 96c0 17.7 14.3 32 32 32 70.7 0 128 57.3 128 128 0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192-17.7 0-32 14.3-32 32m-96 16c0-26.5-21.5-48-48-48S0 117.5 0 144v224c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144h-16v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48z"
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
                  d="M216 0c163.5 0 296 132.5 296 296 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-137-111-248-248-248-13.3 0-24-10.7-24-24s10.7-24 24-24M24 96c13.3 0 24 10.7 24 24v248c0 53 43 96 96 96s96-43 96-96-43-96-96-96h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8c79.5 0 144 64.5 144 144s-64.5 144-144 144S0 447.5 0 368V120c0-13.3 10.7-24 24-24m168 24c0-13.3 10.7-24 24-24 110.5 0 200 89.5 200 200 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-83.9-68.1-152-152-152-13.3 0-24-10.7-24-24"
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
                  d="M208 32c-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240 107.5 240 240 0 8.8 7.2 16 16 16s16-7.2 16-16c0-150.2-121.8-272-272-272m0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c79.5 0 144 64.5 144 144 0 8.8 7.2 16 16 16s16-7.2 16-16c0-97.2-78.8-176-176-176m-176-8c0-8.8-7.2-16-16-16s-16 7.2-16 16v248c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h8c61.9 0 112 50.1 112 112s-50.1 112-112 112S32 429.9 32 368z"
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
                  d="M200 32c-4.4 0-8 3.6-8 8s3.6 8 8 8c145.8 0 264 118.2 264 264 0 4.4 3.6 8 8 8s8-3.6 8-8c0-154.6-125.4-280-280-280m0 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c92.8 0 168 75.2 168 168 0 4.4 3.6 8 8 8s8-3.6 8-8c0-101.6-82.4-184-184-184M16 104c0-4.4-3.6-8-8-8s-8 3.6-8 8v264c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144h-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h8c70.7 0 128 57.3 128 128s-57.3 128-128 128S16 438.7 16 368z"
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
                  d="M224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0m0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32c70.7 0 128 57.3 128 128 0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 96c26.5 0 48 21.5 48 48v224c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48h-16v-96h16c79.5 0 144 64.5 144 144s-64.5 144-144 144S0 447.5 0 368V144c0-26.5 21.5-48 48-48"
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
