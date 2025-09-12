import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DoorClosedIcon: React.FC<
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
                  d="M96 64c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v384h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64zm288 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M416 48c8.8 0 16 7.2 16 16v400H144V64c0-8.8 7.2-16 16-16zm64 416V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v400H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24zM368 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M416 32c17.7 0 32 14.3 32 32v416H128V64c0-17.7 14.3-32 32-32zm64 448V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-72-224a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M416 16c26.5 0 48 21.5 48 48v432H112V64c0-26.5 21.5-48 48-48zM96 64v432H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m312 192a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80"
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
                  d="M160 0c-35.3 0-64 28.7-64 64v448h384V64c0-35.3-28.7-64-64-64zm224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64M0 480c0-17.7 14.3-32 32-32h64v64H32c-17.7 0-32-14.3-32-32m576 0c0 17.7-14.3 32-32 32h-64v-64h64c17.7 0 32 14.3 32 32"
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
