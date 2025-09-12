import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SnoozeIcon: React.FC<
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
                  d="M192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h32l-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5S179.9 192 192 192h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32l57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S300.1 0 288 0zm128 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32l-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5S307.9 416 320 416h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32l57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S428.1 224 416 224zM32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32h91.7L7.4 459.5C-.5 469-2.3 482.3 3 493.6S19.6 512 32 512h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-91.7l116.3-139.5c7.9-9.5 9.7-22.8 4.4-34.1S204.4 256 192 256z"
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
                  d="M184 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h59.1l-77.2 88.2c-6.2 7.1-7.7 17.1-3.8 25.7S174.6 176 184 176h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.1l77.2-88.2c6.2-7.1 7.7-17.1 3.8-25.7S305.4 0 296 0zm128 224c-13.3 0-24 10.7-24 24s10.7 24 24 24h62.9l-81.8 105.3c-5.6 7.2-6.6 17-2.6 25.3s12.4 13.5 21.6 13.5H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-62.9L443 262.8c5.6-7.2 6.6-17 2.6-25.3S433.2 224 424 224zm-288 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h128.6L4.6 473.8c-5.3 7.3-6.1 17-2.1 25S15 512 24 512h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H71.4l148-201.8c5.3-7.3 6.1-17 2.1-25S209 224 200 224z"
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
                  d="M176 32c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4L214.6 128H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4L265.4 32zM0 240c0-8.8 7.2-16 16-16h192c6.1 0 11.6 3.4 14.3 8.8s2.1 11.9-1.5 16.8L48 480h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-6.1 0-11.6-3.4-14.3-8.8s-2.1-11.9 1.5-16.8L176 256H16c-8.8 0-16-7.2-16-16m304-16h128c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9L337.3 384H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-6.2 0-11.8-3.5-14.4-9.1s-1.9-12.1 1.9-16.9l107.2-134H304c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M160 8c0-4.4 3.6-8 8-8h144c3.3 0 6.3 2.1 7.5 5.2s.3 6.6-2.2 8.8L189 128h123c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-3.3 0-6.3-2.1-7.5-5.2s-.3-6.6 2.2-8.8L291 16H168c-4.4 0-8-3.6-8-8M0 264c0-4.4 3.6-8 8-8h208c3.1 0 6 1.8 7.3 4.7s.8 6.2-1.2 8.6L25.5 496H216c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-3.1 0-6-1.8-7.3-4.7s-.8-6.2 1.2-8.6L198.5 272H8c-4.4 0-8-3.6-8-8m296-40h144c3.2 0 6 1.9 7.3 4.7s.8 6.3-1.4 8.6L314 384h126c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-3.2 0-6-1.9-7.3-4.7s-.8-6.3 1.4-8.6L422 240H296c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M160 32c0-17.7 14.3-32 32-32h96c12.1 0 23.2 6.8 28.6 17.7s4.3 23.8-3 33.5L256 128h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5L224 64h-32c-17.7 0-32-14.3-32-32m128 224c0-17.7 14.3-32 32-32h96c12.1 0 23.2 6.8 28.6 17.7s4.3 23.8-3 33.5L384 352h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5L352 288h-32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 288c0-17.7 14.3-32 32-32h160c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 448H192c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L123.7 320H32c-17.7 0-32-14.3-32-32"
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
