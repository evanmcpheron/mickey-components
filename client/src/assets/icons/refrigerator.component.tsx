import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RefrigeratorIcon: React.FC<
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
                  d="M96 0C43 0 0 43 0 96v64h288v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V96c0-53-43-96-96-96zm288 192h-64v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V192H0v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64z"
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
                  d="M288 48c26.5 0 48 21.5 48 48v64h-48v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H48V96c0-26.5 21.5-48 48-48zm-48 160v136c0 13.3 10.7 24 24 24s24-10.7 24-24V208h48v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V208zM96 0C43 0 0 43 0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96z"
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
                  d="M288 32c35.3 0 64 28.7 64 64v64h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H32V96c0-35.3 28.7-64 64-64zm-32 160v176c0 8.8 7.2 16 16 16s16-7.2 16-16V192h64v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM96 0C43 0 0 43 0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96z"
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
                  d="M288 16c44.2 0 80 35.8 80 80v80h-96v-72c0-4.4-3.6-8-8-8s-8 3.6-8 8v72H16V96c0-44.2 35.8-80 80-80zm-32 176v184c0 4.4 3.6 8 8 8s8-3.6 8-8V192h96v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192zM0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96H96C43 0 0 43 0 96"
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
                  d="M288 160H0v32h288zm96 0h-64v32h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C43 0 0 43 0 96v64h288v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V96c0-53-43-96-96-96zm288 192h-64v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V192H0v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64z"
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
