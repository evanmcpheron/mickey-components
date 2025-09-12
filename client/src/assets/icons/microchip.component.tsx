import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MicrochipIcon: React.FC<
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
                  d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-56h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-56h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-56V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-56zm-16 104h192c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32m192 32H160v192h192z"
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
                  d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-8c-35.3 0-64 28.7-64 64v8H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v8c0 35.3 28.7 64 64 64h8v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c35.3 0 64-28.7 64-64v-8h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-48h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-48h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-8c0-35.3-28.7-64-64-64h-8V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-48V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-48zm216 104v256c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16m-208 32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm16 48h96v96h-96z"
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
                  d="M176 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-16c-35.3 0-64 28.7-64 64v16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v16c0 35.3 28.7 64 64 64h16v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h16c35.3 0 64-28.7 64-64v-16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-16c0-35.3-28.7-64-64-64h-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64zm240 112v256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32m-256 0c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm192 32v192H160V160z"
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
                  d="M168 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-24c-35.3 0-64 28.7-64 64v24H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v80H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v80H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v24c0 35.3 28.7 64 64 64h24v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h80v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h80v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h24c35.3 0 64-28.7 64-64v-24h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-80h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-80h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-24c0-35.3-28.7-64-64-64h-24V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-80V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-80zm88 72h128c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48h128m112 80v192c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16m-208-32c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32z"
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
                  d="M152 0c-13.3 0-24 10.7-24 24v40h48V24c0-13.3-10.7-24-24-24m80 24v40h48V24c0-13.3-10.7-24-24-24s-24 10.7-24 24m104 0v40h48V24c0-13.3-10.7-24-24-24s-24 10.7-24 24m152 104h-40v48h40c13.3 0 24-10.7 24-24s-10.7-24-24-24m0 104h-40v48h40c13.3 0 24-10.7 24-24s-10.7-24-24-24m0 104h-40v48h40c13.3 0 24-10.7 24-24s-10.7-24-24-24M384 488v-40h-48v40c0 13.3 10.7 24 24 24s24-10.7 24-24m-104-40h-48v40c0 13.3 10.7 24 24 24s24-10.7 24-24zm-104 0h-48v40c0 13.3 10.7 24 24 24s24-10.7 24-24zM24 384h40v-48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24m40-104v-48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24zM24 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v-48zm328 32H160v192h192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 64h192c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32"
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
