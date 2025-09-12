import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SaltShakerIcon: React.FC<
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
                  d="M319.4 448H64.6l36.6-256h181.6zM59.8 512h264.4c33 0 59.8-26.8 59.8-59.8 0-2.8-.2-5.7-.6-8.5l-45.3-317C327.7 54 265.4 0 192 0S56.3 54 45.9 126.7L.6 443.8c-.4 2.8-.6 5.6-.6 8.5 0 33 26.8 59.8 59.8 59.8zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M325.2 464H58.8c-6 0-10.8-4.8-10.8-10.8 0-.6.1-1.3.2-1.9L94.5 192h195l46.3 259.3c.1.6.2 1.3.2 1.9 0 6-4.8 10.8-10.8 10.8M58.8 512h266.4c32.5 0 58.8-26.3 58.8-58.8 0-3.5-.3-6.9-.9-10.3l-59.4-332.6C312.3 46.5 256.8 0 192 0S71.7 46.5 60.3 110.3L.9 442.9c-.6 3.4-.9 6.9-.9 10.3C0 485.7 26.3 512 58.8 512M192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M352 453.2c0-1.6-.1-3.2-.4-4.7L305.8 192H78.2L32.4 448.5c-.3 1.6-.4 3.1-.4 4.7C32 468 44 480 58.8 480h266.4c14.8 0 26.8-12 26.8-26.8M300.1 160l-7.9-44.1C283.5 67.3 241.3 32 192 32s-91.5 35.3-100.2 83.9L83.9 160zm25.1 352H58.8C26.3 512 0 485.7 0 453.2c0-3.5.3-6.9.9-10.3l59.4-332.6C71.7 46.5 127.2 0 192 0s120.3 46.5 131.7 110.3l59.4 332.6c.6 3.4.9 6.9.9 10.3 0 32.5-26.3 58.8-58.8 58.8M176 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-32 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-72.1 146-24 192c-1.1 8.8-9.1 15-17.9 13.9s-15-9.1-13.9-17.9l24-192c1.1-8.8 9.1-15 17.9-13.9s15 9.1 13.9 17.9m112-4 24 192c1.1 8.8-5.1 16.8-13.9 17.9s-16.8-5.1-17.9-13.9l-24-192c-1.1-8.8 5.1-16.8 13.9-17.9s16.8 5.1 17.9 13.9"
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
                  d="M368 453.2c0-2.5-.2-5-.7-7.5L319.2 176H64.8L16.7 445.7c-.4 2.5-.7 5-.7 7.5 0 23.6 19.2 42.8 42.8 42.8h266.4c23.6 0 42.8-19.2 42.8-42.8M316.3 160l-8.4-46.9C297.9 56.9 249.1 16 192 16S86.1 56.9 76.1 113.1L67.7 160zm8.9 352H58.8C26.3 512 0 485.7 0 453.2c0-3.5.3-6.9.9-10.3l59.4-332.6C71.7 46.5 127.2 0 192 0s120.3 46.5 131.7 110.3l59.4 332.6c.6 3.4.9 6.9.9 10.3 0 32.5-26.3 58.8-58.8 58.8M176 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-32 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-85.7 137-26.4 208c-.6 4.4-4.6 7.5-8.9 6.9s-7.5-4.6-6.9-8.9l26.4-208c.6-4.4 4.6-7.5 8.9-6.9s7.5 4.6 6.9 8.9m123.2-2 26.4 208c.6 4.4-2.5 8.4-6.9 8.9s-8.4-2.5-8.9-6.9l-26.4-208c-.6-4.4 2.5-8.4 6.9-8.9s8.4 2.5 8.9 6.9"
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
                  d="M36.6 192 .6 443.8c-.4 2.8-.6 5.6-.6 8.5 0 33 26.8 59.8 59.8 59.8h264.4c33 0 59.8-26.8 59.8-59.8 0-2.8-.2-5.7-.6-8.5l-36-251.8h-64.6l36.6 256H64.6l36.6-256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M101.2 192h246.2l-9.3-65.3C327.7 54 265.4 0 192 0S56.3 54 45.9 126.7L36.6 192zM176 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-32 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
