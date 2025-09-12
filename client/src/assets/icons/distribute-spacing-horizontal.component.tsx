import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DistributeSpacingHorizontalIcon: React.FC<
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
                  d="M32 24C32 10.7 42.7 0 56 0s24 10.7 24 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24zm128 120c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zM456 0c13.3 0 24 10.7 24 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24"
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
                  d="M456 0c-13.3 0-24 10.7-24 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24M304 368h-96V144h96zm48-224c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48zM80 24C80 10.7 69.3 0 56 0S32 10.7 32 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M464 0c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16M320 368c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16zm32-224c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48zM64 16c0-8.8-7.2-16-16-16S32 7.2 32 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M40 512c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v496c0 4.4 3.6 8 8 8m104-368c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32zm-16 224c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48zm336 136c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8z"
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
                  d="M160 144c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M56 0C42.7 0 32 10.7 32 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V24C80 10.7 69.3 0 56 0m400 0c-13.3 0-24 10.7-24 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24"
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
