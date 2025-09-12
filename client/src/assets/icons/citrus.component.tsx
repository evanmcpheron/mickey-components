import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CitrusIcon: React.FC<
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
                  d="M304 128h80c53 0 96-43 96-96V16c0-8.8-7.2-16-16-16h-80c-53 0-96 43-96 96v16c0 8.8 7.2 16 16 16m-48-32c0-23.1 6.1-44.7 16.8-63.4q-8.25-.6-16.8-.6C123.5 32 16 139.5 16 272s107.5 240 240 240 240-107.5 240-240c0-49.5-15-95.5-40.7-133.7C435 152 410.4 160 384 160h-80c-26.5 0-48-21.5-48-48z"
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
                  d="M304 128h80c53 0 96-43 96-96V16c0-8.8-7.2-16-16-16h-80c-31 0-58.7 14.7-76.2 37.6-16.7-3.7-34-5.6-51.8-5.6C123.5 32 16 139.5 16 272s107.5 240 240 240 240-107.5 240-240c0-49.5-15-95.5-40.7-133.7-13.5 9.1-28.8 15.7-45.3 19.1 23.9 32 38 71.7 38 114.6 0 106-86 192-192 192S64 378 64 272 150 80 256 80c11.2 0 22.2 1 32.9 2.8q-.9 6.45-.9 13.2v16c0 8.8 7.2 16 16 16"
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
                  d="M384 96c35.3 0 64-28.7 64-64h-64c-35.3 0-64 28.7-64 64zm0 32h-80c-8.8 0-16-7.2-16-16V96c0-10 1.5-19.7 4.4-28.8-11.8-2.1-24-3.2-36.4-3.2-114.9 0-208 93.1-208 208s93.1 208 208 208 208-93.1 208-208c0-44.3-13.9-85.5-37.5-119.2 10.3-3.6 20-8.5 28.9-14.5C481 176.5 496 222.5 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272 123.5 32 256 32c17.8 0 35.1 1.9 51.8 5.6C325.3 14.7 353 0 384 0h80c8.8 0 16 7.2 16 16v16c0 53-43 96-96 96"
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
                  d="M384 112c44.2 0 80-35.8 80-80V16h-80c-44.2 0-80 35.8-80 80v16zm0 16h-80c-8.8 0-16-7.2-16-16V96c0-15.8 3.8-30.8 10.6-43.9-13.8-2.7-28-4.1-42.6-4.1C132.3 48 32 148.3 32 272s100.3 224 224 224 224-100.3 224-224c0-46.6-14.2-89.8-38.5-125.6q7.2-3.6 13.8-8.1C481 176.5 496 222.5 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272 123.5 32 256 32c17.8 0 35.1 1.9 51.8 5.6C325.3 14.7 353 0 384 0h80c8.8 0 16 7.2 16 16v16c0 53-43 96-96 96"
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
                  d="M304 128h80c19 0 36.8-5.5 51.7-15.1C473.2 155.3 496 211 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272 123.5 32 256 32c17.8 0 35.1 1.9 51.8 5.6C295.4 53.8 288 74 288 96v16c0 8.8 7.2 16 16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 128h-80c-8.8 0-16-7.2-16-16V96c0-53 43-96 96-96h80c8.8 0 16 7.2 16 16v16c0 53-43 96-96 96"
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
