import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const KerningIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M454.3 23.2c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-240 480c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2zM60.6 113.7c-7.9-15.8-27.1-22.2-42.9-14.3s-22.2 27.1-14.3 42.9l128 256c5.4 10.8 16.5 17.7 28.6 17.7s23.2-6.8 28.6-17.7l128-256c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L160 312.4zm320 284.6 23.2-46.3h152.4l23.2 46.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-128-256C503.2 102.8 492.1 96 480 96s-23.2 6.8-28.6 17.7l-128 256c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3M480 199.6l44.2 88.4h-88.4z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M453.8 34.1c5.6-12 .4-26.3-11.6-31.9s-26.3-.4-31.9 11.6l-216 464c-5.6 12-.4 26.3 11.6 31.9s26.3.4 31.9-11.6zM45.5 109.3c-6-11.9-20.4-16.7-32.2-10.8s-16.7 20.4-10.8 32.2l136 272c4.1 8.1 12.4 13.3 21.5 13.3s17.4-5.1 21.5-13.3l136-272c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L160 338.3zm328.2 293 23.6-50.3h165.4l23.6 50.2c5.6 12 19.9 17.1 31.9 11.5s17.1-19.9 11.5-31.9l-128-272c-4-8.4-12.4-13.8-21.7-13.8s-17.8 5.4-21.7 13.8l-128 272c-5.6 12-.5 26.3 11.5 31.9s26.3.5 31.9-11.5zM480 176.4 540.1 304H419.9z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M454.3 23.2c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-240 480c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2zm-424 81.7c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l144 288c2.7 5.4 8.3 8.8 14.3 8.8s11.6-3.4 14.3-8.8l144-288c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2L160 364.2 30.3 104.8zm320 302.3 35.6-71.2h188.2l35.6 71.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-144-288c-2.7-5.4-8.2-8.8-14.3-8.8s-11.6 3.4-14.3 8.8l-144 288c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2zM480 147.8 558.1 304H401.9z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M447.2 11.5c1.9-4 .3-8.8-3.7-10.7s-8.8-.3-10.7 3.7l-240 496c-1.9 4-.3 8.8 3.7 10.7s8.8.3 10.7-3.7zm-432 88.9c-2-4-6.8-5.6-10.7-3.6s-5.6 6.8-3.6 10.7l152 304c1.4 2.7 4.1 4.4 7.2 4.4s5.8-1.7 7.2-4.4l152-304c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L160 390.1zm320 311.2 37.7-75.6h214.2l37.8 75.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-152-304c-1.4-2.8-4.2-4.5-7.2-4.5s-5.8 1.7-7.2 4.4l-152 304c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6zM480 121.9 579.1 320H380.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M17.7 99.4c15.8-7.9 35-1.5 42.9 14.3L160 312.4l99.4-198.8c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-128 256c-5.4 11-16.5 17.8-28.6 17.8s-23.2-6.8-28.6-17.7l-128-256c-7.9-15.8-1.5-35 14.3-42.9m320 313.2c-15.8-7.9-22.2-27.1-14.3-42.9l128-256C456.8 102.8 467.9 96 480 96s23.2 6.8 28.6 17.7l128 256c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L556.2 352H403.8l-23.2 46.3c-7.9 15.8-27.1 22.2-42.9 14.3M524.2 288 480 199.6 435.8 288z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M447.2 1.7c7.9 4 11.1 13.6 7.2 21.5l-240 480c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l240-480c4-7.9 13.6-11.1 21.5-7.2"
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
