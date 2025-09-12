import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RobotAstromechIcon: React.FC<
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
                  d="M256 0c70.7 0 128 57.3 128 128v32H128v-32C128 57.3 185.3 0 256 0m0 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m48 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32M48 240c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v158.3c0 8.7 2.4 17.2 6.8 24.7l38.9 64.8c3 4.9 3 11.1.2 16.1s-8.2 8.1-13.9 8.1h-96c-8.8 0-16-7.2-16-16V384l-45.3 45.3c-12 12-28.3 18.7-45.3 18.7h-75c-17 0-33.3-6.7-45.3-18.7L128 384v112c0 8.8-7.2 16-16 16H16c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2.2-16.1L41.2 423c4.5-7.5 6.8-16 6.8-24.7zm160 16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M256 0c-70.7 0-128 57.3-128 128v16H88c-30.9 0-56 25.1-56 56v210.9L2.1 478.3c-3.3 7.4-2.6 16 1.8 22.8S15.9 512 24 512h112c13.3 0 24-10.7 24-24v-72.9l22.1 24.8c4.6 5.1 11.1 8.1 17.9 8.1h112c6.9 0 13.4-2.9 17.9-8.1l22.1-24.8V488c0 13.3 10.7 24 24 24h112c8.1 0 15.7-4.1 20.1-10.9s5.1-15.4 1.8-22.8L480 410.9V200c0-30.9-25.1-56-56-56h-40v-16C384 57.3 326.7 0 256 0m-64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32M88 192h24v272H60.9l17-38.3c1.4-3.1 2.1-6.4 2.1-9.7V200c0-4.4 3.6-8 8-8m72 0h192v150.9L301.2 400h-90.4L160 342.9zm240 0h24c4.4 0 8 3.6 8 8v216c0 3.4.7 6.7 2.1 9.7l17 38.3H400V192m-192 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M256 0c-79.5 0-144 64.5-144 144v16H96c-35.3 0-64 28.7-64 64v196.2L2.4 479.5C.8 482.6 0 486 0 489.5 0 501.9 10.1 512 22.5 512H128c8.8 0 16-7.2 16-16v-89.4l36.7 36.7c3 3 7.1 4.7 11.3 4.7h128c4.2 0 8.3-1.7 11.3-4.7l36.7-36.7V496c0 8.8 7.2 16 16 16h105.5c12.4 0 22.5-10.1 22.5-22.5 0-3.5-.8-6.9-2.4-10L480 420.2V224c0-35.3-28.7-64-64-64h-16v-16C400 64.5 335.5 0 256 0m144 192h16c17.7 0 32 14.3 32 32v200c0 2.5.6 4.9 1.7 7.2l24.4 48.8H400V192m-32 0v169.4L313.4 416H198.6L144 361.4V192zm-256 0v288H37.9l24.4-48.8c1.1-2.2 1.7-4.7 1.7-7.2V224c0-17.7 14.3-32 32-32zm32-48c0-61.9 50.1-112 112-112s112 50.1 112 112v16H144zm80-16a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32M192 240c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m0 64c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16"
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
                  d="M256 0c-79.5 0-144 64.5-144 144v32H88c-30.9 0-56 25.1-56 56v190.1L2.2 481.7c-1.4 2.9-2.2 6.1-2.2 9.4C0 502.6 9.4 512 20.9 512H104c13.3 0 24-10.7 24-24v-99l50 56.3c1.5 1.7 3.7 2.7 6 2.7h144c2.3 0 4.5-1 6-2.7l50-56.3v99c0 13.3 10.7 24 24 24h83.1c11.6 0 20.9-9.4 20.9-20.9 0-3.3-.8-6.5-2.2-9.4L480 422.1V232c0-30.9-25.1-56-56-56h-24v-32C400 64.5 335.5 0 256 0m144 192h24c22.1 0 40 17.9 40 40v192c0 1.2.3 2.5.8 3.6l30.6 61.3c.3.7.5 1.4.5 2.2 0 2.7-2.2 4.9-4.9 4.9h-83c-4.4 0-8-3.6-8-8V192m-16 0v173l-59.6 67H187.6L128 365V192zm-272 0v296c0 4.4-3.6 8-8 8H20.9c-2.7 0-4.9-2.2-4.9-4.9 0-.8.2-1.5.5-2.2l30.6-61.3c.6-1.1.8-2.3.8-3.6V232c0-22.1 17.9-40 40-40h24zm16-48c0-70.7 57.3-128 128-128s128 57.3 128 128v32H128zm72-48a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0m40 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32M192 248c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m0 64c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8"
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
                  d="M96 192c-26.5 0-48 21.5-48 48v158.3c0 8.7-2.4 17.2-6.8 24.7L2.3 487.8c-3 4.9-3 11.1-.2 16.1S10.3 512 16 512h96c8.8 0 16-7.2 16-16V384l45.3 45.3c12 12 28.3 18.7 45.3 18.7h75c17 0 33.3-6.7 45.3-18.7L384 384v112c0 8.8 7.2 16 16 16h96c5.8 0 11.1-3.1 13.9-8.1s2.8-11.2-.2-16.1L470.8 423c-4.5-7.5-6.8-16-6.8-24.7V240c0-26.5-21.5-48-48-48zm112 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 128C128 57.3 185.3 0 256 0s128 57.3 128 128v64H128zm96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0M208 256h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
