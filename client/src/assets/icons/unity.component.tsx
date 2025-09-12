import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UnityIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m243.583 91.603 80.112 46.781c2.88 1.642 2.985 6.199 0 7.841l-95.192 55.629a8.75 8.75 0 0 1-8.954 0l-95.192-55.629c-2.932-1.589-2.984-6.252 0-7.841l80.06-46.781V0L0 119.417v238.835l78.384-45.775v-93.563c-.052-3.338 3.823-5.722 6.703-3.921l95.192 55.629a9.09 9.09 0 0 1 4.503 7.842v111.205c.052 3.338-3.823 5.722-6.703 3.92l-80.112-46.781-78.384 45.775L224 512l204.417-119.417-78.384-45.775-80.112 46.781c-2.828 1.749-6.807-.529-6.703-3.92V278.464c0-3.338 1.833-6.305 4.503-7.842l95.193-55.629c2.827-1.748 6.806.477 6.702 3.921v93.563L448 358.252V119.417L243.583 0z"
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
