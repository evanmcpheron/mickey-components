import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CupTogoIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M55.2 17.7C60.6 6.8 71.7 0 83.8 0h280.4c12.1 0 23.2 6.8 28.6 17.7L416 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm19.5 436.1L48 160h352l-26.7 293.8c-3 33-30.6 58.2-63.7 58.2H138.4c-33.1 0-60.7-25.2-63.7-58.2m249.1-162.9c1.7-18.7-13.1-34.9-31.9-34.9H156c-18.8 0-33.6 16.2-31.9 34.9l8.7 96c1.5 16.5 15.3 29.1 31.9 29.1h118.5c16.6 0 30.4-12.6 31.9-29.1z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M108.2 48h232c3 0 5.8 1.7 7.2 4.4L361.2 80H88l13-27.4c1.3-2.8 4.1-4.6 7.2-4.6m306.6 32-24.5-49c-9.5-19-28.9-31-50.1-31h-232C86.6 0 66.9 12.4 57.6 32L34.8 80H24C10.7 80 0 90.7 0 104s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24zM47.4 160l27.2 293.9c3 32.9 30.7 58.1 63.7 58.1h171.4c33.1 0 60.7-25.2 63.7-58.1L400.6 160h-48.2l-5.9 64h-245l-5.9-64zm68.9 224h215.3l-6.1 65.5c-.8 8.2-7.7 14.5-15.9 14.5H138.3c-8.3 0-15.2-6.3-15.9-14.5l-6-65.5z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M87.9 42.9 70.2 96h307.6l-17.7-53.1c-2.2-6.5-8.3-10.9-15.2-10.9H103.1c-6.9 0-13 4.4-15.2 10.9M47.6 128H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h20.5l21-63.2C64.1 13.2 82.4 0 103.1 0h241.8c20.7 0 39 13.2 45.5 32.8L411.5 96H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H47.7zm27 325.9L47.4 160h32.1l5.9 64h277.1l5.9-64h32.1l-27.1 293.9c-3 32.9-30.7 58.1-63.7 58.1H138.3c-33.1 0-60.7-25.2-63.7-58.1m285-197.9H88.4l11.9 128h247.4zm-14.8 160H103.2l3.2 35c1.5 16.5 15.3 29 31.9 29h171.4c16.5 0 30.3-12.6 31.9-29z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 80c5.5 0 10.6-2.8 13.6-7.5l30.6-49c2.9-4.7 8.1-7.5 13.6-7.5h268.5c5.5 0 10.6 2.8 13.6 7.5l30.6 49c2.9 4.7 8.1 7.5 13.6 7.5 8.8 0 16 7.2 16 16s-7.2 16-16 16H32c-8.8 0-16-7.2-16-16s7.2-16 16-16m353.4-65c-5.8-9.4-16.1-15-27.1-15H89.7c-11 0-21.3 5.7-27.1 15L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-338 145 27.2 293.9c3 32.9 30.7 58.1 63.7 58.1h171.3c33.1 0 60.7-25.2 63.7-58.1L400.6 160h-16.1l-5.9 64H69.4l-5.9-64zm23.5 80h306.2l-13.3 144H84.2zm14.8 160h276.6l-4.9 52.4c-2.3 24.7-23 43.6-47.8 43.6H138.3c-24.8 0-45.5-18.9-47.8-43.6z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m70 392 5.1 61.3c2.8 33.2 30.5 58.7 63.8 58.7h170.2c33.3 0 61-25.5 63.8-58.7L378 392zM56.7 232h334.6l8.7-104H48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M55.2 17.7 32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32l-23.2-46.3C387.4 6.8 376.3 0 364.2 0H83.8C71.7 0 60.6 6.8 55.2 17.7M378 392l13.3-160H56.7L70 392z"
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
