import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FrancSignIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 32c-17.7 0-32 14.3-32 32v256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v-64h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V96h176c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M72 32c-13.3 0-24 10.7-24 24v264H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H96v-80h168c13.3 0 24-10.7 24-24s-10.7-24-24-24H96V80h200c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M104 32c-22.1 0-40 17.9-40 40v248H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v112c0 8.8 7.2 16 16 16s16-7.2 16-16V352h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-96h176c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V72c0-4.4 3.6-8 8-8h200c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 32c-17.7 0-32 14.3-32 32v272H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v120c0 4.4 3.6 8 8 8s8-3.6 8-8V352h136c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V224h200c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V64c0-8.8 7.2-16 16-16h216c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M48 320H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16zm64 64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32V256h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V96h176c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
