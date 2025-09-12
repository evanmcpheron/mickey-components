import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RampLoadingIcon: React.FC<
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
                  d="M32 48C32 21.5 53.5 0 80 0h288c26.5 0 48 21.5 48 48v392.4l-64-128V64H96v248.4l-64 128zm372.4 440.8c.8 1.5 1.2 3 1.5 4.6 1.5 9.3-5.6 18.6-15.8 18.6H57.9c-10.2 0-17.4-9.2-15.8-18.6.3-1.5.7-3.1 1.5-4.6L96 384l32-64h192l32 64z"
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
                  d="M96 48h256c8.8 0 16 7.2 16 16v248.4l48 88V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v336.4l48-88V64c0-8.8 7.2-16 16-16m67 240c-20.5 0-39.3 11.2-49.2 29.2l-74 135.7C25.3 479.5 44.6 512 75 512h298c30.4 0 49.7-32.5 35.1-59.2l-74-135.7c-9.8-18-28.7-29.2-49.2-29.2H163zm-7 52.2c1.4-2.6 4.1-4.2 7-4.2h122c2.9 0 5.6 1.6 7 4.2L359.6 464H88.4z"
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
                  d="M96 32h256c17.7 0 32 14.3 32 32v277.7l32 58.7V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v336.4l32-58.7V64c0-17.7 14.3-32 32-32m67.1 256c-17.6 0-33.8 9.6-42.2 25.1L38.7 464.8C27.2 486.1 42.6 512 66.9 512h314.2c24.2 0 39.7-25.9 28.1-47.2l-82.1-151.7c-8.4-15.5-24.6-25.1-42.2-25.1zM149 328.4c2.8-5.2 8.2-8.4 14.1-8.4h121.8c5.9 0 11.3 3.2 14.1 8.4L381.1 480H66.9z"
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
                  d="M96 16h256c26.5 0 48 21.5 48 48v323.8l16 29.3V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v353.1l16-29.3V64c0-26.5 21.5-48 48-48m67.1 272c-14.7 0-28.2 8.1-35.2 21L37.7 476.6c-8.6 16 3 35.4 21.1 35.4h330.4c18.2 0 29.7-19.4 21.1-35.4L320.1 309c-7-13-20.5-21-35.2-21zM142 316.6c4.2-7.8 12.3-12.6 21.1-12.6h121.8c8.8 0 16.9 4.8 21.1 12.6l90.2 167.6c2.9 5.3-1 11.8-7 11.8H58.8c-6.1 0-9.9-6.5-7-11.8z"
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
                  d="M32 48C32 21.5 53.5 0 80 0h288c26.5 0 48 21.5 48 48v392.4l-64-128V64H96v248.4l-64 128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 320h192l84.4 168.8c5.3 10.6-2.4 23.2-14.3 23.2H57.9c-11.9 0-19.6-12.5-14.3-23.2z"
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
