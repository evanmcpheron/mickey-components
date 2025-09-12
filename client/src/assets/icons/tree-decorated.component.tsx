import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TreeDecoratedIcon: React.FC<
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
                  d="M210.6 5.9 62 169.4c-3.9 4.2-6 9.8-6 15.5 0 12.8 10.3 23.1 23.1 23.1H104L28.5 313.7c-2.9 4.1-4.5 9-4.5 14.1 0 13.3 10.8 24.2 24.2 24.2H80L3.8 474c-2.5 4-3.8 8.5-3.8 13.2C0 500.9 11.1 512 24.9 512h398.2c13.7 0 24.9-11.1 24.9-24.9 0-4.7-1.3-9.2-3.8-13.2L368 352h31.8c13.4 0 24.2-10.9 24.2-24.2 0-5-1.6-10-4.5-14.1L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1 0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9M160 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72-104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m56 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M242.9 9.3C238.4 3.4 231.4 0 224 0s-14.4 3.4-18.9 9.3L66.8 186.9c-5.6 7.2-6.6 17-2.6 25.3s12.4 13.5 21.6 13.5h16.5L35.1 326.2c-4.9 7.4-5.4 16.8-1.2 24.6s12.3 12.7 21.2 12.7H79L4.1 474.6c-5 7.4-5.5 16.9-1.3 24.7S15.1 512 24 512h400c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.3-24.7L369 363.5h24c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-67.3-100.6h16.5c9.2 0 17.5-5.2 21.6-13.5s3-18-2.6-25.3zm-95.7 168.3h-12.3L224 63.1l89.1 114.5h-12.3c-8.9 0-17 4.9-21.2 12.7s-3.7 17.3 1.2 24.6L348 315.5h-24.2c-8.9 0-17 4.9-21.2 12.7s-3.7 17.3 1.3 24.7l75 111.1H69.1L144 352.9c5-7.4 5.5-16.9 1.3-24.7s-12.3-12.7-21.2-12.7H99.9l67.2-100.6c4.9-7.4 5.4-16.8 1.2-24.6s-12.3-12.7-21.2-12.7zM184 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m80-152a24 24 0 1 0-48 0 24 24 0 1 0 48 0m24 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M236.4 5.9C233.3 2.2 228.8 0 224 0s-9.3 2.2-12.4 5.9L70.3 178.6c-4.1 5-6.3 11.2-6.3 17.6 0 15.4 12.4 27.8 27.8 27.8h18.9l-72.6 90.8c-3.9 4.9-6.1 11.1-6.1 17.4 0 15.3 12.5 27.8 27.8 27.8h21.3L5.2 467.6C1.8 472.4 0 478 0 483.9 0 499.4 12.6 512 28.1 512h391.8c15.5 0 28.1-12.6 28.1-28.1 0-5.8-1.8-11.5-5.2-16.2L366.9 360h21.3c15.4 0 27.8-12.5 27.8-27.8 0-6.3-2.2-12.5-6.1-17.4L337.3 224h18.9c15.4 0 27.8-12.4 27.8-27.8 0-6.4-2.2-12.6-6.3-17.6zm176 474.1H35.6l89.5-126.8c3.4-4.9 3.9-11.3 1.1-16.6S118 328 112 328H68.5l88-110c3.8-4.8 4.6-11.4 1.9-16.9s-8.3-9.1-14.4-9.1h-43.3L224 41.3 347.3 192H304c-6.2 0-11.8 3.5-14.4 9.1s-1.9 12.1 1.9 16.9l88 110H336c-6 0-11.5 3.3-14.2 8.6s-2.3 11.7 1.1 16.6zM184 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m80-152a24 24 0 1 0-48 0 24 24 0 1 0 48 0m24 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M229.8 2.5C228.3.9 226.2 0 224 0s-4.3.9-5.8 2.5L72.5 155.9c-5.5 5.7-8.5 13.3-8.5 21.2 0 17 13.8 30.9 30.9 30.9h30.8l-85.4 91.9C35 305.7 32 313.2 32 321c0 17.1 13.9 31 31 31h32.2L7.1 460.4c-4.6 5.7-7.1 12.7-7.1 20C0 497.8 14.2 512 31.6 512h384.8c17.5 0 31.6-14.2 31.6-31.6 0-7.3-2.5-14.3-7.1-19.9L352.8 352H385c17.1 0 31-13.9 31-31 0-7.8-3-15.3-8.3-21.1L322.3 208h30.8c17 0 30.9-13.8 30.9-30.9 0-7.9-3-15.5-8.5-21.3zM416.4 496H31.6C23 496 16 489 16 480.4c0-3.6 1.2-7.1 3.5-9.8L118.2 349c1.9-2.4 2.3-5.7 1-8.5s-4.1-4.6-7.2-4.6H63c-8.3 0-15-6.7-15-15 0-3.8 1.4-7.4 4-10.2l97.9-105.4c2.2-2.3 2.7-5.7 1.5-8.6s-4.2-4.8-7.3-4.8H94.9c-8.2 0-14.9-6.7-14.9-14.9 0-3.8 1.5-7.5 4.1-10.2L224 19.6l139.9 147.3c2.6 2.8 4.1 6.4 4.1 10.2 0 8.2-6.7 14.9-14.9 14.9H304c-3.2 0-6.1 1.9-7.3 4.8s-.7 6.3 1.5 8.6L396 310.8c2.6 2.8 4 6.4 4 10.2 0 8.3-6.7 15-15 15h-49c-3.1 0-5.9 1.8-7.2 4.6s-.9 6.1 1 8.5l98.7 121.5c2.3 2.8 3.5 6.3 3.5 9.8 0 8.6-7 15.6-15.6 15.6M176 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32m80-144a16 16 0 1 0-32 0 16 16 0 1 0 32 0m16 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M210.6 5.9 62 169.4c-3.9 4.2-6 9.8-6 15.5 0 12.8 10.3 23.1 23.1 23.1H104L28.5 313.7c-2.9 4.1-4.5 9-4.5 14.1 0 13.3 10.8 24.2 24.2 24.2H80L3.8 474c-2.5 4-3.8 8.5-3.8 13.2C0 500.9 11.1 512 24.9 512h398.2c13.7 0 24.9-11.1 24.9-24.9 0-4.7-1.3-9.2-3.8-13.2L368 352h31.8c13.4 0 24.2-10.9 24.2-24.2 0-5-1.6-10-4.5-14.1L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1 0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9M160 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72-104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m56 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m32 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
