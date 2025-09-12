import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PrescriptionBottleIcon: React.FC<
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
                  d="M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm32 96h320v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32z"
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
                  d="M48 48h288v32H48zM40 0C17.9 0 0 17.9 0 40v48c0 22.1 17.9 40 40 40h304c22.1 0 40-17.9 40-40V40c0-22.1-17.9-40-40-40zm-8 160v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160h-48v288c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-32h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-16z"
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
                  d="M336 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM48 0C21.5 0 0 21.5 0 48v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM32 160v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160h-32v288c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-32h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-32z"
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
                  d="M344 16c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24V40c0-13.3 10.7-24 24-24zM40 0C17.9 0 0 17.9 0 40v48c0 22.1 17.9 40 40 40h304c22.1 0 40-17.9 40-40V40c0-22.1-17.9-40-40-40zm-8 408v40c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160h-16v288c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48v-32h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-80h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-80h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-48H32v248"
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
                  d="M352 96H32v96h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v32c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32v32c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm112 192H32v32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16m0 96H32v32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16m0 96H32v32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16"
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
