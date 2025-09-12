import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VenusDoubleIcon: React.FC<
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
                  d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224m176-112c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9C78.1 334.1 16 262.3 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176m-24 142c14.6-15.6 26.8-33.4 36-53 18.8 14.4 42.4 23 68 23 61.9 0 112-50.1 112-112S509.9 64 448 64c-25.6 0-49.1 8.6-68 23-9.3-19.5-21.5-37.4-36-53 29.1-21.4 65.1-34 104-34 97.2 0 176 78.8 176 176 0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9c-26.6-4.9-51.1-15.7-72-31.1"
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
                  d="M192 304a128 128 0 1 0 0-256 128 128 0 1 0 0 256m176-128c0 89.1-66.2 162.7-152 174.4V400h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-49.6C82.2 338.7 16 265.1 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176m-24 142c10.9-11.7 20.5-24.6 28.5-38.6 21.2 15.5 47.3 24.6 75.5 24.6 70.7 0 128-57.3 128-128S518.7 48 448 48c-28.2 0-54.3 9.1-75.5 24.6-8-14-17.6-26.9-28.5-38.6 29.1-21.4 65.1-34 104-34 97.2 0 176 78.8 176 176 0 89.1-66.2 162.7-152 174.4V400h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-49.6c-29.7-4-57-15.5-80-32.4"
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
                  d="M192 320a144 144 0 1 0 0-288 144 144 0 1 0 0 288m176-144c0 91.8-70.3 167.2-160 175.3V416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64.7C86.3 343.2 16 267.8 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176m-24 142c7.3-7.8 14-16.2 20-25 23.6 17 52.6 27 84 27 79.5 0 144-64.5 144-144S527.5 32 448 32c-31.3 0-60.3 10-84 27-6-8.9-12.7-17.2-20-25 29.1-21.4 65.1-34 104-34 97.2 0 176 78.8 176 176 0 91.8-70.3 167.2-160 175.3V416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64.7c-32.7-3-62.9-14.9-88-33.3"
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
                  d="M192 336a160 160 0 1 0 0-320 160 160 0 1 0 0 320m176-160c0 94.5-74.5 171.6-168 175.8V416h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-64.2C90.5 347.6 16 270.5 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176m-13.5 129.9c26.3 19 58.6 30.1 93.5 30.1 88.4 0 160-71.6 160-160S536.4 16 448 16c-34.9 0-67.2 11.2-93.5 30.1-3.3-4.1-6.9-8.2-10.5-12.1 29.1-21.4 65.1-34 104-34 97.2 0 176 78.8 176 176 0 94.5-74.5 171.6-168 175.8V416h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-64.2c-35.8-1.6-68.9-13.9-96-33.8 3.7-3.9 7.2-8 10.5-12.1"
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
                  d="M344 318c14.6-15.6 26.8-33.4 36-53 18.8 14.4 42.4 23 68 23 61.9 0 112-50.1 112-112S509.9 64 448 64c-25.6 0-49.1 8.6-68 23-9.3-19.5-21.5-37.4-36-53 29.1-21.4 65.1-34 104-34 97.2 0 176 78.8 176 176 0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9c-26.6-4.9-51.1-15.7-72-31.1M192 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224m176-112c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-34.9C78.1 334.1 16 262.3 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176m32 0c0-19.8-2.8-39-8-57.2 14.5-14.1 34.2-22.8 56-22.8 44.2 0 80 35.8 80 80s-35.8 80-80 80c-21.8 0-41.5-8.7-56-22.8 5.2-18.2 8-37.3 8-57.2"
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
