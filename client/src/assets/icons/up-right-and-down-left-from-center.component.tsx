import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpRightAndDownLeftFromCenterIcon: React.FC<
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
                  d="M344 0h144c13.3 0 24 10.7 24 24v144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0M168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"
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
                  d="M323.3 0C303.8 0 288 15.8 288 35.3c0 9.4 3.7 18.3 10.3 25L326.1 88 264 150.1c-18.7 18.7-18.7 49.1 0 67.9l30.1 30c18.7 18.7 49.1 18.7 67.9 0l62-62.1 27.7 27.7c6.6 6.6 15.6 10.3 25 10.3 19.5 0 35.3-15.8 35.3-35.3V40c0-22.1-17.9-40-40-40zM377 71l-23-23h110v110.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0l-79 79-30.2-30.1 79-79c9.4-9.4 9.4-24.6 0-33.9zM188.7 512c19.5 0 35.3-15.8 35.3-35.3 0-9.4-3.7-18.3-10.3-25L185.9 424l62.1-62.1c18.7-18.7 18.7-49.1 0-67.9l-30.1-30c-18.7-18.7-49.1-18.7-67.9 0l-62 62.1-27.7-27.8c-6.6-6.6-15.6-10.3-25-10.3C15.8 288 0 303.8 0 323.3V472c0 22.1 17.9 40 40 40zM135 441l23 23H48V353.9l23 23c9.4 9.4 24.6 9.4 33.9 0l79-79 30.2 30.1-79 79c-9.4 9.4-9.4 24.6 0 33.9z"
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
                  d="M321 0c-18.2 0-33 14.8-33 33 0 8.7 3.5 17.1 9.7 23.3L325.4 84l-71.7 71.7c-15.6 15.6-15.6 40.9 0 56.6l46.1 46.1c15.6 15.6 40.9 15.6 56.6 0l71.6-71.8 27.7 27.7c6.2 6.2 14.6 9.7 23.3 9.7 18.2 0 33-14.8 33-33V32c0-17.7-14.3-32-32-32zm-1 33c0-.5.4-1 1-1h159v159c0 .5-.4 1-1 1-.3 0-.5-.1-.7-.3l-39-39c-6.2-6.2-16.4-6.2-22.6 0l-83 83c-3.1 3.1-8.2 3.1-11.3 0l-46.1-46.1c-3.1-3.1-3.1-8.2 0-11.3l83-83c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-39-39c-.2-.2-.3-.4-.3-.7M32 512h159c18.2 0 33-14.8 33-33 0-8.7-3.5-17.1-9.7-23.3L186.6 428l71.7-71.7c15.6-15.6 15.6-40.9 0-56.6l-46.1-46.1c-15.6-15.6-40.9-15.6-56.6 0L84 325.4l-27.7-27.7c-6.2-6.2-14.6-9.7-23.3-9.7-18.2 0-33 14.8-33 33v159c0 17.7 14.3 32 32 32m160-33c0 .5-.4 1-1 1H32V321c0-.5.4-1 1-1 .3 0 .5.1.7.3l39 39c6.2 6.2 16.4 6.2 22.6 0l83-83c3.1-3.1 8.2-3.1 11.3 0l46.1 46.1c3.1 3.1 3.1 8.2 0 11.3l-83 83c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l39 39c.2.2.3.4.3.7"
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
                  d="M305.4 236.7c12.5 12.5 32.8 12.5 45.3 0l81.3-81.4 25.4 25.4c12.5 12.5 32.8 12.5 45.3 0 6-6 9.4-14.1 9.4-22.6V32c0-17.7-14.3-32-32-32H353.9c-8.5 0-16.6 3.4-22.6 9.4-12.5 12.5-12.5 32.8 0 45.3L356.7 80l-81.4 81.4c-12.5 12.5-12.5 32.8 0 45.3l30.1 30.1zm33.9-11.3c-6.2 6.2-16.4 6.2-22.6 0l-30.1-30.1c-6.2-6.2-6.2-16.4 0-22.6l87-87c3.1-3.1 3.1-8.2 0-11.3l-31-31c-6.2-6.2-6.2-16.4 0-22.6 3-3 7.1-4.7 11.3-4.7H480c8.8 0 16 7.2 16 16v126c0 4.2-1.7 8.3-4.7 11.3-6.2 6.2-16.4 6.2-22.6 0l-31-31c-3.1-3.1-8.2-3.1-11.3 0l-87 87zm-132.7 49.9c-12.5-12.5-32.8-12.5-45.3 0L80 356.7l-25.4-25.4c-12.5-12.5-32.8-12.5-45.3 0-6 6-9.4 14.1-9.4 22.6V480c0 17.7 14.3 32 32 32h126.2c8.5 0 16.6-3.4 22.6-9.4 12.5-12.5 12.5-32.8 0-45.3L155.3 432l81.4-81.4c12.5-12.5 12.5-32.8 0-45.3l-30.1-30.1zm-33.9 11.3c6.2-6.2 16.4-6.2 22.6 0l30.1 30.1c6.2 6.2 6.2 16.4 0 22.6l-87 87c-3.1 3.1-3.1 8.2 0 11.3l31 31c6.2 6.2 6.2 16.4 0 22.6-3 3-7.1 4.7-11.3 4.7H32c-8.8 0-16-7.2-16-16v-126c0-4.2 1.7-8.3 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l31 31c3.1 3.1 8.2 3.1 11.3 0l87-87z"
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
                  d="M24 512h144c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-39-39 87-87c9.4-9.4 9.4-24.6 0-33.9l-32-32c-9.4-9.4-24.6-9.4-33.9 0l-87 87L41 327c-6.9-6.9-17.2-8.9-26.2-5.2S0 334.3 0 344v144c0 13.3 10.7 24 24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M488 0H344c-9.7 0-18.5 5.8-22.2 14.8S320.1 34.1 327 41l39 39-87 87c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l87-87 39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V24c0-13.3-10.7-24-24-24z"
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
