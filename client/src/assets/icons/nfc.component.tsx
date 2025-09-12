import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NfcIcon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 48v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-80c-26.5 0-48 21.5-48 48v66.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V144c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-26.5 0-48 21.5-48 48"
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
                  d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm208 224c0-17.8-9.7-33.3-24-41.6V160h72v192H128V160h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16c-22.1 0-40 17.9-40 40v208c0 22.1 17.9 40 40 40h208c22.1 0 40-17.9 40-40V152c0-22.1-17.9-40-40-40h-88c-22.1 0-40 17.9-40 40v62.4c-14.3 8.3-24 23.8-24 41.6 0 26.5 21.5 48 48 48s48-21.5 48-48"
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
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm0 96v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H240c-17.7 0-32 14.3-32 32v82.7c-18.6 6.6-32 24.4-32 45.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V128h112v256H96V128h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-17.7 0-32 14.3-32 32m160 144a16 16 0 1 1 0-32 16 16 0 1 1 0 32"
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
                  d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm40 96h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24H240c-13.3 0-24 10.7-24 24v80.8c-18.3 3.7-32 19.8-32 39.2 0 22.1 17.9 40 40 40s40-17.9 40-40c0-19.4-13.7-35.5-32-39.2V136c0-4.4 3.6-8 8-8h104c4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V136c0-4.4 3.6-8 8-8m120 152a24 24 0 1 1 0-48 24 24 0 1 1 0 48"
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
                  d="M210.7 128H112c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16v66.7c18.6 6.6 32 24.4 32 45.3 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-5.6 1-11 2.7-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h66.7c6.6-18.6 24.4-32 45.3-32h80c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48"
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
