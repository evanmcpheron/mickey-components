import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UploadIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM64 352h128c0 35.3 28.7 64 64 64s64-28.7 64-64h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64m368 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M280 360c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9l-95 95c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 7c9.4-9.4 24.6-9.4 33.9 0L409 143c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-95-95V360zm32-8v-48h136c35.3 0 64 28.7 64 64v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-80c0-35.3 28.7-64 64-64h136v48H64c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16zm72 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272 54.6V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V54.6L139.3 155.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zM208 352H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H304v-32h144c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h144zm176 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M264 27.3V376c0 4.4-3.6 8-8 8s-8-3.6-8-8V27.3L133.7 141.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l128-128c3.1-3.1 8.2-3.1 11.3 0l128 128c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0zM216 336H64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H296v-16h152c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h152zm216 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M288 352v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64zm120 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 416c17.7 0 32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.3-73.4V384c0 17.7 14.3 32 32 32"
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
