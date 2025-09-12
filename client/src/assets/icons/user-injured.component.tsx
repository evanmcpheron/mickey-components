import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserInjuredIcon: React.FC<
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
                  d="M240 80h102.7c-7.9-19.5-20.4-36.5-36.2-49.9zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4zM224 256c70.7 0 128-57.3 128-128 0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16 0 70.7 57.3 128 128 128m-100 56.4c-9.7 3.1-19.1 7-28 11.7V512h147.7l-62.2-103.8zm33-7.2 47.3 78.8H272c44.2 0 80 35.8 80 80 0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4c-7.2 0-14.3.4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3M320 464c0-26.5-21.5-48-48-48h-48.5l57.1 95.2c22.4-4 39.4-23.6 39.4-47.2"
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
                  d="M224 208c-44.2 0-80-35.8-80-80h160c0 44.2-35.8 80-80 80M150.7 96C163 67.7 191.2 48 224 48c1.2 0 2.5 0 3.7.1L170.2 96zm113.9-37c14.5 8.5 26 21.5 32.8 37h-77.2zM224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256M49.3 464c4.7-33.3 21.9-62.5 46.7-82.7V464zm246.3 0h-34.3l-32-48H276c15.5 0 28 12.5 28 28 0 7.8-3.2 14.9-8.4 20m37 0c2.2-6.3 3.4-13 3.4-20 0-33.1-26.9-60-60-60h-68l-21.3-32h83c65.7 0 120.1 48.7 129 112zM178.3 304C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3z"
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
                  d="M320 128c0 53-43 96-96 96s-96-43-96-96c0-5.5.5-10.8 1.3-16h189.4c.9 5.2 1.3 10.5 1.3 16m-12.8-48h-69.6l39.8-31.8c12.2 8.2 22.4 19.1 29.8 31.8m-63.4-46-57.4 46h-45.6c16.6-28.7 47.6-48 83.2-48 6.8 0 13.4.7 19.8 2M352 128a128 128 0 1 0-256 0 128 128 0 1 0 256 0M32 480c.5-33.7 12.4-64.6 32-89v89zm64 0V361.3c12.9-8.8 27.3-15.6 42.7-19.9L226.9 480zm224-32c0 17.7-14.3 32-32 32h-23.2l-40.7-64H288c17.7 0 32 14.3 32 32M80 512h338.3c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512zm336-32h-72.6c5.4-9.4 8.6-20.3 8.6-32 0-35.3-28.7-64-64-64h-84.3l-30.5-47.9c1.7-.1 3.4-.1 5.1-.1h91.4c80 0 145 64.3 146.3 144"
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
                  d="M336 128c0-8.2-.9-16.3-2.6-24H114.6c-1.7 7.7-2.6 15.8-2.6 24 0 61.9 50.1 112 112 112s112-50.1 112-112m-7.4-40c-10.3-26.8-30.6-48.7-56.3-61l-61 61zM256 20.6c-10.2-3-20.9-4.6-32-4.6-47.8 0-88.5 29.9-104.6 72h69.3zM96 128a128 128 0 1 1 256 0 128 128 0 1 1-256 0M16 482.3c0 7.6 6.1 13.7 13.7 13.7H80V353.1c-38.9 29.6-64 76.5-64 129.1zM96 344v152h153.2L137.8 325.1c-14.9 3.8-29 9.7-41.9 17.4.1.5.1 1 .1 1.5m200 152c22.1 0 40-17.9 40-40s-17.9-40-40-40h-79.8l52.2 80zm0-96c30.9 0 56 25.1 56 56 0 15.7-6.4 29.8-16.8 40h83.1c7.6 0 13.7-6.1 13.7-13.7 0-89.6-72.7-162.3-162.3-162.3h-91.4c-8 0-15.9.6-23.6 1.7l51 78.3zm122.3 112H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7"
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
                  d="M96 128c0-11 1.4-21.8 4-32h248c2.6 10.2 4 21 4 32 0 70.7-57.3 128-128 128S96 198.7 96 128m176 384h-9.6l-57.6-96H272c26.5 0 48 21.5 48 48s-21.5 48-48 48m0-128h-86.4l-45.5-75.9c12.3-2.7 25.1-4.1 38.2-4.1h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H336c10-13.4 16-30 16-48 0-44.2-35.8-80-80-80M0 482.3c0-55 24.9-104.1 64-136.8V512H29.7C13.3 512 0 498.7 0 482.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M348 96c-6.7-25.9-21.3-48.7-41.1-65.5L222.6 96zM224 0c-59.6 0-109.8 40.8-124 96h70.5l107.9-83.9C261.9 4.3 243.4 0 224 0m38.4 512L140.1 308.1c-28.5 6.2-54.5 19.3-76.1 37.3V512z"
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
