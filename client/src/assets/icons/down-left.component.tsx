import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownLeftIcon: React.FC<
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
                  d="M48 432h240c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-72-72 134-134c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3l-41.4-41.4C324.1 68.1 314.2 64 304 64s-20.1 4.1-27.3 11.3L142.6 209.4l-72-72c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6V400c0 17.7 14.3 32 32 32z"
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
                  d="M64 384V190.6c0-1.7.8-3.2 2.1-4.2 2.1-1.6 5-1.4 6.9.5l54 54.1c9.4 9.4 24.6 9.4 33.9 0l124.8-124.7c2.7-2.7 6.5-4.3 10.3-4.3s7.6 1.5 10.3 4.3l25.4 25.4c2.7 2.7 4.3 6.5 4.3 10.3s-1.5 7.6-4.3 10.3L207 287c-9.4 9.4-9.4 24.6 0 33.9l54.1 54.1c1.8 1.8 2.1 4.8.5 6.9-1 1.3-2.5 2.1-4.2 2.1zm-48 8c0 22.1 17.9 40 40 40h201.4c16.8 0 32.5-7.9 42.6-21.3 15.9-21.2 13.8-50.9-4.9-69.6L257.9 304l107.8-107.7c11.7-11.8 18.3-27.7 18.3-44.3s-6.6-32.5-18.3-44.3l-25.4-25.3C328.5 70.6 312.6 64 296 64s-32.5 6.6-44.3 18.3L144 190.1 106.9 153c-18.7-18.7-48.4-20.8-69.6-5C23.9 158.1 16 173.9 16 190.6z"
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
                  d="M72 384c-4.4 0-8-3.6-8-8V174.6c0-3.7 3-6.6 6.6-6.6 1.8 0 3.4.7 4.7 1.9l61.4 61.4c6.2 6.2 16.4 6.2 22.6 0L272 118.6c4.2-4.2 10-6.6 16-6.6s11.8 2.4 16 6.6l25.4 25.4c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16L216.7 288.7c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l61.4 61.4c1.2 1.2 1.9 2.9 1.9 4.7 0 3.7-3 6.6-6.6 6.6zm-40-8c0 22.1 17.9 40 40 40h201.4c21.3 0 38.6-17.3 38.6-38.6 0-10.2-4.1-20.1-11.3-27.3L250.6 300 352 198.6c10.2-10.2 16-24.1 16-38.6s-5.8-28.4-16-38.6L326.6 96c-10.2-10.2-24.1-16-38.6-16s-28.4 5.8-38.6 16L148 197.4l-50.1-50.1c-7.2-7.2-17-11.3-27.3-11.3-21.3 0-38.6 17.3-38.6 38.6z"
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
                  d="M48 416c-8.8 0-16-7.2-16-16V164.3c0-11.2 9.1-20.3 20.3-20.3 5.4 0 10.5 2.1 14.3 5.9l75.7 75.7c3.1 3.1 8.2 3.1 11.3 0L290.3 89c5.7-5.7 13.5-9 21.7-9s15.9 3.2 21.7 9l25.3 25.4c5.7 5.7 9 13.5 9 21.7s-3.2 15.9-9 21.7L222.3 294.3c-1.5 1.5-2.3 3.5-2.3 5.7s.8 4.2 2.3 5.7l75.7 75.7c3.8 3.8 5.9 9 5.9 14.3 0 11.2-9.1 20.3-20.3 20.3zm-32-16c0 17.7 14.3 32 32 32h235.7c20 0 36.3-16.2 36.3-36.3 0-9.6-3.8-18.9-10.6-25.7l-70.1-70 131-131c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L345 77.7c-8.8-8.8-20.6-13.7-33-13.7s-24.2 4.9-33 13.7l-131 131-70.1-70.1c-6.8-6.8-16-10.6-25.7-10.6-20 0-36.3 16.2-36.3 36.3V400z"
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
                  d="m238.6 305.4 134.1-134.1c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3l-41.4-41.4C324.1 68.1 314.2 64 304 64s-20.1 4.1-27.3 11.3L142.6 209.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 432h240c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-240-240c-9.2-9.2-22.9-11.9-34.9-6.9S16 147 16 160v240c0 17.7 14.3 32 32 32"
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
