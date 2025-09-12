import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleDownLeftIcon: React.FC<
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
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-96-313.4V336c0 8.8 7.2 16 16 16h137.4c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L296 280l66.3-66.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-36.7-36.7c-3.6-3.6-8.5-5.6-13.6-5.6s-10 2-13.7 5.7L232 216l-33.4-33.4c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6"
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
                  d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m0 464a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-96-313.4c0-12.5 10.1-22.6 22.6-22.6 6 0 11.8 2.4 16 6.6L232 216l66.3-66.3c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7l36.7 36.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L296 280l33.4 33.4c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H176c-8.8 0-16-7.2-16-16z"
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
                  d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448m0 480a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-80-184c0 4.4 3.6 8 8 8h113.4c3.7 0 6.6-3 6.6-6.6 0-1.8-.7-3.4-1.9-4.7l-25.4-25.4c-6.2-6.2-6.2-16.4 0-22.6l59.1-59.1c3.6-3.6 4.9-9 3.3-13.9-.7-2-1.8-3.8-3.3-5.3l-22.1-22.1c-1.5-1.5-3.3-2.6-5.3-3.3-4.9-1.6-10.3-.4-13.9 3.3l-59.1 59.1c-6.2 6.2-16.4 6.2-22.6 0L187.4 210c-1.2-1.2-2.9-1.9-4.7-1.9-3.7 0-6.6 3-6.6 6.6V328zm8 40c-22.1 0-40-17.9-40-40V214.6c0-21.3 17.3-38.6 38.6-38.6 10.2 0 20.1 4.1 27.3 11.3l14.1 14.1 47.7-47.7c12.2-12.2 30.3-16.5 46.7-11 6.7 2.2 12.8 6 17.8 11l22.1 22.1c5 5 8.8 11.1 11 17.8 5.5 16.4 1.2 34.5-11 46.7L310.6 288l14.1 14.1c7.2 7.2 11.3 17.1 11.3 27.3 0 21.3-17.3 38.6-38.6 38.6z"
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
                  d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m0 496a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-96-168c0 4.4 3.6 8 8 8h127c5 0 9-4 9-9 0-2.4-.9-4.7-2.6-6.3l-35-35c-3.1-3.1-3.1-8.2 0-11.3l82.3-82.4c2.1-2.1 3.3-5 3.3-8s-1.2-5.9-3.3-8L320 163.3c-2.1-2.1-5-3.3-8-3.3s-5.9 1.2-8 3.3l-82.3 82.3c-3.1 3.1-8.2 3.1-11.3 0l-35-35c-1.7-1.7-4-2.6-6.3-2.6-5 0-9 4-9 9v127zm8 24c-13.3 0-24-10.7-24-24V217c0-13.8 11.2-25 25-25 6.6 0 13 2.6 17.7 7.3l29.3 29.4 76.7-76.7c5.1-5.1 12.1-8 19.3-8s14.2 2.9 19.3 8l28.7 28.7c5.1 5.1 8 12.1 8 19.3s-2.9 14.2-8 19.3L283.3 296l29.4 29.4c4.7 4.7 7.3 11 7.3 17.7 0 13.8-11.2 25-25 25H168z"
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
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-96-313.4V336c0 8.8 7.2 16 16 16h137.4c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L296 280l66.3-66.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-36.7-36.7c-3.6-3.6-8.5-5.6-13.6-5.6s-10 2-13.7 5.7L232 216l-33.4-33.4c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 336V198.6c0-12.5 10.1-22.6 22.6-22.6 6 0 11.8 2.4 16 6.6L232 216l66.3-66.3c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7l36.7 36.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L296 280l33.4 33.4c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H176c-8.8 0-16-7.2-16-16"
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
