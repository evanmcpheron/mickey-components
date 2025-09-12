import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RocketIcon: React.FC<
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
                  d="M156.6 384.9 125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2 3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9-11.2 3.6-23.4.5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
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
                  d="M368.3 265c-44.5 30.1-129.3 68.2-175.7 88l-35-35c20.4-46.1 59.2-130 89.3-174.4C309.1 52 398.4 41.8 461.7 50.3c8.5 63.3-1.7 152.6-93.3 214.7zm-249.8 23c-3.6 8-6.8 15.2-9.4 21.2-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9 6.5-2.7 14.3-6 23-9.8v96.2c0 8.6 4.6 16.6 12.1 20.9s16.7 4.2 24.1-.2l88.5-52.5c21.9-13 35.3-36.5 35.3-61.9v-82.3c4-2.5 7.7-4.9 11.3-7.3 120.8-81.9 124.8-203.9 111.4-276.7-2.1-11.6-11.2-20.6-22.8-22.8-72.8-13.4-194.8-9.4-276.7 111.4-2.4 3.6-4.9 7.3-7.3 11.3h-82.1c-25.4 0-49 13.4-61.9 35.3L3.4 251.8c-4.4 7.4-4.5 16.6-.2 24.1S15.4 288 24 288zM408 144a40 40 0 1 0-80 0 40 40 0 1 0 80 0"
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
                  d="m188.9 372-50.4-50.4c18.6-42.7 61.7-137.7 95.1-187 71-104.5 175.4-110 242.1-98.3 11.7 66.7 6.2 171.1-98.4 242-49.4 33.5-145.5 75.6-188.4 93.7M109 309.2c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9 6.5-2.7 14.3-6 23-9.8L224 496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6.7l101.5-50.7c21.7-10.8 35.4-33 35.4-57.2v-90.3c4-2.5 7.7-4.9 11.3-7.3 120.7-81.9 124.7-203.9 111.3-276.7-2.1-11.6-11.2-20.6-22.8-22.8-72.8-13.4-194.8-9.4-276.7 111.4-2.4 3.6-4.9 7.3-7.3 11.3h-90.2c-24.2 0-46.4 13.7-57.2 35.4L1.7 264.8c-2.5 5-2.2 10.9.7 15.6S10.5 288 16 288h102.5c-3.6 8-6.8 15.2-9.4 21.2zm147 160.9v-92.5c30.3-13.7 65.4-30.3 96-47v71.7c0 12.1-6.8 23.2-17.7 28.6zM109.7 160h71.5c-16.9 30.7-34 65.8-48.1 96H41.9L81 177.7c5.4-10.8 16.5-17.7 28.6-17.7zM392 144a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112"
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
                  d="m127.1 332.8 50.7 50.7c4.6 4.6 11.3 5.9 17 3.4 42.4-17.8 140.5-60.7 191.5-95.4C499.6 214.7 503.8 100.7 491 31c-.9-5.1-4.8-9-9.9-9.9-69.8-12.9-183.8-8.7-260.6 104.6-34.5 50.9-78.3 147.8-96.7 189.9-2.5 5.8-1.3 12.5 3.4 17.2zm39.3 62-50.7-50.7c-9.2-9.2-11.9-23-6.7-34.9 2.6-6 5.8-13.2 9.4-21.2H25.9C8 288-3.6 269.2 4.4 253.3L51.6 159c9.5-19 28.9-31 50.1-31h98.2c2.5-4 4.9-7.7 7.3-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-3.6 2.4-7.3 4.9-11.3 7.3v98.2c0 21.2-12 40.6-31 50.1l-94.3 47.2c-16 8-34.7-3.6-34.7-21.5v-94.3c-8.8 3.8-16.6 7.1-23 9.8-11.8 5-25.4 2.2-34.5-6.9zM25.9 272h99.8c17.5-38.3 41.6-88.8 64.5-128h-88.5c-15.2 0-29 8.6-35.8 22.1l-47.2 94.3c-2.7 5.3 1.2 11.6 7.2 11.6M240 384.8v101.3c0 5.9 6.3 9.8 11.6 7.2l94.3-47.2c13.6-6.8 22.1-20.6 22.1-35.8v-88.6c-39.1 22.6-89.5 46.1-128 63.1M328 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0m40 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112"
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
                  d="M198.6 130c-28.5 45.8-60.7 114.5-80.1 158H24c-8.7 0-16.7-4.7-20.9-12.2s-4.1-16.8.4-24.2l52.8-86.9c13-21.5 36.3-34.7 61.5-34.7zM224 391.8c43.9-19.1 112.4-50.3 158-78.4v80.8c0 25.2-13.1 48.5-34.6 61.5l-86.9 52.8c-7.4 4.5-16.7 4.7-24.2.4s-12.2-12.2-12.2-20.9v-96.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m166.5 394.8-50.7-50.7c-9.2-9.2-11.9-23-6.7-34.9 18.3-41.9 62.7-140.2 98.1-192.5C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-52.7 35.7-152.3 79.1-194.3 96.9-11.8 5-25.4 2.2-34.5-6.9M384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
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
