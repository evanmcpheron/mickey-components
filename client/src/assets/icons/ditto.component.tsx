import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DittoIcon: React.FC<
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
                  d="M0 96v2.3c0 3.8.3 7.6 1 11.4l25.5 146.8c3.2 18.2 19 31.5 37.5 31.5s34.3-13.3 37.5-31.5L127 109.6c.7-3.8 1-7.5 1-11.4V96c0-35.3-28.7-64-64-64S0 60.7 0 96m192 0v2.3c0 3.8.3 7.6 1 11.4l25.5 146.8c3.2 18.2 19 31.5 37.5 31.5s34.3-13.3 37.5-31.5L319 109.6c.7-3.8 1-7.5 1-11.4V96c0-35.3-28.7-64-64-64s-64 28.7-64 64"
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
                  d="M48 105.9c0 1.4.1 2.8.4 4.3L72 252l23.6-141.9c.2-1.4.4-2.8.4-4.3V104c0-13.3-10.7-24-24-24s-24 10.7-24 24zm96 0c0 4.1-.3 8.1-1 12.1l-24.4 146.5C114.8 287.3 95.1 304 72 304s-42.8-16.7-46.6-39.5L1 118c-.7-4-1-8.1-1-12.1V104c0-39.8 32.2-72 72-72s72 32.2 72 72zm80 0c0 1.4.1 2.8.4 4.3L248 252l23.6-141.9c.2-1.4.4-2.8.4-4.3V104c0-13.3-10.7-24-24-24s-24 10.7-24 24zm96 0c0 4.1-.3 8.1-1 12.1l-24.4 146.5c-3.8 22.8-23.5 39.5-46.6 39.5s-42.8-16.7-46.6-39.5L177 118c-.7-4-1-8.1-1-12.1V104c0-39.8 32.2-72 72-72s72 32.2 72 72z"
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
                  d="M96 98.3V96c0-17.7-14.3-32-32-32S32 78.3 32 96v2.3c0 2 .2 3.9.5 5.9L58 251c.5 2.9 3 5 6 5s5.5-2.1 6-5l25.5-146.8 30.9 5.4-30.9-5.4c.3-1.9.5-3.9.5-5.9m-96 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8C98.3 274.7 82.5 288 64 288s-34.3-13.3-37.5-31.5L1 109.6c-.7-3.8-1-7.5-1-11.4zm288 0V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v2.3c0 2 .2 3.9.5 5.9L250 251c.5 2.9 3 5 6 5s5.5-2.1 6-5l25.5-146.8 30.9 5.4-30.9-5.4c.3-1.9.5-3.9.5-5.9m-96 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L193 109.6c-.7-3.8-1-7.5-1-11.4z"
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
                  d="M16 103.9c0 4.2.5 8.3 1.4 12.4l32.9 144.8c1.4 6.4 7.1 10.9 13.7 10.9s12.3-4.5 13.7-10.9l32.9-144.7c.9-4.1 1.4-8.2 1.4-12.4v-8c0-26.5-21.5-48-48-48S16 69.5 16 96zm-16 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v7.9q0 8.1-1.8 15.9L93.3 264.6C90.2 278.3 78 288 64 288s-26.2-9.7-29.3-23.4L1.8 119.9c-1.2-5.3-1.8-10.6-1.8-16m208 0c0 4.2.5 8.3 1.4 12.4L242.3 261c1.5 6.4 7.1 10.9 13.7 10.9s12.3-4.5 13.7-10.9l32.9-144.7c.9-4.1 1.4-8.2 1.4-12.4V96c0-26.5-21.5-48-48-48s-48 21.5-48 48zm-16 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v7.9q0 8.1-1.8 15.9l-32.9 144.8C282.2 278.3 270 288 256 288s-26.2-9.7-29.3-23.4l-32.9-144.7c-1.2-5.2-1.8-10.6-1.8-15.9z"
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
                  d="M0 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8C98.3 274.7 82.5 288 64 288s-34.3-13.3-37.5-31.5L1 109.6c-.7-3.8-1-7.5-1-11.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L193 109.6c-.7-3.8-1-7.5-1-11.4z"
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
