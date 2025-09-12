import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LockHashtagIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 144v48h160v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m-64 48v-48C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64zm96 48c-8.8 0-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v64h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h64v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-64v-32c0-8.8-7.2-16-16-16m16 144v-64h64v64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 128v32h160v-32c0-44.2-35.8-80-80-80s-80 35.8-80 80m-48 32v-32C96 57.3 153.3 0 224 0s128 57.3 128 128v32h32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64zm0 48H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H96m88 16c13.3 0 24 10.7 24 24v24h32v-24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v32h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-32v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-32h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-24c0-13.3 10.7-24 24-24m24 128h32v-32h-32z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 128v64h192v-64c0-53-43-96-96-96s-96 43-96 96m-32 64v-64C96 57.3 153.3 0 224 0s128 57.3 128 128v64h16c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-44.2 35.8-80 80-80zm-64 80v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48m144-32c8.8 0 16 7.2 16 16v32h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16m16 144h64v-64h-64z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 128v64h224v-64c0-61.9-50.1-112-112-112S112 66.1 112 128m-16 64v-64C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64zm0 16H64c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H96m80 40c4.4 0 8 3.6 8 8v40h80v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v80h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-80v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40v-80h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40v-40c0-4.4 3.6-8 8-8m8 144h80v-80h-80z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144 144v48h160v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m-64 48v-48C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64zm96 48c-8.8 0-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v64h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h64v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-64v-32c0-8.8-7.2-16-16-16m16 144v-64h64v64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 256c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v64h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h64v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-64zm64 128h-64v-64h64z"
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
