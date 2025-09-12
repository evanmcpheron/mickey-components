import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LinkSimpleIcon: React.FC<
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
                  d="M0 256C0 167.6 71.6 96 160 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-53 0-96 43-96 96s43 96 96 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64C71.6 416 0 344.4 0 256m576 0c0 88.4-71.6 160-160 160h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c53 0 96-43 96-96s-43-96-96-96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c88.4 0 160 71.6 160 160m-384-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
                  d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72c-61.9 0-112 50.1-112 112s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72C71.6 416 0 344.4 0 256m576 0c0 88.4-71.6 160-160 160h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160m-392-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M0 256C0 167.6 71.6 96 160 96h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-70.7 0-128 57.3-128 128s57.3 128 128 128h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80C71.6 416 0 344.4 0 256m576 0c0 88.4-71.6 160-160 160h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c70.7 0 128-57.3 128-128s-57.3-128-128-128h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c88.4 0 160 71.6 160 160m-424-16h272c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M0 256C0 167.6 71.6 96 160 96h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88c-79.5 0-144 64.5-144 144s64.5 144 144 144h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88C71.6 416 0 344.4 0 256m576 0c0 88.4-71.6 160-160 160h-88c-4.4 0-8-3.6-8-8s3.6-8 8-8h88c79.5 0 144-64.5 144-144s-64.5-144-144-144h-88c-4.4 0-8-3.6-8-8s3.6-8 8-8h88c88.4 0 160 71.6 160 160m-440-8h304c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M160 256c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 96C71.6 96 0 167.6 0 256s71.6 160 160 160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-53 0-96-43-96-96s43-96 96-96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm256 0h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96 43 96 96s-43 96-96 96h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c88.4 0 160-71.6 160-160S504.4 96 416 96"
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
