import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BracketRoundRightIcon: React.FC<
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
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M37.4 46.2c-9.8 14.8-5.9 34.6 8.9 44.4C71.9 107.7 128 167 128 256S71.9 404.3 46.2 421.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C120.1 449 192 371.8 192 256S120.1 62.9 81.8 37.4c-14.8-9.8-34.6-5.9-44.4 8.8"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M35.4 43.7c-6.8 11.4-3 26.1 8.3 32.9C76.7 96.3 144 160.7 144 256S76.7 415.7 43.7 435.4c-11.4 6.8-15.1 21.5-8.3 32.9s21.5 15.1 32.9 8.3C110 451.8 192 374.1 192 256S110 60.2 68.3 35.4c-11.4-6.8-26.1-3-32.9 8.3"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M33.9 40.4c-4.2 7.8-1.3 17.5 6.4 21.7C80.5 83.8 160 153.4 160 256S80.5 428.2 40.4 449.9c-7.8 4.2-10.7 13.9-6.4 21.7s13.9 10.7 21.7 6.4C100.8 453.6 192 375.3 192 256S100.8 58.4 55.6 33.9c-7.8-4.2-17.5-1.3-21.7 6.4z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32.8 36.4c-2 4-.4 8.8 3.6 10.7 23.1 11.5 58.2 36.1 87.4 71.7C153 154.5 176 200.7 176 256s-23 101.5-52.2 137.1c-29.2 35.7-64.3 60.2-87.4 71.7-4 2-5.6 6.8-3.6 10.7s6.8 5.6 10.7 3.6c24.9-12.5 61.8-38.3 92.6-75.9C167 365.7 192 315.9 192 256s-25-109.7-55.8-147.3c-30.8-37.5-67.7-63.4-92.6-75.9-4-2-8.8-.4-10.7 3.6z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M37.4 46.2c-9.8 14.8-5.9 34.6 8.9 44.4C71.9 107.7 128 167 128 256S71.9 404.3 46.2 421.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C120.1 449 192 371.8 192 256S120.1 62.9 81.8 37.4c-14.8-9.8-34.6-5.9-44.4 8.8"
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
