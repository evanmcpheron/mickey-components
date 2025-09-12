import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SwapIcon: React.FC<
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
                  d="M237 141.6c-5.3 11.2-16.6 18.4-29 18.4h-48v192c0 35.3 28.7 64 64 64s64-28.7 64-64V160c0-70.7 57.3-128 128-128s128 57.3 128 128v192h48c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1l-80 96c-6.1 7.3-15.1 11.5-24.6 11.5s-18.5-4.2-24.6-11.5l-80-96c-7.9-9.5-9.7-22.8-4.4-34.1s16.6-18.4 29-18.4h48V160c0-35.3-28.7-64-64-64s-64 28.7-64 64v192c0 70.7-57.3 128-128 128S96 422.7 96 352V160H48c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1l80-96C109.5 4.2 118.5 0 128 0s18.5 4.2 24.6 11.5l80 96c7.9 9.5 9.7 22.8 4.4 34.1"
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
                  d="M240 119c0 22.6-18.3 41-41 41h-47v200c0 39.8 32.2 72 72 72s72-32.2 72-72V152c0-66.3 53.7-120 120-120s120 53.7 120 120v200h47c22.6 0 41 18.3 41 41 0 10.9-4.3 21.3-12 29l-83 83c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-83-83c-7.7-7.7-12-18.1-12-29 0-22.6 18.3-41 41-41h47V152c0-39.8-32.2-72-72-72s-72 32.2-72 72v208c0 66.3-53.7 120-120 120s-120-53.7-120-120V160H57c-22.6 0-41-18.3-41-41 0-10.9 4.3-21.3 12-29l83-83c4.5-4.5 10.6-7 17-7s12.5 2.5 17 7l83 83c7.7 7.7 12 18.1 12 29m-166.1-7H182l-54-54.1zm384 288 54.1 54.1 54.1-54.1z"
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
                  d="M208 126.7c0 18.4-14.9 33.3-33.3 33.3H128v200c0 48.6 39.4 88 88 88s88-39.4 88-88V152c0-66.3 53.7-120 120-120s120 53.7 120 120v200h46.7c18.4 0 33.3 14.9 33.3 33.3 0 8.3-3.1 16.3-8.7 22.4l-75.5 83c-3 3.3-7.3 5.2-11.8 5.2s-8.8-1.9-11.8-5.2l-75.5-83c-5.6-6.1-8.7-14.1-8.7-22.4 0-18.4 14.9-33.3 33.3-33.3H512V152c0-48.6-39.4-88-88-88s-88 39.4-88 88v208c0 66.3-53.7 120-120 120S96 426.3 96 360V160H49.3C30.9 160 16 145.1 16 126.7c0-8.3 3.1-16.3 8.7-22.4l75.5-83c3-3.3 7.3-5.2 11.8-5.2s8.8 1.9 11.8 5.2l75.5 83c5.6 6.1 8.7 14.1 8.7 22.4m-96 1.3h62.7c.7 0 1.3-.6 1.3-1.3q0-.45-.3-.9l-63.7-70-63.7 70c-.2.2-.3.6-.3.9 0 .7.6 1.3 1.3 1.3zm416 256h-62.7c-.7 0-1.3.6-1.3 1.3q0 .45.3.9l63.7 70 63.7-70c.2-.2.3-.6.3-.9 0-.7-.6-1.3-1.3-1.3z"
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
                  d="M200 118.3c0 14.2-11.5 25.7-25.7 25.7H120v224c0 53 43 96 96 96s96-43 96-96V144c0-61.9 50.1-112 112-112s112 50.1 112 112v224h54.3c14.2 0 25.7 11.5 25.7 25.7 0 5.9-2.1 11.7-5.8 16.3l-62.9 76.9c-4.7 5.8-11.8 9.1-19.3 9.1s-14.5-3.4-19.3-9.1L445.8 410c-3.8-4.6-5.8-10.3-5.8-16.3 0-14.2 11.5-25.7 25.7-25.7H520V144c0-53-43-96-96-96s-96 43-96 96v224c0 61.9-50.1 112-112 112s-112-50.1-112-112V144H49.7C35.5 144 24 132.5 24 118.3c0-5.9 2.1-11.7 5.8-16.3l62.9-76.9c4.8-5.8 11.8-9.1 19.3-9.1s14.5 3.4 19.3 9.1l62.9 76.9c3.8 4.6 5.8 10.3 5.8 16.3m-16 0c0-2.2-.8-4.4-2.2-6.1l-62.9-76.9c-1.7-2.1-4.2-3.3-6.9-3.3s-5.2 1.2-6.9 3.3l-62.9 76.9c-1.4 1.7-2.2 3.9-2.2 6.1 0 5.3 4.3 9.7 9.7 9.7h124.6c5.3 0 9.7-4.3 9.7-9.7m416 275.4c0-5.4-4.3-9.7-9.7-9.7H465.7c-5.4 0-9.7 4.3-9.7 9.7 0 2.2.8 4.4 2.2 6.1l62.9 76.9c1.7 2.1 4.2 3.3 6.9 3.3s5.2-1.2 6.9-3.3l62.9-76.9c1.4-1.7 2.2-3.9 2.2-6.1"
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
                  d="M432 352c-12.4 0-23.7 7.2-29 18.4s-3.6 24.5 4.4 34.1l80 96c6.1 7.3 15.1 11.5 24.6 11.5s18.5-4.2 24.6-11.5l80-96c7.9-9.5 9.7-22.8 4.4-34.1S604.4 352 592 352h-48V160c0-70.7-57.3-128-128-128S288 89.3 288 160v96h64v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 160c12.4 0 23.7-7.2 29-18.4s3.6-24.5-4.4-34.1l-80-96C146.5 4.2 137.5 0 128 0s-18.5 4.2-24.6 11.5l-80 96c-7.9 9.5-9.7 22.8-4.4 34.1S35.6 160 48 160h48v192c0 70.7 57.3 128 128 128s128-57.3 128-128v-96h-64v96c0 35.3-28.7 64-64 64s-64-28.7-64-64V160z"
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
