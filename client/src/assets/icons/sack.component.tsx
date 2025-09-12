import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SackIcon: React.FC<
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
                  d="M192 96h128l47.4-71.1c7.1-10.7-.5-24.9-13.3-24.9H157.9c-12.8 0-20.4 14.2-13.3 24.9zm128 32H192c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416c0 53 43 96 96 96h320c53 0 96-43 96-96 0-165.1-122.3-243.3-179-279.6-4.8-3.1-9.2-5.9-13-8.4"
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
                  d="M293.3 152h-74.6l-13.8 8.8C150.9 195.4 48 277 48 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48 0-139-102.9-220.6-156.9-255.2zm.2-58.8L324.6 48H187.4l31.1 45.2L226 104h60zM0 416c0-141.2 89.4-230.5 150.8-276.1 10.4-7.7 20-14.2 28.2-19.4l-27.2-39.6-29.9-43.3C111 21.7 122.4 0 141.7 0h228.6c19.3 0 30.7 21.7 19.8 37.6l-29.9 43.3-27.2 39.5c8.2 5.3 17.8 11.7 28.2 19.4C422.6 185.5 512 274.8 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96"
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
                  d="M310.5 144h-109l-5.3 3.4C141.4 182.5 32 268.3 32 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64 0-147.7-109.4-233.5-164.3-268.6l-5.3-3.4zm-3.8-41.8L355.1 32H156.9l48.4 70.2 6.7 9.8h87.8l6.7-9.8zM0 416c0-142.6 91.2-232.3 152.6-277.5 9.7-7.1 18.6-13.2 26.4-18.1L160.8 94l-38.9-56.4C111 21.7 122.4 0 141.7 0h228.6c19.3 0 30.7 21.7 19.8 37.6L351.2 94 333 120.4c7.7 4.9 16.7 11 26.4 18.1C420.8 183.7 512 273.4 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96"
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
                  d="M315.2 128H196.8l-9.2 5.9C131.8 169.6 16 259.6 16 416c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80 0-156.4-115.8-246.4-171.6-282.1zm4.6-16.7 57.1-82.8c3.7-5.3-.1-12.5-6.6-12.5H141.7c-6.4 0-10.2 7.2-6.6 12.5l57.1 82.8.5.7h126.6zM0 416c0-153.1 105.1-245.2 165.7-286.8 4.7-3.3 9.2-6.2 13.3-8.8l-9.1-13.2-48-69.6C111 21.7 122.4 0 141.7 0h228.6c19.3 0 30.7 21.7 19.8 37.6l-48 69.6-9.1 13.2c4.1 2.6 8.6 5.6 13.3 8.8C406.9 170.8 512 262.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96"
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
                  d="M192 96h128l47.4-71.1c7.1-10.7-.5-24.9-13.3-24.9H157.9c-12.8 0-20.4 14.2-13.3 24.9zm128 32H192c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416c0 53 43 96 96 96h320c53 0 96-43 96-96 0-165.1-122.3-243.3-179-279.6-4.8-3.1-9.2-5.9-13-8.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16"
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
