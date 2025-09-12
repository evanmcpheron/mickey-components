import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckFlatbedIcon: React.FC<
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
                  d="M608 416h-32c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h56.4c17.6-19.6 43.1-32 71.6-32s54 12.4 71.6 32H352V128c0-17.7 14.3-32 32-32h82.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32M416 160v96h128v-18.7L466.7 160zM208 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0m272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M368 120c0-13.3 10.7-24 24-24h66.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h52.8c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48H368zm189.7 119.6-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96h142l-.2-.2-.2-.2zM208 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0m272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M408 96c-13.3 0-24 10.7-24 24v264H250.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V235.8c0-11.5-4.1-22.5-11.6-31.2l-78.7-91.8c-9.1-10.7-22.4-16.8-36.4-16.8zm8 160h160v128h-5.5c-13.2-37.3-48.7-64-90.5-64-24.6 0-47 9.2-64 24.4zm154.9-32H416v-96h65.3c4.7 0 9.1 2 12.1 5.6zM96 416a64 64 0 1 1 128 0 64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M400 120c0-13.3 10.7-24 24-24h50.7c10.6 0 20.8 4.2 28.3 11.7l93.3 93.3c7.5 7.5 11.7 17.7 11.7 28.3V400h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.4c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H239.6c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h59.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64H400zm16 253.4c15.9-22.6 42.2-37.4 72-37.4 40.3 0 74.2 27.1 84.7 64H592V232H416zm0-157.4h172c-.9-1.3-1.9-2.6-3-3.7L491.7 119c-4.5-4.5-10.6-7-17-7H424c-4.4 0-8 3.6-8 8zM152 496a72 72 0 1 0 0-144 72 72 0 1 0 0 144m408-72a72 72 0 1 0-144 0 72 72 0 1 0 144 0"
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
                  d="M176 512a80 80 0 1 0 0-160 80 80 0 1 0 0 160m288 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M640 384c0 17.7-14.3 32-32 32h-33.1c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96h-66.2c-3.6-24.9-15.3-47.2-32.5-64H352V128c0-17.7 14.3-32 32-32h82.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32M97.6 352c-17.1 16.8-28.9 39.1-32.5 64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zM544 256v-18.7L466.7 160H416v96z"
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
