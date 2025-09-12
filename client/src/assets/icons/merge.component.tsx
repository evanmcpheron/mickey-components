import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MergeIcon: React.FC<
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
                  d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h97.2c9.7 0 18.9 4.4 25 12L247 256l-92.8 116c-6.1 7.6-15.3 12-25 12H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h97.2c29.2 0 56.7-13.3 75-36l99.2-124H384v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S384 179.2 384 192.2v32h-80.6L204.2 100c-18.2-22.8-45.8-36-75-36z"
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
                  d="M0 88c0-13.3 10.7-24 24-24h120.2c17.5 0 34 8.2 44.5 22.1l108.8 142.7c1.5 2 3.9 3.2 6.4 3.2h126.2l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H303.8c-2.5 0-4.9 1.2-6.4 3.2L188.7 425.9c-10.6 13.9-27.1 22.1-44.5 22.1H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h120.2c2.5 0 4.9-1.2 6.4-3.2L257.8 256 150.5 115.2c-1.5-2-3.9-3.2-6.4-3.2H24c-13.3 0-24-10.7-24-24"
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
                  d="M0 80c0-8.8 7.2-16 16-16h127.7c15.4 0 29.8 7.3 38.8 19.8l108.9 149.6c3 4.1 7.8 6.6 12.9 6.6h153.1l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H304.3c-5.1 0-9.9 2.4-12.9 6.6L182.5 428.2c-9 12.4-23.5 19.8-38.8 19.8H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h127.7c5.1 0 9.9-2.4 12.9-6.6l108.9-149.6c1-1.3 2-2.6 3-3.8-1.1-1.2-2.1-2.5-3-3.8L156.6 102.6c-3-4.1-7.8-6.6-12.9-6.6H16C7.2 96 0 88.8 0 80"
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
                  d="M0 72c0-4.4 3.6-8 8-8h135.3c13.1 0 25.4 6.4 32.8 17.2L285 237.7c4.5 6.4 11.8 10.3 19.7 10.3h180l-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l80 80c3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l66.3-66.4h-180c-7.9 0-15.2 3.8-19.7 10.3L176.1 430.8c-7.5 10.7-19.7 17.2-32.8 17.2H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h135.3c7.9 0 15.2-3.8 19.7-10.3l108.9-156.5c2.5-3.6 5.5-6.6 8.8-9.2-3.4-2.5-6.4-5.6-8.8-9.2L163 90.3c-4.5-6.5-11.9-10.3-19.7-10.3H8c-4.4 0-8-3.6-8-8"
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
                  d="m243.8 252 3.2 4-92.8 116c-6.1 7.6-15.3 12-25 12H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h97.2c29.2 0 56.7-13.3 75-36l99.2-124h15.4c-29.2 0-56.7-13.3-75-36"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h97.2c9.7 0 18.9 4.4 25 12l89.6 112c18.2 22.8 45.8 36 75 36H384v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S384 179.2 384 192.2v32h-65.2c-9.7 0-18.9-4.4-25-12L204.2 100c-18.2-22.8-45.8-36-75-36z"
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
