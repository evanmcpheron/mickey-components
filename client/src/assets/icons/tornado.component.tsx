import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TornadoIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 32v13.6c0 17.1 1.7 34 5 50.4h352.8c3.2-6.9 7.5-13.3 13-18.8l38.6-38.6c4.2-4.2 6.6-10 6.6-16C416 10.1 405.9 0 393.4 0H32C14.3 0 0 14.3 0 32m352.2 96H13.6c12.2 35.9 32.3 68.7 58.8 96H412l-47.2-62.9c-7.3-9.7-11.6-21.2-12.6-33.1m-226 138.2 116.4 68.5c8.2 4.8 15.8 10.7 22.5 17.3H445c2-9.8 3-19.9 3-30.1 0-23-5.3-45.5-15.3-65.9H110.2c5.2 3.6 10.5 7 16 10.2M288 384c10.3 21.4 13.8 45.5 9.9 69l-5.9 35.7c-2 12.2 7.4 23.4 19.8 23.4 5.3 0 10.4-2.1 14.2-5.9l78.2-78.2c12.8-12.8 23.1-27.7 30.4-43.9H288z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M332.4 48H48c.3 28 6.3 55.1 17 80h239.1c-.1-1.8-.1-3.6-.1-5.4 0-27.6 10.2-54.1 28.4-74.6m-14.9 128H94c15.5 19.3 34.6 35.9 56.6 48.9l52.9 31.1H376l-49.6-66.1c-3.3-4.4-6.3-9.1-8.9-13.9m80.9 128H282.9c19.9 15.1 36.1 34.6 47.3 57 8.9 17.8 14.4 37 16.4 56.5l23.6-23.6c19.1-19.1 29.8-45 29.8-72 0-6-.5-12.1-1.6-17.9m5.7 123.9L340 492l-.4.4-3.6 3.6-10.1 10.1c-3.8 3.8-8.9 5.9-14.2 5.9-12.4 0-21.8-11.1-19.8-23.4l2.4-14.1.8-5 .1-.5 2.7-16c4-24 .3-48.7-10.6-70.5-10-19.9-25.5-36.5-44.6-47.8l-116.5-68.5C48 220.2 0 136.3 0 45.6V32C0 14.3 14.3 0 32 0h361.4C405.9 0 416 10.1 416 22.6c0 6-2.4 11.8-6.6 16l-38.6 38.6c-12 12-18.8 28.4-18.8 45.4 0 13.9 4.5 27.4 12.8 38.5L418 232c19.4 25.9 30 57.5 30 89.9 0 39.7-15.8 77.8-43.9 105.9z"
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
                  d="M352 122.6c0 13.9 4.5 27.4 12.8 38.5L418 232c19.4 25.9 30 57.5 30 89.9 0 39.7-15.8 77.8-43.9 105.9L325.9 506c-3.8 3.8-8.9 5.9-14.2 5.9-12.4 0-21.8-11.1-19.8-23.4l5.9-35.7c4-24 .3-48.7-10.6-70.5-10-19.9-25.5-36.5-44.6-47.8l-116.4-68.3C48 220.2 0 136.3 0 45.6V32C0 14.3 14.3 0 32 0h361.4C405.9 0 416 10.1 416 22.6c0 6-2.4 11.8-6.6 16l-38.6 38.6c-12 12-18.8 28.4-18.8 45.4m-320-77c0 28.7 5.5 56.6 15.7 82.4h272.5c-.1-1.8-.2-3.6-.2-5.4 0-25.5 10.1-50 28.2-68L370.7 32H32zm110.4 193.1 57.6 33.8v-.5h204.9c-3.4-7.3-7.6-14.2-12.5-20.8l-53.2-70.9c-4.7-6.3-8.6-13.1-11.7-20.3H63.4c19 31.9 45.9 59.2 79 78.7M253.5 304l5.3 3.1c24.5 14.4 44.3 35.6 57 61 13.8 27.5 18.5 58.6 13.7 89l51.9-51.9c22.1-22.1 34.5-52.1 34.5-83.3 0-6-.5-12-1.4-17.9z"
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
                  d="M16 45.6c0 28.5 5.1 56.4 14.6 82.4h305.5c-.1-1.4-.1-2.9-.1-4.3 0-22.2 9.6-43.3 26.3-57.9l33.8-29.6c2.5-2.2 3.9-5.3 3.9-8.7 0-6.4-5.2-11.5-11.5-11.5H32c-8.8 0-16 7.2-16 16zM37.1 144c20.1 44.6 53.6 82.8 97.2 108.4l60.5 35.6h232.8c-4.4-16.7-11.9-32.4-22.4-46.4l-53.8-71.8c-5.8-7.8-10.1-16.6-12.7-25.9H37.1zm393.7 160H222l28.8 16.9c21.8 12.8 39.5 31.7 50.8 54.4 12.4 24.8 16.6 52.9 12.1 80.2l-5.9 35.7c-.4 2.5 1.5 4.7 4 4.7 1.1 0 2.1-.4 2.9-1.2l78.2-78.2c25.1-25.1 39.2-59.1 39.2-94.6 0-6-.4-12-1.2-17.9zM0 45.6V32C0 14.3 14.3 0 32 0h356.5C403.7 0 416 12.3 416 27.5c0 7.9-3.4 15.5-9.4 20.7l-33.8 29.6c-13.2 11.6-20.8 28.3-20.8 45.9 0 13.2 4.3 26 12.2 36.6L418 232c19.4 25.9 30 57.5 30 89.9 0 39.7-15.8 77.8-43.9 105.9L325.9 506c-3.8 3.8-8.9 5.9-14.2 5.9-12.4 0-21.8-11.1-19.8-23.4l5.9-35.7c4-24 .3-48.7-10.6-70.5-10-19.9-25.5-36.5-44.6-47.8l-116.4-68.3C48 220.2 0 136.3 0 45.6"
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
                  d="M0 32v13.6c0 17.1 1.7 34 5 50.4h352.8c3.2-6.9 7.5-13.3 13-18.8l38.6-38.6c4.2-4.2 6.6-10 6.6-16C416 10.1 405.9 0 393.4 0H32C14.3 0 0 14.3 0 32m352.2 96H13.6c12.2 35.9 32.3 68.7 58.8 96H412l-47.2-62.9c-7.3-9.7-11.6-21.2-12.6-33.1m-226 138.2 116.4 68.5c8.2 4.8 15.8 10.7 22.5 17.3H445c2-9.8 3-19.9 3-30.1 0-23-5.3-45.5-15.3-65.9H110.2c5.2 3.6 10.5 7 16 10.2M288 384c10.3 21.4 13.8 45.5 9.9 69l-5.9 35.7c-2 12.2 7.4 23.4 19.8 23.4 5.3 0 10.4-2.1 14.2-5.9l78.2-78.2c12.8-12.8 23.1-27.7 30.4-43.9H288z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M13.6 128c-3.5-10.4-6.4-21.1-8.6-32h352.8c-3.8 8.3-5.8 17.3-5.8 26.6 0 1.8.1 3.6.2 5.4zm96.6 128c-13.7-9.5-26.3-20.2-37.8-32H412l6 8c5.7 7.5 10.6 15.6 14.7 24zM288 384c-.2-.5-.5-1-.7-1.5-5.7-11.4-13.2-21.7-22.1-30.5H445c-2.3 11-5.8 21.8-10.4 32z"
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
