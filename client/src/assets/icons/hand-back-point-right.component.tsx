import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandBackPointRightIcon: React.FC<
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
                  d="M512 168c0-22.1-17.9-40-40-40H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h55.7c-1.4-2-3-3.9-4.5-5.8l-16-19.2C215 56.4 197 48 178 48h-38c-38 0-74 16.9-98.3 46.1l-4.5 5.4C13.1 128.3 0 164.5 0 201.9V320c0 70.7 57.3 128 128 128h96c26.5 0 48-21.5 48-48 0-12.4-4.7-23.6-12.3-32.1C284.5 366 304 345.3 304 320c0-12.4-4.7-23.6-12.3-32.1C316.5 286 336 265.3 336 240c0-12.3-4.6-23.5-12.2-32H472c22.1 0 40-17.9 40-40"
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
                  d="M512 176c0-35.3-28.7-64-64-64H259.2c-3.6-5.2-7.6-10.2-11.9-14.9l-18.5-20.3C212.1 58.5 188.5 48 163.7 48h-10.2c-54 0-104 28.7-131.3 75.4l-1.5 2.6C7.1 149.3 0 175.7 0 202.6V328c0 66.3 53.7 120 120 120h104c35.3 0 64-28.7 64-64 0-2.8-.2-5.6-.5-8.3 19.4-11 32.5-31.8 32.5-55.7 0-5.3-.7-10.5-1.9-15.5 20.2-10.8 33.9-32 33.9-56.5 0-2.7-.2-5.4-.5-8H448c35.3 0 64-28.7 64-64m-64-16c8.8 0 16 7.2 16 16s-7.2 16-16 16H312c-10.3 0-19.5 6.6-22.8 16.4s.1 20.6 8.3 26.8c3.9 3 6.4 7.6 6.4 12.8 0 8.8-7.2 16-16 16h-8c-10.3 0-19.5 6.6-22.8 16.4s.1 20.6 8.3 26.8c3.9 3 6.4 7.6 6.4 12.8 0 8.8-7.2 16-16 16-9.1 0-17.4 5.1-21.5 13.3s-3.2 17.9 2.3 25.1c2 2.7 3.2 6 3.2 9.6 0 8.8-7.2 16-16 16h-104c-39.8 0-72-32.2-72-72V202.6c0-18.4 4.9-36.5 14.2-52.4l-20-11.7 20 11.7 1.5-2.6c18.6-32 52.8-51.6 89.8-51.6h10.2c11.3 0 22 4.8 29.6 13.1l17.4 18.9H168c-8.8 0-16 7.2-16 16s7.2 16 16 16h280"
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
                  d="M512 168c0-30.9-25.1-56-56-56H255.4c-2-3.2-4.2-6.4-6.5-9.5L232 80c-15.1-20.1-38.8-32-64-32h-19.5c-53 0-101.7 29.1-126.8 75.7l-4.5 8.3C5.9 153 0 176.4 0 200.3V336c0 61.9 50.1 112 112 112h96c35.3 0 64-28.7 64-64 0-2.8-.2-5.6-.5-8.3 19.4-11 32.5-31.8 32.5-55.7 0-5.3-.7-10.5-1.9-15.5 20.2-10.8 33.9-32 33.9-56.5 0-8.5-1.7-16.6-4.7-24H456c30.9 0 56-25.1 56-56m-56-24c13.3 0 24 10.7 24 24s-10.7 24-24 24H298.5c-7.1 0-13.3 4.6-15.3 11.4s.6 14 6.5 18c8.7 5.8 14.3 15.6 14.3 26.7 0 15.6-11.2 28.6-25.9 31.4-5.1 1-9.5 4.4-11.6 9.2s-1.8 10.3.9 14.8c2.9 4.8 4.6 10.5 4.6 16.6 0 14.7-10 27.2-23.6 30.9-4.4 1.2-8.1 4.2-10.1 8.3s-2.2 8.8-.6 13.1c1.4 3.6 2.2 7.6 2.2 11.8 0 17.7-14.3 32-32 32h-96c-44.2 0-80-35.8-80-80V200.5c0-18.5 4.6-36.8 13.4-53.1l-14.1-7.6 14.1 7.6 4.5-8.3C69.4 102.6 107.3 80 148.5 80H168c15.1 0 29.3 7.1 38.4 19.2L216 112h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h288"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 544 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M516 172c0-28.7-23.3-52-52-52H266.4c-3.7-6-7.8-11.8-12.5-17.3l-24.6-29.2a71.97 71.97 0 0 0-55-25.5h-24c-48.8 0-93.9 26.2-118.1 68.5l-10.3 18C10.2 155.1 4 178.3 4 202v142c0 57.4 46.6 104 104 104h104c.8 0 1.5-.1 2.2-.3C244.5 444.5 268 419 268 388q0-5.4-.9-10.5c19.5-9.9 32.9-30.2 32.9-53.5 0-6.1-.9-12-2.6-17.6 20.5-9.6 34.6-30.3 34.6-54.4 0-10.1-2.5-19.6-6.9-28H464c28.7 0 52-23.3 52-52m-268.8-52H172c-4.4 0-8 3.6-8 8s3.6 8 8 8h292c19.9 0 36 16.1 36 36s-16.1 36-36 36H309.5c-3.2 0-6.1 1.9-7.4 4.9s-.6 6.4 1.6 8.7c7.6 7.9 12.2 18.6 12.2 30.5 0 19.9-13.2 36.7-31.3 42.1-2.2.7-4.1 2.3-5 4.4s-.9 4.6.1 6.7c2.7 5.7 4.2 12 4.2 18.8 0 19-12.1 35.2-29 41.4-4 1.5-6.2 5.8-4.9 9.8 1.2 4 1.9 8.3 1.9 12.8 0 23.1-17.9 42.1-40.6 43.9-.3 0-.6.1-1 .1H107.8c-48.6 0-88-39.4-88-88v-142c0-20.9 5.4-41.4 15.8-59.5l10.3-18C67.5 87.1 107.2 64 150.3 64h24c16.5 0 32.1 7.3 42.7 19.8l24.8 29.2c1.9 2.3 3.7 4.6 5.5 7z"
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
                  d="M512 168c0-22.1-17.9-40-40-40H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h55.7c-1.4-2-3-3.9-4.5-5.8l-16-19.2C215 56.4 197 48 178 48h-38c-38 0-74 16.9-98.3 46.1l-4.5 5.4C13.1 128.3 0 164.5 0 201.9V320c0 70.7 57.3 128 128 128h96c26.5 0 48-21.5 48-48 0-12.4-4.7-23.6-12.3-32.1C284.5 366 304 345.3 304 320c0-12.4-4.7-23.6-12.3-32.1C316.5 286 336 265.3 336 240c0-12.3-4.6-23.5-12.2-32H472c22.1 0 40-17.9 40-40"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
