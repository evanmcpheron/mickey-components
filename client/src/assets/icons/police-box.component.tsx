import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PoliceBoxIcon: React.FC<
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
                  d="M192 0c8.8 0 16 7.2 16 16v16h80c17.7 0 32 14.3 32 32 17.7 0 32 14.3 32 32v368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V96c0-17.7 14.3-32 32-32 0-17.7 14.3-32 32-32h80V16c0-8.8 7.2-16 16-16M96 136v24h32v-32h-24c-4.4 0-8 3.6-8 8m0 40v24c0 4.4 3.6 8 8 8h24v-32zm72-48h-24v32h32v-24c0-4.4-3.6-8-8-8m-24 48v32h24c4.4 0 8-3.6 8-8v-24zm72-48c-4.4 0-8 3.6-8 8v24h32v-32zm24 48h-32v24c0 4.4 3.6 8 8 8h24zm16-48v32h32v-24c0-4.4-3.6-8-8-8zm32 48h-32v32h24c4.4 0 8-3.6 8-8zM96 256v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16"
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
                  d="M192 0c8.8 0 16 7.2 16 16v16h80c17.7 0 32 14.3 32 32 17.7 0 32 14.3 32 32v368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V96c0-17.7 14.3-32 32-32 0-17.7 14.3-32 32-32h80V16c0-8.8 7.2-16 16-16M80 464h224V112H80zm24-320c0-4.4 3.6-8 8-8h24v32h-32zm0 40h32v32h-24c-4.4 0-8-3.6-8-8zm72-48c4.4 0 8 3.6 8 8v24h-32v-32zm-24 48h32v24c0 4.4-3.6 8-8 8h-24zm56-48h24v32h-32v-24c0-4.4 3.6-8 8-8m24 48v32h-24c-4.4 0-8-3.6-8-8v-24zm16-48h24c4.4 0 8 3.6 8 8v24h-32zm32 48v24c0 4.4-3.6 8-8 8h-24v-32zm-176 64c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16z"
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
                  d="M208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H96c-17.7 0-32 14.3-32 32v.8C45.7 68.5 32 84.6 32 104v376H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V104c0-19.4-13.7-35.5-32-39.2V64c0-17.7-14.3-32-32-32h-80zm112 88v376H64V104c0-4.4 3.6-8 8-8h8c8.8 0 16-7.2 16-16V64h192v16c0 8.8 7.2 16 16 16h8c4.4 0 8 3.6 8 8M112 328v-48h48v48zm-24-56v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m24-120h20v20h-20zm28 0h20v20h-20zm0 28h20v20h-20zm-8 20h-20v-20h20zm-28-72c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm120 72v-20h20v20zm28 0v-20h20v20zm0-28v-20h20v20zm-8-20v20h-20v-20zm-44-8v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16"
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
                  d="M200 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v24H88c-13.3 0-24 10.7-24 24v8c-17.7 0-32 14.3-32 32v400H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V96c0-17.7-14.3-32-32-32v-8c0-13.3-10.7-24-24-24h-96zm136 88v400H48V96c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16M192 48h104c4.4 0 8 3.6 8 8v8H80v-8c0-4.4 3.6-8 8-8zM96 272h64v64H96zm-16 0v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16m208-128v24h-24v-24zm-64 0h24v24h-24zm0 40h24v24h-24zm64 24h-24v-24h24zm-64-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-88 16h24v24h-24zm-16 0v24H96v-24zm0 40v24H96v-24zm16 24v-24h24v24zm-56-64v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16"
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
                  d="M208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h32zM104 128c-4.4 0-8 3.6-8 8v24h32v-32zm24 48H96v24c0 4.4 3.6 8 8 8h24zm16-48v32h32v-24c0-4.4-3.6-8-8-8zm32 48h-32v32h24c4.4 0 8-3.6 8-8zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24zm184-328v24h32v-32h-24c-4.4 0-8 3.6-8 8m0 40v24c0 4.4 3.6 8 8 8h24v-32zm72-48h-24v32h32v-24c0-4.4-3.6-8-8-8m-24 48v32h24c4.4 0 8-3.6 8-8v-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 32c-17.7 0-32 14.3-32 32-17.7 0-32 14.3-32 32v368h320V96c0-17.7-14.3-32-32-32 0-17.7-14.3-32-32-32zm0 104c0-4.4 3.6-8 8-8h24v32H96zm0 40h32v32h-24c-4.4 0-8-3.6-8-8zm72-48c4.4 0 8 3.6 8 8v24h-32v-32zm-24 48h32v24c0 4.4-3.6 8-8 8h-24zm72-48h24v32h-32v-24c0-4.4 3.6-8 8-8m24 48v32h-24c-4.4 0-8-3.6-8-8v-24zm16-48h24c4.4 0 8 3.6 8 8v24h-32zm32 48v24c0 4.4-3.6 8-8 8h-24v-32zM96 256c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16z"
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
