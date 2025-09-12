import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VialsIcon: React.FC<
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
                  d="M0 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64m136 32H88v160h48zm152-32c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32m136 32h-48v160h48z"
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
                  d="M0 56c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v320c0 44.2-35.8 80-80 80s-80-35.8-80-80V80h-8C10.7 80 0 69.3 0 56m80 24v176h64V80zm208-24c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v320c0 44.2-35.8 80-80 80s-80-35.8-80-80V80h-8c-13.3 0-24-10.7-24-24m80 24v176h64V80z"
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
                  d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h16v336c0 44.2 35.8 80 80 80s80-35.8 80-80V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m48 224V64h96v192zm0 32h96v112c0 26.5-21.5 48-48 48s-48-21.5-48-48zM304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v336c0 44.2 35.8 80 80 80s80-35.8 80-80V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H304m48 224V64h96v192zm0 32h96v112c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
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
                  d="M16 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h16v352c0 44.2 35.8 80 80 80s80-35.8 80-80V48h16c4.4 0 8-3.6 8-8s-3.6-8-8-8H16m32 224V48h128v208zm0 16h128v128c0 35.3-28.7 64-64 64s-64-28.7-64-64zM304 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h16v352c0 44.2 35.8 80 80 80s80-35.8 80-80V48h16c4.4 0 8-3.6 8-8s-3.6-8-8-8H304m32 224V48h128v208zm0 16h128v128c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
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
                  d="M0 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64m136 32H88v304c0 13.3 10.7 24 24 24s24-10.7 24-24zm152-32c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32m136 32h-48v304c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M136 256H88v144c0 13.3 10.7 24 24 24s24-10.7 24-24zm288 0h-48v144c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
