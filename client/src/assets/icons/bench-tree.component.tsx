import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BenchTreeIcon: React.FC<
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
                  d="M608 96c0 5.1-.4 10.2-1.2 15.1 20.1 14.6 33.2 38.2 33.2 64.9 0 44.2-35.8 80-80 80h-16v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V256h-16c-44.2 0-80-35.8-80-80 0-26.7 13.1-50.3 33.2-64.9-.8-4.9-1.2-10-1.2-15.1 0-53 43-96 96-96s96 43 96 96M32 224c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm0 128h320c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64H96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M578.7 150c-14.7-10.6-22.1-28.5-19.3-46.4.4-2.5.6-5 .6-7.6 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 2.6.2 5.2.6 7.6 2.8 17.9-4.6 35.8-19.3 46.4-8.2 5.9-13.3 15.3-13.3 26 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-10.6-5.1-20.1-13.3-26M608 96c0 5.1-.4 10.2-1.2 15.1 20.1 14.6 33.2 38.2 33.2 64.9 0 44.2-35.8 80-80 80h-24v232c0 13.3-10.7 24-24 24s-24-10.7-24-24V256h-24c-44.2 0-80-35.8-80-80 0-26.7 13.1-50.3 33.2-64.9-.8-4.9-1.2-10-1.2-15.1 0-53 43-96 96-96s96 43 96 96M80 272h224v-32H80zm-48-48c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 14.9-10.2 27.4-24 31v33h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88H80v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-33c-13.8-3.6-24-16.1-24-31zm72 96v32h176v-32z"
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
                  d="M575.2 106.1c-1.9 11.9 3.1 23.9 12.9 30.9 12.1 8.8 19.9 23 19.9 39 0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48 0-16 7.8-30.2 19.9-38.9 9.8-7.1 14.7-19 12.9-30.9-.5-3.3-.8-6.7-.8-10.1 0-35.3 28.7-64 64-64s64 28.7 64 64c0 3.5-.3 6.8-.8 10.1zm31.6 5c.8-4.9 1.2-10 1.2-15.1 0-53-43-96-96-96s-96 43-96 96c0 5.1.4 10.2 1.2 15.1-20.1 14.6-33.2 38.2-33.2 64.9 0 44.2 35.8 80 80 80h32v240c0 8.8 7.2 16 16 16s16-7.2 16-16V256h32c44.2 0 80-35.8 80-80 0-26.7-13.1-50.3-33.2-64.9M64 224h256v64H64zm0 96v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h256v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32m224 0v48H96v-48z"
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
                  d="M591 108.6c-.9 6 1.5 11.9 6.4 15.5 16.2 11.6 26.6 30.6 26.6 51.9 0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64 0-21.3 10.4-40.3 26.6-51.9 4.9-3.5 7.4-9.5 6.4-15.5-.6-4.1-1-8.3-1-12.6 0-44.2 35.8-80 80-80s80 35.8 80 80c0 4.3-.3 8.5-1 12.6m15.8 2.5c.8-4.9 1.2-10 1.2-15.1 0-53-43-96-96-96s-96 43-96 96c0 5.1.4 10.2 1.2 15.1-20.1 14.6-33.2 38.2-33.2 64.9 0 44.2 35.8 80 80 80h40v248c0 4.4 3.6 8 8 8s8-3.6 8-8V256h40c44.2 0 80-35.8 80-80 0-26.7-13.1-50.3-33.2-64.9M64 208h256c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m8 112v64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v104c0 4.4 3.6 8 8 8s8-3.6 8-8V400h272v104c0 4.4 3.6 8 8 8s8-3.6 8-8V400h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64v-64h8c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32zm224 0v64H88v-64z"
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
                  d="M606.8 111.1c.8-4.9 1.2-10 1.2-15.1 0-53-43-96-96-96s-96 43-96 96c0 5.1.4 10.2 1.2 15.1-20.1 14.6-33.2 38.2-33.2 64.9 0 44.2 35.8 80 80 80h16v224c0 17.7 14.3 32 32 32s32-14.3 32-32V256h16c44.2 0 80-35.8 80-80 0-26.7-13.1-50.3-33.2-64.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 192h256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M0 384c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64H96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c-17.7 0-32-14.3-32-32"
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
