import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChildDressIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M88 400v80c0 17.7 14.3 32 32 32s32-14.3 32-32v-80h16v80c0 17.7 14.3 32 32 32s32-14.3 32-32v-80h17.8c10.9 0 18.6-10.7 15.2-21.1l-31.1-93.4 28.6 37.8c10.7 14.1 30.8 16.8 44.8 6.2s16.8-30.7 6.2-44.8L254.6 207c-22.4-29.6-57.5-47-94.6-47s-72.2 17.4-94.6 47L6.5 284.7c-10.7 14.1-7.9 34.2 6.2 44.8s34.2 7.9 44.8-6.2l28.7-37.8L55 378.9c-3.4 10.4 4.3 21.1 15.2 21.1z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M184 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-96 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0M71 201.8c21.3-25.7 52.7-40.9 86-41.8h6.2c33.3.9 64.6 16.1 86 41.8l65.4 78.8c8.5 10.2 7.1 25.3-3.1 33.8s-25.3 7.1-33.8-3.1l-43.1-52 36.3 109c2.4 7.3 1.2 15.4-3.3 21.6s-11.8 10-19.5 10H224v88c0 13.3-10.7 24-24 24s-24-10.7-24-24V400h-32v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88H72c-7.7 0-15-3.7-19.5-10s-5.7-14.3-3.3-21.6l36.3-109-43.1 52c-8.5 10.2-23.6 11.6-33.8 3.1s-11.5-23.6-3.1-33.8l65.4-78.8zm89 6.2h-1.4c-3.2.2-6.1 2.3-7.1 5.5L105.3 352h109.4l-46.2-138.5c-1-3.1-3.9-5.3-7.1-5.5z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128M96 400H72c-5 0-9.7-2.3-12.7-6.3s-4-9.1-2.8-13.9l41.5-154-69.4 88.1c-5.5 6.9-15.5 8.1-22.5 2.7S-2 301 3.4 294.1l74.3-94.2c18.8-23.9 47.1-38.3 77.3-39.8 1.2-.1 2.5-.1 3.7-.1h2.6c1.2 0 2.5 0 3.7.1 30.2 1.5 58.4 15.9 77.3 39.8l74.3 94.2c5.5 6.9 4.3 17-2.7 22.5s-17 4.3-22.5-2.7L222 225.8l41.5 154c1.3 4.8.3 9.9-2.8 13.9S253 400 248 400h-24v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96h-64v96c0 8.8-7.2 16-16 16s-16-7.2-16-16zm60.8-207.9c-10.1.8-18.7 7.8-21.4 17.7L92.9 368h134.2l-42.6-158.2c-2.7-9.9-11.3-16.9-21.4-17.7-1.1 0-2.1-.1-3.2-.1s-2.1 0-3.2.1z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-52.6 248.8c4 1.9 5.7 6.6 3.8 10.6L52.6 384h214.8l-58.6-124.6c-1.9-4-.2-8.8 3.8-10.6s8.8-.2 10.6 3.8l64 136c1.2 2.5 1 5.4-.5 7.7s-4 3.7-6.8 3.7H240v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-32v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80H40c-2.7 0-5.3-1.4-6.8-3.7s-1.7-5.2-.5-7.7l64-136c1.9-4 6.6-5.7 10.6-3.8zM96 400v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80zm96 80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h-32zM90.3 215.4 30.9 316.1c-2.2 3.8-7.1 5.1-11 2.8s-5.1-7.1-2.8-11l59.4-100.7C93.8 178 125.2 160 159.2 160h1.6c34 0 65.4 18 82.7 47.2l59.4 100.7c2.2 3.8 1 8.7-2.8 11s-8.7 1-11-2.8l-59.4-100.7C215.3 191 189.1 176 160.8 176h-1.6c-28.3 0-54.5 15-68.9 39.4"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="m86.2 285.5-28.7 37.8c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.7-37.8 31.2 93.4c3.5 10.4-4.3 21.1-15.2 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80H70.2c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4z"
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
