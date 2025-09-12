import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const InfinityIcon: React.FC<
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
                  d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5l72.3 72.2 72.2-72.2C419.5 111.3 456.4 96 494.9 96 575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2c-27.3 27.2-64.2 42.5-102.7 42.5C65 416 0 351 0 270.9zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8-44.8 0-81.1 36.3-81.1 81.1v29.7c0 44.8 36.3 81.1 81.1 81.1 21.5 0 42.2-8.5 57.4-23.8zm90.5 0 72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8 44.8 0 81.1-36.3 81.1-81.1v-29.8c0-44.8-36.3-81.1-81.1-81.1-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"
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
                  d="M0 237.3C0 159.3 63.3 96 141.3 96c39 0 76.2 16.1 102.9 44.5L320 221l75.8-80.5C422.5 112.1 459.7 96 498.7 96c78 0 141.3 63.3 141.3 141.3v37.4c0 78-63.3 141.3-141.3 141.3-39 0-76.2-16.1-102.9-44.5L320 291l-75.8 80.5c-26.7 28.4-63.9 44.5-102.9 44.5C63.3 416 0 352.7 0 274.7zM287 256l-77.8-82.6c-17.6-18.7-42.2-29.4-68-29.4-51.4 0-93.2 41.8-93.2 93.3v37.4c0 51.5 41.8 93.3 93.3 93.3 25.7 0 50.3-10.6 68-29.4zm65.9 0 77.8 82.6c17.6 18.7 42.2 29.4 68 29.4 51.5 0 93.3-41.8 93.3-93.3v-37.4c0-51.5-41.8-93.3-93.3-93.3-25.7 0-50.3 10.6-68 29.4L353 256z"
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
                  d="M0 233.5C0 157.5 61.5 96 137.5 96c39.3 0 76.7 16.8 102.7 46.1l79.8 89.8 79.8-89.8C425.9 112.8 463.3 96 502.5 96c76 0 137.5 61.5 137.5 137.5v45.1c0 75.9-61.5 137.4-137.5 137.4-39.3 0-76.7-16.8-102.7-46.1L320 280.1l-79.8 89.8c-26.1 29.3-63.5 46.1-102.7 46.1C61.5 416 0 354.5 0 278.5zM298.6 256l-82.3-92.6c-20-22.5-48.7-35.4-78.8-35.4C79.2 128 32 175.2 32 233.5v45.1C32 336.8 79.2 384 137.5 384c30.1 0 58.8-12.9 78.8-35.4zm42.8 0 82.3 92.6c20 22.5 48.7 35.4 78.8 35.4 58.3 0 105.5-47.2 105.5-105.5v-45c0-58.3-47.2-105.5-105.5-105.5-30.1 0-58.8 12.9-78.8 35.4z"
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
                  d="M0 240.2C0 169.4 57.4 112 128.2 112c32.7 0 64.2 12.5 88 35L320 245l103.8-98c23.8-22.5 55.3-35 88-35 70.8 0 128.2 57.4 128.2 128.2v31.6c0 70.8-57.4 128.2-128.2 128.2-32.7 0-64.2-12.5-88-35L320 267l-103.8 98c-23.8 22.5-55.3 35-88 35C57.4 400 0 342.6 0 271.8zM308.3 256l-103-97.4c-20.8-19.7-48.4-30.6-77-30.6C66.2 128 16 178.2 16 240.2v31.6c0 62 50.2 112.2 112.2 112.2 28.7 0 56.2-11 77-30.6zm23.3 0 103.1 97.4c20.8 19.7 48.4 30.6 77 30.6 62 0 112.2-50.2 112.2-112.2v-31.6c0-62-50.2-112.2-112.2-112.2-28.6 0-56.2 11-77 30.6l-103 97.4z"
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
                  d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5l72.3 72.2 72.2-72.2C419.5 111.3 456.4 96 494.9 96 575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2c-27.3 27.2-64.2 42.5-102.7 42.5C65 416 0 351 0 270.9zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8-44.8 0-81.1 36.3-81.1 81.1v29.7c0 44.8 36.3 81.1 81.1 81.1 21.5 0 42.2-8.5 57.4-23.8zm90.5 0 72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8 44.8 0 81.1-36.3 81.1-81.1v-29.8c0-44.8-36.3-81.1-81.1-81.1-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"
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
