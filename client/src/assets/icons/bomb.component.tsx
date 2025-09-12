import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BombIcon: React.FC<
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
                  d="M459.1 52.4 442.6 6.5c-1.9-3.9-6.1-6.5-10.5-6.5s-8.5 2.6-10.4 6.5l-16.5 45.9-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4 0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2 0-4.6-3-8.9-7.2-10.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9c-22-8-45.8-12.3-70.5-12.3C93.1 96 0 189.1 0 304s93.1 208 208 208 208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
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
                  d="m459.1 52.4 45.7 16.8c4.3 1.6 7.3 5.9 7.2 10.4 0 4.5-3 8.7-7.2 10.2l-45.7 16.8-16.5 45.8c-1.5 4.4-5.8 7.5-10.4 7.5s-8.9-3.1-10.4-7.5L405 106.6l-45.8-16.8c-4.2-1.5-7.2-5.7-7.2-10.2 0-4.6 3-8.9 7.2-10.4l46-16.8 16.5-45.9c1.9-3.9 6.1-6.5 10.4-6.5s8.5 2.6 10.4 6.5L459 52.3zm-156.2 97.2c-12.1 7.2-27.1 8.8-40.7 3.8-16.9-6.1-35.1-9.4-54.2-9.4-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160c0-19.1-3.3-37.4-9.4-54.2-4.9-13.7-3.3-28.6 3.8-40.7zm-24.4-41.3 2.9-2.9c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3l-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3M200 224c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24"
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
                  d="M464 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V80h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V16c0-8.8 7.2-16 16-16s16 7.2 16 16M301.1 130.9a31.99 31.99 0 0 1-33.5 7.5C249.1 131.7 229 128 208 128c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176c0-21-3.7-41.1-10.4-59.7a31.99 31.99 0 0 1 7.5-33.5l2.9-2.8-80-80zm-22.6-22.6 2.9-2.9c12.5-12.5 32.8-12.5 45.3 0l28.7 28.7 17.4-17.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L378 156.7l28.7 28.7c12.5 12.5 12.5 32.8 0 45.3l-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3M200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
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
                  d="M456 16v40h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V72h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40V16c0-4.4 3.6-8 8-8s8 3.6 8 8M289.8 119.6c-4.4 4.4-10.9 5.8-16.7 3.7C252.8 116 230.9 112 208 112c-106 0-192 86-192 192s86 192 192 192 192-86 192-192c0-22.9-4-44.8-11.3-65.1-2.1-5.8-.6-12.4 3.7-16.7l2.9-2.9c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0zm116.8 111-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3l2.9-2.9c12.5-12.5 32.8-12.5 45.3 0l34.3 34.3 33.4-33.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L372.3 151l34.3 34.3c12.5 12.5 12.5 32.8 0 45.3M200 184c-61.9 0-112 50.1-112 112v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-70.7 57.3-128 128-128h8c4.4 0 8 3.6 8 8s-3.6 8-8 8z"
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
                  d="m504.8 69.2-45.7-16.8-16.5-45.9c-1.9-3.9-6.1-6.5-10.5-6.5s-8.5 2.6-10.4 6.5l-16.5 45.9-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4 0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2 0-4.6-3-8.9-7.2-10.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M281.4 105.4c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3l-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3zM96 296c0-57.4 46.6-104 104-104h8c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8c-75.1 0-136 60.9-136 136v8c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
