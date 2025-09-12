import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LandmarkIcon: React.FC<
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
                  d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1 4.3 1.7v.9l47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9v-.9l4.4-1.6zM64 224h64v192h40V224h64v192h48V224h64v192h40V224h64v196.3c.6.3 1.2.7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"
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
                  d="M267.6 3c-7.2-4-16-4-23.2 0L17.6 128.1C6.7 134.1 0 145.5 0 157.9 0 176.8 15.2 192 34.1 192h443.8c18.8 0 34.1-15.2 34.1-34.1 0-12.4-6.7-23.8-17.6-29.8zM256 51.4 423.8 144H88.2zM112 224H64v160h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V224h-48v160h-64V224h-48v160h-64V224h-48v160h-64zM0 488c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"
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
                  d="M263.9 2.1C259-.7 253-.7 248.1 2.1L15.8 133.7C6 139.3 0 149.6 0 160.8 0 178 14 192 31.2 192h449.6c17.2 0 31.2-14 31.2-31.2 0-11.2-6-21.6-15.8-27.1zM256 34.4 477.7 160H34.3zM64 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16V224h-32v128h-80V224h-32v128h-96V224h-32v128H96V224H64zm-40 80c0 8.8 7.2 16 16 16h432c8.8 0 16-7.2 16-16s-7.2-16-16-16H40c-8.8 0-16 7.2-16 16M0 496c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16"
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
                  d="M259.3.7c-2.1-.9-4.5-.9-6.6 0L14.1 108.5C5.5 112.3 0 120.9 0 130.3v5.7c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24v-5.7c0-9.4-5.5-18-14.1-21.9zM20.7 123 256 16.8 491.3 123c2.9 1.3 4.7 4.1 4.7 7.3v5.7c0 4.4-3.6 8-8 8H24c-4.4 0-8-3.6-8-8v-5.7c0-3.1 1.8-6 4.7-7.3M80 200c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H328V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H200V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H80zM40 432c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zM8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M128 192H64v228.3c-.6.3-1.2.7-1.7 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V192H384v224h-40V192h-64v224h-48V192h-64v224h-40z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 192 32 192h448c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15-36z"
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
