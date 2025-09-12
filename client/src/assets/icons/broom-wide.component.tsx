import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BroomWideIcon: React.FC<
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
                  d="M502.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128-15.8-15.8c-15.2-15.2-38.5-18.4-57.3-8l-32.5 18 156.7 156.5 18-32.5c10.4-18.7 7.1-42.1-8-57.3l-15.8-15.8 128-128c12.5-12.5 12.5-32.8 0-45.3zM187.5 151.8 16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l43.2 43.2c2.1 2.1 5.3 2.9 8.2 1.9l52.1-17.4c6.3-2.1 12.2 3.9 10.1 10.1l-17.4 52.1c-1 2.9-.2 6 1.9 8.2l107.3 107.2c6 6 14.1 9.3 22.6 9.3 11.6 0 22.3-6.3 27.9-16.4l95.1-171.1z"
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
                  d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L335 143l-12.9-12.9c-20.2-20.2-51.4-24.6-76.3-10.7L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l205.4 205.3c6 6 14.1 9.3 22.6 9.3 11.6 0 22.3-6.3 27.9-16.4l127.4-229.4c13.9-25 9.5-56.1-10.7-76.3L369 177zM323.6 291.6l-90 162.1-96.6-96.6 18-53.9c2.1-6.3-3.9-12.2-10.1-10.1l-54 17.9-32.5-32.5 162.1-90z"
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
                  d="M507.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-144 144-18.6-18.6c-20.2-20.2-51.4-24.6-76.3-10.7L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l205.4 205.3c6 6 14.1 9.3 22.6 9.3 11.6 0 22.3-6.3 27.9-16.4l127.4-229.4c13.9-25 9.5-56.1-10.7-76.3l-18.6-18.6zM299.5 152.8l59.7 59.7c10.1 10.1 12.3 25.7 5.3 38.2l-21.2 38.1-120.1-120.2 38.1-21.2c12.5-6.9 28.1-4.8 38.2 5.3zm-105.4 32 133.1 133.1-90 162.1-123.3-123.3 41.4-41.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-41.4 41.4-59.2-59.3 162.1-90z"
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
                  d="M509.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152-24.2-24.2c-20.2-20.2-51.4-24.6-76.3-10.7L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l205.4 205.3c6 6 14.1 9.3 22.6 9.3 11.6 0 22.3-6.3 27.9-16.4l127.4-229.4c13.9-25 9.5-56.1-10.7-76.3l-24.2-24.2zM310.8 141.4l59.7 59.7c15.2 15.2 18.4 38.5 8 57.3l-27.4 49.4-147-146.9 49.4-27.4c18.7-10.4 42.1-7.1 57.3 8zm-121.2 27.5L343 322.4l-91.9 165.4c-2.8 5.1-8.1 8.2-13.9 8.2-4.2 0-8.3-1.7-11.3-4.7L97 362.3l60.7-60.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L85.7 351l-65-65c-3-3-4.7-7-4.7-11.3 0-5.8 3.1-11.1 8.2-13.9z"
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
                  d="M502.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128 45.3 45.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M313.6 121.6c-15.2-15.2-38.5-18.4-57.3-8l-32.5 18 156.6 156.5 18-32.5c10.4-18.7 7.1-42.1-8-57.3l-76.8-76.8zm-126.1 30.2L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l43.2 43.2c2.1 2.1 5.3 2.9 8.2 1.9l52.1-17.4c6.3-2.1 12.2 3.9 10.1 10.1l-17.4 52.1c-1 2.9-.2 6 1.9 8.2l107.3 107.2c6 6 14.1 9.3 22.6 9.3 11.6 0 22.3-6.3 27.9-16.4l95.1-171.1z"
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
