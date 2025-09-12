import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MarkerIcon: React.FC<
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
                  d="M481 31c-35.9-35.8-94.1-35.8-130 0l-15 15-13.1-13c-28.1-28.1-73.7-28.1-101.8 0L135 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l86.1-86c9.4-9.4 24.6-9.4 33.9 0L302.1 80 186.3 195.7l130 130L481 161c35.9-35.9 35.9-94.1 0-129.9zM293.7 348.3l-130-130-64.2 64.2c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1z"
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
                  d="M336 113.9 225.9 224l62.1 62.1L447 127c17.1-17.1 17.1-44.9 0-62.1s-44.9-17.1-62.1 0l-15 15zm-144 144-58.5 58.5c-38.8 38.8-66 87.5-78.6 140.7 53.2-12.7 101.9-39.9 140.7-78.6l58.5-58.5zm40.4-234.2c27.9-18.4 65.9-15.4 90.5 9.2L336 46.1l15-15c35.9-35.9 94.1-35.9 130-.1 35.9 35.9 35.9 94.1 0 129.9L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8l80-80L199 183l69.1-69.1 6.2-6.2L285.1 97l17-17L289 66.9c-9.4-9.4-24.6-9.3-33.9 0L169 153c-4.1 4.1-9.3 6.4-14.7 6.9-6.9.7-14-1.7-19.3-6.9-9.4-9.4-9.4-24.6 0-33.9L221.1 33c3.5-3.5 7.3-6.6 11.3-9.2z"
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
                  d="M330.3 97 353 74.3l20.7-20.7c23.4-23.4 61.3-23.4 84.7 0s23.4 61.3 0 84.7L293.7 303 209 218.3zm-144 144 84.7 84.7-64.2 64.2c-43.6 43.6-99 73.2-159.4 85.3l-13.2 2.6 2.6-13.2c12.1-60.4 41.8-115.9 85.3-159.4zM307.7 74.3 285.1 97 99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1L481 161c35.9-35.9 35.9-94.1 0-129.9S386.9-4.8 351 31l-20.7 20.7-13-13.1c-25-25-65.5-25-90.5 0l-94 94c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l94.1-94.1c9.1-9.1 22.3-11.6 33.6-7.4 4.2 1.5 8.2 4 11.6 7.4l13.1 13.1z"
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
                  d="M469.7 42.3c-29.7-29.6-77.7-29.6-107.4 0L192 212.7 299.3 320l170.4-170.3c29.6-29.6 29.6-77.7 0-107.3zM288 331.3 180.7 224l-69.8 69.8c-45.8 45.8-77 104.1-89.7 167.6l-5 25c-.5 2.6.3 5.3 2.2 7.2s4.6 2.7 7.2 2.2l25-5c63.5-12.7 121.8-43.9 167.6-89.7zM351 31c35.9-35.8 94.1-35.8 130 0s35.9 94.1 0 129.9L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L313.4 68.7l-13.1-13.1c-15.6-15.6-40.9-15.6-56.6 0l-94.1 94.1c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l94.1-94.1c21.9-21.9 57.3-21.9 79.2 0l13.1 13.1z"
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
                  d="M305 337 175 207l-75.5 75.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M481 31c-35.9-35.8-94.1-35.8-130 0l-15 15-13.1-13c-28.1-28.1-73.7-28.1-101.8 0L135 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l86.1-86c9.4-9.4 24.6-9.4 33.9 0L302.1 80 175 207l130 130 176-176c35.9-35.9 35.9-94.1 0-129.9z"
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
