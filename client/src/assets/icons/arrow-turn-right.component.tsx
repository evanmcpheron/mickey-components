import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowTurnRightIcon: React.FC<
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
                  d="M374.6 374.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l73.4-73.3H96c-17.7 0-32 14.3-32 32v160c0 17.7-14.3 32-32 32S0 465.7 0 448V288c0-53 43-96 96-96h306.7l-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3z"
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
                  d="M377 369c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87H88c-22.1 0-40 17.9-40 40V456c0 13.3-10.7 24-24 24S0 469.3 0 456V288c0-48.6 39.4-88 88-88h342.1l-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L505 207c9.4 9.4 9.4 24.6 0 33.9z"
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
                  d="M379.3 363.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L457.4 240H80c-26.5 0-48 21.5-48 48v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-44.2 35.8-80 80-80h377.4L356.7 107.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6z"
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
                  d="M357.7 381.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L484.7 232H72c-30.9 0-56 25.1-56 56v184c0 4.4-3.6 8-8 8s-8-3.6-8-8V288c0-39.8 32.2-72 72-72h412.7L346.3 77.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l152 152c3.1 3.1 3.1 8.2 0 11.3l-152 152z"
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
                  d="M402.7 256H96c-17.7 0-32 14.3-32 32v160c0 17.7-14.3 32-32 32S0 465.7 0 448V288c0-53 43-96 96-96h306.7l32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M329.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 329.4 329.4c-12.5 12.5-12.5 32.8 0 45.3z"
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
