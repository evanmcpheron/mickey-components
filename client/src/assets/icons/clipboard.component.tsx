import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClipboardIcon: React.FC<
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
                  d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-37.5C269.4 26.7 233.8 0 192 0m0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-80 128h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M280 64h40c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h49.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64zM64 112c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16h-16v24c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24v-24zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M192 32c-22.3 0-41.2 15.3-46.5 36-1.8 7.1-8.2 12-15.5 12h-18c-8.8 0-16 7.2-16 16v32h192V96c0-8.8-7.2-16-16-16h-18c-7.3 0-13.7-4.9-15.5-12-5.3-20.7-24.1-36-46.5-36m-73.3 16C131 19.8 159.2 0 192 0s61 19.8 73.3 48h6.7c20.9 0 38.7 13.4 45.3 32h2.7c35.3 0 64 28.7 64 64v304c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V144c0-35.3 28.7-64 64-64h2.7c6.6-18.6 24.4-32 45.3-32zM320 128c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-16c-17.7 0-32 14.3-32 32v304c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM192 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M120.4 64c4-36 34.5-64 71.6-64s67.6 28 71.6 64h8.4c20.9 0 38.7 13.4 45.3 32h2.7c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h2.7c6.6-18.6 24.4-32 45.3-32zM64 112c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48v16c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm128-96c-30.9 0-56 25.1-56 56 0 4.4-3.6 8-8 8h-16c-17.7 0-32 14.3-32 32v16c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-16c0-17.7-14.3-32-32-32h-16c-4.4 0-8-3.6-8-8 0-30.9-25.1-56-56-56m-16 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M113.6 64c-.2.8-.3 1.6-.4 2.3C93.9 72.6 80 90.7 80 112v24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24c0-21.3-13.9-39.4-33.2-45.7-.1-.8-.3-1.6-.4-2.3H320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 0c-39.5 0-72.4 28.7-78.8 66.3C93.9 72.6 80 90.7 80 112v24c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24c0-21.3-13.9-39.4-33.2-45.7C264.4 28.7 231.5 0 192 0m0 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
