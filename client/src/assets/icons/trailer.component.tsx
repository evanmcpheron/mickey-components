import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrailerIcon: React.FC<
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
                  d="M48 32C21.5 32 0 53.5 0 80v256c0 26.5 21.5 48 48 48h17.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96H608c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V80c0-26.5-21.5-48-48-48zm32 64c8.8 0 16 7.2 16 16v131.2c-11.4 5.9-22.2 12.9-32 21V112c0-8.8 7.2-16 16-16m96 128c-5.4 0-10.7.2-16 .7V112c0-8.8 7.2-16 16-16s16 7.2 16 16v112.7c-5.3-.5-10.6-.7-16-.7m80 19.2V112c0-8.8 7.2-16 16-16s16 7.2 16 16v152.2c-9.8-8.1-20.6-15.2-32-21M368 96c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16m112 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16M176 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-112a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M64 80h432c8.8 0 16 7.2 16 16v240H275.2c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m224 304h328c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h32c0 53 43 96 96 96s96-43 96-96M136 112c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24m96 0c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24m96 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V136c0-13.3-10.7-24-24-24m96 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V136c0-13.3-10.7-24-24-24M144 384a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M56 64h400c13.3 0 24 10.7 24 24v264H282.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H56c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24m232 320h328c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V88c0-30.9-25.1-56-56-56H56C25.1 32 0 57.1 0 88v240c0 30.9 25.1 56 56 56h40c0 53 43 96 96 96s96-43 96-96m-32 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0M112 96c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16"
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
                  d="M48 48c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h16c4.4 0 8 3.6 8 8s-3.6 8-8 8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h432c26.5 0 48 21.5 48 48v288h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H320c-4.4 0-8-3.6-8-8s3.6-8 8-8h192V80c0-17.7-14.3-32-32-32zm24 48c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8m96 0c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8m96 0c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8m96 0c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8m96 0c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8M272 384a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
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
                  d="M80 96c-8.8 0-16 7.2-16 16v152.2c9.8-8.1 20.6-15.2 32-21V112c0-8.8-7.2-16-16-16m96 128c5.4 0 10.7.2 16 .7V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v112.7c5.3-.5 10.6-.7 16-.7m80 19.2c11.4 5.9 22.2 12.9 32 21V112c0-8.8-7.2-16-16-16s-16 7.2-16 16zM368 96c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16m112 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16zM176 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 32C21.5 32 0 53.5 0 80v256c0 26.5 21.5 48 48 48h17.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96H608c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V80c0-26.5-21.5-48-48-48zm32 64c8.8 0 16 7.2 16 16v131.2c-11.4 5.9-22.2 12.9-32 21V112c0-8.8 7.2-16 16-16m96 128c-5.4 0-10.7.2-16 .7V112c0-8.8 7.2-16 16-16s16 7.2 16 16v112.7c-5.3-.5-10.6-.7-16-.7m80 19.2V112c0-8.8 7.2-16 16-16s16 7.2 16 16v152.2c-9.8-8.1-20.6-15.2-32-21M368 96c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16m112 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
