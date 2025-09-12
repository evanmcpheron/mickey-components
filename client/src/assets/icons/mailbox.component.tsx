import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MailboxIcon: React.FC<
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
                  d="M0 208v176c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144S0 128.5 0 208m64 0c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m256 0v176c0 24.6-9.2 47-24.4 64H512c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144H245.2c45.2 31.9 74.8 84.5 74.8 144m64 0c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16"
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
                  d="M48 208c0-53 43-96 96-96s96 43 96 96v192H64c-8.8 0-16-7.2-16-16zm192 240h272c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144H144C64.5 64 0 128.5 0 208v176c0 35.3 28.7 64 64 64zm48-240c0-36.9-13.9-70.5-36.7-96H432c53 0 96 43 96 96v176c0 8.8-7.2 16-16 16H288zm-184-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm256 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v24c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-96"
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
                  d="M32 208v176c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V208c0-61.9-50.1-112-112-112S32 146.1 32 208m256 0v176c0 11.7-3.1 22.6-8.6 32H512c17.7 0 32-14.3 32-32V208c0-61.9-50.1-112-112-112H234.5c32.6 26.4 53.5 66.8 53.5 112M64 448c-35.3 0-64-28.7-64-64V208C0 128.5 64.5 64 144 64h288c79.5 0 144 64.5 144 144v176c0 35.3-28.7 64-64 64H64m48-256h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16m224 0h152c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-72h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16m112 96h32v-64h-32z"
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
                  d="M272 384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V208c0-70.7 57.3-128 128-128s128 57.3 128 128zm16-176c0-55.7-31.7-104.1-78-128h222c70.7 0 128 57.3 128 128v176c0 26.5-21.5 48-48 48H266.3c13.3-11.7 21.7-28.9 21.7-48zM64 448h448c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144H144C64.5 64 0 128.5 0 208v176c0 35.3 28.7 64 64 64m8-256c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8zm304 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v64c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-56c0-13.3-10.7-24-24-24H376m72 80v-64h40c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8"
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
                  d="M512 448H224c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144h288c79.5 0 144 64.5 144 144v176c0 35.3-28.7 64-64 64M400 192c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 208C0 128.5 64.5 64 144 64s144 64.5 144 144v176c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 0c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16m336-16h96c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
