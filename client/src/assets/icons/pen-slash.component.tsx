import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L409.9 296l75.7-75.7-129.9-130-91.5 91.5zm302.4 359.7L195.8 250.3l-73.2 73.2c-10.4 10.4-18 23.3-22.2 37.4L65 481.2c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2l88.6-88.6zm85.5-345.5-48.4 48.4 130 130 48.4-48.4c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L409.9 296l146.8-146.7c21.9-21.9 24.6-55.6 8.2-80.5-2.3-3.5-5.1-6.9-8.2-10l-39.4-39.5c-25-25-65.5-25-90.5 0L264.2 181.8zm263.5 206.5L385 129l62 62-75.1 75.1zm38.9 153.1-38-29.9-84.6 84.6c-4.7 4.7-10.6 8.2-17 10.1l-23.4 6.9-54.8 16.1 16.1-54.8 6.9-23.4c1.7-5.6 4.5-10.8 8.4-15.2.6-.6 1.1-1.2 1.7-1.8l77.3-77.3-38-29.9-73.2 73.2c-10.4 10.4-18 23.3-22.2 37.4l-23 78.3L65 481.2c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l42.2-12.4 78.1-23c12.4-3.6 23.7-9.9 33.4-18.4 1.4-1.2 2.7-2.5 4-3.8l88.6-88.6z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM559 138.8c21.9-21.9 21.9-57.3 0-79.2L516.4 17c-21.9-21.9-57.3-21.9-79.2 0L297.5 156.7l25.3 20 59.6-59.7 76.6 76.6-50.6 50.6 25.3 20zM317.2 335.4 223.6 429c-7.6 7.6-16.9 13.1-27.2 16.1l-92.8 27.3 27.3-92.8c3-10.3 8.6-19.6 16.1-27.2l84.6-84.6-25.3-20-81.9 81.9c-11.4 11.4-19.7 25.4-24.2 40.8l-35.6 121c-1.7 5.6-.1 11.7 4 15.8s10.2 5.7 15.8 4l121-35.6c15.4-4.5 29.4-12.9 40.8-24.2l96.2-96.2-25.3-20zM459.8 39.6c9.4-9.4 24.6-9.4 33.9 0l42.6 42.6c9.4 9.4 9.4 24.6 0 33.9L481.6 171 405 94.4z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm548.4 126.6c18.7-18.7 18.7-49.1 0-67.9l-45.9-45.8c-18.7-18.7-49.1-18.7-67.9 0l-139.9 140 12.6 10 60.4-60.4 91.1 91.1-49.7 49.7 12.6 10zm-423.8 219 80.2-80.2-12.6-10-78.9 78.9c-12.3 12.3-21.3 27.5-26.2 44.2L64.3 501.7c-.8 2.8-.1 5.8 2 7.9s5.1 2.8 7.9 2l121.6-35.8c16.7-4.9 31.9-13.9 44.2-26.2l92.2-92.2-12.6-10-90.9 90.9c-10.4 10.4-23.3 18-37.4 22.2L83.8 492.2l31.6-107.5c4.2-14.1 11.8-27 22.2-37.4M459 25.9c12.5-12.5 32.8-12.5 45.3 0l45.8 45.8c12.5 12.5 12.5 32.8 0 45.3l-66.9 66.9-91.1-91.1z"
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
                  d="m195.8 250.3 145.4 114.5-88.6 88.6c-10.4 10.4-23.3 18-37.4 22.2L94.8 511c-8.4 2.5-17.5.2-23.7-6.1s-8.5-15.3-6.1-23.7l35.4-120.3c4.2-14.1 11.8-27 22.2-37.4zm289.9-30L409.9 296 264.3 181.8l91.5-91.5zm-58.9-201c25-25 65.5-25 90.5 0l39.4 39.4c25 25 25 65.5 0 90.5l-48.4 48.4-130-129.9 48.4-48.4z"
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
