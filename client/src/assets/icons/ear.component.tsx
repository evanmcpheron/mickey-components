import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EarIcon: React.FC<
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
                  d="M319.9 335.2c-18.2 16.3-30 39.1-35.1 62.9-5.6 26.3-18.6 51.3-39 71.7-56.2 56.2-147.4 56.2-203.6 0C14.1 441.7 0 404.9 0 368V192C0 86 86 0 192 0s192 86 192 192c0 56.9-24.8 108-64.1 143.2M128 192c0-35.3 28.7-64 64-64s64 28.7 64 64v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-61.9-50.1-112-112-112S80 130.1 80 192v20.2c0 21.2 12 40.6 31 50.1l14 7c1.8.9 3 2.8 3 4.9 0 1.6-.7 3.2-2 4.2l-37.4 31.2c-10.2 8.5-11.6 23.6-3.1 33.8s23.6 11.6 33.8 3.1l37.4-31.2c12.3-10.2 19.3-25.2 19.3-41.1 0-20.2-11.4-38.8-29.5-47.8l-14-7c-2.7-1.4-4.4-4.1-4.4-7.2V192z"
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
                  d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192v176c0 53 43 96 96 96s96-43 96-96c0-21.7 10.9-42.6 29.8-54.8C309.7 287.5 336 242.8 336 192m48 0c0 67.8-35.1 127.4-88.2 161.5-4.9 3.2-7.8 8.6-7.8 14.5 0 79.5-64.5 144-144 144S0 447.5 0 368V192C0 86 86 0 192 0s192 86 192 192m-256 0v20.2c0 3 1.7 5.8 4.4 7.2l14 7c18.1 9.1 29.5 27.6 29.5 47.8 0 15.9-7 30.9-19.2 41.1l-37.4 31.2c-10.2 8.5-25.3 7.1-33.8-3.1s-7.1-25.3 3.1-33.8l37.4-31.2c1.2-1 2-2.6 2-4.2 0-2.1-1.2-4-3-4.9l-14-7c-19-9.5-31-28.9-31-50.1V192c0-61.9 50.1-112 112-112s112 50.1 112 112v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-35.3-28.7-64-64-64s-64 28.7-64 64"
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
                  d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192v176c0 61.9 50.1 112 112 112s112-50.1 112-112c0-16.4 8.2-32.2 22.5-41.4C322.8 298.1 352 248.5 352 192m32 0c0 67.8-35.1 127.4-88.2 161.5-4.9 3.2-7.8 8.6-7.8 14.5 0 79.5-64.5 144-144 144S0 447.5 0 368V192C0 86 86 0 192 0s192 86 192 192m-272 0v6.3c0 10.7 5.3 20.7 14.2 26.6l8.9 5.9c15.5 10.4 24.9 27.8 24.9 46.5 0 16.6-7.4 32.3-20.1 42.9l-33.7 28c-6.8 5.7-16.9 4.7-22.5-2s-4.7-16.9 2-22.5l33.7-28c5.4-4.5 8.6-11.2 8.6-18.3 0-8-4-15.4-10.6-19.9l-8.9-5.9C90.7 239.7 80 219.7 80 198.3V192c0-61.9 50.1-112 112-112s112 50.1 112 112v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192v176c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11.1 5.6-21.7 15.2-27.9 48.7-31.3 80.8-86 80.8-148.1m16 0c0 67.8-35.1 127.4-88.2 161.5-4.9 3.2-7.8 8.6-7.8 14.5 0 79.5-64.5 144-144 144S0 447.5 0 368V192C0 86 86 0 192 0s192 86 192 192m-304 0v14.3c0 13.4 6.7 25.9 17.8 33.3l8.9 5.9c13.3 8.9 21.3 23.8 21.3 39.8 0 14.2-6.3 27.7-17.2 36.8l-33.7 28c-3.4 2.8-8.4 2.4-11.3-1s-2.4-8.4 1-11.3l33.7-28c7.3-6.1 11.5-15 11.5-24.5 0-10.7-5.3-20.6-14.2-26.5l-8.9-5.9C73.4 242.5 64 225 64 206.3V192c0-70.7 57.3-128 128-128s128 57.3 128 128v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-61.9-50.1-112-112-112S80 130.1 80 192"
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
                  d="M319.9 335.2c-18.2 16.3-30 39.1-35.1 62.9-5.6 26.3-18.6 51.3-39 71.7-56.2 56.2-147.4 56.2-203.6 0C14.1 441.7 0 404.9 0 368V192C0 86 86 0 192 0s192 86 192 192c0 56.9-24.8 108-64.1 143.2M128 192c0-35.3 28.7-64 64-64s64 28.7 64 64v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-61.9-50.1-112-112-112S80 130.1 80 192v20.2c0 21.2 12 40.6 31 50.1l14 7c1.8.9 3 2.8 3 4.9 0 1.6-.7 3.2-2 4.2l-37.4 31.2c-10.2 8.5-11.6 23.6-3.1 33.8s23.6 11.6 33.8 3.1l37.4-31.2c12.3-10.2 19.3-25.2 19.3-41.1 0-20.2-11.4-38.8-29.5-47.8l-14-7c-2.7-1.4-4.4-4.1-4.4-7.2V192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 128c-35.3 0-64 28.7-64 64v20.2c0 3 1.7 5.8 4.4 7.2l14 7c18.1 9.1 29.5 27.6 29.5 47.8 0 15.9-7 30.9-19.2 41.1l-37.4 31.2c-10.2 8.5-25.3 7.1-33.8-3.1s-7.1-25.3 3.1-33.8l37.4-31.2c1.2-1 2-2.6 2-4.2 0-2.1-1.2-4-3-4.9l-14-7c-19-9.5-31-28.9-31-50.1V192c0-61.9 50.1-112 112-112s112 50.1 112 112v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-35.3-28.7-64-64-64"
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
