import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const InboxFullIcon: React.FC<
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
                  d="M58.9 80.5C66 52 91.6 32 121 32h270c29.4 0 55 20 62.1 48.5l57 227.9c1.3 5.1 1.9 10.3 1.9 15.5V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-92.1c0-5.2.6-10.4 1.9-15.5zM391 96H121L73 288h51.2c12.1 0 23.2 6.8 28.6 17.7l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7h120.5c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7H439zm-215 48h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16m-32 80h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M48 416c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-80h-81.2l-20.9 41.9c-6.8 13.6-20.6 22.1-35.8 22.1H185.9c-15.2 0-29-8.6-35.8-22.1L129.2 336H48zM405.6 92.1C403.8 85 397.4 80 390 80H122c-7.3 0-13.7 5-15.5 12.1L57.5 288h76.6c15.2 0 29 8.6 35.8 22.1l20.9 41.9h130.4l20.9-41.9c6.8-13.6 20.6-22.1 35.8-22.1h76.6l-49-195.9zM0 416v-88.1c0-5.2.6-10.4 1.9-15.5l58-231.9C67 52 92.6 32 122 32h268c29.4 0 55 20 62.1 48.5l58 231.9c1.3 5.1 1.9 10.3 1.9 15.5V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m184-288h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24m-32 80h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M32 327.9V416c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-88.1c0-2.6-.3-5.2-1-7.8v-.1H377.9l-23.2 46.3c-5.4 10.8-16.5 17.7-28.6 17.7H185.9c-12.1 0-23.2-6.8-28.6-17.7L134.1 320H33v.1c-.6 2.5-1 5.1-1 7.8M421.1 88.2C417.5 74 404.7 64 390 64H122c-14.7 0-27.5 10-31 24.2L41 288h93.1c12.1 0 23.2 6.8 28.6 17.7l23.2 46.3h140.2l23.2-46.3c5.4-10.8 16.5-17.7 28.6-17.7H471zM0 416v-88.1c0-5.2.6-10.4 1.9-15.5l58-231.9C67 52 92.6 32 122 32h268c29.4 0 55 20 62.1 48.5l58 231.9c1.3 5.1 1.9 10.3 1.9 15.5V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m176-272h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16m-32 80h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M16 327.9V416c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-88.1c0-2.6-.2-5.3-.6-7.9H393.9c-3 0-5.8 1.7-7.2 4.4l-23.2 46.3c-4.1 8.1-12.4 13.3-21.5 13.3H169.9c-9.1 0-17.4-5.1-21.5-13.3l-23.2-46.3c-1.4-2.7-4.1-4.4-7.2-4.4H16.7c-.4 2.6-.7 5.2-.7 7.9M436.6 84.4C431.3 63 412.1 48 390 48H122c-22 0-41.2 15-46.6 36.4L20.5 304h97.6c9.1 0 17.4 5.1 21.5 13.3l23.2 46.3c1.4 2.7 4.1 4.4 7.2 4.4h172.1c3 0 5.8-1.7 7.2-4.4l23.2-46.3c4.1-8.1 12.4-13.3 21.5-13.3h97.6zM0 416v-88.1c0-5.2.6-10.4 1.9-15.5l58-231.9C67 52 92.6 32 122 32h268c29.4 0 55 20 62.1 48.5l58 231.9c1.3 5.1 1.9 10.3 1.9 15.5V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m152-304h216c4.4 0 8 3.6 8 8s-3.6 8-8 8H152c-4.4 0-8-3.6-8-8s3.6-8 8-8m-24 64h256c4.4 0 8 3.6 8 8s-3.6 8-8 8H128c-4.4 0-8-3.6-8-8s3.6-8 8-8m-16 64h280c4.4 0 8 3.6 8 8s-3.6 8-8 8H112c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M121 96h270l48 192h-51.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73zm55 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-32 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
