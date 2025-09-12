import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RectangleProIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm40 128h56c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m56 80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v32zm80-56c0-13.3 10.7-24 24-24h56c35.3 0 64 28.7 64 64 0 21.9-11 41.2-27.7 52.7l24.1 38.5c7 11.2 3.6 26-7.6 33.1s-26 3.6-33.1-7.6l-33-52.7H288v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184m48 56h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm200-80c48.6 0 88 39.4 88 88v16c0 48.6-39.4 88-88 88s-88-39.4-88-88v-16c0-48.6 39.4-88 88-88m-40 88v16c0 22.1 17.9 40 40 40s40-17.9 40-40v-16c0-22.1-17.9-40-40-40s-40 17.9-40 40"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 64h56c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m56 80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v32zm80-56c0-13.3 10.7-24 24-24h56c35.3 0 64 28.7 64 64 0 21.9-11 41.2-27.7 52.7l24.1 38.5c7 11.2 3.6 26-7.6 33.1s-26 3.6-33.1-7.6l-33-52.7H288v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184m48 56h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm200-80c48.6 0 88 39.4 88 88v16c0 48.6-39.4 88-88 88s-88-39.4-88-88v-16c0-48.6 39.4-88 88-88m-40 88v16c0 22.1 17.9 40 40 40s40-17.9 40-40v-16c0-22.1-17.9-40-40-40s-40 17.9-40 40"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 64h48c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16m48 96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v64zm96-80c0-8.8 7.2-16 16-16h48c35.3 0 64 28.7 64 64 0 23.2-12.4 43.6-30.9 54.8l35.7 47.6c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2L304 288h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V176m32 80h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32zm208-96c44.2 0 80 35.8 80 80v32c0 44.2-35.8 80-80 80s-80-35.8-80-80v-32c0-44.2 35.8-80 80-80m-48 80v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 64h56c30.9 0 56 25.1 56 56s-25.1 56-56 56H96v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m56 96c22.1 0 40-17.9 40-40s-17.9-40-40-40H96v80zm264-24c0-39.8 32.2-72 72-72s72 32.2 72 72v48c0 39.8-32.2 72-72 72s-72-32.2-72-72zm72-56c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56s56-25.1 56-56v-48c0-30.9-25.1-56-56-56m-232-16h56c30.9 0 56 25.1 56 56 0 24.2-15.3 44.8-36.8 52.6l35.9 71.8c2 4 .4 8.8-3.6 10.7s-8.8.4-10.7-3.6L307 271.9c-1 .1-2 .1-3 .1h-48v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m56 96c22.1 0 40-17.9 40-40s-17.9-40-40-40h-48v80z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm40 128h56c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m56 80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v32zm80-56c0-13.3 10.7-24 24-24h56c35.3 0 64 28.7 64 64 0 21.9-11 41.2-27.7 52.7l24.1 38.5c7 11.2 3.6 26-7.6 33.1s-26 3.6-33.1-7.6l-33-52.7H288v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184m48 56h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm200-80c48.6 0 88 39.4 88 88v16c0 48.6-39.4 88-88 88s-88-39.4-88-88v-16c0-48.6 39.4-88 88-88m-40 88v16c0 22.1 17.9 40 40 40s40-17.9 40-40v-16c0-22.1-17.9-40-40-40s-40 17.9-40 40"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 184v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h32c35.3 0 64-28.7 64-64s-28.7-64-64-64h-56c-13.3 0-24 10.7-24 24m48 56v-32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm112-56v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h18.7l33 52.7c7 11.2 21.8 14.7 33.1 7.6s14.7-21.8 7.6-33.1l-24.1-38.5C373 265.2 384 245.9 384 224c0-35.3-28.7-64-64-64h-56c-13.3 0-24 10.7-24 24m48 56v-32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm200-80c-48.6 0-88 39.4-88 88v16c0 48.6 39.4 88 88 88s88-39.4 88-88v-16c0-48.6-39.4-88-88-88m-40 88c0-22.1 17.9-40 40-40s40 17.9 40 40v16c0 22.1-17.9 40-40 40s-40-17.9-40-40z"
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
