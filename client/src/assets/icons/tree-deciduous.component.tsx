import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TreeDeciduousIcon: React.FC<
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
                  d="M384 80c-11.5 0-22.5 2.4-32.4 6.8C347 38.1 305.9 0 256 0s-91 38.1-95.6 86.8c-9.9-4.4-20.9-6.8-32.4-6.8-44.2 0-80 35.8-80 80 0 14.4 3.8 27.9 10.5 39.6C24.1 214.2 0 248.3 0 288c0 53 43 96 96 96h128v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h128c53 0 96-43 96-96 0-39.7-24.1-73.8-58.5-88.4 6.7-11.7 10.5-25.2 10.5-39.6 0-44.2-35.8-80-80-80"
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
                  d="M185.9 103.6c-1.4 6.2-5.3 11.6-10.7 15s-12 4.4-18.2 3c-4.1-1-8.5-1.5-13-1.5-30.9 0-56 25.1-56 56 0 6.4 1.1 12.5 3 18.2 3.8 11.1-1 23.4-11.3 28.9-18.9 10-31.7 30-31.7 52.8 0 33.1 26.9 60 60 60h124V152c0-13.3 10.7-24 24-24s24 10.7 24 24v184h124c33.1 0 60-26.9 60-60 0-22.8-12.8-42.8-31.7-52.9-10.4-5.6-15.2-17.8-11.3-28.9 1.9-5.7 3-11.8 3-18.2 0-30.9-25.1-56-56-56-4.5 0-8.8.5-13 1.5-6.2 1.5-12.7.4-18.2-3s-9.3-8.7-10.7-15C318.7 71.7 290.1 48 256 48s-62.7 23.7-70.1 55.6M232 384H108C48.4 384 0 335.6 0 276c0-34.4 16.1-65 41.1-84.8-.7-5-1.1-10.1-1.1-15.2 0-57.4 46.6-104 104-104h2c18.5-42.4 60.8-72 110-72s91.5 29.6 110 72h2c57.4 0 104 46.6 104 104 0 5.2-.4 10.2-1.1 15.2 25 19.8 41.1 50.4 41.1 84.8 0 59.6-48.4 108-108 108H280v104c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
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
                  d="M177.7 95.6c-.9 4.5-3.8 8.4-7.8 10.6s-8.8 2.7-13.1 1.2c-6.5-2.2-13.5-3.5-20.8-3.5-35.3 0-64 28.7-64 64 0 13.2 4 25.4 10.8 35.6 2.8 4.1 3.5 9.3 1.9 14s-5.2 8.4-9.9 10C49.9 236.3 32 260.1 32 288c0 35.3 28.7 64 64 64h144V144c0-8.8 7.2-16 16-16s16 7.2 16 16v208h144c35.3 0 64-28.7 64-64 0-27.9-17.9-51.7-42.8-60.4-4.7-1.6-8.3-5.3-9.9-10s-.9-9.9 1.9-14C436 193.4 440 181.2 440 168c0-35.3-28.7-64-64-64-7.3 0-14.3 1.2-20.8 3.5-4.3 1.5-9.1 1-13.1-1.2s-6.8-6.1-7.8-10.6C326.8 59.3 294.5 32 256 32s-70.8 27.3-78.3 63.6M240 384H96c-53 0-96-43-96-96 0-35.3 19.1-66.2 47.5-82.8-4.8-11.4-7.5-24-7.5-37.2 0-53 43-96 96-96 5.1 0 10.1.4 14.9 1.2C166.7 30.4 207.8 0 256 0s89.3 30.4 105.1 73.2C366 72.4 371 72 376 72c53 0 96 43 96 96 0 13.2-2.7 25.7-7.5 37.2 28.4 16.6 47.5 47.5 47.5 82.8 0 53-43 96-96 96H272v112c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M168.7 92.9c-.3 2.4-1.6 4.5-3.6 5.8s-4.5 1.6-6.8.9c-7-2.3-14.5-3.5-22.3-3.5-39.8 0-72 32.2-72 72 0 12.2 3 23.7 8.4 33.7 1.1 2 1.2 4.4.4 6.6s-2.5 3.9-4.7 4.7C37.7 224.3 16 253.6 16 288c0 44.2 35.8 80 80 80h152V136c0-4.4 3.6-8 8-8s8 3.6 8 8v232h152c44.2 0 80-35.8 80-80 0-34.4-21.7-63.7-52.1-75-2.2-.8-3.9-2.5-4.7-4.7s-.7-4.6.4-6.6c5.3-10.1 8.4-21.5 8.4-33.7 0-39.8-32.2-72-72-72-7.8 0-15.3 1.2-22.3 3.5-2.3.7-4.7.4-6.8-.9s-3.4-3.4-3.6-5.8C337.9 49.5 300.8 16 256 16s-81.9 33.5-87.3 76.9M248 384H96c-53 0-96-43-96-96 0-38.2 22.3-71.2 54.6-86.6-4.3-10.3-6.6-21.6-6.6-33.4 0-48.6 39.4-88 88-88 6.3 0 12.4.7 18.4 1.9C164.5 35.1 206.1 0 256 0s91.5 35.1 101.6 81.9c5.9-1.3 12.1-1.9 18.4-1.9 48.6 0 88 39.4 88 88 0 11.8-2.3 23.1-6.6 33.4 32.3 15.4 54.6 48.4 54.6 86.6 0 53-43 96-96 96H264v120c0 4.4-3.6 8-8 8s-8-3.6-8-8z"
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
                  d="M351.6 86.8c9.9-4.4 20.9-6.8 32.4-6.8 44.2 0 80 35.8 80 80 0 14.4-3.8 27.9-10.5 39.6 34.4 14.6 58.5 48.7 58.5 88.4 0 53-43 96-96 96H288V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v224H96c-53 0-96-43-96-96 0-39.7 24.1-73.8 58.5-88.4C51.8 187.9 48 174.4 48 160c0-44.2 35.8-80 80-80 11.5 0 22.5 2.4 32.4 6.8C165 38.1 206.1 0 256 0s91 38.1 95.6 86.8"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 128c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32"
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
