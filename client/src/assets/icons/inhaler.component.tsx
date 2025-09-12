import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const InhalerIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M429.8 32.7c-12.7-3.2-25.6 4.4-29 17l-14 51.8L533.2 248l42-153.7c1.7-6.2.8-12.9-2.4-18.4s-8.6-9.6-14.9-11.2l-128-32zm104.3 272.8c1.5-5.5-.1-11.5-4.1-15.5L383.8 143.8c-8.7-8.7-23.6-4.7-26.8 7.2l-16.5 61.2c-1.9 7-8.2 11.8-15.4 11.8H232c-22.1 0-40 17.9-40 40v176c0 22.1 17.9 40 40 40h224c18 0 33.8-12.1 38.6-29.5zM64 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-16a32 32 0 1 0 0-64 32 32 0 1 0 0 64M64 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-16a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m429.8 32.7 128 32c6.3 1.6 11.6 5.6 14.9 11.2s4.1 12.2 2.4 18.4L533.2 248 386.9 101.6l14-51.8c3.4-12.6 16.3-20.2 29-17zM389 216.9l-2.1 7.8c-7.5 27.9-32.9 47.3-61.8 47.3H240v160h209.9l33-121.2-94-94zM530 290c4.1 4.1 5.6 10 4.1 15.5l-39.5 145C489.8 467.9 474 480 456 480H232c-22.1 0-40-17.9-40-40V264c0-22.1 17.9-40 40-40h93.1c7.2 0 13.6-4.9 15.4-11.8l16.5-61.3c3.2-11.9 18.1-15.9 26.8-7.2zM0 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m542.5 93.5-113-28.2-16.7 62.2-25.8-25.8 14-51.8c3.4-12.6 16.3-20.2 29-17l128 32c6.3 1.6 11.6 5.6 14.9 11.2s4.1 12.2 2.4 18.4L533.2 248l-25.8-25.8zM380.7 186l-9.3 34.5c-5.6 21-24.6 35.5-46.4 35.5h-93c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h224c3.6 0 6.8-2.4 7.7-5.9l37.1-136zM530 290c4.1 4.1 5.6 10 4.1 15.5l-39.5 145C489.8 467.9 474 480 456 480H232c-22.1 0-40-17.9-40-40V264c0-22.1 17.9-40 40-40h93.1c7.2 0 13.6-4.9 15.4-11.8l16.5-61.3c3.2-11.9 18.1-15.9 26.8-7.2zM8 256a24 24 0 1 1 48 0 24 24 0 1 1-48 0m96 48a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M559.7 90.1c.6-2.1.3-4.3-.8-6.1s-2.9-3.2-5-3.7l-128-32c-4.2-1.1-8.5 1.5-9.7 5.7l-16.4 60.7-13.1-13.1 14-51.8c3.4-12.6 16.3-20.2 29-17l128 32c6.3 1.6 11.6 5.6 14.9 11.2s4.1 12.2 2.4 18.4L533.2 248l-13-13zm-40.4 211.8-145-145-18.5 74.7c-3.4 14.4-16.3 24.4-31 24.4H248c-22.1 0-40 17.9-40 40v128c0 22.1 17.9 40 40 40h190.9c21.7 0 40.7-14.6 46.4-35.5l34-126.5zm11.3-11.3c4 4 5.6 9.9 4.1 15.5l-34 126.5c-7.5 28-32.9 47.4-61.8 47.4H248c-30.9 0-56-25.1-56-56V296c0-30.9 25.1-56 56-56h76.8c7.4 0 13.8-5 15.5-12.2l18.5-74.7c3-12.1 18-16.3 26.8-7.5zM32 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0M16 352a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0M16 448a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M429.8 32.7c-12.7-3.2-25.6 4.4-29 17l-24.2 89.9c2.6.7 5 2.1 7.1 4.2l139.8 139.7 51.7-189.2c1.7-6.2.8-12.9-2.4-18.4s-8.6-9.6-14.9-11.2l-128-32zM32 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-80a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-80a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M534.1 305.5c1.5-5.5-.1-11.5-4.1-15.5L383.8 143.8c-8.7-8.7-23.6-4.7-26.8 7.2l-16.5 61.2c-1.9 7-8.2 11.8-15.4 11.8H232c-22.1 0-40 17.9-40 40v176c0 22.1 17.9 40 40 40h224c18 0 33.8-12.1 38.6-29.5z"
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
