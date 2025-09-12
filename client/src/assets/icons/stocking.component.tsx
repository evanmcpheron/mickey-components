import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StockingIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 0C78.3 0 64 14.3 64 32v32c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm0 128v110.9c0 10.7-5.3 20.7-14.2 26.6l-26.1 17.4C20.9 306.1 0 345.1 0 386.9v2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L295 422c35.6-23.7 57-63.7 57-106.5V128z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 0C78.3 0 64 14.3 64 32v32c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm48 238.9V128H96v110.9c0 10.7-5.3 20.7-14.2 26.6l-26.1 17.4C20.9 306.1 0 345.1 0 386.9v2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L295 422c35.6-23.7 57-63.7 57-106.5V128h-48v187.5c0 26.7-13.4 51.7-35.6 66.6l-104.1 69.3c-12.3 8.2-26.7 12.6-41.5 12.6-41.3 0-74.8-33.5-74.8-74.8V387c0-25.8 12.9-49.8 34.3-64.1l26.1-17.4c22.3-14.8 35.6-39.8 35.6-66.6"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 32h256v48H96zm-32 0v48c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96C78.3 0 64 14.3 64 32m64 206.9V144H96v94.9c0 10.7-5.3 20.7-14.2 26.6l-26.1 17.4C20.9 306.1 0 345.1 0 386.9v2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L295 422c35.6-23.7 57-63.7 57-106.5V144h-32v171.5c0 32.1-16 62.1-42.7 79.9l-104.1 69.3c-14.9 9.9-32.4 15.3-50.4 15.3-50.1 0-90.8-40.7-90.8-90.8V387c0-31.1 15.6-60.2 41.4-77.4l26.1-17.4c17.8-11.9 28.5-31.9 28.5-53.3"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 16h256c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V32c0-8.8 7.2-16 16-16M64 32v48c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96C78.3 0 64 14.3 64 32m48 206.9V144H96v94.9c0 10.7-5.3 20.7-14.2 26.6l-26.1 17.4C20.9 306.1 0 345.1 0 386.9v2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L295 422c35.6-23.7 57-63.7 57-106.5V144h-16v171.5c0 37.4-18.7 72.4-49.9 93.2l-104 69.4c-17.5 11.7-38.2 17.9-59.3 17.9C63.8 496 16 448.2 16 389.2V387c0-36.5 18.2-70.5 48.6-90.7l26.1-17.4c13.4-8.9 21.4-23.9 21.4-39.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 96v142.9c0 10.7-5.3 20.7-14.2 26.6l-26.1 17.4C20.9 306.1 0 345.1 0 386.9v2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6l66-44c-20.4-20.3-33-48.3-33-79.4 0-61.9 50.1-112 112-112 5.4 0 10.8.4 16 1.1V96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C78.3 0 64 14.3 64 32v32c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm256 315.5v-58.4c-5.2-.7-10.6-1.1-16-1.1-61.9 0-112 50.1-112 112 0 31 12.6 59.1 33 79.4l38-25.4c35.6-23.7 57-63.7 57-106.5"
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
