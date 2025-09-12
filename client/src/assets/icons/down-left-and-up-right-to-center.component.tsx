import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownLeftAndUpRightToCenterIcon: React.FC<
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
                  d="M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39zM72 272h144c13.3 0 24 10.7 24 24v144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2S62.3 272 72 272"
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
                  d="M296 256h148.7c19.5 0 35.3-15.8 35.3-35.3 0-9.4-3.7-18.3-10.3-25L441.9 168l54.1-54.1c18.7-18.7 18.7-49.1 0-67.9l-30.1-30C447.2-2.7 416.8-2.7 398 16l-54 54.1-27.7-27.8c-6.6-6.6-15.6-10.3-25-10.3-19.5 0-35.3 15.8-35.3 35.3V216c0 22.1 17.9 40 40 40m95-71 23 23H304V97.9l23 23c9.4 9.4 24.6 9.4 33.9 0l71-71L462.1 80l-71 71c-9.4 9.4-9.4 24.6 0 33.9zM67.3 256C47.8 256 32 271.8 32 291.3c0 9.4 3.7 18.3 10.3 25L70.1 344 16 398.1c-18.7 18.7-18.7 49.1 0 67.9l30.1 30c18.7 18.7 49.1 18.7 67.9 0l54-54.1 27.7 27.7c6.6 6.6 15.6 10.3 25 10.3 19.5 0 35.3-15.8 35.3-35.3V296c0-22.1-17.9-40-40-40zm53.7 71-23-23h110v110.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0l-71 71L49.9 432l71-71c9.4-9.4 9.4-24.6 0-33.9z"
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
                  d="M447 256c18.2 0 33-14.8 33-33 0-8.7-3.5-17.1-9.7-23.3L442.6 172l55.7-55.7c15.6-15.6 15.6-40.9 0-56.6l-46-46c-15.6-15.7-41-15.7-56.6 0L340 69.4l-27.7-27.7c-6.2-6.2-14.6-9.7-23.3-9.7-18.2 0-33 14.8-33 33v159c0 17.7 14.3 32 32 32zm.7-33.7c.2.2.3.4.3.7 0 .5-.4 1-1 1H288V65c0-.5.4-1 1-1 .3 0 .5.1.7.3l39 39c6.2 6.2 16.4 6.2 22.6 0l67-67c3.1-3.1 8.2-3.1 11.3 0l46.1 46.1c3.1 3.1 3.1 8.2 0 11.3l-67 67c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3zM65 256c-18.2 0-33 14.8-33 33 0 8.7 3.5 17.1 9.7 23.3L69.4 340l-55.7 55.7c-15.7 15.6-15.7 41 0 56.6l46.1 46.1c15.6 15.6 40.9 15.6 56.6 0l55.6-55.8 27.7 27.7c6.2 6.2 14.6 9.7 23.3 9.7 18.2 0 33-14.8 33-33V288c0-17.7-14.3-32-32-32zm-1 33c0-.5.4-1 1-1h159v159c0 .5-.4 1-1 1-.3 0-.5-.1-.7-.3l-39-39c-6.2-6.2-16.4-6.2-22.6 0l-67 67c-3.1 3.1-8.2 3.1-11.3 0l-46.1-46c-3.1-3.1-3.1-8.2 0-11.3l67-67c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-39-39c-.2-.2-.3-.4-.3-.7z"
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
                  d="M470.6 11.3c-12.5-12.5-32.8-12.5-45.3 0L352 84.7l-25.4-25.4c-12.5-12.5-32.8-12.5-45.3 0-6 6-9.4 14.1-9.4 22.6V208c0 17.7 14.3 32 32 32h126.2c8.5 0 16.6-3.4 22.6-9.4 12.5-12.5 12.5-32.8 0-45.3L427.3 160l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3zm-33.9 11.3c6.2-6.2 16.4-6.2 22.6 0l30.1 30.1c6.2 6.2 6.2 16.4 0 22.6l-79 79c-3.1 3.1-3.1 8.2 0 11.3l31 31c6.2 6.2 6.2 16.4 0 22.6-3 3-7.1 4.7-11.3 4.7H304c-8.8 0-16-7.2-16-16V82c0-4.2 1.7-8.3 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l31 31c3.1 3.1 8.2 3.1 11.3 0l79-79zM41.4 500.7c12.5 12.5 32.8 12.5 45.3 0l73.3-73.4 25.4 25.4c12.5 12.5 32.8 12.5 45.3 0 6-6 9.4-14.1 9.4-22.6V304c0-17.7-14.3-32-32-32H81.9c-8.5 0-16.6 3.4-22.6 9.4-12.5 12.5-12.5 32.8 0 45.3L84.7 352l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3l30.1 30.1zm33.9-11.3c-6.2 6.2-16.4 6.2-22.6 0l-30.1-30.1c-6.2-6.2-6.2-16.4 0-22.6l79-79c3.1-3.1 3.1-8.2 0-11.3l-31-31c-6.2-6.2-6.2-16.4 0-22.6 3-3 7.1-4.7 11.3-4.7H208c8.8 0 16 7.2 16 16v126c0 4.2-1.7 8.3-4.7 11.3-6.2 6.2-16.4 6.2-22.6 0l-31-31c-3.1-3.1-8.2-3.1-11.3 0l-79 79z"
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
                  d="M216 272H72c-9.7 0-18.5 5.8-22.2 14.8S48.1 306.1 55 313l39 39-87 87c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l87-87 39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V296c0-13.3-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M473 7c-9.4-9.4-24.6-9.4-33.9 0l-87 87L313 55c-6.9-6.9-17.2-8.9-26.2-5.2S272 62.3 272 72v144c0 13.3 10.7 24 24 24h144c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-39-39 87-87c9.4-9.4 9.4-24.6 0-33.9z"
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
