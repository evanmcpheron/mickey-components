import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleCaretRightIcon: React.FC<
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m368 0c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4S208 369.5 208 360V152c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6"
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
                  d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m368 0c0-6.7-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4S208 142.5 208 152v208c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104c4.9-4.5 7.7-10.9 7.7-17.6"
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
                  d="M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m352 0c0-9.6-4-18.7-11-25.2l-102.8-95.5c-5.1-4.7-11.8-7.3-18.7-7.3-15.2 0-27.5 12.3-27.5 27.5v201c0 15.2 12.3 27.5 27.5 27.5 6.9 0 13.6-2.6 18.7-7.3L341 281.2c7-6.5 11-15.6 11-25.2m-32.7-1.7c.5.4.7 1.1.7 1.7s-.3 1.3-.7 1.7L224 346.2V165.9z"
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
                  d="M496 256a240 240 0 1 1-480 0 240 240 0 1 1 480 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m352 0c0-7.3-3-14.3-8.4-19.3L234.4 134.8c-4.7-4.4-10.8-6.8-17.2-6.8-13.9 0-25.2 11.3-25.2 25.2v205.6c0 13.9 11.3 25.2 25.2 25.2 6.4 0 12.5-2.4 17.2-6.8l109.2-101.9c5.4-5 8.4-12 8.4-19.3M208 153.2c0-5.1 4.1-9.2 9.2-9.2 2.3 0 4.6.9 6.3 2.5l109.2 101.9c2.1 2 3.3 4.7 3.3 7.6s-1.2 5.6-3.3 7.6L223.5 365.5c-1.7 1.6-4 2.5-6.3 2.5-5.1 0-9.2-4.1-9.2-9.2z"
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m368 0c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4S208 369.5 208 360V152c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M360.3 273.6c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4S208 142.5 208 152v208c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4z"
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
