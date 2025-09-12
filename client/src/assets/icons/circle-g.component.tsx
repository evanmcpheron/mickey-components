import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleGIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-256c0 44.2 35.8 80 80 80 35.8 0 66.1-23.5 76.3-56H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24 0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C295.2 183.7 276.5 176 256 176c-44.2 0-80 35.8-80 80"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-256c0-44.2 35.8-80 80-80 20.5 0 39.2 7.7 53.3 20.4 9.9 8.8 25.1 8 33.9-1.9s8-25-1.9-33.9C318.7 140.3 288.8 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h52.3c-10.2 32.5-40.5 56-76.3 56-44.2 0-80-35.8-80-80"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-256c0-53 43-96 96-96 24.6 0 47 9.2 64 24.4 6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6C318.7 140.3 288.8 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h62.7c-7.6 45.4-47.1 80-94.7 80-53 0-96-43-96-96"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M144 256c0-61.9 50.1-112 112-112 28.7 0 54.8 10.8 74.7 28.5 3.3 2.9 8.3 2.7 11.3-.6s2.7-8.4-.6-11.3C318.7 140.3 288.8 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c67.8 0 123.3-52.8 127.7-119.5.6-9.4-7-16.5-15.7-16.5h-77.7c-4.4 0-8 3.6-8 8s3.6 8 8 8h77.4c-4.1 58.1-52.6 104-111.7 104-61.9 0-112-50.1-112-112"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-256c0 44.2 35.8 80 80 80 35.8 0 66.1-23.5 76.3-56H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24 0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C295.2 183.7 276.5 176 256 176c-44.2 0-80 35.8-80 80"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24 0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C295.2 183.7 276.5 176 256 176"
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
