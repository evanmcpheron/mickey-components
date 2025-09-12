import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlaneArrivalIcon: React.FC<
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
                  d="M.3 166.9 0 68c0-10.3 9.5-17.9 19.5-15.7l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6-41.5-145.2C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2-41.2 15.6-86.2 18.1-128.8 7l-298.3-77.6c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m96-80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M552.2 333.2c4.3 4 2.8 11.1-2.8 12.9-26.5 8.8-54.9 9.7-81.9 2.6L141.9 264c-1.2-.3-2.3-.9-3.2-1.7l-87.7-75c-1.8-1.5-2.8-3.7-2.8-6.1L48 94.6l18.2 4.6c2.5.6 4.5 2.4 5.5 4.8l25.9 64.8c2.8 7 8.8 12.3 16.1 14.3l113.9 30.4c8.4 2.2 17.4-.2 23.4-6.5s8.3-15.3 5.8-23.6L216.3 48H242l107.1 190.4c3.2 5.6 8.5 9.8 14.7 11.4l113 30.1c16.3 4.3 31.3 12.6 43.7 24l31.6 29.2zm12.3 58.5c40.3-13.3 51.5-65 20.3-93.8l-31.6-29.2c-18.1-16.7-40-28.8-63.8-35.1L386 206.1 281.5 20.4C274.4 7.8 261.1 0 246.6 0h-41.1c-26.8 0-46 25.8-38.3 51.5l31.4 104.6-60.8-16.2-21.4-53.6c-6.7-16.7-21-29.2-38.4-33.5l-28.3-7.1C24.5 39.4 0 58.5 0 84.6l.2 96.8c0 16.3 7.2 31.8 19.6 42.4l87.7 75c6.4 5.5 14.1 9.5 22.3 11.6l325.5 84.7c35.9 9.4 73.8 8.1 109.1-3.5zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24zm168-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M253.3 32c5.8 0 11.1 3.1 13.9 8.2l121.3 215.5c2.1 3.7 5.6 6.4 9.7 7.6l91.5 25.4c15.9 4.4 30.7 12.3 43.2 23.2l26.7 23.1c11.5 9.9 6.7 28.7-8.1 32-27.1 6-55.3 5.1-82-2.5l-299-85c-1.8-.5-3.5-1.3-5-2.4l-94.6-68.4c-4.2-3-6.6-7.8-6.6-12.9L64 100l34.2 7.6c5.7 1.3 10.2 5.5 11.9 11l18.6 62c1.6 5.3 5.7 9.3 11 10.8l101.8 28.3c5.6 1.6 11.6 0 15.6-4.1s5.6-10.1 4-15.7L213.2 32zm41.8-7.5C286.6 9.4 270.6 0 253.3 0h-40.1c-21.2 0-36.6 20.3-30.8 40.8l40.1 140.4-65.8-18.3-16.1-53.6C135.6 92.7 122 80 105 76.2l-34-7.5C51 64.3 32 79.5 32 100l.2 95.8c0 15.4 7.4 29.8 19.9 38.8l94.7 68.4c4.5 3.3 9.6 5.7 15 7.3l4.4-15.4-4.4 15.4 298.8 84.9c31.8 9 65.4 10 97.7 2.9 40.6-8.9 53.6-60.3 22.1-87.5l-26.7-23.1c-16.1-13.9-35.1-24.1-55.6-29.8L413 234zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16zm160-112a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M223.8 198.4c5.6 1.7 11.7.1 15.8-4s5.7-10.1 4.1-15.8L197.2 16h40.1c5.8 0 11.1 3.1 13.9 8.2l119.8 213c2 3.6 5.4 6.3 9.4 7.5l96.5 28.5c13.9 4.1 26.9 10.9 38.3 20l27.4 21.9c14.9 12 9.8 35.8-8.8 40.6-31.6 8.1-64.8 8-96.4-.2l-311.7-81.2c-8.3-2.2-15.9-6.5-22-12.6l-82.8-83.6c-3-3-4.6-7-4.6-11.2L16 68l34.2 7.6c5.7 1.3 10.2 5.5 11.9 11l18.6 62c1.6 5.2 5.6 9.2 10.8 10.7zm4.5-15.3-18.2-5.4L96 144 77.4 82C74.1 70.9 65 62.4 53.7 59.9l-34.2-7.6C9.5 50.1 0 57.7 0 68l.2 98.9c0 8.4 3.4 16.5 9.3 22.5l82.9 83.5c8.1 8.1 18.2 14 29.3 16.9l311.7 81.1c34.2 8.9 70.1 9 104.4.2 31.3-8 40-48.4 14.8-68.6l-27.4-21.9c-13-10.4-27.8-18.1-43.7-22.8L385 229.3l-119.8-213C259.5 6.2 248.8 0 237.3 0h-40.1c-10.6 0-18.3 10.2-15.4 20.4l41.3 144.5zM8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h624c4.4 0 8-3.6 8-8s-3.6-8-8-8zm152-144a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80-16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M128 368a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 480c0-17.7 14.3-32 32-32h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m256-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="m0 68 .2 98.9c0 8.4 3.4 16.5 9.3 22.5l82.9 83.5c8.1 8.1 18.2 14 29.3 16.9l298.4 77.7c42.6 11.1 87.6 8.6 128.8-7 28.8-10.9 34.8-49 10.7-68.2l-34.4-27.6c-13-10.4-27.8-18.1-43.7-22.8l-107.3-31.7-109-193.9C259.5 6.2 248.8 0 237.3 0h-40.1c-10.6 0-18.3 10.2-15.4 20.4l41.5 145.2L96 128 78.1 80.2c-3.8-10.1-12.5-17.7-23-20l-35.6-7.9C9.5 50.1 0 57.7 0 68"
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
