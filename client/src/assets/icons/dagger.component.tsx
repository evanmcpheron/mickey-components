import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DaggerIcon: React.FC<
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
                  d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H48c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.9 0 38.7-13.4 45.3-32h197.4c6.6 18.6 24.4 32 45.3 32 26.5 0 48-21.5 48-48s-21.5-48-48-48H224zm-96 192v190.8c0 10.5 2.9 20.8 8.5 29.7l35.1 56.2c4.4 7 12.1 11.3 20.4 11.3s16-4.3 20.4-11.3l35.1-56.2c5.6-8.9 8.5-19.2 8.5-29.7V224H128"
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
                  d="M192 0c13.3 0 24 10.7 24 24v104h120c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48H96c0 26.5-21.5 48-48 48S0 202.5 0 176s21.5-48 48-48h120V24c0-13.3 10.7-24 24-24m32 397.9V208h48v189.9c0 11.5-3.5 22.7-10.1 32.1l-50.2 71.7c-4.5 6.4-11.8 10.2-19.7 10.2s-15.2-3.8-19.7-10.2L122.1 430c-6.6-9.4-10.1-20.6-10.1-32.1V208h48v189.9c0 1.6.5 3.2 1.4 4.6l30.6 43.7 30.6-43.7c.9-1.3 1.4-2.9 1.4-4.6"
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
                  d="M208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v112H48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48v-16h192v16c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48H208zM48 160h16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16m272 0h16c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16zm-80 237.9c0 4.9-1.5 9.7-4.3 13.8L192 474.1l-43.7-62.4c-2.8-4-4.3-8.8-4.3-13.8V192h-32v205.9c0 11.5 3.5 22.7 10.1 32.1l50.2 71.7c4.5 6.4 11.8 10.2 19.7 10.2s15.2-3.8 19.7-10.2l50.2-71.7c6.6-9.4 10.1-20.6 10.1-32.1V192h-32z"
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
                  d="M200 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v120H40c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40v-24h224v24c0 22.1 17.9 40 40 40s40-17.9 40-40-17.9-40-40-40H200zM40 144h24v24c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24m280 0h24c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24zm-176 32h-16v237.9c0 8.2 2.5 16.2 7.2 22.9l50.2 71.7c1.5 2.1 3.9 3.4 6.6 3.4s5.1-1.3 6.6-3.4l50.2-71.7c4.7-6.7 7.2-14.7 7.2-22.9V176h-16v237.9c0 4.9-1.5 9.7-4.3 13.8L192 490.1l-43.7-62.4c-2.8-4-4.3-8.8-4.3-13.8V176"
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
                  d="M152 192h-24v222.8c0 10.5 2.9 20.8 8.5 29.7l35.1 56.2c4.4 7 12.1 11.3 20.4 11.3s16-4.3 20.4-11.3l35.1-56.2c5.6-8.9 8.5-19.2 8.5-29.7V192H152"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H48c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.9 0 38.7-13.4 45.3-32h197.4c6.6 18.6 24.4 32 45.3 32 26.5 0 48-21.5 48-48s-21.5-48-48-48H224z"
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
