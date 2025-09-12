import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RouterIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M352 48c58.8 0 112.5 21.8 153.4 57.9 9.9 8.8 25.1 7.8 33.9-2.1s7.8-25.1-2.1-33.9C487.8 26.4 422.9 0 352 0S216.2 26.4 166.9 69.9c-9.9 8.8-10.9 23.9-2.1 33.9s23.9 10.9 33.9 2.1C239.5 69.8 293.2 48 352 48m24 200c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H376zM96 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m116.5-229.3C297.1 170 323.4 160 352 160s54.9 10 75.5 26.7c10.3 8.3 25.4 6.8 33.8-3.5s6.8-25.4-3.5-33.8C428.8 126 392 112 352 112s-76.8 14-105.7 37.4c-10.3 8.3-11.9 23.5-3.5 33.8s23.5 11.9 33.8 3.5z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M198.6 105.9c-9.9 8.8-25.1 7.8-33.9-2.1s-7.8-25.1 2.1-33.9C216.2 26.4 281.1 0 352 0s135.8 26.4 185.1 69.9c9.9 8.8 10.9 23.9 2.1 33.9s-23.9 10.9-33.9 2.1C464.5 69.8 410.8 48 352 48s-112.5 21.8-153.4 57.9M64 352c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16zM0 368c0-35.3 28.7-64 64-64h264v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h136c35.3 0 64 28.7 64 64v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 16a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m192-248c-28.6 0-54.9 10-75.5 26.7-10.3 8.3-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C275.2 126 312 112 352 112s76.8 14 105.7 37.4c10.3 8.3 11.9 23.5 3.5 33.8s-23.5 11.9-33.8 3.5C406.9 170 380.6 160 352 160"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M352 32c62.9 0 120.4 22.6 165 60.2 6.8 5.7 16.8 4.8 22.5-1.9s4.8-16.8-1.9-22.5C487.5 25.5 422.7 0 352 0S216.5 25.5 166.4 67.8c-6.8 5.7-7.6 15.8-1.9 22.5s15.8 7.6 22.5 1.9C231.6 54.6 289.1 32 352 32m16 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H368zM64 352h448c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m40 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m42.2-251.4C277.9 141.7 313.3 128 352 128s74.1 13.7 101.8 36.6c6.8 5.6 16.9 4.7 22.5-2.1s4.7-16.9-2.1-22.5C441 112.5 398.4 96 352 96s-89 16.5-122.2 43.9c-6.8 5.6-7.8 15.7-2.1 22.5s15.7 7.8 22.5 2.1z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M173.2 83c-3.3 2.9-8.4 2.6-11.3-.8s-2.6-8.4.8-11.3C213.3 26.8 279.5 0 352 0s138.7 26.8 189.3 70.9c3.3 2.9 3.7 8 .8 11.3s-8 3.7-11.3.8C483 41.3 420.4 16 352 16S221 41.3 173.2 83m79.9 79.2c-3.5 2.7-8.5 2.1-11.2-1.3s-2.1-8.5 1.3-11.2C273.1 126.1 310.9 112 352 112s78.9 14.1 108.8 37.6c3.5 2.7 4.1 7.8 1.3 11.2s-7.8 4.1-11.2 1.3C423.7 140.8 389.3 128 352 128s-71.7 12.8-98.9 34.2M352 224c4.4 0 8 3.6 8 8v88h152c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h280v-88c0-4.4 3.6-8 8-8M64 336c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H64m112 80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M352 48c-58.8 0-112.5 21.8-153.4 57.9-9.9 8.8-25.1 7.8-33.9-2.1s-7.8-25.1 2.1-33.9C216.2 26.4 281.1 0 352 0s135.8 26.4 185.1 69.9c9.9 8.8 10.9 23.9 2.1 33.9s-23.9 10.9-33.9 2.1C464.5 69.8 410.8 48 352 48M64 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m212.5-229.3c-10.3 8.3-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C275.2 126 312 112 352 112s76.8 14 105.7 37.4c10.3 8.3 11.9 23.5 3.5 33.8s-23.5 11.9-33.8 3.5C406.9 170 380.6 160 352 160s-54.9 10-75.5 26.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M376 248c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H376zM96 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
