import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CommandIcon: React.FC<
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
                  d="M0 96C0 43 43 0 96 0s96 43 96 96v32h128V96c0-53 43-96 96-96s96 43 96 96-43 96-96 96h-32v128h32c53 0 96 43 96 96s-43 96-96 96-96-43-96-96v-32H192v32c0 53-43 96-96 96S0 469 0 416s43-96 96-96h32V192H96c-53 0-96-43-96-96m128 32V96c0-17.7-14.3-32-32-32S64 78.3 64 96s14.3 32 32 32zm64 192h128V192H192zm-64 64H96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32zm256 0v32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32zm0-256h32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32z"
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
                  d="M0 92C0 41.2 41.2 0 92 0s92 41.2 92 92v44h144V92c0-50.8 41.2-92 92-92s92 41.2 92 92v4c0 53-43 96-96 96h-40v128h40c53 0 96 43 96 96v4c0 50.8-41.2 92-92 92s-92-41.2-92-92v-44H184v44c0 50.8-41.2 92-92 92S0 470.8 0 420v-4c0-53 43-96 96-96h40V192H96c-53 0-96-43-96-96zm136 52V92c0-24.3-19.7-44-44-44S48 67.7 48 92v4c0 26.5 21.5 48 48 48zm48 176v8h144V184H184v136m-48 48H96c-26.5 0-48 21.5-48 48v4c0 24.3 19.7 44 44 44s44-19.7 44-44v-52m240 8v44c0 24.3 19.7 44 44 44s44-19.7 44-44v-4c0-26.5-21.5-48-48-48h-40zm0-232h40c26.5 0 48-21.5 48-48v-4c0-24.3-19.7-44-44-44s-44 19.7-44 44v52"
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
                  d="M0 88C0 39.4 39.4 0 88 0s88 39.4 88 88v56h160V88c0-48.6 39.4-88 88-88s88 39.4 88 88-39.4 88-88 88h-56v160h56c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88v-56H176v56c0 48.6-39.4 88-88 88S0 472.6 0 424s39.4-88 88-88h56V176H88c-48.6 0-88-39.4-88-88m144 56V88c0-30.9-25.1-56-56-56S32 57.1 32 88s25.1 56 56 56zm32 192h160V176H176zm-32 32H88c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56zm224 0v56c0 30.9 25.1 56 56 56s56-25.1 56-56-25.1-56-56-56zm0-224h56c30.9 0 56-25.1 56-56s-25.1-56-56-56-56 25.1-56 56z"
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
                  d="M0 80C0 35.8 35.8 0 80 0s80 35.8 80 80v64h192V80c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80h-64v192h64c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80v-64H160v64c0 44.2-35.8 80-80 80S0 476.2 0 432s35.8-80 80-80h64V160H80c-44.2 0-80-35.8-80-80m144 64V80c0-35.3-28.7-64-64-64S16 44.7 16 80s28.7 64 64 64zm16 208h192V160H160zm-16 16H80c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64zm224 0v64c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64zm0-224h64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64z"
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
                  d="M320 128V96c0-53 43-96 96-96s96 43 96 96-43 96-96 96h-32v128h-64V128M192 320v96c0 53-43 96-96 96S0 469 0 416s43-96 96-96h32V192h64zm-64 64H96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32zm256-256h32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96C0 43 43 0 96 0s96 43 96 96v32h128v64H96c-53 0-96-43-96-96m320 224h96c53 0 96 43 96 96s-43 96-96 96-96-43-96-96v-32H192v-64zM128 128V96c0-17.7-14.3-32-32-32S64 78.3 64 96s14.3 32 32 32zm256 256v32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32z"
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
