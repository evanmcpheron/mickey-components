import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlayPauseIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96v320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6zM448 96c0-17.7-14.3-32-32-32s-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M432 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24zm144 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24zM112 381.8V130.2L263 256zm4.5-310.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96v320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M448 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16zM288 256 96 416V96zM116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96v320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 412.9c0 10.6 8.6 19.1 19.1 19.1 4.5 0 8.9-1.6 12.4-4.5l186-157.4c4.2-3.5 6.5-8.7 6.5-14.1s-2.4-10.6-6.5-14.1l-186-157.4c-3.5-2.9-7.8-4.5-12.4-4.5C88.6 80 80 88.6 80 99.1zm-16 0V99.1C64 79.7 79.7 64 99.1 64c8.3 0 16.3 2.9 22.7 8.3l186 157.4c7.7 6.6 12.2 16.2 12.2 26.3s-4.5 19.8-12.2 26.3l-186 157.4c-6.3 5.4-14.4 8.3-22.7 8.3-19.4 0-35.1-15.7-35.1-35.1M432 72v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8m144 0v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M416 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32m128 0c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96v320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6z"
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
