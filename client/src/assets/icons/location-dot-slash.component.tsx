import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LocationDotSlashIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L459 334.5c30-51.6 53-103.7 53-142.5C512 86 426 0 320 0c-70.8 0-132.7 38.4-166 95.4zm219 171.7c6.8-28 32.1-48.8 62.2-48.8 35.3 0 64 28.7 64 64 0 24.7-13.9 46-34.4 56.7l-91.8-72zm148.4 239.3L128.1 196.9c4.2 88.2 117.8 239.3 168.2 302.2 12.3 15.3 35.1 15.3 47.4 0 16.2-20.2 39-49.6 62.5-83.1z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L459 334.5c30-51.6 53-103.7 53-142.5C512 86 426 0 320 0c-70.8 0-132.7 38.4-166 95.4zm153.5 120.3c24-46 72.2-77.4 127.7-77.4 79.5 0 144 64.5 144 144 0 12.4-4.5 31.6-15.3 57.2-7.4 17.4-16.9 36.2-27.9 55.4l-57.7-45.2c22.2-14.3 36.9-39.1 36.9-67.4 0-44.2-35.8-80-80-80-35.1 0-65 22.7-75.7 54.1zM318 223.9l-28.5-22.4c-.9-3-1.5-6.2-1.5-9.6 0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32c-.7 0-1.3 0-2-.1zM406.2 416l-37.8-29.8c-17.3 24.6-34.2 47.2-48.5 65.4-24.8-31.8-57.8-76.4-86.2-122.6-17.1-27.7-32-55.1-42.5-79.9-.5-1.2-1-2.5-1.5-3.7L128 196.8C132.2 285 245.8 436.1 296.2 499c12.3 15.3 35.1 15.3 47.4 0 16.2-20.2 39-49.6 62.5-83.1z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M385.8 389.5c-24.4 35.2-48.5 66.5-65.8 88.1-25.4-31.8-65.8-84.7-99.9-140-17.3-28.1-32.7-56.3-43.6-82.1-6.7-15.9-11.4-30-14-42.2L128.1 186c-.1 2-.1 4-.1 6 0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0 17.3-21.6 42-53.6 67.2-89.8l-25.2-19.9zM320 0c-56.2 0-106.7 24.1-141.8 62.5l25.2 19.9C232.6 51.4 274 32 320 32c88.4 0 160 71.6 160 160 0 15.6-5.4 37-16.6 63.4-3.3 7.7-6.9 15.6-10.9 23.7l25.6 20.2C498.3 259.8 512 221.9 512 192 512 86 426 0 320 0m80 192c0-44.2-35.8-80-80-80-20.5 0-39.2 7.7-53.3 20.4l25.8 20.3c7.8-5.5 17.3-8.7 27.6-8.7 26.5 0 48 21.5 48 48 0 6.2-1.2 12.2-3.4 17.7l25.7 20.3c6.1-11.3 9.6-24.3 9.6-38M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M393.8 406c-23.5 33.5-46.3 62.9-62.6 83.2-5.9 7.3-16.6 7.3-22.4 0-25.5-31.8-67.1-86.2-102.3-143.2-17.6-28.5-33.4-57.4-44.7-84.3-8-19-13.6-36.4-16.1-51.5l-17.6-13.9c3.6 88.1 117.7 239.8 168.2 302.9 12.3 15.3 35.1 15.3 47.4 0 16.2-20.3 39.1-49.7 62.6-83.3zM320 0c-53.3 0-101.5 21.7-136.2 56.7l12.6 10C228.2 35.3 271.8 16 320 16c97.2 0 176 78.8 176 176 0 18.7-6.4 42.5-17.8 69.6-2.8 6.6-5.9 13.4-9.2 20.3l12.9 10.1C500 255.1 512 220 512 192 512 86 426 0 320 0m80 192c0-44.2-35.8-80-80-80-17.5 0-33.8 5.6-46.9 15.2l13.2 10.4c9.8-6.1 21.4-9.6 33.8-9.6 35.3 0 64 28.7 64 64 0 7.1-1.1 13.9-3.3 20.2l13.2 10.4c3.9-9.4 6.1-19.8 6.1-30.6zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M459 334.5c30-51.6 53-103.7 53-142.5C512 86 426 0 320 0c-70.8 0-132.7 38.4-166 95.4l90.2 70.7C255 134.7 284.9 112 320 112c44.2 0 80 35.8 80 80 0 28.3-14.7 53.1-36.8 67.4zm-52.8 81.6L128.1 196.9c4.2 88.2 117.8 239.3 168.2 302.2 12.3 15.3 35.1 15.3 47.4 0 16.2-20.2 39-49.6 62.5-83.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
