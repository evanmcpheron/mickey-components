import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowTurnLeftIcon: React.FC<
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
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256H416c17.7 0 32 14.3 32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-53-43-96-96-96H109.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3z"
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
                  d="M135 369c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-87-87H424c22.1 0 40 17.9 40 40V456c0 13.3 10.7 24 24 24s24-10.7 24-24V288c0-48.6-39.4-88-88-88H81.9l87-87c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 207c-9.4 9.4-9.4 24.6 0 33.9z"
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
                  d="M132.7 363.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 240H432c26.5 0 48 21.5 48 48v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-44.2-35.8-80-80-80H54.6l100.7-100.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6z"
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
                  d="M154.3 381.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 232H440c30.9 0 56 25.1 56 56v184c0 4.4 3.6 8 8 8s8-3.6 8-8V288c0-39.8-32.2-72-72-72H27.3L165.7 77.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3l152 152z"
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
                  d="M109.3 256H416c17.7 0 32 14.3 32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-53-43-96-96-96H109.3l-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M182.6 374.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 224l105.3 105.4c12.5 12.5 12.5 32.8 0 45.3z"
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
