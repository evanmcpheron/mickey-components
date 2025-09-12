import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UmbrellaBeachIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m346.3 271.8-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4 6.5-78.5-23.9-155.5-80.8-208.5 2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4M462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4-.9-.4-1.9-.7-2.8-1.1-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5zm-354.8 13.8c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2-79.6 2.5-154.7 42.2-201.2 108z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M399.7 18.8c1.3.5 2.6.9 4 1.4 4.1 1.5 8.1 3 12 4.7 103.7 43.7 164.6 148.9 155.7 256.9-1.6 19.2-21.5 30-39.6 23.4L349.7 239l-45.1-16.4-182.1-66.3c-18.1-6.6-26.4-27.7-15.3-43.4 64.2-90.8 182.8-132 292.6-94zM288.8 54.6C240.8 61 196.1 84.1 163 120l68.8 25c14.2-32.9 33.4-63.4 57-90.4M413.3 211c9.4-32.5 13.2-66.4 11.2-100.2-1.1-18.2-12-34.2-28.2-41.9-3-1.2-6-2.4-9-3.5-1-.4-2-.7-2.9-1-18.2-5.9-38.3-.9-51.5 13.1-23.3 24.6-42.2 53.1-55.9 84zm45.2 16.4 65.5 23.9c-2.2-47-20.3-91.9-51-127.2.4 35-4.5 69.8-14.5 103.3M552 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h192.7l76.9-211.4 45.1 16.4-71 195z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M471.6 99.4c46.8 45.1 72.2 109 68.3 174.7l-86.3-31.4c15.2-43.2 21.6-89 18.9-134.8-.2-2.9-.5-5.7-.9-8.5m-68.8-45.1c21.7 10.1 36.3 31.4 37.7 55.6 2.5 41.4-3.3 82.8-17 121.9l-167.6-61c14.6-38.8 36.9-74.2 65.3-104.3 17.5-18.5 44.1-25.2 68.2-17.3l3.3 1.2c3.4 1.2 6.7 2.5 10 3.9zm-3.1-35.4c-109.8-38-228.4 3.2-292.6 94-11.1 15.7-2.8 36.8 15.3 43.4l92.4 33.6 30.2 11 167.6 61 30.1 10.9 89.1 32.4c18.1 6.6 38-4.2 39.6-23.4 9-108.1-52-213.2-155.6-256.9-2.4-1.1-4.9-2.1-7.4-3l-5.9-2.1-2.7-.9zM305.9 37c-2.7 2.3-5.4 4.8-7.9 7.5-31.5 33.3-56 72.5-72.2 115.4l-89.6-32.6C176.5 73 239.2 40.1 305.9 37M16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16H253.4l77.8-213.7-30.1-10.9L219.4 480z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M462.6 70.6c64.2 49.4 99.6 128.8 92.9 210-.6 7-8.4 13.2-18.2 9.7l-89.1-32.4 4.1-11.4c16.1-44.3 23-91.4 20.2-138.4-.8-13.3-4.2-25.9-9.9-37.4zm-53.3-31c27.1 12.6 45.4 39.1 47.2 69.3 2.7 44.9-3.9 89.8-19.3 132l-4.2 11.4-197.6-72 4.1-11.4c15.4-42.2 39.2-80.8 70.1-113.5 21.8-23.1 55-31.4 85-21.5 1.2.4 2.4.9 3.6 1.3 3.7 1.4 7.4 2.8 11 4.3zm-77.5-18.3c-12.5 5.2-24.1 13-33.7 23.2-32.4 34.2-57.4 74.7-73.5 119l-4.1 11.4-92.5-33.7c-9.8-3.6-11.8-13.4-7.7-19.1 48.1-68 128.6-106.3 211.5-100.9zm68-2.4c-109.8-38-228.4 3.2-292.6 94-11.1 15.7-2.8 36.8 15.3 43.4l92.4 33.6 15 5.5 197.7 71.9 15 5.5 89.1 32.4c18.1 6.6 38-4.2 39.6-23.4 9-108.1-52-213.2-155.6-256.9-2.4-1.1-4.9-2.1-7.4-3l-5.9-2.1-2.7-.9zM8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8H239.1l84.6-232.4-15-5.5-84.8 233-1.8 4.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m297.1 219.8 60.1 21.9L282.1 448H214z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M434 269.7 223.5 193l3.3-9.1c18.1-49.8 45.6-95.6 80.9-135.1l4-4.5c23.3-26 60.1-35.4 93.1-23.7.9.3 1.9.7 2.8 1.1 31.9 12.6 53.3 43 54.4 77.4l.2 6c1.7 52.9-6.8 105.7-24.9 155.5zM287.8 23.1l-4 4.5c-38 42.5-67.6 91.9-87.1 145.5l-3.3 9.1-71-25.8c-18.1-6.6-26.4-27.7-15.3-43.4C153.7 47.1 228.8 7.3 308.4 4.9c-7.5 5.1-14.4 11.2-20.6 18.2m206.2 75c-.3-8.5-1.4-16.8-3.4-24.8 56.9 53 87.3 130 80.8 208.5-1.6 19.2-21.5 30-39.6 23.4l-67.7-24.6 3.3-9.1c19.5-53.6 28.6-110.4 26.8-167.4zM32 448h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
