import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileWaveformIcon: React.FC<
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
                  d="M96 0C60.7 0 32 28.7 32 64v224h112c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 49.7-99.4c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8l27.6 55.2H352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-6.1 0-11.6-3.4-14.3-8.8L240 275.8l-49.7 99.4c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8L134.1 320H32v128c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H288c-17.7 0-32-14.3-32-32V0zm192 0v128h128z"
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
                  d="M384 464H128c-8.8 0-16-7.2-16-16v-96H64v96c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C326.7 6.7 310.5 0 293.5 0H128C92.7 0 64 28.7 64 64v176h48V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16M276.8 228.1c-4.4-7.7-12.7-12.3-21.5-12.1s-16.8 5.3-20.8 13.3l-45.5 91-25-37.6c-4.5-6.7-12-10.7-20-10.7H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h107.2l40.8 61.3c4.7 7.1 12.9 11.2 21.5 10.6s16.1-5.6 20-13.2l43.9-87.9 9.8 17.1c4.3 7.5 12.2 12.1 20.8 12.1h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-26.1z"
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
                  d="M416 448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-64H64v64c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L318.1 14.1c-9-9-21.2-14.1-33.9-14.1H128C92.7 0 64 28.7 64 64v224h32V64c0-17.7 14.3-32 32-32h128v112c0 26.5 21.5 48 48 48h112zm-.5-288H304c-8.8 0-16-7.2-16-16V32.5c2.8.7 5.4 2.1 7.4 4.2l115.9 115.9c2.1 2.1 3.5 4.6 4.2 7.4M270.3 264.8c-2.7-5.4-8.3-8.8-14.3-8.8s-11.6 3.4-14.3 8.8l-52.4 104.9-32.5-43.3c-3-4-7.8-6.4-12.8-6.4H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h120l43.2 57.6c3.3 4.4 8.7 6.8 14.2 6.3s10.4-3.8 12.9-8.8l49.7-99.3 17.7 35.4c2.7 5.4 8.3 8.8 14.3 8.8h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-54.1z"
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
                  d="M384 496H128c-26.5 0-48-21.5-48-48V336H64v112c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L302.1 14.1c-9-9-21.2-14.1-33.9-14.1H128C92.7 0 64 28.7 64 64v192h16V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V448c0 26.5-21.5 48-48 48m41.1-336H312c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4l131.9 132q1.35 1.35 2.4 2.7zm-161.9 68.4c-1.4-2.8-4.2-4.5-7.3-4.4s-5.9 1.9-7.1 4.7l-57.9 130-40.1-66.8c-1.4-2.4-4-3.9-6.9-3.9H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h131.5l45.7 76.1c1.5 2.6 4.4 4.1 7.3 3.9s5.6-2 6.8-4.7l57.1-128.5 24.4 48.8c1.4 2.7 4.1 4.4 7.2 4.4h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-59.1l-29.8-59.6z"
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
                  d="M64 64c0-35.3 28.7-64 64-64h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V320h65.2l41.4 82.7c4.2 8.5 13 13.6 22.5 13.2s17.8-6.3 21.3-15.1l44.2-110.4 8.1 16.2c4.1 8.1 12.4 13.3 21.5 13.3h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-41.4l-25.4-50.7c-4.2-8.5-13-13.6-22.5-13.2s-17.8 6.3-21.3 15.1l-44 110.4-24.1-48.2c-4.1-8.1-12.4-13.3-21.5-13.3H64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 160 288 0v128c0 17.7 14.3 32 32 32zm-170.5 61.3c-4.2-8.5-13-13.6-22.5-13.2s-17.8 6.3-21.3 15.1l-44.1 110.3-24.1-48.2c-4.1-8.1-12.4-13.3-21.5-13.3H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h105.2l41.4 82.7c4.2 8.5 13 13.6 22.5 13.2s17.8-6.3 21.3-15.1l44.2-110.4 8.1 16.2c4.1 8.1 12.4 13.3 21.5 13.3h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-41.4l-25.4-50.7z"
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
