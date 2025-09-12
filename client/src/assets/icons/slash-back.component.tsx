import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SlashBackIcon: React.FC<
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
                  d="M16.1 4.2C.8 13-4.6 32.5 4.2 47.9l256 448c8.8 15.3 28.3 20.7 43.7 11.9s20.7-28.3 11.9-43.7l-256-448C51 .8 31.5-4.6 16.1 4.2"
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
                  d="M11.9 3.3C.4 10-3.4 24.7 3.3 36.1l272 464c6.7 11.4 21.4 15.3 32.8 8.6s15.3-21.4 8.6-32.8l-272-464C38 .4 23.3-3.4 11.9 3.3"
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
                  d="M7.8 2.3c-7.6 4.5-10 14.4-5.5 22l288 480c4.5 7.6 14.4 10 22 5.5s10-14.4 5.5-22L29.7 7.8c-4.5-7.6-14.4-10-22-5.5z"
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
                  d="M3.8 1.2C0 3.5-1.1 8.4 1.2 12.2l304 496c2.3 3.8 7.2 4.9 11 2.6s4.9-7.2 2.6-11l-304-496C12.5 0 7.6-1.1 3.8 1.2"
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
                  d="M16.1 4.2C.8 13-4.6 32.5 4.2 47.9l256 448c8.8 15.3 28.3 20.7 43.7 11.9s20.7-28.3 11.9-43.7l-256-448C51 .8 31.5-4.6 16.1 4.2"
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
