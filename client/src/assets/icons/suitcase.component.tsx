import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SuitcaseIcon: React.FC<
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
                  d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v424H128V96m-64 0h32v384H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m384 384h-32V96h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64"
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
                  d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm232 48H144v288h224V144zm-296 0c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h32V144zm384 288c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16h-32v288z"
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
                  d="M160 48v48h192V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16m-32 48V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v48h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm240 32H128v320h256V128zm-304 0c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h32V128zm384 320c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-32v320z"
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
                  d="M144 40v56h224V40c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24m-16 56V40c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v56h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm248 16H104v352h304V112zm-288 0H64c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h24zm336 352h24c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-24z"
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
                  d="M96 96h32v384H96zm288 0h32v384h-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v424H128V96m-64 0h32v384H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m384 384h-32V96h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64"
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
