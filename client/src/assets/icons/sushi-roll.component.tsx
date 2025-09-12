import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SushiRollIcon: React.FC<
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
                  d="M448 368V144c0-61.9-100.3-112-224-112S0 82.1 0 144v224c0 61.9 100.3 112 224 112s224-50.1 224-112M308.2 198.4c-24.5 6.1-53.3 9.6-84.2 9.6-40.7 0-77.8-6.1-106-16.1 14.8-14.8 32.8-26.7 51.4-36.1 20.5-10.3 40.9-17 56.9-20.8 18.2 27.3 46.6 49.9 82 63.4zm-103.1-118c.8 6 2.1 11.9 3.8 17.7-17.3 4.7-37.4 11.8-57.5 21.9-24.5 12.3-49.9 29.4-70.3 52.7C70.2 164.1 64 154.4 64 144c0-32.8 61.7-59.8 141.1-63.6m40.7.2c78 4.3 138.2 31 138.2 63.4 0 9.8-5.5 19.1-15.4 27.4-69.5-5.5-113.5-48.4-122.8-90.8"
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
                  d="M400 207.7c-13.2 11.2-29 19.7-45 26.1-36 14.4-82.3 22.2-131 22.2s-95-7.8-131-22.2c-16-6.4-31.9-14.9-45-26.1V368c0 3 3.6 18.5 39.1 36.3C119.6 420.5 168 432 224 432s104.4-11.5 136.9-27.7C396.4 386.5 400 371 400 368zM64 144c0 10.4 6.2 20.1 17.1 28.8 20.4-23.3 45.9-40.4 70.3-52.7 20.1-10.1 40.2-17.3 57.5-21.9-1.7-5.8-3-11.7-3.8-17.7C125.7 84.2 64 111.2 64 144m54 47.9c28.2 10 65.4 16.1 106 16.1 30.9 0 59.8-3.5 84.2-9.6-35.3-13.5-63.8-36.1-82-63.4-16 3.8-36.4 10.5-56.9 20.8-18.6 9.3-36.6 21.3-51.4 36.1zM384 144c0-32.4-60.1-59.2-138.2-63.4 9.3 42.5 53.3 85.3 122.8 90.8 9.8-8.3 15.4-17.6 15.4-27.4M224 32c123.7 0 224 50.1 224 112v224c0 61.9-100.3 112-224 112S0 429.9 0 368V144C0 82.1 100.3 32 224 32"
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
                  d="M448 136c0-22.4-12.2-39.9-25.9-52-13.6-12.1-31.6-21.6-51.1-28.9C331.8 40.4 279.8 32 224 32S116.2 40.4 77 55.1C57.5 62.4 39.5 71.9 25.9 84 12.2 96.1 0 113.6 0 136v216c0 45.2 35.8 77.4 73.9 96.5C114 468.5 167.1 480 224 480s110-11.5 150.1-31.5c38.1-19.1 73.9-51.3 73.9-96.5zm-32 0c0 14.8-11.9 28.6-32.3 40-89.2-.1-143.5-58.9-143.7-111.8 98.6 3 176 34 176 71.8m-384 0c0-37.7 77.4-68.7 176-71.8 0 12.5 2.1 24.9 6 36.7-17.9 4.6-39.3 11.9-60.8 22.7-26.7 13.4-54.4 32.6-75.2 59.1-28.7-12.5-46-28.8-46-46.7m78.4 58.1c16.1-17.5 36.3-31.3 57.2-41.8 22-11 43.8-18 60.5-21.8 19.3 30.3 51.4 55 92 67.8-28.3 6.2-61.1 9.7-96.1 9.7-42.5 0-81.8-5.2-113.6-13.9M32 193c12.7 9.7 28.3 17.6 45 23.8 39.2 14.7 91.2 23.1 147 23.1s107.8-8.4 147-23.1c16.7-6.3 32.3-14.1 45-23.8v159c0 53-86 96-192 96S32 405 32 352z"
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
                  d="M448 128v-2c0-17-9.2-31.3-21.7-42.3-12.5-11.1-29.7-20.4-49.6-27.8C336.8 40.9 282.8 32 224 32S111.2 40.9 71.3 55.9c-19.9 7.4-37.1 16.7-49.6 27.8C9.2 94.7 0 109 0 126v234c0 38 30.4 68.2 69.8 87.8C110.1 468 164.6 480 224 480s113.9-12 154.2-32.2C417.6 428.2 448 398 448 360zM224 48h.2c.7 10.2 2.7 20.3 6 30.1-20.8 4.1-49.5 12.6-78.3 27.1-32.4 16.3-65.5 40.3-87.3 74.3C34.3 165.5 16 147.6 16 128c0-44.2 93.1-80 208-80M79.7 185.6c19.8-29.5 49.4-51.1 79.4-66.2 29-14.5 57.8-22.8 77.3-26.3 21.8 45.1 70.8 81.8 135.6 91-37.7 14.8-90.1 23.9-148 23.9-56 0-106.9-8.5-144.3-22.4M432 128c0 15.6-11.6 30.1-31.6 42.4-93.9-1.6-155.2-62-160.1-122.2C347.6 51.4 432 85.9 432 128M16 165.4c1.8 1.9 3.6 3.8 5.6 5.5 12.5 11.4 29.7 20.9 49.6 28.5C111.1 214.8 165.1 224 224 224s112.9-9.2 152.8-24.5c19.9-7.7 37.1-17.2 49.6-28.5 2-1.8 3.8-3.6 5.6-5.5V360c0 57.4-93.1 104-208 104S16 417.4 16 360z"
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
                  d="M308.2 198.4c-35.3-13.5-63.8-36.1-82-63.4-16 3.8-36.4 10.5-56.9 20.8-18.6 9.3-36.6 21.3-51.4 36.1-15.1-5.4-27.7-11.8-36.9-19.1 20.4-23.3 45.9-40.4 70.3-52.7 20.1-10.1 40.2-17.3 57.5-21.9-1.7-5.8-3-11.7-3.8-17.7 6.2-.3 12.5-.4 18.9-.4 7.4 0 14.7.2 21.8.6 9.3 42.5 53.3 85.3 122.8 90.8-13.2 11.2-34.3 20.6-60.4 27z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 368V144c0-61.9-100.3-112-224-112S0 82.1 0 144v224c0 61.9 100.3 112 224 112s224-50.1 224-112M224 208c-88.4 0-160-28.7-160-64s71.6-64 160-64 160 28.7 160 64-71.6 64-160 64"
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
