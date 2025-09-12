import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TugrikSignIcon: React.FC<
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h128v103L56.2 225c-17.1 4.3-27.6 21.7-23.3 38.8s21.7 27.6 38.8 23.3L160 265v30L56.2 321c-17.1 4.3-27.6 21.7-23.3 38.8s21.7 27.6 38.8 23.3L160 361v87c0 17.7 14.3 32 32 32s32-14.3 32-32V345l103.8-26c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3L224 279v-30l103.8-26c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3L224 183V96h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H32"
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
                  d="M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h144v125.3L58.2 232.7c-12.9 3.2-20.7 16.2-17.5 29.1s16.2 20.7 29.1 17.5l98.2-24.6v46.5L58.2 328.7c-12.9 3.2-20.7 16.2-17.5 29.1s16.2 20.7 29.1 17.5l98.2-24.6V456c0 13.3 10.7 24 24 24s24-10.7 24-24V338.7l109.8-27.5c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L216 289.3v-46.6l109.8-27.5c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L216 193.3V80h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H24"
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
                  d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h160v147.5l-115.9 29c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l108.1-27v63l-115.9 29c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l108.1-27V456c0 8.8 7.2 16 16 16s16-7.2 16-16V332.5l115.9-29c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6l-108.1 27v-63l115.9-29c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6l-108.1 27V64h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H16"
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
                  d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h176v169.8L62.1 248.2c-4.3 1.1-6.9 5.4-5.8 9.7s5.4 6.9 9.7 5.8l118-29.5v79.5L62.1 344.2c-4.3 1.1-6.9 5.4-5.8 9.7s5.4 6.9 9.7 5.8l118-29.5V472c0 4.4 3.6 8 8 8s8-3.6 8-8V326.2l121.9-30.5c4.3-1.1 6.9-5.4 5.8-9.7s-5.4-6.9-9.7-5.8l-118 29.6v-79.6l121.9-30.5c4.3-1.1 6.9-5.4 5.8-9.7s-5.4-6.9-9.7-5.8l-118 29.6V48h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H8"
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
                  d="M160 199v66l-88.2 22c-17.1 4.3-34.5-6.1-38.8-23.3s6.1-34.5 23.3-38.8zm0 96v66l-88.2 22c-17.1 4.3-34.5-6.1-38.8-23.3s6.1-34.5 23.3-38.8zm64 50v-66l88.2-22c17.1-4.3 34.5 6.1 38.8 23.3s-6.1 34.5-23.3 38.8zm0-96v-66l88.2-22c17.1-4.3 34.5 6.1 38.8 23.3s-6.1 34.5-23.3 38.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H224v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H32C14.3 96 0 81.7 0 64"
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
