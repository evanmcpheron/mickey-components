import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HiveIcon: React.FC<
  IconProps & { type: "brands" | Dimensions }
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
          case "brands":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M260.353 254.878 131.538 33.1a2.208 2.208 0 0 0-3.829.009L.3 254.887a2.23 2.23 0 0 0 0 2.235L129.116 478.9a2.208 2.208 0 0 0 3.83-.009l127.412-221.778a2.24 2.24 0 0 0-.005-2.235m39.078-25.713a2.19 2.19 0 0 0 1.9 1.111h66.509a2.226 2.226 0 0 0 1.9-3.341L259.115 33.111a2.19 2.19 0 0 0-1.9-1.111h-66.508a2.226 2.226 0 0 0-1.9 3.341ZM511.7 254.886 384.9 33.112A2.2 2.2 0 0 0 382.99 32h-66.6a2.226 2.226 0 0 0-1.906 3.34L440.652 256 314.481 476.66a2.226 2.226 0 0 0 1.906 3.34h66.6a2.2 2.2 0 0 0 1.906-1.112L511.7 257.114a2.24 2.24 0 0 0 0-2.228m-145.684 30.031h-66.508a2.19 2.19 0 0 0-1.9 1.111l-108.8 190.631a2.226 2.226 0 0 0 1.9 3.341h66.509a2.19 2.19 0 0 0 1.9-1.111l108.8-190.631a2.226 2.226 0 0 0-1.901-3.341"
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
