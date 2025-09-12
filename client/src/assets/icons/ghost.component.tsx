import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GhostIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m40.1 467.1-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0s192 86 192 192v270.2c0 9.8-8 17.8-17.8 17.8-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9l-30.5 35c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-30.5-35c-11.3-12.9-30.7-14.6-44.1-3.9M160 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 192v223.5c26.3-4.9 54.6 3.7 73.6 25.5l6.4 7.3 3.8-4.3c31.9-36.4 88.5-36.4 120.4 0l3.8 4.3 6.4-7.3c19.1-21.8 47.3-30.4 73.6-25.5V192c0-79.5-64.5-144-144-144S48 112.5 48 192m208 320c-5.1 0-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-29.2-33.5c-11.6-13.3-32.1-14-44.5-1.5l-2.3 2.3c-4.2 4.2-10 6.6-16 6.6-12.6.1-22.7-10-22.7-22.5V192C0 86 86 0 192 0s192 86 192 192v265.4c0 12.5-10.1 22.6-22.6 22.6-6 0-11.8-2.4-16-6.6l-2.3-2.3c-12.5-12.5-32.9-11.8-44.5 1.5L269.3 506c-3.3 3.8-8.2 6-13.3 6M96 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M242.7 506c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l29.3-33.4c11.6-13.3 32.1-14 44.5-1.5l2.3 2.3c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6V192C384 86 298 0 192 0S0 86 0 192v265.4C0 469.9 10.1 480 22.6 480c6 0 11.8-2.4 16-6.6l2.3-2.3c12.5-12.5 32.9-11.8 44.5 1.5l29.3 33.4c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l26.6-30.5c12.7-14.6 35.4-14.6 48.2 0zM32 438.1V192c0-88.4 71.6-160 160-160s160 71.6 160 160v246.1c-25.1-14-57.6-9.3-77.6 13.4l-18.4 21-15.8-18.1c-25.5-29.1-70.8-29.1-96.3 0L128 472.5l-18.4-21.1c-20-22.7-52.5-27.4-77.6-13.3M152 192a24 24 0 1 0-48 0 24 24 0 1 0 48 0m104 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M242.7 506c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l29.3-33.4c11.6-13.3 32.1-14 44.5-1.5l2.3 2.3c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6V192C384 86 298 0 192 0S0 86 0 192v265.4C0 469.9 10.1 480 22.6 480c6 0 11.8-2.4 16-6.6l2.3-2.3c12.5-12.5 32.9-11.8 44.5 1.5l29.3 33.4c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l26.6-30.5c12.7-14.6 35.4-14.6 48.2 0zM27.3 462.1c-1.2 1.2-2.9 1.9-4.7 1.9-3.7 0-6.6-3-6.6-6.6V192C16 94.8 94.8 16 192 16s176 78.8 176 176v265.4c0 3.7-3 6.6-6.6 6.6-1.8 0-3.4-.7-4.7-1.9l-2.3-2.3c-19-19-50.2-18-67.9 2.3l-29.3 33.4c-.3.4-.8.6-1.2.6s-.9-.2-1.2-.6L228.1 465c-19.1-21.9-53.1-21.9-72.2 0l-26.6 30.5c-.3.4-.8.6-1.2.6s-.9-.2-1.2-.6L97.5 462c-17.7-20.2-48.9-21.3-67.9-2.3l-2.3 2.3zM128 216a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0m192 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m40.1 467.1-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0s192 86 192 192v270.2c0 9.8-8 17.8-17.8 17.8-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9l-30.5 35c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-30.5-35c-11.3-12.9-30.7-14.6-44.1-3.9M160 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
