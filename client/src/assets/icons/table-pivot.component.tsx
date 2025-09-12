import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TablePivotIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h64v128H0zm448 64H160V32h288c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192h128v224h320zm-33.2 86.1c-2.5 6-8.3 9.9-14.8 9.9h-16v48c0 26.5-21.5 48-48 48h-48v16c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-32-32c-6.2-6.2-6.2-16.4 0-22.6l32-32c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8v16h48c8.8 0 16-7.2 16-16v-48h-16c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l32-32c6.2-6.2 16.4-6.2 22.6 0l32 32c4.6 4.6 5.9 11.5 3.5 17.4"
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
                  d="M464 416c0 8.8-7.2 16-16 16H128V192H0v224c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160v128h304zM64 32C28.7 32 0 60.7 0 96v64h128V32zm350.8 214.1c2.5-6 1.1-12.9-3.5-17.4l-32-32c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h16v48c0 8.8-7.2 16-16 16h-48v-16c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-32 32c-6.2 6.2-6.2 16.4 0 22.6l32 32c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8v-16h48c26.5 0 48-21.5 48-48v-48h16c6.5 0 12.3-3.9 14.8-9.9"
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
                  d="M160 64v96h320V96c0-17.7-14.3-32-32-32zm0 128v256h288c17.7 0 32-14.3 32-32V192zM128 64H64c-17.7 0-32 14.3-32 32v64h96zM32 416c0 17.7 14.3 32 32 32h64V192H32zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm446.8 182.1c-2.5 6-8.3 9.9-14.8 9.9h-16v48c0 26.5-21.5 48-48 48h-48v16c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-32-32c-6.2-6.2-6.2-16.4 0-22.6l32-32c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8v16h48c8.8 0 16-7.2 16-16v-48h-16c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l32-32c6.2-6.2 16.4-6.2 22.6 0l32 32c4.6 4.6 5.9 11.5 3.5 17.4"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v64h112V48zM16 176v240c0 26.5 21.5 48 48 48h64V176zm128 0v288h304c26.5 0 48-21.5 48-48V176zm352-16V96c0-26.5-21.5-48-48-48H144v112zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm445.7 189.7c-3.1 3.1-8.2 3.1-11.3 0L408 259.3V336c0 22.1-17.9 40-40 40h-76.7l26.3 26.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-40-40c-3.1-3.1-3.1-8.2 0-11.3l40-40c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L291.3 360H368c13.3 0 24-10.7 24-24v-76.7l-26.3 26.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l40-40c3.1-3.1 8.2-3.1 11.3 0l40 40c3.1 3.1 3.1 8.2 0 11.3z"
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
                  d="M0 192v224c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160v128h288v256H128V192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32h64v128H0V96c0-35.3 28.7-64 64-64m350.8 214.1c-2.5 6-8.3 9.9-14.8 9.9h-16v48c0 26.5-21.5 48-48 48h-48v16c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-32-32c-6.2-6.2-6.2-16.4 0-22.6l32-32c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8v16h48c8.8 0 16-7.2 16-16v-48h-16c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l32-32c6.2-6.2 16.4-6.2 22.6 0l32 32c4.6 4.6 5.9 11.5 3.5 17.4"
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
