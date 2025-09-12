import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BanParkingIcon: React.FC<
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
                  d="M412.5 367.2 342.3 297c20.6-17.6 33.7-43.8 33.7-73 0-53-43-96-96-96h-72c-9.7 0-18.6 3.5-25.5 9.2l-37.7-37.7C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192 0 41.5-13.1 79.9-35.5 111.2m-45.3 45.3C335.9 434.9 297.5 448 256 448c-106 0-192-86-192-192 0-41.5 13.1-79.9 35.5-111.2zm-70.6-161.1L237.3 192H280c17.7 0 32 14.3 32 32 0 11.6-6.2 21.7-15.4 27.4M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-250.7V352c0 17.7 14.3 32 32 32s32-14.3 32-32v-26.7z"
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
                  d="M256 464c-114.9 0-208-93.1-208-208 0-48.8 16.8-93.7 44.9-129.1l292.2 292.2C349.7 447.2 304.8 464 256 464m80-162c24.2-17.4 40-45.9 40-78 0-53-43-96-96-96h-80c-10.4 0-19.6 4.9-25.5 12.6l-47.6-47.7C162.3 64.8 207.2 48 256 48c114.9 0 208 93.1 208 208 0 48.8-16.8 93.7-44.9 129.1zM216 182v-6h64c26.5 0 48 21.5 48 48 0 18.9-11 35.3-26.9 43.1l-85.1-85zm40 330a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-246.1V360c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h6.1z"
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
                  d="M256 480C132.3 480 32 379.7 32 256c0-56.1 20.6-107.4 54.7-146.7l316 316C363.4 459.4 312.1 480 256 480m76-170.6c30.9-16 52-48.2 52-85.4 0-53-43-96-96-96h-88c-13.3 0-24 10.7-24 24v1.4l-66.7-66.7C148.6 52.6 199.9 32 256 32c123.7 0 224 100.3 224 224 0 56.1-20.6 107.4-54.7 146.7zM307.6 285 208 185.4V160h80c35.3 0 64 28.7 64 64 0 28.5-18.7 52.7-44.4 61M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-254.1V368c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h30.1z"
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
                  d="M420 431.3 80.7 92C40.6 134.9 16 192.6 16 256c0 132.5 107.5 240 240 240 63.4 0 121.1-24.6 164-64.7m11.3-11.3c40.1-42.9 64.7-100.6 64.7-164 0-132.5-107.5-240-240-240-63.4 0-121.1 24.6-164 64.7l84 84V144c0-8.8 7.2-16 16-16h96c48.6 0 88 39.4 88 88 0 40.3-27.1 74.2-64 84.7zM192 180.7l106.5 106.5c34.8-5.1 61.5-35.1 61.5-71.2 0-39.8-32.2-72-72-72h-96zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176 40v-46.1l16 16V288h22.1l16 16H192v72c0 4.4-3.6 8-8 8s-8-3.6-8-8z"
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
                  d="M342.3 297c20.6-17.6 33.7-43.8 33.7-73 0-53-43-96-96-96h-72c-9.7 0-18.6 3.5-25.5 9.2l54.8 54.8H280c17.7 0 32 14.3 32 32 0 11.6-6.2 21.7-15.4 27.4zM168 288v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-26.7l-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M367.2 412.5 99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5m45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"
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
