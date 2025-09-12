import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlusLargeIcon: React.FC<
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
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h192v192c0 17.7 14.3 32 32 32s32-14.3 32-32V288h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H288z"
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
                  d="M488 232c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v208c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h208V24c0-13.3 10.7-24 24-24s24 10.7 24 24v208z"
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
                  d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v224H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h224v224c0 8.8 7.2 16 16 16s16-7.2 16-16V272h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H272z"
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
                  d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v240H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h240v240c0 4.4 3.6 8 8 8s8-3.6 8-8V264h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H264z"
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
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h192v192c0 17.7 14.3 32 32 32s32-14.3 32-32V288h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H288z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
