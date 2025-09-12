import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraSecurityIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64h-74l59 36.9c12.1 7.6 17.7 22.2 13.8 36S366.3 512 352 512H96c-14.3 0-26.8-9.5-30.8-23.2s1.7-28.4 13.8-36l59-36.8H64c-35.3 0-64-28.7-64-64zm128 144a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0"
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
                  d="M384 48c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h40.1l-36.5 59.4c-4.6 7.4-4.8 16.7-.5 24.3s12.3 12.3 21 12.3H360c8.7 0 16.7-4.7 21-12.3s4-16.9-.5-24.3L343.9 416H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm223.5 416 29.5 48H130.9l29.5-48h127zM336 208a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-112-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M384 32c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zm-40.1 384H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h40.1l-36.5 59.4c-4.6 7.4-4.8 16.7-.5 24.3s12.3 12.3 21 12.3H360c8.7 0 16.7-4.7 21-12.3s4-16.9-.5-24.3zm-202.2 0h164.6l39.4 64H102.3zM224 304a96 96 0 1 1 0-192 96 96 0 1 1 0 192M96 208a128 128 0 1 0 256 0 128 128 0 1 0-256 0"
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
                  d="M384 16c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm-40.1 400H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h40.1l-36.5 59.4c-4.6 7.4-4.8 16.7-.5 24.3s12.3 12.3 21 12.3H360c8.7 0 16.7-4.7 21-12.3s4-16.9-.5-24.3zm-18.8 0 41.7 67.8c1.5 2.5 1.6 5.6.2 8.1s-4.1 4.1-7 4.1H88c-2.9 0-5.6-1.6-7-4.1s-1.3-5.6.2-8.1l41.7-67.8zM352 208a128 128 0 1 0-256 0 128 128 0 1 0 256 0M224 96a112 112 0 1 1 0 224 112 112 0 1 1 0-224"
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
                  d="M224 304a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64h-74l59 36.9c12.1 7.6 17.7 22.2 13.8 36S366.3 512 352 512H96c-14.3 0-26.8-9.5-30.8-23.2s1.7-28.4 13.8-36l59-36.8H64c-35.3 0-64-28.7-64-64zm224 272a128 128 0 1 0 0-256 128 128 0 1 0 0 256"
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
