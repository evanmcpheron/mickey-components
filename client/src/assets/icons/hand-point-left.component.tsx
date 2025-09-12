import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandPointLeftIcon: React.FC<
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
                  d="M32 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h208V96zm160 192c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-64-64c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32m96 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm88-96h-.6c5.4 9.4 8.6 20.3 8.6 32 0 13.2-4 25.4-10.8 35.6 24.9 8.7 42.8 32.5 42.8 60.4 0 11.7-3.1 22.6-8.6 32h8.6c88.4 0 160-71.6 160-160v-61.7c0-42.4-16.9-83.1-46.9-113.1l-11.6-11.6C429.5 77.5 396.9 64 363 64h-27c-35.3 0-64 28.7-64 64v88c0 22.1 17.9 40 40 40s40-17.9 40-40v-56c0-8.8 7.2-16 16-16s16 7.2 16 16v56c0 39.8-32.2 72-72 72"
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
                  d="M64 128h177.6c-1 5.2-1.6 10.5-1.6 16v16H64c-8.8 0-16-7.2-16-16s7.2-16 16-16m224 16c0-17.7 14.3-32 32-32h24c66.3 0 120 53.7 120 120v48c0 52.5-33.7 97.1-80.7 113.4.5-3.1.7-6.2.7-9.4 0-20-9.2-37.9-23.6-49.7 4.9-9 7.6-19.4 7.6-30.3 0-15.1-5.3-29-14-40 8.8-11 14-24.9 14-40v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80m32-80c-18 0-34.6 6-48 16H64c-35.3 0-64 28.7-64 64s28.7 64 64 64h82c-1.3 5.1-2 10.5-2 16 0 25.3 14.7 47.2 36 57.6-2.6 7-4 14.5-4 22.4 0 20 9.2 37.9 23.6 49.7-4.9 9-7.6 19.4-7.6 30.3 0 35.3 28.7 64 64 64h88c92.8 0 168-75.2 168-168v-48c0-92.8-75.2-168-168-168zm-64 336c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-16-176c0 5.5.7 10.9 2 16h-34c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zm24 64h40c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
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
                  d="M56 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h184v-32c0-5.5.6-10.8 1.6-16zm216 48v56c0 13.2 10.7 24 24 24s24-10.7 24-24v-56c0-8.8 7.2-16 16-16s16 7.2 16 16v56c0 15.7-6.4 29.8-16.8 40 10.4 10.2 16.8 24.3 16.8 40 0 13.8-5 26.4-13.2 36.1 12.9 10.3 21.2 26.1 21.2 43.9 0 8.6-1.9 16.7-5.4 24 69.5-1.4 125.4-58.2 125.4-128v-64c0-70.7-57.3-128-128-128h-32c-26.5 0-48 21.5-48 48zm-32 32h-40c-13.3 0-24 10.7-24 24s10.7 24 24 24h45.4c-3.5-7.3-5.4-15.4-5.4-24zm-90.6 0H56c-30.9 0-56-25.1-56-56s25.1-56 56-56h200c14.6-19.4 37.8-32 64-32h32c88.4 0 160 71.6 160 160v64c0 88.4-71.6 160-160 160H248c-30.9 0-56-25.1-56-56 0-12.1 3.8-23.3 10.4-32.5C186.5 349.6 176 332 176 312c0-9.7 2.5-18.8 6.8-26.7C160.3 278 144 256.9 144 232c0-8.6 1.9-16.7 5.4-24M272 288h-40c-13.2 0-24 10.8-24 24 0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 128h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
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
                  d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h208v-56c0-2.7.1-5.4.4-8zm224 64v48c0 17.7 14.3 32 32 32s32-14.3 32-32v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v72c0 18.5-10.5 34.6-25.9 42.6C337 291.4 344 304.9 344 320s-7 28.6-17.9 37.4c15.4 8 25.9 24.1 25.9 42.6 0 12.3-4.6 23.5-12.2 32H360c75.1 0 136-60.9 136-136v-80c0-75.1-60.9-136-136-136h-32c-30.9 0-56 25.1-56 56zm-16 16h-56c-17.7 0-32 14.3-32 32s14.3 32 32 32h68.2c-7.6-8.5-12.2-19.7-12.2-32zm-91.8 0H48c-26.5 0-48-21.5-48-48s21.5-48 48-48h212.1c9.9-28 36.6-48 67.9-48h32c83.9 0 152 68.1 152 152v80c0 83.9-68.1 152-152 152H248c-26.5 0-48-21.5-48-48 0-13.8 5.8-26.3 15.2-35-18.2-6.8-31.2-24.4-31.2-45 0-12.4 4.7-23.6 12.3-32.1C171.5 286 152 265.3 152 240c0-12.3 4.6-23.5 12.2-32M272 288h-40c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm8 144h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-56c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
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
                  d="M0 128c0 17.7 14.3 32 32 32h208V96H32c-17.7 0-32 14.3-32 32m312 160h-.6c5.4 9.4 8.6 20.3 8.6 32 0 13.2-4 25.4-10.8 35.6 24.9 8.7 42.8 32.5 42.8 60.4 0 11.7-3.1 22.6-8.6 32h8.6c88.4 0 160-71.6 160-160v-61.7c0-42.4-16.9-83.1-46.9-113.1l-11.6-11.6C429.5 77.5 396.9 64 363 64h-27c-35.3 0-64 28.7-64 64v88c0 22.1 17.9 40 40 40s40-17.9 40-40v-56c0-8.8 7.2-16 16-16s16 7.2 16 16v56c0 39.8-32.2 72-72 72"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 192c-17.7 0-32 14.3-32 32s14.3 32 32 32h48c17.7 0 32-14.3 32-32s-14.3-32-32-32zm32 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"
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
