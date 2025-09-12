import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BowlScoopIcon: React.FC<
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
                  d="M32 224h384c0-106-86-192-192-192S32 118 32 224m-16 32c-4.6 0-9 2-12 5.4s-4.5 8-3.9 12.6l2 15.9c9 72 70.3 126.1 142.9 126.1h40.4l-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h192c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 416H303c72.6 0 133.9-54.1 142.9-126.1l2-15.9c.6-4.6-.8-9.1-3.9-12.6s-7.4-5.4-12-5.4z"
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
                  d="M32 224h384c0-106-86-192-192-192S32 118 32 224m141.8 144H145c-41.4 0-77.2-26.3-90.5-64h339c-13.3 37.7-49.1 64-90.5 64H173.8m36.9 78.7 13.3-15.9 13.3 15.9 14.4 17.3h-55.4zm92.3 3.9L274.2 416H303q15.9 0 30.9-3.3c58.5-12.8 104.3-61.2 112-122.8l2-15.9c.6-4.6-.8-9.1-3.9-12.6s-7.4-5.4-12-5.4H16c-4.6 0-9 2-12 5.4s-4.5 8-3.9 12.6l2 15.9c7.7 61.6 53.5 110 112 122.8q15 3.3 30.9 3.3h28.8L145 450.6l-10.9 13.1-.3.3-.4.5-5.4 6.5-12.3 14.7c-4 4.8-4.8 11.4-2.2 17s8.3 9.2 14.5 9.2h192c6.2 0 11.9-3.6 14.5-9.2s1.8-12.3-2.2-17L320 471l-5.5-6.5-.4-.5-.3-.3z"
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
                  d="M416 224h-32c0-88.4-71.6-160-160-160S64 135.6 64 224H32c0-106 86-192 192-192s192 86 192 192m29.9 65.9c-8.5 67.9-63.4 119.9-130.5 125.6-4.1.3-8.2.5-12.4.5h-28.8l26.7 32 31.5 37.8c4 4.8 4.8 11.4 2.2 17s-8.3 9.2-14.5 9.2H128c-6.2 0-11.9-3.6-14.5-9.2s-1.8-12.3 2.2-17l31.5-37.8 26.7-32H145c-4.2 0-8.3-.2-12.4-.5-67.1-5.7-122-57.7-130.5-125.6L.1 274c-.6-4.6.8-9.1 3.9-12.6s7.4-5.4 12-5.4h416c4.6 0 9 2 12 5.4s4.5 8 3.9 12.6zM34.1 288c7.9 55 55.1 96 110.9 96h158c55.8 0 102.9-41 110.9-96zm164.3 148.5L162.2 480h123.6l-36.3-43.5-25.5-30.7z"
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
                  d="M416 224c0-106-86-192-192-192S32 118 32 224h16c0-97.2 78.8-176 176-176s176 78.8 176 176zM17.9 280.7c-.5-4.6 3.1-8.7 7.7-8.7h396.8c4.6 0 8.3 4 7.7 8.7-7.5 67.9-65 119.3-133.3 119.3H264c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7l76.7 76.7c.6.6 1 1.5 1 2.3 0 1.8-1.5 3.3-3.3 3.3H115.3c-1.8 0-3.3-1.5-3.3-3.3 0-.9.3-1.7 1-2.3l76.7-76.7c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9h-32.8c-68.3 0-125.8-51.4-133.3-119.3m7.7-24.7C11.5 256 .4 268.3 2 282.4 10.4 358.5 74.7 416 151.2 416h13.4l-63 63c-3.6 3.6-5.7 8.5-5.7 13.7 0 10.7 8.6 19.3 19.3 19.3h217.5c10.7 0 19.3-8.6 19.3-19.3 0-5.1-2-10-5.7-13.7l-63-63h13.4c76.5 0 140.8-57.5 149.2-133.6 1.6-14.1-9.5-26.4-23.7-26.4z"
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
                  d="M413.3 256c1.7-10.4 2.7-21.1 2.7-32 0-106-86-192-192-192S32 118 32 224c0 10.9.9 21.6 2.7 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M4 261.4c3-3.4 7.4-5.4 12-5.4h416c4.6 0 9 2 12 5.4s4.5 8 3.9 12.6l-2 15.9c-9 72-70.3 126.1-142.9 126.1h-40.4l68.7 68.7c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H128c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l68.7-68.7H145C72.4 416 11.1 361.9 2.1 289.9L.1 274c-.6-4.6.8-9.1 3.9-12.6"
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
