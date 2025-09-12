import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SignalSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L608 451.2V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v369.1l-64-50.2V128c0-17.7-14.3-32-32-32s-32 14.3-32 32v172.8l-64-50.2V224c0-17.7-14.3-32-32-32-10.7 0-20.1 5.2-25.9 13.2zM576 512h-.3.6zm-96-32v-5.8l-64-50.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32M352 373.3l-64-50.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32zM192 288c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32M96 416c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L600 445V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v383.3l-80-62.7V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v187l-80-62.7V216c0-13.3-10.7-24-24-24-10.4 0-19.2 6.6-22.6 15.8zM576 512h-.2.5-.2zm-104-24v-20.1l-48-37.8V488c0 13.3 10.7 24 24 24s24-10.7 24-24M344 367l-48-37.8V488c0 13.3 10.7 24 24 24s24-10.7 24-24zm-152-79c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24V312c0-13.3-10.7-24-24-24M64 384c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24"
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
                  d="M592 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v347.9l32 25.3zM432 496c0 8.8 7.2 16 16 16s16-7.2 16-16v-44.8L432 426zm32-384c0-8.8-7.2-16-16-16s-16 7.2-16 16v150.9l32 25.3zM304 324.9V496c0 8.8 7.2 16 16 16s16-7.2 16-16V350.2zM192 288c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16M64 384c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M584 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v352.1l16 12.6zM440 504c0 4.4 3.6 8 8 8s8-3.6 8-8v-48.9l-16-12.6zm16-400c0-4.4-3.6-8-8-8s-8 3.6-8 8v155l16 12.6zM312 341.4V504c0 4.4 3.6 8 8 8s8-3.6 8-8V354zM192 288c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8s8-3.6 8-8V296c0-4.4-3.6-8-8-8M64 384c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V392c0-4.4-3.6-8-8-8M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M608 451.2V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v369.1l64 50.2zM480 350.9V128c0-17.7-14.3-32-32-32s-32 14.3-32 32v172.8l64 50.2zM352 250.6V224c0-17.7-14.3-32-32-32-10.7 0-20.1 5.2-25.9 13.2zM576 512h-.3.6zm-96-32v-5.8l-64-50.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32M352 373.3l-64-50.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32zM192 288c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-17.7-14.3-32-32-32M96 416c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
