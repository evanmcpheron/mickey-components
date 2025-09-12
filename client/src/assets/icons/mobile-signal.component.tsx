import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MobileSignalIcon: React.FC<
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
                  d="M64 64h224v251.7c18.3-21.2 39.9-39.5 64-54V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h160v-24c0-13.6 1-27 3-40H64zm80 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm344-128c-128.1 0-232 103.9-232 232 0 13.3 10.7 24 24 24s24-10.7 24-24c0-101.6 82.4-184 184-184 13.3 0 24-10.7 24-24s-10.7-24-24-24m-8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32-136c0-13.3-10.7-24-24-24-75.1 0-136 60.9-136 136 0 13.3 10.7 24 24 24s24-10.7 24-24c0-48.6 39.4-88 88-88 13.3 0 24-10.7 24-24"
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
                  d="M64 48h224c8.8 0 16 7.2 16 16v234.7c14.5-14.1 30.6-26.5 48-37V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h160v-24c0-8.1.4-16.1 1.1-24H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m80 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm344-144c-128.1 0-232 103.9-232 232 0 13.3 10.7 24 24 24s24-10.7 24-24c0-101.6 82.4-184 184-184 13.3 0 24-10.7 24-24s-10.7-24-24-24m-8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32-136c0-13.3-10.7-24-24-24-75.1 0-136 60.9-136 136 0 13.3 10.7 24 24 24s24-10.7 24-24c0-48.6 39.4-88 88-88 13.3 0 24-10.7 24-24"
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
                  d="M96 32h192c17.7 0 32 14.3 32 32v220.3c10.1-8.3 20.8-15.9 32-22.7V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h128v-24c0-2.7 0-5.3.1-8H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m128 368h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c2.2 0 4.3-.4 6.2-1.3 1.8-8.2 4-16.4 6.6-24.3-2.9-3.9-7.6-6.4-12.8-6.4m272-144c-132.5 0-240 107.5-240 240 0 8.8 7.2 16 16 16s16-7.2 16-16c0-114.9 93.1-208 208-208 8.8 0 16-7.2 16-16s-7.2-16-16-16m-16 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32-144c0-8.8-7.2-16-16-16-79.5 0-144 64.5-144 144 0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9 50.1-112 112-112 8.8 0 16-7.2 16-16"
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
                  d="M96 16h192c26.5 0 48 21.5 48 48v208.1c5.2-3.7 10.5-7.2 16-10.4V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h128v-16H96c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m48 416c-4.4 0-8 3.6-8 8s3.6 8 8 8h83c.8-5.4 1.8-10.7 2.9-16zm360-176c-137 0-248 111-248 248 0 4.4 3.6 8 8 8s8-3.6 8-8c0-128.1 103.9-232 232-232 4.4 0 8-3.6 8-8s-3.6-8-8-8m-8 224a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-48 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-120c0-4.4-3.6-8-8-8-83.9 0-152 68.1-152 152 0 4.4 3.6 8 8 8s8-3.6 8-8c0-75.1 60.9-136 136-136 4.4 0 8-3.6 8-8"
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
                  d="M288 64H64v384h163c-2 13-3 26.4-3 40v24H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v197.7c-24.1 14.5-45.7 32.8-64 54zM128 400c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 280c0-13.3-10.7-24-24-24-128.1 0-232 103.9-232 232 0 13.3 10.7 24 24 24s24-10.7 24-24c0-101.6 82.4-184 184-184 13.3 0 24-10.7 24-24m-64 200a32 32 0 1 0 64 0 32 32 0 1 0-64 0m40-128c-75.1 0-136 60.9-136 136 0 13.3 10.7 24 24 24s24-10.7 24-24c0-48.6 39.4-88 88-88 13.3 0 24-10.7 24-24s-10.7-24-24-24"
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
