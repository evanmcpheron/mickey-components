import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartSimpleHorizontalIcon: React.FC<
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
                  d="M400 320c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48zM208 480c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48zm176-368V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48"
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
                  d="M400 240H48v32h352zm48 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM208 400H48v32h160zm48 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zm80-320V80H48v32zm0 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48"
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
                  d="M416 240c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16zm32 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM224 400c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16zm32 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zm96-320V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16m-16 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48"
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
                  d="M432 240c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32zm16 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM240 400c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32zm16 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zm112-320V80c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32m-32 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48"
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
                  d="M400 320c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zM256 432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48z"
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
