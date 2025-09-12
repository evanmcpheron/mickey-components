import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonPregnantIcon: React.FC<
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
                  d="M192 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-72 383c-13.8-3.6-24-16.1-24-31v-55.1l-4.6 7.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c15-24.9 40.3-41.5 68.7-45.6 4.1-.6 8.2-1 12.5-1H192c1.4 0 2.8.1 4.1.3 35.7 2.9 65.4 29.3 72.1 65l6.1 32.5c44.3 8.6 77.7 47.5 77.7 94.3v32c0 17.7-14.3 32-32 32h-56v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
                  d="M240 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M96 352c0 17.7 14.3 32 32 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h64c17.7 0 32-14.3 32-32v-32c0-46.8-33.4-85.7-77.7-94.3l-6.1-32.5c-6.8-36.1-37.1-62.7-73.3-65.1-1-.1-1.9-.2-2.9-.2h-20.7c-32.5 0-62.3 17.9-77.6 46.5L34.8 284.7c-6.2 11.7-1.8 26.2 9.9 32.5s26.2 1.8 32.5-9.9L96 272.1zm80-176h13.6c15.4 0 28.6 11 31.5 26.1l6.1 32.5c3.6 19.4 18.7 34.5 38.1 38.3 22.1 4.3 38.8 23.8 38.8 47.1v16H144V208c0-17.7 14.3-32 32-32"
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
                  d="M192 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m0 352h128v-32c0-31.1-22.3-57.1-51.7-62.8-12.9-2.5-23-12.6-25.4-25.5l-6.1-32.5c-4.3-22.7-24.1-39.2-47.2-39.2H176c-26.5 0-48 21.5-48 48v144h64m1.9-223.9c36.6 2 67.5 28.7 74.3 65.1l6.1 32.5c44.3 8.6 77.7 47.5 77.7 94.3v32c0 17.7-14.3 32-32 32h-64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384h-64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384c-17.7 0-32-14.3-32-32V232.1l-33.9 63.4c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7l54.4-101.6a95.9 95.9 0 0 1 84.7-50.8H192c.7 0 1.3 0 1.9.1"
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
                  d="M192.5 144h-15.4c-28.1 0-54.1 14.7-68.6 38.8l-58.3 97c-4.6 7.6-2.1 17.4 5.5 22s17.4 2.1 22-5.5l28.6-47.5c3.7-6.2 11.1-9.1 18-7.2S136 249.8 136 257v111.1h184c8.8 0 16-7.2 16-16V320c0-38.9-27.8-71.4-64.7-78.5-6.4-1.2-11.5-6.3-12.7-12.8l-7-37.1c-5.1-27.6-29.2-47.6-57.3-47.6h-1.8M136 384v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96zm48 0v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-16 26.6-12.6 21c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h17.1c35.8 0 66.5 25.5 73 60.6l7 37.1c44.3 8.6 77.7 47.5 77.7 94.3v32c0 17.7-14.3 32-32 32h-56v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384h-16m32 0v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96zm32-328c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56m-16 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0"
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
                  d="M144 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M196.1 128.3c35.7 2.9 65.4 29.3 72.1 65l6.1 32.5c44.3 8.6 77.7 47.5 77.7 94.3v32c0 17.7-14.3 32-32 32h-56v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-97c-13.8-3.6-24-16.1-24-31v-55.1l-4.6 7.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c15-24.9 40.3-41.5 68.7-45.6 4.1-.6 8.2-1 12.5-1H192c1.4 0 2.8.1 4.1.3z"
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
