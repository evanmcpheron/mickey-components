import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderNoneIcon: React.FC<
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
                  d="M32 480a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-96 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64M32 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64M32 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m384-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M32 480a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-96 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64M32 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64M32 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m384-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M32 424a24 24 0 1 0 0 48 24 24 0 1 0 0-48m96-336a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-240a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-432a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-96 144a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-336a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 144a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-384a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 40a24 24 0 1 0 0 48 24 24 0 1 0 0-48m384 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 144a24 24 0 1 0 0-48 24 24 0 1 0 0 48m192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48M32 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48m384-240a24 24 0 1 0 0 48 24 24 0 1 0 0-48M32 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M32 432a16 16 0 1 0 0 32 16 16 0 1 0 0-32m96-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 384a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-224a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-416a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-96 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-384a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 48a16 16 0 1 0 0 32 16 16 0 1 0 0-32m384 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32M32 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32m384-224a16 16 0 1 0 0 32 16 16 0 1 0 0-32M32 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32"
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
                  d="M32 480a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-96 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64M32 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64M32 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m384-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
