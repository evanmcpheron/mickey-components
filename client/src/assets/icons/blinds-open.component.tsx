import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlindsOpenIcon: React.FC<
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
                  d="M0 32C0 14.3 14.3 0 32 0h448c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v194.7c13.6 4.8 24.4 15.6 29.3 29.3.1.3.2.7.4 1 1.5 4.7 2.4 9.7 2.4 15 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16 4.8-13.6 15.6-24.4 29.3-29.3V64H32C14.3 64 0 49.7 0 32m47.4 96H96v64H17.8C8 192 0 184 0 174.2c0-4 1.4-7.9 3.9-11.1L22.4 140c6.1-7.6 15.3-12 25-12m0 160h18.2c-1 5.2-1.6 10.5-1.6 16 0 18 6 34.6 16 48H17.8C8 352 0 344 0 334.2c0-4 1.4-7.9 3.9-11.1L22.4 300c6.1-7.6 15.3-12 25-12m446.9 64H208c10-13.4 16-30 16-48 0-5.5-.6-10.8-1.6-16h242.2c9.7 0 18.9 4.4 25 12l18.5 23.1c2.5 3.2 3.9 7.1 3.9 11.1 0 9.8-8 17.8-17.8 17.8zm0-160H192v-64h272.6c9.7 0 18.9 4.4 25 12l18.5 23.1c2.5 3.2 3.9 7.1 3.9 11.1 0 9.8-8 17.8-17.8 17.8zM17.8 512C8 512 0 504 0 494.2c0-4 1.4-7.9 3.9-11.1L22.4 460c6.1-7.6 15.3-12 25-12h417.2c9.7 0 18.9 4.4 25 12l18.5 23.1c2.5 3.2 3.9 7.1 3.9 11.1 0 9.8-8 17.8-17.8 17.8z"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h120v196.1c-28 9.9-48 36.6-48 67.9 0 39.8 32.2 72 72 72s72-32.2 72-72c0-31.3-20-58-48-67.9V48h296c13.3 0 24-10.7 24-24S501.3 0 488 0zm120 312a24 24 0 1 1 48 0 24 24 0 1 1-48 0M0 488c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24m64.3-168H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h56.3c-9-14.1-14.7-30.4-16-48m191.3 48H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H271.7c-1.3 17.6-7 33.9-16 48zM24 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h88v-48zm200 48h264c13.3 0 24-10.7 24-24s-10.7-24-24-24H224z"
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
                  d="M32 0C14.3 0 0 14.3 0 32v32c0 17.7 14.3 32 32 32h96v162.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V96h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm0 32h448v32H32zm96 272a16 16 0 1 1 32 0 16 16 0 1 1-32 0M16 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v-32zm176 32h304c8.8 0 16-7.2 16-16s-7.2-16-16-16H192zM0 496c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m16-176c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c-7-9.3-12-20.2-14.4-32zm480 32c8.8 0 16-7.2 16-16s-7.2-16-16-16H222.4c-2.4 11.8-7.4 22.7-14.4 32z"
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
                  d="M480 16c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16V32c0-8.8 7.2-16 16-16zM32 96h104v160.7c-22.7 3.8-40 23.6-40 47.3 0 12.3 4.6 23.5 12.2 32 .6.7 1.2 1.3 1.8 1.9 8.7 8.7 20.7 14.1 33.9 14.1 14.2 0 27-6.2 35.8-16 7.6-8.5 12.2-19.7 12.2-32 0-23.8-17.3-43.5-40-47.3V96H480c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32v32c0 17.7 14.3 32 32 32m112 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64M8 176c-4.4 0-8 3.6-8 8s3.6 8 8 8h96v-16zm0 160c-4.4 0-8 3.6-8 8s3.6 8 8 8h72c-3.7-4.9-6.8-10.3-9.3-16zm496 16c4.4 0 8-3.6 8-8s-3.6-8-8-8H217.3c-2.5 5.7-5.6 11.1-9.3 16zm0-160c4.4 0 8-3.6 8-8s-3.6-8-8-8H184v16zM0 504c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8"
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
                  d="M160 192h334.2c9.8 0 17.8-8 17.8-17.8 0-4-1.4-7.9-3.9-11.1L489.6 140c-6.1-7.6-15.3-12-25-12H160zm-32-64H47.4c-9.7 0-18.9 4.4-25 12L3.9 163.1c-2.5 3.2-3.9 7.1-3.9 11.1C0 184 8 192 17.8 192H128zM98.7 288H47.4c-9.7 0-18.9 4.4-25 12L3.9 323.1c-2.5 3.2-3.9 7.1-3.9 11.1C0 344 8 352 17.8 352h476.4c9.8 0 17.8-8 17.8-17.8 0-4-1.4-7.9-3.9-11.1L489.6 300c-6.1-7.6-15.3-12-25-12H189.3c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16m395.5 224c9.8 0 17.8-8 17.8-17.8 0-4-1.4-7.9-3.9-11.1L489.6 460c-6.1-7.6-15.3-12-25-12H47.4c-9.7 0-18.9 4.4-25 12L3.9 483.1c-2.5 3.2-3.9 7.1-3.9 11.1C0 504 8 512 17.8 512z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h96v194.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V64h320c17.7 0 32-14.3 32-32S497.7 0 480 0z"
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
