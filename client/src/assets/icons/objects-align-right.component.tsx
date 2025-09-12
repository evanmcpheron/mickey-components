import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ObjectsAlignRightIcon: React.FC<
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
                  d="M512 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24M336 64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48zm0 224c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48z"
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
                  d="M512 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24zM336 176H48v-64h288zm48-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-48 288H176v-64h160zm48-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"
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
                  d="M512 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16zM352 176c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16zm32-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-32 288c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16zm32-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"
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
                  d="M512 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8zM400 176c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zm16-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm-16 288c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32zm16-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48z"
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
                  d="M384 112c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm0 224c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M488 0c13.3 0 24 10.7 24 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24"
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
