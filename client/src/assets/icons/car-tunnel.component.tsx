import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarTunnelIcon: React.FC<
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
                  d="M256 0C114.6 0 0 114.6 0 256v192c0 35.3 28.7 64 64 64h42.8c-6.6-5.9-10.8-14.4-10.8-24V376c0-20.8 11.3-38.9 28.1-48.6l21-64.7c7.5-23.1 29-38.7 53.3-38.7h115.2c24.3 0 45.8 15.6 53.3 38.7l21 64.7c16.8 9.7 28.2 27.8 28.2 48.6v112c0 9.6-4.2 18.1-10.8 24H448c35.3 0 64-28.7 64-64V256C512 114.6 397.4 0 256 0m106.8 512c-6.6-5.9-10.8-14.4-10.8-24v-40H160v40c0 9.6-4.2 18.1-10.8 24zm-172-234.5L177 320h158l-13.8-42.5c-1.1-3.3-4.1-5.5-7.6-5.5H198.4c-3.5 0-6.5 2.2-7.6 5.5M168 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48m200-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M256 48C141.1 48 48 141.1 48 256v232c0 13.3-10.7 24-24 24S0 501.3 0 488V256C0 114.6 114.6 0 256 0s256 114.6 256 256v232c0 13.3-10.7 24-24 24s-24-10.7-24-24V256c0-114.9-93.1-208-208-208m-65.2 229.5L177 320h158l-13.8-42.5c-1.1-3.3-4.1-5.5-7.6-5.5H198.4c-3.5 0-6.5 2.2-7.6 5.5M122.7 332l22.5-69.3c7.5-23.1 29-38.7 53.3-38.7h115.1c24.3 0 45.8 15.6 53.3 38.7l22.4 69.3c16.1 11.6 26.7 30.6 26.7 52v104c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H144v8c0 13.3-10.7 24-24 24s-24-10.7-24-24V384c0-21.4 10.5-40.4 26.7-52M144 432h224v-48c0-8.8-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zm16-32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m168-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M256 32C132.3 32 32 132.3 32 256v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V256C0 114.6 114.6 0 256 0s256 114.6 256 256v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-123.7-100.3-224-224-224m-81.3 234.7-19 54.3c4-.7 8.1-1 12.2-1H344c4.2 0 8.3.4 12.2 1l-19-54.3c-2.2-6.4-8.2-10.7-15-10.7H189.8c-6.8 0-12.9 4.3-15.1 10.7m-61.2 78.2 31-88.7c6.7-19.3 24.9-32.2 45.3-32.2h132.4c20.4 0 38.6 12.9 45.3 32.2l31 88.7C409.4 357.5 416 374 416 392v104c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H128v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V392c0-18 6.6-34.5 17.5-47.1M128 448h256v-56c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40zm32-48a24 24 0 1 1 48 0 24 24 0 1 1-48 0m168-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M256 16C123.5 16 16 123.5 16 256v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256C0 114.6 114.6 0 256 0s256 114.6 256 256v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256c0-132.5-107.5-240-240-240m-95 242.4L146.2 320h219.6L351 258.4c-2.6-10.8-12.2-18.4-23.3-18.4H184.3c-11.1 0-20.7 7.6-23.3 18.4m-31.9 64 16.3-67.7c4.3-18 20.4-30.6 38.9-30.6h143.4c18.5 0 34.6 12.7 38.9 30.6l16.3 67.7c19.2 6.3 33.1 24.3 33.1 45.7v112c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32V464H176v16c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32V368c0-21.3 13.9-39.4 33.1-45.7zM336 448h64v-80c0-17.7-14.3-32-32-32H144c-17.7 0-32 14.3-32 32v80h224m16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16zm-240 0v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16zm64-88a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m112 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M256 0C114.6 0 0 114.6 0 256v192c0 35.3 28.7 64 64 64h42.8c-6.6-5.9-10.8-14.4-10.8-24V376c0-20.8 11.3-38.9 28.1-48.6l21-64.7c7.5-23.1 29-38.7 53.3-38.7h115.2c24.3 0 45.8 15.6 53.3 38.7l21 64.7c16.8 9.7 28.2 27.8 28.2 48.6v112c0 9.6-4.2 18.1-10.8 24H448c35.3 0 64-28.7 64-64V256C512 114.6 397.4 0 256 0m106.8 512c-6.6-5.9-10.8-14.4-10.8-24v-40H160v40c0 9.6-4.2 18.1-10.8 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M198.4 272h115.2c3.5 0 6.5 2.2 7.6 5.5L335 320H177l13.8-42.5c1.1-3.3 4.1-5.5 7.6-5.5m-53.3-9.3-21 64.7C107.3 337.1 96 355.2 96 376v112c0 9.6 4.2 18.1 10.8 24h42.3c6.6-5.9 10.8-14.4 10.8-24v-40H352v40c0 9.6 4.2 18.1 10.8 24h42.3c6.6-5.9 10.8-14.4 10.8-24V376c0-20.8-11.3-38.9-28.2-48.6l-21-64.7c-7.5-23.1-29-38.7-53.3-38.7h-115c-24.3 0-45.8 15.6-53.3 38.7M144 384a24 24 0 1 1 48 0 24 24 0 1 1-48 0m200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
