import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartScatterIcon: React.FC<
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
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16zm128 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0M160 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v352c0 39.8 32.2 72 72 72h416c13.3 0 24-10.7 24-24s-10.7-24-24-24H72c-13.3 0-24-10.7-24-24zm144 136a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0M160 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v352c0 44.2 35.8 80 80 80h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48zm160 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m56-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0M160 344a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 39.8 32.2 72 72 72h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H72c-30.9 0-56-25.1-56-56zm200 120a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80m96 160a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0m160 64a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80m32-128a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0M184 320a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80"
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
                  d="M384 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-224 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
