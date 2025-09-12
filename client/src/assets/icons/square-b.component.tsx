import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareBIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 120c0-13.3 10.7-24 24-24h92c42 0 76 34 76 76 0 16.2-5.1 31.3-13.8 43.7 18.1 13.9 29.8 35.7 29.8 60.3 0 42-34 76-76 76H152c-13.3 0-24-10.7-24-24V152m144 52c0-15.5-12.5-28-28-28h-68v56h68c15.5 0 28-12.5 28-28m-96 132h84c15.5 0 28-12.5 28-28s-12.5-28-28-28h-84z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 56c0-13.3 10.7-24 24-24h92c42 0 76 34 76 76 0 16.2-5.1 31.3-13.8 43.7 18.1 13.9 29.8 35.7 29.8 60.3 0 42-34 76-76 76H152c-13.3 0-24-10.7-24-24V152m144 52c0-15.5-12.5-28-28-28h-68v56h68c15.5 0 28-12.5 28-28m-96 132h84c15.5 0 28-12.5 28-28s-12.5-28-28-28h-84z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 64c0-17.7 14.3-32 32-32h88c39.8 0 72 32.2 72 72 0 19.3-7.6 36.8-19.9 49.7 21.5 12.5 35.9 35.7 35.9 62.3 0 39.8-32.2 72-72 72H160c-17.7 0-32-14.3-32-32V160m160 40c0-22.1-17.9-40-40-40h-88v80h88c22.1 0 40-17.9 40-40M160 352h104c22.1 0 40-17.9 40-40s-17.9-40-40-40H160z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 56c0-13.3 10.7-24 24-24h84c37.6 0 68 30.4 68 68 0 22.1-10.6 41.8-26.9 54.2 29.3 7.6 50.9 34.2 50.9 65.8 0 37.6-30.4 68-68 68H152c-13.3 0-24-10.7-24-24V152m160 44c0-28.7-23.3-52-52-52h-84c-4.4 0-8 3.6-8 8v96h92c28.7 0 52-23.3 52-52M144 360c0 4.4 3.6 8 8 8h108c28.7 0 52-23.3 52-52s-23.3-52-52-52H144z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 120c0-13.3 10.7-24 24-24h92c42 0 76 34 76 76 0 16.2-5.1 31.3-13.8 43.7 18.1 13.9 29.8 35.7 29.8 60.3 0 42-34 76-76 76H152c-13.3 0-24-10.7-24-24V152m144 52c0-15.5-12.5-28-28-28h-68v56h68c15.5 0 28-12.5 28-28m-96 132h84c15.5 0 28-12.5 28-28s-12.5-28-28-28h-84z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M152 128c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24h108c42 0 76-34 76-76 0-24.6-11.7-46.4-29.8-60.3 8.7-12.4 13.8-27.4 13.8-43.7 0-42-34-76-76-76zm92 104h-68v-56h68c15.5 0 28 12.5 28 28s-12.5 28-28 28m-68 48h84c15.5 0 28 12.5 28 28s-12.5 28-28 28h-84z"
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
