import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AirplayIcon: React.FC<
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
                  d="M480 96H96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h69.5l-50.7 50.7c-4 4-7.4 8.5-10.2 13.3H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h384c53 0 96 43 96 96v192c0 53-43 96-96 96h-8.6c-2.8-4.8-6.2-9.2-10.2-13.3L410.5 352H480c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32M265.4 297.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S429 480.1 416 480.1H160c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z"
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
                  d="M480 80H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h53.5l-34.7 34.7c-4 4-7.4 8.5-10.2 13.3H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h384c53 0 96 43 96 96v192c0 53-43 96-96 96h-8.6c-2.8-4.8-6.2-9.2-10.2-13.3L426.5 368H480c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48M198.6 432h178.8L288 342.6zm112-134.6 128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H160c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128c12.5-12.5 32.8-12.5 45.3 0"
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
                  d="M480 64H96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h37.5l-18.7 18.7c-4 4-7.4 8.5-10.2 13.3H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h384c53 0 96 43 96 96v192c0 53-43 96-96 96h-8.6c-2.8-4.8-6.2-9.2-10.2-13.3L442.5 384H480c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M162.2 435.7c-1.4 1.3-2.2 3.2-2.2 5.2 0 3.9 3.2 7.1 7.1 7.1h241.8c3.9 0 7.1-3.2 7.1-7.1 0-2-.8-3.8-2.2-5.2L293.6 322.2c-1.4-1.3-3.5-2.2-5.6-2.2s-4.2.8-5.6 2.2zm-22-23.3 120.2-113.5c7.4-7 17.4-10.9 27.6-10.9s20.1 3.9 27.6 10.9l120.1 113.5c7.8 7.4 12.3 17.7 12.3 28.5 0 21.6-17.5 39.1-39.1 39.1H167.1c-21.6 0-39.1-17.5-39.1-39.1 0-10.8 4.4-21.1 12.3-28.5z"
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
                  d="M480 48H96c-44.2 0-80 35.8-80 80v192c0 44.2 35.8 80 80 80h21.5l-2.7 2.7c-4 4-7.4 8.5-10.2 13.3H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h384c53 0 96 43 96 96v192c0 53-43 96-96 96h-8.6c-2.8-4.8-6.2-9.2-10.2-13.3l-2.7-2.7H480c44.2 0 80-35.8 80-80V128c0-44.2-35.8-80-80-80M147.5 442.7c-2.2 2.3-3.5 5.4-3.5 8.7 0 7 5.6 12.6 12.6 12.6h262.8c7 0 12.6-5.6 12.6-12.6 0-3.2-1.2-6.3-3.5-8.7L303.4 310.6c-4-4.2-9.6-6.6-15.4-6.6s-11.4 2.4-15.4 6.6zm-11.6-11L261 299.6c7-7.4 16.8-11.6 27-11.6s20 4.2 27 11.6l125.2 132.1c5 5.3 7.8 12.4 7.8 19.7 0 15.8-12.8 28.6-28.6 28.6H156.6c-15.8 0-28.6-12.8-28.6-28.6 0-7.3 2.8-14.4 7.8-19.7z"
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
                  d="M96 96h384c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-69.5l50.7 50.7c4 4 7.4 8.5 10.2 13.3h8.6c53 0 96-43 96-96V128c0-53-43-96-96-96H96C43 32 0 75 0 128v192c0 53 43 96 96 96h8.6c2.8-4.8 6.2-9.2 10.2-13.3l50.7-50.7H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M310.6 297.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
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
