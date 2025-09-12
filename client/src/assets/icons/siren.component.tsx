import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SirenIcon: React.FC<
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
                  d="M73 152.1 48 352h57.9l22.2-178c1.1-8.8 9.1-15 17.9-13.9s15 9.1 13.9 17.9l-21.8 174H400l-25-199.9C371 120 343.8 96 311.5 96h-175C104.2 96 77 120 73 152.1M32 384c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"
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
                  d="M345.6 304H394l-19-151.9C371 120 343.8 96 311.5 96h-175C104.2 96 77 120 73 152.1L54 304h48.4l18.2-146c1-8 7.8-14 15.9-14h175c8.1 0 14.9 6 15.9 14zm-165.5 0 11.8-94c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9l-12.2 98zM48 384h352v48H48zm-48 0v48c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48"
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
                  d="M363.8 320H396l-21-167.9C371 120 343.8 96 311.5 96h-175C104.2 96 77 120 73 152.1L52 320h32.2l20.5-164c2-16 15.6-28 31.8-28h175c16.1 0 29.8 12 31.8 28zm-185.6 0L192 210c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9l-14.3 114h32.2zM48 384h352c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M0 400v32c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48"
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
                  d="M375 152.1 396 320h-16.1l-20.8-166c-3-24-23.4-42-47.6-42h-175c-24.2 0-44.6 18-47.6 42L68.1 320H52l21-167.9C77 120 104.2 96 136.5 96h175c32.3 0 59.5 24 63.5 56.1m-231.1 16.6L125 320h-16.1l19.2-153.3c.5-4.4 4.5-7.5 8.9-6.9s7.5 4.5 6.9 8.9M48 368c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zM0 400c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
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
                  d="m48 352 25-199.9C77 120 104.2 96 136.5 96h175c32.3 0 59.5 24 63.5 56.1L400 352H138.1l21.8-174c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9l-22.2 178z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
