import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ParachuteBoxIcon: React.FC<
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
                  d="M383.5 192c.3-5.3.5-10.6.5-16 0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4.2 10.7.5 16H240v128h-32c-7 0-13.7 1.5-19.7 4.2L68.2 192h28.3c-.3-5.3-.5-10.6-.5-16 0-64 22.2-121.2 57.1-159.3C62 49.3 18.6 122.6 4.2 173.6 1.5 183.1 9 192 18.9 192h6l140.3 154.3c-3.3 6.5-5.2 13.9-5.2 21.7v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-7.8-1.9-15.2-5.2-21.7L487.1 192h6c9.9 0 17.4-8.9 14.7-18.4-14.4-51-57.8-124.3-148.9-156.9C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16h28.3L323.7 324.2c-6-2.7-12.7-4.2-19.7-4.2h-32V192z"
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
                  d="M383.5 192c.3-5.3.5-10.6.5-16 0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4.2 10.7.5 16H232v128h-24c-3.3 0-6.5.3-9.6 1L96.3 188.9q-.3-6.45-.3-12.9c0-64 22.2-121.2 57.1-159.3C62 49.3 18.6 122.6 4.2 173.6 1.5 183.1 9 192 18.9 192H38l124.4 161c-1.6 4.7-2.4 9.8-2.4 15v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96q0-7.95-2.4-15L474 192h19.1c9.9 0 17.4-8.9 14.7-18.4-14.4-51-57.8-124.3-148.9-156.9C393.8 54.8 416 112.1 416 176q0 6.45-.3 12.9L313.6 321c-3.1-.6-6.3-1-9.6-1h-24V192zM208 368h96v96h-96z"
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
                  d="M256.1 0h-.1C86.6 0 8.7 114.4.7 208c-.8 8.8 6.5 16 15.3 16h33.1L165 346.7c-3.2 6.4-5 13.7-5 21.3v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-7.7-1.8-14.9-5-21.3L462.9 224H496c8.8 0 16.1-7.2 15.3-16-8-93.6-85.8-208-255.2-208m162.8 224-94.8 100.4c-6.1-2.8-12.9-4.4-20.1-4.4h-32v-96h146.8zM240 224v96h-32c-7.2 0-14 1.6-20.1 4.4L93.1 224H240m0 128h64c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zM35.2 192C46.4 135.7 86.8 73.5 165.5 46.2c-29.9 35-50 87-53.1 145.8zM180.5 79.1C202.5 47.4 229.7 32 256 32s53.5 15.4 75.5 47.1c19.6 28.3 33.4 67.8 36 112.9h-223c2.7-45.1 16.4-84.5 36-112.9M476.8 192h-77.2c-3.1-58.8-23.1-110.8-53.1-145.8 78.7 27.3 119.1 89.5 130.3 145.8"
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
                  d="M256.1 0h-.1C86.6 0 8.7 114.4.7 208c-.8 8.8 6.5 16 15.3 16h36.7l116.2 116.2c-5.6 7.8-8.9 17.4-8.9 27.8v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-10.4-3.3-20-8.9-27.8L459.3 224H496c8.8 0 16.1-7.2 15.3-16-8-93.6-85.8-208-255.2-208m180.6 224L331.8 328.9c-7.8-5.6-17.4-8.9-27.8-8.9h-40v-96h172.7M248 224v96h-40c-10.4 0-20 3.3-27.8 8.9L75.3 224H248M190.6 22.6C144 57 112 127.1 112 208H16.8c6.8-73.1 59.8-160.9 173.8-185.4M167.3 70c24-34.7 55.6-54 88.7-54s64.6 19.3 88.7 54c24 34.6 39.3 83.4 39.3 138H128c0-54.6 15.3-103.3 39.3-138m327.9 138H400c0-80.9-32-151-78.6-185.4 114 24.5 167 112.3 173.8 185.4M304 336c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32z"
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
                  d="m24.9 192 140.3 154.3c-3.3 6.5-5.2 13.9-5.2 21.7v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-7.8-1.9-15.2-5.2-21.7L487.1 192h-43.3L323.7 324.2c-6-2.7-12.7-4.2-19.7-4.2h-32V192h-32v128h-32c-7 0-13.7 1.5-19.7 4.2L68.2 192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128.5 192h255c.3-5.3.5-10.6.5-16 0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4.2 10.7.5 16M358.9 16.7C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16h77.6c9.9 0 17.4-8.9 14.7-18.4-14.4-51-57.8-124.3-148.9-156.9m-205.7 0C62 49.3 18.6 122.6 4.2 173.6 1.5 183.1 9 192 18.9 192h77.6c-.3-5.3-.5-10.6-.5-16 0-64 22.2-121.2 57.1-159.3z"
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
