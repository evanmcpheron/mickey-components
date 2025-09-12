import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CardClubIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm130.1 144.3c-28.2 3-50.1 26.8-50.1 55.7 0 30.9 25.1 56 56 56 15.7 0 29.8-6.4 40-16.8V336h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32.8c10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56 0-28.9-21.9-52.7-50.1-55.7 1.4-5.2 2.1-10.7 2.1-16.3 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6.7 11.1 2.1 16.3"
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
                  d="M320 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm66.1 208.3c-28.2 3-50.1 26.8-50.1 55.7 0 30.9 25.1 56 56 56 15.7 0 29.8-6.4 40-16.8V336h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32.8c10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56 0-28.9-21.9-52.7-50.1-55.7 1.4-5.2 2.1-10.7 2.1-16.3 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6.7 11.1 2.1 16.3"
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
                  d="M320 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm144 331.9c7.5 2.7 15.6 4.1 24 4.1 39.8 0 72-32.2 72-72 0-28.3-16.3-52.7-40-64.5-.3-39.5-32.4-71.5-72-71.5s-71.7 32-72 71.5c-23.7 11.8-40 36.2-40 64.5 0 39.8 32.2 72 72 72 8.4 0 16.5-1.4 24-4.1V352h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zM152 200c0-22.1 17.9-40 40-40s40 17.9 40 40q0 3.75-.6 7.2c-1.5 8.1 3.5 16 11.4 18.3 16.9 4.7 29.2 20.2 29.2 38.5 0 22.1-17.9 40-40 40-11.2 0-21.3-4.6-28.6-12-3-3.1-7.1-4.8-11.4-4.8s-8.4 1.7-11.4 4.8c-7.3 7.4-17.4 12-28.6 12-22.1 0-40-17.9-40-40 0-18.3 12.3-33.8 29.2-38.5 8-2.2 12.9-10.1 11.4-18.3q-.6-3.45-.6-7.2"
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
                  d="M320 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm136 326.6c10.2 6 22.1 9.4 34.9 9.4 38.2 0 69.1-30.9 69.1-69.1 0-29-17.8-53.8-43.1-64 .2-1.9.2-3.8.2-5.8 0-38.2-30.9-69.1-69.1-69.1s-69.1 30.9-69.1 69.1c0 1.9.1 3.9.2 5.8-25.3 10.2-43.1 35-43.1 64 0 38.2 30.9 69.1 69.1 69.1 12.7 0 24.7-3.4 34.9-9.5V368h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24zm-61.1-129.5c0-29.3 23.8-53.1 53.1-53.1s53.1 23.8 53.1 53.1c0 3.3-.3 6.6-.9 9.7-.7 4 1.7 8 5.6 9.1 22.1 6.5 38.1 26.8 38.1 51 0 29.3-23.8 53.1-53.1 53.1-14.5 0-27.7-5.8-37.3-15.3-3.1-3.1-8.1-3.1-11.2 0-9.6 9.5-22.7 15.3-37.3 15.3-29.2 0-53-23.8-53-53.1 0-24.1 16.1-44.5 38.1-51 3.9-1.2 6.4-5.1 5.6-9.1-.6-3.1-.9-6.4-.9-9.7z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm130.1 144.3c-28.2 3-50.1 26.8-50.1 55.7 0 30.9 25.1 56 56 56 15.7 0 29.8-6.4 40-16.8V336h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32.8c10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56 0-28.9-21.9-52.7-50.1-55.7 1.4-5.2 2.1-10.7 2.1-16.3 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6.7 11.1 2.1 16.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M253.9 208.3c1.4-5.2 2.1-10.7 2.1-16.3 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6.7 11.1 2.1 16.3-28.2 3-50.1 26.8-50.1 55.7 0 30.9 25.1 56 56 56 15.7 0 29.8-6.4 40-16.8V336h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32.8c10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56 0-28.9-21.9-52.7-50.1-55.7"
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
