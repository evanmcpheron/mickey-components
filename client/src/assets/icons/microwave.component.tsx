import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MicrowaveIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32H128c0 17.7-14.3 32-32 32s-32-14.3-32-32c-35.3 0-64-28.7-64-64zm96 56v176c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24m400-40c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-8.8-7.2-16-16-16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 80c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h352v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm368 104v208c0 13.3 10.7 24 24 24s24-10.7 24-24V136c0-13.3-10.7-24-24-24s-24 10.7-24 24m-312-8c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 64c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm-32 384v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16zm-16-320v224c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-8.8-7.2-16-16-16s-16 7.2-16 16M128 320V160h256v160zM96 152v176c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 48c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h416v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm432 72v272c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-4.4-3.6-8-8-8s-8 3.6-8 8m-392 24h304c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V136c0-4.4 3.6-8 8-8m-24 8v208c0 13.3 10.7 24 24 24h304c13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24H104c-13.3 0-24 10.7-24 24"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M120 128c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32H128c0 17.7-14.3 32-32 32s-32-14.3-32-32c-35.3 0-64-28.7-64-64zm96 56v176c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24m400-40c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-8.8-7.2-16-16-16"
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
