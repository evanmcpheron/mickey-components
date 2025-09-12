import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserTieIcon: React.FC<
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
                  d="M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m94.5 200.2 18.6 31-33.3 123.9-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-75.5-51.9-138.9-121.9-156.4-8.1-2-15.9 3.3-17.9 11.3l-36 146.9-33.3-123.9 18.6-31c6.4-10.7-1.3-24.2-13.7-24.2h-39.5c-12.4 0-20.1 13.6-13.7 24.2z"
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
                  d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m128-80a128 128 0 1 1-256 0 128 128 0 1 1 256 0M209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2h39.5c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 15.9 59.2 43.8-87.6c3-6 9.4-9.5 15.9-8.4 76 13.2 133.6 79.3 133.6 158.9 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-79.6 57.6-145.7 133.5-158.9 6.6-1.1 12.9 2.4 15.9 8.4l43.8 87.6zm-90.6 17.1c-36.2 14.8-63.1 47.9-69.2 87.7h113zM285.7 464h113c-6.1-39.8-33-72.9-69.2-87.7z"
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
                  d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m96 176c-8.8 0-16 7.2-16 16s7.2 16 16 16h9.8l-21.7 65-32.1-69.5c-2.9-6.3-9.5-10-16.3-8.8C56.8 336.5 0 402.3 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-79-56.8-144.7-131.8-158.6-6.8-1.3-13.4 2.5-16.3 8.8l-32 69.5-21.7-65h9.8c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64m17.5 160.5-9.7-21.1 24.2-72.8 24.3 72.8-9.7 21.1c-5.7 12.4-23.3 12.4-29.1 0m-29.1 13.4c.3.7.7 1.4 1 2.1H32c.6-58.1 39.5-107.1 92.7-122.8zM416 480H266.6c.3-.7.7-1.4 1-2.1l55.7-120.7c53.2 15.7 92.1 64.6 92.7 122.8"
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
                  d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224m128-112a128 128 0 1 1-256 0 128 128 0 1 1 256 0M176.9 308.3c1.4-2.7 4.1-4.3 7.1-4.3h80c3 0 5.7 1.7 7.1 4.3s1.1 5.9-.6 8.3l-37.2 52.1 23.2 46.3 47.1-94.2c81.2 8.4 144.4 77 144.4 160.4 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-83.4 63.3-152 144.4-160.4l47.1 94.2 23.2-46.3-37.2-52.1c-1.7-2.4-2-5.6-.6-8.3zm22.6 11.7 24.5 34.2 24.5-34.2zm10.1 167.2-74.3-148.9C67.5 350.6 16 409.9 16 481.3c0 8.1 6.6 14.7 14.7 14.7h183.4l-4.4-8.8zm-9.2-54.2 14.6 29.2 9 17.8 8.9-17.9 14.6-29.2-23.5-47-23.5 47.1zM432 481.3c0-71.4-51.5-130.7-119.3-143l-74.4 148.9-4.4 8.8h183.4c8.1 0 14.7-6.6 14.7-14.7"
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
                  d="M352 128a128 128 0 1 1-256 0 128 128 0 1 1 256 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="m190.5 328.2 18.6 31-33.3 123.9-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7h131.8c2.1 0 4-.4 5.8-1.1l-.3 1.1h112l-.3-1.1c1.8.7 3.8 1.1 5.8 1.1h131.8c17 0 30.7-13.8 30.7-30.7 0-75.5-51.9-138.9-121.9-156.4-8.1-2-15.9 3.3-17.9 11.3l-36 146.9-33.3-123.9 18.6-31c6.4-10.7-1.3-24.2-13.7-24.2h-39.5c-12.4 0-20.1 13.6-13.7 24.2z"
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
