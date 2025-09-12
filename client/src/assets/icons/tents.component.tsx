import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TentsIcon: React.FC<
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
                  d="M396.6 6.5 235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512h160c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9 3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7H416c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"
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
                  d="M430.1 4.6c-8.4-6.1-19.8-6.1-28.2 0l-165 120c-1.7 1.2-3.3 2.6-4.8 4 10.9 1.4 21.5 5.6 30.7 12.6l16.1 12.3L416 53.7l150.8 109.7c1.8 1.3 2.9 3.2 3.2 5.4l17.2 126.1c.7 4.8-3.1 9.1-7.9 9.1H454c.6 2.1 1 4.3 1.3 6.5l6.2 41.5h117.8c33.9 0 60.1-29.9 55.5-63.6l-17.2-126.1c-2.1-15.1-10.2-28.7-22.6-37.7L430 4.6zM238.7 165c-8.6-6.7-20.7-6.7-29.3 0L43.6 293.1c-11.5 8.9-19.1 22-21.2 36.4L5.5 448.1C.6 481.8 26.8 512 60.9 512h326.2c34.1 0 60.3-30.2 55.4-63.9l-16.9-118.6c-2.1-14.4-9.7-27.5-21.2-36.4zM73 331l127-98.2V464H60.9c-4.9 0-8.6-4.3-7.9-9.1l16.9-118.7c.3-2.1 1.4-3.9 3-5.2zm175 29V232.9L375 331c1.6 1.3 2.7 3.1 3 5.2l17 118.7c.7 4.8-3.1 9.1-7.9 9.1h-76.7z"
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
                  d="M425.5 3.1c-5.7-4.2-13.4-4.2-19 0L236 129.1c9.5 1.8 18.7 5.8 26.8 12l5.4 4.1L416 35.9l163.5 120.9c3.5 2.6 5.8 6.5 6.4 10.8L603.4 302c1.2 9.6-6.2 18.1-15.9 18.1H456.7l4.8 32h126c29 0 51.3-25.5 47.6-54.2l-17.5-134.5c-1.7-12.9-8.6-24.6-19.1-32.4zm-192 160c-5.7-4.2-13.4-4.2-19 0L41.4 291c-10.5 7.8-17.4 19.5-19.1 32.4L4.8 457.8C1.1 486.5 23.5 512 52.4 512h343.2c29 0 51.3-25.5 47.6-54.2l-17.6-134.4c-1.7-12.9-8.6-24.6-19.1-32.4zm-173 153.7L208 207.7V480H52.4c-9.7 0-17.1-8.5-15.9-18.1l17.6-134.3c.6-4.3 2.9-8.2 6.4-10.8m179.5-6.9V207.7l147.5 109.1c3.5 2.6 5.8 6.5 6.4 10.8L411.4 462c1.2 9.6-6.2 18.1-15.9 18.1h-50.1l-.2-.4-104-168c-.4-.6-.7-1.1-1.2-1.6zm0 170.1V370.5L307.8 480z"
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
                  d="M420.6 1.5c-2.8-2-6.6-2-9.4.1l-173 127.8-.2.1c6.1 1.4 12.1 3.7 17.7 6.8L416.1 17.9l175.8 124.5c5.5 3.9 9.1 9.9 9.9 16.6l17.8 142c1.8 14.3-9.4 27-23.8 27H457.9l2.4 16h135.5c24.1 0 42.7-21.1 39.7-45l-17.8-142c-1.4-11.1-7.4-21.2-16.6-27.7zm-192 160c-2.8-2-6.5-2-9.2 0L39 289.3c-9.2 6.5-15.2 16.7-16.6 27.9l-18 150C1.5 491 20.1 512 44.1 512H404c24 0 42.6-21 39.7-44.8l-18-150.1c-1.3-11.2-7.4-21.3-16.6-27.9zM340.5 496 232 317.8V183.5l167.8 118.8c5.5 3.9 9.1 10 10 16.7l18 150.1c1.7 14.3-9.4 26.9-23.8 26.9zM48.2 302.3 216 183.5V496H44.1c-14.4 0-25.5-12.6-23.8-26.9l18-150.1c.8-6.7 4.4-12.8 10-16.7zM232 496V348.5L321.8 496z"
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
                  d="M435.4 6.5c-11.5-8.7-27.3-8.7-38.8 0L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M204.6 166.5c11.5-8.7 27.3-8.7 38.8 0l168 128c6.6 5 11 12.5 12.3 20.7l24 160c1.4 9.2-1.3 18.6-7.4 25.6s-14.9 11.1-24.2 11.1h-76.3c-12.1 0-23.2-6.8-28.6-17.7l-68.5-136.7c-1.7-3.4-5.1-5.5-8.8-5.5-5.5 0-9.9 4.4-9.9 9.9V480c0 17.7-14.3 32-32 32H32c-9.3 0-18.2-4.1-24.2-11.1S-1 484.5.4 475.3l24-160c1.2-8.2 5.6-15.7 12.3-20.7l168-128z"
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
