import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClipboardUserIcon: React.FC<
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
                  d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-37.5C269.4 26.7 233.8 0 192 0m0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-64 192a64 64 0 1 1 128 0 64 64 0 1 1-128 0M80 432c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16"
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
                  d="M320 64h-49.6C263 27.5 230.7 0 192 0s-71 27.5-78.4 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M80 112v24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24h16c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16h-16c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm88-32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88 208a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M145.5 68c5.3-20.7 24.1-36 46.5-36s41.2 15.3 46.5 36c1.8 7.1 8.2 12 15.5 12h18c8.8 0 16 7.2 16 16v32H96V96c0-8.8 7.2-16 16-16h18c7.3 0 13.7-4.9 15.5-12M192 0c-32.8 0-61 19.8-73.3 48H112c-20.9 0-38.7 13.4-45.3 32H64c-35.3 0-64 28.7-64 64v304c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64h-2.7c-6.6-18.6-24.4-32-45.3-32h-6.7C253 19.8 224.8 0 192 0m128 112c17.7 0 32 14.3 32 32v304c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32v16c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32zM208 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 64h64c26.5 0 48 21.5 48 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 21.5-48 48-48"
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
                  d="M192 0c-37.1 0-67.6 28-71.6 64H112c-20.9 0-38.7 13.4-45.3 32H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-2.7c-6.6-18.6-24.4-32-45.3-32h-8.4c-4-36-34.5-64-71.6-64M16 160c0-26.5 21.5-48 48-48v16c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-16c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm120-88c0-30.9 25.1-56 56-56s56 25.1 56 56c0 4.4 3.6 8 8 8h16c17.7 0 32 14.3 32 32v16c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-16c0-17.7 14.3-32 32-32h16c4.4 0 8-3.6 8-8m56 24a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-40 48h80c30.9 0 56 25.1 56 56 0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8 0-30.9 25.1-56 56-56m-72 56c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-39.8-32.2-72-72-72h-80c-39.8 0-72 32.2-72 72"
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
                  d="M113.2 66.3c.1-.8.3-1.6.4-2.3H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-49.6c.2.8.3 1.6.4 2.3C290.1 72.6 304 90.7 304 112v24c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24v-24c0-21.3 13.9-39.4 33.2-45.7M128 256a64 64 0 1 1 128 0 64 64 0 1 1-128 0M80 432c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M113.2 66.3C119.6 28.7 152.5 0 192 0s72.4 28.7 78.8 66.3C290.1 72.6 304 90.7 304 112v24c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24v-24c0-21.3 13.9-39.4 33.2-45.7M216 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 176a64 64 0 1 1 128 0 64 64 0 1 1-128 0M80 432c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16"
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
