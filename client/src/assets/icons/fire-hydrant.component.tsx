import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FireHydrantIcon: React.FC<
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
                  d="M224 32v4c45 11.6 80.4 47 92 92h12c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h12c11.6-45 47-80.4 92-92v-4c0-17.7 14.3-32 32-32s32 14.3 32 32M32 488c0-13.3 10.7-24 24-24h8v-64H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h16v-64h256v64h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-16v64h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24m160-88a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M192 0c-17.7 0-32 14.3-32 32v4c-45 11.6-80.4 47-92 92H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-12c-11.6-45-47-80.4-92-92v-4c0-17.7-14.3-32-32-32M56 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-80h16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-48h-48v256H112V208H64v48H48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h16v80zm192-144a56 56 0 1 0-112 0 56 56 0 1 0 112 0"
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
                  d="M192 0c8.8 0 16 7.2 16 16v17c57.9 7.2 103.8 53.1 111 111h17c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h17c7.2-57.9 53.1-103.8 111-111V16c0-8.8 7.2-16 16-16m0 64c-47.6 0-87.1 34.6-94.7 80h189.4c-7.6-45.4-47.1-80-94.7-80M32 496c0-8.8 7.2-16 16-16h16v-80H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h16v-32h32v272h192V208h32v32h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-16v80h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16m288-128h16c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16zm-256 0v-96H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16zm160-48a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M192 0c-4.4 0-8 3.6-8 8v24.2C122.4 36 72.5 83.5 65 144H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-25c-7.5-60.5-57.4-108-119-111.8V8c0-4.4-3.6-8-8-8m0 48c56.4 0 103.1 41.7 110.9 96H81.1c7.8-54.3 54.5-96 110.9-96m80 272a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128M40 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V392h24c22.1 0 40-17.9 40-40v-64c0-22.1-17.9-40-40-40h-24v-56h-16v304H80V192H64v56H40c-22.1 0-40 17.9-40 40v64c0 22.1 17.9 40 40 40h24v104zm24-120H40c-13.3 0-24-10.7-24-24v-64c0-13.3 10.7-24 24-24h24zm256 0V264h24c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24z"
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
                  d="M192 0c17.7 0 32 14.3 32 32v4c45 11.6 80.4 47 92 92h12c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h12c11.6-45 47-80.4 92-92v-4c0-17.7 14.3-32 32-32M16 304c0-17.7 14.3-32 32-32h16v128H48c-17.7 0-32-14.3-32-32zm320-32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-16V272z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 176h256v288h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h8zm128 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
