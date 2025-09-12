import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CirclesOverlapIcon: React.FC<
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
                  d="M192 288c0 34.2 7.7 66.6 21.4 95.7C130 378.2 64 308.8 64 224c0-88.4 71.6-160 160-160 32.2 0 62.2 9.5 87.3 25.9C240.4 127.5 192 202.1 192 288m32 160c11.2 0 22.1-.8 32.8-2.4 40.6 41 96.9 66.4 159.2 66.4 123.7 0 224-100.3 224-224S539.7 64 416 64c-11.2 0-22.1.8-32.8 2.4C342.6 25.4 286.3 0 224 0 100.3 0 0 100.3 0 224s100.3 224 224 224m192 0c-32.2 0-62.2-9.5-87.3-25.9C399.6 384.5 448 309.9 448 224c0-34.2-7.7-66.6-21.4-95.7C510 133.8 576 203.2 576 288c0 88.4-71.6 160-160 160"
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
                  d="M192 288c0 40.8 10.9 79 30 112-96.3-1.1-174-79.5-174-176 0-97.2 78.8-176 176-176 38.9 0 74.8 12.6 104 34-80 34.2-136 113.5-136 206m32 160c11.2 0 22.1-.8 32.8-2.4 40.6 41 96.9 66.4 159.2 66.4 123.7 0 224-100.3 224-224S539.7 64 416 64c-11.2 0-22.1.8-32.8 2.4C342.6 25.4 286.3 0 224 0 100.3 0 0 100.3 0 224s100.3 224 224 224m192 16c-38.9 0-74.8-12.6-104-34 80-34.2 136-113.5 136-206 0-40.8-10.9-79-30-112 96.3 1.1 174 79.5 174 176 0 97.2-78.8 176-176 176"
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
                  d="M232 415.8c-25.2-36.2-40-80.3-40-127.8 0-99.1 64.3-183.1 153.5-212.7C312.4 48.2 270.1 32 224 32 118 32 32 118 32 224s86 192 192 192c2.7 0 5.4-.1 8-.2m36.4-5C353 390.8 416 314.7 416 224c0-46.7-16.7-89.5-44.4-122.8C287 121.2 224 197.3 224 288c0 46.7 16.7 89.5 44.4 122.8m-11.6 34.8c-10.7 1.6-21.7 2.4-32.8 2.4C100.3 448 0 347.7 0 224S100.3 0 224 0c62.3 0 118.6 25.4 159.2 66.4 10.7-1.6 21.6-2.4 32.8-2.4 123.7 0 224 100.3 224 224S539.7 512 416 512c-62.3 0-118.6-25.4-159.2-66.4M408 96.2c25.2 36.3 40 80.3 40 127.8 0 99.1-64.3 183.1-153.5 212.7C327.6 463.8 369.9 480 416 480c106 0 192-86 192-192S522 96 416 96c-2.7 0-5.4.1-8 .2"
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
                  d="M243.6 431.1C211.4 392.3 192 342.4 192 288c0-105.8 73.3-194.4 171.9-217.9C327 36.5 277.9 16 224 16 109.1 16 16 109.1 16 224s93.1 208 208 208c6.6 0 13.2-.3 19.6-.9m18.9-2.7C359 410.4 432 325.7 432 224c0-54.1-20.7-103.4-54.6-140.4C281 101.6 208 186.3 208 288c0 54.1 20.7 103.4 54.6 140.4zm-5.7 17.2c-10.7 1.6-21.7 2.4-32.8 2.4C100.3 448 0 347.7 0 224S100.3 0 224 0c62.3 0 118.6 25.4 159.2 66.4 10.7-1.6 21.6-2.4 32.8-2.4 123.7 0 224 100.3 224 224S539.7 512 416 512c-62.3 0-118.6-25.4-159.2-66.4M396.4 80.9C428.6 119.7 448 169.6 448 224c0 105.8-73.3 194.4-171.9 217.9C313 475.5 362.1 496 416 496c114.9 0 208-93.1 208-208S530.9 80 416 80c-6.6 0-13.2.3-19.6.9"
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
                  d="M213.4 383.7c10.9 23.1 25.7 44 43.4 62-10.7 1.6-21.7 2.4-32.8 2.4C100.3 448 0 347.7 0 224S100.3 0 224 0c62.3 0 118.6 25.4 159.2 66.4 10.7-1.6 21.6-2.4 32.8-2.4 123.7 0 224 100.3 224 224S539.7 512 416 512c-62.3 0-118.6-25.4-159.2-66.4 25.6-3.8 49.8-11.9 71.8-23.5 25.2 16.4 55.2 25.9 87.4 25.9 88.4 0 160-71.6 160-160 0-84.8-66-154.2-149.4-159.7-10.9-23.1-25.7-44-43.4-62-25.6 3.8-49.8 11.9-71.8 23.5C286.2 73.5 256.2 64 224 64c-88.4 0-160 71.6-160 160 0 84.8 66 154.2 149.4 159.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256.8 445.6C365 429.7 448 336.6 448 224c0-61.5-24.8-117.1-64.8-157.6C275 82.3 192 175.4 192 288c0 61.5 24.8 117.1 64.8 157.6"
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
