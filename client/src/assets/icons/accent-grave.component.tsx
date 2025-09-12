import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AccentGraveIcon: React.FC<
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
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M108.3 204.8 41.2 95c-6-9.8-9.2-21.2-9.2-32.7C32 28.1 59.7 0 93.9 0c29.2 0 54.4 20.4 60.6 49l27.1 126.6C187 200.5 168 224 142.5 224c-14 0-26.9-7.3-34.2-19.2"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 65.3C80 55.8 87.8 48 97.3 48c8.4 0 15.6 6 17 14.3l18.2 102.1-49.6-84.5c-1.9-3.3-2.9-7-2.9-10.7zm-48 0v3.9c0 12.3 3.3 24.4 9.5 35.1l57.3 97.4c8.1 13.8 23 22.3 39 22.3 28.2 0 49.5-25.5 44.6-53.3L161.6 53.8C156.1 22.7 129 0 97.3 0 61.2 0 32 29.2 32 65.3"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 65.3C64 46.9 78.9 32 97.3 32c16.1 0 30 11.6 32.8 27.5l22.5 126.2c.6 3.3-1.9 6.3-5.3 6.3-1.7 0-3.4-.8-4.4-2.3L70.4 86.9C66.2 81 64 74 64 66.8zm-32 0v1.5c0 13.8 4.3 27.3 12.2 38.5l72.6 102.9c7 9.9 18.4 15.8 30.5 15.8 23.3 0 40.9-21 36.8-43.9L161.6 53.8C156.1 22.7 129 0 97.3 0 61.2 0 32 29.2 32 65.3"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M55.6 86.6c-5-7.4-7.6-16.3-7.6-25.3C48 36.4 68.2 16 93 16c21.8 0 40.4 15.6 44.3 37.1l24.2 135.7c1.8 10-5.9 19.3-16.1 19.3-5.5 0-10.6-2.7-13.6-7.3zm-13.3 8.9 76.1 114.1c6 9 16.1 14.4 26.9 14.4 20.2 0 35.4-18.2 31.9-38.1L153 50.2C147.8 21.2 122.5 0 93 0 59.3 0 32 27.6 32 61.3c0 12.1 3.6 24.1 10.3 34.2"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M108.3 204.8 41.2 95c-6-9.8-9.2-21.2-9.2-32.7C32 28.1 59.7 0 93.9 0c29.2 0 54.4 20.4 60.6 49l27.1 126.6C187 200.5 168 224 142.5 224c-14 0-26.9-7.3-34.2-19.2"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
