import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClipboardCheckIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-37.5C269.4 26.7 233.8 0 192 0m0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m113 209L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 64h-49.6C263 27.5 230.7 0 192 0s-71 27.5-78.4 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M80 112v24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24h16c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm88-32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m121 187.6c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-89.7 89.7L129 287c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l53.3 53.3c9.4 9.4 24.6 9.4 33.9 0z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M145.5 68c5.3-20.7 24.1-36 46.5-36s41.2 15.3 46.5 36c1.8 7.1 8.2 12 15.5 12h18c8.8 0 16 7.2 16 16v32H96V96c0-8.8 7.2-16 16-16h18c7.3 0 13.7-4.9 15.5-12M192 0c-32.8 0-61 19.8-73.3 48H112c-20.9 0-38.7 13.4-45.3 32H64c-35.3 0-64 28.7-64 64v304c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64h-2.7c-6.6-18.6-24.4-32-45.3-32h-6.7C253 19.8 224.8 0 192 0m128 112c17.7 0 32 14.3 32 32v304c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32v16c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32zM208 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m91.3 171.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 345.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 0c-37.1 0-67.6 28-71.6 64H112c-20.9 0-38.7 13.4-45.3 32H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-2.7c-6.6-18.6-24.4-32-45.3-32h-8.4c-4-36-34.5-64-71.6-64M16 160c0-26.5 21.5-48 48-48v16c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-16c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm120-88c0-30.9 25.1-56 56-56s56 25.1 56 56c0 4.4 3.6 8 8 8h16c17.7 0 32 14.3 32 32v16c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-16c0-17.7 14.3-32 32-32h16c4.4 0 8-3.6 8-8m56 24a16 16 0 1 0 0-32 16 16 0 1 0 0 32m101.7 165.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L160 372.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M113.2 66.3c.1-.8.3-1.6.4-2.3H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-49.6c.2.8.3 1.6.4 2.3C290.1 72.6 304 90.7 304 112v24c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24v-24c0-21.3 13.9-39.4 33.2-45.7M305 273 177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M113.2 66.3C93.9 72.6 80 90.7 80 112v24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24c0-21.3-13.9-39.4-33.2-45.7C264.4 28.7 231.5 0 192 0s-72.4 28.7-78.8 66.3M168 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m137 193c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0z"
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
