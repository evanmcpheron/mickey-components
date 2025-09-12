import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RightLongIcon: React.FC<
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
                  d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6S320 110.5 320 120v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288v72c0 9.6 5.7 18.2 14.5 22"
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
                  d="M505.5 239.6c8.7 9.2 8.7 23.7 0 32.9l-121.4 129c-8.8 9.3-21 14.6-33.7 14.6-25.6 0-46.3-20.7-46.3-46.3v-33.7L56 336c-30.9 0-56-25.1-56-56v-48c0-30.9 25.1-56 56-56h248v-33.7c0-25.6 20.7-46.3 46.3-46.3 12.8 0 25 5.3 33.7 14.6l121.4 129zM352 146.5V200c0 13.3-10.7 24-24 24H56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h272c6.4 0 12.5 2.5 17 7s7 10.6 7 17v53.5L455 256z"
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
                  d="M352 184v-49.3c0-3.7 3-6.7 6.7-6.7 1.9 0 3.7.8 5 2.2L476.2 256 363.7 381.8c-1.3 1.4-3.1 2.2-5 2.2-3.7 0-6.7-3-6.7-6.7V328c0-17.7-14.3-32-32-32H48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h272c17.7 0 32-14.3 32-32m154.7 86c3.4-3.8 5.3-8.8 5.3-14s-1.9-10.1-5.3-14L387.5 108.9c-7.3-8.2-17.8-12.9-28.8-12.9-21.4 0-38.7 17.3-38.7 38.7V184H48c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h272v49.3c0 21.4 17.3 38.7 38.7 38.7 11 0 21.5-4.7 28.8-12.9z"
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
                  d="M336 200v-81.1c0-3.8 3.1-6.9 6.9-6.9 1.8 0 3.5.7 4.7 1.9l147.6 140.2c.5.5.8 1.2.8 1.9s-.3 1.4-.8 1.9L347.6 398.1c-1.3 1.2-3 1.9-4.7 1.9-3.8 0-6.9-3.1-6.9-6.9V312c0-8.8-7.2-16-16-16H40c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h280c8.8 0 16-7.2 16-16m170.2 42.5L358.6 102.3c-4.2-4-9.9-6.3-15.8-6.3-12.6 0-22.9 10.2-22.9 22.9V200H40c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h280v81.1c0 12.6 10.2 22.9 22.9 22.9 5.9 0 11.5-2.3 15.8-6.3l147.5-140.2c3.7-3.5 5.8-8.4 5.8-13.5s-2.1-10-5.8-13.5"
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
                  d="M320 320V192H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288"
                />
                <path
                  className="aps-icon-foreground"
                  d="M360.5 409.4c-7 6.6-17.2 8.4-26 4.6S320 401.5 320 392V120c0-9.6 5.7-18.2 14.5-22s19-2 26 4.6l144 136c4.8 4.5 7.5 10.8 7.5 17.4s-2.7 12.9-7.5 17.4z"
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
