import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LinkSimpleSlashIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L532.4 392c45.4-28.2 75.6-78.6 75.6-136 0-88.4-71.6-160-160-160h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96 43 96 96 0 43.3-28.6 79.8-67.9 91.8L399.7 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-97.9l-81.7-64H256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-11.3 0-22.3 1.2-32.9 3.4zM121 191.4l-50.3-39.7C46.6 179.7 32 216.1 32 256c0 88.4 71.6 160 160 160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-53 0-96-43-96-96 0-24.9 9.5-47.6 25-64.6"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L532.4 392c45.4-28.2 75.6-78.6 75.6-136 0-88.4-71.6-160-160-160h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c61.9 0 112 50.1 112 112 0 46.6-28.5 86.6-69.1 103.5L389.5 280H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-95.7L216 144h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72c-11.3 0-22.3 1.2-32.9 3.4zm69.6 176.3-37.7-29.7C46.6 179.7 32 216.1 32 256c0 88.4 71.6 160 160 160h72c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72c-61.9 0-112-50.1-112-112 0-28.6 10.7-54.8 28.4-74.6"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM608 256c0-88.4-71.6-160-160-160h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c70.7 0 128 57.3 128 128 0 35.5-14.4 67.6-37.7 90.8l25.3 19.9C591.1 338 608 299 608 256m-152 16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-53l40.5 32zm-259.6-32H184c-8.8 0-16 7.2-16 16s7.2 16 16 16h53l-40.5-32zm-94.7-74.8-25.2-19.9C48.9 174 32 213 32 256c0 88.4 71.6 160 160 160h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-70.7 0-128-57.3-128-128 0-35.5 14.4-67.6 37.7-90.8"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM608 256c0-88.4-71.6-160-160-160h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88c79.5 0 144 64.5 144 144 0 36.3-13.5 69.5-35.7 94.9l12.6 9.9C593.3 332.7 608 296.1 608 256m-136 8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-45.9l20.3 16zm-278.3-16H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h45.9l-20.3-16zm-110-86.9-12.6-9.9C46.7 179.3 32 215.9 32 256c0 88.4 71.6 160 160 160h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88c-79.5 0-144-64.5-144-144 0-36.3 13.5-69.5 35.7-94.9"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M121 191.4c-15.5 17.1-25 39.7-25 64.6 0 53 43 96 96 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-88.4 0-160-71.6-160-160 0-39.9 14.6-76.3 38.7-104.3zM399.7 288 318 224h98c17.7 0 32 14.3 32 32s-14.3 32-32 32zm132.7 104-56.3-44.1c39.3-12 67.9-48.6 67.9-91.8 0-53-43-96-96-96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c88.4 0 160 71.6 160 160 0 57.4-30.2 107.7-75.6 136zm-296-232-77.3-60.6c10.6-2.2 21.6-3.4 32.9-3.4h64c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
