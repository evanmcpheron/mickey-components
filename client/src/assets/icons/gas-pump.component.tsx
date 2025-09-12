import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GasPumpIcon: React.FC<
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
                  d="M32 64C32 28.7 60.7 0 96 0h160c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96l-32-32c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V376c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8v144c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm64 16v96c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16"
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
                  d="M256 48c8.8 0 16 7.2 16 16v128H80V64c0-8.8 7.2-16 16-16zm16 192v224H80V240zM32 64v400h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V304h8c22.1 0 40 17.9 40 40v32c0 39.8 32.2 72 72 72s72-32.2 72-72V155.9c0-19.1-7.6-37.4-21.1-50.9L417 31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33 33V160c0 29.8 20.4 54.9 48 62v154c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64"
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
                  d="M256 32c17.7 0 32 14.3 32 32v128H64V64c0-17.7 14.3-32 32-32zm32 192v256H64V224zM32 64v416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V288h16c26.5 0 48 21.5 48 48v48c0 35.3 28.7 64 64 64s64-28.7 64-64V157.1c0-17.9-7.5-35.1-20.8-47.2l-80.4-73.7c-6.5-6-16.6-5.5-22.6 1s-5.5 16.6 1 22.6L416 84.4V160c0 35.3 28.7 64 64 64v160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-44.2-35.8-80-80-80h-16V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64m448 128c-17.7 0-32-14.3-32-32v-46.3l21.6 19.8c6.6 6.1 10.4 14.6 10.4 23.6z"
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
                  d="M256 16H96c-26.5 0-48 21.5-48 48v352h256V64c0-26.5-21.5-48-48-48M48 496h256v-64H48zm296 16H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V64C32 28.7 60.7 0 96 0h160c35.3 0 64 28.7 64 64v208h8c39.8 0 72 32.2 72 72v40c0 26.5 21.5 48 48 48s48-21.5 48-48V224h-8c-30.9 0-56-25.1-56-56V72.9l-29.4-27c-3.3-3-3.5-8-.5-11.3s8-3.5 11.3-.5l80.4 73.7c11.6 10.6 18.2 25.6 18.2 41.3V384c0 35.3-28.7 64-64 64s-64-28.7-64-64v-40c0-30.9-25.1-56-56-56h-8v208h24c4.4 0 8 3.6 8 8s-3.6 8-8 8m152-362.9c0-11.2-4.7-21.9-13-29.5l-35-32.1V168c0 22.1 17.9 40 40 40h8zM128 80c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM96 96c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32z"
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
                  d="M96 0C60.7 0 32 28.7 32 64v384h288V64c0-35.3-28.7-64-64-64zm16 64h128c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="m384 64 32 32v64c0 29.8 20.4 54.9 48 62v154c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-48.6-39.4-88-88-88h-8v48h8c22.1 0 40 17.9 40 40v32c0 39.8 32.2 72 72 72s72-32.2 72-72V154.5c0-17-6.7-33.3-18.7-45.3L416 32c-8.8-8.8-23.2-8.8-32 0s-8.8 23.2 0 32M0 480c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"
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
