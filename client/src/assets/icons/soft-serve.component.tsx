import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SoftServeIcon: React.FC<
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
                  d="M208 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7C208 56 200 64 190.1 64H128c-35.3 0-64 28.7-64 64 0 11.8 3.2 22.9 8.8 32.4C40.8 164 16 191.1 16 224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64s-28.7-64-64-64h-2.3c11.5-14.4 18.3-32.7 18.3-52.6C320 48.1 271.9 0 212.6 0zM48 320v32c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h134.7c16.3 0 30-12.3 31.8-28.5l11-99.5h1.8c17.7 0 32-14.3 32-32v-32z"
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
                  d="M192 0c-8.9 0-17 4.9-21.2 12.7S167.1 30 172 37.3l10.8 16.3c.7 1.1 1.1 2.4 1.1 3.7 0 3.7-3 6.7-6.7 6.7H140c-42 0-76 34-76 76 0 5.4.6 10.7 1.7 15.8C27.7 167.2 0 202.3 0 244c0 34.9 19.4 65.2 48 80.8V352c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h134.7c16.3 0 30-12.3 31.8-28.5l11-99.5h1.8c17.7 0 32-14.3 32-32v-27.2c28.6-15.6 48-45.9 48-80.8 0-41.9-28.1-77.3-66.4-88.4 1.6-6.3 2.4-12.8 2.4-19.6v-8C320 57.3 262.7 0 192 0m100 288H92c-24.3 0-44-19.7-44-44s19.7-44 44-44h20c13.3 0 24-10.7 24-24 0-12.3-9.3-22.5-21.2-23.8-1.8-3.7-2.8-7.8-2.8-12.2 0-15.5 12.5-28 28-28h37.3c29.7 0 53.9-23.7 54.7-53.3 23.9 13.8 40 39.7 40 69.3v8c0 5.8-1.5 11.3-4.3 16H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h76c24.3 0 44 19.7 44 44s-19.7 44-44 44"
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
                  d="M192 0c-5.9 0-11.3 3.2-14.1 8.5s-2.5 11.5.8 16.4l10.8 16.3c1.6 2.4 2.5 5.3 2.5 8.2 0 8.1-6.6 14.7-14.7 14.7H116c-37.6 0-68 30.4-68 68 0 11.5 2.8 22.2 7.8 31.7C23.5 174 0 204.2 0 240c0 32.8 19.7 61 48 73.3V352c0 22.2 15.1 41 35.7 46.4l8.9 71.6c3 24 23.4 42 47.6 42h103.6c24.2 0 44.6-18 47.6-42l8.9-71.6C320.9 393 336 374.2 336 352v-38.7c28.3-12.3 48-40.5 48-73.3 0-37.2-25.4-68.5-59.8-77.4 7.5-12.1 11.8-26.3 11.8-41.6C336 54.2 281.8 0 215 0zm112 288H80c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H93.4c-8.2-6.6-13.4-16.7-13.4-28 0-19.9 16.1-36 36-36h61.3c25.8 0 46.7-20.9 46.7-46.7 0-5.9-1.1-11.7-3.2-17.1 46.5 3 83.2 41.6 83.2 88.8 0 16.2-8.2 30.5-20.8 39H240c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c26.5 0 48 21.5 48 48s-21.5 48-48 48M80 320h224v32c0 8.8-7.2 16-16 16h-2c-8.1 0-14.9 6-15.9 14l-10.5 84c-1 8-7.8 14-15.9 14H140.2c-8.1 0-14.9-6-15.9-14l-10.5-84c-1-8-7.8-14-15.9-14H96c-8.8 0-16-7.2-16-16z"
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
                  d="M200 0c-3 0-5.7 1.6-7.1 4.2s-1.2 5.8.4 8.2l10.8 16.3c2.5 3.7 3.8 8.1 3.8 12.6.1 12.5-10.1 22.7-22.6 22.7H108c-33.1 0-60 26.9-60 60 0 13.6 4.5 26.1 12.1 36.1C26.6 162.1 0 190 0 224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64s-28.7-64-64-64h-1.8c11.1-12.5 17.8-29 17.8-47C336 50.6 285.4 0 223 0zm93.6 160H232c-4.4 0-8 3.6-8 8s3.6 8 8 8h88c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48s21.5-48 48-48h40c4.4 0 8-3.6 8-8s-3.6-8-8-8H82.7C71.4 152 64 138.9 64 124c0-24.3 19.7-44 44-44h77.3c21.4 0 38.7-17.3 38.7-38.7 0-7.6-2.3-15.1-6.5-21.5l-2.6-3.8h8.1c53.6 0 97 43.4 97 97 0 19.9-10.6 37.3-26.4 47M64 328c0-4.4-3.6-8-8-8s-8 3.6-8 8v16c0 22.1 17.9 40 40 40h.9l11.6 93c2.5 20 19.5 35 39.7 35h103.6c20.2 0 37.2-15 39.7-35l11.6-93h.9c22.1 0 40-17.9 40-40v-16c0-4.4-3.6-8-8-8s-8 3.6-8 8v16c0 13.3-10.7 24-24 24h-8c-4 0-7.4 3-7.9 7l-12.5 100c-1.5 12-11.7 21-23.8 21H140.2c-12.1 0-22.3-9-23.8-21l-12.5-100c-.5-4-3.9-7-7.9-7h-8c-13.3 0-24-10.7-24-24z"
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
                  d="M310.6 161.5c6-9.7 9.4-21.2 9.4-33.5C320 57.3 262.7 0 192 0l6.1 6.1c6.4 6.4 9.9 15 9.9 24 0 18.7-15.2 33.9-33.9 33.9H128c-35.3 0-64 28.7-64 64 0 12.3 3.5 23.7 9.4 33.5C40.7 168.2 16 197.2 16 232c0 39.8 32.2 72 72 72h208c39.8 0 72-32.2 72-72 0-34.8-24.7-63.8-57.4-70.5"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 304c-17.7 0-32 14.3-32 32v16c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h134.7c16.3 0 30-12.3 31.8-28.5l11-99.5h1.8c17.7 0 32-14.3 32-32v-16c0-17.7-14.3-32-32-32z"
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
