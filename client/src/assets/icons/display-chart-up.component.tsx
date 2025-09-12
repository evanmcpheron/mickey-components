import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DisplayChartUpIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336l10.7 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h69.3l10.7-32H64c-35.3 0-64-28.7-64-64zm64 0v288h448V64zm312 32h80c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-22.1L321 289c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-63-63-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L207 175c9.4-9.4 24.6-9.4 33.9 0l63 63 94.2-94H376c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M512 48c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 416h147.7l-8 48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-51.7l-8-48H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64m188.3 48 8-48h55.3l8 48zM376 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h22.1L304 238.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0L103 279c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87 63 63c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l111-111V200c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24z"
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
                  d="M512 32c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 416h149.1l-10.7 64H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-58.4l-10.7-64H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64m170.9 64 10.7-64h84.9l10.7 64zM368 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h57.4L304 249.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 214.6l68.7 68.7c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7L448 150.6V208c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16z"
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
                  d="M64 16c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zm158.6 400H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H353.4l13.3 80H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h73.2l13.3-80zm16.2 0-13.3 80h125.1l-13.3-80zM496 80H80v256h416zM80 64h416c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16m272 64h88c4.4 0 8 3.6 8 8v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-68.7L325.7 261.7c-1.5 1.5-3.5 2.3-5.7 2.3s-4.2-.8-5.7-2.3L240 187.3 133.7 293.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l112-112c3.1-3.1 8.2-3.1 11.3 0l74.3 74.3L420.7 144H352c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm448 64v288H64V64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 64h448v288H64zm282.7 384H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h69.3l10.7-32h96zM344 112c-13.3 0-24 10.7-24 24s10.7 24 24 24h38.1L304 238.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0l-88 88c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l71-71 63 63c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l95-95v38c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z"
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
