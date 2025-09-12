import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareRootVariableIcon: React.FC<
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
                  d="M282.6 78.1c8-27.3 33-46.1 61.4-46.1h200c17.7 0 32 14.3 32 32s-14.3 32-32 32H344L238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h45.6c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8zm110.8 155.3c12.5-12.5 32.8-12.5 45.3 0l41.3 41.3 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.4-41.4-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"
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
                  d="M344.3 80c-3.6 0-6.7 2.4-7.7 5.8L231.1 462.5c-2.6 9.4-10.7 16.3-20.5 17.4s-19.1-3.9-23.8-12.5L83.9 276.2c-1.4-2.6-4.1-4.2-7-4.2H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h52.9c20.6 0 39.5 11.3 49.3 29.5l74.7 138.8 89.4-319.4c6.8-24.2 28.9-40.9 54-40.9H552c13.3 0 24 10.7 24 24s-10.7 24-24 24zM399 239c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9"
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
                  d="M352.1 64c-7.1 0-13.4 4.7-15.4 11.6L223.4 468.4c-1.8 6.3-7.2 10.8-13.7 11.5s-12.7-2.6-15.8-8.4l-111-207.1c-2.8-5.2-8.2-8.4-14.1-8.4H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h52.8c17.7 0 34 9.7 42.3 25.3l92.4 172.4L306 66.7c5.9-20.6 24.7-34.7 46.1-34.7H560c8.8 0 16 7.2 16 16s-7.2 16-16 16zm52.6 180.7c6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L502.6 320l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L480 342.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6"
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
                  d="M386.6 48c-17.2 0-32.5 11-37.9 27.4L215.6 474.5c-1 3.1-3.8 5.2-7 5.4s-6.3-1.5-7.7-4.4L89.7 253.3c-4.1-8.2-12.4-13.3-21.5-13.3H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h60.2c15.2 0 29 8.6 35.8 22.1l102.5 205 127-380.9c7.6-22.9 29-38.3 53.1-38.3H568c4.4 0 8 3.6 8 8s-3.6 8-8 8H386.6zm7.7 186.3c3.1-3.1 8.2-3.1 11.3 0l74.4 74.4 74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L491.3 320l74.3 74.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L480 331.3l-74.3 74.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.3-74.3-74.3-74.3c-3.1-3.1-3.1-8.2 0-11.3z"
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
                  d="M282.6 78.1c8-27.3 33-46.1 61.4-46.1h200c17.7 0 32 14.3 32 32s-14.3 32-32 32H344L238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h45.6c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M521.4 233.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.4-41.4-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.4 41.4 41.4-41.4z"
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
