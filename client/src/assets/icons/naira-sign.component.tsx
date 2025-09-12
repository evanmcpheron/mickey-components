import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NairaSignIcon: React.FC<
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
                  d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V320h100.2l97.2 145.8c7.8 11.7 22.4 17 35.9 12.9s22.7-16.5 22.7-30.6V320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v192h-57.5zM305.1 320H320v22.3zm-119.6-64H128v-86.3z"
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
                  d="M107.8 42.5C101.9 33.8 91 30 80.9 33.1S64 45.5 64 56v200H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v152c0 13.3 10.7 24 24 24s24-10.7 24-24V304h115.6l112.6 165.5c5.9 8.7 16.8 12.5 26.9 9.4S384 466.5 384 456V304h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v200h-83zM285.7 304H336v74zM195 256h-83V134z"
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
                  d="M93.2 38.9c-4-5.8-11.2-8.3-17.9-6.2S64 41 64 48v208H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288h130.7l128.1 185.1c4 5.8 11.2 8.3 17.9 6.2s11.2-8.3 11.2-15.3V288h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v208H243.5zM265.6 288H352v124.8zm-61.1-32H96V99.2z"
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
                  d="M78.5 35.4c-2-2.9-5.6-4.1-9-3S64 36.5 64 40v216H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v200c0 4.4 3.6 8 8 8s8-3.6 8-8V272h145.5l144 204.6c2 2.9 5.6 4.1 9 3s5.6-4.1 5.6-7.6V272h56c4.4 0 8-3.6 8-8s-3.6-8-8-8H384V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v216H233.8zM245 272h123v174.7zm-30.8-16H80V65.3z"
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
                  d="M64 256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32zm64 64h100.2l-42.7-64H128zm134.5-64 42.7 64H320v-64zm121.5 0v64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M86.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9l197.4 296V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 14.1-9.2 26.5-22.7 30.6s-28.1-1.1-35.9-12.9L128 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-14.1 9.2-26.5 22.7-30.6"
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
