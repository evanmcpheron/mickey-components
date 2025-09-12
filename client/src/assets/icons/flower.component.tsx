import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FlowerIcon: React.FC<
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
                  d="M128 480c38.2 0 72.5-16.8 96-43.3 23.5 26.6 57.8 43.3 96 43.3 70.7 0 128-57.3 128-128 0-38.2-16.8-72.5-43.3-96 26.6-23.5 43.3-57.8 43.3-96 0-70.7-57.3-128-128-128-38.2 0-72.5 16.8-96 43.3C200.5 48.8 166.2 32 128 32 57.3 32 0 89.3 0 160c0 38.2 16.8 72.5 43.3 96C16.8 279.5 0 313.8 0 352c0 70.7 57.3 128 128 128m96-304a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
                  d="M448 168c0 33.6-12.2 64.3-32.3 88 20.1 23.7 32.3 54.4 32.3 88 0 75.1-60.9 136-136 136-33.6 0-64.3-12.2-88-32.3-23.7 20.1-54.4 32.3-88 32.3C60.9 480 0 419.1 0 344c0-33.6 12.2-64.3 32.3-88C12.2 232.3 0 201.6 0 168 0 92.9 60.9 32 136 32c33.6 0 64.3 12.2 88 32.3C247.7 44.2 278.4 32 312 32c75.1 0 136 60.9 136 136m-255.1-67.1C177.6 87.8 157.8 80 136 80c-48.6 0-88 39.4-88 88 0 21.8 7.8 41.6 20.9 56.9 15.2 17.9 15.2 44.2 0 62.2C55.8 302.4 48 322.2 48 344c0 48.6 39.4 88 88 88 21.8 0 41.6-7.8 56.9-20.9 17.9-15.2 44.2-15.2 62.2 0 15.3 13.1 35.1 20.9 56.9 20.9 48.6 0 88-39.4 88-88 0-21.8-7.8-41.6-20.9-56.9-15.2-17.9-15.2-44.2 0-62.2 13.1-15.3 20.9-35.1 20.9-56.9 0-48.6-39.4-88-88-88-21.8 0-41.6 7.8-56.9 20.9-17.9 15.2-44.2 15.2-62.2 0M256 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M448 168c0 33.6-12.2 64.3-32.3 88 20.1 23.7 32.3 54.4 32.3 88 0 75.1-60.9 136-136 136-33.6 0-64.3-12.2-88-32.3-23.7 20.1-54.4 32.3-88 32.3C60.9 480 0 419.1 0 344c0-33.6 12.2-64.3 32.3-88C12.2 232.3 0 201.6 0 168 0 92.9 60.9 32 136 32c33.6 0 64.3 12.2 88 32.3C247.7 44.2 278.4 32 312 32c75.1 0 136 60.9 136 136M203.3 88.7C185.1 73.3 161.7 64 136 64 78.6 64 32 110.6 32 168c0 25.7 9.3 49.1 24.7 67.3 10.1 11.9 10.1 29.5 0 41.4C41.3 294.9 32 318.3 32 344c0 57.4 46.6 104 104 104 25.7 0 49.1-9.3 67.3-24.7 11.9-10.1 29.5-10.1 41.4 0 18.2 15.4 41.6 24.7 67.3 24.7 57.4 0 104-46.6 104-104 0-25.7-9.3-49.1-24.7-67.3-10.1-11.9-10.1-29.5 0-41.4 15.4-18.2 24.7-41.6 24.7-67.3 0-57.4-46.6-104-104-104-25.7 0-49.1 9.3-67.3 24.7-11.9 10.1-29.5 10.1-41.4 0M272 256a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M448 168c0 33.6-12.2 64.3-32.3 88 20.1 23.7 32.3 54.4 32.3 88 0 75.1-60.9 136-136 136-33.6 0-64.3-12.2-88-32.3-23.7 20.1-54.4 32.3-88 32.3C60.9 480 0 419.1 0 344c0-33.6 12.2-64.3 32.3-88C12.2 232.3 0 201.6 0 168 0 92.9 60.9 32 136 32c33.6 0 64.3 12.2 88 32.3C247.7 44.2 278.4 32 312 32c75.1 0 136 60.9 136 136M213.6 76.5C192.7 58.7 165.6 48 136 48 69.7 48 16 101.7 16 168c0 29.6 10.7 56.7 28.5 77.6 5.1 6 5.1 14.7 0 20.7C26.7 287.3 16 314.4 16 344c0 66.3 53.7 120 120 120 29.6 0 56.7-10.7 77.6-28.5 6-5.1 14.7-5.1 20.7 0 20.9 17.8 48 28.5 77.6 28.5 66.3 0 120-53.7 120-120 0-29.6-10.7-56.7-28.5-77.6-5.1-6-5.1-14.7 0-20.7 17.8-20.9 28.5-48 28.5-77.6 0-66.3-53.7-120-120-120-29.6 0-56.7 10.7-77.6 28.5-6 5.1-14.7 5.1-20.7 0zM288 256a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M128 480c38.2 0 72.5-16.8 96-43.3 23.5 26.6 57.8 43.3 96 43.3 70.7 0 128-57.3 128-128 0-38.2-16.8-72.5-43.3-96 26.6-23.5 43.3-57.8 43.3-96 0-70.7-57.3-128-128-128-38.2 0-72.5 16.8-96 43.3C200.5 48.8 166.2 32 128 32 57.3 32 0 89.3 0 160c0 38.2 16.8 72.5 43.3 96C16.8 279.5 0 313.8 0 352c0 70.7 57.3 128 128 128m96-304a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
