import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AlbumCollectionIcon: React.FC<
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
                  d="M32 24c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24S469.3 0 456 0H56C42.7 0 32 10.7 32 24m16 136c-13.8 0-26.9 5.9-36 16.2S-1.3 200.3.4 214l32 256c3 24 23.4 42 47.6 42h352c24.2 0 44.6-18 47.6-42l32-256c1.7-13.7-2.5-27.4-11.6-37.7s-22.2-16.2-36-16.2H48zm392 184c0 75.1-82.4 136-184 136S72 419.1 72 344s82.4-136 184-136 184 60.9 184 136m-184 32c17.7 0 32-10.7 32-24s-14.3-24-32-24-32 10.7-32 24 14.3 24 32 24M40 80c-13.3 0-24 10.7-24 24s10.7 24 24 24h432c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M56 0h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24S42.7 0 56 0M6.2 232.3C1.1 194 30.9 160 69.6 160h372.8c38.7 0 68.5 34 63.5 72.3l-29.5 224c-4.2 31.9-31.4 55.7-63.5 55.7H99.1c-32.1 0-59.3-23.8-63.5-55.7zM69.6 208c-9.7 0-17.1 8.5-15.9 18.1l29.5 224c1 8 7.8 13.9 15.9 13.9h313.8c8 0 14.8-6 15.9-13.9l29.5-224c1.3-9.6-6.2-18.1-15.9-18.1zM400 336c0 57.4-64.5 104-144 104s-144-46.6-144-104 64.5-104 144-104 144 46.6 144 104M16 104c0-13.3 10.7-24 24-24h432c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24m240 264c17.7 0 32-10.7 32-24s-14.3-24-32-24-32 10.7-32 24 14.3 24 32 24"
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
                  d="M32 16c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.8 0-16 7.2-16 16M16 80c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16s-7.2-16-16-16H32c-8.8 0-16 7.2-16 16m43.8 48C26.9 128 1.1 156.3 4 189.1l24.7 272c2.7 28.8 26.9 50.9 55.8 50.9h343c29 0 53.1-22.1 55.8-50.9l24.7-272c3-32.8-22.8-61.1-55.8-61.1zm-23.9 58.2c-1.3-14.1 9.8-26.2 23.9-26.2h392.4c14.1 0 25.2 12.1 23.9 26.2l-24.7 272c-1.1 12.4-11.5 21.8-23.9 21.8h-343c-12.4 0-22.8-9.5-23.9-21.8zM256 416c-77.7 0-128-49.3-128-96s50.3-96 128-96 128 49.3 128 96-50.3 96-128 96m0 32c88.4 0 160-57.3 160-128s-71.6-128-160-128S96 249.3 96 320s71.6 128 160 128m0-104c13.3 0 24-9 24-20s-10.7-20-24-20-24 9-24 20 10.7 20 24 20"
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
                  d="M64 0h384c17.7 0 32 14.3 32 32v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8C32 14.3 46.3 0 64 0M16 112c0-17.7 14.3-32 32-32h416c17.7 0 32 14.3 32 32v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v8c0 4.4-3.6 8-8 8s-8-3.6-8-8zM4.2 212.6C1.5 184.4 23.7 160 52 160h408c28.3 0 50.5 24.4 47.8 52.6l-24.4 256c-2.3 24.6-23 43.4-47.8 43.4H76.4c-24.7 0-45.4-18.8-47.8-43.4zM52 176c-18.9 0-33.6 16.2-31.9 35l24.4 256c1.6 16.4 15.4 29 31.9 29h359.2c16.5 0 30.3-12.5 31.9-29l24.4-256c1.8-18.8-13-35-31.9-35zm364 164c0-30.3-16.3-58.9-45.1-80.5S301.5 224 256 224s-86 13.8-114.9 35.5S96 309.7 96 340s16.3 58.9 45.1 80.5S210.5 456 256 456s86-13.8 114.9-35.5S416 370.3 416 340m16 0c0 72.9-78.8 132-176 132S80 412.9 80 340s78.8-132 176-132 176 59.1 176 132m-150.2 28.6c-7.3 4.9-16.5 7.4-25.8 7.4s-18.5-2.5-25.8-7.4C223 363.8 216 355.4 216 344s7-19.8 14.2-24.6c7.3-4.9 16.5-7.4 25.8-7.4s18.5 2.5 25.8 7.4c7.2 4.8 14.2 13.2 14.2 24.6s-7 19.8-14.2 24.6M256 360c13.3 0 24-7.2 24-16s-10.7-16-24-16-24 7.2-24 16 10.7 16 24 16"
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
                  d="m.4 214 32 256c3 24 23.4 42 47.6 42h352c24.2 0 44.6-18 47.6-42l32-256c.2-2 .4-4 .4-6 0-11.6-4.2-22.9-12-31.8-9.1-10.3-22.2-16.2-36-16.2H48c-13.8 0-26.9 5.9-36 16.2S-1.3 200.3.4 214M72 344c0-75.1 82.4-136 184-136s184 60.9 184 136-82.4 136-184 136S72 419.1 72 344"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 24c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24S469.3 0 456 0H56C42.7 0 32 10.7 32 24m224 456c101.6 0 184-60.9 184-136s-82.4-136-184-136S72 268.9 72 344s82.4 136 184 136m0-104c-17.7 0-32-10.7-32-24s14.3-24 32-24 32 10.7 32 24-14.3 24-32 24M40 80c-13.3 0-24 10.7-24 24s10.7 24 24 24h432c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
