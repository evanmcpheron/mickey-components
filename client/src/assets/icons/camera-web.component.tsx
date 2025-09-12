import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraWebIcon: React.FC<
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
                  d="M344.2 413.1C406.6 373.3 448 303.5 448 224 448 100.3 347.7 0 224 0S0 100.3 0 224c0 79.5 41.4 149.3 103.8 189.1l-58.2 40.7c-11.4 8-16.4 22.5-12.2 35.8S50 512 64 512h320c14 0 26.3-9.1 30.5-22.4s-.7-27.8-12.2-35.8l-58.2-40.7zM224 352a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-288a160 160 0 1 1 0 320 160 160 0 1 1 0-320m-48 160c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48"
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
                  d="M224 384a168 168 0 1 0 0-336 168 168 0 1 0 0 336m0 48c-29.1 0-56.9-5.8-82.2-16.2L104.7 464h238.6l-37.1-48.2C280.9 426.2 253.1 432 224 432m216-216c0 72.8-36 137.2-91.3 176.4l62.3 81c5.6 7.2 6.5 17 2.5 25.2S401.1 512 392 512H56c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l62.3-81C44 353.2 8 288.8 8 216 8 96.7 104.7 0 224 0s216 96.7 216 216m-144 0a72 72 0 1 0-144 0 72 72 0 1 0 144 0m-192 0a120 120 0 1 1 240 0 120 120 0 1 1-240 0"
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
                  d="M224 32a192 192 0 1 1 0 384 192 192 0 1 1 0-384m133.5 371.9C412.4 363 448 297.7 448 224 448 100.3 347.7 0 224 0S0 100.3 0 224c0 73.7 35.6 139 90.5 179.9L37 473.4c-5.6 7.2-6.5 17-2.5 25.2S46.9 512 56 512h336c9.1 0 17.5-5.2 21.5-13.4s3.1-18-2.5-25.2zm-27.1 17.3 45.4 58.8H72.2l45.3-58.9c31.7 17.2 68 26.9 106.5 26.9s74.8-9.7 106.5-26.9zM224 112a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288"
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
                  d="M432 224a208 208 0 1 0-416 0 208 208 0 1 0 416 0m16 0c0 73.7-35.6 139-90.5 179.9l53.5 69.5c5.6 7.2 6.5 17 2.5 25.2S401.1 512 392 512H56c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l53.5-69.5C35.6 363 0 297.7 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224M224 448c-44.3 0-85.6-12.9-120.4-35.1l-54 70.2c-1.9 2.4-2.2 5.7-.8 8.4s4.1 4.5 7.2 4.5h336c3 0 5.8-1.7 7.2-4.5s1-6-.8-8.4l-54-70.2C309.6 435.1 268.3 448 224 448m128-224a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m88 0c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72 4.4 0 8 3.6 8 8s-3.6 8-8 8c-30.9 0-56 25.1-56 56"
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
                  d="M224 352a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-48-128c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 224c0 79.5-41.4 149.3-103.8 189.1l58.2 40.7c11.4 8 16.4 22.5 12.2 35.8S398 512 384 512H64c-14 0-26.3-9.1-30.5-22.4s.7-27.8 12.2-35.8l58.2-40.7C41.4 373.3 0 303.5 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224M224 384a160 160 0 1 0 0-320 160 160 0 1 0 0 320"
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
