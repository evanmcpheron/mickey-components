import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeadphonesSimpleIcon: React.FC<
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
                  d="M256 80C141.1 80 48 173.1 48 288v104c0 13.3-10.7 24-24 24S0 405.3 0 392V288C0 146.6 114.6 32 256 32s256 114.6 256 256v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208M80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-16c-35.3 0-64-28.7-64-64zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-16c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
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
                  d="M256 80C141.1 80 48 173.1 48 288v104c0 13.3-10.7 24-24 24S0 405.3 0 392V288C0 146.6 114.6 32 256 32s256 114.6 256 256v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208m-96 352V320c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32m0-160h16c17.7 0 32 14.3 32 32v144c0 17.7-14.3 32-32 32h-16c-44.2 0-80-35.8-80-80v-48c0-44.2 35.8-80 80-80m192 48v112c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32m80 32v48c0 44.2-35.8 80-80 80h-16c-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32h16c44.2 0 80 35.8 80 80"
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
                  d="M32 288C32 164.3 132.3 64 256 64s224 100.3 224 224v112c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-141.4-114.6-256-256-256S0 146.6 0 288v112c0 8.8 7.2 16 16 16s16-7.2 16-16zm128 0v160h-16c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48zm-16-32c-44.2 0-80 35.8-80 80v64c0 44.2 35.8 80 80 80h16c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32zm208 32h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-16zm16-32h-16c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h16c44.2 0 80-35.8 80-80v-64c0-44.2-35.8-80-80-80"
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
                  d="M16 288C16 155.5 123.5 48 256 48s240 107.5 240 240v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88c0-141.4-114.6-256-256-256S0 146.6 0 288v88c0 4.4 3.6 8 8 8s8-3.6 8-8zm128-16c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16h-16c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64zm-16-16c-44.2 0-80 35.8-80 80v64c0 44.2 35.8 80 80 80h16c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32zm240 16h16c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-16c-8.8 0-16-7.2-16-16V288c0-8.8 7.2-16 16-16m16-16h-16c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h16c44.2 0 80-35.8 80-80v-64c0-44.2-35.8-80-80-80"
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
                  d="M256 80C141.1 80 48 173.1 48 288v104c0 13.3-10.7 24-24 24S0 405.3 0 392V288C0 146.6 114.6 32 256 32s256 114.6 256 256v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h16c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32zm224 0h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h16c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64"
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
