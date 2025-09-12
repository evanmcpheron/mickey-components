import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartCandlestickIcon: React.FC<
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
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16zm256-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm64 176v64c0 17.7 14.3 32 32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c-17.7 0-32 14.3-32 32m-224-96c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32V80c0-8.8-7.2-16-16-16s-16 7.2-16 16z"
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
                  d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v352c0 39.8 32.2 72 72 72h416c13.3 0 24-10.7 24-24s-10.7-24-24-24H72c-13.3 0-24-10.7-24-24zm272-8c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm64 176v64c0 17.7 14.3 32 32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c-17.7 0-32 14.3-32 32m-224-96c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32V80c0-8.8-7.2-16-16-16s-16 7.2-16 16z"
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
                  d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v352c0 44.2 35.8 80 80 80h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48zm288 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v48.8c-18.3 3.7-32 19.8-32 39.2v80c0 19.4 13.8 35.5 32 39.2V304c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.8c18.3-3.7 32-19.8 32-39.2v-80c0-19.4-13.8-35.5-32-39.2V48M176 64c-8.8 0-16 7.2-16 16v48.8c-18.3 3.7-32 19.8-32 39.2v112c0 19.4 13.8 35.5 32 39.2V368c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.8c18.3-3.7 32-19.8 32-39.2V168c0-19.4-13.8-35.5-32-39.2V80c0-8.8-7.2-16-16-16m144 72v80c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8m104 88h16c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m-8-32v.8c-18.3 3.7-32 19.8-32 39.2v48c0 19.4 13.8 35.5 32 39.2V368c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.8c18.3-3.7 32-19.8 32-39.2v-48c0-19.4-13.8-35.5-32-39.2V144c0-8.8-7.2-16-16-16s-16 7.2-16 16zm-232-32c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8z"
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
                  d="M8 32c4.4 0 8 3.6 8 8v368c0 30.9 25.1 56 56 56h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-39.8 0-72-32.2-72-72V40c0-4.4 3.6-8 8-8m280 80c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-32m8 200v-56h-8c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h8V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h8c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-8v56c0 4.4-3.6 8-8 8s-8-3.6-8-8m104-88v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m24 96h-8c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h8v-56c0-4.4 3.6-8 8-8s8 3.6 8 8v56h8c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-8v56c0 4.4-3.6 8-8 8s-8-3.6-8-8zM208 160c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zm-24 160v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-8c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h8V72c0-4.4 3.6-8 8-8s8 3.6 8 8v56h8c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32z"
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
                  d="M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M304 32c8.8 0 16 7.2 16 16v48c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32V48c0-8.8 7.2-16 16-16m112 160v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m-288-32c0-17.7 14.3-32 32-32V80c0-8.8 7.2-16 16-16s16 7.2 16 16v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c-17.7 0-32-14.3-32-32z"
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
