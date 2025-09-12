import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserHairIcon: React.FC<
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
                  d="M304 128v16c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16c0-5.5.6-10.8 1.6-16H176c29.8 0 55.9-16.3 69.6-40.5C257.3 86.4 275.5 96 296 96h1.3c4.3 9.8 6.7 20.6 6.7 32m-208 0v16c0 70.7 57.3 128 128 128s128-57.3 128-128v-16C352 57.3 294.7 0 224 0S96 57.3 96 128m65.3 192C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3z"
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
                  d="M304 128c0-11.4-2.4-22.2-6.7-32H296c-20.5 0-38.7-9.6-50.4-24.5C231.9 95.7 205.8 112 176 112h-30.4c-1 5.2-1.6 10.5-1.6 16v16c0 44.2 35.8 80 80 80s80-35.8 80-80zm-208 0C96 57.3 153.3 0 224 0s128 57.3 128 128v16c0 70.7-57.3 128-128 128S96 214.7 96 144zM49.6 464h348.8c-9.3-54.5-56.8-96-113.9-96H163.6c-57.2 0-104.6 41.5-113.9 96zM0 483.6C0 393.2 73.2 320 163.6 320h120.8c90.4 0 163.6 73.2 163.6 163.6 0 15.7-12.7 28.4-28.4 28.4H28.4C12.7 512 0 499.3 0 483.6"
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
                  d="M320 128c0-5.5-.5-10.8-1.3-16h-30.1c-14.9 0-29.1-5.9-39.6-16.4l-6.3-6.3C223.4 113.5 194 128 162.3 128H128v16c0 53 43 96 96 96s96-43 96-96zm-12.8-48c-16.6-28.7-47.7-48-83.2-48-41.8 0-77.4 26.7-90.5 64h28.9c26.7 0 51.2-15 63.2-38.9.8-1.6 1.8-3.1 3.1-4.5 6.2-6.2 16.4-6.2 22.6 0L271.6 73c4.5 4.5 10.6 7 17 7zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128v16c0 70.7-57.3 128-128 128S96 214.7 96 144zM32 480h384c-1.9-71-60-128-131.5-128H163.6C92.1 352 33.9 409 32 480m-32 3.6C0 393.2 73.2 320 163.6 320h120.8c90.4 0 163.6 73.2 163.6 163.6 0 15.7-12.7 28.4-28.4 28.4H28.4C12.7 512 0 499.3 0 483.6"
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
                  d="M336 128c0-5.4-.4-10.8-1.1-16H312c-22.1 0-43-10.2-56.6-27.5l-4.4 5.4C231.2 114 201.7 128 170.5 128H112v16c0 61.9 50.1 112 112 112s112-50.1 112-112zm-4.6-32c-6.8-22.8-20.6-42.5-39-56.7l-26.6 32.5 1.4 1.8C277.8 87.7 294.4 96 312 96zm-160.9 16c26.4 0 51.4-11.8 68.1-32.3L279 30.4C262.7 21.2 244 16 224 16c-56.4 0-103.1 41.7-110.9 96zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128v16c0 70.7-57.3 128-128 128S96 214.7 96 144zM16 483.6c0 6.9 5.6 12.4 12.4 12.4h391.2c6.9 0 12.4-5.6 12.4-12.4 0-81.5-66.1-147.6-147.6-147.6H163.6C82.1 336 16 402.1 16 483.6m-16 0C0 393.2 73.2 320 163.6 320h120.8c90.4 0 163.6 73.2 163.6 163.6 0 15.7-12.7 28.4-28.4 28.4H28.4C12.7 512 0 499.3 0 483.6"
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
                  d="M176 112h-56c-7.9 0-15.5-1.7-22.3-4.6C96.6 114.1 96 121 96 128c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11-1.4-21.8-4-32h-36c-22.8 0-42.8-11.9-54.1-29.8C241 93.7 210.6 112 176 112"
                />
                <path
                  className="aps-icon-foreground"
                  d="M120 112h56c34.6 0 65-18.3 81.9-45.8C269.2 84.1 289.2 96 312 96h36C333.8 40.8 283.6 0 224 0 160.3 0 107.5 46.5 97.7 107.4c6.8 3 14.4 4.6 22.3 4.6m41.3 208C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3z"
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
