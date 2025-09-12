import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RightLongToLineIcon: React.FC<
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
                  d="M640 96v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32M360.5 409.4c-7 6.6-17.2 8.4-26 4.6S320 401.5 320 392v-72H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h288v-72c0-9.6 5.7-18.2 14.5-22s19-2 26 4.6l144 136c4.8 4.5 7.5 10.8 7.5 17.4s-2.7 12.9-7.5 17.4z"
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
                  d="M640 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24zM505.5 272.4c8.7-9.2 8.7-23.7 0-32.9l-121.4-129c-8.8-9.3-21-14.6-33.7-14.6-25.6 0-46.3 20.7-46.3 46.3v33.7L56 176c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56h248v33.7c0 25.6 20.7 46.3 46.3 46.3 12.8 0 25-5.3 33.7-14.6l121.4-129zM352 200v-53.5L455 256 352 365.5V312c0-13.3-10.7-24-24-24H56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h272c13.3 0 24-10.7 24-24"
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
                  d="M640 80v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16M320 216H48c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h272c17.7 0 32 14.3 32 32v49.3c0 3.7 3 6.7 6.7 6.7 1.9 0 3.7-.8 5-2.2L476.2 256 363.7 130.2c-1.3-1.4-3.1-2.2-5-2.2-3.7 0-6.7 3-6.7 6.7V184c0 17.7-14.3 32-32 32m192 40c0 5.2-1.9 10.1-5.3 14L387.5 403.1c-7.3 8.2-17.8 12.9-28.8 12.9-21.4 0-38.7-17.3-38.7-38.7V328H48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h272v-49.3c0-21.4 17.3-38.7 38.7-38.7 11 0 21.5 4.7 28.8 12.9L506.7 242c3.4 3.8 5.3 8.8 5.3 14"
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
                  d="M640 72v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8M320 216H40c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h280c8.8 0 16 7.2 16 16v81.1c0 3.8 3.1 6.9 6.9 6.9 1.8 0 3.5-.7 4.7-1.9l147.6-140.2c.5-.5.8-1.2.8-1.9s-.3-1.4-.8-1.9L347.6 113.9c-1.3-1.2-3-1.9-4.7-1.9-3.8 0-6.9 3.1-6.9 6.9V200c0 8.8-7.2 16-16 16m38.6-113.7 147.6 140.2c3.7 3.5 5.8 8.4 5.8 13.5s-2.1 10-5.8 13.5L358.6 409.7c-4.2 4-9.9 6.3-15.8 6.3-12.6 0-22.9-10.2-22.9-22.9V312H40c-22.1 0-40-17.9-40-40v-32c0-22.1 17.9-40 40-40h280v-81.1c0-12.6 10.2-22.9 22.9-22.9 5.9 0 11.5 2.3 15.8 6.3z"
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
                  d="M608 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6S320 110.5 320 120v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288v72c0 9.6 5.7 18.2 14.5 22"
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
