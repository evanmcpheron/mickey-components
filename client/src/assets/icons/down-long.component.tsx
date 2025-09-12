import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownLongIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26S305.5 320 296 320h-72V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v288H24c-9.6 0-18.2 5.7-22 14.5"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176.4 505.5c-9.2 8.7-23.7 8.7-32.9 0L14.6 384.1C5.3 375.3 0 363.1 0 350.3 0 324.7 20.7 304 46.3 304H80V56c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v248h33.7c25.6 0 46.3 20.7 46.3 46.3 0 12.8-5.3 25-14.6 33.7l-129 121.4zm93-153.5H216c-13.3 0-24-10.7-24-24V56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 6.4-2.5 12.5-7 17s-10.6 7-17 7H50.5L160 455l109.5-103z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M88 352H38.7c-3.7 0-6.7 3-6.7 6.7 0 1.9.8 3.7 2.2 5L160 476.2l125.8-112.5c1.4-1.3 2.2-3.1 2.2-5 0-3.7-3-6.7-6.7-6.7H232c-17.7 0-32-14.3-32-32V48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v272c0 17.7-14.3 32-32 32m86 154.7c-3.8 3.4-8.8 5.3-14 5.3s-10.1-1.9-14-5.3L12.9 387.5C4.7 380.2 0 369.7 0 358.7 0 337.3 17.3 320 38.7 320H88V48c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v272h49.3c21.4 0 38.7 17.3 38.7 38.7 0 11-4.7 21.5-12.9 28.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M216 336h81.1c3.8 0 6.9 3.1 6.9 6.9 0 1.8-.7 3.5-1.9 4.7L161.9 495.2c-.5.5-1.2.8-1.9.8s-1.4-.3-1.9-.8L17.9 347.6c-1.2-1.3-1.9-3-1.9-4.7 0-3.8 3.1-6.9 6.9-6.9H104c8.8 0 16-7.2 16-16V40c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v280c0 8.8 7.2 16 16 16m-42.5 170.2 140.2-147.6c4-4.2 6.3-9.9 6.3-15.8 0-12.6-10.2-22.9-22.9-22.9l-65.1.1h-16V40c0-22.1-17.9-40-40-40h-32c-22.1 0-40 17.9-40 40v280H22.9C10.2 320 0 330.2 0 342.9c0 5.9 2.3 11.5 6.3 15.8l140.2 147.5c3.5 3.7 8.4 5.8 13.5 5.8s10-2.1 13.5-5.8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 320H96V32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v288"
                />
                <path
                  className="aps-icon-foreground"
                  d="M313.4 360.5c6.6-7 8.4-17.2 4.6-26S305.5 320 296 320H24c-9.6 0-18.2 5.7-22 14.5s-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5z"
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
