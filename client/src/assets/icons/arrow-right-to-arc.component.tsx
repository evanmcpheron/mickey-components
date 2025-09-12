import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowRightToArcIcon: React.FC<
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
                  d="M448 256c0-106-86-192-192-192-17.7 0-32-14.3-32-32s14.3-32 32-32c141.4 0 256 114.6 256 256S397.4 512 256 512c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192M230.6 121.4l112 112c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l57.4-57.4H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h210.7l-57.4-57.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0z"
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
                  d="M464 256c0-114.9-93.1-208-208-208-13.3 0-24-10.7-24-24s10.7-24 24-24c141.4 0 256 114.6 256 256S397.4 512 256 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c114.9 0 208-93.1 208-208M232.3 134.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6s-2.8 13-7.7 17.6l-112 104c-9.7 9-24.9 8.5-33.9-1.3s-8.5-24.9 1.3-33.9l67.2-62.4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h242.9l-67.2-62.4c-9.7-9-10.3-24.2-1.3-33.9s24.2-10.3 33.9-1.3"
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
                  d="M480 256c0-123.7-100.3-224-224-224-8.8 0-16-7.2-16-16s7.2-16 16-16c141.4 0 256 114.6 256 256S397.4 512 256 512c-8.8 0-16-7.2-16-16s7.2-16 16-16c123.7 0 224-100.3 224-224M202.6 116l144 128c3.4 3 5.4 7.4 5.4 12s-2 8.9-5.4 12l-144 128c-6.6 5.9-16.7 5.3-22.6-1.3s-5.3-16.7 1.3-22.6L293.9 272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h277.9L181.4 140c-6.6-5.9-7.2-16-1.3-22.6s16-7.2 22.6-1.3z"
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
                  d="M496 256c0-132.5-107.5-240-240-240-4.4 0-8-3.6-8-8s3.6-8 8-8c141.4 0 256 114.6 256 256S397.4 512 256 512c-4.4 0-8-3.6-8-8s3.6-8 8-8c132.5 0 240-107.5 240-240M197.2 121.9l152 128c1.8 1.5 2.8 3.8 2.8 6.1s-1 4.6-2.8 6.1l-152 128c-3.4 2.8-8.4 2.4-11.3-1s-2.4-8.4 1-11.3L322.1 264H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h314.1L186.8 134.1c-3.4-2.8-3.8-7.9-1-11.3s7.9-3.8 11.3-1z"
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
                  d="M256 64c106 0 192 86 192 192s-86 192-192 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c141.4 0 256-114.6 256-256S397.4 0 256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M185.4 121.4c12.5-12.5 32.8-12.5 45.3 0l112 112c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l57.3-57.4H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h210.7l-57.4-57.4c-12.5-12.5-12.5-32.8 0-45.3z"
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
