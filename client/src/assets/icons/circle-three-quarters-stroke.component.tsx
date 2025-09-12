import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleThreeQuartersStrokeIcon: React.FC<
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
                  d="M256 64v160c0 17.7 14.3 32 32 32h160c0-106-86-192-192-192M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M256 48v176c0 17.7 14.3 32 32 32h176c0-114.9-93.1-208-208-208M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M477.7 288H272c-26.5 0-48-21.5-48-48V34.3C115.4 49.8 32 143.2 32 256c0 123.7 100.3 224 224 224 112.8 0 206.2-83.4 221.7-192m2.3-32c0-123.7-100.3-224-224-224v208c0 8.8 7.2 16 16 16zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M495.5 272H280c-22.1 0-40-17.9-40-40V16.5C114.9 24.8 16 128.8 16 256c0 132.5 107.5 240 240 240 127.2 0 231.2-98.9 239.5-224m.5-16c0-132.5-107.5-240-240-240v216c0 13.3 10.7 24 24 24zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
                  d="M256 0c141.4 0 256 114.6 256 256h-64c0-106-86-192-192-192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256H288c-17.7 0-32-14.3-32-32z"
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
