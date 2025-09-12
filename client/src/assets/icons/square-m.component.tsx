import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareMIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm75.5 105.9L224 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L243.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L144 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8s20.7.3 26.8 8.8z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm139.5 41.9L224 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L243.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L144 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8s20.7.3 26.8 8.8z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm125.1 38.8L224 276.1l98.9-141.3c4-5.7 11.3-8.2 17.9-6.1S352 137 352 144v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V194.8l-82.9 118.4c-3 4.3-7.9 6.8-13.1 6.8s-10.1-2.5-13.1-6.8L128 194.8V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-7 4.5-13.2 11.2-15.3s13.9.4 17.9 6.1"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm110.5 35.4L224 290.2l113.5-158.8c2-2.8 5.6-4 9-3s5.6 4.1 5.6 7.6v240c0 4.4-3.6 8-8 8s-8-3.6-8-8V161L230.5 308.6c-1.5 2.1-3.9 3.4-6.5 3.4s-5-1.2-6.5-3.4L112 161v215c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-3.5 2.2-6.6 5.6-7.6s6.9.1 9 3z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm75.5 105.9L224 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L243.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L144 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8s20.7.3 26.8 8.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112.6 129.2c9.9-3.2 20.7.3 26.8 8.8L224 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L243.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L144 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8"
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
