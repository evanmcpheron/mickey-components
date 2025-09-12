import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const InboxIcon: React.FC<
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
                  d="M121 32c-29.4 0-55 20-62.1 48.5l-57 227.9C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32zm0 64h270l48 192h-51.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73z"
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
                  d="M48 336h81.2l20.9 41.9c6.8 13.6 20.6 22.1 35.8 22.1h140.2c15.1 0 29-8.6 35.8-22.1l20.9-41.9H464v80c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm406.5-48h-76.6c-15.1 0-29 8.6-35.8 22.1L321.2 352H190.8l-20.9-41.9c-6.8-13.6-20.6-22.1-35.8-22.1H57.5l49-195.9C108.2 85 114.6 80 122 80h268c7.3 0 13.7 5 15.5 12.1zM0 327.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-88.1c0-5.2-.6-10.4-1.9-15.5l-58-231.9C445 52 419.4 32 390 32H122c-29.4 0-55 20-62.1 48.5l-58 231.9c-1.3 5-1.9 10.2-1.9 15.5"
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
                  d="M32 416v-88.1c0-2.6.3-5.2 1-7.8v-.1h101.1l23.2 46.3c5.4 10.8 16.5 17.7 28.6 17.7h140.2c12.1 0 23.2-6.8 28.6-17.7l23.2-46.3H479v.1c.6 2.5 1 5.1 1 7.8V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32m439-128h-93.1c-12.1 0-23.2 6.8-28.6 17.7L326.1 352H185.9l-23.2-46.3c-5.4-10.8-16.5-17.7-28.6-17.7H41L90.9 88.2C94.5 74 107.3 64 122 64h268c14.7 0 27.5 10 31 24.2zM0 327.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-88.1c0-5.2-.6-10.4-1.9-15.5l-58-231.9C445 52 419.4 32 390 32H122c-29.4 0-55 20-62.1 48.5l-58 231.9c-1.3 5-1.9 10.2-1.9 15.5"
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
                  d="M16 416v-88.1c0-2.6.2-5.3.7-7.9h101.4c3 0 5.8 1.7 7.2 4.4l23.2 46.3c4.1 8.1 12.4 13.3 21.5 13.3h172.1c9.1 0 17.4-5.1 21.5-13.3l23.2-46.3c1.4-2.7 4.1-4.4 7.2-4.4h101.4c.4 2.6.6 5.2.6 7.9V416c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m475.5-112h-97.6c-9.1 0-17.4 5.1-21.5 13.3l-23.2 46.3c-1.4 2.7-4.1 4.4-7.2 4.4H169.9c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3H20.5L75.4 84.4C80.7 63 99.9 48 122 48h268c22 0 41.2 15 46.6 36.4zM0 327.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-88.1c0-5.2-.6-10.4-1.9-15.5l-58-231.9C445 52 419.4 32 390 32H122c-29.4 0-55 20-62.1 48.5l-58 231.9c-1.3 5-1.9 10.2-1.9 15.5"
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
                  d="M391 96H121L73 288h51.2c12.1 0 23.2 6.8 28.6 17.7l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7h120.5c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7H439z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M121 32c-29.4 0-55 20-62.1 48.5l-57 227.9C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32zm0 64h270l48 192h-51.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73z"
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
