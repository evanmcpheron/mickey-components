import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LandmarkMagnifyingGlassIcon: React.FC<
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
                  d="M448 288c-22.8 0-44.4-4.8-64-13.3V416h-40V249.6c-8.9-7.6-17-16.2-24-25.6h-40v192h-48V224h-64v192h-40V224H64v196.3c-.6.3-1.2.7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V288zM32 192h269.3c-8.6-19.6-13.3-41.2-13.3-64 0-36.1 12-69.4 32.1-96.2L271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0L68.4 102.4 64 104v.9l-47.9 27.3c-12.6 7.2-18.8 22-15.1 36S17.5 192 32 192M448 48.1a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 208c26.7 0 51.4-8.2 71.9-22.1l79.1 79.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-79.1-79.1c14-20.5 22.1-45.3 22.1-71.9 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128z"
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
                  d="M448 288c-16.7 0-32.8-2.6-48-7.3V384h-64V242.3c-5.8-5.7-11.1-11.8-16-18.3h-32v160h-64V224h-48v160h-64V224H64v160h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8zM267.6 3c-7.2-4-16-4-23.2 0L17.6 128.1C6.7 134.1 0 145.5 0 157.9 0 176.8 15.2 192 34.1 192h267.2c-6.5-14.9-10.8-31.1-12.5-48H88.2L256 51.4l41.3 22.8c5.5-15.3 13.2-29.5 22.8-42.3zM0 488c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24M448 48.1a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 208c26.7 0 51.4-8.2 71.9-22.1l79.1 79.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-79.1-79.1c14-20.5 22.1-45.3 22.1-71.9 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128z"
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
                  d="M448 288c-11 0-21.7-1.1-32-3.2V352h-80V242.3c-5.8-5.7-11.1-11.8-16-18.3h-16v128h-96V224h-32v128H96V224H64v128c-8.8 0-16 7.2-16 16s7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16zM263.9 2.1C259-.7 253-.7 248.1 2.1L15.8 133.7C6 139.3 0 149.6 0 160.8 0 178 14 192 31.2 192h270.1c-4.4-10.2-7.9-20.9-10.1-32H34.3L256 34.4l46.7 26.5c4.5-9.8 10-19 16.3-27.6zM24 432c0 8.8 7.2 16 16 16h432c8.8 0 16-7.2 16-16s-7.2-16-16-16H40c-8.8 0-16 7.2-16 16M0 496c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16M448 32.1a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 224c29.6 0 56.8-10 78.5-26.9l86.2 86.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-86.2-86.2C566 185 576 157.7 576 128.2c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128z"
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
                  d="M448 288c-5.4 0-10.7-.3-16-.8V368H328V233.8c-5.9-6.7-11.3-13.9-16-21.5V368H200V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H80V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8zM259.3.7c-2.1-.9-4.5-.9-6.6 0L14.1 108.5C5.5 112.3 0 120.9 0 130.3v5.7c0 13.3 10.7 24 24 24h267.2c-1.1-5.2-1.9-10.6-2.4-16H24c-4.4 0-8-3.6-8-8v-5.7c0-3.1 1.8-6 4.7-7.3L256 16.8l56.8 25.6c2.9-4.6 6.1-9 9.4-13.3zM40 432c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zM8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8zM448 16.1a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 240c32.5 0 62.1-12.1 84.7-32l93.7 93.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L544 212.8c19.9-22.6 32-52.2 32-84.7 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128"
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
                  d="M384 274.7c19.6 8.6 41.2 13.3 64 13.3v132.3c.6.3 1.2.7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224h64v192h40V224h64v192h48V224h40c7.1 9.4 15.1 18 24 25.6V416h40V274.7zM301.3 192H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9v-.9l4.4-1.6L240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l48.3 27.6C300 58.6 288 91.9 288 128c0 22.8 4.8 44.4 13.3 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M528 128.1a80 80 0 1 0-160 0 80 80 0 1 0 160 0M519.9 234c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128S377.3.1 448 .1s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l79.1 79.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"
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
