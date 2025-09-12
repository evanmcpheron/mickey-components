import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SwapArrowsIcon: React.FC<
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
                  d="M105.4 9.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L160 109.3V352c0 35.3 28.7 64 64 64s64-28.7 64-64V160c0-70.7 57.3-128 128-128s128 57.3 128 128v242.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.3 41.4V160c0-35.3-28.7-64-64-64s-64 28.7-64 64v192c0 70.7-57.3 128-128 128S96 422.7 96 352V109.3l-41.4 41.3c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z"
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
                  d="M111 7c9.4-9.4 24.6-9.4 33.9 0l88 88c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47V360c0 39.8 32.2 72 72 72s72-32.2 72-72V152c0-66.3 53.7-120 120-120s120 53.7 120 120v278.1l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-88-88c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47V152c0-39.8-32.2-72-72-72s-72 32.2-72 72v208c0 66.3-53.7 120-120 120s-120-53.7-120-120V81.9L57 129c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9z"
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
                  d="M100.7 20.7c6.2-6.2 16.4-6.2 22.6 0l88 88c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L128 70.6V360c0 48.6 39.4 88 88 88s88-39.4 88-88V152c0-66.3 53.7-120 120-120s120 53.7 120 120v289.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-88 88c-6.2 6.2-16.4 6.2-22.6 0l-88-88c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l60.7 60.7V152c0-48.6-39.4-88-88-88s-88 39.4-88 88v208c0 66.3-53.7 120-120 120S96 426.3 96 360V70.6l-60.7 60.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"
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
                  d="M106.3 18.3c3.1-3.1 8.2-3.1 11.3 0l96 96c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L120 43.3V368c0 53 43 96 96 96s96-43 96-96V144c0-61.9 50.1-112 112-112s112 50.1 112 112v324.7l82.3-82.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-96 96c-3.1 3.1-8.2 3.1-11.3 0l-96-96c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l82.4 82.4V144c0-53-43-96-96-96s-96 43-96 96v224c0 61.9-50.1 112-112 112s-112-50.1-112-112V43.3l-82.3 82.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l96-96z"
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
                  d="M534.6 502.6c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.4 41.4V160c0-35.3-28.7-64-64-64s-64 28.7-64 64v96h-64v-96c0-70.7 57.3-128 128-128s128 57.3 128 128v242.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 109.3V352c0 70.7 57.3 128 128 128s128-57.3 128-128v-96h-64v96c0 35.3-28.7 64-64 64s-64-28.7-64-64V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"
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
