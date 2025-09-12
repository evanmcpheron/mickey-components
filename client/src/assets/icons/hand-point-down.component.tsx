import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandPointDownIcon: React.FC<
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
                  d="M32 480c0 17.7 14.3 32 32 32s32-14.3 32-32V272H32zm192-160c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-64 64c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 17.7 14.3 32 32 32m160-96c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-96-88v.6c9.4-5.4 20.3-8.6 32-8.6 13.2 0 25.4 4 35.6 10.8 8.7-24.9 32.5-42.8 60.4-42.8 11.7 0 22.6 3.1 32 8.6V160C384 71.6 312.4 0 224 0h-61.7C119.8 0 79.1 16.9 49.1 46.9L37.5 58.5C13.5 82.5 0 115.1 0 149v27c0 35.3 28.7 64 64 64h88c22.1 0 40-17.9 40-40s-17.9-40-40-40H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h56c39.8 0 72 32.2 72 72"
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
                  d="M64 448V270.4c5.2 1 10.5 1.6 16 1.6h16v176c0 8.8-7.2 16-16 16s-16-7.2-16-16m16-224c-17.7 0-32-14.3-32-32v-24c0-66.3 53.7-120 120-120h48c52.5 0 97.1 33.7 113.4 80.7-3.1-.5-6.2-.7-9.4-.7-20 0-37.9 9.2-49.7 23.6-9-4.9-19.4-7.6-30.3-7.6-15.1 0-29 5.3-40 14-11-8.8-24.9-14-40-14h-40c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c8.8 0 16 7.2 16 16s-7.2 16-16 16H80M0 192c0 18 6 34.6 16 48v208c0 35.3 28.7 64 64 64s64-28.7 64-64v-82c5.1 1.3 10.5 2 16 2 25.3 0 47.2-14.7 57.6-36 7 2.6 14.5 4 22.4 4 20 0 37.9-9.2 49.7-23.6 9 4.9 19.4 7.6 30.3 7.6 35.3 0 64-28.7 64-64v-88C384 75.2 308.8 0 216 0h-48C75.2 0 0 75.2 0 168zm336 64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm-176 16c5.5 0 10.9-.7 16-2v34c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32zm64-24v-40c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M64 456c0 13.3 10.7 24 24 24s24-10.7 24-24V272H80c-5.5 0-10.8-.6-16-1.6zm48-216h56c13.2 0 24-10.7 24-24s-10.7-24-24-24h-56c-8.8 0-16-7.2-16-16s7.2-16 16-16h56c15.7 0 29.8 6.4 40 16.8 10.2-10.4 24.3-16.8 40-16.8 13.8 0 26.4 5 36.1 13.2 10.3-12.9 26.1-21.2 43.9-21.2 8.6 0 16.7 1.9 24 5.4C350.6 87.9 293.8 32 224 32h-64C89.3 32 32 89.3 32 160v32c0 26.5 21.5 48 48 48zm32 32v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-45.4c-7.3 3.5-15.4 5.4-24 5.4zm0 90.6V456c0 30.9-25.1 56-56 56s-56-25.1-56-56V256c-19.4-14.6-32-37.8-32-64v-32C0 71.6 71.6 0 160 0h64c88.4 0 160 71.6 160 160v104c0 30.9-25.1 56-56 56-12.1 0-23.3-3.8-32.5-10.4C285.6 325.5 268 336 248 336c-9.7 0-18.8-2.5-26.7-6.8C214 351.7 192.9 368 168 368c-8.6 0-16.7-1.9-24-5.4M224 240v40c0 13.2 10.8 24 24 24 13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm128 0v-32c0-13.3-10.7-24-24-24s-24 10.7-24 24v56c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M64 464c0 17.7 14.3 32 32 32s32-14.3 32-32V256H72c-2.7 0-5.4-.1-8-.4zm64-224h48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72c18.5 0 34.6 10.5 42.6 25.9C227.4 175 240.9 168 256 168s28.6 7 37.4 17.9c8-15.4 24.1-25.9 42.6-25.9 12.3 0 23.5 4.6 32 12.2V152c0-75.1-60.9-136-136-136h-80C76.9 16 16 76.9 16 152v32c0 30.9 25.1 56 56 56zm16 16v56c0 17.7 14.3 32 32 32s32-14.3 32-32v-68.2c-8.5 7.6-19.7 12.2-32 12.2zm0 91.8V464c0 26.5-21.5 48-48 48s-48-21.5-48-48V251.9C20 242 0 215.3 0 184v-32C0 68.1 68.1 0 152 0h80c83.9 0 152 68.1 152 152v112c0 26.5-21.5 48-48 48-13.8 0-26.3-5.8-35-15.2-6.8 18.2-24.4 31.2-45 31.2-12.4 0-23.6-4.7-32.1-12.3C222 340.5 201.3 360 176 360c-12.3 0-23.5-4.6-32-12.2M224 240v40c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm144-8v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v56c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
                  d="M64 512c17.7 0 32-14.3 32-32V272H32v208c0 17.7 14.3 32 32 32m160-312v.6c9.4-5.4 20.3-8.6 32-8.6 13.2 0 25.4 4 35.6 10.8 8.7-24.9 32.5-42.8 60.4-42.8 11.7 0 22.6 3.1 32 8.6V160C384 71.6 312.4 0 224 0h-61.7C119.8 0 79.1 16.9 49.1 46.9L37.5 58.5C13.5 82.5 0 115.1 0 149v27c0 35.3 28.7 64 64 64h88c22.1 0 40-17.9 40-40s-17.9-40-40-40H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h56c39.8 0 72 32.2 72 72"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 320c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32m-128 0v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32m-96 32v-48c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32"
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
