import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AmpersandIcon: React.FC<
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
                  d="M180.7 96h38c20.6 0 37.3 16.7 37.3 37.3 0 11.8-5.5 22.8-14.9 29.9l-48 36-39-41.3c-6.4-6.8-10-15.8-10-25.2 0-20.3 16.4-36.7 36.7-36.7zm56.6 150 42.2-31.6c25.5-19.1 40.5-49.2 40.5-81.1C320 77.4 274.6 32 218.7 32h-38C125.1 32 80 77.1 80 132.7c0 25.7 9.8 50.4 27.5 69.1l34 36L74.7 288C47.8 308.1 32 339.8 32 373.3 32 432.2 79.8 480 138.7 480h74.5c37.4 0 72.4-18.7 93.2-49.9l6.9-10.4 47.4 50.3c12.1 12.8 32.4 13.4 45.2 1.3s13.4-32.4 1.3-45.2l-57.5-60.9 60.9-91.4c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9l-52.7 79.1zm-51.5 38.6 82.4 87.4-15.1 22.6c-8.9 13.4-23.9 21.4-39.9 21.4h-74.5c-23.6 0-42.7-19.1-42.7-42.7 0-13.4 6.3-26.1 17.1-34.1l72.7-54.5z"
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
                  d="M178 80h44.4c27.4 0 49.7 22.2 49.7 49.7 0 16.2-7.9 31.4-21.2 40.7l-61.4 43-47.2-48.5C133.1 155.5 128 143 128 130c0-27.6 22.4-50 50-50m45.3 168.2 55.1-38.5c26.1-18.3 41.7-48.1 41.7-80-.1-54-43.8-97.7-97.8-97.7H178c-54.1 0-98 43.9-98 98 0 25.5 10 50 27.7 68.3l41.8 43-73.6 51.5C48.4 312 32 343.5 32 377.1 32 433.9 78.1 480 134.9 480h77.8c35.1 0 67.8-17.7 87-47.1l14.6-22.3 60.4 62.1c9.2 9.5 24.4 9.7 33.9.5s9.7-24.4.5-33.9l-67.9-69.8L412 261.2c7.3-11.1 4.1-26-7-33.2s-26-4.1-33.2 7L307 334.2zm-39.8 27.9 96.6 99.3-20.5 31.3c-10.3 15.8-28 25.4-46.9 25.4h-77.8c-30.3-.1-54.9-24.7-54.9-55 0-17.9 8.7-34.7 23.4-45l80-56z"
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
                  d="M175.2 64h33.9c34.7 0 62.9 28.2 62.9 62.9 0 20.5-10 39.8-26.8 51.5L181.6 223l-51.1-51.1C118.7 160 112 144 112 127.2c0-34.9 28.3-63.2 63.2-63.2m29.4 181.9 59-41.3c25.4-17.8 40.5-46.8 40.5-77.8-.1-52.3-42.6-94.8-95-94.8h-33.9C122.6 32 80 74.6 80 127.2c0 25.2 10 49.5 27.9 67.3l47.1 47.1L72.9 299C47.3 317 32 346.3 32 377.7v6.3c0 53 43 96 96 96h80c35.3 0 68.4-16.6 89.6-44.8l21.8-29.1 69.2 69.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-72.5-72.5 74-98.6c5.3-7.1 3.9-17.1-3.2-22.4s-17.1-3.9-22.4 3.2l-71.2 95zM178 264.5l118.6 118.7L272 416c-15.1 20.1-38.8 32-64 32h-80c-35.3 0-64-28.7-64-64v-6.3c0-20.9 10.2-40.5 27.3-52.4l86.6-60.7z"
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
                  d="M175.6 48h33.3c39.3 0 71.1 31.8 71.1 71.1 0 23-11.2 44.7-30 58l-70 49.6-55.7-57.2c-13-13.4-20.3-31.3-20.3-50 0-39.4 32.1-71.5 71.6-71.5m15.8 190.4 67.9-48.2c23-16.3 36.7-42.8 36.7-71.1C296 71 257 32 208.9 32h-33.3C127.2 32 88 71.2 88 119.6c0 22.9 8.9 44.8 24.9 61.2l54 55.4-93.8 66.5C47.3 321 32 350.7 32 382.3c0 53.9 43.7 97.7 97.7 97.7h77.6c33.2 0 64.4-15.8 84-42.6l30.7-42.1 80.3 82.3c3.1 3.2 8.2 3.2 11.3.1s3.2-8.2.1-11.3l-82.2-84.3 82.9-113.4c2.6-3.6 1.8-8.6-1.7-11.2s-8.6-1.8-11.2 1.7l-81.3 111.3zm-13.2 9.4 132.5 135.8-32.4 44.3c-16.6 22.7-43 36.1-71.1 36.1h-77.5C84.6 464 48 427.4 48 382.3c0-26.5 12.8-51.3 34.4-66.6l95.8-68z"
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
                  d="M180.7 96h38c20.6 0 37.3 16.7 37.3 37.3 0 11.8-5.5 22.8-14.9 29.9l-48 36-39-41.3c-6.4-6.8-10-15.8-10-25.2 0-20.3 16.4-36.7 36.7-36.7zm56.6 150 42.2-31.6c25.5-19.1 40.5-49.2 40.5-81.1C320 77.4 274.6 32 218.7 32h-38C125.1 32 80 77.1 80 132.7c0 25.7 9.8 50.4 27.5 69.1l34 36L74.7 288C47.8 308.1 32 339.8 32 373.3 32 432.2 79.8 480 138.7 480h74.5c37.4 0 72.4-18.7 93.2-49.9l6.9-10.4 47.4 50.3c12.1 12.8 32.4 13.4 45.2 1.3s13.4-32.4 1.3-45.2l-57.5-60.9 60.9-91.4c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9l-52.7 79.1zm-51.5 38.6 82.4 87.4-15.1 22.6c-8.9 13.4-23.9 21.4-39.9 21.4h-74.5c-23.6 0-42.7-19.1-42.7-42.7 0-13.4 6.3-26.1 17.1-34.1l72.7-54.5z"
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
