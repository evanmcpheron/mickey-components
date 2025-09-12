import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const H6Icon: React.FC<
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
                  d="m537 116-35.3 44.1c76.9 3 138.3 66.3 138.3 143.9 0 79.5-64.5 144-144 144s-144-64.5-144-144c0-38.3 13-75.5 37-105.5L487 76c11-13.8 31.2-16 45-5s16 31.2 5 45M416 304a80 80 0 1 0 160 0 80 80 0 1 0-160 0M32 64c17.7 0 32 14.3 32 32v128h192V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32"
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
                  d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V272h224v152c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v136H48zm471-18.7c-10.3-8.3-25.5-6.6-33.7 3.7l-98 122.5C364.4 224 352 259.5 352 296h.2c-.1 2.6-.2 5.3-.2 8 0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144c-6.8 0-13.4.5-20 1.4l46.7-58.4c8.3-10.4 6.6-25.5-3.8-33.7zM496 208a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
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
                  d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h256v160c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H32zm473.4-12.9c-7.1-5.2-17.2-3.6-22.4 3.5l-99.7 137.2A163.6 163.6 0 0 0 352 304c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144c-15 0-29.6 2.3-43.2 6.6l56.1-77.2c5.2-7.1 3.6-17.2-3.5-22.4zM496 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224"
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
                  d="M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V256h288v184c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H16zm492.9-6.3c-3.5-2.7-8.5-2.1-11.2 1.4L383.3 213.3C363 239.2 352 271.1 352 304c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144c-22 0-42.8 4.9-61.5 13.7l75.8-96.8c2.7-3.5 2.1-8.5-1.4-11.2M368 304v-2c1.1-69.8 58-126 128-126 70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128"
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
                  d="M32 64c17.7 0 32 14.3 32 32v128h192V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M537 116c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-98 122.5c-24 29.9-37 67.1-37 105.5 0 79.5 64.5 144 144 144s144-64.5 144-144c0-77.6-61.4-140.9-138.3-143.9zm39 188a80 80 0 1 1-160 0 80 80 0 1 1 160 0"
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
