import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DeleteRightIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-35.3 28.7-64 64-64h306.7c17 0 33.3 6.7 45.3 18.7l150.6 150.7c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L416 429.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64zm143 47c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M370.7 64c17 0 33.3 6.7 45.3 18.7l150.6 150.7c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L416 429.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM48 128v256c0 8.8 7.2 16 16 16h306.7c4.2 0 8.3-1.7 11.3-4.7L521.4 256 382.1 116.7c-3-3-7.1-4.7-11.3-4.7H64c-8.8 0-16 7.2-16 16m95 47c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 128c0-17.7 14.3-32 32-32h306.7c8.5 0 16.6 3.4 22.6 9.4L544 256 393.4 406.6c-6 6-14.1 9.4-22.6 9.4H64c-17.7 0-32-14.3-32-32zm32-64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h306.7c17 0 33.3-6.7 45.3-18.7l150.6-150.7c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6L416 82.7c-12-12-28.3-18.7-45.3-18.7zm84.7 116.7c-6.2 6.2-6.2 16.4 0 22.6l52.7 52.7-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L246.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 128c0-26.5 21.5-48 48-48h306.7c12.7 0 24.9 5.1 33.9 14.1l150.7 150.6c3 3 4.7 7.1 4.7 11.3s-1.7 8.3-4.7 11.3L404.7 417.9c-9 9-21.2 14.1-33.9 14.1H64c-26.5 0-48-21.5-48-48zm550.6 105.4L416 82.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h306.7c17 0 33.3-6.7 45.3-18.7l150.6-150.7c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6m-420.3-55c-3.1 3.1-3.1 8.2 0 11.3l66.4 66.3-66.3 66.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l66.3-66.3 66.3 66.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L235.3 256l66.3-66.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 244.7l-66.3-66.3c-3.1-3.1-8.2-3.1-11.3 0z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 128c0-35.3 28.7-64 64-64h306.7c17 0 33.3 6.7 45.3 18.7l150.6 150.7c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L416 429.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64zm143 47c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M177 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47z"
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
