import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrademarkIcon: React.FC<
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
                  d="M345.6 108.8c-8.3-11-22.7-15.5-35.7-11.2S288 114.2 288 128v256c0 17.7 14.3 32 32 32s32-14.3 32-32V224l86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224v160c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-13.8-8.8-26-21.9-30.4s-27.5.1-35.7 11.2L464 266.7zM0 128c0 17.7 14.3 32 32 32h64v224c0 17.7 14.3 32 32 32s32-14.3 32-32V160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"
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
                  d="M331.4 105.8c-6.1-8.4-17-11.9-26.8-8.7S288 109.5 288 119.9V392c0 13.3 10.7 24 24 24s24-10.7 24-24V193.5l108.6 148.7c4.5 6.2 11.7 9.8 19.4 9.8s14.9-3.7 19.4-9.8L592 193.5V392c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-10.4-6.7-19.6-16.6-22.8s-20.7.3-26.8 8.7L464 287.3zM0 120c0 13.3 10.7 24 24 24h80v248c0 13.3 10.7 24 24 24s24-10.7 24-24V144h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"
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
                  d="M0 112c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m112 288c0 8.8 7.2 16 16 16s16-7.2 16-16V128h-32zm204.3-298.2c-4.3-5.2-11.4-7.1-17.7-4.8s-10.6 8.3-10.6 15v288c0 8.8 7.2 16 16 16s16-7.2 16-16V156.2l131.7 158c3 3.6 7.5 5.8 12.3 5.8s9.3-2.1 12.3-5.8l131.7-158V400c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-6.7-4.2-12.8-10.6-15s-13.4-.4-17.7 4.8L464 279z"
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
                  d="M0 104c0 4.4 3.6 8 8 8h112v296c0 4.4 3.6 8 8 8s8-3.6 8-8V112h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m302-5.3c-2.2-2.5-5.7-3.4-8.8-2.2s-5.2 4.2-5.2 7.5v304c0 4.4 3.6 8 8 8s8-3.6 8-8V125.3l154 176c1.5 1.7 3.7 2.7 6 2.7s4.5-1 6-2.7l154-176V408c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-3.3-2.1-6.3-5.2-7.5s-6.6-.3-8.8 2.2L464 283.8z"
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
                  d="M309.9 97.6c13.1-4.4 27.5.1 35.7 11.2L464 266.7l118.4-157.9c8.3-11 22.7-15.5 35.7-11.2S640 114.2 640 128v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V224l-86.4 115.2c-6 8.1-15.5 12.8-25.6 12.8s-19.6-4.7-25.6-12.8L352 224v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-13.8 8.8-26 21.9-30.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v224c0 17.7 14.3 32 32 32s32-14.3 32-32V160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
