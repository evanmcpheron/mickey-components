import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChairOfficeIcon: React.FC<
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
                  d="M160 0h128c35.3 0 64 28.7 64 64v192H96V64c0-35.3 28.7-64 64-64M64 160v64c0 17.7-14.3 32-32 32S0 241.7 0 224v-64c0-17.7 14.3-32 32-32s32 14.3 32 32m384 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32M51.4 305.7C56.8 294.8 67.9 288 80 288h288c12.1 0 23.2 6.8 28.6 17.7l16 32c5 9.9 4.4 21.7-1.4 31.1S395.1 384 384 384H256v64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-64H64c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1z"
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
                  d="M288 48c8.8 0 16 7.2 16 16v160h48V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v160h48V64c0-8.8 7.2-16 16-16zM64 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24zm368 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24zM248 400h122.5c25.2 0 45.5-20.4 45.5-45.5 0-5.5-1-10.9-2.9-16l-19.2-51.3c-7-18.7-24.9-31.1-44.9-31.1H99.1c-20 0-37.9 12.4-44.9 31.1l-19.3 51.3c-1.9 5.1-2.9 10.5-2.9 16 0 25.1 20.4 45.5 45.5 45.5H200v64h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48zM99.1 304h249.8l18 48H81.1z"
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
                  d="M288 32c17.7 0 32 14.3 32 32v160h32V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v160h32V64c0-17.7 14.3-32 32-32zM64 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16zm352 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16zm-64 144 32 64H64l32-64zm-112 96h144c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-32-64c-5.4-10.9-16.5-17.7-28.6-17.7H96c-12.1 0-23.2 6.8-28.6 17.7l-32 64c-5 9.9-4.4 21.7 1.4 31.1S52.9 384 64 384h144v48h-16c-35.3 0-64 28.7-64 64 0 8.8 7.2 16 16 16s16-7.2 16-16c0-17.7 14.3-32 32-32h16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h16c17.7 0 32 14.3 32 32 0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3-28.7-64-64-64h-16z"
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
                  d="M288 16c26.5 0 48 21.5 48 48v192h16V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v192h16V64c0-26.5 21.5-48 48-48zM48 168c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8zm368 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8zM80 304h288c6.1 0 11.6 3.4 14.3 8.8l16 32c2.5 5 2.2 10.9-.7 15.6s-8.1 7.6-13.6 7.6H64c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6l16-32c2.7-5.4 8.3-8.8 14.3-8.8m152 80h152c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32c-5.4-10.9-16.5-17.7-28.6-17.7H80c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S52.9 384 64 384h152v64h-32c-30.9 0-56 25.1-56 56 0 4.4 3.6 8 8 8s8-3.6 8-8c0-22.1 17.9-40 40-40h32v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h32c22.1 0 40 17.9 40 40 0 4.4 3.6 8 8 8s8-3.6 8-8c0-30.9-25.1-56-56-56h-32z"
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
                  d="M160 0c-35.3 0-64 28.7-64 64v224h256V64c0-35.3-28.7-64-64-64zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h-64v64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 160c0-17.7-14.3-32-32-32S0 142.3 0 160v64c0 17.7 14.3 32 32 32s32-14.3 32-32zm384 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32zM80 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S52.9 384 64 384h320c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32c-5.4-10.9-16.5-17.7-28.6-17.7z"
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
