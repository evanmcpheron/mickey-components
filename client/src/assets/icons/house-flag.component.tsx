import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseFlagIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M480 0c-17.7 0-32 14.3-32 32v480h64V192h112c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H512c0-17.7-14.3-32-32-32m-64 159L276.8 39.7c-12-10.3-29.7-10.3-41.7 0l-224 192C1 240.4-2.7 254.5 2 267.1S18.6 288 32 288h32v192c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32h64.9-1V159z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M472 0c-13.3 0-24 10.7-24 24v488h48V192h128c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H496v-8c0-13.3-10.7-24-24-24m-56 133L286.3 36.7c-8.5-6.3-20.1-6.3-28.6 0l-248 184c-10.6 7.9-12.9 22.9-5 33.6s22.9 12.9 33.6 5L64 240.2V432c0 44.2 35.8 80 80 80h256c5.5 0 10.8-.6 16-1.6v-50.7c-4.7 2.7-10.2 4.3-16 4.3h-48V344c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40v120h-48c-17.7 0-32-14.3-32-32V204.6L272 85.9l144 106.8zM304 352v112h-64V352z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M464 0c-8.8 0-16 7.2-16 16v496h32V192h144c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H480V16c0-8.8-7.2-16-16-16m16 160V64h128v96zm-64-24L281.6 35.2a15.9 15.9 0 0 0-19.2 0l-256 192c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2L64 224v216c0 39.8 32.2 72 72 72h272c2.7 0 5.4-.2 8-.4v-32.4c-2.6.5-5.3.8-8 .8h-64V352c0-17.7-14.3-32-32-32h-80c-17.7 0-32 14.3-32 32v128h-64c-22.1 0-40-17.9-40-40V200L272 68l144 108zM312 352v128h-80V352z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M456 0c-4.4 0-8 3.6-8 8v504h16V192h160c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H464V8c0-4.4-3.6-8-8-8m8 176V48h160v128zm-48-38L276.8 33.6c-2.8-2.1-6.8-2.1-9.6 0l-256 192c-3.5 2.7-4.3 7.7-1.6 11.2s7.7 4.3 11.2 1.6L64 206v242c0 35.3 28.7 64 64 64h288v-16h-64V344c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24v152h-64c-26.5 0-48-21.5-48-48V194L272 50l144 108zm-80 206v152H208V344c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M416 159 276.8 39.7c-12-10.3-29.7-10.3-41.7 0l-224 192C1 240.4-2.7 254.5 2 267.1S18.6 288 32 288h32v192c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32h65-1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M512 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v480h64V192h112c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16z"
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
