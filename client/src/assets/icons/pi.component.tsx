import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PiIcon: React.FC<
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
                  d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h64v156c0 39.7-9.3 78.9-27 114.5l-1.6 3.2c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l1.6-3.2C148.4 382.7 160 333.7 160 284V128h128v238.6c0 45 36.5 81.4 81.4 81.4 30.8 0 59-17.4 72.8-45l2.3-4.7c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3l-2.3 4.7c-3 5.9-9 9.6-15.6 9.6-9.6 0-17.4-7.8-17.4-17.4V128h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h88v165.4c0 44.9-11.4 89-33.2 128.2l-3.8 6.7c-6.4 11.6-2.3 26.2 9.3 32.6s26.2 2.3 32.6-9.3l3.8-6.8c25.8-46.4 39.3-98.5 39.3-151.5V112h144v262.6c0 40.6 32.9 73.4 73.4 73.4 27.8 0 53.2-15.7 65.7-40.6l2.3-4.7c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7l-2.3 4.7c-4.3 8.6-13.1 14.1-22.8 14.1-14.1 0-25.4-11.4-25.4-25.4V112h72c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M16 64C7.2 64 0 71.2 0 80s7.2 16 16 16h112v155c0 61.8-21 121.7-59.6 169.9l-.9 1.1c-5.5 6.9-4.4 17 2.5 22.5s17 4.4 22.5-2.5l.9-1.1C136.5 387 160 320 160 251V96h160v286.6c0 36.1 29.3 65.4 65.4 65.4 24.8 0 47.4-14 58.5-36.2l2.3-4.7c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-2.3 4.7c-5.7 11.3-17.2 18.5-29.9 18.5-18.3 0-33.3-15-33.3-33.4V96h80c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8h120v179c0 63.6-21.6 125.3-61.4 174.9l-.9 1.1c-2.8 3.4-2.2 8.5 1.2 11.2s8.5 2.2 11.2-1.2l.9-1.1c42.1-52.5 65-117.7 65-184.9V80h160v310.6c0 31.7 25.7 57.4 57.4 57.4 21.8 0 41.6-12.3 51.4-31.8l2.3-4.7c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6l-2.3 4.7c-7 14-21.4 22.9-37.1 22.9-22.9 0-41.4-18.6-41.4-41.4V80h120c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h64v156c0 39.7-9.3 78.9-27 114.5l-1.6 3.2c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l1.6-3.2C148.4 382.7 160 333.7 160 284V128h128v238.6c0 45 36.5 81.4 81.4 81.4 30.8 0 59-17.4 72.8-45l2.3-4.7c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3l-2.3 4.7c-3 5.9-9 9.6-15.6 9.6-9.6 0-17.4-7.8-17.4-17.4V128h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
