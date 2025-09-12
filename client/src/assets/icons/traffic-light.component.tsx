import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrafficLightIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v288c0 88.4 71.6 160 160 160s160-71.6 160-160V64c0-35.3-28.7-64-64-64zm96 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96m48-176a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-80a48 48 0 1 1 0-96 48 48 0 1 1 0 96"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 48c-8.8 0-16 7.2-16 16v288c0 61.9 50.1 112 112 112s112-50.1 112-112V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v288c0 88.4-71.6 160-160 160S0 440.4 0 352zm160 360a48 48 0 1 1 0-96 48 48 0 1 1 0 96m48-168a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-72a48 48 0 1 1 0-96 48 48 0 1 1 0 96"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32c-17.7 0-32 14.3-32 32v288c0 70.7 57.3 128 128 128s128-57.3 128-128V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v288c0 88.4-71.6 160-160 160S0 440.4 0 352zm136 328a24 24 0 1 0 48 0 24 24 0 1 0-48 0m80 0a56 56 0 1 1-112 0 56 56 0 1 1 112 0m-56-160a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 80a56 56 0 1 1 0-112 56 56 0 1 1 0 112m-24-192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m80 0a56 56 0 1 1-112 0 56 56 0 1 1 112 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 16c-26.5 0-48 21.5-48 48v288c0 79.5 64.5 144 144 144s144-64.5 144-144V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v288c0 88.4-71.6 160-160 160S0 440.4 0 352zm120 328a40 40 0 1 0 80 0 40 40 0 1 0-80 0m96 0a56 56 0 1 1-112 0 56 56 0 1 1 112 0m-56-176a40 40 0 1 0 0 80 40 40 0 1 0 0-80m0 96a56 56 0 1 1 0-112 56 56 0 1 1 0 112m-40-192a40 40 0 1 0 80 0 40 40 0 1 0-80 0m96 0a56 56 0 1 1-112 0 56 56 0 1 1 112 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 32a48 48 0 1 0 0 96 48 48 0 1 0 0-96m0 128a48 48 0 1 0 0 96 48 48 0 1 0 0-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v288c0 88.4 71.6 160 160 160s160-71.6 160-160V64c0-35.3-28.7-64-64-64zm96 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96m48-176a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-80a48 48 0 1 1 0-96 48 48 0 1 1 0 96"
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
