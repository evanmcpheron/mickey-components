import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IntegralIcon: React.FC<
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
                  d="M216 64c-13.3 0-24 10.7-24 24v336c0 48.6-39.4 88-88 88s-88-39.4-88-88v-8c0-17.7 14.3-32 32-32s32 14.3 32 32v8c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6 39.4-88 88-88s88 39.4 88 88v8c0 17.7-14.3 32-32 32s-32-14.3-32-32v-8c0-13.3-10.7-24-24-24"
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
                  d="M216 48c-17.7 0-32 14.3-32 32v352c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v16c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-44.2 35.8-80 80-80s80 35.8 80 80v16c0 13.3-10.7 24-24 24s-24-10.7-24-24V80c0-17.7-14.3-32-32-32"
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
                  d="M216 32c-22.1 0-40 17.9-40 40v368c0 39.8-32.2 72-72 72s-72-32.2-72-72v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v24c0 22.1 17.9 40 40 40s40-17.9 40-40V72c0-39.8 32.2-72 72-72s72 32.2 72 72v24c0 8.8-7.2 16-16 16s-16-7.2-16-16V72c0-22.1-17.9-40-40-40"
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
                  d="M220 16c-28.7 0-52 23.3-52 52v376c0 37.6-30.4 68-68 68s-68-30.4-68-68v-20c0-4.4 3.6-8 8-8s8 3.6 8 8v20c0 28.7 23.3 52 52 52s52-23.3 52-52V68c0-37.6 30.4-68 68-68s68 30.4 68 68v20c0 4.4-3.6 8-8 8s-8-3.6-8-8V68c0-28.7-23.3-52-52-52"
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
                  d="M216 64c-13.3 0-24 10.7-24 24v336c0 48.6-39.4 88-88 88s-88-39.4-88-88v-8c0-17.7 14.3-32 32-32s32 14.3 32 32v8c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6 39.4-88 88-88s88 39.4 88 88v8c0 17.7-14.3 32-32 32s-32-14.3-32-32v-8c0-13.3-10.7-24-24-24"
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
