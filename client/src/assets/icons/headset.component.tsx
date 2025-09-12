import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeadsetIcon: React.FC<
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
                  d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24S0 309.3 0 296v-40C0 114.6 114.6 0 256 0s256 114.6 256 256v144.1c0 48.6-39.4 88-88.1 88l-110.3-.1c-8.3 14.3-23.8 24-41.6 24h-32c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4.1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208M144 208h16c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32h-16c-35.3 0-64-28.7-64-64v-48c0-35.3 28.7-64 64-64m224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64h-16c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32z"
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
                  d="M48 256c0-114.9 93.1-208 208-208s208 93.1 208 208v144.1c0 22.1-17.9 40-40 40l-110.4-.1c-8.3-14.4-23.8-24-41.6-24h-32c-26.5 0-48 21.5-48 48s21.5 48 48 48h32c17.8 0 33.3-9.7 41.6-24l110.4.1c48.6 0 88.1-39.4 88.1-88V256C512 114.6 397.4 0 256 0S0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24zm112-32v112c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m-80 32v48c0 44.2 35.8 80 80 80h16c17.7 0 32-14.3 32-32V208c0-17.7-14.3-32-32-32h-16c-44.2 0-80 35.8-80 80m272-32c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32zm80 32c0-44.2-35.8-80-80-80h-16c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32h16c44.2 0 80-35.8 80-80z"
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
                  d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224v144.1c0 26.5-21.5 48-48 48l-82.7-.1c-6.6-18.6-24.4-32-45.3-32h-64c-26.5 0-48 21.5-48 48s21.5 48 48 48h64c20.9 0 38.7-13.4 45.3-32l82.7.1c44.2 0 80.1-35.8 80.1-80V256C512 114.6 397.4 0 256 0S0 114.6 0 256v48c0 8.8 7.2 16 16 16s16-7.2 16-16zm288 208c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16M144 224h16v128h-16c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48m-80 48v32c0 44.2 35.8 80 80 80h16c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-16c-44.2 0-80 35.8-80 80m288-48h16c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-16zm16-32h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h16c44.2 0 80-35.8 80-80v-32c0-44.2-35.8-80-80-80"
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
                  d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240v144.1c0 30.9-25.1 56-56 56l-120.7-.1c-3.8-22.7-23.6-40-47.3-40h-32c-26.5 0-48 21.5-48 48s21.5 48 48 48h32c23.8 0 43.5-17.3 47.3-40l120.6.1c39.8 0 72-32.2 72-72V256C512 114.6 397.4 0 256 0S0 114.6 0 256v56c0 4.4 3.6 8 8 8s8-3.6 8-8zm144-32v128c0 8.8-7.2 16-16 16-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16m-96 48v32c0 44.2 35.8 80 80 80 17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32-44.2 0-80 35.8-80 80m288-48c0-8.8 7.2-16 16-16 35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64-8.8 0-16-7.2-16-16zm96 48c0-44.2-35.8-80-80-80-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32 44.2 0 80-35.8 80-80zM304 464c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32"
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
                  d="M48 256c0-114.9 93.1-208 208-208s208 93.1 208 208v144.1c0 22.1-17.9 40-40 40l-110.4-.1c-8.3-14.4-23.8-24-41.6-24h-32c-26.5 0-48 21.5-48 48s21.5 48 48 48h32c17.8 0 33.3-9.7 41.6-24l110.4.1c48.6 0 88.1-39.4 88.1-88V256C512 114.6 397.4 0 256 0S0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 208c-35.3 0-64 28.7-64 64v48c0 35.3 28.7 64 64 64h16c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32zm224 0h-16c-17.7 0-32 14.3-32 32v112c0 17.7 14.3 32 32 32h16c35.3 0 64-28.7 64-64v-48c0-35.3-28.7-64-64-64"
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
