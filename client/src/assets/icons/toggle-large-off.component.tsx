import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToggleLargeOffIcon: React.FC<
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
                  d="M192 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0 64h192c106 0 192-86 192-192S490 64 384 64H192C86 64 0 150 0 256s86 192 192 192m143.1-64c30.4-34 48.9-78.8 48.9-128s-18.5-94-48.9-128H384c70.7 0 128 57.3 128 128s-57.3 128-128 128z"
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
                  d="M192 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288m0 48h192c106 0 192-86 192-192S490 64 384 64H192C86 64 0 150 0 256s86 192 192 192m127-48c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144h65c79.5 0 144 64.5 144 144s-64.5 144-144 144z"
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
                  d="M160 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0 32h256c88.4 0 160-71.6 160-160S504.4 96 416 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160m96-32c38.9-29.2 64-75.7 64-128s-25.1-98.8-64-128h160c70.7 0 128 57.3 128 128s-57.3 128-128 128z"
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
                  d="M160 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288m0 16h256c88.4 0 160-71.6 160-160S504.4 96 416 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160m69.8-16c53.4-25.9 90.2-80.7 90.2-144s-36.8-118.1-90.2-144H416c79.5 0 144 64.5 144 144s-64.5 144-144 144z"
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
                  d="M192 128c-70.7 0-128 57.3-128 128s57.3 128 128 128h192c70.7 0 128-57.3 128-128s-57.3-128-128-128zm192-64c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256S86 64 192 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256"
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
