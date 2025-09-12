import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HospitalUserIcon: React.FC<
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
                  d="M48 0C21.5 0 0 21.5 0 48v208h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v64h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v80c0 26.5 21.5 48 48 48h217.9c-6.3-10.2-9.9-22.2-9.9-35.1 0-46.9 25.8-87.8 64-109.2V48c0-26.5-21.5-48-48-48zm104 64h16c8.8 0 16 7.2 16 16v24h24c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-24v24c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-24h-24c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h24V80c0-8.8 7.2-16 16-16m360 208a80 80 0 1 0-160 0 80 80 0 1 0 160 0M288 477.1c0 19.3 15.6 34.9 34.9 34.9h218.2c19.3 0 34.9-15.6 34.9-34.9 0-51.4-41.7-93.1-93.1-93.1H381.1c-51.4 0-93.1 41.7-93.1 93.1"
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
                  d="M64 48h192c8.8 0 16 7.2 16 16v351.7c11.3-20 27.9-36.7 48-47.9V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h192c3.2 0 6.4-.2 9.5-.7-6-10-9.5-21.8-9.5-34.4 0-4.4.2-8.7.7-13H64c-8.8 0-16-7.2-16-16V416h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H48v-48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V64c0-8.8 7.2-16 16-16m72 64v24h-24c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-24h24c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-24v-24c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16m376 160a80 80 0 1 0-160 0 80 80 0 1 0 160 0M288 477.1c0 19.3 15.6 34.9 34.9 34.9h218.2c19.3 0 34.9-15.6 34.9-34.9 0-51.4-41.7-93.1-93.1-93.1H381.1c-51.4 0-93.1 41.7-93.1 93.1"
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h192c3.2 0 6.4-.2 9.5-.7-5.5-9.2-8.9-19.9-9.4-31.3H64c-17.7 0-32-14.3-32-32v-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v329.4c9.2-10.2 20-18.9 32-25.6V64c0-35.3-28.7-64-64-64zm80 80c-13.3 0-24 10.7-24 24v16h-16c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h16v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16h16c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-16v-16c0-13.3-10.7-24-24-24zm8 56v-24h16v24c0 8.8 7.2 16 16 16h24v16h-24c-8.8 0-16 7.2-16 16v24h-16v-24c0-8.8-7.2-16-16-16h-24v-16h24c8.8 0 16-7.2 16-16m232 136a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M320 477.1c0-33.7 27.4-61.1 61.1-61.1h101.8c33.7 0 61.1 27.4 61.1 61.1 0 1.6-1.3 2.9-2.9 2.9H322.9c-1.6 0-2.9-1.3-2.9-2.9m61.1-93.1c-51.4 0-93.1 41.7-93.1 93.1 0 19.3 15.6 34.9 34.9 34.9h218.2c19.3 0 34.9-15.6 34.9-34.9 0-51.4-41.7-93.1-93.1-93.1H381.1"
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
                  d="M0 56C0 25.1 25.1 0 56 0h208c30.9 0 56 25.1 56 56v311.8c-5.6 3.1-11 6.7-16 10.7V56c0-22.1-17.9-40-40-40H56c-22.1 0-40 17.9-40 40v216h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v80h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v72c0 22.1 17.9 40 40 40h202.8c1.7 5.7 4.1 11.1 7.2 16H56c-30.9 0-56-25.1-56-56zm152 0h16c13.3 0 24 10.7 24 24v16h16c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-16v16c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-16h-16c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h16V80c0-13.3 10.7-24 24-24m-8 24v24c0 4.4-3.6 8-8 8h-24c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h24c4.4 0 8 3.6 8 8v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24c0-4.4 3.6-8 8-8h24c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-24c-4.4 0-8-3.6-8-8V80c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8m352 192a64 64 0 1 0-128 0 64 64 0 1 0 128 0M304 477.1c0 10.4 8.5 18.9 18.9 18.9h218.2c10.4 0 18.9-8.5 18.9-18.9 0-42.6-34.5-77.1-77.1-77.1H381.1c-42.6 0-77.1 34.5-77.1 77.1M432 192a80 80 0 1 1 0 160 80 80 0 1 1 0-160m-50.9 192h101.8c51.4 0 93.1 41.7 93.1 93.1 0 19.3-15.6 34.9-34.9 34.9H322.9c-19.3 0-34.9-15.6-34.9-34.9 0-51.4 41.7-93.1 93.1-93.1"
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
                  d="M0 48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48v319.7c-38.2 21.4-64 62.3-64 109.2 0 12.9 3.6 24.9 9.9 35.1H48c-26.5 0-48-21.5-48-48v-80h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H0v-64h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H0zm136 32v24h-24c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-24h24c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-24V80c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-50.9 32c-51.4 0-93.1 41.7-93.1 93.1 0 19.3 15.6 34.9 34.9 34.9h218.2c19.3 0 34.9-15.6 34.9-34.9 0-51.4-41.7-93.1-93.1-93.1z"
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
