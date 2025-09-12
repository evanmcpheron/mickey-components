import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RouteInterstateIcon: React.FC<
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
                  d="M85.3 192h341c-.8 44.3-7.9 81.8-21.9 114.4-23.4 54.1-68.5 99.1-149 138.5-81.5-36.2-126.1-80.9-149-135.4-14-33.3-20.6-72-21-117.4zM276.9 7.3c-12.8-7.8-29-7.8-41.8 0-27.5 16.8-50.2 26-73.4 30-23.3 4-49.2 3.2-83.7-3.2C55.9 30 34.4 45 31.1 67.7 16 170.4 15.9 259.5 47.3 334.2c32.1 76.4 94.6 132.5 193 173.9 10.4 4.4 22.3 4.1 32.5-.6 95.7-44.8 157.8-100.7 190.3-175.7 32-73.9 32.9-161.2 17.8-264.1-3.3-22.6-24.8-37.7-46.9-33.6-34.4 6.3-60.3 7.2-83.7 3.2-23.2-4-45.9-13.2-73.4-30"
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
                  d="M64 192h383.3c-3.3 42-12.4 79.6-27.6 113.3C391 369 338.9 421.2 255.5 461.7c-84.6-37.1-136.4-89.1-164.6-153.4C75.7 273.8 67 235.1 64 192M272.6 6c-10.2-6.1-23-6.1-33.2 0-53.2 31.8-107 33.5-178.8 20-17.7-3.3-35 8.7-37.7 26.9C8 156.5 12.5 249.5 46.9 327.6c34.7 78.9 98.6 139.8 196.5 181.1 8.3 3.5 17.8 3.3 26-.5 95.4-44.7 158.9-105.4 194.1-183.2 34.9-77.2 40.4-168.5 25.5-272.2-2.6-18.2-19.9-30.2-37.7-26.9C379.6 39.5 325.8 37.8 272.6 6"
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
                  d="M53.7 63.9C113 85.7 195.6 75.8 256 35.6c60.4 40.2 143 50.1 202.3 28.3 3.3 34.5 5.1 66.4 5.1 96.1H48.2c.2-29.8 2.2-61.8 5.5-96.1m-5 128.1h414c-2.3 44.8-9.9 84.2-24.8 119.4-27.8 66-82.2 119.8-182.3 167.1-101.5-43.3-155.7-96.9-183-163.7-14.8-36.1-22-76.7-23.9-122.8M270 6.4c-8.4-5.9-19.7-5.9-28.1 0C186.2 45.5 107.2 53 57.4 30.9 43.2 24.6 24.6 33 22.8 50.6 11.9 158.8 11.7 250.5 43 326.9c31.7 77.4 94.5 136.7 203.5 182.5 6.2 2.6 13.4 2.5 19.5-.4 106.7-49.8 169.3-109 201.4-185.2 31.8-75.4 32.7-165 21.8-273.2-1.8-17.6-20.4-26.1-34.6-19.7C404.8 53 325.8 45.5 270 6.4"
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
                  d="M256.1 17.2h.2C338.6 61 422 71.1 480.4 44.8c.2-.1.5-.1.7 0 .1 0 .1.1.2.1 4 41 5.7 79.3 4.4 115H25.9c-1-35.9.8-74.2 4.8-115 0 0 .1-.1.2-.1.3-.1.6-.1.8 0 59 26.2 148.7 16.3 224.4-27.6M26.5 176h458.4c-3.2 51.4-13.1 97.3-31.7 138.5-33 73.1-94.2 132.5-197.4 180.8-105-44.1-166-103.3-198.5-177.4-18.5-42.2-28-89.4-30.8-141.9M263.8 3.1c-5-2.6-10.9-2.5-15.8.3C175.4 45.6 91.1 53.8 38.2 30.2c-9.7-4.3-22.2 1.5-23.4 13.2C4.1 152.1 8.2 246 42.6 324.2c34.5 78.6 99.1 140.4 207 185.8 4.1 1.7 8.9 1.6 13-.3C368.3 460.3 432.8 398.5 467.8 321c34.9-77.2 40-169 29.4-277.6-1.1-11.7-13.6-17.6-23.4-13.2-52.1 23.5-130.1 15.4-210-27.1"
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
                  d="M21.2 192h469c-.8 51.2-9 97.7-27.2 139.8-32.5 75.1-94.6 130.9-190.3 175.7-10.2 4.8-22.1 5-32.5.6-98.4-41.4-161-97.6-193-173.9-17.9-42.7-25.5-90.2-26-142.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M235.1 7.3c12.8-7.8 29-7.8 41.8 0 27.5 16.8 50.2 26 73.4 30 23.3 4 49.2 3.2 83.7-3.2 22.1-4.1 43.6 11 46.9 33.6 6.5 44.2 10 85.6 9.4 124.3H21.2c-.3-38.9 3.4-80.4 9.8-124.3C34.4 45 55.9 30 78 34.1c34.4 6.3 60.3 7.2 83.7 3.2 23.2-4 45.9-13.2 73.4-30"
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
