import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TickIcon: React.FC<
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
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L33 109.6c-.7-3.8-1-7.5-1-11.4z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M72 104c0-13.3 10.7-24 24-24s24 10.7 24 24v1.9c0 1.4-.1 2.8-.4 4.3L96 252 72.4 110.1c-.2-1.4-.4-2.8-.4-4.3v-1.9zm95 14c.7-4 1-8.1 1-12.1V104c0-39.8-32.2-72-72-72s-72 32.2-72 72v1.9c0 4.1.3 8.1 1 12.1l24.4 146.5C53.2 287.3 72.9 304 96 304s42.8-16.7 46.6-39.5z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M56.6 256.9C60.9 275.1 77.2 288 96 288s35.1-12.9 39.4-31.1L165.9 129c1.4-6 2.1-12.1 2.1-18.2V104c0-39.8-32.2-72-72-72s-72 32.2-72 72v6.8c0 6.1.7 12.3 2.1 18.2zM56 104c0-22.1 17.9-40 40-40s40 17.9 40 40v6.8c0 3.6-.4 7.3-1.3 10.8l-30.4 127.9c-.9 3.8-4.3 6.5-8.3 6.5s-7.4-2.7-8.3-6.5L57.3 121.6c-.8-3.5-1.3-7.2-1.3-10.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 96c0-26.5 21.5-48 48-48s48 21.5 48 48v7.9c0 4.2-.5 8.3-1.4 12.4l-32.9 144.8c-1.5 6.4-7.1 10.9-13.7 10.9s-12.3-4.5-13.7-10.9L49.4 116.3c-.9-4.1-1.4-8.2-1.4-12.4zm-16 0v7.9q0 8.1 1.8 15.9l32.9 144.8C69.8 278.3 82 288 96 288s26.2-9.7 29.3-23.4l32.9-144.7c1.2-5.2 1.8-10.6 1.8-15.9v-7.9c0-35.3-28.7-64-64-64S32 60.7 32 96"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L33 109.6c-.7-3.8-1-7.5-1-11.4z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
