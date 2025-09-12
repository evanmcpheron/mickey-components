import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleQuarterIcon: React.FC<
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
                  d="M32 256c-17.7 0-32.2-14.4-30-31.9C16.4 108.2 108.2 16.4 224.1 2 241.6-.2 256 14.3 256 32v192c0 17.7-14.3 32-32 32z"
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
                  d="M208 53.6V208H53.6c18-76.3 78.1-136.4 154.4-154.4M2 224.1C-.2 241.6 14.3 256 32 256h192c17.7 0 32-14.3 32-32V32c0-17.7-14.4-32.2-31.9-30C108.2 16.4 16.4 108.2 2 224.1"
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
                  d="M224 34.3V224H34.3c14-98.1 91.6-175.7 189.7-189.7M2 224.1C-.2 241.6 14.3 256 32 256h192c17.7 0 32-14.3 32-32V32c0-17.7-14.4-32.2-31.9-30C108.2 16.4 16.4 108.2 2 224.1"
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
                  d="M17.8 226C31.4 117.5 117.5 31.4 226 17.8c6.7-.8 14 4.7 14 14.1V224c0 8.8-7.2 16-16 16H32c-9.4 0-15-7.3-14.1-14zM2 224.1C-.2 241.6 14.3 256 32 256h192c17.7 0 32-14.3 32-32V32c0-17.7-14.4-32.2-31.9-30C108.2 16.4 16.4 108.2 2 224.1"
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
                  d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256h256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256C0 114.6 114.6 0 256 0v256z"
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
