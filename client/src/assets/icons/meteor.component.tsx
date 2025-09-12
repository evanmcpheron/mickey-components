import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MeteorIcon: React.FC<
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
                  d="M493.7.9 299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309c0 112.1 90.9 203 203 203 72.4 0 139.4-38.6 175.7-101.3l102.1-176.4c6.5-11.1-2.2-25-15.1-24l-29.3 2.3 74.7-194.3c.6-1.5.9-3.2.9-4.8C512 6 506 0 498.5 0q-2.55 0-4.8.9M192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M474.8 0c-5.2 0-10.3 1.1-15 3.2L324 62.9l1.4-18.2c2.5-34.2-36.2-55.5-63.7-35.1l-179 132.9C30.6 181.2 0 242.7 0 307.5 0 419.8 91 512 203.6 512c65.7 0 127.4-31.8 165.7-85.3l126.3-176.9c19.7-27.6-1.8-65.7-35.6-63.1l-10.7.8 59.5-135.3c2.1-4.7 3.2-9.8 3.2-15C512 16.7 495.3 0 474.8 0m-168 122.9 147-64.7-64.6 146.7c-3.4 7.7-2.5 16.7 2.4 23.5s13 10.7 21.4 10.1l33.5-2.6-116.4 163C301 439.7 253.8 464 203.6 464 117.8 464 48 393.6 48 307.5c0-49.7 23.6-96.9 63.4-126.5L276.2 58.6l-3 40.6c-.6 8.4 3.2 16.5 10.1 21.4s15.8 5.8 23.5 2.4zM200 424a112 112 0 1 0 0-224 112 112 0 1 0 0 224m-24-160a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24 96a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M320 32c0-26.4-30.1-41.4-51.2-25.6L81.1 147.2C30 185.5 0 246.1 0 309.8 0 420.9 90 512 201.3 512c64.6 0 125.3-31 163.2-83.4l134.1-185.9c15.3-21.2.2-50.7-25.9-50.7h-26.1L509 50.3c2-4.5 3-9.5 3-14.4C512 16 496 0 476.2 0c-5 0-9.9 1-14.4 3L320 65.4zm154.6.3q.75-.3 1.5-.3c2.1 0 3.8 1.7 3.8 3.8 0 .5-.1 1.1-.3 1.5l-72.2 164.3c-2.2 4.9-1.7 10.7 1.2 15.2s8 7.3 13.4 7.3h50.6L338.5 409.8c-31.8 44.1-82.9 70.2-137.2 70.2C107.9 480 32 403.4 32 309.8c0-53.8 25.3-104.8 68.3-137L288 32v57.9c0 5.4 2.7 10.4 7.3 13.4s10.2 3.4 15.2 1.2zM296 312a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96-128a128 128 0 1 0 0 256 128 128 0 1 0 0-256m-16 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m56 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M320 23.7c0-19.7-22.4-31-38.2-19.3l4.7 6.4-4.7-6.4L81.1 152.2C30.1 189.8 0 249.8 0 313.1 0 422.4 88.6 512 197.9 512c64.1 0 124.2-31 161.4-83.3l141.3-198.8c11.3-15.9-.1-37.9-19.6-37.9h-35.1l63.4-144.2c1.8-4.1 2.7-8.5 2.7-12.9V32c0-17.7-14.3-32-32-32h-3c-4.4 0-8.8.9-12.9 2.7l3.2 7.3-3.2-7.3L320 66.1zm-28.7-6.4c5.3-3.9 12.7-.1 12.7 6.4v54.7c0 2.7 1.4 5.2 3.6 6.7s5.1 1.7 7.6.6l155.4-68.3c2-.9 4.2-1.4 6.4-1.4h3c8.8 0 16 7.2 16 16v3c0 2.2-.5 4.4-1.4 6.4l-68.3 155.4c-1.1 2.5-.9 5.3.6 7.6s4 3.6 6.7 3.6H481c6.5 0 10.3 7.3 6.5 12.6L346.3 419.4c-34.1 48-89.4 76.6-148.3 76.6-100.5 0-182-82.3-182-182.9 0-58.3 27.7-113.5 74.6-148L291.3 17.2zM64 320a128 128 0 1 0 256 0 128 128 0 1 0-256 0m16 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0m144 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48-80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M493.7.9 299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309c0 112.1 90.9 203 203 203 72.4 0 139.4-38.6 175.7-101.3l102.1-176.4c6.5-11.1-2.2-25-15.1-24l-29.3 2.3 74.7-194.3c.6-1.5.9-3.2.9-4.8C512 6 506 0 498.5 0q-2.55 0-4.8.9M192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 320a128 128 0 1 1 256 0 128 128 0 1 1-256 0m128-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
