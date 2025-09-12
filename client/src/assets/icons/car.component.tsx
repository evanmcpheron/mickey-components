import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarIcon: React.FC<
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
                  d="M135.2 117.4 109.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H165.4c-13.6 0-25.7 8.6-30.2 21.4m-95.6 79.4L74.8 96.3C88.3 57.8 124.6 32 165.4 32h181.2c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-48H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V256c0-26.7 16.4-49.6 39.6-59.2M128 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M127.7 106.8 103.4 176h305.2l-24.2-69.2c-5.6-16-20.8-26.8-37.8-26.8H165.4c-17 0-32.1 10.7-37.8 26.8zm-79.6 82 34.2-97.9C94.7 55.6 128 32 165.4 32h181.2c37.4 0 70.7 23.6 83.1 58.9l34.3 97.9c28.6 16.6 48 47.6 48 83.2v184c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H48v56c0 13.3-10.7 24-24 24S0 469.3 0 456V272c0-35.6 19.3-66.6 48.1-83.2M416 224H96c-26.5 0-48 21.5-48 48v80h416v-80c0-26.5-21.5-48-48-48m-304 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m256 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="m113.6 98.2-28.3 94.4c3.5-.4 7.1-.6 10.7-.6h320c3.6 0 7.2.2 10.7.6l-28.3-94.4c-6.1-20.3-24.8-34.2-46-34.2H159.6c-21.2 0-39.9 13.9-46 34.2M74.3 227.8C49.6 236.7 32 260.3 32 288v96h448v-96c0-27.7-17.6-51.3-42.3-60.2l-.5.1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6H96c-7.4 0-14.5 1.3-21.2 3.6l-.1.3-.5-.1zm-26-23.1.4-1.3L83 89c10.2-33.8 41.3-57 76.6-57h192.8c35.3 0 66.5 23.2 76.6 57l34.3 114.4.4 1.3c28.9 16.5 48.3 47.6 48.3 83.3v176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-35.7 19.4-66.8 48.3-83.3M104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48m280 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M106.4 88.6 76.3 194c6.4-1.3 12.9-2 19.7-2h320c6.7 0 13.3.7 19.7 2L405.6 88.6c-6.9-24-28.8-40.6-53.8-40.6H160.3c-25 0-47 16.6-53.8 40.6zM58 199.8 91 84.2C99.9 53.3 128.1 32 160.3 32h191.4c32.1 0 60.4 21.3 69.2 52.2l33 115.6c34.1 14.7 58 48.7 58 88.2v160c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32v-48H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V288c0-39.5 23.9-73.5 58-88.2M416 384h80v-96c0-44.2-35.8-80-80-80H96c-44.2 0-80 35.8-80 80v96h400m16 16v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48zm-416 0v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48zm96-112a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m352 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M165.4 96c-13.6 0-25.7 8.6-30.2 21.4L109.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4zM0 400v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48zm512 0h-96v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M135.2 117.4 109.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H165.4c-13.6 0-25.7 8.6-30.2 21.4m-95.6 79.4L74.8 96.3C88.3 57.8 124.6 32 165.4 32h181.2c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2v144H0V256c0-26.7 16.4-49.6 39.6-59.2M128 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
