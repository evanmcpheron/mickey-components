import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ThumbtackIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32m128 352h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m134.6 51.7-10.8 140.9c-1.1 14.6-8.8 27.8-20.9 36-23.9 16.2-41.8 40.8-49.1 70.3l-1.3 5.1H168v-88c0-13.3 10.7-24 24-24s24 10.7 24 24v88h115.5l-1.3-5.1c-7.4-29.5-25.2-54.1-49.1-70.2-12.1-8.2-19.8-21.5-20.9-36l-10.8-141c-.1-1.2-.1-2.5-.1-3.7H134.8c0 1.2 0 2.5-.1 3.7zM168 352H32c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l6.2-25c10.3-41.3 35.4-75.7 68.7-98.3L83.1 96l3.7-48H56c-4.4 0-8.6-1.2-12.2-3.3C36.8 40.5 32 32.8 32 24 32 10.7 42.7 0 56 0h272c13.3 0 24 10.7 24 24 0 8.8-4.8 16.5-11.8 20.7-3.6 2.1-7.7 3.3-12.2 3.3h-30.8l3.7 48 7.1 92.9c33.3 22.6 58.4 57.1 68.7 98.3l6.2 25c2.4 9.6.2 19.7-5.8 27.5S361.7 352 351.9 352H216v136c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m119.9 34.5-12.1 156.9c-.7 9.7-5.9 18.6-13.9 24-27 18.3-47.3 46.2-55.6 79.6L32 320h144v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96h144l-6.2-25c-8.3-33.4-28.6-61.3-55.6-79.6-8.1-5.5-13.2-14.3-13.9-24L264.1 34.5c-.1-.8-.1-1.6-.1-2.5H120c0 .8 0 1.6-.1 2.5M176 352H32c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l6.2-25c10.3-41.3 35.4-75.7 68.7-98.3L85.5 64 88 32H64c-2.9 0-5.6-.8-7.9-2.1-4.9-2.8-8.1-8-8.1-13.9 0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16 0 5.9-3.2 11.1-8.1 13.9-2.3 1.3-5 2.1-7.9 2.1h-24l2.5 32 9.6 124.9c33.3 22.6 58.4 57.1 68.7 98.3l6.2 25c2.4 9.6.2 19.7-5.8 27.5S361.8 352 352 352H208v144c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M110.3 17.6 92.4 197c-.5 4.8-3.1 9.1-7.2 11.8-30.5 20-53.7 50.8-63.6 88l-5.1 19c-1.3 4.8-.3 9.9 2.8 13.9l-12.6 9.7 12.6-9.7c3 3.9 7.7 6.3 12.7 6.3h152V232c0-4.4 3.6-8 8-8s8 3.6 8 8v104h152c5 0 9.7-2.3 12.7-6.3s4.1-9.1 2.8-13.9l-5.1-19c-9.9-37.2-33.1-68-63.6-88-4-2.6-6.7-7-7.2-11.8L273.7 17.6c-.1-.5-.1-1.1-.1-1.6H110.4c0 .5 0 1.1-.1 1.6M184 352H32c-9.9 0-19.3-4.6-25.4-12.5s-8.1-18.1-5.5-27.7l5.1-19c11-41.1 36.6-75.2 70.3-97.3L92.8 32l1.6-16H48c-4.4 0-8-3.6-8-8s3.6-8 8-8h288c4.4 0 8 3.6 8 8s-3.6 8-8 8h-46.4l1.6 16 16.3 163.4c33.7 22.1 59.3 56.2 70.3 97.3l5.1 19c2.6 9.6.5 19.9-5.5 27.7S362 351.9 352 351.9H200V504c0 4.4-3.6 8-8 8s-8-3.6-8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H224v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 224c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32"
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
