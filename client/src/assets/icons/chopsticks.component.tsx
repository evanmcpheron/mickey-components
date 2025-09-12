import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChopsticksIcon: React.FC<
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
                  d="M368 0c-15.3 0-29 7.2-37.7 18.3L3.4 486.1c-5.5 6.9-4.3 17 2.7 22.5s17 4.2 22.5-2.7L405.7 77.7C412.2 69.5 416 59.2 416 48c0-26.5-21.5-48-48-48M131.9 506.4c5.8 6.7 15.9 7.5 22.6 1.7l468.7-359.7c10.3-8.8 16.8-21.9 16.8-36.4 0-26.5-21.5-48-48-48-11.9 0-22.8 4.4-31.2 11.6L133.6 483.9c-6.7 5.8-7.5 15.8-1.7 22.6z"
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
                  d="m144.9 332.9 188-278.2c3.5-4.3 8.4-6.7 13.6-6.7 9.2 0 18.1 8 18.1 19.5 0 4.6-1.4 8.7-3.8 11.9zM346.5 0c-21.4 0-40.3 10.4-52.2 26.1l-.4.5-.4.6L7.4 450.7c-12 16.4-9.2 39.8 6.8 52.8 16.6 13.5 40.5 10.5 53.5-5.9l330.2-387.7.4-.5.4-.5c8.7-11.5 13.9-25.9 13.9-41.4C412.6 31 383.7 0 346.5 0m-37 356.7 251.6-240.5c3.2-2.6 7.3-4.2 11.9-4.2 10.4 0 18.9 8.4 18.9 18.9 0 5.5-2.4 10.5-6.2 14zM573 64c-16.6 0-31.8 6.1-43.5 16.1l-.5.4-.5.4-381 364.2c-15.5 13.8-17.1 37.6-3.5 53.5s37.3 17.9 53.4 4.7l418.1-320.9.5-.4.5-.4c14.3-12.2 23.3-30.4 23.3-50.8.1-36.9-29.9-66.8-66.8-66.8"
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
                  d="M43.6 464.5 333.7 42.7c5.3-6.6 13.2-10.7 22-10.7 15.4 0 28.3 12.7 28.3 29 0 6.7-2.2 12.8-5.9 17.7zM355.7 0c-19.4 0-36.5 9.2-47.5 23.4l-.3.4-.3.4L6.2 462.4c-10 13.4-7.7 32.4 5.5 42.9 13.3 10.6 32.5 8.3 43-4.8L402.6 99.3l.3-.3.3-.4c8-10.4 12.8-23.5 12.8-37.6 0-33.5-26.8-61-60.3-61M174.6 467.9l385.8-365.2c5-4.2 11.5-6.7 18.6-6.7 16.2 0 29 12.9 29 28.6 0 8.5-3.7 16.1-9.8 21.4zM579 64c-15.1 0-29 5.5-39.6 14.5l-.3.3-.3.3L138.5 458c-12.7 11.1-14.1 30.4-3 43.3 11 12.8 30.3 14.3 43.2 3.7L618 171.2l.3-.3.3-.3c13-11.1 21.4-27.6 21.4-46C640 91 612.5 64 579 64"
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
                  d="M17.7 484.3 335.3 29.9C342 21.4 352.2 16 363.7 16c19.9 0 36.3 16.4 36.3 37 0 8.6-2.9 16.5-7.7 22.7L28.4 493l-.2.2-.1.2c-2.3 3-6.5 3.5-9.4 1.2-3-2.4-3.5-6.8-1.2-9.9l.2-.3zM363.7 0c-16.7 0-31.6 8-41.2 20.3l-.2.3L4.7 475c-7.5 9.9-5.8 24.2 4 32 9.9 7.9 24.1 6.2 31.9-3.7L404.6 86l.2-.2.1-.2c7-9 11.1-20.4 11.1-32.7 0-29.2-23.3-53-52.3-53zm-217 483.7L563 88.7c6.5-5.4 14.8-8.7 23.9-8.7 20.5 0 37 16.4 37 36.6 0 11-4.9 20.9-12.8 27.6L155.9 494.1l-.3.3c-3 2.5-7.4 2.2-9.9-.7s-2.2-7.1.8-9.6l.3-.3zM587 64c-13.1 0-25.2 4.8-34.5 12.6l-.3.3-416.3 395c-9.5 8.2-10.6 22.6-2.3 32.1 8.2 9.5 22.6 10.6 32.2 2.6l455.4-349.8.3-.3c11.3-9.6 18.5-23.9 18.5-39.9 0-29.1-23.8-52.6-53-52.6"
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
                  d="M235.8 153.5 3.4 486.1c-5.5 6.9-4.3 17 2.7 22.5s17 4.2 22.5-2.7l267.8-304-60.5-48.4zM419 211 133.6 483.9c-6.7 5.8-7.5 15.8-1.7 22.6s15.9 7.5 22.6 1.7l317.8-243.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m296.3 201.9-60.5-48.4 94.5-135.2A47.89 47.89 0 0 1 368 0c26.5 0 48 21.5 48 48 0 11.2-3.8 21.5-10.3 29.7zm175.9 62.4L419 211 560.8 75.6C569.2 68.4 580.1 64 592 64c26.5 0 48 21.5 48 48 0 14.6-6.5 27.6-16.8 36.4l-151 115.8z"
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
