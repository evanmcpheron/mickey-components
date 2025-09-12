import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BitcoinSignIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32v32h32V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9 31.7 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-6.3C18.7 448 0 429.3 0 406.3V101.6C0 80.8 16.8 64 37.6 64H48zm16 192h112c26.5 0 48-21.5 48-48s-21.5-48-48-48H64zm112 64H64v96h144c26.5 0 48-21.5 48-48s-21.5-48-48-48z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 24C64 10.7 74.7 0 88 0s24 10.7 24 24v40h32V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40.7c54 6 96 51.8 96 107.3 0 27.5-10.3 52.6-27.2 71.6 35.1 17.9 59.2 54.3 59.2 96.4 0 59.6-48.4 108-108 108h-20v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-32v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H41.7C18.7 448 0 429.3 0 406.3V101.6C0 80.8 16.8 64 37.6 64H64zM48 232h132c33.1 0 60-26.9 60-60s-26.9-60-60-60H48zm132 48H48v120h164c33.1 0 60-26.9 60-60s-26.9-60-60-60z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48.3c53.7 4.1 96 49 96 103.7 0 31.3-13.9 59.4-35.8 78.5 39.6 14.7 67.8 52.8 67.8 97.5 0 57.4-46.6 104-104 104h-24v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H96v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H41.7C18.7 448 0 429.3 0 406.3V101.6C0 80.8 16.8 64 37.6 64H64zm112 400h40c39.8 0 72-32.2 72-72s-32.2-72-72-72H32v134.3c0 5.4 4.4 9.7 9.7 9.7H176m0-320H37.6c-3.1 0-5.6 2.5-5.6 5.6V240h152c39.8 0 72-32.2 72-72s-32.2-72-72-72z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h64V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56.1c53.4 2.1 96 46 96 99.9 0 36.5-19.5 68.4-48.7 85.9 46 9 80.7 49.5 80.7 98.1 0 55.2-44.8 100-100 100h-28v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H96v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H53.6C32.8 448 16 431.2 16 410.4v-313C16 78.9 30.9 64 49.4 64H80zM49.4 80C39.8 80 32 87.8 32 97.4V248h140c46.4 0 84-37.6 84-84s-37.6-84-84-84zM172 264H32v146.4c0 11.9 9.7 21.6 21.6 21.6H204c46.4 0 84-37.6 84-84s-37.6-84-84-84z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M48 32v32h64V32c0-17.7-14.3-32-32-32S48 14.3 48 32m0 416v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32zm96 0v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32zm63.7-379.5q.3-2.25.3-4.5V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h32c11 0 21.6 1.6 31.7 4.5"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 224h112c26.5 0 48-21.5 48-48s-21.5-48-48-48H64zM0 265.7V101.6C0 80.8 16.8 64 37.6 64H176c61.9 0 112 50.1 112 112 0 24.2-7.7 46.6-20.7 64.9 31.7 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112H41.7C18.7 448 0 429.3 0 406.3V265.7M176 288H64v96h144c26.5 0 48-21.5 48-48s-21.5-48-48-48z"
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
