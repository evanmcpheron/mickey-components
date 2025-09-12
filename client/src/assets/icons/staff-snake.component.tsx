import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StaffSnakeIcon: React.FC<
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
                  d="m222.6 43.2-.1 4.8H288c53 0 96 43 96 96s-43 96-96 96h-40v-80h40c8.8 0 16-7.2 16-16s-7.2-16-16-16h-68l-4.5 144H256c53 0 96 43 96 96s-43 96-96 96h-16v-80h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-43l-3.1 99.5-1.4 43.5v1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16v-1l-1-31H136c-22.1 0-40-17.9-40-40s17.9-40 40-40h36l-1-32h-19c-53 0-96-43-96-96 0-47.6 34.6-87.1 80-94.7V256c0 8.8 7.2 16 16 16h16.5L164 128h-41.4c-9 18.9-28.3 32-50.6 32H56c-30.9 0-56-25.1-56-56s25.1-56 56-56h105.5l-.1-4.8L161 32v-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30V32zM64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="m222.6 43.2-.1 4.8H296c48.6 0 88 39.4 88 88s-39.4 88-88 88h-48v-48h48c22.1 0 40-17.9 40-40s-17.9-40-40-40h-75l-6 192h25c44.2 0 80 35.8 80 80s-35.8 80-80 80v-48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-26.5l-3.6 115.5-1.4 43.5v1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16v-1l-1.4-43.5-.1-3.5h-54c-13.3 0-24-10.7-24-24s10.7-24 24-24h52.5l-2-64H144c-44.2 0-80-35.8-80-80 0-41.5 31.6-75.6 72-79.6V225c-13.8 3.6-24 16.1-24 31 0 17.7 14.3 32 32 32h25l-6-192h-35.6c.4 2.6.6 5.3.6 8 0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56s25.1-56 56-56h105.5l-.1-4.8L161 32v-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30V32zM64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M296 48h-88V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v32H64C28.7 48 0 76.7 0 112s28.7 64 64 64h8c39.8 0 72-32.2 72-72V80h32v208h-48c-17.7 0-32-14.3-32-32s14.3-32 32-32h16v-32h-16c-35.3 0-64 28.7-64 64s28.7 64 64 64h48v96h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V320h32c26.5 0 48 21.5 48 48s-21.5 48-48 48v32c44.2 0 80-35.8 80-80s-35.8-80-80-80h-32V80h88c30.9 0 56 25.1 56 56s-25.1 56-56 56h-56v32h56c48.6 0 88-39.4 88-88s-39.4-88-88-88M112 80v24c0 22.1-17.9 40-40 40h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-40 40a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M236.9 48c1.4-26-19.3-48-45.4-48s-46.9 22-45.4 48H56C25.1 48 0 73.1 0 104s25.1 56 56 56h15.7c22.6 0 43.8-10.6 57.3-28.7l2.5-3.3h19.7l2.1 32c-49.7.9-89.8 41.5-89.8 91.5v4.5c0 53 43 96 96 96h6.2v.5l2 31.5h-40.2c-17.7 0-32 14.3-32 32s14.3 32 32 32h44.4l3.1 48.5c.6 8.7 7.8 15.5 16.5 15.5s15.9-6.8 16.5-15.5l9.3-144v-.5h54.2c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-112c-44.2 0-80-35.8-80-80v-4.5c0-41.5 33.4-75.1 74.8-75.5l2.1 32.1c-25.1 1.6-44.9 22.4-44.9 47.9 0 26.5 21.5 48 48 48h112c35.3 0 64 28.7 64 64s-28.7 64-64 64h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40c44.2 0 80-35.8 80-80s-35.8-80-80-80h-112c-17.7 0-32-14.3-32-32 0-17 13.2-30.9 29.9-31.9l2.1 32.4c.3 4.4 4.1 7.8 8.5 7.5s7.8-4.1 7.5-8.5L167.3 128h48.5l-8.2 127.5c-.3 4.4 3.1 8.2 7.5 8.5s8.2-3.1 8.5-7.5l8.2-128.5h55.7c8.8 0 16 7.2 16 16s-7.2 16-16 16h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-160c-2.5 0-4.9 1.2-6.4 3.2l-4.9 6.5c-10.5 14-27 22.3-44.5 22.3H56c-22.1 0-40-17.9-40-40s17.9-40 40-40h231.5c44.2 0 80 35.8 80 80s-35.8 80-80 80h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40c53 0 96-43 96-96s-43-96-96-96zm-66.1 384h-43.3c-8.8 0-16-7.2-16-16s7.2-16 16-16h41.3l2.1 32zm30.5-80L192 495.5c0 .3-.3.5-.5.5s-.5-.2-.5-.5L181.7 352zM162.1 48v-.6C161 30.4 174.5 16 191.5 16s30.5 14.4 29.4 31.4v.6zM47.5 96a16 16 0 1 0 32 0 16 16 0 1 0-32 0"
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
                  d="M222.5 48H56C25.1 48 0 73.1 0 104s25.1 56 56 56h16c22.3 0 41.6-13.1 50.6-32H288c8.8 0 16 7.2 16 16s-7.2 16-16 16h-69l-2.5 80H288c53 0 96-43 96-96s-43-96-96-96zm-55 192-2.5-80h-13c-53 0-96 43-96 96s43 96 96 96h104c8.8 0 16 7.2 16 16s-7.2 16-16 16h-44l-2.1 67.5-.4 12.5H256c53 0 96-43 96-96s-43-96-96-96H152c-8.8 0-16-7.2-16-16s7.2-16 16-16zm6.6 211.5L172 384h-36c-22.1 0-40 17.9-40 40s17.9 40 40 40h38.5zM64 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M222.6 43.2 223 32v-1.9c-.5-16.6-14.1-30-31-30s-30.5 13.4-31 30V32l.4 11.2.1 4.8h61zM215.5 272l4.5-144h-56l4.5 144zm-2.5 80h-42l3.1 99.5 1.4 43.5v1c.3 8.9 7.6 16 16.5 16s16.2-7.1 16.5-16v-1l1.4-43.5z"
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
