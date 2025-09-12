import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceSmileTearIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m141.5 67.9c-6.7 5.8-7.4 15.9-1.6 22.6 22.2 25.7 61 53.5 116.1 53.5 8.8 0 16-7.2 16-16s-7.2-16-16-16c-43.4 0-74-21.8-91.9-42.5-5.8-6.7-15.9-7.4-22.6-1.6M352 416c26.5 0 48-21 48-47 0-20-28.6-60.4-41.6-77.7-3.2-4.4-9.6-4.4-12.8 0C332.4 308.6 304 349 304 369c0 26 21.5 47 48 47M208.4 208a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M338.7 446.9c4.3.7 8.8 1.1 13.3 1.1 43.4 0 80-34.6 80-79v-2c20.3-32.1 32-70.2 32-111 0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208c29.4 0 57.4-6.1 82.7-17.1M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m136.3 61.9c10-8.7 25.2-7.6 33.9 2.4C187 339.8 215.5 360 256 360c13.3 0 24 10.7 24 24s-10.7 24-24 24c-58 0-98.8-29.4-122.1-56.3-8.7-10-7.6-25.2 2.4-33.9zM352 416c-26.5 0-48-21-48-47 0-20 28.4-60.4 41.6-77.7 3.2-4.4 9.6-4.4 12.8 0 13 17.3 41.6 57.7 41.6 77.7 0 26-21.5 47-48 47M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M141.5 323.9c-6.7 5.8-7.4 15.9-1.6 22.6 22.2 25.7 61 53.5 116.1 53.5 8.8 0 16-7.2 16-16s-7.2-16-16-16c-43.4 0-74-21.8-91.9-42.5-5.8-6.7-15.9-7.4-22.6-1.6m194.3-1.5c5.1-7.7 10.7-15.1 16.2-22 5.5 6.9 11 14.3 16.2 22 11.4 17.1 15.8 29 15.8 34.9 0 12.2-11.7 26.7-32 26.7s-32-14.5-32-26.7c0-5.9 4.4-17.8 15.8-34.9m7.7-62.3c-1.6 2-3.3 4.1-5.2 6.3-18.9 23-50.3 61.2-50.3 90.8 0 32.5 28.7 58.7 64 58.7s64-26.2 64-58.7c0-29.2-30.8-66.9-49.6-90-2.1-2.6-4.1-5-5.8-7.2-4.3-5.5-12.8-5.5-17.1 0zM200.4 208a24 24 0 1 0-48 0 24 24 0 1 0 48 0m136 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-202.7c5.9 7.7 12.6 16.6 18.5 26.1 8.6 13.8 13.5 25.5 13.5 33.6 0 16.8-14 31-32 31s-32-14.2-32-31c0-8.1 4.8-19.9 13.4-33.6 6-9.5 12.7-18.5 18.5-26.1zm6.4-18c-3.2-4.4-9.6-4.4-12.8 0q-1.8 2.4-3.9 5.1c-14.2 18.4-37.7 49-37.7 72.7 0 26 21.5 47 48 47s48-21 48-47c0-23.4-23.1-53.5-37.2-72-1.6-2.1-3.1-4-4.4-5.8m-166-67.3a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0M150.6 323.4c-2.5-3.6-7.5-4.5-11.1-2s-4.5 7.5-2 11.1c22.4 32 61.9 67.4 118.6 67.4 4.4 0 8-3.6 8-8s-3.6-8-8-8c-49.4 0-84.6-30.8-105.4-60.6z"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m141.5 67.9c-6.7 5.8-7.4 15.9-1.6 22.6 22.2 25.7 61 53.5 116.1 53.5 8.8 0 16-7.2 16-16s-7.2-16-16-16c-43.4 0-74-21.8-91.9-42.5-5.8-6.7-15.9-7.4-22.6-1.6M352 416c26.5 0 48-21 48-47 0-20-28.6-60.4-41.6-77.7-3.2-4.4-9.6-4.4-12.8 0C332.4 308.6 304 349 304 369c0 26 21.5 47 48 47M208.4 208a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0M400 369c0 26-21.5 47-48 47s-48-21-48-47c0-20 28.4-60.4 41.6-77.7 3.2-4.4 9.6-4.4 12.8 0 13 17.3 41.6 57.7 41.6 77.7m-63.6-193a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
