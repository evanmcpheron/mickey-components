import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceSadTearIcon: React.FC<
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m240 80c0-8.8 7.2-16 16-16 45 0 85.6 20.5 115.7 53.1 6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47 0-20 28.6-60.4 41.6-77.7 3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47m207.6-208a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256c0-114.9 93.1-208 208-208s208 93.1 208 208-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m128 113c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7-3.2-4.4-9.6-4.4-12.8 0-13 17.3-41.6 57.7-41.6 77.7m128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6 9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9c-29.7-26.6-69-42.8-112-42.8m47.6-96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-480a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-96 300.4c-5.5 6.9-11 14.3-16.2 22-11.4 17.1-15.8 29-15.8 34.9 0 12.2 11.7 26.7 32 26.7s32-14.5 32-26.7c0-5.9-4.4-17.8-15.8-34.9-5.1-7.7-10.7-15.1-16.2-22m-8.6-40.3c4.3-5.5 12.8-5.5 17.1 0 1.6 2 3.3 4.1 5.2 6.3 18.9 23 50.3 61.2 50.3 90.8 0 32.5-28.7 58.7-64 58.7s-64-26.2-64-58.7c0-29.2 30.8-66.9 49.6-90 2.1-2.6 4.1-5 5.8-7.2zM256 320c45 0 85.6 20.5 115.7 53.1 6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9-8.8 0-16-7.2-16-16s7.2-16 16-16zm103.6-112a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-80 309.3c-5.9 7.7-12.6 16.6-18.5 26.1-8.6 13.8-13.5 25.5-13.5 33.6 0 16.8 14 31 32 31s32-14.2 32-31c0-8.1-4.8-19.9-13.4-33.6-6-9.5-12.7-18.5-18.5-26.1zm-6.4-18c3.2-4.4 9.6-4.4 12.8 0q1.8 2.4 3.9 5.1c14.2 18.4 37.7 49 37.7 72.7 0 26-21.5 47-48 47s-48-21-48-47c0-23.4 23.1-53.5 37.2-72 1.6-2.1 3.1-4 4.4-5.8m166-99.3a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-144 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0M256 320c46.3 0 87.7 26 118.4 67.2 2.6 3.5 1.9 8.6-1.6 11.2s-8.6 1.9-11.2-1.6C332.9 358.4 295.8 336 256 336c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m240 80c0-8.8 7.2-16 16-16 45 0 85.6 20.5 115.7 53.1 6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47 0-20 28.6-60.4 41.6-77.7 3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47m207.6-208a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M303.6 208a32 32 0 1 0 64 0 32 32 0 1 0-64 0M112 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7-3.2-4.4-9.6-4.4-12.8 0-13 17.3-41.6 57.7-41.6 77.7m63.6-129a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
