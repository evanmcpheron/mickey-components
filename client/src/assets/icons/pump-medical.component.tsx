import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PumpMedicalIcon: React.FC<
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
                  d="M128 32v96h128V96h60.1c4.2 0 8.3 1.7 11.3 4.7l33.9 33.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-33.9-33.9c-15-15-35.4-23.4-56.6-23.4H256c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m-10.6 128c-33.3 0-61 25.5-63.8 58.7L35 442.7C31.9 480 61.3 512 98.8 512h186.4c37.4 0 66.9-32 63.8-69.3l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7zM216 280v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-32c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M168 0h48c25.4 0 46.8 16.9 53.7 40h46.4c19.1 0 37.4 7.6 50.9 21.1l42 41.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-42-41.9c-4.5-4.5-10.6-7-17-7H272v40h-48V56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v72h-48V56c0-30.9 25.1-56 56-56m-66.5 222.7-18.7 224c-.7 9.3 6.6 17.3 16 17.3h186.4c9.4 0 16.7-8 15.9-17.3l-18.7-224c-.7-8.3-7.6-14.7-15.9-14.7H117.4c-8.3 0-15.3 6.4-15.9 14.7m-47.8-4c2.8-33.2 30.5-58.7 63.8-58.7h149.1c33.3 0 61 25.5 63.8 58.7l18.7 224c3.1 37.3-26.3 69.3-63.8 69.3H98.8c-37.4 0-66.9-32-63.8-69.3zM216 296v16h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-16c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M176 0h32c26.5 0 48 21.5 48 48h76.1c17 0 33.3 6.7 45.3 18.7l33.9 33.9c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-34-33.8c-6-6-14.1-9.4-22.6-9.4H256v48h-32V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v80h-32V48c0-26.5 21.5-48 48-48M85.6 221.3l-18.7 224C65.3 464 80.1 480 98.8 480h186.4c18.7 0 33.4-16 31.9-34.7l-18.7-224c-1.4-16.6-15.2-29.3-31.9-29.3H117.4c-16.6 0-30.5 12.8-31.9 29.3zm-31.9-2.7c2.8-33.2 30.5-58.7 63.8-58.7h149.1c33.3 0 61 25.5 63.8 58.7l18.7 224c3.1 37.3-26.3 69.3-63.8 69.3H98.8c-37.4 0-66.9-32-63.8-69.3zM208 288v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M168 0h48c22.1 0 40 17.9 40 40v16h60.1c14.9 0 29.1 5.9 39.6 16.4l41.9 41.9c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-41.9-41.9c-7.5-7.5-17.7-11.7-28.3-11.7H256v56h-16V40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v88h-16V40c0-22.1 17.9-40 40-40M69.6 220 50.9 444c-2.3 28 19.8 52 47.8 52h186.5c28.1 0 50.2-24 47.8-52l-18.6-224c-2.1-24.9-22.9-44-47.8-44H117.4c-25 0-45.8 19.1-47.8 44m-15.9-1.3c2.8-33.2 30.5-58.7 63.8-58.7h149.1c33.3 0 61 25.5 63.8 58.7l18.7 224c3.1 37.3-26.3 69.3-63.8 69.3H98.8c-37.4 0-66.9-32-63.8-69.3zM168 256h48c4.4 0 8 3.6 8 8v40h40c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-40h-40c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h40v-40c0-4.4 3.6-8 8-8m8 56v8h-48v32h48v48h32v-48h48v-32h-48v-48h-32z"
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
                  d="M117.4 160c-33.3 0-61 25.5-63.8 58.7L35 442.7C31.9 480 61.3 512 98.8 512h186.4c37.4 0 66.9-32 63.8-69.3l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7zM216 280v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-32c0-13.3 10.7-24 24-24s24 10.7 24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32h60.1c21.2 0 41.6 8.4 56.6 23.4l33.9 33.9c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-33.9-33.9c-3-3-7.1-4.7-11.3-4.7H256v64H128zm64 224c13.3 0 24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-32c0-13.3 10.7-24 24-24"
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
