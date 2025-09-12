import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GaugeMaxIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M288 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 320c35.3 0 64-28.7 64-64q0-5.55-.9-10.8l117.5-72.8c11.3-7 14.7-21.8 7.8-33s-21.8-14.8-33-7.8l-117.6 72.8c-10.6-7.8-23.7-12.4-37.8-12.4-35.3 0-64 28.7-64 64s28.7 64 64 64m-80-272a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m304-144a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416m0-464a256 256 0 1 1 0 512 256 256 0 1 1 0-512m32 112a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 296c-30.9 0-56-25.1-56-56s25.1-56 56-56c10.3 0 19.9 2.8 28.2 7.6l110.2-75.4c10.9-7.5 25.9-4.7 33.4 6.3s4.7 25.9-6.3 33.4l-110.2 75.3c.4 2.9.7 5.8.7 8.8 0 30.9-25.1 56-56 56m128-248a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-272 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m80-64a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-480a256 256 0 1 1 0 512 256 256 0 1 1 0-512m24 96a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-56 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-32 0c0-35.3 28.7-64 64-64 17.5 0 33.4 7 44.9 18.4l106.9-64.1c7.6-4.5 17.4-2.1 22 5.5s2.1 17.4-5.5 22l-106.9 64c1.7 5.8 2.6 11.9 2.6 18.2 0 35.3-28.7 64-64 64s-64-28.7-64-64m200-208a24 24 0 1 1-48 0 24 24 0 1 1 48 0M96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72-88a24 24 0 1 1-48 0 24 24 0 1 1 48 0"
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
                  d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m16 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-64 272a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-16 0c0-35.3 28.7-64 64-64 18.8 0 35.7 8.1 47.4 21l108-75.6c3.6-2.5 8.6-1.7 11.1 2s1.7 8.6-2 11.1l-108 75.6c4.7 8.9 7.4 19.1 7.4 29.9 0 35.3-28.7 64-64 64s-64-28.7-64-64zm192-224a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 224a16 16 0 1 1 0 32 16 16 0 1 1 0-32m64-96a16 16 0 1 1-32 0 16 16 0 1 1 32 0"
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0M288 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 320c-35.3 0-64-28.7-64-64s28.7-64 64-64c14.1 0 27.2 4.6 37.8 12.4l117.5-72.8c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33l-117.4 72.8q.9 5.25.9 10.8c0 35.3-28.7 64-64 64m144-272a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64m80-80a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M411.4 227.6c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33l-117.5 72.8q.9 5.25.9 10.8c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c14.1 0 27.2 4.6 37.8 12.4z"
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
