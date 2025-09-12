import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LeftIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c9.2-9.2 22.9-11.9 34.9-6.9S224.1 83 224.1 96v96h184c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-184v96c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-160-160z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m50.4 256 149.9-142.7c.8-.8 2-1.3 3.2-1.3 2.5 0 4.6 2 4.6 4.6V200c0 13.3 10.7 24 24 24h168v64h-168c-13.3 0-24 10.7-24 24v83.4c0 2.5-2 4.6-4.6 4.6-1.2 0-2.3-.5-3.2-1.3zm153-192c-13.5 0-26.5 5.2-36.3 14.5L13.2 225.1C4.8 233.2 0 244.3 0 256s4.8 22.8 13.2 30.9l154 146.6c9.8 9.3 22.8 14.5 36.3 14.5 29 0 52.6-23.5 52.6-52.6V336h144c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-144v-59.4c0-29-23.5-52.6-52.6-52.6z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 258.3v-4.6c0-4.4 1.8-8.6 5-11.6L186.8 99.5c2.3-2.2 5.4-3.5 8.7-3.5 6.9 0 12.6 5.6 12.6 12.6V192c0 8.8 7.2 16 16 16h176c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-176c-8.8 0-16 7.2-16 16v83.4c0 6.9-5.6 12.6-12.6 12.6-3.2 0-6.3-1.2-8.7-3.5L37 269.9c-3.2-3-5-7.2-5-11.6M195.4 64c-11.4 0-22.4 4.4-30.7 12.3L14.9 219C5.4 228 0 240.6 0 253.7v4.6C0 271.4 5.4 284 14.9 293l149.8 142.7c8.3 7.9 19.3 12.3 30.7 12.3 24.6 0 44.6-20 44.6-44.6V336h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H240v-67.4C240 84 220 64 195.4 64"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 256c0-8.1 3.2-15.9 9-21.7L173.4 85.9c3.8-3.8 9-5.9 14.3-5.9 11.2 0 20.3 9.1 20.3 20.3V200c0 4.4 3.6 8 8 8h192c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H216c-4.4 0-8 3.6-8 8v99.7c0 11.2-9.1 20.3-20.3 20.3-5.4 0-10.5-2.1-14.3-5.9L25 277.7c-5.7-5.7-9-13.5-9-21.7M187.7 64c-9.6 0-18.9 3.8-25.7 10.6L13.6 223C4.9 231.8 0 243.6 0 256s4.9 24.2 13.7 33l148.4 148.4c6.8 6.8 16 10.6 25.7 10.6 20 0 36.3-16.2 36.3-36.3V320h184c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-184v-91.7c0-20-16.2-36.3-36.3-36.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 320V192h184c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 192V96c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V192"
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
