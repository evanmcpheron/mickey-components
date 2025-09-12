import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowPointerIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 55.2V426c0 12.2 9.9 22 22 22 6.3 0 12.4-2.7 16.6-7.5l82.6-94.5 58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320h118.1c12.2 0 22.1-9.9 22.1-22.1 0-6.3-2.7-12.3-7.4-16.5L38.6 37.9c-4.3-3.8-9.7-5.9-15.4-5.9C10.4 32 0 42.4 0 55.2"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 272h85.8L48 110.4v246.4l59.9-68.4C117 278 130.2 272 144 272M0 426V55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5 0 12.2-9.9 22.1-22.1 22.1H170.5l59.1 126.8c5.6 12 .4 26.3-11.6 31.9s-26.3.4-31.9-11.6l-59.4-127.5-88.1 100.8c-4.2 4.8-10.2 7.5-16.6 7.5-12.2 0-22-9.9-22-22"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 426V55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5 0 12.2-9.9 22.1-22.1 22.1H161.5l61.1 137.5c3.6 8.1 0 17.5-8.1 21.1s-17.5 0-21.1-8.1l-61-137.2-93.8 107.1c-4.2 4.8-10.2 7.5-16.6 7.5-12.2 0-22-9.9-22-22M32 72v328l86.4-100.8c6.1-7.1 15-11.2 24.3-11.2H272z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 304h153.9c3.4 0 6.1-2.7 6.1-6.1 0-1.7-.7-3.4-2-4.5L28 49.8c-1.3-1.2-3-1.8-4.8-1.8-4 0-7.2 3.2-7.2 7.2V426c0 3.3 2.7 6 6 6 1.7 0 3.4-.7 4.5-2.1L132 309.5c3-3.5 7.4-5.5 12-5.5M0 426V55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5 0 12.2-9.9 22.1-22.1 22.1h-145l70.4 148.6c1.9 4 .2 8.8-3.8 10.7s-8.8.2-10.7-3.8l-70.5-149-99.7 113.9c-4.2 4.8-10.2 7.5-16.6 7.5-12.2 0-22-9.9-22-22"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m121.2 346 58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H144z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 426V55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5 0 12.2-9.9 22.1-22.1 22.1H144L38.6 440.5c-4.2 4.8-10.2 7.5-16.6 7.5-12.2 0-22-9.9-22-22"
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
