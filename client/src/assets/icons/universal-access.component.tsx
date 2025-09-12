import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UniversalAccessIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m161.5-86.1c-12.2-5.2-26.3.4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1q-2.1-6.15-2.1-12.6v-50c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6l-12 5c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m161.5-86.1 11.9 5.1c26.1 11.2 54.2 17 82.7 17s56.5-5.8 82.7-17l11.9-5.1c12.2-5.2 26.3.4 31.5 12.6s-.4 26.3-12.6 31.5l-11.9 5.1c-17.3 7.4-35.2 12.9-53.6 16.3v50.1c0 4.3.7 8.6 2.1 12.6l28.7 86.1c4.2 12.6-2.6 26.2-15.2 30.4s-26.2-2.6-30.4-15.2l-24.4-73.2c-1.3-3.8-4.8-6.4-8.8-6.4s-7.6 2.6-8.8 6.4l-24.4 73.2c-4.2 12.6-17.8 19.4-30.4 15.2s-19.4-17.8-15.2-30.4l28.7-86.1q2.1-6.15 2.1-12.6v-50c-18.4-3.5-36.3-8.9-53.6-16.3l-11.9-5.1c-12.2-5.2-17.8-19.3-12.6-31.5s19.3-17.8 31.5-12.6zM256 80a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-368a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-174.3 56.8c-4 7.9-.7 17.5 7.2 21.5l21.1 10.5c16 8 32.8 14 50.1 17.8v67.7l-15.7 78.4c-1.7 8.7 3.9 17.1 12.6 18.8s17.1-3.9 18.8-12.6l13.3-66.9h37.8l13.4 67.1c1.7 8.7 10.2 14.3 18.8 12.6s14.3-10.2 12.6-18.8L304 318.4v-67.7c17.3-3.9 34.1-9.9 50.1-17.8l21.1-10.5c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-21.1 10.5c-26 13-54.7 19.8-83.8 19.8s-57.8-6.8-83.8-19.8l-21.1-10.5c-7.9-4-17.5-.7-21.5 7.2zM240 255.4a213.858 213.858 0 0 0 32 0V304h-32z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-32-368a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-175.3 44.8c-1.8 4 0 8.8 4.1 10.6l28.1 12.5c15.2 6.7 31 11.8 47.1 15.2v99.8l-23.7 78.9c-1.3 4.2 1.1 8.7 5.4 10s8.7-1.1 10-5.4L222 336h68l22.3 74.3c1.3 4.2 5.7 6.6 10 5.4s6.6-5.7 5.4-10L304 326.8V227c16.2-3.4 31.9-8.5 47.1-15.2l28.1-12.5c4-1.8 5.9-6.5 4.1-10.6s-6.5-5.9-10.6-4.1l-28.1 12.5C316.7 209.6 286.5 216 256 216s-60.7-6.4-88.6-18.8l-28.1-12.5c-4-1.8-8.8 0-10.6 4.1m95.3 41c10.6 1.5 21.3 2.2 32 2.2s21.4-.7 32-2.2V320h-64z"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m161.5-86.1c-12.2-5.2-26.3.4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1q-2.1-6.15-2.1-12.6v-50c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6l-12 5c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 80a40 40 0 1 1 0 80 40 40 0 1 1 0-80M129.9 182.5c5.2-12.2 19.3-17.8 31.5-12.6l11.9 5.1c26.1 11.2 54.2 17 82.7 17s56.5-5.8 82.7-17l11.9-5.1c12.2-5.2 26.3.4 31.5 12.6s-.4 26.3-12.6 31.5l-11.9 5.1c-17.3 7.4-35.2 12.9-53.6 16.3v50.1c0 4.3.7 8.6 2.1 12.6l28.7 86.1c4.2 12.6-2.6 26.2-15.2 30.4s-26.2-2.6-30.4-15.2l-24.4-73.2c-1.3-3.8-4.8-6.4-8.8-6.4s-7.6 2.6-8.8 6.4l-24.4 73.2c-4.2 12.6-17.8 19.4-30.4 15.2s-19.4-17.8-15.2-30.4l28.7-86.1q2.1-6.15 2.1-12.6v-50c-18.4-3.5-36.3-8.9-53.6-16.3l-11.9-5.1c-12.2-5.2-17.8-19.3-12.6-31.5z"
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
