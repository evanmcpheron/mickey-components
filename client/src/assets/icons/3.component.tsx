import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Icon3: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 64c0-17.7 14.3-32 32-32h240c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136h-78.6C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 56c0-13.3 10.7-24 24-24h256c9.8 0 18.6 6 22.3 15.1s1.4 19.5-5.7 26.3L147.7 216H188c72.9 0 132 59.1 132 132s-59.1 132-132 132H97.4c-39.4 0-75.4-22.3-93-57.5l-1.9-3.8c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7l1.9 3.8c9.5 19 28.9 31 50.1 31H188c46.4 0 84-37.6 84-84s-37.6-84-84-84H88c-9.8 0-18.6-6-22.3-15.1s-1.4-19.5 5.7-26.3L220.3 80H24C10.7 80 0 69.3 0 56"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 48c0-8.8 7.2-16 16-16h272c6.6 0 12.5 4 14.9 10.2s.8 13.1-4 17.6L120.9 224H192c70.7 0 128 57.3 128 128s-57.3 128-128 128H89.4c-36.4 0-69.6-20.5-85.9-53.1l-1.9-3.8c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l1.9 3.8C43 434.3 65.2 448 89.4 448H192c53 0 96-43 96-96s-43-96-96-96H80c-6.6 0-12.5-4-14.9-10.2s-.8-13.1 4-17.6L247.1 64H16C7.2 64 0 56.8 0 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 40c0-4.4 3.6-8 8-8h280c3.3 0 6.3 2.1 7.5 5.2s.3 6.6-2.2 8.8L93 224h99c70.7 0 128 57.3 128 128s-57.3 128-128 128H90c-38.4 0-73.1-22.9-88.2-58.2l-1.2-2.6c-1.7-4.1.1-8.8 4.2-10.5s8.8.1 10.5 4.2l1.1 2.7C29.1 444.9 58 464 90 464h102c61.9 0 112-50.1 112-112s-50.1-112-112-112H72c-3.3 0-6.3-2.1-7.5-5.2s-.3-6.6 2.2-8.8L267 48H8c-4.4 0-8-3.6-8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64c0-17.7 14.3-32 32-32h240c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136h-78.6C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
