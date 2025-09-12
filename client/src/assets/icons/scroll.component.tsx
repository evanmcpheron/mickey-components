import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ScrollIcon: React.FC<
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
                  d="M0 80v48c0 17.7 14.3 32 32 32h64V80c0-26.5-21.5-48-48-48S0 53.5 0 80m112-48c10 13.4 16 30 16 48v304c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96zm352 448c61.9 0 112-50.1 112-112 0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7v5.3c0 53-43 96-96 96h272"
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
                  d="M48 112c0-17.7 14.3-32 32-32s32 14.3 32 32v288c0 44.2 35.8 80 80 80h304c44.2 0 80-35.8 80-80v-48c0-26.5-21.5-48-48-48H272c-26.5 0-48 21.5-48 48v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V112c0-11.4-2.4-22.2-6.7-32H400c17.7 0 32 14.3 32 32v160h48V112c0-44.2-35.8-80-80-80H80C35.8 32 0 67.8 0 112v48c0 26.5 21.5 48 48 48h32v-48H48zm448 320H265.3c4.3-9.8 6.7-20.6 6.7-32v-48h260.2v48c0 17.7-14.3 32-32 32z"
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
                  d="M32 112c0-26.5 21.5-48 48-48s48 21.5 48 48v288c0 44.2 35.8 80 80 80h296c39.8 0 72-32.2 72-72v-56c0-22.1-18-40-40-40H296c-22.1 0-40 17.9-40 40v48c0 26.5-21.5 48-48 48s-48-21.5-48-48V112c0-18-6-34.6-16-48h256c26.5 0 48 21.5 48 48v176h32V112c0-44.2-35.8-80-80-80H80C35.8 32 0 67.8 0 112v72c0 22.1 17.9 40 40 40h56v-32H40c-4.4 0-8-3.6-8-8zm472 336H272c10-13.4 16-30 16-48v-48c0-4.4 3.6-8 8-8h234.8c4.4 0 8 3.6 8 8v56c0 22.1-17.9 40-40 40z"
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
                  d="M16 104c0-30.9 25.1-56 56-56s56 25.1 56 56v296c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80v-32c0-17.7-14.4-32-32-32H304c-17.7 0-32 14.3-32 32v32c0 35.3-28.7 64-64 64s-64-28.7-64-64V104c0-22.6-10.4-42.8-26.7-56H408c30.9 0 56 25.1 56 56v200h16V104c0-39.8-32.2-72-72-72H72C32.2 32 0 64.2 0 104v72c0 17.7 14.3 32 32 32h64v-16H32c-8.8 0-16-7.2-16-16zm480 360H256c19.4-14.6 32-37.8 32-64v-32c0-8.8 7.2-16 16-16h234.8c8.9 0 16 7.2 16 16v32c0 35.3-28.7 64-64 64z"
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
                  d="M128 96v304c0 44.2 35.8 80 80 80s80-35.8 80-80v-16c0-17.7 14.3-32 32-32h160V96c0-35.3-28.7-64-64-64H64c35.3 0 64 28.7 64 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 160H32c-17.7 0-32-14.3-32-32V96c0-35.3 28.7-64 64-64s64 28.7 64 64zm160 240v-16c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32 0 53-43 96-96 96H208c44.2 0 80-35.8 80-80"
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
