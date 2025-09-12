import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BagShoppingPlusIcon: React.FC<
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
                  d="M224 48c-35.3 0-64 28.7-64 64v48h128v-48c0-35.3-28.7-64-64-64M48 160h64v-48C112 50.1 162.1 0 224 0s112 50.1 112 112v48h64c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96V208c0-26.5 21.5-48 48-48m152 256c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h56z"
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
                  d="M160 112v48h128v-48c0-35.3-28.7-64-64-64s-64 28.7-64 64m-48 48v-48C112 50.1 162.1 0 224 0s112 50.1 112 112v48h64c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96V208c0-26.5 21.5-48 48-48zM48 416c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V208H48zm72-80c0-13.3 10.7-24 24-24h56v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56h-56c-13.3 0-24-10.7-24-24"
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
                  d="M160 96v32h128V96c0-35.3-28.7-64-64-64s-64 28.7-64 64m-32 32V96c0-53 43-96 96-96s96 43 96 96v32h80c26.5 0 48 21.5 48 48v240c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48zm16 32H48c-8.8 0-16 7.2-16 16v240c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V176c0-8.8-7.2-16-16-16H144m-16 160c0-8.8 7.2-16 16-16h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16"
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
                  d="M144 96v32h160V96c0-44.2-35.8-80-80-80s-80 35.8-80 80m-16 32V96c0-53 43-96 96-96s96 43 96 96v32h80c26.5 0 48 21.5 48 48v240c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48zm8 16H48c-17.7 0-32 14.3-32 32v240c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80V176c0-17.7-14.3-32-32-32H136m0 176c0-4.4 3.6-8 8-8h72v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v72h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-72c-4.4 0-8-3.6-8-8"
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
                  d="M0 208c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96zm120 128c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-56c-13.3 0-24 10.7-24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 48c-35.3 0-64 28.7-64 64v48h-48v-48C112 50.1 162.1 0 224 0s112 50.1 112 112v48h-48v-48c0-35.3-28.7-64-64-64M120 336c0-13.3 10.7-24 24-24h56v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56h-56c-13.3 0-24-10.7-24-24"
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
