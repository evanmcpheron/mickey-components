import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const QuoteRightIcon: React.FC<
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
                  d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136m-256 0c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136"
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
                  d="M448 296c0 66.3-53.7 120-120 120h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c39.8 0 72-32.2 72-72v-10c-5.1 1.3-10.5 2-16 2h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136m-48-72v-64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16M64 240h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16m128-48v104c0 66.3-53.7 120-120 120H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c39.8 0 72-32.2 72-72v-10c-5.1 1.3-10.5 2-16 2H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64z"
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
                  d="M448 304c0 61.9-50.1 112-112 112h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c44.2 0 80-35.8 80-80v-24.6c-9.4 5.4-20.3 8.6-32 8.6h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v144m-32-112v-32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32zM192 304c0 61.9-50.1 112-112 112H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c44.2 0 80-35.8 80-80v-24.6c-9.4 5.4-20.3 8.6-32 8.6H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v144m-32-112v-32c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32z"
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
                  d="M448 296c0 66.3-53.7 120-120 120h-16c-4.4 0-8-3.6-8-8s3.6-8 8-8h16c57.4 0 104-46.6 104-104v-34.7c-13.2 16.3-33.4 26.7-56 26.7h-48c-39.8 0-72-32.2-72-72v-48c0-39.8 32.2-72 72-72h48c39.8 0 72 32.2 72 72v128m-16-96v-32c0-30.9-25.1-56-56-56h-48c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56h48c30.9 0 56-25.1 56-56zm-240 96c0 66.3-53.7 120-120 120H56c-4.4 0-8-3.6-8-8s3.6-8 8-8h16c57.4 0 104-46.6 104-104v-34.7c-13.2 16.3-33.4 26.7-56 26.7H72c-39.8 0-72-32.2-72-72v-48c0-39.8 32.2-72 72-72h48c39.8 0 72 32.2 72 72v128m-16-96v-32c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56h48c30.9 0 56-25.1 56-56z"
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
                  d="M72 416c66.3 0 120-53.7 120-120V160c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h64v8c0 30.9-25.1 56-56 56h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M328 416c66.3 0 120-53.7 120-120V160c0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h64v8c0 30.9-25.1 56-56 56h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
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
