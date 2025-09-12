import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EthernetIcon: React.FC<
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
                  d="M0 224v192c0 17.7 14.3 32 32 32h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32h-32V96c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32v32H32c-17.7 0-32 14.3-32 32"
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
                  d="M128 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32h32zm48 16v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H48v160h40v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h48v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h48v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h48v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h40V240h-40c-13.3 0-24-10.7-24-24v-40h-40c-13.3 0-24-10.7-24-24v-40z"
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
                  d="M128 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32h32zm224 0H160v48c0 8.8-7.2 16-16 16H96v48c0 8.8-7.2 16-16 16H32v192h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64V224h-48c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16z"
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
                  d="M128 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32h32zm32-16c-8.8 0-16 7.2-16 16v40c0 4.4-3.6 8-8 8H96c-8.8 0-16 7.2-16 16v40c0 4.4-3.6 8-8 8H32c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h72V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h80V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h80V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h80V328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h72c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-40c-4.4 0-8-3.6-8-8v-40c0-8.8-7.2-16-16-16h-40c-4.4 0-8-3.6-8-8V96c0-8.8-7.2-16-16-16z"
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
                  d="M0 224v192c0 17.7 14.3 32 32 32h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32h-32V96c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32v32H32c-17.7 0-32 14.3-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M112 320c8.8 0 16 7.2 16 16v112H96V336c0-8.8 7.2-16 16-16m96 0c8.8 0 16 7.2 16 16v112h-32V336c0-8.8 7.2-16 16-16m96 0c8.8 0 16 7.2 16 16v112h-32V336c0-8.8 7.2-16 16-16m96 0c8.8 0 16 7.2 16 16v112h-32V336c0-8.8 7.2-16 16-16"
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
