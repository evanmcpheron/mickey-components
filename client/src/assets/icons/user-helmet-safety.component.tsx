import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserHelmetSafetyIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M216 0c-13.3 0-24 10.7-24 24v56l-28.4-56.9C125.6 43.5 99 82.6 96.2 128H96c-13.3 0-24 10.7-24 24s10.7 24 24 24h256c13.3 0 24-10.7 24-24s-10.7-24-24-24h-.2c-2.8-45.4-29.4-84.5-67.4-104.9L256 80V24c0-13.3-10.7-24-24-24zm8 320c65.3 0 119.1-48.9 127-112H97c7.9 63.1 61.7 112 127 112m-89.6 32C60.2 352 0 412.2 0 486.4 0 500.5 11.5 512 25.6 512h396.8c14.1 0 25.6-11.5 25.6-25.6 0-74.2-60.2-134.4-134.4-134.4z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M216 0h16c13.3 0 24 10.7 24 24v56l28.4-56.9c38 20.4 64.5 59.4 67.3 104.9h.2c13.3 0 24 10.7 24 24s-10.7 24-24 24H96c-13.3 0-24-10.7-24-24s10.7-24 24-24h.2c2.8-45.4 29.4-84.5 67.4-104.9L192 80V24c0-13.3 10.7-24 24-24m-54 304c-34.9-19.4-59.8-54.6-65-96h48.6c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64H351c-5.2 41.4-30.1 76.6-65 96-18.4 10.2-39.5 16-62 16s-43.6-5.8-62-16m-11.4 48h163c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4 0 412.2 60.2 352 134.4 352zm246.5 112c-9.9-36.9-43.5-64-83.5-64H134.4c-40 0-73.6 27.1-83.5 64z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176 60.8c-28.7 16.6-48 47.6-48 83.2h192c0-35.5-19.3-66.6-48-83.2V80c0 8.8-7.2 16-16 16s-16-7.2-16-16V32h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16zM271.2 25C318.5 43.8 352 90 352 144h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c0-54 33.5-100.2 80.8-119C180 10.7 192.7 0 208 0h32c15.3 0 28 10.7 31.2 25M224 320c-65.3 0-119.1-48.9-127-112h32.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H351c-7.9 63.1-61.7 112-127 112m191.8 160c-3.3-53.6-47.8-96-102.2-96H134.4c-54.4 0-98.9 42.4-102.2 96zM0 486.4C0 412.2 60.2 352 134.4 352h179.2c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M200 24v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V38.8c-46.6 16.5-80 61-80 113.2v8h240v-8c0-52.2-33.4-96.7-80-113.2V88c0 4.4-3.6 8-8 8s-8-3.6-8-8V24c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m-16 0c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v-2c55.6 17.1 96 68.8 96 130v8h16c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h16v-8c0-61.2 40.4-112.9 96-130zm40 296c-65.3 0-119.1-48.9-127-112h16.1c7.8 54.3 54.4 96 110.9 96s103.1-41.7 110.9-96H351c-7.9 63.1-61.7 112-127 112m-89.6 48C69 368 16 421 16 486.4c0 5.3 4.3 9.6 9.6 9.6h396.8c5.3 0 9.6-4.3 9.6-9.6C432 421 379 368 313.6 368zM0 486.4C0 412.2 60.2 352 134.4 352h179.2c74.2 0 134.4 60.2 134.4 134.4 0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M97 176c-.7 5.2-1 10.6-1 16 0 70.7 57.3 128 128 128s128-57.3 128-128c0-5.4-.3-10.8-1-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M216 0c-13.3 0-24 10.7-24 24v56l-28.4-56.9C125.6 43.5 99 82.6 96.2 128H96c-13.3 0-24 10.7-24 24s10.7 24 24 24h256c13.3 0 24-10.7 24-24s-10.7-24-24-24h-.2c-2.8-45.4-29.4-84.5-67.4-104.9L256 80V24c0-13.3-10.7-24-24-24zm-81.6 352C60.2 352 0 412.2 0 486.4 0 500.5 11.5 512 25.6 512h396.8c14.1 0 25.6-11.5 25.6-25.6 0-74.2-60.2-134.4-134.4-134.4z"
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
