import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LeftLongToLineIcon: React.FC<
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
                  d="M0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32S0 78.3 0 96m279.5 313.4c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22v-72h288c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H320v-72c0-9.6-5.7-18.2-14.5-22s-19-2-26 4.6l-144 136c-4.8 4.5-7.5 10.8-7.5 17.4s2.7 12.9 7.5 17.4z"
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
                  d="M0 88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24S0 437.3 0 424zm134.5 184.4c-8.7-9.2-8.7-23.7 0-32.9l121.4-129c8.8-9.3 21-14.6 33.7-14.6 25.6 0 46.3 20.7 46.3 46.3v33.7h248c30.9 0 56 25.1 56 56v48c0 30.9-25.1 56-56 56h-248v33.7c0 25.6-20.7 46.3-46.3 46.3-12.8 0-25-5.3-33.7-14.6l-121.4-129zM288 200v-53.5L185 256l103 109.5V312c0-13.3 10.7-24 24-24h272c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-13.3 0-24-10.7-24-24"
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
                  d="M0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16S0 71.2 0 80m320 136h272c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H320c-17.7 0-32 14.3-32 32v49.3c0 3.7-3 6.7-6.7 6.7-1.9 0-3.7-.8-5-2.2L163.8 256l112.5-125.8c1.3-1.4 3.1-2.2 5-2.2 3.7 0 6.7 3 6.7 6.7V184c0 17.7 14.3 32 32 32m-192 40c0 5.2 1.9 10.1 5.3 14l119.2 133.1c7.3 8.2 17.8 12.9 28.8 12.9 21.4 0 38.7-17.3 38.7-38.7V328h272c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48H320v-49.3c0-21.4-17.3-38.7-38.7-38.7-11 0-21.5 4.7-28.8 12.9L133.3 242c-3.4 3.8-5.3 8.8-5.3 14"
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
                  d="M0 72c0-4.4 3.6-8 8-8s8 3.6 8 8v368c0 4.4-3.6 8-8 8s-8-3.6-8-8zm320 224h280c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24H320c-8.8 0-16-7.2-16-16v-81.1c0-3.8-3.1-6.9-6.9-6.9-1.8 0-3.5.7-4.7 1.9L144.8 254.1c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9l147.6 140.2c1.3 1.2 3 1.9 4.7 1.9 3.8 0 6.9-3.1 6.9-6.9V312c0-8.8 7.2-16 16-16m-38.6 113.7L133.8 269.5c-3.7-3.5-5.8-8.4-5.8-13.5s2.1-10 5.8-13.5l147.6-140.2c4.3-4 9.9-6.3 15.8-6.3 12.6 0 22.9 10.2 22.9 22.9V200H600c22.1 0 40 17.9 40 40v32c0 22.1-17.9 40-40 40H320v81.1c0 12.6-10.2 22.9-22.9 22.9-5.9 0-11.5-2.3-15.8-6.3z"
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
                  d="M32 64C14.3 64 0 78.3 0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M305.5 414c-8.8 3.8-19 2-26-4.6l-144-136c-4.8-4.5-7.5-10.8-7.5-17.4s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v72h288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320v72c0 9.6-5.7 18.2-14.5 22"
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
