import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScannerGunIcon: React.FC<
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
                  d="M112 32C50.1 32 0 82.1 0 144c0 50.7 33.8 93.6 80 107.4L8.1 374.7c-13.3 22.8-5.7 52.2 17.1 65.6l53.4 31.4c22.8 13.4 52.3 5.8 65.7-17L261.2 256H304c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm328 0c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm-24 184v16c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H440c-13.3 0-24 10.7-24 24m24 200c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24zm-24-272c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H432c-8.8 0-16 7.2-16 16m16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16 80c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H432c-8.8 0-16 7.2-16 16"
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
                  d="M112 80c-35.3 0-64 28.7-64 64s28.7 64 64 64h192V80zM79.1 251.1C33.3 237.1 0 194.4 0 144 0 82.1 50.1 32 112 32h192c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48h-44L144.3 454.4c-13.4 23-42.9 30.7-65.8 17.2L25 440.1C2.3 426.8-5.4 397.6 7.8 374.8zm52.6 4.9L49.4 398.8l53.5 31.4L204.4 256zM440 32h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24s10.7-24 24-24m-24 184c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24m24 216h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24s10.7-24 24-24m-24-288c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16m16 144h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16s7.2-16 16-16m-16 80c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16"
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
                  d="M112 64c-44.2 0-80 35.8-80 80s35.8 80 80 80h192c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM80 251.4C33.8 237.6 0 194.7 0 144 0 82.1 50.1 32 112 32h192c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48h-42.8L144.3 454.6c-13.4 22.8-42.9 30.5-65.7 17l-53.4-31.4C2.4 426.8-5.2 397.5 8.1 374.7zm34.3 4.6L35.7 390.8c-4.4 7.6-1.9 17.4 5.7 21.9l53.4 31.4c7.6 4.5 17.4 1.9 21.9-5.7L224.1 256H114.4zM432 32h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16s7.2-16 16-16m-16 80c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16m16 80h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16s7.2-16 16-16m-16 80c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16m16 48h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16s7.2-16 16-16m-16 144c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16"
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
                  d="M112 48c-53 0-96 43-96 96s43 96 96 96h192c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM81.1 251.7C34.3 238.3 0 195.1 0 144 0 82.1 50.1 32 112 32h192c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48h-41.5L144.4 454.9c-13.5 22.7-42.8 30.3-65.6 16.9l-53.3-31.4c-22.9-13.5-30.5-43-17-65.8zm162.8 4.3H97.1L22.2 382.7c-9 15.2-3.9 34.9 11.3 43.9L86.9 458c15.2 8.9 34.7 3.9 43.7-11.2zM424 32h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8s3.6-8 8-8m-8 56c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8m0 48c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8m8 56h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8s3.6-8 8-8m-8 88c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8m8 40h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8s3.6-8 8-8m-8 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8m8 80h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M112 32C50.1 32 0 82.1 0 144c0 50.7 33.8 93.6 80 107.4L8.1 374.7c-13.3 22.8-5.7 52.2 17.1 65.6l53.4 31.4c22.8 13.4 52.3 5.8 65.7-17L261.2 256H304c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M440 32c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm0 160c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24zm-24 248v16c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H440c-13.3 0-24 10.7-24 24m16-312c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16 176c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H432c-8.8 0-16 7.2-16 16m16 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
