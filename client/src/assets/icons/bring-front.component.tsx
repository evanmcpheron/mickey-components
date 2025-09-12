import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BringFrontIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64h192c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h64v-64H64zm416 384h-96c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-64v64h64v128h-96M224 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48h128c8.8 0 16 7.2 16 16h48c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h64v-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m384 464h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-64v48h64c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16h-48c0 35.3 28.7 64 64 64M224 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32h128c17.7 0 32 14.3 32 32h32c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h64v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m384 480h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-64v32h64c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32h-32c0 35.3 28.7 64 64 64m-32-384c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zM224 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm32 96h128v128H256zm-32 0v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 16h128c26.5 0 48 21.5 48 48h16c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h64v-16H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m384 496h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-64v16h64c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H448c-26.5 0-48-21.5-48-48h-16c0 35.3 28.7 64 64 64m-32-400c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zM224 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm32 80h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16m-32 16v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 64H64v128h96v64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h128c35.3 0 64 28.7 64 64v32h-32c-11.7 0-22.6 3.1-32 8.6zm192 352h32c11.7 0 22.6-3.1 32-8.6V448h128V320h-96v-64h96c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"
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
