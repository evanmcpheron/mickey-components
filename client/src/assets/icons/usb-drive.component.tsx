import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UsbDriveIcon: React.FC<
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
                  d="M64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm544 32H480v256h128c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32m-48 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m24 72a24 24 0 1 1-48 0 24 24 0 1 1 48 0"
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
                  d="M64 144c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h336V144zM0 160c0-35.3 28.7-64 64-64h352c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm608-32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H480V128zm-48 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-24 120a24 24 0 1 0 48 0 24 24 0 1 0-48 0"
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
                  d="M64 128c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h352V128zM0 160c0-35.3 28.7-64 64-64h352c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm480 224v-32h128V160H480v-32h128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32zm96-176a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16 112a16 16 0 1 1 0-32 16 16 0 1 1 0 32"
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
                  d="M64 112c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zM0 160c0-35.3 28.7-64 64-64h352c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm480 224v-16h128c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H480v-16h128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32zm64-80a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m32-16a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M480 128h128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H480zm56 80a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 160c0-35.3 28.7-64 64-64h384c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64z"
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
