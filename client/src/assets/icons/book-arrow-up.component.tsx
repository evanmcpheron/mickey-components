import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookArrowUpIcon: React.FC<
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
                  d="M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96zm64 320c0 17.7 14.3 32 32 32h256v-64h-88V209.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V384H96c-17.7 0-32 14.3-32 32"
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
                  d="M88 0C39.4 0 0 39.4 0 88v336h.4c-.3 2.6-.4 5.3-.4 8 0 44.2 35.8 80 80 80h96v-48H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h96v-48H80c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40h304c4.4 0 8 3.6 8 8v288c0 4.4-3.6 8-8 8h-88v48h64v64h-64v48h120c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-69.4c18.9-9 32-28.3 32-50.6V56c0-30.9-25.1-56-56-56zm55 215c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L216 488c0 13.3 10.7 24 24 24s24-10.7 24-24V209.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0z"
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h112v-32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h112v-32H64c-11.7 0-22.6 3.1-32 8.6V64c0-17.7 14.3-32 32-32h336c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16h-96v32h80v64h-80v32h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-66.7c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48zm68.7 228.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l68.7-68.7V496c0 8.8 7.2 16 16 16s16-7.2 16-16V182.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0z"
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
                  d="M56 0C25.1 0 0 25.1 0 56v400c0 30.9 25.1 56 56 56h136v-16H56c-22.1 0-40-17.9-40-40s17.9-40 40-40h136v-16H56c-15.7 0-29.8 6.4-40 16.8V56c0-22.1 17.9-40 40-40h352c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H288v16h112v80H288v16h152c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-80.8c18.3-3.7 32-19.8 32-39.2V40c0-22.1-17.9-40-40-40zm74.3 234.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l90.4-90.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8V155.3l90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-104-104c-3.1-3.1-8.2-3.1-11.3 0z"
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
                  d="M216 384H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h120zm48 64h152v-64H264z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h120v-64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h120V209.9l-39 39c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39V384h152c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96m168 448v64h152c17.7 0 32-14.3 32-32s-14.3-32-32-32H264"
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
