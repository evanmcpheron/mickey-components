import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MicrophoneLinesIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 96v160c0 53 43 96 96 96s96-43 96-96h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96m224 144v16c0 70.7-57.3 128-128 128S64 326.7 64 256v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240 128v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c0 26.5-21.5 48-48 48s-48-21.5-48-48V96c0-26.5 21.5-48 48-48s48 21.5 48 48h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16zM96 96v160c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96S96 43 96 96M64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128S64 326.7 64 256z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 160v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c0-35.3-28.7-64-64-64s-64 28.7-64 64v160c0 35.3 28.7 64 64 64s64-28.7 64-64h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16zm32 16v80c0 53-43 96-96 96s-96-43-96-96V96c0-53 43-96 96-96s96 43 96 96v80M48 192c8.8 0 16 7.2 16 16v48c0 70.7 57.3 128 128 128s128-57.3 128-128v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 83-63.1 151.2-144 159.2V480h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64.8C95.1 407.2 32 339 32 256v-48c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272 112V96c0-44.2-35.8-80-80-80s-80 35.8-80 80v160c0 44.2 35.8 80 80 80s80-35.8 80-80h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72v-48h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72v-48h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8zm16 8v136c0 53-43 96-96 96s-96-43-96-96V96c0-53 43-96 96-96s96 43 96 96zM40 192c4.4 0 8 3.6 8 8v56c0 79.5 64.5 144 144 144s144-64.5 144-144v-56c0-4.4 3.6-8 8-8s8 3.6 8 8v56c0 85.7-67.4 155.6-152 159.8V496h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80.2C99.4 411.6 32 341.7 32 256v-56c0-4.4 3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M208 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V96zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v-32zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v-32zm-144-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128S64 326.7 64 256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 0c-53 0-96 43-96 96v160c0 53 43 96 96 96s96-43 96-96h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96"
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
