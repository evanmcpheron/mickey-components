import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SirenOnIcon: React.FC<
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
                  d="m69.3 36 48 32c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-11-7.4-14-22.3-6.7-33.3s22.3-14 33.3-6.7m528 40-48 32c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l48-32c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3M24 192h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m528 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24M144 352l25-199.9c4-32 31.2-56.1 63.5-56.1h175c32.3 0 59.5 24 63.5 56.1L496 352H234.1l21.8-174c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9l-22.2 178zm-48 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32z"
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
                  d="m69.3 36 48 32c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-11-7.4-14-22.3-6.7-33.3s22.3-14 33.3-6.7m528 40-48 32c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l48-32c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3M24 192h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m528 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24m-62 112h-48.4l-18.2-146c-1-8-7.8-14-15.9-14h-175c-8.1 0-14.9 6-15.9 14l-18.2 146H150l19-151.9c4-32 31.2-56.1 63.5-56.1h175c32.3 0 59.5 24 63.5 56.1zm-246.1 0 12.2-98c1.1-8.8 9.1-15 17.9-13.9s15 9.1 13.9 17.9l-11.8 94zM496 384H144v48h352zm-352-48h352c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48"
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
                  d="m55.2 33.7 64 32c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2l-64-32c-7.9-4-11.1-13.6-7.2-21.5s13.6-11.1 21.5-7.2m544 28.6-64 32c-7.9 4-17.5.7-21.5-7.2s-.7-17.5 7.2-21.5l64-32c7.9-4 17.5-.7 21.5 7.2s.7 17.5-7.2 21.5M16 192h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m544 0h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16m-68 128h-32.2l-20.5-164c-2-16-15.6-28-31.8-28h-175c-16.1 0-29.8 12-31.8 28l-20.5 164H148l21-167.9c4-32 31.2-56.1 63.5-56.1h175c32.3 0 59.5 24 63.5 56.1zm-250.1 0 14.2-114c1.1-8.8 9.1-15 17.9-13.9s15 9.1 13.9 17.9l-13.8 110zM496 384H144c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m-352-32h352c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48"
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
                  d="M44.1 33.1c-3.8-2.3-8.7-1-11 2.7s-1 8.7 2.7 11l80 48c3.8 2.3 8.7 1 11-2.7s1-8.7-2.7-11zm560 13.7c3.8-2.3 5-7.2 2.7-11s-7.2-5-11-2.7l-80 48c-3.8 2.3-5 7.2-2.7 11s7.2 5 11 2.7zM8 192c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm544 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-60 128-21-167.9C467 120 439.8 96 407.5 96h-175c-32.3 0-59.5 24-63.5 56.1L148 320h16.1l20.7-166c3-24 23.4-42 47.6-42h175c24.2 0 44.6 18 47.6 42l20.7 166zm-271 0 18.9-151.3c.5-4.4-2.6-8.4-6.9-8.9s-8.4 2.6-8.9 6.9L204.9 320zm275 48c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm-352-16c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"
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
                  d="m144 352 25-199.9c4-32 31.2-56.1 63.5-56.1h175c32.3 0 59.5 24 63.5 56.1L496 352H234.1l21.8-174c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9l-22.2 178z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M69.3 36c-11-7.4-25.9-4.4-33.3 6.7S31.6 68.6 42.7 76l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3zm528 40c11-7.4 14-22.3 6.7-33.3s-22.3-14-33.3-6.7l-48 32c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7zM24 192c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm528 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zM128 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
