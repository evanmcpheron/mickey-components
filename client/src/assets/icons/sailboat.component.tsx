import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SailboatIcon: React.FC<
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
                  d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9.4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6S502 352 496 352H272c-8.8 0-16-7.2-16-16zm-43.9 80.5c7 1.9 11.9 8.2 11.9 15.5v224c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5M5.7 404.3C2.8 394.1 10.5 384 21.1 384h533.8c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133c-57.4 0-107.7-38.1-123.3-93.3l-4-14.3z"
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
                  d="M284.6 6.2C280.4.8 273.2-1.3 266.8.9S256 9.2 256 16v288c0 8.8 7.2 16 16 16h224c6.1 0 11.7-3.5 14.4-9s2-12-1.7-16.9l-224-288zm-72 90.5c-6.7-2-14 .6-17.9 6.4l-128 192c-3.3 4.9-3.6 11.2-.8 16.4S74.1 320 80 320h128c8.8 0 16-7.2 16-16V112c0-7.1-4.6-13.3-11.4-15.3M60 400h456l-.4 1.6c-8.2 36.5-40.6 62.4-78 62.4H138.4c-37.4 0-69.8-25.9-78-62.4zm-40-48c-10.3 0-17.9 9.5-15.6 19.5l9.1 40.6c13.1 58.4 65 99.9 124.9 99.9h299.2c59.9 0 111.7-41.5 124.9-99.9l9.1-40.6c2.2-10-5.4-19.5-15.6-19.5z"
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
                  d="M285.1 6.8c-4-5.7-11.3-8.2-17.9-6.1S256 9 256 16v320c0 8.8 7.2 16 16 16h224c6 0 11.4-3.3 14.2-8.6s2.3-11.7-1.1-16.6zM288 320V66.8L465.3 320zM212.1 96.5c-7-1.9-14.4 1.2-18 7.5l-128 224c-2.8 5-2.8 11 .1 16s8.1 8 13.8 8h128c8.8 0 16-7.2 16-16V112c0-7.3-4.9-13.6-11.9-15.5M107.6 320 192 172.2V320zm-65.1 96h491c-13.5 38.1-49.6 64-90.5 64H133c-40.9 0-77-25.9-90.5-64m-21.4-32c-10.6 0-18.3 10.1-15.4 20.3l4 14.3C25.3 473.9 75.6 512 133 512h310c57.3 0 107.7-38.1 123.2-93.3l4-14.3c2.9-10.2-4.8-20.3-15.4-20.3H21.1z"
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
                  d="M270.5 3.3c-2-2.8-5.6-4-9-3S256 4.5 256 8v336c0 4.4 3.6 8 8 8h240c3 0 5.7-1.7 7.1-4.3s1.1-5.9-.6-8.3l-240-336zM272 336V33l216.5 303zM218.1 96.3c-3.5-1-7.1.5-9 3.6l-144 240c-1.5 2.5-1.5 5.5-.1 8.1s4.1 4.1 7 4.1h144c4.4 0 8-3.6 8-8V104c0-3.6-2.4-6.8-5.9-7.7M86.1 336 208 132.9V336zm468.7 64-4 14.3C537.3 462.6 493.2 496 443 496H133c-50.2 0-94.2-33.4-107.8-81.7l-4-14.3h533.7zM21.1 384c-10.6 0-18.3 10.1-15.4 20.3l4 14.3C25.3 473.9 75.6 512 133 512h310c57.3 0 107.7-38.1 123.2-93.3l4-14.3c2.9-10.2-4.8-20.3-15.4-20.3H21.1z"
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
                  d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9.4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6S502 352 496 352H272c-8.8 0-16-7.2-16-16zm-32 96v224c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5S224 104.7 224 112"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.7 404.3C2.8 394.1 10.5 384 21.1 384h533.8c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133c-57.4 0-107.7-38.1-123.3-93.3l-4-14.3z"
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
