import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SprayCanIcon: React.FC<
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
                  d="M128 0h64c17.7 0 32 14.3 32 32v96H96V32c0-17.7 14.3-32 32-32M0 256c0-53 43-96 96-96h128c53 0 96 43 96 96v208c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm240 80a80 80 0 1 0-160 0 80 80 0 1 0 160 0m16-272a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M128 0c-17.7 0-32 14.3-32 32v96h128V32c0-17.7-14.3-32-32-32zm96 208c26.5 0 48 21.5 48 48v184c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V256c0-26.5 21.5-48 48-48zM96 160c-53 0-96 43-96 96v184c0 39.8 32.2 72 72 72h176c39.8 0 72-32.2 72-72V256c0-53-43-96-96-96zm128 176a64 64 0 1 0-128 0 64 64 0 1 0 128 0m96-272a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-128-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M192 32v64h32V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v64h32V32zm96 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-64 72c35.3 0 64 28.7 64 64v216c0 22.1-17.9 40-40 40H72c-22.1 0-40-17.9-40-40V224c0-35.3 28.7-64 64-64zM96 128c-53 0-96 43-96 96v216c0 39.8 32.2 72 72 72h176c39.8 0 72-32.2 72-72V224c0-53-43-96-96-96zm64 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160M408 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-72-120a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M96 40v88h16V40c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h16V40c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40m128 136c44.2 0 80 35.8 80 80v192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V256c0-44.2 35.8-80 80-80zM96 160c-53 0-96 43-96 96v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V256c0-53-43-96-96-96zm136 176a72 72 0 1 1-144 0 72 72 0 1 1 144 0m-72-88a88 88 0 1 0 0 176 88 88 0 1 0 0-176M320 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m112-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-112-80a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M256 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M80 336a80 80 0 1 1 160 0 80 80 0 1 1-160 0M384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 0h64c17.7 0 32 14.3 32 32v96H96V32c0-17.7 14.3-32 32-32M0 256c0-53 43-96 96-96h128c53 0 96 43 96 96v208c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm240 80a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
