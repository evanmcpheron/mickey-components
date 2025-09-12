import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OrnamentIcon: React.FC<
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
                  d="M192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m55.4 64c5.4-9.4 8.6-20.3 8.6-32 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 11.7 3.1 22.6 8.6 32H128c-17.7 0-32 14.3-32 32v25.7c-29.1 16.8-53.5 41.2-70.3 70.3h332.6c-16.9-29.1-41.2-53.5-70.3-70.3V128c0-17.7-14.3-32-32-32zM0 320c0 22.4 3.8 44 10.9 64h362.2c7.1-20 10.9-41.6 10.9-64s-3.8-44-10.9-64H10.9C3.8 276 0 297.6 0 320m25.7 96c33.2 57.4 95.2 96 166.3 96s133.1-38.6 166.3-96z"
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
                  d="M192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m55.4 64c5.4-9.4 8.6-20.3 8.6-32 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 11.7 3.1 22.6 8.6 32H128c-17.7 0-32 14.3-32 32v25.7C38.6 186.9 0 248.9 0 320c0 106 86 192 192 192s192-86 192-192c0-71.1-38.6-133.1-96-166.3V128c0-17.7-14.3-32-32-32zM192 176c42.6 0 81 18.5 107.3 48H84.7c26.4-29.5 64.7-48 107.3-48M56.2 272h271.6c5.3 15 8.2 31.2 8.2 48s-2.9 33-8.2 48H56.2c-5.3-15-8.2-31.2-8.2-48s2.9-33 8.2-48m28.5 144h214.6c-26.3 29.5-64.7 48-107.3 48s-81-18.5-107.3-48"
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
                  d="M192 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32m45.3 32c1.8-5 2.7-10.4 2.7-16 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 5.6 1 11 2.7 16H128c-17.7 0-32 14.3-32 32v57.7C38.6 186.9 0 248.9 0 320c0 106 86 192 192 192s192-86 192-192c0-71.1-38.6-133.1-96-166.3V96c0-17.7-14.3-32-32-32zm24.6 112c23 11.2 43 27.7 58.2 48H64c15.2-20.3 35.2-36.8 58.2-48h139.6zM192 96h64v48H128V96zM32 320c0-22.8 4.8-44.4 13.3-64h293.4c8.6 19.6 13.3 41.2 13.3 64s-4.7 44.4-13.3 64H45.3C36.8 364.4 32 342.8 32 320m160 160c-52.3 0-98.8-25.1-128-64h256c-29.2 38.9-75.7 64-128 64"
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
                  d="M192 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64m35.8 64c7.6-8.5 12.2-19.7 12.2-32 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32H128c-17.7 0-32 14.3-32 32v41.7C38.6 186.9 0 248.9 0 320c0 106 86 192 192 192s192-86 192-192c0-71.1-38.6-133.1-96-166.3V112c0-17.7-14.3-32-32-32zm37.6 80c38.7 17.8 69.8 49.1 87.2 88H31.4c17.4-38.9 48.6-70.2 87.2-88zM192 96h64c8.8 0 16 7.2 16 16v32H112v-32c0-8.8 7.2-16 16-16zM16 320c0-19.6 3.2-38.4 9.1-56h333.8c5.9 17.6 9.1 36.4 9.1 56s-3.2 38.4-9.1 56H25.1c-5.9-17.6-9.1-36.4-9.1-56m176 176c-71.6 0-133.1-42.7-160.6-104h321.2c-27.5 61.3-89 104-160.6 104"
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
                  d="M224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v1c.4 13.9 9.7 26.6 22.4 31h-45.8c-5.4-9.4-8.6-20.3-8.6-32 0-35.3 28.7-64 64-64s64 28.7 64 64c0 11.7-3.1 22.6-8.6 32h-45.8c12.8-4.4 22.1-17.2 22.4-31.2zm160 256c0 22.4-3.8 44-10.9 64H10.9C3.8 364 0 342.4 0 320s3.8-44 10.9-64h362.2c7.1 20 10.9 41.6 10.9 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 128c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v25.7c39.3 22.7 69.7 58.9 85.1 102.3H10.9c15.4-43.4 45.8-79.6 85.1-102.3zM10.9 384h362.2c-26.4 74.6-97.5 128-181.1 128S37.3 458.6 10.9 384"
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
