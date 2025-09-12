import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsSplitUpAndLeftIcon: React.FC<
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
                  d="M246.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 109.3V384c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-70.7 0-128-57.3-128-128 0-35.3-28.7-64-64-64H109.3l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256H224c23.3 0 45.2 6.2 64 17.1V109.3l-41.4 41.4z"
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
                  d="M241 137c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L303 7c9.4-9.4 24.6-9.4 33.9 0l96 96c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55V392c0 39.8 32.2 72 72 72h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72c-66.3 0-120-53.7-120-120v-8c0-39.8-32.2-72-72-72H81.9l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 305c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l96-96c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55H224c27 0 51.9 8.9 72 24v-206l-55 55z"
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
                  d="M235.3 123.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0l96 96c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L336 54.6V400c0 44.2 35.8 80 80 80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-61.9 0-112-50.1-112-112v-16c0-44.2-35.8-80-80-80H54.6l68.7 68.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-96-96c-3-3-4.7-7.1-4.7-11.3s1.7-8.3 4.7-11.3l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 272H224c31.3 0 59.7 12.9 80 33.6v-251z"
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
                  d="M229.7 109.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l96-96c3.1-3.1 8.2-3.1 11.3 0l96 96c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L328 27.3V408c0 48.6 39.4 88 88 88h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88c-57.4 0-104-46.6-104-104v-24c0-48.6-39.4-88-88-88H27.3l82.3 82.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-96-96C.8 292.2 0 290.1 0 288s.8-4.2 2.3-5.7l96-96c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 280H224c37.1 0 69.6 19.4 88 48.6V27.3l-82.3 82.3z"
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
                  d="M246.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 109.3V384c0-47.4-25.7-88.7-64-110.9V109.3l-41.4 41.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M9.4 310.6c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256H224c70.7 0 128 57.3 128 128 0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-70.7 0-128-57.3-128-128 0-35.3-28.7-64-64-64H109.3l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96z"
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
