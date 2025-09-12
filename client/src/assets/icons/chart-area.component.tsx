import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartAreaIcon: React.FC<
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
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16zm96 288h288c17.7 0 32-14.3 32-32v-68.2c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z"
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
                  d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v352c0 39.8 32.2 72 72 72h416c13.3 0 24-10.7 24-24s-10.7-24-24-24H72c-13.3 0-24-10.7-24-24zm238.1 169.9c9 9 21.2 14.1 33.9 14.1s24.9-5.1 33.9-14.1l27.3-27.3 50.8 59.2V336H144v-92.1l80-80 62.1 62.1zM320 192l-33.9-33.9-39.4-39.4c-12.5-12.5-32.8-12.5-45.3 0L110.1 210c-9 9-14.1 21.2-14.1 33.9V352c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-94.2c0-11.5-4.1-22.5-11.6-31.2l-62-72.3c-12.1-14.2-33.7-15-46.9-1.8l-5.6 5.6z"
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
                  d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v352c0 44.2 35.8 80 80 80h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48zm265.4 166.6c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4l39.6-39.6 62 72.3c2.5 2.9 3.9 6.6 3.9 10.4V352H128V243.9c0-4.2 1.7-8.3 4.7-11.3l91.3-91.3 73.4 73.4zm0-45.3-50.7-50.7c-12.5-12.5-32.8-12.5-45.3 0l-91.3 91.3c-9 9-14.1 21.2-14.1 33.9V352c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-94.2c0-11.5-4.1-22.5-11.6-31.2l-62-72.3c-12.1-14.2-33.7-15-46.9-1.8l-16.9 16.9L320 192l-22.6-22.6z"
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
                  d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 39.8 32.2 72 72 72h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H72c-30.9 0-56-25.1-56-56zm292.7 163.3c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l39.6-39.6c6.6-6.6 17.4-6.2 23.5.9l62 72.3c5 5.8 7.7 13.2 7.7 20.8V352c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V243.9c0-8.5 3.4-16.6 9.4-22.6l91.3-91.3c6.2-6.2 16.4-6.2 22.6 0l73.4 73.4zM320 192l-11.3-11.3-62.1-62.1c-12.5-12.5-32.8-12.5-45.3 0L110 209.9c-9 9-14.1 21.2-14.1 33.9V352c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32v-94.2c0-11.5-4.1-22.5-11.6-31.2l-62-72.3c-12.1-14.2-33.7-15-46.9-1.8l-28.2 28.3z"
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
                  d="M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 352H160c-17.7 0-32-14.3-32-32v-84c0-7.8 2.8-15.2 7.9-21.1l79.4-90.8c13-14.8 36.1-14.5 48.7.6l39.2 47c9 10.8 25.4 11.6 35.4 1.6l21-21c13.2-13.2 34.8-12.4 46.9 1.8l65.8 76.9c5 5.8 7.7 13.2 7.7 20.8V320c0 17.7-14.3 32-32 32"
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
