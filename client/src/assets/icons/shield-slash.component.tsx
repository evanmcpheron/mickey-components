import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShieldSlashIcon: React.FC<
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
                  d="M320 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.3 58.7-14.7 146.2-62.1 225l132.9 104.1c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1L131 77.4 306.7 2.9C310.8 1 315.4 0 320 0M80.6 159.5l356.9 281.2c-25.2 24-55.3 45.4-91.1 62.5-16.7 8-36.1 8-52.8 0C132 425.8 86.1 261.5 80.6 159.5"
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
                  d="M174.2 111.2 320 49.4 503 127c5.9 2.5 9.1 7.8 9 12.8-.3 52.8-13 127.8-52.2 195.3zM497.9 365c47.4-78.8 61.8-166.3 62.1-225 .1-26.2-16.3-47.9-38.3-57.2L333.4 2.9C329.2 1 324.7 0 320 0s-9.2 1-13.4 2.9L131 77.4 38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7zM80.6 159.5c5.5 102 51.5 266.3 213.1 343.7 16.7 8 36.1 8 52.8 0 35.7-17.1 65.8-38.5 91.1-62.5l-38.2-30.1c-20.8 18.9-45.1 35.7-73.5 49.3-3.6 1.7-7.8 1.7-11.3 0C195.8 403.1 147.9 290.6 133.3 201z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM418 414.9c-23.5 22.9-51.8 43.3-85.4 59.4-7.9 3.8-17.2 3.8-25.1 0-138.3-66.1-184.6-203.6-193.7-299.6l-33.7-26.5c2.6 100.7 45.8 274.7 213.5 355 16.7 8 36.1 8 52.8 0 38.6-18.5 70.6-41.9 97-68.2L418 415zM295 7.8 174 59.2l28.6 22.6 104.9-44.5c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6-.2 45.8-9.6 108.6-37.1 169.6l25.8 20.4c32.5-68.7 43-139.7 43.3-189.8.1-26.2-16.3-47.9-38.3-57.2L345 7.8c-16-6.8-34-6.8-50 0"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm411.9 428.8c-23.8 22.4-52 42.2-85.4 58.2-12.3 5.9-26.7 5.9-39 0-147.2-70.5-194.5-217.4-203-316.6l-17-13.4c5.3 101.9 51.1 266.9 213.1 344.5 16.7 8 36.1 8 52.8 0 35.8-17.1 65.9-38.5 91.2-62.6l-12.7-10zM295 7.8 182.4 55.6l14.3 11.3 104.6-44.3c12-5.1 25.5-5.1 37.5 0l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4-.2 46.1-9.4 109.7-36.8 172.2l13 10.2C550 256 559.8 188.2 560 140c.1-26.2-16.3-47.9-38.3-57.2L345 7.8c-16-6.8-34-6.8-50 0"
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
                  d="M320 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.3 58.7-14.7 146.2-62.1 225L131 77.4 306.7 2.9C310.8 1 315.4 0 320 0M80.6 159.5l356.9 281.2c-25.2 24-55.3 45.4-91.1 62.5-16.7 8-36.1 8-52.8 0C132 425.8 86.1 261.5 80.6 159.5"
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
