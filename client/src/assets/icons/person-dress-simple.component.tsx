import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonDressSimpleIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0M50.7 206.4c7.8-27.5 33-46.4 61.5-46.4h31.4c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8H192v80c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-80H42.4c-21.3 0-36.6-20.3-30.8-40.8z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128M96.9 219.6 63.6 336h128.8l-33.3-116.4c-2-6.9-8.2-11.6-15.4-11.6h-31.4c-7.1 0-13.4 4.7-15.4 11.6m-46.2-13.2c7.8-27.5 33-46.4 61.5-46.4h31.4c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8H192v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V384h-32v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V384H42.4c-21.3 0-36.6-20.3-30.8-40.8z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m17.5 151.2L42.4 352h171.2l-39.1-136.8c-3.9-13.7-16.5-23.2-30.8-23.2h-31.4c-14.3 0-26.8 9.5-30.8 23.2m-30.8-8.8c7.8-27.5 33-46.4 61.5-46.4h31.4c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8H192v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H42.4c-21.3 0-36.6-20.3-30.8-40.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M176 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0M64 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0m2.1 146.8L27 347.6c-2.9 10.2 4.8 20.4 15.4 20.4h171.2c10.6 0 18.3-10.2 15.4-20.4l-39.1-136.8c-5.9-20.6-24.7-34.8-46.2-34.8h-31.4c-21.4 0-40.3 14.2-46.2 34.8M136 384h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H42.4c-21.3 0-36.6-20.3-30.8-40.8l39.1-136.8c7.8-27.5 33-46.4 61.5-46.4h31.4c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8H200v96c0 17.7-14.3 32-32 32s-32-14.3-32-32zm48 0h-32v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm-112 0v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112.3 160c-28.6 0-53.7 18.9-61.5 46.4L11.7 343.2C5.8 363.7 21.2 384 42.4 384H64v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-80h21.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.9-27.5-33-46.4-61.5-46.4z"
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
