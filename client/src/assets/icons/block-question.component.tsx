import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlockQuestionIcon: React.FC<
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
                  d="M160 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm73.8 149.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L344 280.4c-.2 13-10.9 23.6-24 23.6-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 368a32 32 0 1 1 64 0 32 32 0 1 1-64 0M144 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M144 408a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M160 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM96 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm137.8 77.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L344 272.4c-.2 13-10.9 23.6-24 23.6-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 360a32 32 0 1 1 64 0 32 32 0 1 1-64 0M160 120a24 24 0 1 1 48 0 24 24 0 1 1-48 0m296-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M160 392a24 24 0 1 1 48 0 24 24 0 1 1-48 0m296-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m248 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M88 368a24 24 0 1 1 0 48 24 24 0 1 1 0-48m248 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M136.7 177.8c6.5-24.6 28.7-41.8 54.2-41.8H248c35.5 0 64 29 64 64.3 0 24-13.4 46.2-34.9 57.2L240 276.3V296c0 8.8-7.2 16-16 16s-16-7.2-16-16v-29.5c0-6 3.4-11.5 8.7-14.3l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7 0-17.8-14.4-32.3-32-32.3h-57.1c-10.9 0-20.5 7.4-23.2 17.9l-.2.7c-2.2 8.5-11 13.7-19.5 11.4s-13.7-11-11.4-19.5l.2-.7zM200 360a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm136 96c0-30.9 25.1-56 56-56h56.2c35.2 0 63.8 28.6 63.8 63.8 0 21.4-10.8 41.5-28.7 53.3L232 286.9V312c0 4.4-3.6 8-8 8s-8-3.6-8-8v-29.5c0-2.7 1.4-5.2 3.6-6.7l54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9 0-26.4-21.4-47.8-47.8-47.8H192c-22.1 0-40 17.9-40 40v6.5c0 4.4-3.6 8-8 8s-8-3.6-8-8v-6.5zm72 168a16 16 0 1 1 32 0 16 16 0 1 1-32 0M64 112a16 16 0 1 1 32 0 16 16 0 1 1-32 0m304-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32M64 400a16 16 0 1 1 32 0 16 16 0 1 1-32 0m304-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm73.8 141.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L248 272.4c-.2 13-10.9 23.6-24 23.6-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM192 360a32 32 0 1 1 64 0 32 32 0 1 1-64 0M48 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M48 408a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m304 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0M72 384a24 24 0 1 1 0 48 24 24 0 1 1 0-48m280 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M137.8 173.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L248 272.4c-.2 13-10.9 23.6-24 23.6-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM192 360a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
