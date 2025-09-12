import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderCenterHIcon: React.FC<
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
                  d="M32 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-96 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-384a32 32 0 1 0 0 64 32 32 0 1 0 0-64M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m384-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M32 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-96 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-384a32 32 0 1 0 0 64 32 32 0 1 0 0-64M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m384-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64M24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zM32 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48m96-384a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48m192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-336a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-96 336a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-336a24 24 0 1 0 0-48 24 24 0 1 0 0 48m192 336a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-384a24 24 0 1 0 0 48 24 24 0 1 0 0-48M224 328a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 328a24 24 0 1 0 0 48 24 24 0 1 0 0-48m384-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 136a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zM32 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 384a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96-384a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 384a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-96 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-384a16 16 0 1 0 0 32 16 16 0 1 0 0-32M224 336a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 336a16 16 0 1 0 0 32 16 16 0 1 0 0-32m384-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 144a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M32 416a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-384a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-448a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-96 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-448a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-384a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64M32 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m384-256a32 32 0 1 0 0 64 32 32 0 1 0 0-64M32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
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
