import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilmCanisterIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 0c-17.7 0-32 14.3-32 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32v352c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32V96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c0-17.7-14.3-32-32-32zm224 128v288h128c17.7 0 32-14.3 32-32v-32c0-17.7 14.3-32 32-32s32-14.3 32-32V160c0-17.7-14.3-32-32-32zm56 40h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m80 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm-80 144h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v384h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V80h-8C10.7 80 0 69.3 0 56s10.7-24 24-24h72M80 80v384h192V80zm464 48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32 14.3-32 32v32c0 17.7-14.3 32-32 32H352V128zm-152 56v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16m112-16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM392 344v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zM16 64C7.2 64 0 71.2 0 80s7.2 16 16 16h16v384H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m48 416V96h224v384zm320-280v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8m8 152c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm88-152v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8m-128-40h176c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16-26.5 0-48 21.5-48 48v32c0 8.8-7.2 16-16 16H352v32h112c26.5 0 48-21.5 48-48v-32c0-8.8 7.2-16 16-16 26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H352z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M104 40v8h144v-8c0-13.3-10.7-24-24-24h-96c-13.3 0-24 10.7-24 24m-16 8v-8c0-22.1 17.9-40 40-40h96c22.1 0 40 17.9 40 40v8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v432h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V64H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h80m0 16H48v432h256V64H88m320 112c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24zm-24 24v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8m8 136h16c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24m0 16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm112-176c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24zm-24 24v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8m56-56H352v-16h184c22.1 0 40 17.9 40 40v136c0 22.1-17.9 40-40 40-13.3 0-24 10.7-24 24v40c0 22.1-17.9 40-40 40H352v-16h120c13.3 0 24-10.7 24-24v-40c0-22.1 17.9-40 40-40 13.3 0 24-10.7 24-24V168c0-13.3-10.7-24-24-24"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path className="aps-icon-background" d="M32 96h288v352H32z" />
                <path
                  className="aps-icon-foreground"
                  d="M96 32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32zM0 480c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m320-352h224c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32 14.3-32 32v32c0 17.7-14.3 32-32 32H320zm72 56v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16m112-16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM392 344v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"
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
