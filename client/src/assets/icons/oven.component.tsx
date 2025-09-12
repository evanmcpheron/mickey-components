import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OvenIcon: React.FC<
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
                  d="M0 96v64h448V96c0-53-43-96-96-96H96C43 0 0 43 0 96m56-16a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m16 200v192H64V256zM64 192H0v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V192H64m48 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M352 48c26.5 0 48 21.5 48 48v64H48V96c0-26.5 21.5-48 48-48zm48 160v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V208zM96 0C43 0 0 43 0 96v352c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96zm32 104a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M112 240c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm32 48h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M96 32c-35.3 0-64 28.7-64 64v64h384V96c0-35.3-28.7-64-64-64zM32 192v256c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V192zM0 96C0 43 43 0 96 0h256c53 0 96 43 96 96v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104-16a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M96 256v160h256V256zm-32 0c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm64 48c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16"
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
                  d="M96 16c-44.2 0-80 35.8-80 80v64h416V96c0-44.2-35.8-80-80-80zM0 168V96C0 43 43 0 96 0h256c53 0 96 43 96 96v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm432 8H16v272c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zM80 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0M96 240c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm64 40c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8"
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
                  d="M448 160v32H0v-32zM64 256h320v192H64zm32 48c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0h256c53 0 96 43 96 96v64H0V96C0 43 43 0 96 0M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M64 256v192h320V256zM0 192h448v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192"
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
