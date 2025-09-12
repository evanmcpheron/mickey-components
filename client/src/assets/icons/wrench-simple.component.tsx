import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WrenchSimpleIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m132.7 164.7 48 48c6.2 6.2 16.4 6.2 22.6 0l48-48c3-3 4.7-7.1 4.7-11.3V17.5c0-11 10.9-18.7 20.8-13.8C340.3 35 384 100.4 384 176c0 71.1-38.6 133.1-96 166.3V464c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V342.3C38.6 309.1 0 247.1 0 176 0 100.4 43.7 35 107.2 3.7c9.9-4.9 20.8 2.8 20.8 13.8v135.9c0 4.2 1.7 8.3 4.7 11.3"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M133 10.3c6.9 4.4 11 12 11 20.2v119.6l48 48 48-48V30.5c0-8.2 4.2-15.8 11-20.2s15.5-5 23-1.6C338.3 38.2 384 98.5 384 176c0 64.3-31.6 121.1-80 156v156c0 13.3-10.7 24-24 24s-24-10.7-24-24V319.1c0-8.3 4.3-16.1 11.4-20.4C308.6 273.3 336 227.8 336 176c0-42.2-18.3-77.7-48-102.4V160c0 6.4-2.5 12.5-7 17l-72 72c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-72-72c-4.5-4.5-7-10.6-7-17V73.6C66.3 98.3 48 133.8 48 176c0 51.8 27.4 97.3 68.6 122.7 7.1 4.4 11.4 12.1 11.4 20.4V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V332C31.6 297.1 0 240.3 0 176 0 98.5 45.7 38.2 110 8.7c7.4-3.4 16.1-2.8 23 1.6"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M137 2.8c4.4 3 7 7.9 7 13.2v152l48 36 48-36V16c0-5.3 2.6-10.2 7-13.2s9.9-3.6 14.8-1.7C332.9 28.9 384 94.1 384 176c0 71.1-38.6 133.1-96 166.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V332.8c0-6 3.4-11.5 8.7-14.2C316.6 292.1 352 238.2 352 176c0-58.9-31.9-107.7-80-134.8V176c0 5-2.4 9.8-6.4 12.8l-64 48a15.9 15.9 0 0 1-19.2 0l-64-48c-4-3-6.4-7.8-6.4-12.8V41.2C63.9 68.3 32 117.1 32 176c0 62.2 35.4 116.1 87.3 142.6 5.4 2.7 8.7 8.2 8.7 14.2V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V342.3C38.6 309.1 0 247.1 0 176 0 94.1 51.1 28.9 122.2 1.1c4.9-1.9 10.5-1.3 14.8 1.7"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 172.4c0 71-38.7 132.8-96 166V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V338.5c0-5.9 3.3-11.1 8.3-14.1 54.1-31.5 87.7-89.7 87.7-152 0-66.1-36.6-126.1-95.6-156.4l-.4 144c0 4.2-1.7 8.3-4.7 11.3l-64 64c-6.3 6.3-16.4 6.3-22.6 0l-64-64c-3-3-4.7-7.1-4.7-11.3l-.4-143.9C52.6 46.4 16 106.3 16 172.4c0 62.2 33.6 120.4 87.7 152 5.1 3 8.3 8.2 8.3 14.1V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V338.5c-57.3-33.2-96-95-96-166C0 64.8 90.1 0 111.8 0c8.5 0 16.2 6.7 16.2 16.1V160l64 64 64-64V16.1C256 6.7 263.7 0 272.2 0 293.9 0 384 64.8 384 172.4"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 342.3V464c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V342.3c-28.2 16.3-61 25.7-96 25.7s-67.8-9.4-96-25.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M203.3 212.7c-6.2 6.2-16.4 6.2-22.6 0l-48-48c-3-3-4.7-7.1-4.7-11.3V17.5c0-11-10.9-18.7-20.8-13.8C43.7 35 0 100.4 0 176c0 106 86 192 192 192s192-86 192-192c0-75.6-43.7-141-107.2-172.3-9.9-4.9-20.8 2.8-20.8 13.8v135.9c0 4.2-1.7 8.3-4.7 11.3z"
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
