import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookArrowRightIcon: React.FC<
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
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V232h110.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H448V32c0-17.7-14.3-32-32-32H96m352 184v48H248c-13.3 0-24-10.7-24-24s10.7-24 24-24zM96 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M88 0C39.4 0 0 39.4 0 88v336h.4c-.3 2.6-.4 5.3-.4 8 0 44.2 35.8 80 80 80h344c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-69.4c18.9-9 32-28.3 32-50.6v-56h-48v56c0 4.4-3.6 8-8 8H80c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40h304c4.4 0 8 3.6 8 8v72h48V56c0-30.9-25.1-56-56-56zm280 400v64H80c-17.7 0-32-14.3-32-32s14.3-32 32-32zm185-289c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h278.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80z"
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-66.7c18.6-6.6 32-24.4 32-45.3v-96h-32v96c0 8.8-7.2 16-16 16H64c-11.7 0-22.6 3.1-32 8.6V64c0-17.7 14.3-32 32-32h336c8.8 0 16 7.2 16 16v96h32V48c0-26.5-21.5-48-48-48zm320 416v64H64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm155.3-315.3c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l68.7 68.7H272c-8.8 0-16 7.2-16 16s7.2 16 16 16h313.4l-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6z"
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
                  d="M56 0C25.1 0 0 25.1 0 56v400c0 30.9 25.1 56 56 56h384c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-80.8c18.3-3.7 32-19.8 32-39.2V256h-16v120c0 13.3-10.7 24-24 24H56c-15.7 0-29.8 6.4-40 16.8V56c0-22.1 17.9-40 40-40h352c13.3 0 24 10.7 24 24v120h16V40c0-22.1-17.9-40-40-40zm344 416v80H56c-22.1 0-40-17.9-40-40s17.9-40 40-40zM533.7 98.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l90.3 90.4H264c-4.4 0-8 3.6-8 8s3.6 8 8 8h348.7l-90.3 90.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="M553 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h310.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h320v-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h320c17.7 0 32-14.3 32-32V232H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h200V32c0-17.7-14.3-32-32-32H96"
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
