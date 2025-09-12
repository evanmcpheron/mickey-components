import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GunIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H32C14.3 64 0 78.3 0 96v112c0 17.7 14.3 32 32 32h10c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352h104.4c23.7 0 44.8-14.9 52.7-37.2l26.8-74.8H432c8.5 0 16.6-3.4 22.6-9.4l22.7-22.6H544c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-16zM321.4 304H229l16-64h105l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128h384c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H40C17.9 64 0 81.9 0 104v96c0 22.1 17.9 40 40 40h2c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h112c14.7 0 27.5-10 31-24.2L233 352h88.5c23.7 0 44.8-14.9 52.7-37.2l26.7-74.8h32.5c10.6 0 20.8-4.2 28.3-11.7l20.2-20.3H536c22.1 0 40-17.9 40-40v-64c0-22.1-17.9-40-40-40h-8zM245 304l16-64h89l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zm-33.5-64-48 192h-79l35.1-140.6c4.5-18.1 2.5-35.9-4.3-51.4h96.1zm55.5-48H48v-80h480v48h-49.4c-10.6 0-20.8 4.2-28.3 11.7L430.1 192z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M496 32c8.8 0 16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32h-57.4L464 230.6c-6 6-14.1 9.4-22.6 9.4h-46.1l-28.6 80.1c-6.8 19.1-24.9 31.9-45.2 31.9H233l-26 103.8c-3.5 14.2-16.3 24.2-31 24.2H64c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l40.1-160.4c5-20.2-10.2-39.8-31-39.8H32c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h448V48c0-8.8 7.2-16 16-16M241 320h80.5c6.8 0 12.8-4.3 15.1-10.6l24.7-69.4H261zM32 96v112h409.4l22.6-22.6c6-6 14.1-9.4 22.6-9.4H544V96H32m196 144H97.5c8 13.7 10.9 30.5 6.7 47.5L64 448h112z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M504 32c4.4 0 8 3.6 8 8v24h24c22.1 0 40 17.9 40 40v64c0 22.1-17.9 40-40 40h-49.4c-2.1 0-4.2.8-5.7 2.3L458.3 233c-4.5 4.5-10.6 7-17 7h-59.5l-22.9 68.6c-5.5 16.4-20.7 27.4-38 27.4H237l-30 119.8c-3.5 14.2-16.3 24.2-31 24.2H64c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l40.1-160.4c5-20.2-10.2-39.8-31-39.8H40c-22.1 0-40-17.9-40-40v-96c0-22.1 17.9-40 40-40h456V40c0-4.4 3.6-8 8-8M320.9 320c10.3 0 19.5-6.6 22.8-16.4l21.2-63.6H261l-20 80h80zM77.8 240c10.1 11.3 14.9 27.3 10.8 43.6L48.5 444.1c-1.2 4.8-.1 9.8 2.9 13.7S59.1 464 64 464h112c7.3 0 13.7-5 15.5-12.1l53-211.9zM40 80c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h401.4c2.1 0 4.2-.8 5.7-2.3l22.6-22.7c4.5-4.5 10.6-7 17-7H536c13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24H40m32 48h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8s3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M80 128h384c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m241.4 224H217l12-48h92.5c3.4 0 6.4-2.1 7.5-5.3l21-58.7h51l-26.7 74.8c-8 22.3-29.1 37.2-52.7 37.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M504 32c13.3 0 24 10.7 24 24v8h16c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32h-66.7l-22.6 22.6c-6 6-14.1 9.4-22.6 9.4H245l-54 215.8c-3.5 14.2-16.3 24.2-31 24.2H64c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l40.1-160.4c5-20.2-10.2-39.8-31-39.8H32c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h448v-8c0-13.3 10.7-24 24-24M80 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
