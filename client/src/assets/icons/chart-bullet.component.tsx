import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartBulletIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M264 32c13.3 0 24 10.7 24 24v8h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h192v-8c0-13.3 10.7-24 24-24m-104 96v32h80v-32zm128 0v32h160v-32zm48 256v-32h-80v32zm0 64H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h288v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24zm48-96v32h64v-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M264 32c13.3 0 24 10.7 24 24v8h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h192v-8c0-13.3 10.7-24 24-24m-104 80v64h80v-64zm128 0v64h176v-64zm-176 0H48v64h64zm248 144c13.3 0 24 10.7 24 24v8h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h288v-8c0-13.3 10.7-24 24-24m-136 80v64h112v-64zm160 0v64h80v-64zm-208 0H48v64h128z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272 32c8.8 0 16 7.2 16 16v16h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h208V48c0-8.8 7.2-16 16-16M160 96v96h96V96zm128 0v96h176c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-160 0H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h80zm240 160c8.8 0 16 7.2 16 16v16h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h304v-16c0-8.8 7.2-16 16-16M224 416h128v-96H224zm160-96v96h80c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-192 0H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h144z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M280 32c4.4 0 8 3.6 8 8v24h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h224V40c0-4.4 3.6-8 8-8M160 80v128h112V80zm128 0v128h176c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm-144 0H48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96zm232 176c4.4 0 8 3.6 8 8v24h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h320v-24c0-4.4 3.6-8 8-8m-152 48v128h144V304zm160 0v128h80c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm-176 0H48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h160z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 64v64h80V64zm288 96H288v64h176c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H288v64h160zm-288 0v64h80v-64zm224 224v64h80c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-80v64h64v32zm-48-32v-64h-80v64zm0 32h-80v64h80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M264 32c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24M48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h112V64zm0 224c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h208V288zm336-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
