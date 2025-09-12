import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonArrowDownToLineIcon: React.FC<
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
                  d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-8 352v-96h16v96zm-64 0H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32H264V256.9l28.6 47.5c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6h-29.7c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l28.7-47.5zM464 64v242.7l-25.4-25.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L528 306.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32"
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
                  d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-13.7 80h27.5c.8 0 1.5 0 2.3.1V304H176V176.1c.7 0 1.5-.1 2.3-.1M176 464V352h32v112zm-48 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24H256V223.6l43.1 76.2c6.5 11.5 21.2 15.6 32.7 9.1s15.6-21.2 9.1-32.7l-58.6-103.5c-15.6-27.6-44.9-44.7-76.6-44.7h-27.4c-31.7 0-61 17.1-76.6 44.7L43.1 276.2c-6.5 11.5-2.5 26.2 9.1 32.7s26.2 2.5 32.7-9.1l43.1-76.2zM472 56v281.7l-47.9-43.5c-9.8-8.9-25-8.2-33.9 1.6s-8.2 25 1.6 33.9l88 80c9.2 8.3 23.1 8.3 32.3 0l88-80c9.8-8.9 10.5-24.1 1.6-33.9s-24.1-10.5-33.9-1.6L520 337.7V56c0-13.3-10.7-24-24-24s-24 10.7-24 24"
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
                  d="M168 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0m-68.7 104h25.4c6.8 0 13.3 1.4 19.3 4v156h-64V164c6-2.6 12.5-4 19.3-4M160 480V352h64v128zm-32 0H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16H256V202.2l49.9 93.4c4.2 7.8 13.9 10.7 21.7 6.6s10.7-13.9 6.6-21.7l-58.9-110.2c-13.9-26-41-42.3-70.6-42.3h-25.4c-29.5 0-56.7 16.3-70.6 42.3L49.9 280.5c-4.2 7.8-1.2 17.5 6.6 21.7s17.5 1.2 21.7-6.6l49.8-93.5zM480 48v313.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L512 361.4V48c0-8.8-7.2-16-16-16s-16 7.2-16 16"
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
                  d="M232 56a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-96 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-13.3 119.7L55.2 315.5c-1.9 4-6.7 5.6-10.7 3.7s-5.6-6.7-3.7-10.7l67.5-139.8c12-24.9 37.2-40.7 64.8-40.7h37.8c27.6 0 52.8 15.8 64.8 40.7l67.5 139.8c1.9 4 .3 8.8-3.7 10.7s-8.8.3-10.7-3.7l-67.5-139.8c-9.3-19.4-28.9-31.7-50.4-31.7h-37.8c-21.5 0-41.1 12.3-50.4 31.7M128 240c4.4 0 8 3.6 8 8v232c0 8.8 7.2 16 16 16s16-7.2 16-16V360c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 8.8 7.2 16 16 16s16-7.2 16-16V248c0-4.4 3.6-8 8-8s8 3.6 8 8v232c0 5.8-1.6 11.3-4.3 16H632c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h116.3c-2.7-4.7-4.3-10.2-4.3-16V248c0-4.4 3.6-8 8-8m51.7 256h24.6c-2.7-4.7-4.3-10.2-4.3-16V360c0-4.4-3.6-8-8-8s-8 3.6-8 8v120c0 5.8-1.6 11.3-4.3 16M488 40c0-4.4 3.6-8 8-8s8 3.6 8 8v347.5l82.1-89c3-3.2 8.1-3.4 11.3-.5s3.4 8.1.5 11.3l-96 104c-1.5 1.6-3.6 2.6-5.9 2.6s-4.4-.9-5.9-2.6l-96-104c-3-3.2-2.8-8.3.5-11.3s8.3-2.8 11.3.5l82.1 89z"
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
                  d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-8 352v-96h16v96h64V256.9l28.6 47.5c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6h-29.7c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l28.7-47.5V448z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 32c-17.7 0-32 14.3-32 32v242.7l-25.4-25.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L528 306.7V64c0-17.7-14.3-32-32-32M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
