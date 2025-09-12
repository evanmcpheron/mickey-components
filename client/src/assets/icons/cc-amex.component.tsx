import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CcAmexIcon: React.FC<
  IconProps & { type: "brands" | Dimensions }
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
          case "brands":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-1.1h-61.7l-31.9-35.1-31.9 35.1H246.8V267.1H181l81.7-184.7h78.6l28.1 63.2V82.4h97.2l16.9 47.6 17-47.6H576V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80zm440.4-21.7 42.2-46.3 42 46.3H576l-68-72.1 68-72.1h-50.6l-42 46.7-41.5-46.7h-51.4l67.5 72.5-67.4 71.6v-33.1h-83v-22.2h80.9v-32.3h-80.9v-22.4h83v-33.1h-122v143.2zm96.3-72 39.3 41.9v-83.3zm-36.3-92 36.9-100.6v100.6H576V103h-60.2l-32.2 89.3-31.9-89.3h-61.2v143.1L327.3 103h-51.2l-62.4 143.3h43l11.9-28.7h65.9l12 28.7h82.7V146L466 246.3zM282 185.4l19.5-46.9 19.4 46.9z"
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
