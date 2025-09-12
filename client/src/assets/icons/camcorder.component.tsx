import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CamcorderIcon: React.FC<
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
                  d="M128 96c-17.7 0-32 14.3-32 32v32h224c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-23.7 12.9-44.4 32-55.4V128c0-53 43-96 96-96h160c17.7 0 32 14.3 32 32s-14.3 32-32 32zm431.1 67.8c10.4 5.6 16.9 16.4 16.9 28.2v256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64-14.2-9.5V238.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6M80 224c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M96 120c0-22.1 17.9-40 40-40h160c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88 39.4-88 88v42c-27.6 7.1-48 32.2-48 62v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H96zm-32 88h256c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16m456.3 252.5c5.1 2.3 10.6 3.5 16.2 3.5 21.8 0 39.5-17.7 39.5-39.5v-209c0-21.8-17.7-39.5-39.5-39.5-5.6 0-11.1 1.2-16.2 3.5L416 226.4V279l112-50.4v182.8L416 361v52.6zM80 264c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H104c-13.3 0-24 10.7-24 24"
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
                  d="M96 112c0-26.5 21.5-48 48-48h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-44.2 0-80 35.8-80 80v48c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H96zm-16 80h240c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32zm440.3 268.5c5.1 2.3 10.6 3.5 16.2 3.5 21.8 0 39.5-17.7 39.5-39.5v-209c0-21.8-17.7-39.5-39.5-39.5-5.6 0-11.1 1.2-16.2 3.5L416 226.4v35.1l117.4-52.8c1-.4 2-.7 3.1-.7 4.2 0 7.5 3.4 7.5 7.5v209c0 4.2-3.4 7.5-7.5 7.5-1.1 0-2.1-.2-3.1-.7L416 378.5v35.1zM64 240c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16"
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
                  d="M64 104c0-30.9 25.1-56 56-56h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H120c-39.8 0-72 32.2-72 72v58c-27.6 7.1-48 32.2-48 62v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H64zm0 72h256c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V224c0-26.5 21.5-48 48-48m462.8 269.9L416 396.1v17.5l104.3 46.9c5.1 2.3 10.6 3.5 16.2 3.5 21.8 0 39.5-17.7 39.5-39.5v-209c0-21.8-17.7-39.5-39.5-39.5-5.6 0-11.1 1.2-16.2 3.5L416 226.4v17.5L526.8 194c3-1.4 6.3-2.1 9.7-2.1 13 0 23.5 10.5 23.5 23.5v209c0 13-10.5 23.5-23.5 23.5-3.3 0-6.6-.7-9.7-2.1zM64 248c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H72c-4.4 0-8 3.6-8 8"
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
                  d="M128 96c-17.7 0-32 14.3-32 32v32h224c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-23.7 12.9-44.4 32-55.4V128c0-53 43-96 96-96h160c17.7 0 32 14.3 32 32s-14.3 32-32 32zM80 224c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M559.1 163.8c10.4 5.6 16.9 16.4 16.9 28.2v256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6L384 379.8V260.2l142.2-94.8c9.8-6.5 22.4-7.2 32.9-1.6M80 224h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
