import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BowlSpoonIcon: React.FC<
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
                  d="M112 192C50.1 192 0 149 0 96S50.1 0 112 0c48.8 0 90.3 26.7 105.6 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H217.6c-15.4 37.3-56.9 64-105.6 64M2 257.5C.9 239.3 15.4 224 33.6 224h444.8c18.2 0 32.7 15.3 31.6 33.5-5.4 91.7-59.7 169.7-136.4 209.7l-1.2 9.7c-2.5 20-19.5 35-39.7 35H179.3c-20.2 0-37.2-15-39.7-35l-1.2-9.7C61.6 427.2 7.4 349.3 2 257.5"
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
                  d="M112 144c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48m0 48c52.2 0 96-30.6 108.5-72H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H220.5C208 30.6 164.2 0 112 0 50.1 0 0 43 0 96s50.1 96 112 96m64.5 266.9c-4.5-11.7-13.5-21.2-25-26.4C90.4 404.8 48 343.3 48 272h416c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1H184c-3.3 0-6.3-2-7.5-5.1M48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8h144c23.8 0 44.2-14.9 52.3-35.8C457.9 441 512 362.8 512 272c0-26.5-21.5-48-48-48z"
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
                  d="M112 160c-49 0-80-33.1-80-64s31-64 80-64 80 33.1 80 64-31 64-80 64m0 32c55.5 0 101.6-34.6 110.5-80H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H222.5c-8.9-45.4-55-80-110.5-80C50.1 0 0 43 0 96s50.1 96 112 96m49.3 271.9c-2.8-8.1-8.7-14.7-16.5-18.4-61.4-29.2-105-90.1-109.3-162.2l-.6-10.3c-.5-9.2 6.8-16.9 16-16.9h410.2c9.2 0 16.5 7.7 16 16.9l-.6 10.3c-4.2 72.1-47.8 133-109.3 162.2-7.7 3.7-13.7 10.3-16.5 18.4-3.3 9.4-12.2 16.1-22.7 16.1H184c-10.4 0-19.4-6.7-22.7-16.1M50.9 224C23.3 224 1.4 247.2 3 274.8l.6 10.3c4.9 84.1 55.9 155.1 127.5 189.2 7.6 21.9 28.4 37.6 52.9 37.6h144c24.5 0 45.3-15.7 52.9-37.6 71.6-34.1 122.5-105.1 127.5-189.2l.6-10.3c1.6-27.6-20.3-50.8-47.9-50.8z"
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
                  d="M217.6 112c-6.5 0-12.3 3.9-14.8 9.9-12.5 30.4-47.5 54.1-90.8 54.1-55.4 0-96-38-96-80s40.6-80 96-80c43.3 0 78.3 23.7 90.8 54.1 2.5 6 8.3 9.9 14.8 9.9H480c8.8 0 16 7.2 16 16s-7.2 16-16 16zM112 0C50.1 0 0 43 0 96s50.1 96 112 96c48.8 0 90.3-26.7 105.6-64H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H217.6C202.3 26.7 160.8 0 112 0m32.6 470.2c-1-4.9-4.2-9.1-8.7-11.3-65.5-32-111.8-97.4-116.4-174.7L18 256.9c-.5-9.2 6.8-16.9 16-16.9h444.1c9.2 0 16.5 7.7 16 16.9l-1.6 27.3c-4.5 77.3-50.9 142.7-116.4 174.7-4.5 2.2-7.7 6.4-8.7 11.3-2.9 14.7-15.9 25.8-31.4 25.8H176c-15.5 0-28.5-11.1-31.4-25.8M33.9 224c-18.4 0-33 15.5-31.9 33.9l1.6 27.3c4.9 83.3 54.8 153.7 125.3 188.2 4.3 22 23.8 38.7 47.1 38.7h160c23.3 0 42.8-16.6 47.1-38.7 70.5-34.5 120.4-104.9 125.3-188.2l1.6-27.3c1.1-18.4-13.5-33.9-31.9-33.9z"
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
                  d="M217.6 128c-15.4 37.3-56.9 64-105.6 64C50.1 192 0 149 0 96S50.1 0 112 0c48.8 0 90.3 26.7 105.6 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5z"
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
