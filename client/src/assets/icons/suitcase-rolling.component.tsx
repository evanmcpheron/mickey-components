import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SuitcaseRollingIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72h-96zm176 72h-32V56c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v72H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64 0 17.7 14.3 32 32 32s32-14.3 32-32h128c0 17.7 14.3 32 32 32s32-14.3 32-32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64m-208 96h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 128h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 56v72h96V56c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m-48 72V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56v72h32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H112v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm-32 48c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16zm32 72c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24m0 112c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 48v80h128V48c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m-32 80V48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v80h32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H96v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zM80 448h240c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32zm16-192c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16m0 96c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 40v88h160V40c0-13.3-10.7-24-24-24H136c-13.3 0-24 10.7-24 24m-16 88V40c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v88h32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32H128c0 17.7-14.3 32-32 32s-32-14.3-32-32c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zM80 480c0 8.8 7.2 16 16 16s16-7.2 16-16zm-8-16h248c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48zm200 16c0 8.8 7.2 16 16 16s16-7.2 16-16zM80 248c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-4.4 0-8-3.6-8-8m0 112c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-4.4 0-8-3.6-8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72h48V56c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v72h48zM96 512c17.7 0 32-14.3 32-32H64c0 17.7 14.3 32 32 32m192 0c17.7 0 32-14.3 32-32h-64c0 17.7 14.3 32 32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 128c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zm48 96h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 128h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
