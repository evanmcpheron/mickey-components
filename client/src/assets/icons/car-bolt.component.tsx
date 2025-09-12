import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarBoltIcon: React.FC<
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
                  d="M74.8 96.3 39.6 196.8C16.4 206.4 0 229.3 0 256v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h320v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32H165.4c-40.8 0-77.1 25.8-90.6 64.3M96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m288 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-65.7-168.8L281.9 192H336c6.9 0 13 4.4 15.2 10.9s-.1 13.7-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5s-7.4-12.8-4.1-19.4l36.5-72.9H176c-6.9 0-13-4.4-15.2-10.9s.1-13.7 5.6-17.9l128-96c5.9-4.5 14.2-4.2 19.9.5s7.4 12.8 4.1 19.4z"
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
                  d="M127.7 106.8 103.4 176H128v48H96c-26.5 0-48 21.5-48 48v80h416v-80c0-26.5-21.5-48-48-48h-32v-48h24.6l-24.2-69.2c-5.6-16-20.8-26.8-37.8-26.8H165.4c-17 0-32.1 10.7-37.8 26.8zm-79.6 82 34.2-97.9C94.7 55.6 128 32 165.4 32h181.2c37.4 0 70.7 23.6 83.1 58.9l34.3 97.9c28.6 16.6 48 47.6 48 83.2v184c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H48v56c0 13.3-10.7 24-24 24S0 469.3 0 456V272c0-35.6 19.3-66.6 48.1-83.2M112 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m256 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-52.8-171.4c5.3 5.2 6.3 13.3 2.5 19.6L284.3 192H336c7.1 0 13.4 4.7 15.4 11.6s-.8 14.2-6.9 18l-128 80c-6.3 3.9-14.4 3-19.7-2.2s-6.3-13.3-2.5-19.6l33.4-55.8H176c-7.1 0-13.4-4.7-15.4-11.6s.8-14.2 6.9-18l128-80c6.3-3.9 14.4-3 19.7 2.2"
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
                  d="m113.6 98.2-28.3 94.4c3.5-.4 7.1-.6 10.7-.6h32v32H96c-7.4 0-14.5 1.3-21.2 3.6l-.1.3-.5-.1C49.6 236.7 32 260.3 32 288v96h448v-96c0-27.7-17.6-51.3-42.3-60.2l-.5.1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6H384v-32h32c3.6 0 7.2.2 10.7.6l-28.3-94.4c-6.1-20.3-24.8-34.2-46-34.2H159.6c-21.2 0-39.9 13.9-46 34.2M48.3 204.7l.4-1.3L83 89c10.2-33.8 41.3-57 76.6-57h192.8c35.3 0 66.5 23.2 76.6 57l34.3 114.4.4 1.3c28.9 16.5 48.3 47.6 48.3 83.3v176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-35.7 19.4-66.8 48.3-83.3M104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48m280 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-84.7-172.7L230.6 192H320c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l68.7-68.7H192c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
                  d="M106.4 88.6 76.3 194c6.4-1.3 12.9-2 19.7-2h32v16H96c-44.2 0-80 35.8-80 80v96h480v-96c0-44.2-35.8-80-80-80h-32v-16h32c6.7 0 13.3.7 19.7 2L405.6 88.6c-6.9-24-28.8-40.6-53.8-40.6H160.3c-25 0-47 16.6-53.8 40.6zM58 199.8 91 84.2C99.9 53.3 128.1 32 160.3 32h191.4c32.1 0 60.4 21.3 69.2 52.2l33 115.6c34.1 14.7 58 48.7 58 88.2v160c0 17.7-14.3 32-32 32H464c-17.7 0-32-14.3-32-32v-48H80v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V288c0-39.5 23.9-73.5 58-88.2M448 400v48c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-48zm-432 0v48c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-48zm96-112a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m352 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64M315.4 120l-32 55.9H329c16 0 22.1 20.9 8.6 29.5l-125.5 79.9c-14.1 9-30.8-6.9-22.5-21.4l32-55.9H176c-16 0-22.1-20.9-8.6-29.5L293 98.6c14.1-9 30.8 6.9 22.5 21.4zM176 191.9h59.4c2.9 0 5.5 1.5 6.9 4s1.4 5.5 0 8l-38.8 67.9L329 191.9h-59.3c-2.9 0-5.5-1.5-6.9-4s-1.4-5.5 0-8l38.8-67.9z"
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
                  d="M96 400H0v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32zm416 0h-96v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M74.8 96.3 39.6 196.8C16.4 206.4 0 229.3 0 256v144h512V256c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32H165.4c-40.8 0-77.1 25.8-90.6 64.3M96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m288 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-65.7-168.8L281.9 192H336c6.9 0 13 4.4 15.2 10.9s-.1 13.7-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5s-7.4-12.8-4.1-19.4l36.5-72.9H176c-6.9 0-13-4.4-15.2-10.9s.1-13.7 5.6-17.9l128-96c5.9-4.5 14.2-4.2 19.9.5s7.4 12.8 4.1 19.4z"
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
