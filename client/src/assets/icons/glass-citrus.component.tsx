import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GlassCitrusIcon: React.FC<
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
                  d="M448 144c0-44.2-35.8-80-80-80-26.2 0-49.4 12.6-64 32h-71.8C252 40.1 305.3 0 368 0c79.5 0 144 64.5 144 144 0 78.4-62.6 142.1-140.5 144l6.5-64.6c39.5-4.9 70-38.6 70-79.4m-198.7 80-.1 1.3-.9-1.3zm-241-85.5C14.3 131.8 23 128 32 128h288c9 0 17.7 3.8 23.7 10.5s9 15.7 8.1 24.7l-29.1 291.2c-3.2 32.7-30.8 57.6-63.7 57.6H93c-32.9 0-60.4-24.9-63.7-57.6L.2 163.2c-.9-9 2-18 8.1-24.7M67.4 192l6.4 64h204.4l6.4-64z"
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
                  d="M464 144c0-53-43-96-96-96-35.5 0-66.6 19.3-83.2 48h-52.6C252 40.1 305.3 0 368 0c79.5 0 144 64.5 144 144 0 78.4-62.7 142.2-140.7 144l4.6-48.3c49.3-4 88.1-45.3 88.1-95.7M6.2 135.9c4.5-5 11-7.9 17.8-7.9h304c6.8 0 13.2 2.9 17.8 7.9s6.8 11.7 6.1 18.4l-29.2 307C320 490 295.8 512 267 512H85.1c-28.9 0-53-21.9-55.7-50.7L.1 154.3c-.6-6.7 1.6-13.4 6.1-18.4M62.6 304l14.5 152.8c.4 4.1 3.8 7.2 8 7.2h181.8c4.1 0 7.6-3.1 8-7.2L289.4 304zM58 256h236l7.6-80H50.4z"
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
                  d="M373.4 255.9C432.7 253.1 480 204 480 144c0-61.9-50.1-112-112-112-44.7 0-83.2 26.2-101.2 64h-34.6C252 40.1 305.3 0 368 0c79.5 0 144 64.5 144 144 0 79-63.6 143.1-142.3 144zM40.9 160c-4.8 0-8.5 4.2-7.9 8.9L43 256h266l10-87.1c.5-4.7-3.2-8.9-7.9-8.9zm24.5 291.7C67.3 467.8 81 480 97.2 480h157.5c16.3 0 29.9-12.2 31.8-28.3L305.3 288H46.6zM1.2 172.6C-1.6 148.8 17 128 40.9 128H311c23.9 0 42.5 20.8 39.7 44.6l-32.4 282.7c-3.7 32.3-31.1 56.7-63.6 56.7H97.2c-32.5 0-59.9-24.4-63.6-56.7z"
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
                  d="M371.5 272c69.1-1.9 124.5-58.5 124.5-128 0-70.7-57.3-128-128-128-53.7 0-99.7 33.1-118.7 80h-17.1C252 40.1 305.3 0 368 0c79.5 0 144 64.5 144 144 0 79-63.6 143.1-142.3 144zM32.8 144c-9.5 0-16.9 8.3-15.9 17.7L27.2 256h297.5l10.3-94.3c1-9.5-6.4-17.7-15.9-17.7zm16.9 316.4C51.9 480.6 69 496 89.4 496h173c20.4 0 37.5-15.4 39.8-35.6L322.9 272H29zM1 163.5C-1.1 144.6 13.7 128 32.8 128h286.3c19.1 0 33.9 16.6 31.8 35.5l-32.8 298.6C315 490.5 291 512 262.5 512H89.4c-28.6 0-52.5-21.5-55.7-49.9z"
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
                  d="M8.3 138.5C14.3 131.8 23 128 32 128h288c9 0 17.7 3.8 23.7 10.5s9 15.7 8.1 24.7l-29.1 291.2c-3.2 32.7-30.8 57.6-63.7 57.6H93c-32.9 0-60.4-24.9-63.7-57.6L.2 163.2c-.9-9 2-18 8.1-24.7M67.4 192 93 448h166l25.6-256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 144c0 44.2-35.8 80-80 80-7.6 0-15-1.1-21.9-3l-6.4 64.3c9.2 1.8 18.7 2.8 28.4 2.8 79.5 0 144-64.5 144-144S447.5 0 368 0c-74.1 0-135.2 56-143.1 128h64.7c7.4-36.5 39.7-64 78.4-64 44.2 0 80 35.8 80 80M73.8 256 93 448h166l19.2-192z"
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
