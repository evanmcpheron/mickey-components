import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpLongIcon: React.FC<
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
                  d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192h72v288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V192h72c9.6 0 18.2-5.7 22-14.5"
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
                  d="M143.6 6.5c9.2-8.7 23.7-8.7 32.9 0l129 121.4c9.3 8.8 14.6 21 14.6 33.7 0 25.6-20.7 46.3-46.3 46.3H240V456c0 30.9-25.1 56-56 56h-48c-30.9 0-56-25.1-56-56V208H46.3C20.7 208 0 187.3 0 161.7c0-12.8 5.3-25 14.6-33.7zM50.5 160H104c13.3 0 24 10.7 24 24v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V184c0-13.3 10.7-24 24-24h53.5L160 57z"
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
                  d="M88 160H38.7c-3.7 0-6.7-3-6.7-6.7 0-1.9.8-3.7 2.2-5L160 35.8l125.8 112.5c1.4 1.3 2.2 3.1 2.2 5 0 3.7-3 6.7-6.7 6.7H232c-17.7 0-32 14.3-32 32v272c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V192c0-17.7-14.3-32-32-32M174 5.3c-3.9-3.4-8.8-5.3-14-5.3s-10.1 1.9-14 5.3L12.9 124.5C4.7 131.8 0 142.3 0 153.3 0 174.7 17.3 192 38.7 192H88v272c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V192h49.3c21.4 0 38.7-17.3 38.7-38.7 0-11-4.7-21.5-12.9-28.8z"
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
                  d="M104 176H22.9c-3.8 0-6.9-3.1-6.9-6.9 0-1.8.7-3.5 1.9-4.7L158.1 16.8c.5-.5 1.2-.8 1.9-.8s1.4.3 1.9.8l140.2 147.6c1.2 1.3 1.9 3 1.9 4.7 0 3.8-3.1 6.9-6.9 6.9H216c-8.8 0-16 7.2-16 16v280c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V192c0-8.8-7.2-16-16-16M146.5 5.8 6.3 153.4c-4 4.3-6.3 9.9-6.3 15.8C0 181.8 10.2 192 22.9 192H104v280c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40V192h81.1c12.6 0 22.9-10.2 22.9-22.9 0-5.9-2.3-11.5-6.3-15.8L173.5 5.8C170 2.1 165.1 0 160 0s-10 2.1-13.5 5.8"
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
                  d="M224 192H96v288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M313.4 151.5c6.6 7 8.4 17.2 4.6 26S305.5 192 296 192H24c-9.6 0-18.2-5.7-22-14.5s-2-19 4.6-26l136-144C147.1 2.7 153.4 0 160 0s12.9 2.7 17.4 7.5z"
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
