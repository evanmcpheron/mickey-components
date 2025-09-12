import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BreadSliceButterIcon: React.FC<
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
                  d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64m182.6 73.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0l50.7-50.7c12.5-12.5 12.5-32.8 0-45.3l-50.7-50.7c-12.5-12.5-32.8-12.5-45.3 0z"
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
                  d="M112 256v176h288V256c0-26.5 21.5-48 48-48 8.8 0 16-7.2 16-16 0-34.5-24.6-62.3-74.9-83.9C340.2 87.2 282.8 80 256 80s-84.2 7.2-133.1 28.1C72.6 129.7 48 157.5 48 192c0 8.8 7.2 16 16 16 26.5 0 48 21.5 48 48m336 0v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64m-265.4 9.4 50.7-50.7c12.5-12.5 32.8-12.5 45.3 0l50.7 50.7c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3"
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
                  d="M96 256v176c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V256c0-17.7 14.3-32 32-32s32-14.3 32-32c0-44.3-32.4-76.2-84.6-98.6C344.1 71.4 284.5 64 256 64s-88.1 7.4-139.4 29.4C64.4 115.8 32 147.7 32 192c0 17.7 14.3 32 32 32s32 14.3 32 32m352 0v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64m-254.1 20.7c-6.2 6.2-6.2 16.4 0 22.6l50.7 50.7c6.2 6.2 16.4 6.2 22.6 0l50.7-50.7c6.2-6.2 6.2-16.4 0-22.6L267.2 226c-6.2-6.2-16.4-6.2-22.6 0zm96-73.4 50.7 50.7c18.7 18.7 18.7 49.1 0 67.9l-50.7 50.7c-18.7 18.7-49.1 18.7-67.9 0l-50.7-50.7c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7c18.7-18.7 49.1-18.7 67.9 0"
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
                  d="M80 256v176c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V256c0-8.8 7.2-16 16-16 26.5 0 48-21.5 48-48 0-54.2-40.2-90.1-94.3-113.3C348.1 55.7 286.3 48 256 48s-92.1 7.7-145.7 30.7C56.2 101.9 16 137.8 16 192c0 26.5 21.5 48 48 48 8.8 0 16 7.2 16 16m368 0v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64m-259.7 15c-9.4 9.4-9.4 24.6 0 33.9l50.7 50.8c9.4 9.4 24.6 9.4 33.9 0l50.8-50.7c9.4-9.4 9.4-24.6 0-33.9L273 220.3c-9.4-9.4-24.6-9.4-33.9 0zm96-62.1 50.7 50.8c15.6 15.6 15.6 40.9 0 56.6L284.3 367c-15.6 15.6-40.9 15.6-56.6 0L177 316.3c-15.6-15.6-15.6-40.9 0-56.6l50.7-50.7c15.6-15.6 40.9-15.6 56.6 0z"
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
                  d="m233.4 214.6-50.7 50.7c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0l50.7-50.7c12.5-12.5 12.5-32.8 0-45.3l-50.7-50.7c-12.5-12.5-32.8-12.5-45.3 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64m182.6 73.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0l50.7-50.7c12.5-12.5 12.5-32.8 0-45.3l-50.7-50.7c-12.5-12.5-32.8-12.5-45.3 0z"
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
