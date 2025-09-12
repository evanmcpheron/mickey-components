import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const InterrobangIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 96c-35.3 0-64 28.7-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32C16 89.3 73.3 32 144 32h32c70.7 0 128 57.3 128 128v3.6c0 43.6-22.1 84.1-58.8 107.7L203 298.4c-6.9 4.4-11 12-11 20.2v1.4c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-17.7 14.3-32 32-32s32 14.3 32 32v53.4l18.6-12c18.3-11.8 29.4-32.1 29.4-53.8V160c0-35.3-28.7-64-64-64zm-24 344a40 40 0 1 1 80 0 40 40 0 1 1-80 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 80c-44.2 0-80 35.8-80 80 0 13.3-10.7 24-24 24s-24-10.7-24-24C16 89.3 73.3 32 144 32h32c70.7 0 128 57.3 128 128v4.6c0 40.1-20.1 77.6-53.4 99.8l-52.3 34.9c-8.9 5.9-14.2 15.9-14.2 26.6v18c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24s24 10.7 24 24v83.2l39.9-26.6c20-13.4 32.1-35.8 32.1-59.9V160c0-44.2-35.8-80-80-80zm-16 368a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 160c0-53 43-96 96-96h32c53 0 96 43 96 96 0 25.2-11.9 48.9-32 64l-60.8 45.6c-1.1.8-2.2 1.7-3.2 2.5V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-12c0-17.6 8.3-34.2 22.4-44.8l60.8-45.6c28.2-21.2 44.8-54.3 44.8-89.6 0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 8.8 7.2 16 16 16s16-7.2 16-16m112 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M136 48C78.6 48 32 94.6 32 152v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8C16 85.7 69.7 32 136 32h48c66.3 0 120 53.7 120 120v6.3c0 33.8-16.4 65.5-44 85L195.1 289c-17 12-27.1 31.5-27.1 52.3V368c0 4.4-3.6 8-8 8s-8-3.6-8-8V128c0-4.4 3.6-8 8-8s8 3.6 8 8v165.3c5-6.6 11-12.5 17.9-17.4l64.9-45.8c23.4-16.5 37.3-43.3 37.3-71.9V152c0-57.4-46.6-104-104-104zm8 400a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144 96c-35.3 0-64 28.7-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32C16 89.3 73.3 32 144 32h32c70.7 0 128 57.3 128 128v3.6c0 43.6-22.1 84.1-58.8 107.7L203 298.4c-6.9 4.4-11 12-11 20.2v-89.2l18.6-12c18.3-11.8 29.4-32.1 29.4-53.8V160c0-35.3-28.7-64-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v144c0 17.7 14.3 32 32 32s32-14.3 32-32zm-32 304a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
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
