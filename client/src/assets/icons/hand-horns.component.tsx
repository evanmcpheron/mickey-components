import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandHornsIcon: React.FC<
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
                  d="M32 32C32 14.3 46.3 0 64 0s32 14.3 32 32v208H32zm192 160c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm-64-64c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m160-32c0-17.7 14.3-32 32-32s32 14.3 32 32v256c0 88.4-71.6 160-160 160h-61.7c-42.4 0-83.1-16.9-113.1-46.9l-11.7-11.6C13.5 429.5 0 396.9 0 363v-27c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72v-.6c9.4 5.4 20.3 8.6 32 8.6 35.3 0 64-28.7 64-64V96"
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
                  d="M80 48c8.8 0 16 7.2 16 16v176H80c-5.5 0-10.8.6-16 1.6V64c0-8.8 7.2-16 16-16M16 64v208C6 285.4 0 302 0 320v24c0 92.8 75.2 168 168 168h48c92.8 0 168-75.2 168-168V128c0-35.3-28.7-64-64-64s-64 28.7-64 64v50c-5.1-1.3-10.5-2-16-2-7.9 0-15.4 1.4-22.4 4-10.4-21.3-32.3-36-57.6-36-5.5 0-10.9.7-16 2V64c0-35.3-28.7-64-64-64S16 28.7 16 64m320 192v88c0 66.3-53.7 120-120 120h-48c-66.3 0-120-53.7-120-120v-24c0-17.7 14.3-32 32-32h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c15.1 0 29-5.3 40-14 11 8.8 24.9 14 40 14 35.3 0 64-28.7 64-64V128c0-8.8 7.2-16 16-16s16 7.2 16 16zm-176-16h-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v34c-5.1-1.3-10.5-2-16-2m96 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16z"
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
                  d="M88 32c13.3 0 24 10.7 24 24v184H80c-5.5 0-10.8.6-16 1.6V56c0-13.3 10.7-24 24-24m56 117.4V56c0-30.9-25.1-56-56-56S32 25.1 32 56v200c-19.4 14.6-32 37.8-32 64v32c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V120c0-30.9-25.1-56-56-56s-56 25.1-56 56v61.4c-7.3-3.5-15.4-5.4-24-5.4-9.7 0-18.8 2.5-26.7 6.8C214 160.3 192.9 144 168 144c-8.6 0-16.7 1.9-24 5.4m0 50.6c0-13.3 10.7-24 24-24s24 10.7 24 24v45.4c-7.3-3.5-15.4-5.4-24-5.4h-24zm80 72v-40c0-13.2 10.8-24 24-24 13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24s-24-10.7-24-24zm-112 0h56c13.2 0 24 10.7 24 24s-10.7 24-24 24h-56c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c15.7 0 29.8-6.4 40-16.8 10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56V120c0-13.3 10.7-24 24-24s24 10.7 24 24v232c0 70.7-57.3 128-128 128h-64c-70.7 0-128-57.3-128-128v-32c0-26.5 21.5-48 48-48z"
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
                  d="M64 48c0-17.7 14.3-32 32-32s32 14.3 32 32v208H72c-2.7 0-5.4.1-8 .4zm64 224h48c17.7 0 32 14.3 32 32s-14.3 32-32 32h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72c18.5 0 34.6-10.5 42.6-25.9C227.4 337 240.9 344 256 344c26.5 0 48-21.5 48-48V112c0-17.7 14.3-32 32-32s32 14.3 32 32v248c0 75.1-60.9 136-136 136h-80c-75.1 0-136-60.9-136-136v-32c0-30.9 25.1-56 56-56zm16-16v-56c0-17.7 14.3-32 32-32s32 14.3 32 32v68.2c-8.5-7.6-19.7-12.2-32-12.2zm0-91.8V48c0-26.5-21.5-48-48-48S48 21.5 48 48v212.1C20 270 0 296.7 0 328v32c0 83.9 68.1 152 152 152h80c83.9 0 152-68.1 152-152V112c0-26.5-21.5-48-48-48s-48 21.5-48 48v84.2c-8.5-7.6-19.7-12.2-32-12.2-12.4 0-23.6 4.7-32.1 12.3C222 171.5 201.3 152 176 152c-12.3 0-23.5 4.6-32 12.2M224 272v-40c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
                  d="M32 32C32 14.3 46.3 0 64 0s32 14.3 32 32v208H32zm288 64c0-17.7 14.3-32 32-32s32 14.3 32 32v256c0 88.4-71.6 160-160 160h-61.7c-42.4 0-83.1-16.9-113.1-46.9l-11.7-11.6C13.5 429.5 0 396.9 0 363v-27c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72v-.6c9.4 5.4 20.3 8.6 32 8.6 35.3 0 64-28.7 64-64V96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 128c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32s32-14.3 32-32v-48c0-17.7-14.3-32-32-32m96 32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32"
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
