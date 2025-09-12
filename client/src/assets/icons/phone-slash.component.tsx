import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PhoneSlashIcon: React.FC<
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
                  d="M601.2 5.1c10.4-8.2 25.5-6.3 33.7 4.1s6.3 25.5-4.1 33.7l-592 464c-10.4 8.2-25.5 6.3-33.7-4.1s-6.3-25.5 4.1-33.7l155.6-122C101.8 270 64 171.4 64 64c0-18 12.1-33.8 29.5-38.6l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L208 207.3c12 25.5 27.2 49.2 45 70.7zM234.3 415.6l91.3-72c13.7 9.1 28 17.3 43 24.3l40.4-49.2c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C545.8 499.9 530 512 512 512c-104.9 0-201.3-36-277.7-96.4"
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
                  d="M601.2 5.1c10.4-8.2 25.5-6.3 33.7 4.1s6.3 25.5-4.1 33.7l-592 464c-10.4 8.2-25.5 6.3-33.7-4.1s-6.3-25.5 4.1-33.7l155.6-122C101.8 270 64 171.4 64 64c0-18.9 13.2-35.2 31.6-39.1l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c8.6 14.9 18.5 29 29.4 42.1zM240.4 287.9C228.1 273 217 257 207.2 240.2c-11.8-20.4-7.1-46.3 11.1-61.2l35.9-29.4-43-100.4L112 70.5c1.5 93.7 35.2 179.6 90.5 247.1l37.8-29.6zm-6 127.7 38.8-30.6c65 48.5 145.3 77.6 232.3 79l21.3-99.2-100.4-43-29.4 35.8c-14.9 18.2-40.8 22.9-61.2 11.1-8-4.6-15.7-9.5-23.3-14.7l39.8-31.3c2.5 1.5 5 3.1 7.6 4.5l24.1-29.5 31.4-24.7c7.9-1.7 16.4-1.1 24.3 2.3l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.2 31.6-39.1 31.6-6.1 0-12.2-.1-18.3-.4h-.1c-10-.4-19.8-1.1-29.6-2.2-86.2-9.2-165.2-42.8-229.7-93.9z"
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
                  d="M480 510.9c-95.4-6.7-182.6-43.3-252.2-100.5l25.7-20.4c70.9 56.3 160.6 89.9 258.1 90h.3c3.8 0 7-2.6 7.8-6.3l24-112c.8-3.7-1.2-7.5-4.7-9l-112-48c-3.3-1.4-7.1-.5-9.3 2.3l-33.2 40.6c-9.9 12.1-27.2 15.3-40.8 7.4-8.7-5-17.1-10.4-25.3-16.2l26.4-20.8q7.35 4.8 15 9.3l33.2-40.6c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.2 31.6-39.1 31.6-6.1 0-12.2-.1-18.3-.4h-.1c-4.6-.2-9.1-.4-13.7-.8zM141.2 315.6C92.5 243.9 64 157.3 64 64c0-18.9 13.2-35.2 31.6-39.1l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c1.9 3.3 3.9 6.6 6 9.8l-25.2 19.9c-2.9-4.5-5.7-9.1-8.4-13.7-7.9-13.6-4.7-30.9 7.4-40.8l40.6-33.2c2.8-2.3 3.7-6.1 2.3-9.3l-48-112c-1.5-3.5-5.3-5.5-9-4.7l-112 24c-3.8.8-6.4 4-6.4 7.8 0 85.8 26 165.5 70.4 231.7zM614.1 3.4c6.9-5.5 17-4.3 22.5 2.6s4.3 17-2.6 22.5l-608 480c-6.9 5.5-17 4.3-22.5-2.6s-4.3-17 2.6-22.5z"
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
                  d="M64 64c0-18 12-33.8 29.5-38.6l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L208 207.3c5.2 10.9 10.9 21.6 17.2 31.8l-12.6 10c-7-11.2-13.3-22.9-19-35-3.1-6.6-1.3-14.6 4.3-19.2l49.3-40.4c8.2-6.7 11-18 7-27.8l-40-96c-4.6-11.1-16.8-17.1-28.5-13.9l-88 24C87.2 43.7 80 53.2 80 64c0 86.6 25.5 167.3 69.4 235l-12.6 10C90.7 238.5 64 154.4 64 64m448 432c10.8 0 20.3-7.2 23.2-17.7l24-88c3.2-11.6-2.8-23.8-13.9-28.5l-96-40c-9.8-4.1-21.1-1.3-27.8 7L381 378.1c-4.6 5.7-12.6 7.5-19.2 4.3-17.4-8.2-33.9-17.8-49.6-28.6l13.2-10.4c13.7 9.2 28.2 17.4 43.3 24.5l40.3-49.2c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C545.8 499.9 530 512 512 512c-104.9 0-201.5-36.1-277.8-96.5l12.9-10.2C320.2 462.2 412.2 496 512 496M627 1.7c3.5-2.7 8.5-2.1 11.3 1.3s2.2 8.5-1.3 11.2L13 510.3c-3.5 2.7-8.5 2.1-11.3-1.3s-2.1-8.5 1.3-11.3z"
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
                  d="m325.7 343.7-91.3 72C310.7 476 407.1 512 512 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L368.7 368c-15-7.1-29.3-15.2-43-24.3M64 64c0 107.4 37.8 206 100.8 283.1L253 278c-17.8-21.5-32.9-45.2-45-70.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2l-88 24C76.1 30.2 64 46 64 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M634.9 9.2c-8.2-10.4-23.3-12.3-33.7-4.1l-592 464c-10.4 8.2-12.3 23.3-4.1 33.7s23.3 12.3 33.7 4.1l592-464c10.4-8.2 12.3-23.3 4.1-33.7"
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
