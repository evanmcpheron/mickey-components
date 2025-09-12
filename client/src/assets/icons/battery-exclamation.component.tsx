import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BatteryExclamationIcon: React.FC<
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
                  d="M208 96v64H80c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h118.7c-4.3 9.8-6.7 20.6-6.7 32s2.4 22.2 6.7 32H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80zm256 320H345.3c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H336V96h128c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80M272 96c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24m-32 288a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M208 96v48H80c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h113.6c-1 5.2-1.6 10.5-1.6 16 0 11.4 2.4 22.2 6.7 32H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80zm256 320H345.3c4.3-9.8 6.7-20.6 6.7-32 0-5.5-.6-10.8-1.6-16H464c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32H336V96h128c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80M272 96c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24m-32 288a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M208 96H80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h136.6c-5.4-9.4-8.6-20.3-8.6-32H80c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h128zm224 320c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80h-96v32h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c0 11.7-3.1 22.6-8.6 32zm144-208c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zM272 96c-8.8 0-16 7.2-16 16v184c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16m24 280a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M448 112c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V176c0-35.3 28.7-64 64-64zm80 224v-16h16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-16c0-44.2-35.8-80-80-80H80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h368c44.2 0 80-35.8 80-80m0-32v-96h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16zM272 144c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8V152c0-4.4-3.6-8-8-8m16 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h118.7c-4.3-9.8-6.7-20.6-6.7-32s2.4-22.2 6.7-32H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h128V96zm265.3 320H464c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80H336v64h128c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H345.3c4.3 9.8 6.7 20.6 6.7 32s-2.4 22.2-6.7 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M296 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 296a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
