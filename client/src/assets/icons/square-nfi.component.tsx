import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareNfiIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm75.7 64.6C68.8 162.5 64 168.8 64 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16V233.8l66.3 110.5c3.7 6.2 11.1 9.1 18 7.2s11.7-8.2 11.7-15.4V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v102.2L93.7 167.8c-3.7-6.2-11.1-9.1-18-7.2M224 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 80h320c8.8 0 16 7.2 16 16v32h48V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v32h48V96c0-8.8 7.2-16 16-16M48 384H0v32c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-32h-48v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm1-223c-10.1 3.1-17 12.4-17 23v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-64.7l52 78c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v64.7l-52-78C70.1 161.9 59.2 158 49 161m167 23v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-32h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24m200 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm11.7 128.6C68.8 162.5 64 168.8 64 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16V233.8l66.3 110.5c3.7 6.2 11.1 9.1 18 7.2s11.7-8.2 11.7-15.4V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v102.2L93.7 167.8c-3.7-6.2-11.1-9.1-18-7.2M224 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm79 68.2 81 148.5V168c0-4.4 3.6-8 8-8s8 3.6 8 8v176c0 3.7-2.5 6.8-6 7.8s-7.2-.7-9-3.9L80 199.4V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-3.7 2.5-6.8 6-7.8s7.2.7 9 3.9zm161-4.2h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v48h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m144 8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm75.7 64.6C68.8 162.5 64 168.8 64 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16V233.8l66.3 110.5c3.7 6.2 11.1 9.1 18 7.2s11.7-8.2 11.7-15.4V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v102.2L93.7 167.8c-3.7-6.2-11.1-9.1-18-7.2M224 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M93.7 167.8c-3.7-6.2-11.1-9.1-18-7.2S64 168.8 64 176v160c0 8.8 7.2 16 16 16s16-7.2 16-16V233.8l66.3 110.5c3.7 6.2 11.1 9.1 18 7.2s11.7-8.2 11.7-15.4V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v102.2zM240 160c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16zm144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
