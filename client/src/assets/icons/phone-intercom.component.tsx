import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PhoneIntercomIcon: React.FC<
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
                  d="M48 32h32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48m112 64c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64zm160 272a48 48 0 1 0-96 0 48 48 0 1 0 96 0m48-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 128v96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32"
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
                  d="M112 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm0 400c15.1 0 29-5.3 40-14 11 8.8 24.9 14 40 14h256c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H192c-15.1 0-29 5.3-40 14-11-8.8-24.9-14-40-14H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64zm64-64V96c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16m80-32a48 48 0 1 0 0-96 48 48 0 1 0 0 96m80-80c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m0 64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m-96-256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
                  d="M80 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm400 32c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM224 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 320a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m32-32c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m0 64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m-96-256h160v96H256zm-32 0v96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32"
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
                  d="M80 48c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm400 16c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM224 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm16 336a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m32-24c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m0 48c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m-96-280h160c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H256c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m-32 16v96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32"
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
                  d="M224 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96m80 16c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16M256 96h160c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm320 288c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
