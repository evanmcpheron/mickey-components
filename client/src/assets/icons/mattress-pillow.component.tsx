import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MattressPillowIcon: React.FC<
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
                  d="M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192zm32 384h288c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H288zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"
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
                  d="M240 112v288H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm48 0h288c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H288zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm16 112v160c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"
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
                  d="M256 96v320H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zm32 0h288c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H288zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm112 96c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm-64-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"
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
                  d="M256 80v352H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm16 0h304c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H272zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm112 80c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32zm-64-16c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"
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
                  d="M64 448h192V64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64m32-320h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 64h320c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H256z"
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
