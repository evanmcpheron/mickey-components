import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownToDottedLineIcon: React.FC<
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
                  d="M0 448a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64-32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64M73.9 249.9l122.8 122.8c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3l122.8-122.8c6.4-6.4 9.9-15 9.9-24 0-18.7-15.2-33.9-33.9-33.9H288V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H97.9C79.2 192 64 207.2 64 225.9c0 9 3.6 17.6 9.9 24"
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
                  d="M114.2 224 224 334l109.8-110H280c-13.3 0-24-10.7-24-24V80h-64v120c0 13.3-10.7 24-24 24zM224 384c-11.5 0-22.5-4.6-30.6-12.7L77.6 255.2c-8.7-8.7-13.6-20.5-13.6-32.8 0-25.6 20.8-46.4 46.4-46.4H144V80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v96h33.6c25.6 0 46.4 20.8 46.4 46.4 0 12.3-4.9 24.1-13.6 32.8L254.6 371.3c-8.1 8.1-19.1 12.7-30.6 12.7m192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-96 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-64 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-64 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M222.2 351.2c.5.5 1.1.8 1.8.8s1.4-.3 1.8-.8l124.4-131.9c1.2-1.2 1.8-2.9 1.8-4.6 0-3.7-3-6.7-6.7-6.7H288c-8.8 0-16-7.2-16-16V72c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v120c0 8.8-7.2 16-16 16h-57.3c-3.7 0-6.7 3-6.7 6.7 0 1.7.7 3.3 1.8 4.6zM224 384c-9.5 0-18.6-3.9-25.1-10.8l-124.4-132C67.8 234 64 224.5 64 214.7c0-21.4 17.3-38.7 38.7-38.7H144V72c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v104h41.3c21.4 0 38.7 17.3 38.7 38.7 0 9.9-3.8 19.3-10.5 26.5l-124.4 132c-6.5 6.9-15.6 10.8-25.1 10.8m192 44a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m312 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-72 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0"
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
                  d="M216 368.3c2.1 2.1 5 3.3 8 3.3s5.9-1.2 8-3.3l131.8-132.1c2.7-2.7 4.2-6.4 4.2-10.2 0-8-6.5-14.4-14.4-14.4H280c-4.4 0-8-3.6-8-8v-136c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v136c0 4.4-3.6 8-8 8H94.4c-8 0-14.4 6.5-14.4 14.4 0 3.8 1.5 7.5 4.2 10.2zm8 19.3c-7.2 0-14.2-2.9-19.3-8L72.9 247.5c-5.7-5.7-8.9-13.4-8.9-21.5 0-16.8 13.6-30.4 30.4-30.4H160v-128c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v128h65.6c16.8 0 30.4 13.6 30.4 30.4 0 8.1-3.2 15.8-8.9 21.5L243.3 379.6c-5.1 5.1-12.1 8-19.3 8M416 448a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-384 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32m304 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-80 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0"
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
                  d="M0 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="m251.3 372.7 122.8-122.8c6.4-6.4 9.9-15 9.9-24 0-18.7-15.2-33.9-33.9-33.9H288V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H97.9C79.2 192 64 207.2 64 225.9c0 9 3.6 17.6 9.9 24l122.8 122.8c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3"
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
