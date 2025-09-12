import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const QuotesIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 0C39.4 0 0 39.4 0 88v104c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48H64v-8c0-13.3 10.7-24 24-24h8c17.7 0 32-14.3 32-32S113.7 0 96 0zm176 0c-48.6 0-88 39.4-88 88v104c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48h-32v-8c0-13.3 10.7-24 24-24h8c17.7 0 32-14.3 32-32S289.7 0 272 0zm312 424V320c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h32v8c0 13.3-10.7 24-24 24h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32h8c48.6 0 88-39.4 88-88m-264 88c48.6 0 88-39.4 88-88V320c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h32v8c0 13.3-10.7 24-24 24h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96C0 43 43 0 96 0h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8c-26.5 0-48 21.5-48 48h48c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V96m48 72v24h48v-48H48zm128-72c0-53 43-96 96-96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8c-26.5 0-48 21.5-48 48h48c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48h-48c-26.5 0-48-21.5-48-48V96m48 48v48h48v-48zm352 272c0 53-43 96-96 96h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8c26.5 0 48-21.5 48-48h-48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v96m-48-48v-48h-48v48zm-128 48c0 53-43 96-96 96h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8c26.5 0 48-21.5 48-48h-48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v96m-48-72v-24h-48v48h48z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 88C0 39.4 39.4 0 88 0h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8c-30.9 0-56 25.1-56 56v10.7C37 97 42.4 96 48 96h32c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V88m32 56v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16m128-56c0-48.6 39.4-88 88-88h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8c-30.9 0-56 25.1-56 56v10.7c5-1.8 10.4-2.7 16-2.7h32c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V88m32 80v8c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zm384 256c0 48.6-39.4 88-88 88h-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h8c30.9 0 56-25.1 56-56v-10.7c-5 1.8-10.4 2.7-16 2.7h-32c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v88m-32-56v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16m-128 56c0 48.6-39.4 88-88 88h-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h8c30.9 0 56-25.1 56-56v-10.7c-5 1.8-10.4 2.7-16 2.7h-32c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v88m-32-80v-8c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 80C0 35.8 35.8 0 80 0h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8c-35.3 0-64 28.7-64 64v28.2C24.5 100.6 35.7 96 48 96h32c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80m16 64v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32m144-64c0-44.2 35.8-80 80-80h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8c-35.3 0-64 28.7-64 64v28.2c8.5-7.6 19.7-12.2 32-12.2h32c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V80m16 80v16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32zm400 272c0 44.2-35.8 80-80 80h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8h8c35.3 0 64-28.7 64-64v-28.2c-8.5 7.6-19.7 12.2-32 12.2h-32c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v96m-16-64v-32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32m-144 64c0 44.2-35.8 80-80 80h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8h8c35.3 0 64-28.7 64-64v-28.2c-8.5 7.6-19.7 12.2-32 12.2h-32c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v96m-16-80v-16c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M256 320c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v104c0 48.6-39.4 88-88 88h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c13.3 0 24-10.7 24-24v-8h-32c-26.5 0-48-21.5-48-48zm232 192h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c13.3 0 24-10.7 24-24v-8h-32c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v104c0 48.6-39.4 88-88 88"
                />
                <path
                  className="aps-icon-foreground"
                  d="M88 0C39.4 0 0 39.4 0 88v104c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48H64v-8c0-13.3 10.7-24 24-24h8c17.7 0 32-14.3 32-32S113.7 0 96 0zm176 0c-48.6 0-88 39.4-88 88v104c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48h-32v-8c0-13.3 10.7-24 24-24h8c17.7 0 32-14.3 32-32S289.7 0 272 0z"
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
