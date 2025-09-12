import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Square4Icon: React.FC<
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm191.6 33.2c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4"
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
                  d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm127.6 97.2c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4"
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
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm133.9 97.1c-8.2-3.3-17.5.7-20.8 8.9l-64 160c-2 4.9-1.4 10.5 1.6 14.9s7.9 7 13.2 7H256v48c0 8.8 7.2 16 16 16s16-7.2 16-16V320h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H151.6l55.2-138.1c3.3-8.2-.7-17.5-8.9-20.8"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm203 32.6c4.1 1.7 6 6.3 4.4 10.4l-67.5 165H272V200c0-4.4 3.6-8 8-8s8 3.6 8 8v104h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H128c-2.7 0-5.2-1.3-6.6-3.5s-1.8-5-.8-7.5l72-176c1.7-4.1 6.3-6 10.4-4.4"
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
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm191.6 33.2c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M206.8 159.6c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7z"
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
