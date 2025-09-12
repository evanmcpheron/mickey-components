import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartTreeMapIcon: React.FC<
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
                  d="M0 80c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm0 240c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zM304 32h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48m-48 208c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48zm48 112h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48"
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
                  d="M176 80v112H48V80zM48 32C21.5 32 0 53.5 0 80v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm128 288v112H48V320zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48zM304 80h160v32H304zm-48 0v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48m208 160v32H304v-32zm-160-48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm0 208h160v32H304zm-48 0v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48"
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
                  d="M176 64c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM48 32C21.5 32 0 53.5 0 80v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm128 272c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V320c0-8.8 7.2-16 16-16zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48zM304 64h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16m-48 16v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48m208 144c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm-160-32c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm0 192h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-48 16v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48"
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
                  d="M176 48c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM48 32C21.5 32 0 53.5 0 80v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm128 256c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48zM304 48h160c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32m-48 32v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48m208 128c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm-160-16c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm0 176h160c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32m-48 32v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48"
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
                  d="M304 192c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 80c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm256 0c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48zm48 272h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48"
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
