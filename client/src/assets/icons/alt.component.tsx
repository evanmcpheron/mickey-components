import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AltIcon: React.FC<
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
                  d="M448 64c-9.7 0-18.9 4.4-25 12L176.6 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c9.7 0 18.9-4.4 25-12l246.4-308H608c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M467.9 120.4c4.6-5.3 11.2-8.4 18.2-8.4H616c13.3 0 24-10.7 24-24s-10.7-24-24-24H486.1c-21 0-41 9.2-54.7 25.1L172.1 391.6c-4.6 5.3-11.2 8.4-18.2 8.4H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h129.9c21 0 41-9.2 54.7-25.1zM440 400c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M462 107.7c6.1-7.4 15.2-11.7 24.8-11.7H624c8.8 0 16-7.2 16-16s-7.2-16-16-16H486.7c-19.2 0-37.4 8.6-49.5 23.5L178 404.3c-6.1 7.4-15.2 11.7-24.8 11.7H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h137.3c19.2 0 37.4-8.6 49.5-23.5zM432 416c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M463.8 94.5c7.6-9.2 18.9-14.5 30.8-14.5H632c4.4 0 8-3.6 8-8s-3.6-8-8-8H494.6c-16.7 0-32.5 7.5-43.2 20.3L176.2 417.5c-7.6 9.2-18.9 14.5-30.8 14.5H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h137.4c16.7 0 32.5-7.5 43.2-20.3zM424 432c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M416 416c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H448c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M423 76c6.1-7.6 15.3-12 25-12h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H463.4L217 436c-6.1 7.6-15.3 12-25 12H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h144.6z"
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
