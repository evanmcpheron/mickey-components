import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BowlFoodIcon: React.FC<
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
                  d="M0 192c0-35.3 28.7-64 64-64h1.6C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64h1.6c35.3 0 64 28.7 64 64 0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192m0 91.4C0 268.3 12.3 256 27.4 256h457.2c15.1 0 27.4 12.3 27.4 27.4 0 70.5-44.4 130.7-106.7 154.1l-1.8 14.5c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4"
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
                  d="M0 192c0 11.7 3.1 22.6 8.6 32h494.8c5.4-9.4 8.6-20.3 8.6-32 0-35.3-28.7-64-64-64h-1.6C439 91.5 406.7 64 368 64c-15 0-29 4.1-40.9 11.2C313.8 49.6 286.9 32 256 32s-57.8 17.6-71.1 43.2C173 68.1 159 64 144 64c-38.7 0-71 27.5-78.4 64H64c-35.3 0-64 28.7-64 64m144.7 228.6c-4-13.5-13.8-24.6-26.8-30.3-35.2-15.4-61.2-47.6-68.1-86.3h412.4c-6.9 38.7-32.9 70.9-68.1 86.3-12.9 5.7-22.7 16.7-26.8 30.3-2 6.6-8.2 11.4-15.3 11.4H160c-7.2 0-13.4-4.8-15.3-11.4M27.4 256C12.3 256 0 268.3 0 283.4c0 67.4 40.6 125.4 98.6 150.8C106.5 460.7 131 480 160 480h192c29 0 53.5-19.3 61.4-45.7 58.1-25.4 98.6-83.4 98.6-150.8 0-15.1-12.3-27.4-27.4-27.4H27.4z"
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
                  d="M203.8 98.2C213.9 77.5 233.8 64 256 64s42.1 13.5 52.2 34.2c2 4.1 5.6 7.2 10 8.4s9.1.6 12.9-1.9C340 99.2 350.2 96 361 96c27.8 0 52.1 21.2 57.8 51 1.5 7.7 8.3 13.2 16.1 13h1.1c23.3 0 44 20.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-39.4-27.5-73.5-64.9-79.2C435 91.6 401.5 64 361 64c-11.4 0-22.3 2.2-32.3 6.2C312.2 47.2 286 32 256 32s-56.2 15.2-72.7 38.2c-10-4-20.9-6.2-32.3-6.2-40.5 0-74 27.6-86.1 64.8C27.5 134.5 0 168.6 0 208c0 8.8 7.2 16 16 16s16-7.2 16-16c0-27.5 20.7-48 44-48h1.1c7.8.2 14.7-5.3 16.1-13 5.7-29.8 30-51 57.8-51 10.8 0 21 3.2 29.8 8.7 3.8 2.4 8.6 3.1 12.9 1.9s8-4.3 10-8.4zm-74.5 326.9c-2.7-9-9.2-16.4-17.8-20.2C65.9 385 33.9 340.3 32.1 288h447.8c-1.8 52.3-33.9 97-79.4 116.9-8.6 3.8-15.2 11.2-17.8 20.2-4 13.3-16.2 22.9-30.7 22.9H160c-14.5 0-26.7-9.6-30.7-22.9M27.4 256C12.3 256 0 268.3 0 283.4c0 67.4 40.6 125.4 98.6 150.8C106.5 460.7 131 480 160 480h192c29 0 53.5-19.3 61.4-45.7 58.1-25.4 98.6-83.4 98.6-150.8 0-15.1-12.3-27.4-27.4-27.4H27.4z"
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
                  d="M194.3 86.8C205.9 63.7 229.3 48 256 48s50.1 15.7 61.7 38.8l3.9 7.8L329 90c10.4-6.3 22.5-10 35.5-10 33.4 0 61.6 24.5 68.1 57.6l1.3 6.6 6.8-.2h1.3c29.6 0 54 24.8 54 56 0 7.5-1.4 14.6-4 21.1-1.6 4.1.4 8.8 4.5 10.4s8.8-.4 10.4-4.5c3.3-8.3 5.1-17.4 5.1-26.9 0-37.9-28.6-69.3-65.2-71.8-10-37-42.9-64.3-82.3-64.3-13.1 0-25.5 3-36.6 8.4C312.8 48.2 286.3 32 256 32s-56.8 16.2-71.9 40.4C173 67 160.6 64 147.5 64c-39.4 0-72.3 27.3-82.3 64.2C28.6 130.7 0 162.1 0 200c0 9.5 1.8 18.6 5.1 26.9 1.6 4.1 6.3 6.1 10.4 4.5s6.1-6.3 4.5-10.4c-2.5-6.5-4-13.6-4-21.1 0-31.2 24.4-56 54-56h1.3l6.8.2 1.3-6.6c6.5-33 34.7-57.6 68.1-57.6 13 0 25.1 3.7 35.5 10.1l7.4 4.6zM112 432.7c-.1-6.1-3.8-11.6-9.3-14.2C51.5 395.1 16 343.4 16 283.4c0-6.3 5.1-11.4 11.4-11.4h457.2c6.3 0 11.4 5.1 11.4 11.4 0 59.9-35.5 111.6-86.7 135.1-5.6 2.6-9.2 8.1-9.3 14.2-.4 17.3-14.6 31.3-32 31.3H144c-17.4 0-31.6-13.9-32-31.3M27.4 256C12.3 256 0 268.3 0 283.4c0 66.4 39.4 123.7 96 149.7.6 26 21.8 46.9 48 46.9h224c26.1 0 47.4-20.9 48-46.9 56.7-26 96-83.2 96-149.7 0-15.1-12.3-27.4-27.4-27.4z"
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
                  d="M8.6 224C3.1 214.6 0 203.7 0 192c0-35.3 28.7-64 64-64h1.6C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64h1.6c35.3 0 64 28.7 64 64 0 11.7-3.1 22.6-8.6 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M27.4 256C12.3 256 0 268.3 0 283.4c0 70.5 44.4 130.7 106.7 154.1l1.8 14.4c2 16 15.6 28 31.8 28h231.5c16.1 0 29.8-12 31.8-28l1.8-14.4C467.6 414.1 512 353.9 512 283.4c0-15.1-12.3-27.4-27.4-27.4z"
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
