import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownFromLineIcon: React.FC<
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
                  d="m41.9 345.9 122.8 122.8c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3l122.8-122.8c6.4-6.4 9.9-15 9.9-24 0-18.7-15.2-33.9-33.9-33.9H256V160c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H65.9C47.2 288 32 303.2 32 321.9c0 9 3.6 17.6 9.9 24M32 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 32 0 46.3 0 64s14.3 32 32 32"
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
                  d="M82.2 320 192 430l109.8-110H248c-13.3 0-24-10.7-24-24V176h-64v120c0 13.3-10.7 24-24 24zM192 480c-11.5 0-22.5-4.6-30.6-12.7L45.6 351.2c-8.7-8.7-13.6-20.5-13.6-32.8 0-25.6 20.8-46.4 46.4-46.4H112v-96c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v96h33.6c25.6 0 46.4 20.8 46.4 46.4 0 12.3-4.9 24.1-13.6 32.8L222.6 467.3c-8.1 8.1-19.1 12.7-30.6 12.7M24 80C10.7 80 0 69.3 0 56s10.7-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
                  d="M190.2 447.2c.5.5 1.1.8 1.8.8s1.4-.3 1.8-.8l124.4-131.9c1.2-1.2 1.8-2.9 1.8-4.6 0-3.7-3-6.7-6.7-6.7H256c-8.8 0-16-7.2-16-16V168c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v120c0 8.8-7.2 16-16 16H70.7c-3.7 0-6.7 3-6.7 6.7 0 1.7.7 3.3 1.8 4.6zM192 480c-9.5 0-18.6-3.9-25.1-10.8l-124.4-132C35.8 330 32 320.5 32 310.7c0-21.4 17.3-38.7 38.7-38.7H112V168c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v104h41.3c21.4 0 38.7 17.3 38.7 38.7 0 9.9-3.8 19.4-10.5 26.5l-124.4 132c-6.5 6.9-15.6 10.8-25.1 10.8M16 32h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 64 0 56.8 0 48s7.2-16 16-16"
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
                  d="M184 460.7c2.1 2.1 5 3.3 8 3.3s5.9-1.2 8-3.3l131.8-132.1c2.7-2.7 4.2-6.4 4.2-10.2 0-8-6.5-14.4-14.4-14.4H248c-4.4 0-8-3.6-8-8V160c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v136c0 4.4-3.6 8-8 8H62.4c-8 0-14.4 6.5-14.4 14.4 0 3.8 1.5 7.5 4.2 10.2zm8 19.3c-7.2 0-14.2-2.9-19.3-8L40.9 339.9c-5.7-5.7-8.9-13.4-8.9-21.5 0-16.8 13.6-30.4 30.4-30.4H128V160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v128h65.6c16.8 0 30.4 13.6 30.4 30.4 0 8.1-3.2 15.8-8.9 21.5L211.3 472c-5.1 5.1-12.1 8-19.3 8M8 32h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M0 64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M164.7 468.7 41.9 345.9c-6.4-6.4-9.9-15-9.9-24 0-18.7 15.2-33.9 33.9-33.9H128V160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v128h62.1c18.7 0 33.9 15.2 33.9 33.9 0 9-3.6 17.6-9.9 24L219.3 468.7c-7.2 7.2-17.1 11.3-27.3 11.3s-20.1-4.1-27.3-11.3"
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
