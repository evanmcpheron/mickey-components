import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SpaceStationMoonIcon: React.FC<
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
                  d="M512 256c0 7.8-.3 15.5-1 23.1-72.2 25.6-159.8 40.9-255 40.9S73.2 304.7 1 279.1c-.7-7.6-1-15.3-1-23.1C0 114.6 114.6 0 256 0s256 114.6 256 256M256 512C134.9 512 33.4 427.9 6.8 314.8 79.4 338.4 164.7 352 256 352s176.6-13.6 249.2-37.2C478.6 427.9 377.1 512 256 512m-96-352a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M256 48c-16.5 0-32.5 1.9-47.8 5.5C245.4 66.8 272 102.3 272 144c0 53-43 96-96 96-52.7 0-95.4-42.4-96-94.9-20.3 32.1-32 70.1-32 110.9 0 12.8 1.1 25.2 3.3 37.4.5.2 1 .3 1.5.5C87.7 306.5 147.6 328 256 328s168.3-21.5 203.2-34.1c.5-.2 1-.4 1.5-.5 2.2-12.1 3.3-24.6 3.3-37.4 0-114.9-93.1-208-208-208m185.3 302.7C402.1 362.7 343 376 256 376s-146.1-13.3-185.3-25.3C105.2 417.9 175.2 464 256 464s150.8-46.1 185.3-113.3M512 256a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-336-64a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 14.8-1.4 29.3-4.2 43.3-2.1.7-4.2 1.5-6.5 2.3-36.3 13.1-99.4 35.8-213.3 35.8S79 314.7 42.7 301.6c-2.3-.8-4.4-1.6-6.5-2.3-2.7-14-4.2-28.5-4.2-43.3m224 113.4c104.8 0 169.6-18.7 208.8-32.3C432.3 420.8 351.1 480 256 480S79.7 420.8 47.2 337.2c39.2 13.6 104 32.3 208.8 32.3zM256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512M136 160a56 56 0 1 1 112 0 56 56 0 1 1-112 0m144 0a88 88 0 1 0-176 0 88 88 0 1 0 176 0m-88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240c0 12.4-.9 24.5-2.7 36.4C419.6 320.6 339.6 336 256 336S92.4 320.6 18.7 292.4c-1.8-11.9-2.7-24-2.7-36.4m6.3 54.8C95.2 337.4 173.9 352 256 352s160.8-14.6 233.7-41.2C464.9 416.9 369.7 496 256 496S47.1 416.9 22.3 310.8M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512M128 160a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-64 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M512 256c0 7.8-.3 15.5-1 23.1-72.2 25.6-159.8 40.9-255 40.9S73.2 304.7 1 279.1c-.7-7.6-1-15.3-1-23.1C0 114.6 114.6 0 256 0s256 114.6 256 256M256 512C134.9 512 33.4 427.9 6.8 314.8 79.4 338.4 164.7 352 256 352s176.6-13.6 249.2-37.2C478.6 427.9 377.1 512 256 512m-64-272a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0M6.8 314.8c-2.7-11.6-4.7-23.5-5.8-35.7C73.2 304.7 160.8 320 256 320s182.8-15.3 255-40.9c-1.1 12.2-3 24.1-5.8 35.8C432.6 338.4 347.3 352 256 352S79.4 338.4 6.8 314.8"
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
