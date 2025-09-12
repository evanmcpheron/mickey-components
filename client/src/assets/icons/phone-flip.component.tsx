import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PhoneFlipIcon: React.FC<
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
                  d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6l40.4 49.3c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
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
                  d="M136.2 275.2c16.4-7 35.4-2.4 46.7 11.4l33.2 40.6c46-26.7 84.4-65.1 111.1-111.1L286.7 183c-13.8-11.3-18.5-30.3-11.4-46.7l48-112C330.8 6.7 349.7-3.1 368.4.9l112 24C498.8 28.8 512 45.1 512 64c0 231.2-175.2 421.5-400.1 445.5-9.8 1-19.7 1.8-29.6 2.2h-.1c-6.1.2-12.1.4-18.3.4-18.9 0-35.2-13.2-39.1-31.6l-24-112c-4-18.7 5.8-37.6 23.4-45.1l112-48zM70.5 464c215.8-3.5 390-177.8 393.5-393.5l-99.2-21.3-43 100.4 35.8 29.4c18.2 14.9 22.9 40.8 11.1 61.2-30.9 53.3-75.3 97.7-128.6 128.6-20.4 11.8-46.3 7.1-61.2-11.1l-29.4-35.9-100.4 43zM464 64"
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
                  d="M136.2 275.2c16.4-7 35.4-2.4 46.7 11.4l33.2 40.6c46-26.7 84.4-65.1 111.1-111.1L286.7 183c-13.8-11.3-18.5-30.3-11.4-46.7l48-112C330.8 6.7 349.7-3.1 368.4.9l112 24C498.8 28.8 512 45.1 512 64c0 236.7-183.5 430.5-416 446.9-4.5.3-9.1.6-13.7.8h-.1c-6.1.2-12.1.4-18.3.4-18.9 0-35.2-13.2-39.1-31.6l-24-112c-4-18.7 5.8-37.6 23.4-45.1l112-48zM64.3 480C293.9 479.8 480 293.7 480 64c0-3.8-2.6-7-6.3-7.8l-112-24c-3.7-.8-7.5 1.2-9 4.7l-48 112c-1.4 3.3-.5 7.1 2.3 9.3l40.6 33.2c12.1 9.9 15.3 27.2 7.4 40.8-29.5 50.9-71.9 93.3-122.7 122.7-13.6 7.9-30.9 4.7-40.8-7.4l-33.2-40.6c-2.3-2.8-6.1-3.7-9.3-2.3l-112 48c-3.5 1.5-5.5 5.3-4.7 9l24 112c.8 3.7 4 6.3 7.8 6.3h.3z"
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
                  d="M195 378.1c4.7 5.7 12.6 7.5 19.2 4.3 73.8-34.8 133.5-94.5 168.3-168.3 3.1-6.6 1.3-14.6-4.3-19.2l-49.3-40.4c-8.2-6.7-11-18-7-27.8l40-96c4.6-11.1 16.8-17.1 28.5-13.9l88 24C488.8 43.7 496 53.2 496 64c0 238.6-193.4 432-432 432-10.8 0-20.3-7.2-23.2-17.7l-24-88c-3.2-11.6 2.8-23.8 13.9-28.5l96-40c9.8-4.1 21.1-1.3 27.8 7zm12.3-10.1L167 318.7c-11.2-13.7-30-18.4-46.3-11.6l-96 40c-18.6 7.7-28.5 28-23.2 47.4l24 88C30.2 499.9 46 512 64 512c247.4 0 448-200.6 448-448 0-18-12.1-33.8-29.5-38.6l-88-24c-19.4-5.3-39.7 4.6-47.4 23.2l-40 96c-6.8 16.3-2.1 35.2 11.6 46.3l49.3 40.4c-33.2 70.4-90.2 127.4-160.7 160.7"
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
                  d="m6.3 412.3 8.5 31.2c71.8-8.7 138.9-32.9 197.8-69.1l-20.5-25c-55.4 33.4-118.4 55.4-185.8 62.9m406-406c-7.5 67.4-29.5 130.4-62.9 185.8l25 20.5c36.2-58.9 60.4-125.9 69.2-197.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m443.6 14.8 39 10.6C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448-18 0-33.8-12.1-38.6-29.5l-10.6-39c224-27.2 401.6-204.8 428.8-428.8zM6.3 412.3l-4.9-17.8c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6l25.1 30.7c-55.3 33.4-118.3 55.4-185.7 62.9m343.1-220.2L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96c7.7-18.6 28-28.5 47.4-23.2l17.8 4.9c-7.5 67.4-29.5 130.4-62.9 185.8z"
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
