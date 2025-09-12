import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiscDriveIcon: React.FC<
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
                  d="M32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm192 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0"
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
                  d="M80 96v336h352V96c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16m400 0v336h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64M112 256a144 144 0 1 1 288 0 144 144 0 1 1-288 0m176 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M96 64h320c17.7 0 32 14.3 32 32v352H64V96c0-17.7 14.3-32 32-32m384 384V96c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v352H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-224-64a128 128 0 1 1 0-256 128 128 0 1 1 0 256M96 256a160 160 0 1 0 320 0 160 160 0 1 0-320 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M104 48h304c30.9 0 56 25.1 56 56v360H48V104c0-30.9 25.1-56 56-56m376 416V104c0-39.8-32.2-72-72-72H104c-39.8 0-72 32.2-72 72v360H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-64-208a160 160 0 1 0-320 0 160 160 0 1 0 320 0M256 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-16 144a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 192a160 160 0 1 0 0-320 160 160 0 1 0 0 320"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm192 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0"
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
