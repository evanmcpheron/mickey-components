import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScissorsIcon: React.FC<
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
                  d="m256 192-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0zm22.6 150.6 118.2 118.2c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6L342.6 278.6zM64 112a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M506.4 439.4c-8.5 10.2-23.7 11.5-33.8 3L312.4 308.2l37.4-31.3 153.6 128.7c10.2 8.5 11.5 23.7 3 33.8M112 48a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0-48c61.9 0 112 50.1 112 112 0 17.9-4.2 34.8-11.6 49.8l75.1 62.9L472.6 69.6c10.2-8.5 25.3-7.2 33.8 3s7.2 25.3-3 33.8l-291 243.8c7.4 15 11.6 31.9 11.6 49.8 0 61.9-50.1 112-112 112S0 461.9 0 400s50.1-112 112-112c26.6 0 51.1 9.3 70.3 24.8l67.8-56.8-67.8-56.8C163.1 214.7 138.6 224 112 224 50.1 224 0 173.9 0 112S50.1 0 112 0m64 400a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M508.2 442.4c5.7-6.7 4.9-16.8-1.8-22.6l-152-129.3c-6.7-5.7-16.8-4.9-22.6 1.8s-4.9 16.8 1.8 22.6l152 129.3c6.7 5.7 16.8 4.9 22.6-1.8M287 235.1 208.5 169c9.9-16.7 15.5-36.2 15.5-56.9C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c29.5 0 56.4-11.4 76.4-30.1l73.8 62.1-73.8 62.1c-20-18.7-46.9-30.1-76.4-30.1C50.1 288 0 338.1 0 400s50.1 112 112 112 112-50.1 112-112c0-20.8-5.7-40.3-15.5-56.9L506.3 92.2c6.8-5.7 7.6-15.8 1.9-22.5s-15.8-7.6-22.5-1.9zM112 192a80 80 0 1 1 0-160 80 80 0 1 1 0 160m0 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
                  d="M510.1 445.2c2.9-3.4 2.4-8.4-.9-11.3l-179.6-152c-3.4-2.9-8.4-2.4-11.3.9s-2.4 8.4.9 11.3l179.6 152c3.4 2.9 8.4 2.4 11.3-.9M286.5 245.5 204 175.7c12.6-18 20-40 20-63.7C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c32.4 0 61.6-13.8 82.1-35.8l80.1 67.8-80.1 67.8c-20.5-22-49.6-35.8-82.1-35.8C50.1 288 0 338.1 0 400s50.1 112 112 112 112-50.1 112-112c0-23.7-7.4-45.7-19.9-63.8L509.2 78.1c3.4-2.9 3.8-7.9.9-11.3s-7.9-3.8-11.3-.9zM112 208a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
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
                  d="m256 192-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256zm64 64-64 64 140.8 140.8c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6zm-208-96a48 48 0 1 1 0-96 48 48 0 1 1 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M216.5 359.5 499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0L152.5 295.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5M64 400a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
