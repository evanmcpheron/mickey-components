import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RaindropsIcon: React.FC<
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
                  d="M102.4 133.6c-4.2 8.6-6.4 18-6.4 27.6 0 34.7 28.1 62.8 62.8 62.8h2.4c34.7 0 62.8-28.1 62.8-62.8 0-9.6-2.2-19-6.4-27.6l-46.1-94.4c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2zm-96 192c-4.2 8.6-6.4 18-6.4 27.6C0 387.9 28.1 416 62.8 416h2.4c34.7 0 62.8-28.1 62.8-62.8 0-9.6-2.2-19-6.4-27.6l-46.1-94.4c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2zm301.4-190.8L210 294.2c-11.8 19.2-18 41.3-18 63.8 0 67.4 54.6 122 122 122h12c67.4 0 122-54.6 122-122 0-22.5-6.2-44.6-18-63.8l-97.8-159.4c-2.6-4.2-7.2-6.8-12.2-6.8s-9.6 2.6-12.2 6.8"
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
                  d="m105.9 106.6 41.9-67.8c2.6-4.2 7.2-6.8 12.2-6.8s9.6 2.6 12.2 6.8l41.9 67.8c6.5 10.5 9.9 22.6 9.9 34.9v2.5c0 35.3-28.7 64-64 64s-64-28.7-64-64v-2.5c0-12.3 3.4-24.4 9.9-34.9m-96 192 41.9-67.8c2.6-4.2 7.2-6.8 12.2-6.8s9.6 2.6 12.2 6.8l41.9 67.8c6.5 10.5 9.9 22.6 9.9 34.9v2.5c0 35.3-28.7 64-64 64S0 371.3 0 336v-2.5c0-12.3 3.4-24.4 9.9-34.9m242.6 11.5c-8.2 12.7-12.5 27.6-12.5 42.7 0 43.4 35.9 79.2 80 79.2s80-35.8 80-79.2c0-15.1-4.3-30-12.5-42.7L320 204.6zm-40.4-25.9 95.6-149.5c2.7-4.2 7.3-6.7 12.3-6.7s9.6 2.5 12.3 6.7l95.6 149.5c13.1 20.5 20.1 44.3 20.1 68.6C448 423 390.3 480 320 480s-128-57-128-127.2c0-24.3 7-48.1 20.1-68.6"
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
                  d="m160 85.6-27.8 53c-2.7 5.2-4.2 11-4.2 16.9v4.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-4.5c0-5.9-1.4-11.7-4.2-16.9zm-11.7-46.5c2.3-4.4 6.8-7.1 11.7-7.1s9.4 2.7 11.7 7.1l44.4 84.6c5.2 9.8 7.8 20.7 7.8 31.8v4.5c0 35.3-28.7 64-64 64s-64-28.7-64-64v-4.5c0-11.1 2.7-22 7.8-31.8l44.4-84.6zM64 277.6l-27.8 53c-2.7 5.2-4.2 11-4.2 16.9v4.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-4.5c0-5.9-1.4-11.7-4.2-16.9zm-11.7-46.5c2.3-4.4 6.8-7.1 11.7-7.1s9.4 2.7 11.7 7.1l44.4 84.6c5.2 9.8 7.8 20.7 7.8 31.8v4.5c0 35.3-28.7 64-64 64s-64-28.7-64-64v-4.5c0-11.1 2.7-22 7.8-31.8l44.4-84.6zM239 301.5c-9.8 15.3-15 33.1-15 51.3 0 52.3 43.2 95.2 96 95.2s96-42.9 96-95.2c0-18.2-5.2-36-15-51.3l-81-126.6zm-27-17.2 95.6-149.5c2.7-4.2 7.3-6.7 12.3-6.7s9.6 2.5 12.3 6.7l95.6 149.5c13.2 20.4 20.2 44.2 20.2 68.5C448 423 390.3 480 320 480s-128-57-128-127.2c0-24.3 7-48.1 20.1-68.6z"
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
                  d="m160 51.2-42 80c-3.9 7.5-6 15.9-6 24.4v4.4c0 26.5 21.5 48 48 48s48-21.5 48-48v-4.5c0-8.5-2.1-16.9-6-24.4l-42-80zm-11.7-12.1c2.3-4.4 6.8-7.1 11.7-7.1s9.4 2.7 11.7 7.1l44.4 84.6c5.2 9.8 7.8 20.7 7.8 31.8v4.5c0 35.3-28.7 64-64 64s-64-28.7-64-64v-4.5c0-11.1 2.7-22 7.8-31.8l44.4-84.6zM64 243.2l-42 80c-3.9 7.5-6 15.9-6 24.4v4.4c0 26.5 21.5 48 48 48s48-21.5 48-48v-4.5c0-8.5-2.1-16.9-6-24.4l-42-80zm-11.7-12.1c2.3-4.4 6.8-7.1 11.7-7.1s9.4 2.7 11.7 7.1l44.4 84.6c5.2 9.8 7.8 20.7 7.8 31.8v4.5c0 35.3-28.7 64-64 64s-64-28.7-64-64v-4.5c0-11.1 2.7-22 7.8-31.8l44.4-84.6zm173.3 61.7c-11.5 17.9-17.5 38.7-17.5 59.9C208 414.1 258.4 464 320 464s112-49.9 112-111.2c0-21.2-6.1-42-17.5-59.9L320 145.2l-94.5 147.6zm-13.5-8.6 95.6-149.5c2.7-4.2 7.3-6.7 12.3-6.7s9.6 2.5 12.3 6.7l95.6 149.5c13.1 20.5 20.1 44.3 20.1 68.6C448 423 390.3 480 320 480s-128-57-128-127.2c0-24.3 7-48.1 20.1-68.6"
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
                  d="m148.5 39.2-46.1 94.4c-4.2 8.6-6.4 18-6.4 27.6 0 34.7 28.1 62.8 62.8 62.8h2.4c34.7 0 62.8-28.1 62.8-62.8 0-9.6-2.2-19-6.4-27.6l-46.1-94.4c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2m-96 192L6.4 325.6c-4.2 8.6-6.4 18-6.4 27.6C0 387.9 28.1 416 62.8 416h2.4c34.7 0 62.8-28.1 62.8-62.8 0-9.6-2.2-19-6.4-27.6l-46.1-94.4c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="m210 294.2 97.8-159.4c2.6-4.2 7.2-6.8 12.2-6.8s9.6 2.6 12.2 6.8L430 294.2c11.8 19.2 18 41.3 18 63.8 0 67.4-54.6 122-122 122h-12c-67.4 0-122-54.6-122-122 0-22.5 6.2-44.6 18-63.8"
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
